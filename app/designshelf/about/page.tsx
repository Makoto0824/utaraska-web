'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
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
                className="h-15 w-auto hover:scale-105 transition-transform"
              />
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/designshelf" className="text-gray-600 hover:text-gray-900 transition-colors">ホーム</Link>
              <div className="relative group">
                <span className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">ブランド</span>
                <div className="absolute top-full left-0 bg-white rounded-lg shadow-lg p-4 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="flex flex-col gap-2">
                    <Link href="/designshelf/brands/yuru-style-japan" className="text-gray-700 hover:bg-gray-100 p-2 rounded transition-colors">ゆるスタイル・ジャパン</Link>
                    <Link href="/designshelf/brands/japanese-art-studio" className="text-gray-700 hover:bg-gray-100 p-2 rounded transition-colors">Japanese Art Studio</Link>
                    <Link href="/designshelf/brands/warota-shoten" className="text-gray-700 hover:bg-gray-100 p-2 rounded transition-colors">ワロタ商店</Link>
                    <Link href="/designshelf/brands" className="text-gray-700 hover:bg-gray-100 p-2 rounded transition-colors">詳しくはこちら</Link>
                  </div>
                </div>
              </div>
              <Link href="/designshelf/contact" className="text-gray-600 hover:text-gray-900 transition-colors">お問い合わせ</Link>
              <Link href="/designshelf/about" className="text-gray-600 hover:text-gray-900 transition-colors">運営者情報</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">運営者情報</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Design Shelfについて</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Design Shelfは、日本の伝統文化と現代アートを融合させたデザインを展開するブランドです。Amazon Merch on Demandを通じて、オリジナルデザインのグッズを販売しています。
            </p>
            <p className="text-gray-600 leading-relaxed">
              私たちは、日本の豊かな文化遺産を現代的な表現で再解釈し、新しい価値を創造することを目指しています。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">運営会社情報</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <dt className="font-bold text-gray-800 mb-1">社名</dt>
                  <dd className="text-gray-600 mb-4">utaraska合同会社（ウタラスカ）</dd>
                </div>
                <div>
                  <dt className="font-bold text-gray-800 mb-1">所在地</dt>
                  <dd className="text-gray-600 mb-4">東京都渋谷区神宮前4-18-9</dd>
                </div>
                <div>
                  <dt className="font-bold text-gray-800 mb-1">事業内容</dt>
                  <dd className="text-gray-600 mb-4">デジタルイラスト制作、デザイン制作、Webサイト制作、ゲームアプリ開発</dd>
                </div>
                <div>
                  <dt className="font-bold text-gray-800 mb-1">設立日</dt>
                  <dd className="text-gray-600 mb-4">2021年4月1日</dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
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
                href="https://x.com/utaraska" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                X
              </a>
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
        </div>
      </footer>
    </div>
  );
}
