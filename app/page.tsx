"use client";

// app/page.tsx
import Image from 'next/image';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function HomePage() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success('メールアドレスをコピーしました！', {
        style: {
          background: '#fbbf24',
          color: '#000',
          border: '4px solid #000',
          borderRadius: '0',
          fontWeight: 'bold',
        },
        iconTheme: {
          primary: '#000',
          secondary: '#fbbf24',
        },
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('コピーに失敗しました', {
        style: {
          background: '#ef4444',
          color: '#fff',
          border: '4px solid #000',
          borderRadius: '0',
          fontWeight: 'bold',
        },
      });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-50 to-cyan-100 overflow-hidden">
      <Toaster position="top-center" />
      
      {/* Hero Section */}
      <section className="relative px-4 py-16 lg:py-24 text-center min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full relative z-10">
          {/* Social Proof - 信頼感を高める要素 */}
          <div className="mb-8">
            <div className="bg-white px-6 py-3 rounded-full border-4 border-black transform rotate-1 inline-block">
              <span className="text-lg font-black text-black">
                🏆 大手放送局実績 | 🎯 多数番組担当 | ⭐ 放送品質のイラスト
              </span>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-12 relative">
            <div className="relative">
              <Image 
                src="/images/logo.png" 
                alt="ウタラスカ合同会社ロゴ" 
                width={200} 
                height={200}
                className="hover:scale-110 transition-transform duration-300 relative z-10"
                priority
              />
              {/* Decorative shapes around logo */}
              <div className="absolute -top-4 -left-8 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-6 -right-10 w-12 h-4 bg-pink-500 transform rotate-45"></div>
              <div className="absolute top-8 -right-6 w-6 h-6 bg-cyan-400 transform rotate-12"></div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="space-y-8 relative">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent leading-tight max-w-4xl mx-auto transform -rotate-1 font-rocknroll" style={{ fontFamily: '"RocknRoll One", sans-serif' }}>
              あそびゴコロ至上主義。
            </h1>
            
            {/* 解決する課題を明確化 */}
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-black font-black max-w-3xl mx-auto bg-cyan-300 px-6 py-4 rounded-none transform -rotate-1 shadow-xl border-4 border-black">
                ブランディングで差別化できない？<br />
                技術力不足でプロジェクトが停滞？
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-800 font-bold max-w-3xl mx-auto leading-relaxed bg-yellow-200 px-6 py-4 rounded-3xl transform rotate-1 shadow-2xl border-4 border-black">
                クリエイティブから最先端テクノロジーまで、<br className="hidden md:block" />幅広い領域でビジョンを実現
              </p>
            </div>
          </div>
        </div>
        
        {/* Memphis Style Background Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-pink-400 rounded-full opacity-80"></div>
        <div className="absolute top-32 right-16 w-16 h-32 bg-yellow-400 transform rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-cyan-400 transform -rotate-12"></div>
        <div className="absolute bottom-32 right-32 w-12 h-12 bg-green-400 rounded-full"></div>
        <div className="absolute top-1/3 left-1/4 w-8 h-24 bg-purple-400 transform rotate-12"></div>
        <div className="absolute top-2/3 right-1/4 w-24 h-8 bg-red-400 transform -rotate-45"></div>
        
        {/* Zigzag pattern */}
        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-pink-500 via-yellow-500 via-cyan-500 to-green-500 clip-path-zigzag"></div>
      </section>

      {/* Partners Section - パートナー企業ロゴ */}
      <section className="px-4 py-16 bg-white relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-black mb-4 bg-yellow-300 px-6 py-3 rounded-full border-4 border-black transform rotate-1 inline-block">
              信頼できるパートナー企業
            </h2>
            <p className="text-lg text-black font-bold bg-cyan-200 px-4 py-2 rounded-full border-4 border-black transform -rotate-1 inline-block">
              大手企業との実績多数
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
            {/* 実際の取引先企業ロゴ */}
            <div className="bg-gray-100 p-6 rounded-none border-4 border-black transform hover:rotate-3 transition-transform hover:scale-110">
              <div className="w-full h-12 flex items-center justify-center">
                <Image 
                  src="/images/logo/bs_fuji.png" 
                  alt="BSフジロゴ" 
                  width={80} 
                  height={48}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-none border-4 border-black transform hover:-rotate-2 transition-transform hover:scale-110">
              <div className="w-full h-12 flex items-center justify-center">
                <Image 
                  src="/images/logo/ntv.png" 
                  alt="日本テレビロゴ" 
                  width={80} 
                  height={48}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-none border-4 border-black transform hover:rotate-1 transition-transform hover:scale-110">
              <div className="w-full h-12 flex items-center justify-center">
                <Image 
                  src="/images/logo/tbs.png" 
                  alt="TBSロゴ" 
                  width={80} 
                  height={48}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-none border-4 border-black transform hover:-rotate-3 transition-transform hover:scale-110">
              <div className="w-full h-12 flex items-center justify-center">
                <Image 
                  src="/images/logo/tva.png" 
                  alt="テレビ朝日ロゴ" 
                  width={80} 
                  height={48}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-none border-4 border-black transform hover:rotate-2 transition-transform hover:scale-110">
              <div className="w-full h-12 flex items-center justify-center">
                <Image 
                  src="/images/logo/gmo.png" 
                  alt="GMOメディアロゴ" 
                  width={80} 
                  height={48}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-10 right-10 w-16 h-16 bg-pink-300 transform rotate-45"></div>
        <div className="absolute bottom-10 left-10 w-12 h-12 bg-yellow-300 rounded-full"></div>
      </section>

      {/* Main Image Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-purple-200 to-pink-200 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1 relative">
              <div className="relative rounded-none overflow-hidden shadow-2xl border-8 border-black transform -rotate-2 hover:rotate-1 transition-transform duration-500">
                <Image 
                  src="/images/main.png" 
                  alt="ウタラスカ合同会社のメイン画像" 
                  width={600} 
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-pink-500 transform rotate-45"></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6 relative">
              <div className="bg-cyan-300 p-8 rounded-none border-4 border-black transform rotate-1 shadow-xl">
                <h2 className="text-3xl md:text-4xl font-black text-black mb-4 transform -rotate-1">
                  革新的なソリューションで<br />お客様の成功を支援
                </h2>
                <p className="text-lg text-black font-bold leading-relaxed">
                  私たちは最新のテクノロジーとクリエイティブな発想を組み合わせ、お客様のビジネス課題を解決します。
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-6 bg-yellow-300 border-4 border-black rounded-full transform -rotate-3 hover:rotate-3 transition-transform">
                  <div className="text-3xl font-black text-black mb-2">100+</div>
                  <div className="text-sm font-bold text-black">プロジェクト実績</div>
                </div>
                <div className="text-center p-6 bg-pink-300 border-4 border-black transform rotate-2 hover:-rotate-2 transition-transform">
                  <div className="text-3xl font-black text-black mb-2">4分野</div>
                  <div className="text-sm font-bold text-black">専門技術領域</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Memphis elements */}
        <div className="absolute top-10 right-10 w-16 h-16 bg-green-400 transform rotate-45"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-red-400 rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-8 h-32 bg-purple-400 transform -rotate-12"></div>
      </section>

      {/* Benefits Section - ベネフィット（メリット） */}
      <section className="px-4 py-20 bg-gradient-to-l from-green-200 to-yellow-200 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6 transform -rotate-1 bg-pink-300 inline-block px-8 py-4 border-4 border-black">
              あなたのビジネスが得られるメリット
            </h2>
            <p className="text-xl text-black font-bold max-w-2xl mx-auto bg-cyan-200 px-6 py-3 rounded-full border-4 border-black">
              機能ではなく、成果にフォーカスしたソリューション
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 bg-pink-400 rounded-none border-4 border-black hover:bg-yellow-400 transition-all duration-300 hover:-translate-y-3 hover:rotate-2 transform">
              <div className="w-16 h-16 bg-white rounded-full mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-black text-2xl font-black">🎨</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-4">イラスト・動画制作</h3>
              <p className="text-black font-bold text-sm leading-relaxed">
                プロ品質のイラスト・動画で<br />
                <span className="text-lg">ブランド価値を向上</span>
              </p>
            </div>
            
            <div className="group p-8 bg-cyan-400 rounded-none border-4 border-black hover:bg-pink-400 transition-all duration-300 hover:-translate-y-3 hover:-rotate-1 transform rotate-1">
              <div className="w-16 h-16 bg-white rounded-full mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-black text-2xl font-black">🎮</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-4">ゲーム開発</h3>
              <p className="text-black font-bold text-sm leading-relaxed">
                Unity・HTML5ゲームで<br />
                <span className="text-lg">エンターテイメント体験を提供</span>
              </p>
            </div>
            
            <div className="group p-8 bg-yellow-400 rounded-none border-4 border-black hover:bg-cyan-400 transition-all duration-300 hover:-translate-y-3 hover:rotate-3 transform -rotate-1">
              <div className="w-16 h-16 bg-white rounded-full mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-black text-2xl font-black">🤖</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-4">AI技術活用</h3>
              <p className="text-black font-bold text-sm leading-relaxed">
                AI画像・動画・楽曲生成で<br />
                <span className="text-lg">制作効率を大幅向上</span>
              </p>
            </div>
            
            <div className="group p-8 bg-green-400 rounded-none border-4 border-black hover:bg-yellow-400 transition-all duration-300 hover:-translate-y-3 hover:-rotate-2 transform rotate-2">
              <div className="w-16 h-16 bg-white rounded-full mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-black text-2xl font-black">📱</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-4">LINE・Web3開発</h3>
              <p className="text-black font-bold text-sm leading-relaxed">
                LINE LIFF・Web3アプリで<br />
                <span className="text-lg">次世代プラットフォーム構築</span><br />
                <span className="text-sm">NFT・ブロックチェーン技術活用</span>
              </p>
            </div>
            
            <div className="group p-8 bg-purple-400 rounded-none border-4 border-black hover:bg-green-400 transition-all duration-300 hover:-translate-y-3 hover:rotate-1 transform -rotate-2">
              <div className="w-16 h-16 bg-white rounded-full mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-black text-2xl font-black">🏆</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-4">大手メディア実績</h3>
              <p className="text-black font-bold text-sm leading-relaxed">
                BSフジ・日本テレビ・TBSなど<br />
                <span className="text-lg">大手メディアとの実績多数</span>
              </p>
            </div>
            
            <div className="group p-8 bg-red-400 rounded-none border-4 border-black hover:bg-purple-400 transition-all duration-300 hover:-translate-y-3 hover:-rotate-3 transform rotate-3">
              <div className="w-16 h-16 bg-white rounded-full mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-black text-2xl font-black">🚀</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-4">総合ソリューション</h3>
              <p className="text-black font-bold text-sm leading-relaxed">
                受託から個人開発まで<br />
                <span className="text-lg">ワンストップでサポート</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-16 left-16 w-12 h-12 bg-red-500 rounded-full"></div>
        <div className="absolute bottom-16 right-16 w-20 h-8 bg-purple-500 transform rotate-45"></div>
      </section>

      {/* How it works Section - 使い方 */}
      <section className="px-4 py-20 bg-gradient-to-r from-purple-200 to-cyan-200 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6 transform rotate-1 bg-yellow-300 inline-block px-8 py-4 border-4 border-black">
              たった3ステップで始められる
            </h2>
            <p className="text-xl text-black font-bold max-w-2xl mx-auto bg-pink-200 px-6 py-3 rounded-full border-4 border-black">
              シンプルで分かりやすいプロセス
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-pink-400 p-8 rounded-none border-4 border-black transform rotate-2 hover:-rotate-2 transition-transform">
                <div className="w-20 h-20 bg-white rounded-full mb-6 flex items-center justify-center border-4 border-black mx-auto">
                  <span className="text-black text-3xl font-black">1</span>
                </div>
                <h3 className="text-2xl font-black text-black mb-4 text-center">お問い合わせ</h3>
                <p className="text-black font-bold text-center leading-relaxed">
                  まずは気軽にご相談ください<br />
                  <span className="text-lg">無料で現状分析いたします</span>
                </p>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <div className="w-8 h-8 bg-yellow-400 transform rotate-45 border-4 border-black"></div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative">
              <div className="bg-cyan-400 p-8 rounded-none border-4 border-black transform -rotate-1 hover:rotate-1 transition-transform">
                <div className="w-20 h-20 bg-white rounded-full mb-6 flex items-center justify-center border-4 border-black mx-auto">
                  <span className="text-black text-3xl font-black">2</span>
                </div>
                <h3 className="text-2xl font-black text-black mb-4 text-center">プラン提案</h3>
                <p className="text-black font-bold text-center leading-relaxed">
                  最適なソリューションを<br />
                  <span className="text-lg">カスタマイズしてご提案</span>
                </p>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <div className="w-8 h-8 bg-green-400 transform rotate-45 border-4 border-black"></div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative">
              <div className="bg-yellow-400 p-8 rounded-none border-4 border-black transform rotate-3 hover:-rotate-3 transition-transform">
                <div className="w-20 h-20 bg-white rounded-full mb-6 flex items-center justify-center border-4 border-black mx-auto">
                  <span className="text-black text-3xl font-black">3</span>
                </div>
                <h3 className="text-2xl font-black text-black mb-4 text-center">実装・運用</h3>
                <p className="text-black font-bold text-center leading-relaxed">
                  迅速な実装と<br />
                  <span className="text-lg">継続的なサポート</span>
                </p>
              </div>
            </div>
          </div>
          

        </div>
        
        {/* Background elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-red-400 transform rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-pink-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-32 bg-green-400 transform -rotate-12"></div>
      </section>

      {/* Works Section */}
      <section className="px-4 py-20 bg-gradient-to-br from-red-200 to-purple-200 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-8 transform rotate-1 bg-yellow-300 inline-block px-8 py-4 border-4 border-black">
              制作実績
            </h2>
            <p className="text-xl text-black font-bold bg-pink-200 px-6 py-3 rounded-full border-4 border-black transform -rotate-1 inline-block">
              大手メディアでの豊富な実績
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* BSフジ */}
            <div className="bg-white rounded-none p-8 shadow-xl border-4 border-black transform hover:rotate-2 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-2xl font-black text-white">📺</span>
              </div>
              <h3 className="text-xl font-black text-black mb-4 text-center">BSフジ</h3>
              <div className="space-y-2 mb-6">
                <p className="text-sm font-bold text-black text-center">クイズ脳ベルSHOW</p>
                <p className="text-xs text-gray-600 text-center">番組内クイズ用イラスト担当</p>
              </div>
              {/* 作品画像ギャラリー */}
              <div className="grid grid-cols-2 gap-2">
                <div className="relative rounded-none overflow-hidden border-2 border-black transform hover:scale-105 transition-transform">
                  <Image 
                    src="/images/bs_fuji_1.jpg" 
                    alt="BSフジ作品1" 
                    width={120} 
                    height={80}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative rounded-none overflow-hidden border-2 border-black transform hover:scale-105 transition-transform">
                  <Image 
                    src="/images/bs_fuji_2.jpg" 
                    alt="BSフジ作品2" 
                    width={120} 
                    height={80}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative rounded-none overflow-hidden border-2 border-black transform hover:scale-105 transition-transform">
                  <Image 
                    src="/images/bs_fuji_3.jpg" 
                    alt="BSフジ作品3" 
                    width={120} 
                    height={80}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative rounded-none overflow-hidden border-2 border-black transform hover:scale-105 transition-transform">
                  <Image 
                    src="/images/bs_fuji_4.jpg" 
                    alt="BSフジ作品4" 
                    width={120} 
                    height={80}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative rounded-none overflow-hidden border-2 border-black transform hover:scale-105 transition-transform">
                  <Image 
                    src="/images/bs_fuji_5.png" 
                    alt="BSフジ作品5" 
                    width={120} 
                    height={80}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative rounded-none overflow-hidden border-2 border-black transform hover:scale-105 transition-transform">
                  <Image 
                    src="/images/bs_fuji_6.png" 
                    alt="BSフジ作品6" 
                    width={120} 
                    height={80}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative rounded-none overflow-hidden border-2 border-black transform hover:scale-105 transition-transform">
                  <Image 
                    src="/images/bs_fuji_7.png" 
                    alt="BSフジ作品7" 
                    width={120} 
                    height={80}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative rounded-none overflow-hidden border-2 border-black transform hover:scale-105 transition-transform">
                  <Image 
                    src="/images/bs_fuji_8.png" 
                    alt="BSフジ作品8" 
                    width={120} 
                    height={80}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* TBS */}
            <div className="bg-white rounded-none p-8 shadow-xl border-4 border-black transform hover:-rotate-1 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-2xl font-black text-white">🎬</span>
              </div>
              <h3 className="text-xl font-black text-black mb-4 text-center">TBS</h3>
              <div className="space-y-2 mb-6">
                <p className="text-sm font-bold text-black text-center">がっちりマンデー</p>
                <p className="text-xs text-gray-600 text-center">番組内イラスト担当</p>
                <p className="text-sm font-bold text-black text-center">私が女優になる日</p>
                <p className="text-xs text-gray-600 text-center">番組内イラスト担当</p>
              </div>
              {/* 作品画像ギャラリー */}
              <div className="grid grid-cols-2 gap-2">
                <div className="relative rounded-none overflow-hidden border-2 border-black transform hover:scale-105 transition-transform">
                  <Image 
                    src="/images/tbs_1.jpg" 
                    alt="TBS作品1" 
                    width={120} 
                    height={80}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative rounded-none overflow-hidden border-2 border-black transform hover:scale-105 transition-transform">
                  <Image 
                    src="/images/tbs_2.jpg" 
                    alt="TBS作品2" 
                    width={120} 
                    height={80}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative rounded-none overflow-hidden border-2 border-black transform hover:scale-105 transition-transform">
                  <Image 
                    src="/images/tbs_3.png" 
                    alt="TBS作品3" 
                    width={120} 
                    height={80}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative rounded-none overflow-hidden border-2 border-black transform hover:scale-105 transition-transform">
                  <Image 
                    src="/images/tbs_4.png" 
                    alt="TBS作品4" 
                    width={120} 
                    height={80}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative rounded-none overflow-hidden border-2 border-black transform hover:scale-105 transition-transform">
                  <Image 
                    src="/images/tbs_5.png" 
                    alt="TBS作品5" 
                    width={120} 
                    height={80}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative rounded-none overflow-hidden border-2 border-black transform hover:scale-105 transition-transform">
                  <Image 
                    src="/images/tbs_6.png" 
                    alt="TBS作品6" 
                    width={120} 
                    height={80}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* 日本テレビ */}
            <div className="bg-white rounded-none p-8 shadow-xl border-4 border-black transform hover:rotate-1 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-2xl font-black text-white">📡</span>
              </div>
              <h3 className="text-xl font-black text-black mb-4 text-center">日本テレビ</h3>
              <div className="space-y-2 mb-6">
                <p className="text-sm font-bold text-black text-center">霜降り風磨のワクワク経済</p>
                <p className="text-xs text-gray-600 text-center">番組内イラスト担当</p>
                <p className="text-sm font-bold text-black text-center">THE突破ファイル</p>
                <p className="text-xs text-gray-600 text-center">番組内イラスト担当</p>
                <p className="text-sm font-bold text-black text-center">有吉ゼミ</p>
                <p className="text-xs text-gray-600 text-center">番組内イラスト担当</p>
                <p className="text-sm font-bold text-black text-center">人生が変わる1分間の深イイ話</p>
                <p className="text-xs text-gray-600 text-center">番組内イラスト担当</p>
                <p className="text-sm font-bold text-black text-center">エンタの神様</p>
                <p className="text-xs text-gray-600 text-center">番組内イラスト担当</p>
                <p className="text-sm font-bold text-black text-center">世界まる見え！特捜部</p>
                <p className="text-xs text-gray-600 text-center">番組内イラスト担当</p>
              </div>
              {/* 作品画像ギャラリー */}
              <div className="grid grid-cols-2 gap-2">
                <div className="relative rounded-none overflow-hidden border-2 border-black transform hover:scale-105 transition-transform">
                  <Image 
                    src="/images/ntv_1.jpg" 
                    alt="日本テレビ作品1" 
                    width={120} 
                    height={80}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative rounded-none overflow-hidden border-2 border-black transform hover:scale-105 transition-transform">
                  <Image 
                    src="/images/ntv_2.jpg" 
                    alt="日本テレビ作品2" 
                    width={120} 
                    height={80}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* テレビ朝日 */}
            <div className="bg-white rounded-none p-8 shadow-xl border-4 border-black transform hover:-rotate-2 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-2xl font-black text-white">🌟</span>
              </div>
              <h3 className="text-xl font-black text-black mb-4 text-center">テレビ朝日</h3>
              <div className="space-y-2 mb-6">
                <p className="text-sm font-bold text-black text-center">10万円でできるかな</p>
                <p className="text-xs text-gray-600 text-center">番組内イラスト担当</p>
                <p className="text-sm font-bold text-black text-center">帰れマンデーみっけ隊！！</p>
                <p className="text-xs text-gray-600 text-center">番組内イラスト担当</p>
              </div>
              {/* 作品画像ギャラリー */}
              <div className="grid grid-cols-2 gap-2">
                <div className="relative rounded-none overflow-hidden border-2 border-black transform hover:scale-105 transition-transform">
                  <Image 
                    src="/images/tva_1.png" 
                    alt="テレビ朝日作品1" 
                    width={120} 
                    height={80}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative rounded-none overflow-hidden border-2 border-black transform hover:scale-105 transition-transform">
                  <Image 
                    src="/images/tva_2.png" 
                    alt="テレビ朝日作品2" 
                    width={120} 
                    height={80}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* GMOメディア */}
            <div className="bg-white rounded-none p-8 shadow-xl border-4 border-black transform hover:rotate-1 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-2xl font-black text-white">🎮</span>
              </div>
              <h3 className="text-xl font-black text-black mb-4 text-center">GMOメディア</h3>
              <div className="space-y-2 mb-6">
                <p className="text-sm font-bold text-black text-center">かんたんゲームボックス</p>
                <p className="text-xs text-gray-600 text-center">ポイントタウンなど複数のプラットフォーム</p>
                <p className="text-sm font-bold text-black text-center">カジュアルゲーム提供</p>
              </div>
              {/* プレースホルダー画像 */}
              <div className="grid grid-cols-2 gap-2">
                <div className="w-full h-20 bg-gradient-to-r from-orange-300 to-red-300 border-2 border-black flex items-center justify-center">
                  <span className="text-xs font-black text-black">GMO作品</span>
                </div>
                <div className="w-full h-20 bg-gradient-to-r from-orange-300 to-red-300 border-2 border-black flex items-center justify-center">
                  <span className="text-xs font-black text-black">GMO作品</span>
                </div>
              </div>
            </div>
            
            {/* 実績サマリー */}
            <div className="bg-gradient-to-r from-pink-400 to-yellow-400 rounded-none p-8 shadow-xl border-4 border-black transform hover:-rotate-1 transition-transform">
              <div className="w-16 h-16 bg-white rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-2xl font-black text-black">🏆</span>
              </div>
              <h3 className="text-xl font-black text-black mb-4 text-center">実績サマリー</h3>
              <div className="space-y-2">
                <p className="text-sm font-bold text-black text-center">大手放送局との実績</p>
                <p className="text-xs text-black text-center">BSフジ・TBS・日本テレビ・テレビ朝日</p>
                <p className="text-sm font-bold text-black text-center">大手メディア企業との実績</p>
                <p className="text-xs text-black text-center">GMOメディア・ゲームプラットフォーム</p>
                <p className="text-sm font-bold text-black text-center">多数の番組実績</p>
                <p className="text-xs text-black text-center">長期的な信頼関係を構築</p>
                <p className="text-sm font-bold text-black text-center">高品質なイラスト・ゲーム</p>
                <p className="text-xs text-black text-center">放送品質・ゲーム品質に耐えるクオリティ</p>
                <p className="text-sm font-bold text-black text-center">継続的なパートナーシップ</p>
                <p className="text-xs text-black text-center">大手メディアからの信頼</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-10 right-20 w-16 h-16 bg-cyan-400 transform rotate-12"></div>
        <div className="absolute bottom-20 left-20 w-12 h-24 bg-green-400 transform -rotate-45"></div>
      </section>

      {/* 自社開発エリア */}
      <section className="px-4 py-20 bg-gradient-to-br from-blue-200 to-indigo-200 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-8 transform -rotate-1 bg-cyan-300 inline-block px-8 py-4 border-4 border-black">
              自社開発
            </h2>
            <p className="text-xl text-black font-bold bg-blue-200 px-6 py-3 rounded-full border-4 border-black transform rotate-1 inline-block">
              最先端テクノロジーで創造する未来
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Unityゲーム開発 */}
            <div className="bg-white rounded-none p-8 shadow-xl border-4 border-black transform hover:rotate-2 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-2xl font-black text-white">🎮</span>
              </div>
              <h3 className="text-xl font-black text-black mb-4 text-center">Unityゲーム開発</h3>
              <div className="space-y-2 mb-6">
                <p className="text-sm font-bold text-black text-center">モバイル・PCゲーム</p>
                <p className="text-xs text-gray-600 text-center">3D・2Dゲーム開発</p>
                <p className="text-sm font-bold text-black text-center">VR・AR対応</p>
                <p className="text-xs text-gray-600 text-center">最新技術を活用</p>
              </div>
              {/* プレースホルダー画像 */}
              <div className="grid grid-cols-2 gap-2">
                <div className="w-full h-20 bg-gradient-to-r from-purple-300 to-pink-300 border-2 border-black flex items-center justify-center">
                  <span className="text-xs font-black text-black">Unity作品</span>
                </div>
                <div className="w-full h-20 bg-gradient-to-r from-purple-300 to-pink-300 border-2 border-black flex items-center justify-center">
                  <span className="text-xs font-black text-black">Unity作品</span>
                </div>
              </div>
            </div>
            
            {/* HTML5ゲーム開発 */}
            <div className="bg-white rounded-none p-8 shadow-xl border-4 border-black transform hover:-rotate-1 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-2xl font-black text-white">🌐</span>
              </div>
              <h3 className="text-xl font-black text-black mb-4 text-center">HTML5ゲーム開発</h3>
              <div className="space-y-2 mb-6">
                <p className="text-sm font-bold text-black text-center">ブラウザゲーム</p>
                <p className="text-xs text-gray-600 text-center">クロスプラットフォーム</p>
                <p className="text-sm font-bold text-black text-center">スマホ対応</p>
                <p className="text-xs text-gray-600 text-center">即座にプレイ可能</p>
              </div>
              {/* プレースホルダー画像 */}
              <div className="grid grid-cols-2 gap-2">
                <div className="w-full h-20 bg-gradient-to-r from-green-300 to-blue-300 border-2 border-black flex items-center justify-center">
                  <span className="text-xs font-black text-black">HTML5作品</span>
                </div>
                <div className="w-full h-20 bg-gradient-to-r from-green-300 to-blue-300 border-2 border-black flex items-center justify-center">
                  <span className="text-xs font-black text-black">HTML5作品</span>
                </div>
              </div>
            </div>
            
            {/* SNS運用 */}
            <div className="bg-white rounded-none p-8 shadow-xl border-4 border-black transform hover:rotate-1 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-2xl font-black text-white">📱</span>
              </div>
              <h3 className="text-xl font-black text-black mb-4 text-center">SNS運用</h3>
              <div className="space-y-2 mb-6">
                <p className="text-sm font-bold text-black text-center">TikTok・Instagram</p>
                <p className="text-xs text-gray-600 text-center">動画・画像制作</p>
                <p className="text-sm font-bold text-black text-center">コンテンツ企画</p>
                <p className="text-xs text-gray-600 text-center">エンゲージメント向上</p>
              </div>
              {/* プレースホルダー画像 */}
              <div className="grid grid-cols-2 gap-2">
                <div className="w-full h-20 bg-gradient-to-r from-pink-300 to-red-300 border-2 border-black flex items-center justify-center">
                  <span className="text-xs font-black text-black">SNS作品</span>
                </div>
                <div className="w-full h-20 bg-gradient-to-r from-pink-300 to-red-300 border-2 border-black flex items-center justify-center">
                  <span className="text-xs font-black text-black">SNS作品</span>
                </div>
              </div>
            </div>
            
            {/* 動画編集 */}
            <div className="bg-white rounded-none p-8 shadow-xl border-4 border-black transform hover:-rotate-2 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-2xl font-black text-white">🎬</span>
              </div>
              <h3 className="text-xl font-black text-black mb-4 text-center">動画編集</h3>
              <div className="space-y-2 mb-6">
                <p className="text-sm font-bold text-black text-center">プロ品質編集</p>
                <p className="text-xs text-gray-600 text-center">エフェクト・アニメーション</p>
                <p className="text-sm font-bold text-black text-center">マルチプラットフォーム</p>
                <p className="text-xs text-gray-600 text-center">高品質出力</p>
              </div>
              {/* プレースホルダー画像 */}
              <div className="grid grid-cols-2 gap-2">
                <div className="w-full h-20 bg-gradient-to-r from-yellow-300 to-orange-300 border-2 border-black flex items-center justify-center">
                  <span className="text-xs font-black text-black">動画作品</span>
                </div>
                <div className="w-full h-20 bg-gradient-to-r from-yellow-300 to-orange-300 border-2 border-black flex items-center justify-center">
                  <span className="text-xs font-black text-black">動画作品</span>
                </div>
              </div>
            </div>
            
            {/* AI生成 */}
            <div className="bg-white rounded-none p-8 shadow-xl border-4 border-black transform hover:rotate-3 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-2xl font-black text-white">🤖</span>
              </div>
              <h3 className="text-xl font-black text-black mb-4 text-center">AI生成</h3>
              <div className="space-y-2 mb-6">
                <p className="text-sm font-bold text-black text-center">画像・動画・音楽</p>
                <p className="text-xs text-gray-600 text-center">最新AI技術活用</p>
                <p className="text-sm font-bold text-black text-center">高品質生成</p>
                <p className="text-xs text-gray-600 text-center">カスタマイズ可能</p>
              </div>
              {/* プレースホルダー画像 */}
              <div className="grid grid-cols-2 gap-2">
                <div className="w-full h-20 bg-gradient-to-r from-cyan-300 to-blue-300 border-2 border-black flex items-center justify-center">
                  <span className="text-xs font-black text-black">AI作品</span>
                </div>
                <div className="w-full h-20 bg-gradient-to-r from-cyan-300 to-blue-300 border-2 border-black flex items-center justify-center">
                  <span className="text-xs font-black text-black">AI作品</span>
                </div>
              </div>
            </div>
            
            {/* NFT制作 */}
            <div className="bg-white rounded-none p-8 shadow-xl border-4 border-black transform hover:-rotate-3 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-2xl font-black text-white">🖼️</span>
              </div>
              <h3 className="text-xl font-black text-black mb-4 text-center">NFT制作</h3>
              <div className="space-y-2 mb-6">
                <p className="text-sm font-bold text-black text-center">デジタルアート</p>
                <p className="text-xs text-gray-600 text-center">ブロックチェーン対応</p>
                <p className="text-sm font-bold text-black text-center">コレクション制作</p>
                <p className="text-xs text-gray-600 text-center">マーケットプレイス対応</p>
              </div>
              {/* プレースホルダー画像 */}
              <div className="grid grid-cols-2 gap-2">
                <div className="w-full h-20 bg-gradient-to-r from-indigo-300 to-purple-300 border-2 border-black flex items-center justify-center">
                  <span className="text-xs font-black text-black">NFT作品</span>
                </div>
                <div className="w-full h-20 bg-gradient-to-r from-indigo-300 to-purple-300 border-2 border-black flex items-center justify-center">
                  <span className="text-xs font-black text-black">NFT作品</span>
                </div>
              </div>
            </div>
            
            {/* Web3関連アプリ開発 */}
            <div className="bg-white rounded-none p-8 shadow-xl border-4 border-black transform hover:rotate-1 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-2xl font-black text-white">🔗</span>
              </div>
              <h3 className="text-xl font-black text-black mb-4 text-center">Web3関連アプリ開発</h3>
              <div className="space-y-2 mb-6">
                <p className="text-sm font-bold text-black text-center">ブロックチェーン</p>
                <p className="text-xs text-gray-600 text-center">DeFi・DApp開発</p>
                <p className="text-sm font-bold text-black text-center">スマートコントラクト</p>
                <p className="text-xs text-gray-600 text-center">次世代Webアプリ</p>
              </div>
              {/* プレースホルダー画像 */}
              <div className="grid grid-cols-2 gap-2">
                <div className="w-full h-20 bg-gradient-to-r from-emerald-300 to-teal-300 border-2 border-black flex items-center justify-center">
                  <span className="text-xs font-black text-black">Web3作品</span>
                </div>
                <div className="w-full h-20 bg-gradient-to-r from-emerald-300 to-teal-300 border-2 border-black flex items-center justify-center">
                  <span className="text-xs font-black text-black">Web3作品</span>
                </div>
              </div>
            </div>
            
            {/* 自社開発サマリー */}
            <div className="bg-gradient-to-r from-blue-400 to-indigo-400 rounded-none p-8 shadow-xl border-4 border-black transform hover:-rotate-1 transition-transform">
              <div className="w-16 h-16 bg-white rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-2xl font-black text-black">🚀</span>
              </div>
              <h3 className="text-xl font-black text-black mb-4 text-center">自社開発サマリー</h3>
              <div className="space-y-2">
                <p className="text-sm font-bold text-black text-center">7つの技術領域</p>
                <p className="text-xs text-black text-center">Unity・HTML5・SNS・動画・AI・NFT・Web3</p>
                <p className="text-sm font-bold text-black text-center">最先端技術</p>
                <p className="text-xs text-black text-center">常に最新トレンドをキャッチ</p>
                <p className="text-sm font-bold text-black text-center">総合ソリューション</p>
                <p className="text-xs text-black text-center">ワンストップで開発サポート</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-10 left-20 w-16 h-16 bg-indigo-400 transform rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-12 h-24 bg-blue-400 transform -rotate-12"></div>
        <div className="absolute top-1/2 right-10 w-8 h-32 bg-purple-400 transform rotate-30"></div>
      </section>

      {/* 会社概要 Section */}
      <section className="px-4 py-20 bg-gradient-to-br from-gray-200 to-slate-200 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-8 transform rotate-1 bg-yellow-300 inline-block px-8 py-4 border-4 border-black">
              会社概要
            </h2>
            <p className="text-xl text-black font-bold bg-pink-200 px-6 py-3 rounded-full border-4 border-black transform -rotate-1 inline-block">
              ウタラスカ合同会社について
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* 会社情報 */}
            <div className="bg-white rounded-none p-8 shadow-xl border-4 border-black transform hover:rotate-2 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-2xl font-black text-white">🏢</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-6 text-center">会社情報</h3>
              <div className="space-y-4">
                <div className="border-b-2 border-gray-300 pb-3">
                  <p className="text-sm font-bold text-gray-600">社名</p>
                  <p className="text-lg font-black text-black">utaraska合同会社（ウタラスカ）</p>
                </div>
                <div className="border-b-2 border-gray-300 pb-3">
                  <p className="text-sm font-bold text-gray-600">代表者</p>
                  <p className="text-lg font-black text-black">平澤 誠</p>
                </div>
                <div className="border-b-2 border-gray-300 pb-3">
                  <p className="text-sm font-bold text-gray-600">所在地</p>
                  <p className="text-lg font-black text-black">東京都渋谷区神宮前4-18-9</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-600">設立日</p>
                  <p className="text-lg font-black text-black">2021年4月1日</p>
                </div>
              </div>
            </div>
            
            {/* 事業内容 */}
            <div className="bg-white rounded-none p-8 shadow-xl border-4 border-black transform hover:-rotate-1 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-2xl font-black text-white">💼</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-6 text-center">事業内容</h3>
              <div className="space-y-4">
                <div className="bg-yellow-200 p-4 rounded-none border-2 border-black">
                  <h4 className="text-lg font-black text-black mb-2">受託事業</h4>
                  <ul className="text-sm font-bold text-black space-y-1">
                    <li>• イラスト制作</li>
                    <li>• Unityアニメーション制作</li>
                    <li>• AI画像生成</li>
                    <li>• 動画編集</li>
                  </ul>
                </div>
                <div className="bg-cyan-200 p-4 rounded-none border-2 border-black">
                  <h4 className="text-lg font-black text-black mb-2">個人開発</h4>
                  <ul className="text-sm font-bold text-black space-y-1">
                    <li>• Unityゲーム開発</li>
                    <li>• HTML5ゲーム開発</li>
                    <li>• LINE LIFF開発</li>
                    <li>• AI画像・動画・楽曲生成</li>
                    <li>• NFT制作</li>
                    <li>• Web3関連アプリ開発</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-10 right-20 w-16 h-16 bg-yellow-400 transform rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-12 h-24 bg-pink-400 transform -rotate-12"></div>
        <div className="absolute top-1/2 left-10 w-8 h-32 bg-purple-400 transform rotate-30"></div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-20 bg-black text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-8 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent transform -rotate-1">
            お問い合わせ
          </h2>
          <p className="text-xl text-yellow-300 font-bold mb-12 max-w-2xl mx-auto bg-purple-600 px-6 py-4 rounded-full border-4 border-white transform rotate-1">
            プロジェクトのご相談やお見積もりなど、お気軽にお声がけください
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://x.com/utaraska" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-400 to-pink-400 text-black rounded-full hover:from-yellow-400 hover:to-green-400 transition-all duration-300 hover:scale-110 border-4 border-white font-black transform hover:rotate-2"
            >
              <span className="text-2xl">𝕏</span>
              <span className="font-black">@utaraska</span>
            </a>
            
            <button 
              onClick={() => copyToClipboard('contact@utaraska.co.jp')}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-green-400 text-black rounded-full hover:from-pink-400 hover:to-cyan-400 transition-all duration-300 hover:scale-110 border-4 border-white font-black transform hover:-rotate-2 cursor-pointer"
            >
              <span className="text-2xl">{copied ? '✅' : '📧'}</span>
              <span className="font-black">{copied ? 'コピー完了！' : 'contact@utaraska.co.jp'}</span>
            </button>
          </div>
        </div>
        
        {/* Memphis background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-32 right-16 w-12 h-32 bg-pink-400 transform rotate-45"></div>
        <div className="absolute bottom-20 left-32 w-16 h-16 bg-green-400 transform -rotate-12"></div>
        <div className="absolute bottom-32 right-20 w-24 h-8 bg-cyan-400 transform rotate-30"></div>
      </section>
      
      {/* Footer */}
      <footer className="px-4 py-8 bg-gradient-to-r from-pink-500 via-yellow-500 to-cyan-500 border-t-8 border-black relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-black font-black text-lg bg-white px-6 py-3 rounded-full border-4 border-black inline-block transform -rotate-1">
            © 2025 ウタラスカ合同会社. All rights reserved.
          </p>
        </div>
        <div className="absolute top-2 left-10 w-8 h-8 bg-red-500 rounded-full"></div>
        <div className="absolute top-2 right-10 w-6 h-6 bg-purple-500 transform rotate-45"></div>
      </footer>
    </main>
  );
}
