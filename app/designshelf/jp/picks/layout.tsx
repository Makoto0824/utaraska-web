import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AmazonおすすめTシャツ（Amazon T-Shirt Picks） | Design Shelf',
  description:
    'DesignShelfがAmazonで見つけた気になるTシャツをThreadsの公式埋め込みで紹介するページです。オリジナル商品ではありません。Amazonアソシエイトリンクが含まれる場合があります。',
};

export default function JpPicksLayout({ children }: { children: React.ReactNode }) {
  return children;
}
