import type { Metadata } from 'next';
import OddCatalog from './OddCatalog';

export const metadata: Metadata = {
  title: 'オリジナルTシャツ・フィギュア | utaraska odd',
  description:
    '遊び心のあるオリジナルイラストのTシャツとフィギュア。猫やパンダのバスケTシャツ、和柄のアパレル、3Dプリントのフィギュアを紹介します。',
  alternates: {
    canonical: 'https://www.utaraska.co.jp/odd',
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
