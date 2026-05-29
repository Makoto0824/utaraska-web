import type { Metadata } from 'next';

const title = 'プライバシーポリシー｜utaraska odd';
const description =
  'utaraska oddおよびらくがきT企画における個人情報の取り扱いについてまとめています。取得する情報、利用目的、保管期間、お問い合わせ窓口をご確認ください。';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.utaraska.co.jp'),
  title,
  description,
  openGraph: {
    title: 'プライバシーポリシー｜utaraska odd',
    description: 'utaraska oddおよびらくがきT企画における個人情報の取り扱いについてご確認ください。',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary',
    title: 'プライバシーポリシー｜utaraska odd',
    description: 'utaraska oddおよびらくがきT企画における個人情報の取り扱いについてご確認ください。',
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
