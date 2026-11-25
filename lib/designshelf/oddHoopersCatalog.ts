/** ODD HOOPERS — utaraska odd 掲載用（文言は records/merch/odd_hoopers_amazon_jp.csv と一致） */

export type OddHooperCatalogEntry = {
  id: number;
  designKey: string;
  imageFilename: string;
  folder: string;
  brand: string;
  title: string;
  bullet1: string;
  bullet2: string;
  description: string;
  /** Amazon 商品 URL（未定のときは空文字） */
  amazonUrl: string;
};

const TSHIRT_PRICE = '¥2,300';

/** image_filename → public/designshelf/images/odd_hoopers 配下のフォルダ名 */
export const ODD_HOOPERS_IMAGE_DIR: Record<string, string> = {
  'basketball_cat.png': 'basketball_cat',
  'basketball_pirates1.png': 'basketball_pirates1',
  'basketball_pirates2.png': 'basketball_pirates2',
  'do_you_love.png': 'do_you_love',
  'ninja_basketball1.png': 'ninja_basketball1',
  'ninja_basketball2.png': 'ninja_basketball2',
  'panda_in_ball.png': 'panda_in_ball',
  'pandunk.png': 'pandunk',
  'slam_pandunk1.png': 'slampandunk1',
  'slam_pandunk2.png': 'slampandunk2',
};

export const ODD_HOOPERS_CATALOG: OddHooperCatalogEntry[] = [
  {
    id: 277,
    designKey: 'odd-hoopers-0001',
    imageFilename: 'basketball_cat.png',
    folder: 'basketball_cat',
    brand: 'ODD HOOPERS',
    title: 'バスケ 黒猫 バスケットボール かわいい猫 アニマルイラスト',
    bullet1:
      '大きな黄色い目をした黒猫がバスケットボールを抱える、かわいくてユニークなオリジナルイラスト。猫好きとバスケ好きの両方に楽しめるデザインです。',
    bullet2:
      'バスケットボールが好きな男性、女性、子供、バスケ部の仲間に。普段着やスポーツ観戦、バスケの練習に出かける日のコーディネートにも。',
    description:
      'バスケットボールと黒猫を組み合わせた、遊び心のあるアニマルデザイン。黄色い目とオレンジ色のバスケットボールが印象的なイラストです。猫好きの方やバスケットボールファン、かわいいスポーツイラストが好きな方におすすめです。',
    amazonUrl: 'https://www.amazon.co.jp/dp/B0HSWFV7TJ?dib=eyJ2IjoiMSJ9.4Cg3tnO8W95IHDFRCFl5edkIhC6YjZbY_M8WFE8UrfUWzytcXIZBAf3LLjsl_X1whfphgZpLquLsBQg3yMfTViAU8ZSHCXOmoNpb2ZtgY0i4EcEZXu-wceEQJhfIoAQ86DEzfWMum4jLLnK9K4P6uQ.QgMg87VC4e1MzFuiS-TC6pJDYUTC0j-FEWyrdE5uAN0&dib_tag=se&qid=1795646046&refinements=p_4%3AODD%2BHOOPERS&s=apparel&sr=1-2&customId=B0FJL1Q6SD&customizationToken=MC_Assembly_1%23B0FJL1Q6SD&th=1&psc=1&linkCode=ll2&tag=designshelf-22&linkId=fb1cf0d3c7ee3cb24eea69a9c7d51f60&ref_=as_li_ss_tl',
  },
  {
    id: 278,
    designKey: 'odd-hoopers-0002',
    imageFilename: 'basketball_pirates1.png',
    folder: 'basketball_pirates1',
    brand: 'ODD HOOPERS',
    title: 'バスケ ドクロ バスケットボール スカル クロスボーン',
    bullet1:
      'バスケットボールをくわえたドクロと交差する骨を組み合わせた、インパクトのある海賊風バスケットボールデザイン。',
    bullet2:
      'バスケ好きやスカルモチーフ、ストリートファッションが好きな方に。スポーツとロックテイストを組み合わせた個性的なイラストです。',
    description:
      'バスケットボールを大胆にくわえたドクロとクロスボーンを描いたオリジナルデザイン。シンプルな配色と力強いシルエットが特徴です。バスケットボールプレイヤーやスポーツファン、ドクロや海賊モチーフが好きな方におすすめです。',
    amazonUrl: 'https://www.amazon.co.jp/dp/B0HSWBDG18?dib=eyJ2IjoiMSJ9.4Cg3tnO8W95IHDFRCFl5edkIhC6YjZbY_M8WFE8UrfUWzytcXIZBAf3LLjsl_X1whfphgZpLquLsBQg3yMfTViAU8ZSHCXOmoNpb2ZtgY0i4EcEZXu-wceEQJhfIoAQ86DEzfWMum4jLLnK9K4P6uQ.QgMg87VC4e1MzFuiS-TC6pJDYUTC0j-FEWyrdE5uAN0&dib_tag=se&qid=1795646046&refinements=p_4%3AODD%2BHOOPERS&s=apparel&sr=1-4&customId=B0FJKL4LWG&customizationToken=MC_Assembly_1%23B0FJKL4LWG&th=1&psc=1&linkCode=ll2&tag=designshelf-22&linkId=f50a697b4345db98edebf19f1e561fe6&ref_=as_li_ss_tl',
  },
  {
    id: 279,
    designKey: 'odd-hoopers-0003',
    imageFilename: 'basketball_pirates2.png',
    folder: 'basketball_pirates2',
    brand: 'ODD HOOPERS',
    title: 'バスケットボール パイレーツ バスケ 海賊 ドクロ イラスト',
    bullet1:
      '鋭い目つきのドクロがバスケットボールをくわえた海賊風イラスト。手描き風の文字とスカルデザインが特徴です。',
    bullet2:
      'バスケ部、バスケットボールプレイヤー、ストリートファッションやドクロモチーフが好きな方におすすめのデザインです。',
    description:
      'バスケットボールと海賊旗をモチーフにした、ユニークなスポーツイラスト。BASKETBALL PIRATESの文字と、バスケットボールをくわえたドクロを組み合わせています。バスケ好きの個性を表現できる遊び心のあるデザインです。',
    amazonUrl: 'https://www.amazon.co.jp/dp/B0HSVX4CGR?dib=eyJ2IjoiMSJ9.4Cg3tnO8W95IHDFRCFl5edkIhC6YjZbY_M8WFE8UrfUWzytcXIZBAf3LLjsl_X1whfphgZpLquLsBQg3yMfTViAU8ZSHCXOmoNpb2ZtgY0i4EcEZXu-wceEQJhfIoAQ86DEzfWMum4jLLnK9K4P6uQ.QgMg87VC4e1MzFuiS-TC6pJDYUTC0j-FEWyrdE5uAN0&dib_tag=se&qid=1795646046&refinements=p_4%3AODD%2BHOOPERS&s=apparel&sr=1-10&customId=B0FJL1Q6SD&customizationToken=MC_Assembly_1%23B0FJL1Q6SD&th=1&psc=1&linkCode=ll2&tag=designshelf-22&linkId=075574170e5d28758b1f3011d548a1a4&ref_=as_li_ss_tl',
  },
  {
    id: 280,
    designKey: 'odd-hoopers-0004',
    imageFilename: 'do_you_love.png',
    folder: 'do_you_love',
    brand: 'ODD HOOPERS',
    title: 'バスケ好き バスケットボール LOVE ハート 英語文字',
    bullet1:
      'DO YOU LOVE BASKETBALLのメッセージを、バスケットボールとピンクのハートで表現したポップな文字デザイン。',
    bullet2:
      'バスケが大好きな男性、女性、子供、バスケ部員やスポーツ観戦が好きな方に。明るく遊び心のあるスポーツイラストです。',
    description:
      'バスケットボールへの愛をストレートに表現したタイポグラフィデザイン。文字の一部をバスケットボールとハートに置き換えた、かわいくて印象的なイラストです。バスケ好きの方の日常のコーディネートやスポーツ観戦にもおすすめです。',
    amazonUrl: 'https://www.amazon.co.jp/dp/B0HSWKYTQ1?dib=eyJ2IjoiMSJ9.4Cg3tnO8W95IHDFRCFl5edkIhC6YjZbY_M8WFE8UrfUWzytcXIZBAf3LLjsl_X1whfphgZpLquLsBQg3yMfTViAU8ZSHCXOmoNpb2ZtgY0i4EcEZXu-wceEQJhfIoAQ86DEzfWMum4jLLnK9K4P6uQ.QgMg87VC4e1MzFuiS-TC6pJDYUTC0j-FEWyrdE5uAN0&dib_tag=se&qid=1795646046&refinements=p_4%3AODD%2BHOOPERS&s=apparel&sr=1-1&customId=B0FJL1Q6SD&customizationToken=MC_Assembly_1%23B0FJL1Q6SD&th=1&psc=1&linkCode=ll2&tag=designshelf-22&linkId=7448480785f88fe21c8621e5b1f206ba&ref_=as_li_ss_tl',
  },
  {
    id: 281,
    designKey: 'odd-hoopers-0005',
    imageFilename: 'ninja_basketball1.png',
    folder: 'ninja_basketball1',
    brand: 'ODD HOOPERS',
    title: '忍者 バスケットボール バスケ ドリブル 和風 おもしろイラスト',
    bullet1: 'バスケットボールをドリブルする忍者を描いた、ユーモアあふれるオリジナルキャラクターデザイン。',
    bullet2:
      'バスケ好き、忍者好き、日本文化やかわいいキャラクターイラストが好きな男性、女性、子供におすすめです。',
    description:
      '日本の忍者とバスケットボールを組み合わせた遊び心のあるスポーツデザイン。ドリブルする忍者のユニークな表情と赤い文字が印象的です。バスケットボールプレイヤーや日本文化が好きな方に楽しんでいただけるイラストです。',
    amazonUrl: 'https://www.amazon.co.jp/dp/B0HSW9171N?dib=eyJ2IjoiMSJ9.4Cg3tnO8W95IHDFRCFl5edkIhC6YjZbY_M8WFE8UrfUWzytcXIZBAf3LLjsl_X1whfphgZpLquLsBQg3yMfTViAU8ZSHCXOmoNpb2ZtgY0i4EcEZXu-wceEQJhfIoAQ86DEzfWMum4jLLnK9K4P6uQ.QgMg87VC4e1MzFuiS-TC6pJDYUTC0j-FEWyrdE5uAN0&dib_tag=se&qid=1795646046&refinements=p_4%3AODD%2BHOOPERS&s=apparel&sr=1-5&customId=B0FJL1Q6SD&customizationToken=MC_Assembly_1%23B0FJL1Q6SD&th=1&psc=1&linkCode=ll2&tag=designshelf-22&linkId=ccbae67241df1630a6eb46a817fa0408&ref_=as_li_ss_tl',
  },
  {
    id: 282,
    designKey: 'odd-hoopers-0006',
    imageFilename: 'ninja_basketball2.png',
    folder: 'ninja_basketball2',
    brand: 'ODD HOOPERS',
    title: '忍者 バスケットボール バスケ ジャンプ 和風 キャラクター',
    bullet1:
      'バスケットボールを片手に空中へジャンプする忍者のイラスト。忍者らしい身軽さとバスケの躍動感を表現したデザインです。',
    bullet2:
      'バスケットボールプレイヤー、バスケ部員、忍者や日本文化が好きな方に。ユニークなスポーツキャラクターを楽しめます。',
    description:
      '忍者がバスケットボールを手にジャンプする、個性的な和風スポーツイラスト。コミカルな表情と躍動感のあるポーズが特徴です。バスケと忍者という異なるモチーフを組み合わせた、遊び心あふれるオリジナルデザインです。',
    amazonUrl: 'https://www.amazon.co.jp/dp/B0HSWBP1GW?dib=eyJ2IjoiMSJ9.4Cg3tnO8W95IHDFRCFl5edkIhC6YjZbY_M8WFE8UrfUWzytcXIZBAf3LLjsl_X1whfphgZpLquLsBQg3yMfTViAU8ZSHCXOmoNpb2ZtgY0i4EcEZXu-wceEQJhfIoAQ86DEzfWMum4jLLnK9K4P6uQ.QgMg87VC4e1MzFuiS-TC6pJDYUTC0j-FEWyrdE5uAN0&dib_tag=se&qid=1795646046&refinements=p_4%3AODD%2BHOOPERS&s=apparel&sr=1-3&customId=B0FJL1Q6SD&customizationToken=MC_Assembly_1%23B0FJL1Q6SD&th=1&psc=1&linkCode=ll2&tag=designshelf-22&linkId=5bd0428a755dad38f7182cc985c702eb&ref_=as_li_ss_tl',
  },
  {
    id: 283,
    designKey: 'odd-hoopers-0007',
    imageFilename: 'panda_in_ball.png',
    folder: 'panda_in_ball',
    brand: 'ODD HOOPERS',
    title: 'パンダ バスケットボール バスケ かわいい 動物イラスト',
    bullet1:
      '半分に割れたバスケットボールの中に座る、かわいいパンダのオリジナルイラスト。動物とスポーツを組み合わせたユニークなデザインです。',
    bullet2:
      'パンダ好き、動物好き、バスケットボールファンに。子供から大人まで楽しめる、遊び心のあるキャラクターデザインです。',
    description:
      'バスケットボールの中からかわいいパンダが登場する、ユーモアあふれるアニマルイラスト。大きなボールと小さなパンダの組み合わせが特徴です。バスケ好きやパンダ好きの方におすすめのオリジナルスポーツデザインです。',
    amazonUrl: 'https://www.amazon.co.jp/dp/B0HSW5GZY9?dib=eyJ2IjoiMSJ9.4Cg3tnO8W95IHDFRCFl5edkIhC6YjZbY_M8WFE8UrfUWzytcXIZBAf3LLjsl_X1whfphgZpLquLsBQg3yMfTViAU8ZSHCXOmoNpb2ZtgY0i4EcEZXu-wceEQJhfIoAQ86DEzfWMum4jLLnK9K4P6uQ.QgMg87VC4e1MzFuiS-TC6pJDYUTC0j-FEWyrdE5uAN0&dib_tag=se&qid=1795646046&refinements=p_4%3AODD%2BHOOPERS&s=apparel&sr=1-7&customId=B0FJL1Q6SD&customizationToken=MC_Assembly_1%23B0FJL1Q6SD&th=1&psc=1&linkCode=ll2&tag=designshelf-22&linkId=ebea3bf541d8a1cb7b07a516aa18b09e&ref_=as_li_ss_tl',
  },
  {
    id: 284,
    designKey: 'odd-hoopers-0008',
    imageFilename: 'pandunk.png',
    folder: 'pandunk',
    brand: 'ODD HOOPERS',
    title: 'パンダ バスケットボール ダンクシュート バスケ PANDUNK',
    bullet1:
      '大きな口を開けたパンダがバスケットボールを手にジャンプする、迫力とかわいらしさを兼ね備えたイラスト。',
    bullet2:
      'バスケ部、バスケットボールプレイヤー、パンダ好きに。ダンクシュートとコミカルな動物キャラクターを組み合わせたデザインです。',
    description:
      'パンダとダンクシュートを組み合わせたPANDUNKシリーズ。大きな口を開けたユニークな表情と、オレンジ色のバスケットボールが印象的なオリジナルイラストです。バスケと動物が好きな方におすすめです。',
    amazonUrl: 'https://www.amazon.co.jp/dp/B0HSVZJ5HN?dib=eyJ2IjoiMSJ9.4Cg3tnO8W95IHDFRCFl5edkIhC6YjZbY_M8WFE8UrfUWzytcXIZBAf3LLjsl_X1whfphgZpLquLsBQg3yMfTViAU8ZSHCXOmoNpb2ZtgY0i4EcEZXu-wceEQJhfIoAQ86DEzfWMum4jLLnK9K4P6uQ.QgMg87VC4e1MzFuiS-TC6pJDYUTC0j-FEWyrdE5uAN0&dib_tag=se&qid=1795646046&refinements=p_4%3AODD%2BHOOPERS&s=apparel&sr=1-9&customId=B0FJL1Q6SD&customizationToken=MC_Assembly_1%23B0FJL1Q6SD&th=1&psc=1&linkCode=ll2&tag=designshelf-22&linkId=78ce86773e2dd9c26145d6152e3730bd&ref_=as_li_ss_tl',
  },
  {
    id: 285,
    designKey: 'odd-hoopers-0009',
    imageFilename: 'slam_pandunk1.png',
    folder: 'slampandunk1',
    brand: 'ODD HOOPERS',
    title: 'パンダ バスケ ダンクシュート バスケットボール SLAM PANDUNK',
    bullet1:
      'バスケットゴールに向かってジャンプするパンダのイラスト。真剣な表情とコミカルなポーズが特徴のバスケデザインです。',
    bullet2:
      'バスケ好き、パンダ好き、ダンクシュートやストリートバスケが好きな方に。スポーツ観戦や普段のコーディネートにも。',
    description:
      'バスケットゴールとパンダを組み合わせたSLAM PANDUNKシリーズ。ダンクシュートに挑むパンダのユニークな表情と大胆な文字が印象的です。バスケットボールの楽しさをコミカルに表現したオリジナルキャラクターデザインです。',
    amazonUrl: 'https://www.amazon.co.jp/dp/B0HSW3NZD1?dib=eyJ2IjoiMSJ9.4Cg3tnO8W95IHDFRCFl5edkIhC6YjZbY_M8WFE8UrfUWzytcXIZBAf3LLjsl_X1whfphgZpLquLsBQg3yMfTViAU8ZSHCXOmoNpb2ZtgY0i4EcEZXu-wceEQJhfIoAQ86DEzfWMum4jLLnK9K4P6uQ.QgMg87VC4e1MzFuiS-TC6pJDYUTC0j-FEWyrdE5uAN0&dib_tag=se&qid=1795646046&refinements=p_4%3AODD%2BHOOPERS&s=apparel&sr=1-8&customId=B0FJL1Q6SD&customizationToken=MC_Assembly_1%23B0FJL1Q6SD&th=1&psc=1&linkCode=ll2&tag=designshelf-22&linkId=845008eaadaab8e707851724d78ed204&ref_=as_li_ss_tl',
  },
  {
    id: 286,
    designKey: 'odd-hoopers-0010',
    imageFilename: 'slam_pandunk2.png',
    folder: 'slampandunk2',
    brand: 'ODD HOOPERS',
    title: 'パンダ バスケットボール バスケ おもしろ 動物キャラクター',
    bullet1:
      '大きな口を開けた横向きのパンダとバスケットボールを組み合わせた、表情豊かなオリジナルイラスト。',
    bullet2:
      'パンダ好き、バスケ好き、ユーモアのある動物イラストが好きな方に。バスケットボールファンの日常着にもおすすめです。',
    description:
      'バスケットボールをテーマにした、コミカルなパンダのキャラクターデザイン。大きく開いた口と独特の横向きのシルエットが印象的です。バスケの楽しさと動物キャラクターのかわいらしさを組み合わせたイラストです。',
    amazonUrl: 'https://www.amazon.co.jp/dp/B0HSW6MH4S?dib=eyJ2IjoiMSJ9.4Cg3tnO8W95IHDFRCFl5edkIhC6YjZbY_M8WFE8UrfUWzytcXIZBAf3LLjsl_X1whfphgZpLquLsBQg3yMfTViAU8ZSHCXOmoNpb2ZtgY0i4EcEZXu-wceEQJhfIoAQ86DEzfWMum4jLLnK9K4P6uQ.QgMg87VC4e1MzFuiS-TC6pJDYUTC0j-FEWyrdE5uAN0&dib_tag=se&qid=1795646046&refinements=p_4%3AODD%2BHOOPERS&s=apparel&sr=1-6&customId=B0FJL1Q6SD&customizationToken=MC_Assembly_1%23B0FJL1Q6SD&th=1&psc=1&linkCode=ll2&tag=designshelf-22&linkId=640ef4e95c8eab755889f1f36da6504e&ref_=as_li_ss_tl',
  },
];

const ODD_HOOPERS_TSHIRT_SLOT = 't_shirt.jpg';

export function buildOddHooperProduct(entry: OddHooperCatalogEntry) {
  const root = `/designshelf/images/odd_hoopers/${entry.folder}`;
  const amazonLink = entry.amazonUrl;
  return {
    id: entry.id,
    title: entry.title,
    brand: entry.brand,
    image: `${root}/${ODD_HOOPERS_TSHIRT_SLOT}`,
    designImage: `${root}/design.png`,
    price: TSHIRT_PRICE,
    amazonLink,
    jpAssets: {
      root,
      design: 'design.png',
      slots: {
        tshirt: ODD_HOOPERS_TSHIRT_SLOT,
      },
    },
    features: [entry.bullet1, entry.bullet2] as [string, string],
    description: entry.description,
    variations: [
      {
        name: 'Tシャツ',
        price: TSHIRT_PRICE,
        amazonLink,
      },
    ],
  };
}

export const ODD_HOOPERS_PRODUCTS = ODD_HOOPERS_CATALOG.map(buildOddHooperProduct);

export const ODD_HOOPERS_PRODUCT_IDS = new Set(ODD_HOOPERS_CATALOG.map((entry) => entry.id));

/** 一覧の先頭固定（CSV 行順 = odd-hoopers-0001 から） */
export const ODD_HOOPERS_PIN_ORDER = ODD_HOOPERS_CATALOG.map((entry) => entry.id);