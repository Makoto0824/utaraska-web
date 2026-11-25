#!/usr/bin/env python3
"""odd_hoopers_amazon_jp.csv の Amazon URL を oddHoopersCatalog.ts に反映（文言は触らない）。"""

from __future__ import annotations

import csv
import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
SOURCE_CSV = REPO_ROOT / "records" / "merch" / "odd_hoopers_amazon_jp.csv"
CATALOG_TS = REPO_ROOT / "lib" / "designshelf" / "oddHoopersCatalog.ts"


def main() -> int:
    text = CATALOG_TS.read_text(encoding="utf-8")
    updated = 0
    with SOURCE_CSV.open(encoding="utf-8", newline="") as f:
        for row in csv.DictReader(f):
            fn = row.get("image_filename", "").strip()
            url = (row.get("Amazon URL") or row.get("amazon_url") or "").strip()
            if not fn or not url:
                continue
            pattern = rf"(imageFilename: '{re.escape(fn)}',[\s\S]*?amazonUrl: )'(?:[^'\\]|\\.)*'"
            text, n = re.subn(pattern, rf"\1'{url}'", text, count=1)
            if n != 1:
                print(f"warning: could not update amazonUrl for {fn}", file=sys.stderr)
                continue
            updated += 1
    CATALOG_TS.write_text(text, encoding="utf-8")
    print(f"updated {updated} amazonUrl field(s) in {CATALOG_TS.relative_to(REPO_ROOT)}")
    return 0 if updated else 1


if __name__ == "__main__":
    raise SystemExit(main())