import { CollectionLanding, collectionMetadata, type CollectionFaq, type CollectionProduct } from '../CollectionLanding';

const title = '虎のTシャツ｜和風イラストの虎・白虎 | utaraska odd';
const description =
  '向かい合う虎、一匹の虎、ドット絵、白虎のオリジナルTシャツ。Tシャツは税込2,300円から。パーカーやトレーナーもある柄はAmazonで選べます。';
const path = '/odd/tiger-t-shirts';

const products: CollectionProduct[] = [
  {
    id: 103,
    title: 'ゆるい虎と虎',
    image: '/designshelf/images/7_tigertiger/jp/tshirt_model.jpg',
    summary: '左右対称に配置されたタイガーの顔。胸元のワンポイントで、シンプルな配置とインパクトのバランスを取ったデザインです。',
    offers: [
      { name: 'Tシャツ', price: '¥2,300', amazonLink: 'https://amzn.to/4mmNbOG' },
      { name: 'トレーナー', price: '¥3,960', amazonLink: 'https://amzn.to/4ocuRrV' },
      {
        name: 'パーカー',
        price: '¥4,400',
        amazonLink: 'https://www.amazon.co.jp/dp/B0FWD2HLB2?linkCode=ll2&tag=designshelf-22&linkId=5ee61b5294a323ca487916d150e00aba',
      },
    ],
  },
  {
    id: 105,
    title: 'ゆるい虎',
    image: '/designshelf/images/3_tiger/jp/tshirt_model.jpg',
    summary: '一匹の虎の顔を、和風の線とゆるいキャラクターの表情で描いたデザインです。',
    offers: [
      { name: 'Tシャツ', price: '¥2,300', amazonLink: 'https://amzn.to/41xKuk2' },
      { name: 'パーカー', price: '¥4,400', amazonLink: 'https://amzn.to/3JuRuZJ' },
    ],
  },
  {
    id: 268,
    title: 'ゆるい虎と虎 2',
    image: '/designshelf/images/42_tigertiger2/tshirt_model.jpg',
    summary: '大きな口を開けて吠える2匹の虎を左右に配置したデザインです。',
    offers: [
      { name: 'Tシャツ', price: '¥2,300', amazonLink: 'https://link.amazon/B0d6bCmfU' },
      {
        name: 'パーカー',
        price: '¥4,400',
        amazonLink: 'https://www.amazon.co.jp/dp/B0HGCT1RK4?tag=designshelf-22&linkCode=ll2&linkId=afe66aa6cb561220b9b24deb460ba300',
      },
    ],
  },
  {
    id: 141,
    title: 'ゆるい虎と虎（ドット）',
    image: '/designshelf/images/41_tigertiger_pixel/jp/tshirt_model.jpg',
    summary: '向かい合う虎の顔をドット絵にしたものです。左右対称の配置は、線画の虎と虎と同じです。',
    offers: [{ name: 'Tシャツ', price: '¥2,300', amazonLink: 'https://amzn.to/4lXg9Vy' }],
  },
  {
    id: 269,
    title: 'ゆるい白虎',
    image: '/designshelf/images/36_whitetiger/tshirt_model.jpg',
    summary: '白虎の顔を胸元のワンポイントにしたデザインです。',
    offers: [{ name: 'Tシャツ', price: '¥2,300', amazonLink: 'https://link.amazon/B0hq2xFhg' }],
  },
  {
    id: 270,
    title: 'ゆるい白虎と白虎',
    image: '/designshelf/images/38_white_tigertiger/tshirt_model.jpg',
    summary: '左右で向かい合う白虎の顔を配置したデザインです。',
    offers: [{ name: 'Tシャツ', price: '¥2,300', amazonLink: 'https://link.amazon/B00xGRuzq' }],
  },
  {
    id: 102,
    title: 'ゆるい龍と虎',
    image: '/designshelf/images/5_dragon_tiger/jp/tshirt_model.jpg',
    summary: '龍と虎が向かい合う構図です。虎だけの柄とは別に、龍虎をモチーフにしています。',
    offers: [
      { name: 'Tシャツ', price: '¥2,300', amazonLink: 'https://amzn.to/4dqUmmN' },
      { name: '長袖Tシャツ', price: '¥2,750', amazonLink: 'https://amzn.to/4dqUmmN' },
      { name: 'トレーナー', price: '¥3,960', amazonLink: 'https://amzn.asia/d/09qsugXb' },
      { name: 'パーカー', price: '¥4,400', amazonLink: 'https://amzn.to/4uuJOJy' },
      { name: 'ジップパーカー', price: '¥4,600', amazonLink: 'https://amzn.to/4cQtX1I' },
    ],
  },
];

const faqs: CollectionFaq[] = [
  {
    question: '虎のTシャツはいくらですか？',
    answer:
      'Tシャツは税込2,300円です。パーカーは税込4,400円、トレーナーは税込3,960円の柄があります。長袖Tシャツとジップパーカーがあるのは「ゆるい龍と虎」です。',
  },
  {
    question: 'どこで購入できますか？',
    answer: '各デザインの「Amazonで見る」から、柄とアイテムを選んで購入できます。',
  },
  {
    question: '白虎のデザインはありますか？',
    answer: 'あります。「ゆるい白虎」と、左右で向かい合う「ゆるい白虎と白虎」の2種類で、どちらもTシャツです。',
  },
  {
    question: '着用画像は実物と同じですか？',
    answer:
      '一部の着用画像はAIで生成・編集しており、色味や細部が実物と異なる場合があります。購入前にAmazonの商品説明を確認してください。',
  },
];

export const metadata = collectionMetadata({
  title,
  description,
  path,
  image: '/designshelf/images/7_tigertiger/jp/tshirt_model.jpg',
  imageAlt: '向かい合う虎のイラストTシャツ',
});

export default function TigerTShirtsPage() {
  return (
    <CollectionLanding
      path={path}
      name="虎のTシャツ"
      description={description}
      h1="虎のイラストTシャツ"
      lead="ウタラスカが描いた虎のグラフィックを集めました。一匹の虎、左右で向かい合う虎、ドット絵の虎、白虎、龍と向き合う虎があります。胸元のワンポイントで、普段着やプレゼントに使えます。"
      brand="utaraska odd"
      products={products}
      faqs={faqs}
      sibling={{ href: '/odd/basketball-t-shirts', label: 'ODD HOOPERSのバスケTシャツ' }}
    />
  );
}
