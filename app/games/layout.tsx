import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ゲーム | ウタラスカ合同会社',
  description:
    '「Color Face Blast」「カラーフェイスソート」「勇者を探せ」「Echo Gift」など App Store 作品と、かんたんゲームボックス掲載ブラウザゲームの案内。モバイル・HTML5 を中心としたゲーム開発のご相談も承ります。',
};

export default function GamesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
