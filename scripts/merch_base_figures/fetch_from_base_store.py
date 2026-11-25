#!/usr/bin/env python3
"""BASE ストアから商品画像を取得し baseFiguresCatalog.json を更新する。"""

from __future__ import annotations

import json
import re
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
CATALOG_JSON = REPO_ROOT / "lib" / "designshelf" / "baseFiguresCatalog.json"
IMAGES_ROOT = REPO_ROOT / "public" / "designshelf" / "images" / "toys" / "base"
LISTINGS = REPO_ROOT / "records" / "merch" / "base_figures_web_listings.csv"
STORE_BASE = "https://store.utaraska.co.jp/items"

UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
)


def fetch_html(item_id: str) -> str:
    req = urllib.request.Request(
        f"{STORE_BASE}/{item_id}",
        headers={"User-Agent": UA, "Accept-Language": "ja,en;q=0.9"},
    )
    with urllib.request.urlopen(req, timeout=45) as resp:
        return resp.read().decode("utf-8", "replace")


def extract_origin_images(html: str) -> list[str]:
    raw = re.findall(
        r"https://baseec-img-mng\.akamaized\.net/images/item/origin/[a-f0-9]+\.(?:png|jpg|jpeg)",
        html,
        flags=re.I,
    )
    seen: set[str] = set()
    ordered: list[str] = []
    for u in raw:
        if u not in seen:
            seen.add(u)
            ordered.append(u)
    return ordered


def guess_ext(url: str) -> str:
    m = re.search(r"\.(png|jpg|jpeg)(?:\?|$)", url, re.I)
    return (m.group(1).lower() if m else "jpg").replace("jpeg", "jpg")


def download(url: str, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as resp:
        dest.write_bytes(resp.read())


def main() -> int:
    catalog: list[dict] = json.loads(CATALOG_JSON.read_text(encoding="utf-8"))
    summary = {"ok": 0, "error": 0, "errors": []}

    for entry in catalog:
        item_id = entry["baseItemId"]
        asset_folder = f"base/{item_id}"
        out_dir = IMAGES_ROOT / item_id
        try:
            html = fetch_html(item_id)
            images = extract_origin_images(html)
            if not images:
                raise RuntimeError("no images found on item page")
            image_files: list[str] = []
            for i, url in enumerate(images):
                ext = guess_ext(url)
                fname = f"figure.{ext}" if i == 0 else f"photo-{i + 1}.{ext}"
                image_files.append(fname)
                download(url, out_dir / fname)
            entry["assetFolder"] = asset_folder
            entry["photoCount"] = len(images)
            entry["imageFiles"] = image_files
            entry["imagePending"] = False
            entry["baseUrlPending"] = False
            entry["storeUrl"] = f"{STORE_BASE}/{item_id}"
            summary["ok"] += 1
            print(f"ok {item_id} images={len(images)}")
            time.sleep(0.35)
        except Exception as exc:  # noqa: BLE001
            summary["error"] += 1
            summary["errors"].append({"baseItemId": item_id, "error": str(exc)})
            print(f"ERR {item_id}: {exc}", file=sys.stderr)

    CATALOG_JSON.write_text(json.dumps(catalog, ensure_ascii=False, indent=2), encoding="utf-8")

    if LISTINGS.is_file():
        import csv

        rows = list(csv.DictReader(LISTINGS.open(encoding="utf-8")))
        by_id = {r["base_item_id"]: r for r in rows}
        for entry in catalog:
            row = by_id.get(entry["baseItemId"])
            if not row:
                continue
            if not entry.get("imagePending"):
                row["image_status"] = "synced"
            if not entry.get("baseUrlPending"):
                row["base_url_status"] = "synced"
            err = next((e for e in summary["errors"] if e["baseItemId"] == entry["baseItemId"]), None)
            row["error"] = err["error"] if err else ""
        with LISTINGS.open("w", encoding="utf-8", newline="") as f:
            writer = csv.DictWriter(f, fieldnames=rows[0].keys())
            writer.writeheader()
            writer.writerows(rows)

    print(json.dumps(summary, ensure_ascii=False, indent=2))
    return 1 if summary["error"] else 0


if __name__ == "__main__":
    raise SystemExit(main())