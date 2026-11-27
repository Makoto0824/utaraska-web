import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ODD_HOOPERS_PRODUCTS } from '@/lib/designshelf/oddHoopersCatalog';

export const metadata: Metadata = {
  title: 'バスケTシャツ｜猫・パンダ・忍者のイラスト | ODD HOOPERS',
  description:
    '黒猫やパンダ、忍者がバスケットボールと出会う、ODD HOOPERSのオリジナルTシャツ。デザインを見比べて、気に入った一枚をAmazonでチェックできます。',
  alternates: {
    canonical: 'https://www.utaraska.co.jp/odd/basketball-t-shirts',
  },
};

export default function BasketballTShirtsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <Link href="/odd" className="text-sm font-semibold text-gray-700 underline underline-offset-4">
        utaraska oddの商品一覧
      </Link>
      <h1 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
        ODD HOOPERSのバスケTシャツ
      </h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-gray-700">
        ボールを抱える黒猫、ダンクを決めるパンダ、ドリブルする忍者。
        バスケットボールをテーマに、ウタラスカが描いたオリジナルイラストのTシャツです。
        普段着やバスケ観戦に、好きな柄を選べます。
      </p>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ODD_HOOPERS_PRODUCTS.map((product) => (
          <li key={product.id} className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="relative aspect-square bg-gray-50">
              <Image
                src={product.image}
                alt={`${product.features[0]} Tシャツのイメージ`}
                fill
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
            <div className="p-5">
              <h2 className="font-bold text-gray-900">{product.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">{product.features[0]}</p>
              {product.amazonLink && (
                <a
                  href={product.amazonLink}
                  rel="sponsored"
                  aria-label={`${product.title}をAmazonで見る`}
                  className="mt-4 inline-block rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white"
                >
                  Amazonで見る
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
