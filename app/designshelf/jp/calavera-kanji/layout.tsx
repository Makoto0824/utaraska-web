import type { Metadata } from 'next';
import { CALAVERA_KANJI_CAMPAIGN } from '@/lib/designshelf/calaveraKanjiCampaign';

const title = 'カラベラドクロと漢字｜AIシンガーSAKI着用Tシャツ';
const description =
  'AIシンガーSAKI（仮名）がデビュー曲「骨まで笑え」で着用した、カラベラモチーフの黒Tシャツ。カラフルなドクロ、花、漢字を組み合わせた、今を楽しむためのグラフィックTシャツです。';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.utaraska.co.jp'),
  title,
  description,
  openGraph: {
    title,
    description: 'デビュー曲「骨まで笑え」で着用した、カラベラモチーフの黒Tシャツ。',
    type: 'website',
    locale: 'ja_JP',
    images: [
      {
        url: CALAVERA_KANJI_CAMPAIGN.openGraphImageSrc,
        width: 1200,
        height: 1200,
        alt: 'カラベラドクロと漢字 Tシャツ（AIシンガーSAKI着用イメージ）',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: 'デビュー曲「骨まで笑え」で着用した、カラベラモチーフの黒Tシャツ。',
    images: [CALAVERA_KANJI_CAMPAIGN.openGraphImageSrc],
  },
};

export default function CalaveraKanjiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
