import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const ORIGIN = 'https://www.utaraska.co.jp';

export type CollectionOffer = {
  name: string;
  price: string;
  amazonLink: string;
};

export type CollectionProduct = {
  id: number;
  title: string;
  image: string;
  summary: string;
  offers: CollectionOffer[];
};

export type CollectionFaq = {
  question: string;
  answer: string;
};

export function collectionMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt: string;
}): Metadata {
  const url = `${ORIGIN}${path}`;
  return {
    metadataBase: new URL(ORIGIN),
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      locale: 'ja_JP',
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

function yenAmount(price: string): string | undefined {
  const digits = price.replace(/[^\d]/g, '');
  return digits || undefined;
}

export function CollectionLanding({
  path,
  name,
  description,
  h1,
  lead,
  brand,
  products,
  faqs,
  sibling,
}: {
  path: string;
  name: string;
  description: string;
  h1: string;
  lead: string;
  brand: string;
  products: CollectionProduct[];
  faqs: CollectionFaq[];
  sibling: { href: string; label: string };
}) {
  const url = `${ORIGIN}${path}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'utaraska odd', item: `${ORIGIN}/odd` },
          { '@type': 'ListItem', position: 2, name, item: url },
        ],
      },
      {
        '@type': 'CollectionPage',
        name,
        description,
        url,
        isPartOf: { '@type': 'WebSite', name: 'utaraska odd', url: `${ORIGIN}/odd` },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: products.length,
          itemListElement: products.map((product, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `${url}#design-${product.id}`,
            item: {
              '@type': 'Product',
              name: product.title,
              description: product.summary,
              image: `${ORIGIN}${product.image}`,
              brand: { '@type': 'Brand', name: brand },
              offers: product.offers.flatMap((offer) => {
                const price = yenAmount(offer.price);
                if (!offer.amazonLink || !price) return [];
                return [
                  {
                    '@type': 'Offer',
                    name: `${product.title} ${offer.name}`,
                    price,
                    priceCurrency: 'JPY',
                    availability: 'https://schema.org/InStock',
                    url: offer.amazonLink,
                  },
                ];
              }),
            },
          })),
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <header className="bg-white shadow-sm">
        <nav aria-label="特集" className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-4 text-sm">
          <Link href="/odd" className="font-semibold text-gray-900">
            utaraska odd
          </Link>
          <Link
            href="/odd/basketball-t-shirts"
            aria-current={path === '/odd/basketball-t-shirts' ? 'page' : undefined}
            className="text-gray-700 underline underline-offset-4"
          >
            バスケTシャツ
          </Link>
          <Link
            href="/odd/tiger-t-shirts"
            aria-current={path === '/odd/tiger-t-shirts' ? 'page' : undefined}
            className="text-gray-700 underline underline-offset-4"
          >
            虎のTシャツ
          </Link>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-10">
        <nav aria-label="パンくず" className="text-sm text-gray-600">
          <Link href="/odd" className="underline underline-offset-4">
            utaraska odd
          </Link>
          <span aria-hidden> / </span>
          <span>{name}</span>
        </nav>
        <h1 className="mt-5 text-3xl font-bold sm:text-4xl">{h1}</h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-gray-700">{lead}</p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-700">
          別の柄は
          <Link href={sibling.href} className="mx-1 font-semibold underline underline-offset-4">
            {sibling.label}
          </Link>
          にまとめています。全商品は
          <Link href="/odd" className="mx-1 font-semibold underline underline-offset-4">
            utaraska oddの商品一覧
          </Link>
          です。
        </p>
        <p className="mt-6 max-w-2xl rounded-r-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-xs leading-relaxed text-yellow-800">
          一部の着用画像はAIで生成・編集しており、色味や細部が実物と異なる場合があります。購入前にAmazonの商品説明を確認してください。
        </p>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <li id={`design-${product.id}`} key={product.id} className="overflow-hidden rounded-xl border border-gray-200 bg-white">
              <div className="relative aspect-square bg-gray-50">
                <Image
                  src={product.image}
                  alt={`${product.title}の着用イメージ`}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
              <div className="p-5">
                <h2 className="font-bold">{product.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{product.summary}</p>
                <ul className="mt-4 space-y-2">
                  {product.offers.map((offer) => (
                    <li key={`${product.id}-${offer.name}`} className="flex flex-wrap items-center justify-between gap-2 text-sm">
                      <span>
                        {offer.name}
                        <span className="ml-2 font-semibold">{offer.price}</span>
                        <span className="text-gray-500"> 税込</span>
                      </span>
                      {offer.amazonLink ? (
                        <a
                          href={offer.amazonLink}
                          rel="sponsored"
                          aria-label={`${product.title}の${offer.name}をAmazonで見る`}
                          className="rounded-full bg-gray-900 px-4 py-1.5 font-semibold text-white"
                        >
                          Amazonで見る
                        </a>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
        <section className="mt-14 max-w-2xl" aria-labelledby="collection-faq">
          <h2 id="collection-faq" className="text-2xl font-bold">
            よくある質問
          </h2>
          <div className="mt-4 space-y-6">
            {faqs.map((faq) => (
              <article key={faq.question}>
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="mt-1 leading-relaxed text-gray-700">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
