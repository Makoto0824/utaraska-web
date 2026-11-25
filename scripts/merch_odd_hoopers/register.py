#!/usr/bin/env python3
"""
Amazon Merch on Demand へ ODD HOOPERS の T シャツを登録する（Playwright）。

事前に init_listings.py を実行し、ブラウザで merch.amazon.com にログインできる状態にしてください。
"""

from __future__ import annotations

import argparse
import sys
import time
from pathlib import Path

from lib import REPO_ROOT, jst_now_iso, pending_listings, read_listings, update_listing

MERCH_NEW_URL = "https://merch.amazon.com/designs/new"


def ensure_playwright():
    try:
        from playwright.sync_api import sync_playwright  # noqa: PLC0415
    except ImportError as exc:
        print(
            "playwright が未インストールです: pip install playwright && playwright install chromium",
            file=sys.stderr,
        )
        raise SystemExit(1) from exc
    return sync_playwright


def is_duplicate_in_ledger(row: dict[str, str]) -> bool:
    title = row["title"]
    brand = row["brand"]
    for other in read_listings():
        if other["design_key"] == row["design_key"]:
            continue
        if other.get("status") == "registered" and other.get("title") == title and other.get("brand") == brand:
            return True
    return False


def register_one(page, row: dict[str, str], *, dry_run: bool) -> None:
    design_key = row["design_key"]
    artwork = REPO_ROOT / row["image_path"]
    if not artwork.is_file():
        raise FileNotFoundError(artwork)

    if row.get("status") == "registered":
        print(f"[skip] {design_key} already registered")
        return
    if is_duplicate_in_ledger(row):
        update_listing(
            design_key,
            status="skipped_duplicate",
            error="duplicate_title_brand_in_ledger",
            notes="台帳上ですでに同一 title+brand が登録済み",
        )
        print(f"[skip] {design_key} duplicate title+brand")
        return

    page.goto(MERCH_NEW_URL, wait_until="domcontentloaded", timeout=120_000)
    page.wait_for_timeout(2000)

    if "signin" in page.url.lower() or "ap/signin" in page.url:
        raise RuntimeError(
            "Amazon へ未ログインです。ブラウザで merch.amazon.com にログインしてから再実行してください。"
        )

    # 製品タイプ: Standard T-shirt（UI は変更されることがある）
    tshirt = page.get_by_role("button", name="Standard t-shirt")
    if tshirt.count() == 0:
        tshirt = page.get_by_text("Standard t-shirt", exact=False)
    if tshirt.count() > 0:
        tshirt.first.click(timeout=30_000)
        page.wait_for_timeout(1500)

    file_input = page.locator('input[type="file"]').first
    if file_input.count() == 0:
        raise RuntimeError("アップロード用 input[type=file] が見つかりません")

    if dry_run:
        print(f"[dry-run] {design_key} would upload {artwork}")
        return

    file_input.set_input_files(str(artwork))
    page.wait_for_timeout(3000)

    def fill_if_present(selectors: list[str], value: str) -> bool:
        for sel in selectors:
            loc = page.locator(sel)
            if loc.count() == 0:
                continue
            target = loc.first
            if target.is_visible():
                target.fill(value)
                return True
        return False

    fill_if_present(
        [
            'input[placeholder*="Brand" i]',
            'input[name*="brand" i]',
            "#brand-name",
        ],
        row["brand"],
    )
    fill_if_present(
        [
            'input[placeholder*="Title" i]',
            'input[name*="title" i]',
            "#design-title",
        ],
        row["title"],
    )

    bullets = [row["bullet_1"], row["bullet_2"]]
    bullet_areas = page.locator('textarea[placeholder*="bullet" i], textarea[name*="bullet" i]')
    for i in range(min(bullet_areas.count(), len(bullets))):
        bullet_areas.nth(i).fill(bullets[i])

    fill_if_present(
        [
            'textarea[placeholder*="Description" i]',
            'textarea[name*="description" i]',
            "#design-description",
        ],
        row["description"],
    )

    # 日本マーケット（ラベルはアカウント設定により異なる）
    jp_toggle = page.get_by_label("Amazon.co.jp", exact=False)
    if jp_toggle.count() > 0:
        jp_toggle.first.check(force=True)

    # 公開前の待機（プレビュー生成）
    page.wait_for_timeout(5000)

    publish = page.get_by_role("button", name="Publish", exact=False)
    if publish.count() == 0:
        publish = page.get_by_role("button", name="Save and publish", exact=False)
    if publish.count() == 0:
        publish = page.get_by_role("button", name="Submit", exact=False)

    if publish.count() == 0:
        raise RuntimeError("Publish / Submit ボタンが見つかりません（入力不足または UI 変更）")

    publish.first.click(timeout=60_000)
    page.wait_for_timeout(8000)

    update_listing(
        design_key,
        status="registered",
        error="",
        registered_at=jst_now_iso(),
        notes="register.py automated submit",
    )
    print(f"[ok] {design_key} submitted")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--design-key", action="append", dest="design_keys")
    parser.add_argument("--headed", action="store_true", help="ブラウザを表示")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--slow", type=int, default=0, help="各操作後の待機ミリ秒")
    args = parser.parse_args()

    targets = pending_listings()
    if args.design_keys:
        keys = set(args.design_keys)
        targets = [r for r in read_listings() if r["design_key"] in keys]

    if not targets:
        print("登録対象がありません（すべて registered / skipped_duplicate の可能性）")
        return

    sync_playwright = ensure_playwright()
    user_data = REPO_ROOT / ".merch-playwright-profile"
    user_data.mkdir(parents=True, exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch_persistent_context(
            str(user_data),
            headless=not args.headed,
            locale="ja-JP",
        )
        page = browser.pages[0] if browser.pages else browser.new_page()
        try:
            for row in targets:
                try:
                    register_one(page, row, dry_run=args.dry_run)
                except Exception as exc:  # noqa: BLE001
                    update_listing(
                        row["design_key"],
                        status="error",
                        error=str(exc)[:500],
                    )
                    print(f"[error] {row['design_key']}: {exc}", file=sys.stderr)
                if args.slow:
                    time.sleep(args.slow / 1000)
        finally:
            browser.close()


if __name__ == "__main__":
    main()