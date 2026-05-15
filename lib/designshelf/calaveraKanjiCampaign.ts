/**
 * カラベラ×漢字 Tシャツ（Instagram 広告 LP）の外部リンク・メディアパス。
 * 運用時はこのファイルのみ差し替えればよいです。
 */
export const CALAVERA_KANJI_CAMPAIGN = {
  /** Amazon 商品ページ（カラベラドクロと漢字・JP ストアと同系統の短縮 URL） */
  amazonProductUrl: 'https://amzn.to/472hYKy',
  /** SAKI / キャンペーンの Instagram（コメント誘導先） */
  instagramUrl: 'https://www.instagram.com/utaraska/',
  /** デビュー曲フル視聴（YouTube / Spotify 等。未定のときは差し替え） */
  fullSongUrl: 'https://www.youtube.com/',
  /**
   * ヒーロー：AI シンガー映像 or キービジュアル（マイク前・着用イメージ）
   * 本番用 JPG に差し替える場合は同パスで `saki-hero.jpg` を配置するか、この定数を変更
   */
  heroSingerVisualSrc: '/designshelf/images/calavera-kanji-campaign/saki-hero.svg',
  /** ヒーロー付近：商品が一目でわかる着用・商品画像 */
  heroProductShirtSrc: '/designshelf/images/40_skull/jp/tshirt_model2.jpg',
  /** OGP / SNS（JPEG 推奨。専用カットは `og-saki-tshirt.jpg` に差し替え可） */
  openGraphImageSrc: '/designshelf/images/40_skull/jp/tshirt_model2.jpg',
} as const;
