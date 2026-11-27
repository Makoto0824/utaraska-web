import { ODD_HOOPERS_PRODUCTS } from '@/lib/designshelf/oddHoopersCatalog';
import { CollectionLanding, collectionMetadata, type CollectionFaq } from '../CollectionLanding';

const title = 'バスケTシャツ｜猫・パンダ・忍者のイラスト | ODD HOOPERS';
const description =
  '黒猫、パンダ、忍者、海賊のバスケットボールイラストTシャツ。ODD HOOPERSのオリジナルデザインで、Tシャツは税込2,300円。Amazonで購入できます。';
const path = '/odd/basketball-t-shirts';

const faqs: CollectionFaq[] = [
  {
    question: 'どんな柄がありますか？',
    answer:
      '黒猫、ドクロの海賊、忍者、パンダがバスケットボールと一緒に描かれたTシャツです。ダンクやドリブルなど、柄ごとにポーズが違います。',
  },
  {
    question: '値段はいくらですか？',
    answer: '掲載しているバスケTシャツは、いずれも税込2,300円です。',
  },
  {
    question: 'どこで購入できますか？',
    answer: '各デザインの「Amazonで見る」から、ODD HOOPERSの商品ページで購入できます。',
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
  image: ODD_HOOPERS_PRODUCTS[0]?.image ?? '/designshelf/images/logo.png',
  imageAlt: '黒猫がバスケットボールを抱えるTシャツ',
});

export default function BasketballTShirtsPage() {
  return (
    <CollectionLanding
      path={path}
      name="バスケTシャツ"
      description={description}
      h1="ODD HOOPERSのバスケTシャツ"
      lead="ボールを抱える黒猫、ダンクを決めるパンダ、ドリブルする忍者。バスケットボールをテーマに、ウタラスカが描いたオリジナルイラストのTシャツです。普段着やバスケ観戦に、好きな柄を選べます。"
      brand="ODD HOOPERS"
      products={ODD_HOOPERS_PRODUCTS.map((product) => ({
        id: product.id,
        title: product.title,
        image: product.image,
        summary: product.features[0],
        offers: product.variations.map((variation) => ({
          name: variation.name,
          price: variation.price,
          amazonLink: variation.amazonLink,
        })),
      }))}
      faqs={faqs}
      sibling={{ href: '/odd/tiger-t-shirts', label: '虎のイラストTシャツ' }}
    />
  );
}
