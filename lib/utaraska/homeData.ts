export const PARTNER_LOGOS = [
  { src: '/images/logo/bs_fuji.png', alt: 'BSフジ' },
  { src: '/images/logo/ntv.png', alt: '日本テレビ' },
  { src: '/images/logo/tbs.png', alt: 'TBS' },
  { src: '/images/logo/tva.png', alt: 'テレビ朝日' },
  { src: '/images/logo/gmo.png', alt: 'GMOメディア' },
] as const;

export const SERVICES = [
  {
    number: '01',
    title: 'イラスト制作',
    lead: '番組・映像・プロモーション向けのビジュアル',
    body: 'クイズ、解説、キャラクターなど、放送や配信で使えるイラスト・キャラクターデザインを制作します。オンエアに耐える品質と、番組のテンポに合わせた納品を心がけています。',
  },
  {
    number: '02',
    title: 'ゲーム・アプリ開発',
    lead: '企画からリリースまで伴走',
    body: 'モバイルアプリやブラウザゲームの企画・開発、自社タイトルのリリース・運営まで対応します。イラスト資産から実装まで一つの窓口で相談いただけます。',
  },
  {
    number: '03',
    title: 'AI活用・プロトタイプ制作',
    lead: '小さく試して、早く形にする',
    body: 'AIやモダンな開発手法を取り入れ、試作や実装の工程を効率化。外注の段階を減らし、イラストから実装まで一体で進められる体制が強みです。',
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'お問い合わせ',
    body: 'イラスト・ゲーム・試作など、要件が固まっていなくても構いません。まずはお気軽にご相談ください。',
  },
  {
    step: '02',
    title: 'プラン提案',
    body: '内容に沿ったスケジュールとお見積りをご提案します。小規模チームならではの柔軟な進め方もご相談可能です。',
  },
  {
    step: '03',
    title: '制作・リリース',
    body: 'イラストは納品、ゲームはテストプレイを経てリリースまで伴走。必要に応じて公開後の調整も対応します。',
  },
] as const;

export type WorkCase = {
  id: string;
  client: string;
  clientShort: string;
  value: string;
  projects: { name: string; role: string }[];
  images: { src: string; alt: string }[];
};

export const WORK_CASES: WorkCase[] = [
  {
    id: 'bs-fuji',
    client: 'BSフジ',
    clientShort: 'BS',
    value: 'クイズ番組の視認性とテンポに合わせたイラスト制作',
    projects: [{ name: 'クイズ脳ベルSHOW', role: '番組内クイズ用イラスト担当' }],
    images: [
      { src: '/images/bs_fuji_1.jpg', alt: 'BSフジ作品1' },
      { src: '/images/bs_fuji_2.jpg', alt: 'BSフジ作品2' },
      { src: '/images/bs_fuji_3.jpg', alt: 'BSフジ作品3' },
      { src: '/images/bs_fuji_4.jpg', alt: 'BSフジ作品4' },
      { src: '/images/bs_fuji_5.png', alt: 'BSフジ作品5' },
      { src: '/images/bs_fuji_6.png', alt: 'BSフジ作品6' },
      { src: '/images/bs_fuji_7.png', alt: 'BSフジ作品7' },
      { src: '/images/bs_fuji_8.png', alt: 'BSフジ作品8' },
    ],
  },
  {
    id: 'tbs',
    client: 'TBS',
    clientShort: 'TB',
    value: 'バラエティ番組の世界観を補強するビジュアル',
    projects: [
      { name: 'がっちりマンデー', role: '番組内イラスト担当' },
      { name: '私が女優になる日', role: '番組内イラスト担当' },
    ],
    images: [
      { src: '/images/tbs_1.jpg', alt: 'TBS作品1' },
      { src: '/images/tbs_2.jpg', alt: 'TBS作品2' },
      { src: '/images/tbs_3.png', alt: 'TBS作品3' },
      { src: '/images/tbs_4.png', alt: 'TBS作品4' },
      { src: '/images/tbs_5.png', alt: 'TBS作品5' },
      { src: '/images/tbs_6.png', alt: 'TBS作品6' },
    ],
  },
  {
    id: 'ntv',
    client: '日本テレビ',
    clientShort: 'NT',
    value: '情報量の多い番組でも伝わる解説・演出用イラスト',
    projects: [
      { name: '霜降り風磨のワクワク経済', role: '番組内イラスト担当' },
      { name: 'THE突破ファイル', role: '番組内イラスト担当' },
      { name: '有吉ゼミ', role: '番組内イラスト担当' },
      { name: '人生が変わる1分間の深イイ話', role: '番組内イラスト担当' },
      { name: 'エンタの神様', role: '番組内イラスト担当' },
      { name: '世界まる見え！特捜部', role: '番組内イラスト担当' },
    ],
    images: [
      { src: '/images/ntv_1.jpg', alt: '日本テレビ作品1' },
      { src: '/images/ntv_2.jpg', alt: '日本テレビ作品2' },
    ],
  },
  {
    id: 'tva',
    client: 'テレビ朝日',
    clientShort: 'TA',
    value: '番組の見せ方に合わせたイラスト・ビジュアル',
    projects: [
      { name: '10万円でできるかな', role: '番組内イラスト担当' },
      { name: '帰れマンデーみっけ隊！！', role: '番組内イラスト担当' },
    ],
    images: [
      { src: '/images/tva_1.png', alt: 'テレビ朝日作品1' },
      { src: '/images/tva_2.png', alt: 'テレビ朝日作品2' },
    ],
  },
];

export const COMPANY_INFO = {
  name: 'utaraska合同会社（ウタラスカ）',
  representative: '平澤 誠',
  address: '〒150-0043\n東京都渋谷区道玄坂1丁目10番8号\n渋谷道玄坂東急ビル2F−C',
  founded: '2021年4月1日',
  email: 'contact@utaraska.co.jp',
  xUrl: 'https://x.com/utaraska',
} as const;
