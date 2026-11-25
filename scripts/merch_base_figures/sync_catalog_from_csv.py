#!/usr/bin/env python3
"""records/merch/base_figures.csv から baseFiguresCatalog.json と掲載台帳を再生成する。"""

from __future__ import annotations

import csv
import json
import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
SRC = REPO_ROOT / "records" / "merch" / "base_figures.csv"
OUT_JSON = REPO_ROOT / "lib" / "designshelf" / "baseFiguresCatalog.json"
LISTINGS = REPO_ROOT / "records" / "merch" / "base_figures_web_listings.csv"
ID_START = 287


def fmt_price(raw: str) -> int:
    return int(str(raw).replace(",", "").strip())


def feature_pair(desc: str) -> tuple[str, str]:
    parts = [p.strip() for p in re.split(r"\n\s*\n", desc) if p.strip()]
    if len(parts) >= 2:
        return parts[0], parts[1]
    if parts:
        return parts[0], parts[0]
    return "", ""


def main() -> int:
    if not SRC.is_file():
        print(f"missing {SRC}", file=sys.stderr)
        return 2
    rows = list(csv.DictReader(SRC.open(encoding="utf-8")))
    catalog = []
    listings = []
    for i, r in enumerate(rows):
        pid = ID_START + i
        base_id = r["商品ID"].strip()
        desc = r["説明"]
        f1, f2 = feature_pair(desc)
        catalog.append(
            {
                "id": pid,
                "designKey": f"base-figure-{base_id}",
                "baseItemId": base_id,
                "title": r["商品名"].strip(),
                "priceYen": fmt_price(r["価格"]),
                "description": desc,
                "features": [f1, f2],
                "hasBallChain": "ボールチェーン" in r["商品名"],
                "imagePending": True,
                "baseUrlPending": True,
            }
        )
        listings.append(
            {
                "design_key": f"base-figure-{base_id}",
                "product_id": str(pid),
                "base_item_id": base_id,
                "utaraska_odd_status": "registered",
                "image_status": "pending",
                "base_url_status": "pending",
                "error": "",
                "notes": "",
            }
        )
    OUT_JSON.write_text(json.dumps(catalog, ensure_ascii=False, indent=2), encoding="utf-8")
    with LISTINGS.open("w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(
            f,
            fieldnames=[
                "design_key",
                "product_id",
                "base_item_id",
                "utaraska_odd_status",
                "image_status",
                "base_url_status",
                "error",
                "notes",
            ],
        )
        writer.writeheader()
        writer.writerows(listings)
    print(json.dumps({"rows": len(catalog), "id_range": [ID_START, ID_START + len(catalog) - 1]}, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())