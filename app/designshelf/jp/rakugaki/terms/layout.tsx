import type { Metadata } from 'next';
import '../rakugaki.css';

const title = 'らくがきT応募規約｜Design Shelf';
const description =
  'らくがきTへの応募前に確認いただく規約です。応募できる作品、未成年作品の応募、採用作品の商品化、著作権、採用謝礼、販売場所についてまとめています。';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.utaraska.co.jp'),
  title,
  description,
  openGraph: {
    title: 'らくがきT応募規約｜Design Shelf',
    description:
      'らくがきTに応募する前に、作品の権利、商品化、採用謝礼、販売場所についてご確認ください。',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary',
    title: 'らくがきT応募規約｜Design Shelf',
    description:
      'らくがきTに応募する前に、作品の権利、商品化、採用謝礼、販売場所についてご確認ください。',
  },
};

export default function RakugakiTermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
