#!/usr/bin/env python3
"""odd_hoopers_amazon_jp.csv と画像を検証し、utaraska odd 掲載台帳を更新する。"""

from __future__ import annotations

import csv
import json
import sys
from pathlib import Path

from lib import (
    IMAGE_FILENAME_TO_DIR,
    IMAGES_ROOT,
    SOURCE_CSV,
    jst_now_iso,
    resolve_artwork_path,
)

REPO_ROOT = Path(__file__).resolve().parents[2]
WEB_LISTINGS_CSV = REPO_ROOT / "records" / "merch" / "odd_hoopers_web_listings.csv"
CATALOG_TS = REPO_ROOT / "lib" / "designshelf" / "oddHoopersCatalog.ts"

WEB_FIELDS = [
    "design_key",
    "product_id",
    "image_filename",
    "utaraska_odd_status",
    "error",
    "registered_at",
    "notes",
]

# odd-hoopers-0001 → 277
PRODUCT_ID_BASE = 277


def design_key_for_index(i: int) -> str:
    return f"odd-hoopers-{i:04d}"


def product_id_for_index(i: int) -> int:
    return PRODUCT_ID_BASE + i - 1


def load_source_rows() -> list[dict[str, str]]:
    if not SOURCE_CSV.is_file():
        raise FileNotFoundError(f"missing source csv: {SOURCE_CSV}")
    with SOURCE_CSV.open(encoding="utf-8", newline="") as f:
        reader = csv.DictReader(f)
        rows = list(reader)
    if not rows:
        raise ValueError("source csv has no data rows")
    return rows


def load_web_listings() -> dict[str, dict[str, str]]:
    if not WEB_LISTINGS_CSV.is_file():
        return {}
    with WEB_LISTINGS_CSV.open(encoding="utf-8", newline="") as f:
        reader = csv.DictReader(f)
        return {row["design_key"]: row for row in reader if row.get("design_key")}


def validate_catalog_ts_against_source(rows: list[dict[str, str]]) -> list[str]:
    """カタログ TS に CSV 文言がそのまま載っているか簡易検証。"""
    errors: list[str] = []
    if not CATALOG_TS.is_file():
        errors.append(f"missing catalog: {CATALOG_TS}")
        return errors
    text = CATALOG_TS.read_text(encoding="utf-8")
    for i, row in enumerate(rows, start=1):
        title = row["title"]
        if title not in text:
            errors.append(f"catalog ts missing title for row {i}: {title[:40]}...")
    return errors


def sync_web_listings(rows: list[dict[str, str]], dry_run: bool = False) -> dict:
    existing = load_web_listings()
    out_rows: list[dict[str, str]] = []
    summary = {"registered": 0, "skipped_registered": 0, "error": 0, "errors": []}

    for i, row in enumerate(rows, start=1):
        image_filename = row["image_filename"]
        design_key = design_key_for_index(i)
        product_id = str(product_id_for_index(i))
        prev = existing.get(design_key, {})

        if prev.get("utaraska_odd_status") == "registered" and prev.get("product_id") == product_id:
            out_rows.append(prev)
            summary["skipped_registered"] += 1
            continue

        error = ""
        try:
            if image_filename not in IMAGE_FILENAME_TO_DIR:
                raise KeyError(f"unknown image_filename: {image_filename}")
            folder = IMAGES_ROOT / IMAGE_FILENAME_TO_DIR[image_filename]
            design = folder / "design.png"
            tshirt = folder / "t_shirt.jpg"
            if not design.is_file():
                raise FileNotFoundError(f"missing design.png: {design}")
            if not tshirt.is_file():
                raise FileNotFoundError(f"missing t_shirt.jpg: {tshirt}")
            resolve_artwork_path(image_filename)
            catalog_errors = validate_catalog_ts_against_source([row])
            if catalog_errors:
                raise RuntimeError("; ".join(catalog_errors))
            status = "registered"
            registered_at = jst_now_iso()
            summary["registered"] += 1
        except Exception as exc:  # noqa: BLE001
            status = "error"
            error = str(exc)
            registered_at = prev.get("registered_at", "")
            summary["error"] += 1
            summary["errors"].append({"design_key": design_key, "error": error})

        out_rows.append(
            {
                "design_key": design_key,
                "product_id": product_id,
                "image_filename": image_filename,
                "utaraska_odd_status": status,
                "error": error,
                "registered_at": registered_at if status == "registered" else prev.get("registered_at", ""),
                "notes": prev.get("notes", ""),
            }
        )

    if not dry_run:
        WEB_LISTINGS_CSV.parent.mkdir(parents=True, exist_ok=True)
        with WEB_LISTINGS_CSV.open("w", encoding="utf-8", newline="") as f:
            writer = csv.DictWriter(f, fieldnames=WEB_FIELDS)
            writer.writeheader()
            writer.writerows(out_rows)

    summary["total"] = len(rows)
    return summary


def main() -> int:
    dry_run = "--dry-run" in sys.argv
    try:
        rows = load_source_rows()
        summary = sync_web_listings(rows, dry_run=dry_run)
        print(json.dumps(summary, ensure_ascii=False, indent=2))
        return 1 if summary["error"] else 0
    except Exception as exc:  # noqa: BLE001
        print(json.dumps({"fatal": str(exc)}, ensure_ascii=False), file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())