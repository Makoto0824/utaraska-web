'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function DesignShelf() {
  const [expandedDetails, setExpandedDetails] = useState<number | null>(null);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [popupImage, setPopupImage] = useState<string | null>(null);
  const [popupId, setPopupId] = useState<string | null>(null);

  const banners = [
    { src: "/designshelf/images/banner5.jpg", alt: "セールバナー" },
    { src: "/designshelf/images/banner2.jpg", alt: "バナー2", link: "/designshelf" },
    { src: "/designshelf/images/banner3.jpg", alt: "バナー3", link: "/designshelf" },
    { src: "/designshelf/images/banner4.jpg", alt: "バナー4", link: "/designshelf" }
  ];

  // バナーカルーセルの自動切り替え
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const toggleDetails = (index: number) => {
    setExpandedDetails(expandedDetails === index ? null : index);
  };

  const openImagePopup = (imageSrc: string, popupId: string) => {
    setPopupImage(imageSrc);
    setPopupId(popupId);
    document.body.style.overflow = 'hidden';
  };

  const closeImagePopup = () => {
    setPopupImage(null);
    setPopupId(null);
    document.body.style.overflow = '';
  };

  // 全24商品のデータ
  const products = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    title: `デザインTシャツ ${i + 1}`,
    brand: i < 8 ? "ゆるスタイル・ジャパン" : i < 16 ? "Japanese Art Studio" : "ワロタ商店",
    image: `/designshelf/images/tee${i + 1}.png`,
    designImage: `/designshelf/images/tee${i + 1}_design.png`,
    price: "¥2,300",
    amazonLink: `https://amzn.to/example${i + 1}`,
    features: [
      `商品 ${i + 1} の特徴1`,
      `商品 ${i + 1} の特徴2`
    ],
    description: `商品 ${i + 1} の詳細説明です。この商品は高品質なデザインと素材を使用しており、日常使いに最適です。`
  }));

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <nav>
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="Design Shelf" 
                width={120} 
                height={60}
                className="h-15 w-auto hover:scale-105 transition-transform"
              />
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">ホーム</Link>
              <div className="relative group">
                <span className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">ブランド</span>
                <div className="absolute top-full left-0 bg-white rounded-lg shadow-lg p-4 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="flex flex-col gap-2">
                    <Link href="/designshelf" className="text-gray-700 hover:bg-gray-100 p-2 rounded transition-colors">ゆるスタイル・ジャパン</Link>
                    <Link href="/designshelf" className="text-gray-700 hover:bg-gray-100 p-2 rounded transition-colors">Japanese Art Studio</Link>
                    <Link href="/designshelf" className="text-gray-700 hover:bg-gray-100 p-2 rounded transition-colors">ワロタ商店</Link>
                    <Link href="/designshelf" className="text-gray-700 hover:bg-gray-100 p-2 rounded transition-colors">詳しくはこちら</Link>
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
        {/* バナースライドショー */}
        <section className="mb-12">
          <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
            {banners.map((banner, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentBanner ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image 
                  src={banner.src} 
                  alt={banner.alt} 
                  fill
                  className="object-cover"
                />
              </div>
            ))}
            
            {/* バナーインジケーター */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBanner(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentBanner ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            {/* ナビゲーションボタン */}
            <button
              onClick={() => setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              ❮
            </button>
            <button
              onClick={() => setCurrentBanner((prev) => (prev + 1) % banners.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              ❯
            </button>
          </div>
        </section>

        {/* 商品セクション */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">すべてのデザイン</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 max-w-sm mx-auto">
                <div 
                  className="p-4 flex justify-center items-center h-72 bg-white cursor-pointer"
                  onClick={() => openImagePopup(product.image, `imagePopup${product.id}`)}
                >
                  <Image 
                    src={product.image} 
                    alt={product.title}
                    width={256}
                    height={256}
                    className="object-contain hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 min-h-[3rem]">{product.title}</h3>
                  <p className="text-blue-600 font-medium mb-4">{product.brand}</p>
                  
                  <button 
                    onClick={() => toggleDetails(index)}
                    className="text-gray-600 hover:text-gray-900 mb-4 text-left transition-colors relative after:content-['▼'] after:absolute after:right-0 after:transition-transform after:duration-300"
                    style={{ 
                      transform: expandedDetails === index ? 'rotate(180deg)' : 'rotate(0deg)' 
                    }}
                  >
                    商品詳細
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedDetails === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="mb-4">
                      {product.features.map((feature, idx) => (
                        <p key={idx} className="text-sm text-gray-600 mb-2">{feature}</p>
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{product.description}</p>
                  </div>
                  
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-800">{product.price}</span>
                      <span className="text-sm text-gray-500">税込</span>
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">NEW</span>
                    </div>
                    <a 
                      href={product.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                    >
                      Amazonで見る
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 画像ポップアップ */}
      {popupImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeImagePopup}
        >
          <div className="relative max-w-4xl max-h-[90vh] p-4">
            <button
              onClick={closeImagePopup}
              className="absolute top-2 right-2 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition-colors z-10"
            >
              ✕
            </button>
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setPopupImage(products.find(p => p.id === parseInt(popupId?.replace('imagePopup', '') || '0'))?.image || '')}
                className="px-4 py-2 bg-white/20 text-white rounded hover:bg-white/30 transition-colors"
              >
                Tシャツ
              </button>
              <button
                onClick={() => setPopupImage(products.find(p => p.id === parseInt(popupId?.replace('imagePopup', '') || '0'))?.designImage || '')}
                className="px-4 py-2 bg-white/20 text-white rounded hover:bg-white/30 transition-colors"
              >
                デザイン
              </button>
            </div>
            <Image
              src={popupImage}
              alt="拡大画像"
              width={800}
              height={800}
              className="max-w-full max-h-[70vh] object-contain"
            />
          </div>
        </div>
      )}

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
  );
}