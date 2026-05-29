import type { Metadata } from 'next';
import { RAKUGAKI_T } from '@/lib/designshelf/rakugakiT';
import './rakugaki.css';

const title = 'らくがきT｜子どもの絵も、大人のらくがきも、Tシャツになる｜utaraska odd';
const description =
  'らくがきTは、子どもの絵や手描きのらくがきを募集し、採用作品をutaraska oddのTシャツとして商品化する投稿企画です。';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.utaraska.co.jp'),
  title,
  description,
  openGraph: {
    title: 'らくがきT｜utaraska odd',
    description:
      '子どもの絵も、大人のらくがきも、Tシャツになる。採用制の投稿型Tシャツ企画です。',
    type: 'website',
    locale: 'ja_JP',
    images: [
      {
        url: RAKUGAKI_T.openGraphImageSrc,
        width: 1731,
        height: 909,
        alt: 'らくがきT｜utaraska odd 投稿企画',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'らくがきT｜utaraska odd',
    description:
      '子どもの絵も、大人のらくがきも、Tシャツになる。採用制の投稿型Tシャツ企画です。',
    images: [RAKUGAKI_T.openGraphImageSrc],
  },
};

export default function RakugakiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
