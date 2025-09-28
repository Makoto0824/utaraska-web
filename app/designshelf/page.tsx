'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function DesignShelf() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-50 to-cyan-100">
      <div className="designshelf-container">
        {/* ヘッダー */}
        <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
          <nav>
            <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-4">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/images/logo.png" 
                  alt="ウタラスカ合同会社" 
                  width={120} 
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <div className="flex items-center gap-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">ホーム</Link>
                <div className="relative group">
                  <span className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">ブランド</span>
                  <div className="absolute top-full left-0 bg-white rounded-lg shadow-lg p-4 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="flex flex-col gap-2">
                      <Link href="/designshelf" className="text-gray-700 hover:bg-gray-100 p-2 rounded transition-colors">ゆるスタイル・ジャパン</Link>
                      <Link href="/designshelf" className="text-gray-700 hover:bg-gray-100 p-2 rounded transition-colors">Japanese Art Studio</Link>
                      <Link href="/designshelf" className="text-gray-700 hover:bg-gray-100 p-2 rounded transition-colors">ワロタ商店</Link>
                      <Link href="/designshelf" className="text-gray-700 hover:bg-gray-100 p-2 rounded transition-colors">詳しくはこちら</Link>
                    </div>
                  </div>
                </div>
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">お問い合わせ</Link>
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">運営者情報</Link>
              </div>
            </div>
          </nav>
        </header>

        {/* メインコンテンツ */}
        <main>
          {/* バナースライドショー */}
          <section className="relative h-96 overflow-hidden">
            <div className="relative w-full h-full">
              <Image 
                src="/designshelf/images/banner1.jpg" 
                alt="Design Shelf Collection" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Design Shelf</h1>
                  <p className="text-2xl mb-8 drop-shadow-md">Amazon Merch Collection</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                    コレクションを見る
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ブランド紹介セクション */}
          <section className="py-16 bg-white/80 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-8">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">ブランド一覧</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
                  <Image 
                    src="/designshelf/images/tee1.png" 
                    alt="ゆるスタイル・ジャパン" 
                    width={300} 
                    height={300}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">ゆるスタイル・ジャパン</h3>
                  <p className="text-gray-600 mb-6">日本のゆるい文化をテーマにしたデザイン</p>
                  <Link href="/designshelf" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">詳細を見る</Link>
                </div>
                
                <div className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
                  <Image 
                    src="/designshelf/images/tee2.png" 
                    alt="Japanese Art Studio" 
                    width={300} 
                    height={300}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Japanese Art Studio</h3>
                  <p className="text-gray-600 mb-6">伝統的な日本美術をモダンにアレンジ</p>
                  <Link href="/designshelf" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">詳細を見る</Link>
                </div>
                
                <div className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
                  <Image 
                    src="/designshelf/images/tee3.png" 
                    alt="ワロタ商店" 
                    width={300} 
                    height={300}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">ワロタ商店</h3>
                  <p className="text-gray-600 mb-6">笑いをテーマにしたユニークなデザイン</p>
                  <Link href="/designshelf" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">詳細を見る</Link>
                </div>
              </div>
            </div>
          </section>

          {/* 商品グリッド */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-8">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">人気商品</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i} className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
                    <Image 
                      src={`/designshelf/images/tee${i + 1}.png`} 
                      alt={`商品 ${i + 1}`} 
                      width={256} 
                      height={256}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2 text-gray-800">デザインTシャツ {i + 1}</h3>
                      <p className="text-xl font-bold text-blue-600 mb-4">¥2,980</p>
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                        Amazonで購入
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* フッター */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">ウタラスカ合同会社</h3>
                <p className="text-gray-300 mb-2">〒150-0001 東京都渋谷区神宮前4-18-9</p>
                <p className="text-gray-300">contact@utaraska.co.jp</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Design Shelf</h4>
                <ul className="space-y-2">
                  <li><Link href="/designshelf" className="text-gray-300 hover:text-white transition-colors">ブランド一覧</Link></li>
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
    </div>
  );
}