import type { Metadata } from 'next';
import { RAKUGAKI_T } from '@/lib/designshelf/rakugakiT';
import './rakugaki.css';

const title = '落書きT｜あなたの落書きがTシャツになる｜Design Shelf';
const description =
  '落書きTは、子どもの絵や手描きの落書きを募集し、採用作品をDesign ShelfのTシャツとして商品化する投稿企画です。';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.utaraska.co.jp'),
  title,
  description,
  openGraph: {
    title: '落書きT｜Design Shelf',
    description:
      '子どもの絵も、大人の落書きも。採用制の投稿型Tシャツ企画です。',
    type: 'website',
    locale: 'ja_JP',
    images: [
      {
        url: RAKUGAKI_T.openGraphImageSrc,
        width: 768,
        height: 1024,
        alt: '落書きT｜胸元に落書きを配置したTシャツのイメージ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '落書きT｜Design Shelf',
    description:
      '子どもの絵も、大人の落書きも。採用制の投稿型Tシャツ企画です。',
    images: [RAKUGAKI_T.openGraphImageSrc],
  },
};

export default function RakugakiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
