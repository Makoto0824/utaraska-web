# ODD HOOPERS — Amazon Merch on Demand 登録

## ファイル

| パス | 内容 |
|------|------|
| `records/merch/odd_hoopers_amazon_jp.csv` | 商品文・Amazon URL の原本（title/bullet/description は変更しない） |
| `records/merch/odd_hoopers_listings.csv` | Amazon Merch 登録状況・重複防止用の台帳 |
| `records/merch/odd_hoopers_web_listings.csv` | utaraska odd（/odd）掲載状況 |
| `lib/designshelf/oddHoopersCatalog.ts` | サイト掲載用商品データ（文言は source CSV と一致） |
| `public/designshelf/images/odd_hoopers/*/amazon/*.png` | Merch 用アートワーク（4500×5400） |
| `public/designshelf/images/odd_hoopers/*/t_shirt.jpg` | utaraska odd 一覧用の着用画像 |
| `public/designshelf/images/odd_hoopers/*/design.png` | デザイン画（カルーセル2枚目） |

## コマンド

```bash
# 台帳を CSV・画像から再生成（登録済み status は保持）
python3 scripts/merch_odd_hoopers/init_listings.py

# utaraska odd への掲載検証・台帳更新（catalog.ts 追加後）
python3 scripts/merch_odd_hoopers/sync_utaraska_odd.py

# CSV の Amazon URL を oddHoopersCatalog.ts に反映
python3 scripts/merch_odd_hoopers/sync_catalog_amazon_from_csv.py

# ブラウザで Merch に登録（要: playwright install chromium）
python3 scripts/merch_odd_hoopers/register.py --headed
```

`register.py` は `--design-key odd-hoopers-0001` で1件のみ、`--dry-run` で入力内容の確認のみ可能です。

## 重複防止

- 台帳の `sha256`（アートワーク）と `status=registered` でスキップ
- 同一 `title` + `brand` が台帳に登録済みの場合もスキップ

## ログイン

Amazon Merch on Demand（https://merch.amazon.com）へ、**出品者アカウントでログイン**した状態で `register.py` を実行してください。初回は `--headed` 推奨です。