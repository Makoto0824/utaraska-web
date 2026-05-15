/**
 * カラベラ×漢字 Tシャツ特設ページの外部リンク・メディアパス。
 * 運用時はこのファイルのみ差し替えればよいです。
 */
export const CALAVERA_KANJI = {
  /** Amazon 商品ページ（カラベラドクロと漢字・JP ストアと同系統の短縮 URL） */
  amazonProductUrl: 'https://amzn.to/472hYKy',
  /** AIシンガー関連 / Instagram（コメント誘導先・着用リールと同一） */
  instagramUrl: 'https://www.instagram.com/reel/DYXP6bvBFWl/',
  /**
   * Instagram 着用イメージ（リール）
   */
  instagramWearImageUrl: 'https://www.instagram.com/reel/DYXP6bvBFWl/',
  /**
   * 自己ホスト音源（MP3 / OGG 等）
   * 配置先: `public/designshelf/calavera-kanji/audio/`
   * ファイル名を変えたらこのパスも合わせて変更
   */
  fullSongAudioSrc: '/designshelf/calavera-kanji/audio/music.mp3',
  /**
   * ヒーロー：AI シンガー映像 or キービジュアル（マイク前・着用イメージ）
   * 商品画像と同系の `40_skull/jp/` に配置（例: `mic-keyvisual-banner.png`）
   */
  heroSingerVisualSrc: '/designshelf/images/40_skull/jp/mic-keyvisual-banner.png',
  /** OGP / SNS（JPEG 推奨。専用カットに差し替え可） */
  openGraphImageSrc: '/designshelf/images/40_skull/jp/tshirt_model2.jpg',
} as const;
