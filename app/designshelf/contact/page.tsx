'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = async () => {
    const email = 'hello@utaraska.co.jp';
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

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
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">お問い合わせ</h1>
          <div className="mb-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              ご質問やご要望がございましたら、下記のメールアドレスまでお気軽にお問い合わせください。
            </p>
          </div>
          <div 
            className={`inline-block px-6 py-4 text-xl font-medium rounded-lg cursor-pointer transition-all duration-300 ${
              copied 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
            onClick={handleEmailClick}
          >
            hello@utaraska.co.jp
            {copied && (
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded text-sm whitespace-nowrap animate-fadeInOut">
                コピーしました！
              </div>
            )}
          </div>
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

      <style jsx>{`
        @keyframes fadeInOut {
          0% { opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }
        .animate-fadeInOut {
          animation: fadeInOut 2s ease;
        }
      `}</style>
    </div>
  );
}
