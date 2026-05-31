import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.utaraska.co.jp'),
  title: 'ウタラスカ合同会社について｜utaraska',
  description:
    'ウタラスカ合同会社の会社概要、事業内容、制作領域、関連プロジェクトについてご案内します。',
  openGraph: {
    title: 'ウタラスカ合同会社について｜utaraska',
    description:
      'イラスト制作、ゲーム・アプリ開発、AI活用制作などを行うウタラスカ合同会社の会社情報ページです。',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
