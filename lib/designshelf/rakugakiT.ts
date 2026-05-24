/**
 * 落書きT LP の外部リンク・運用パラメータ。
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
} as const;
