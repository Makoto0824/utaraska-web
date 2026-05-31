import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.utaraska.co.jp'),
  title: '運営情報｜utaraska odd',
  description:
    'utaraska oddの運営者情報、各種リンク、プライバシーポリシー、LINE公式アカウントの運用についてご案内します。',
  openGraph: {
    title: '運営情報｜utaraska odd',
    description:
      'utaraska oddの運営者情報と、LINE公式アカウントの運用についてご確認いただけます。',
  },
};

export default function OddAboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
