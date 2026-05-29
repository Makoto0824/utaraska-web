import type { Metadata } from 'next';
import { CALAVERA_KANJI } from '@/lib/designshelf/calaveraKanji';

const title = 'カラベラドクロと漢字';
const description =
  '名前募集中のAIシンガーがデビュー曲「骨まで笑え」で着用した、カラベラモチーフのTシャツ。カラフルなドクロ、花、漢字を組み合わせた今を楽しむためのグラフィックデザイン。メンズ・レディース・キッズ対応、複数カラー展開。';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.utaraska.co.jp'),
  title,
  description,
  openGraph: {
    title,
    description: 'デビュー曲「骨まで笑え」で着用した、カラベラモチーフのTシャツ。メンズ・レディース・キッズ、複数カラー展開。',
    type: 'website',
    locale: 'ja_JP',
    images: [
      {
        url: CALAVERA_KANJI.openGraphImageSrc,
        width: 1200,
        height: 1200,
        alt: 'カラベラドクロと漢字 Tシャツ（AIシンガー着用イメージ）',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: 'デビュー曲「骨まで笑え」で着用した、カラベラモチーフのTシャツ。メンズ・レディース・キッズ、複数カラー展開。',
    images: [CALAVERA_KANJI.openGraphImageSrc],
  },
};

export default function CalaveraKanjiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
