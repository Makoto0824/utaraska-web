/**
 * らくがきT LP の外部リンク・運用パラメータ。
 * フォームURL・規約URL・謝礼金額・OGP画像はこのファイルのみ差し替えればよいです。
 */
export const RAKUGAKI_T = {
  /** 応募フォーム（Googleフォーム等）— 未設定時は # */
  applicationFormUrl: '#',
  /** 利用規約ページ — 未設定時は # */
  termsUrl: '#',
  /** 採用謝礼（Amazonギフト券・円） */
  adoptionRewardYen: 1000,
  /** ヒーロー：Tシャツ着用イメージ（カルーセル・表示順） */
  heroTshirtImages: [
    '/designshelf/images/rakugaki/hero-tshirt1.png',
    '/designshelf/images/rakugaki/hero-tshirt2.png',
  ] as const,
  /** OGP / SNS 用画像（専用カットがあれば差し替え） */
  openGraphImageSrc: '/designshelf/images/rakugaki/hero-tshirt1.png',
  /** ヒーロー背景：散らす手描き装飾（doodle系・差し替え可） */
  doodleStickerImages: [
    '/designshelf/images/rakugaki/doodle-cat.png',
    '/designshelf/images/rakugaki/doodle-star.png',
    '/designshelf/images/rakugaki/doodle-rainbow.png',
    '/designshelf/images/rakugaki/doodle-pencil.png',
    '/designshelf/images/rakugaki/doodle-cloud.png',
  ] as const,
  /** ヒーロー背景：散らす手描き装飾（deco系・差し替え可） */
  heroDecorationImages: [
    '/designshelf/images/rakugaki/deco-sun.png',
    '/designshelf/images/rakugaki/deco-house.png',
    '/designshelf/images/rakugaki/doodle-star.png',
    '/designshelf/images/rakugaki/deco-squiggle.png',
    '/designshelf/images/rakugaki/deco-circle.png',
    '/designshelf/images/rakugaki/deco-triangle.png',
  ] as const,
} as const;
