'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Brands() {
  const brands = [
    {
      name: "ゆるスタイル・ジャパン",
      description: "伝統的な日本のモチーフを、かわいくデフォルメしたポップアートデザインを展開するブランド。和風キャラクターアートの新しい表現を追求します。",
      image: "/designshelf/images/tee1.png",
      link: "/designshelf/brands/yuru-style-japan",
      color: "from-pink-100 to-purple-100"
    },
    {
      name: "Japanese Art Studio",
      description: "浮世絵や日本画の伝統を現代的なアート表現で再構築。サイケデリックな色彩と幻想的な世界観が特徴のブランドです。",
      image: "/designshelf/images/tee21.png",
      link: "/designshelf/brands/japanese-art-studio",
      color: "from-blue-100 to-cyan-100"
    },
    {
      name: "ワロタ商店",
      description: "「おもしろ」「ギャグ」「ことわざ逆」「パロディ」「ユーモア」「遊び心」をテーマにした、オリジナルグッズブランドです。",
      image: "/designshelf/images/tee13.png",
      link: "/designshelf/brands/warota-shoten",
      color: "from-yellow-100 to-orange-100"
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
                src="/images/logo.png" 
                alt="Design Shelf" 
                width={120} 
                height={60}
                className="h-15 w-auto hover:scale-105 transition-transform"
              />
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/designshelf" className="text-gray-600 hover:text-gray-900 transition-colors">ホーム</Link>
              <div className="relative group">
                <span className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">ブランド</span>
                <div className="absolute top-full left-0 bg-white rounded-lg shadow-lg p-4 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="flex flex-col gap-2">
                    <Link href="/designshelf/brands/yuru-style-japan" className="text-gray-700 hover:bg-gray-100 p-2 rounded transition-colors">ゆるスタイル・ジャパン</Link>
                    <Link href="/designshelf/brands/japanese-art-studio" className="text-gray-700 hover:bg-gray-100 p-2 rounded transition-colors">Japanese Art Studio</Link>
                    <Link href="/designshelf/brands/warota-shoten" className="text-gray-700 hover:bg-gray-100 p-2 rounded transition-colors">ワロタ商店</Link>
                    <Link href="/designshelf/brands" className="text-gray-700 hover:bg-gray-100 p-2 rounded transition-colors">詳しくはこちら</Link>
                  </div>
                </div>
              </div>
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">お問い合わせ</Link>
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">運営者情報</Link>
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
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className={`h-48 bg-gradient-to-br ${brand.color} flex items-center justify-center`}>
                  <Image 
                    src={brand.image} 
                    alt={brand.name}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">{brand.name}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{brand.description}</p>
                  <Link 
                    href={brand.link}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    ブランドページを見る
                  </Link>
                </div>
              </div>
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
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ウタラスカ合同会社</h3>
              <p className="text-gray-300 mb-2">〒150-0001 東京都渋谷区神宮前4-18-9</p>
              <p className="text-gray-300">contact@utaraska.co.jp</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Design Shelf</h4>
              <ul className="space-y-2">
                <li><Link href="/designshelf/brands" className="text-gray-300 hover:text-white transition-colors">ブランド一覧</Link></li>
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">運営者情報</Link></li>
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">お問い合わせ</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-700">
            <p className="text-gray-400">&copy; 2025 ウタラスカ合同会社. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
