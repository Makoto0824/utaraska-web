import type { Metadata } from 'next';
import OddCatalog from './OddCatalog';

const title = 'オリジナルTシャツ・フィギュア | utaraska odd';
const description =
  '遊び心のあるオリジナルイラストのTシャツとフィギュア。バスケTシャツ、虎のイラストTシャツ、3Dプリントのフィギュアを紹介します。';
const shareImage = '/designshelf/images/banner7_toys.jpg';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.utaraska.co.jp'),
  title,
  description,
  alternates: {
    canonical: 'https://www.utaraska.co.jp/odd',
  },
  openGraph: {
    title,
    description,
    url: 'https://www.utaraska.co.jp/odd',
    type: 'website',
    locale: 'ja_JP',
    images: [
      {
        url: shareImage,
        width: 1200,
        height: 500,
        alt: 'utaraska odd のフィギュアとオリジナルグッズ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [shareImage],
  },
};

export default async function OddPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string | string[] }>;
}) {
  const { category } = await searchParams;
  return <OddCatalog category={Array.isArray(category) ? category[0] : category ?? null} />;
}
