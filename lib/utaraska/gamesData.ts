export type AppStoreGame = {
  id: string;
  number: string;
  title: string;
  platform: string;
  tagline: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
  storeUrl: string;
};

export type KantanGame = {
  href: string;
  title: string;
  genre: string;
  iconSrc: string;
  iconAlt: string;
};

export const APP_STORE_GAMES: AppStoreGame[] = [
  {
    id: 'color-face-blast',
    number: '01',
    title: 'Color Face Blast',
    platform: 'iPhone / iPad（App Store）・無料',
    tagline: '持って置いて揃えて消す。スキマ時間に',
    description:
      'トレイから形付きピースを盤面の空きマスへ置き、横一列または縦一列がそろうとライン消去でスコア。同時に複数本消すとボーナス、連続成功でコンボ追加。ミッション色をライン消しに含めると制限時間が延びます。置けなくなったら、または時間切れでゲームオーバー。',
    iconSrc: '/games/color-face-blast-icon.png',
    iconAlt: 'Color Face Blastのアプリアイコン。4×4のグリッドに並んだカラフルな顔つきのブロック。',
    storeUrl: 'https://apps.apple.com/jp/app/color-face-blast/id6764055218',
  },
  {
    id: 'color-face-sort',
    number: '02',
    title: 'カラーフェイスソート',
    platform: 'iPhone / iPad（App Store）・無料',
    tagline: 'サクッと遊べるボトル整理ゲーム',
    description:
      '出し元と移し先のボトルを順にタップして、同色をまとめて移動。1本最大4個、空か先頭と同色のときだけ注げます。同色で1本を満たすとスコア＆時間回復、連続でコンボ倍率アップ。タイムアップまで高得点を狙うパズルです。',
    iconSrc: '/games/color-face-sort-icon.png',
    iconAlt: 'カラーフェイスソートのアプリアイコン。3列のボトルに並んだカラフルな顔つきのキャラクター。',
    storeUrl:
      'https://apps.apple.com/jp/app/%E3%82%AB%E3%83%A9%E3%83%BC%E3%83%95%E3%82%A7%E3%82%A4%E3%82%B9%E3%82%BD%E3%83%BC%E3%83%88/id6762062157',
  },
  {
    id: 'yusha-o-sagase',
    number: '03',
    title: '勇者を探せ',
    platform: 'iPhone / iPad（App Store）・無料',
    tagline: '制限時間内に該当の勇者を見つける',
    description:
      '「探す勇者」を確認し、キャラの中から該当する勇者をタップ。制限時間内に高得点を目指す探しゲームです。見つけた勇者は図鑑に記録されます。',
    iconSrc: '/games/yusha-o-sagase-icon.png',
    iconAlt: '勇者を探せのアプリアイコン。黄色い頭飾りと青い服の勇者キャラクター。',
    storeUrl: 'https://apps.apple.com/jp/app/%E5%8B%87%E8%80%85%E3%82%92%E6%8E%A2%E3%81%9B/id6761643482',
  },
  {
    id: 'echo-gift',
    number: '04',
    title: 'Echo Gift',
    platform: 'iPhone / iPad（App Store）・無料',
    tagline: '声をワケルン、魔法少女',
    description:
      'マイクで声を録音し、137体のおじさんに「ワケルン」（割り当て）。ワールドを歩いて声を聞き、図鑑を埋めるサウンド育成ゲームです。',
    iconSrc: '/games/echo-gift-icon.png',
    iconAlt: 'Echo Giftのアプリアイコン。グラデーションのロゴと音符・ハートの装飾。',
    storeUrl: 'https://apps.apple.com/jp/app/echo-gift/id6760299223',
  },
];

export const KANTAN_GAMES: KantanGame[] = [
  {
    href: 'https://kantan.game/easygame/game/647',
    title: 'アニマル マージ パズル',
    genre: 'パズル',
    iconSrc: '/games/kgb-animal-merge-puzzle.png',
    iconAlt: 'アニマル マージ パズルのロゴ',
  },
  {
    href: 'https://kantan.game/easygame/game/703',
    title: 'ダッシュんゴー / DASHN GO',
    genre: 'アクション',
    iconSrc: '/games/kgb-dashn-go.png',
    iconAlt: 'ダッシュんゴー / DASHN GO のアイコン',
  },
  {
    href: 'https://kantan.game/easygame/game/737',
    title: 'スライドラッシュ / SLIDE RUSH',
    genre: 'パズル',
    iconSrc: '/games/kgb-slide-rush.png',
    iconAlt: 'スライドラッシュ / SLIDE RUSH のアイコン',
  },
  {
    href: 'https://kantan.game/easygame/game/744',
    title: 'キャッチ フィッシュ',
    genre: 'アクション',
    iconSrc: '/games/kgb-catch-fish.png',
    iconAlt: 'キャッチ フィッシュ のアイコン',
  },
  {
    href: 'https://kantan.game/easygame/game/749',
    title: 'アルティメット バッター',
    genre: 'スポーツ',
    iconSrc: '/games/kgb-ultimate-batter.png',
    iconAlt: 'アルティメット バッターのアイコン',
  },
  {
    href: 'https://kantan.game/easygame/game/762',
    title: 'おっさんを探せ',
    genre: 'クイズ',
    iconSrc: '/games/kgb-ossan-o-sagase.png',
    iconAlt: 'おっさんを探せのアイコン',
  },
  {
    href: 'https://kantan.game/easygame/game/769',
    title: 'サバイバークエスト',
    genre: 'アクション',
    iconSrc: '/games/kgb-survival-quest.png',
    iconAlt: 'サバイバークエストのアイコン',
  },
  {
    href: 'https://kantan.game/easygame/game/781',
    title: 'カラーフェイスソート',
    genre: 'パズル',
    iconSrc: '/games/kgb-color-face-sort-kantan.png',
    iconAlt: 'かんたんゲームボックス版カラーフェイスソートのアイコン',
  },
];
