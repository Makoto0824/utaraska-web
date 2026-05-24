# 下北沢 JPYC スポンサー募集デッキ（HTML / PDF）

12枚構成。ブラウザ投影用 **reveal.js** と、配布用 **Marp → PDF** の2系統です。

| ファイル | 用途 |
|----------|------|
| [`index.html`](./index.html) | reveal.js スライド（ローカル投影・全画面） |
| [`reveal-theme.css`](./reveal-theme.css) | reveal 用カスタムテーマ |
| [`deck.marp.md`](./deck.marp.md) | PDF 生成用 Markdown（編集ソース） |
| [`marp-theme.css`](./marp-theme.css) | Marp 用テーマ（reveal と同系の配色） |
| [`shimokitazawa_jpyc_sponsor_2026.pdf`](./shimokitazawa_jpyc_sponsor_2026.pdf) | `npm run deck:shimokitazawa-jpyc:pdf` で生成 |

## ローカルで HTML を見る

プロジェクト直下で:

```bash
npm run deck:shimokitazawa-jpyc:html
```

または Finder / ブラウザで `index.html` を開く。

**操作:** 矢印キー / スペースで送り、**F** で全画面。

## PDF を書き出す

```bash
npm run deck:shimokitazawa-jpyc:pdf
```

文言を直すときは **`deck.marp.md`** を編集 → 上記コマンドで PDF を再生成。  
HTML 側も合わせて直す場合は **`index.html`** を更新（または今後 Markdown から HTML を生成する運用に統一）。

## 関連

- 構成メモ: [`shimokitazawa_jpyc_sponsor_slide_structure_2026.md`](../shimokitazawa_jpyc_sponsor_slide_structure_2026.md)
