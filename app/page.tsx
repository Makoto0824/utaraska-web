"use client";

// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
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
                イラスト制作（放映・プロモ） | ゲーム開発・自社リリース
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
                イラストで世界観を固め、<br />
                ゲームで「あそび」を届ける。
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-800 font-bold max-w-3xl mx-auto leading-relaxed bg-yellow-200 px-6 py-4 rounded-3xl transform rotate-1 shadow-2xl border-4 border-black">
                受託のイラスト制作と、企画からリリースまでのゲーム開発。<br className="hidden md:block" />
                2本柱で、伝えたい体験を形にします。
              </p>
              <p className="text-base md:text-lg text-black font-bold max-w-3xl mx-auto leading-relaxed bg-lime-200 px-6 py-4 rounded-3xl border-4 border-black shadow-xl transform -rotate-1">
                イラスト・キャラクターデザインから、AIを活用したアプリ・ゲーム開発まで
                <strong className="text-black">一気通貫</strong>
                で対応。モダンな開発（バイブコーディング等）で工程を効率化し、
                <strong className="text-black">他社に比べて抑えたお見積り</strong>
                を実現しやすいのが強みです。
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
              イラスト・ゲームでお世話になったパートナー
            </h2>
            <p className="text-lg text-black font-bold bg-cyan-200 px-4 py-2 rounded-full border-4 border-black transform -rotate-1 inline-block">
              放映局・ゲーム配信で培った実績
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
                  イラスト × ゲームの<br />専業スタジオ
                </h2>
                <p className="text-lg text-black font-bold leading-relaxed">
                  番組やキャンペーン向けのイラスト・キャラクターデザインから、モバイルやブラウザのゲーム・アプリまで
                  <strong className="text-black">ワンストップ</strong>
                  で相談いただけます。制作フローにAIやバイブコーディングを組み合わせ、外注の段階を減らすことで
                  <strong className="text-black">コストを抑えたご提案</strong>
                  が可能です。
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-6 bg-yellow-300 border-4 border-black rounded-full transform -rotate-3 hover:rotate-3 transition-transform">
                  <div className="text-3xl font-black text-black mb-2">100+</div>
                  <div className="text-sm font-bold text-black">プロジェクト実績</div>
                </div>
                <div className="text-center p-6 bg-pink-300 border-4 border-black transform rotate-2 hover:-rotate-2 transition-transform">
                  <div className="text-3xl font-black text-black mb-2">2本柱</div>
                  <div className="text-sm font-bold text-black">イラストとゲーム</div>
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
              イラストとゲームで叶えること
            </h2>
            <p className="text-xl text-black font-bold max-w-2xl mx-auto bg-cyan-200 px-6 py-3 rounded-full border-4 border-black">
              ビジュアルとプレイ体験の両方から、ブランドの「あそび」を届けます
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group p-8 bg-pink-400 rounded-none border-4 border-black hover:bg-yellow-400 transition-all duration-300 hover:-translate-y-3 hover:rotate-2 transform">
              <div className="w-16 h-16 bg-white rounded-full mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-black text-2xl font-black">絵</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-4">イラスト・キャラデザイン</h3>
              <p className="text-black font-bold text-sm leading-relaxed">
                番組・映像・プロモーション向けの<br />
                <span className="text-lg">イラスト・キャラクター制作（放送運用品質）</span>
              </p>
            </div>
            
            <div className="group p-8 bg-cyan-400 rounded-none border-4 border-black transition-all duration-300 hover:-translate-y-3 hover:-rotate-1 hover:bg-pink-400 transform rotate-1">
              <div className="w-16 h-16 bg-white rounded-full mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-black text-2xl font-black">遊</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-4">ゲーム開発</h3>
              <p className="text-black font-bold text-sm leading-relaxed">
                企画からリリースまで、自社タイトルと受託の両方で<br />
                <span className="text-lg">プレイ体験を設計</span>
              </p>
              <p className="mt-4 text-xs font-bold text-gray-900">
                公開タイトル一覧は、このページの<strong>制作実績エリア</strong>
                （ゲーム作品・公開一覧）からご覧ください。
              </p>
            </div>
            
            <div className="group p-8 bg-purple-400 rounded-none border-4 border-black hover:bg-green-400 transition-all duration-300 hover:-translate-y-3 hover:rotate-1 transform -rotate-2">
              <div className="w-16 h-16 bg-white rounded-full mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-black text-2xl font-black">映</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-4">放映・メディア実績</h3>
              <p className="text-black font-bold text-sm leading-relaxed">
                BSフジ・日本テレビ・TBS・テレビ朝日など<br />
                <span className="text-lg">イラスト制作の豊富な番組経験</span>
              </p>
            </div>
            
            <div className="group p-8 bg-green-400 rounded-none border-4 border-black hover:bg-red-400 transition-all duration-300 hover:-translate-y-3 hover:-rotate-2 transform rotate-2">
              <div className="w-16 h-16 bg-white rounded-full mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-black text-2xl font-black">貫</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-4">一気通貫 × コスト優位</h3>
              <p className="text-black font-bold text-sm leading-relaxed">
                ビジュアル制作から、AIを活用したアプリ・ゲーム実装まで一つの窓口で。<br />
                <span className="text-lg">バイブコーディング等で実装を加速し、イラストから実装まで一体で進められる体制のため、多段階の外注に比べて</span>
                <span className="text-lg">お見積りを抑えやすい</span>
                のが強みです。
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
              ご相談からの流れ
            </h2>
            <p className="text-xl text-black font-bold max-w-2xl mx-auto bg-pink-200 px-6 py-3 rounded-full border-4 border-black">
              イラスト・ゲーム、どちらでもシンプルに
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
                  イラスト・ゲームのご要件を<br />
                  <span className="text-lg">お気軽にお寄せください</span>
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
                  内容に沿ったスケジュール・お見積りを<br />
                  <span className="text-lg">ご提案します</span>
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
                <h3 className="text-2xl font-black text-black mb-4 text-center">制作・リリース</h3>
                <p className="text-black font-bold text-center leading-relaxed">
                  イラストは納品、ゲームはテストプレイを経て<br />
                  <span className="text-lg">リリースまで伴走します</span>
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
          <div className="mb-16 grid gap-12 md:grid-cols-2 md:items-start md:gap-10">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-8 transform rotate-1 bg-yellow-300 inline-block px-8 py-4 border-4 border-black">
                イラスト制作実績
              </h2>
              <p className="text-xl text-black font-bold bg-pink-200 px-6 py-3 rounded-full border-4 border-black transform -rotate-1 inline-block">
                放映局・番組向けの担当事例（抜粋）
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-8 transform -rotate-1 bg-cyan-300 inline-block px-8 py-4 border-4 border-black shadow-[8px_8px_0_0_rgb(0,0,0)]">
                ゲーム作品・公開一覧
              </h2>
              <p className="mb-8 text-xl text-black font-bold bg-lime-200 px-6 py-3 rounded-full border-4 border-black transform rotate-1 inline-block">
                App Store・ブラウザ（かんたんゲームボックス掲載）
              </p>
              <Link
                href="/games"
                className="inline-block border-4 border-black bg-black px-10 py-5 text-xl font-black text-white shadow-[8px_8px_0_0_rgb(0,0,0)] transition-colors hover:bg-gray-800 md:text-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                /games で詳細を見る →
              </Link>
              <p className="mx-auto mt-6 max-w-md text-sm font-bold leading-relaxed text-gray-900">
                自社モバイルタイトル・ブラウザ向けカジュアルゲームの紹介、ストア・プレイリンクは専用ページに集約しています。
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* BSフジ */}
            <div className="bg-white rounded-none p-8 shadow-xl border-4 border-black transform hover:rotate-2 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-2xl font-black text-white">BS</span>
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
                <span className="text-2xl font-black text-white">TB</span>
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
                <span className="text-2xl font-black text-white">NT</span>
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
                <span className="text-2xl font-black text-white">TA</span>
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
            
            {/* 実績サマリー */}
            <div className="bg-gradient-to-r from-pink-400 to-yellow-400 rounded-none p-8 shadow-xl border-4 border-black transform hover:-rotate-1 transition-transform">
              <div className="w-16 h-16 bg-white rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-2xl font-black text-black">要</span>
              </div>
              <h3 className="text-xl font-black text-black mb-4 text-center">実績サマリー</h3>
              <div className="space-y-2">
                <p className="text-sm font-bold text-black text-center">放映局とのイラスト実績</p>
                <p className="text-xs text-black text-center">BSフジ・TBS・日本テレビ・テレビ朝日</p>
                <p className="text-sm font-bold text-black text-center">ブラウザゲームの提供</p>
                <p className="text-xs text-black text-center">ゲーム配信プラットフォーム向け</p>
                <p className="text-sm font-bold text-black text-center">自社ゲームのリリース</p>
                <p className="text-xs text-black text-center">モバイルアプリ・Web（詳細はゲームページ）</p>
                <p className="text-sm font-bold text-black text-center">高品質なイラスト・ゲーム表現</p>
                <p className="text-xs text-black text-center">オンエア・配信に耐えるクオリティ</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-10 right-20 w-16 h-16 bg-cyan-400 transform rotate-12"></div>
        <div className="absolute bottom-20 left-20 w-12 h-24 bg-green-400 transform -rotate-45"></div>
      </section>

      {/* 会社概要 Section */}
      <section className="px-4 py-20 bg-gradient-to-br from-gray-200 to-slate-200 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-8 transform rotate-1 bg-yellow-300 inline-block px-8 py-4 border-4 border-black">
              会社概要
            </h2>
            <p className="text-xl text-black font-bold bg-pink-200 px-6 py-3 rounded-full border-4 border-black transform -rotate-1 inline-block">
              イラスト制作とゲーム開発を軸にしたクリエイティブスタジオ
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* 会社情報 */}
            <div className="bg-white rounded-none p-8 shadow-xl border-4 border-black transform hover:rotate-2 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-2xl font-black text-white">社</span>
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
                  <p className="text-lg font-black text-black">〒150-0043<br />東京都渋谷区道玄坂1丁目10番8号<br />渋谷道玄坂東急ビル2F−C</p>
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
                <span className="text-2xl font-black text-white">業</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-6 text-center">事業内容</h3>
              <div className="space-y-4">
                <div className="bg-yellow-200 p-4 rounded-none border-2 border-black">
                  <h4 className="text-lg font-black text-black mb-2">受託（イラスト・ビジュアル）</h4>
                  <ul className="text-sm font-bold text-black space-y-1">
                    <li>• イラスト・キャラクターデザイン（テレビ・映像・プロモーション等）</li>
                    <li>• 番組内ビジュアル・クイズ・解説用イラスト</li>
                  </ul>
                </div>
                <div className="bg-cyan-200 p-4 rounded-none border-2 border-black">
                  <h4 className="text-lg font-black text-black mb-2">ゲーム・アプリ開発</h4>
                  <ul className="text-sm font-bold text-black space-y-1">
                    <li>• ゲーム・アプリの企画・開発（モバイル・ブラウザ等）</li>
                    <li>• キャラクター・イラスト資産から実装まで一気通貫でのご相談</li>
                    <li>• AI活用・バイブコーディングによる効率化で、コストを抑えた開発支援</li>
                    <li>• 自社タイトルの企画・リリース・運営</li>
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
            イラスト・ゲームのご相談、お見積りはお気軽にどうぞ
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://x.com/utaraska" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-400 to-pink-400 text-black rounded-full hover:from-yellow-400 hover:to-green-400 transition-all duration-300 hover:scale-110 border-4 border-white font-black transform hover:rotate-2"
            >
              <span className="font-black">X</span>
              <span className="font-black">@utaraska</span>
            </a>
            
            <button 
              onClick={() => copyToClipboard('contact@utaraska.co.jp')}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-green-400 text-black rounded-full hover:from-pink-400 hover:to-cyan-400 transition-all duration-300 hover:scale-110 border-4 border-white font-black transform hover:-rotate-2 cursor-pointer"
            >
              <span className="font-black">{copied ? 'コピー完了' : 'contact@utaraska.co.jp'}</span>
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
            © {new Date().getFullYear()} ウタラスカ合同会社. All rights reserved.
          </p>
        </div>
        <div className="absolute top-2 left-10 w-8 h-8 bg-red-500 rounded-full"></div>
        <div className="absolute top-2 right-10 w-6 h-6 bg-purple-500 transform rotate-45"></div>
      </footer>
    </main>
  );
}
