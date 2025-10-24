'use client';
export const revalidate = 0;

import Image from 'next/image';
import Link from 'next/link';

export default function Brands() {
  const brands = [
    {
      name: "ゆるスタイル・ジャパン",
      description: "伝統的な日本のモチーフを、かわいくデフォルメしたポップアートデザインを展開するブランド。和風キャラクターアートの新しい表現を追求します。",
      link: "/designshelf/brands/yuru-style-japan"
    },
    {
      name: "Japanese Art Studio",
      description: "浮世絵や日本画の伝統を現代的なアート表現で再構築。サイケデリックな色彩と幻想的な世界観が特徴のブランドです。",
      link: "/designshelf/brands/japanese-art-studio"
    },
    {
      name: "ワロタ商店",
      description: "「おもしろ」「ギャグ」「ことわざ逆」「パロディ」「ユーモア」「遊び心」をテーマにした、オリジナルグッズブランドです。",
      link: "/designshelf/brands/warota-shoten"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <nav>
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
            <Link href="/designshelf" className="flex items-center">
              <Image 
                src="/designshelf/images/logo.png" 
                alt="Design Shelf" 
                width={120} 
                height={60}
                className="w-[100px] sm:w-[120px] h-auto hover:scale-105 transition-transform"
              />
              
            </Link>
            <div className="flex items-center gap-6">
              <Link href="https://www.utaraska.co.jp/designshelf" className="text-gray-600 hover:text-gray-900 transition-colors">ホーム</Link>
              <Link href="/designshelf/brands" className="text-gray-600 hover:text-gray-900 transition-colors">ブランド</Link>
              <Link href="/designshelf/contact" className="text-gray-600 hover:text-gray-900 transition-colors">お問い合わせ</Link>
              <Link href="/designshelf/about" className="text-gray-600 hover:text-gray-900 transition-colors">運営者情報</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* ページヘッダー */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">ブランド一覧</h1>
            <p className="text-lg text-center text-gray-600 max-w-4xl mx-auto">
              Design Shelfでは、3つの個性的なブランドが展開されています。それぞれ異なるコンセプトで、日本の文化を現代的に表現したデザインを提供しています。
            </p>
          </div>
        </section>

        {/* ブランド一覧 */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <Link 
                key={index} 
                href={brand.link}
                className="bg-white rounded-lg shadow-md p-8 text-center hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 no-underline"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{brand.name}</h2>
                <p className="text-gray-600 leading-relaxed">{brand.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* 全商品へのリンク */}
        <section className="mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">すべての商品を見る</h2>
            <p className="text-gray-600 mb-6">全ブランドの商品を一覧で確認できます</p>
            <Link 
              href="/designshelf"
              className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              全商品一覧へ
            </Link>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-100 py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Design Shelf</h2>
              <p className="text-gray-600">Amazon Merch on Demand Collection</p>
            </div>
            <div className="flex gap-6">
              <a 
                href="https://www.instagram.com/designshelf2025/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Instagram
              </a>
              <Link href="/designshelf/contact" className="text-gray-600 hover:text-gray-800 transition-colors">
                お問い合わせ
              </Link>
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">v0.1.1</div>
        </div>
      </footer>
    </div>
  );
}
