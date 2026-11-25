#!/usr/bin/env python3
"""CSV と画像から listings 台帳を同期する。"""

from __future__ import annotations

import sys

from lib import SOURCE_CSV, summary_json, sync_listings_from_source

if __name__ == "__main__":
    if not SOURCE_CSV.is_file():
        print(f"missing source csv: {SOURCE_CSV}", file=sys.stderr)
        sys.exit(1)
    sync_listings_from_source(preserve_status=True)
    print(summary_json())