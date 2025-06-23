// app/page.tsx
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative px-4 py-16 lg:py-24 text-center min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto w-full">
          {/* Logo */}
          <div className="flex justify-center mb-16">
            <Image 
              src="/images/logo.png" 
              alt="ウタラスカ合同会社ロゴ" 
              width={140} 
              height={140}
              className="hover:scale-110 transition-transform duration-300"
              priority
            />
          </div>
          
          {/* Main Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent leading-tight max-w-4xl mx-auto">
              クリエイティブ × テクノロジー<br className="hidden md:block" />で未来をつくる
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              イラスト制作からブロックチェーン開発まで、<br className="hidden md:block" />幅広い技術領域でお客様のビジョンを実現します
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="mt-12">
            <button className="group relative px-10 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl text-lg font-medium">
              <span className="relative z-10">お問い合わせ</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      </section>

      {/* Main Image Section */}
      <section className="px-4 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/main.png" 
                  alt="ウタラスカ合同会社のメイン画像" 
                  width={600} 
                  height={400}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  革新的なソリューションで<br />お客様の成功を支援
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  私たちは最新のテクノロジーとクリエイティブな発想を組み合わせ、お客様のビジネス課題を解決します。イラスト制作からAI活用、ブロックチェーン開発まで、幅広い分野でのエクスペリエンスを活かし、唯一無二の価値を提供いたします。
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4">
                  <div className="text-2xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-sm text-gray-600">プロジェクト実績</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-2xl font-bold text-green-600 mb-2">4分野</div>
                  <div className="text-sm text-gray-600">専門技術領域</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">提供サービス</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              多様な技術領域で、お客様のビジョンを形にします
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-white text-xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">イラスト制作</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                魅力的で印象的なイラストで、ブランドの個性を表現します
              </p>
            </div>
            
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-white text-xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">アプリ／Unity開発</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                モバイルアプリからゲームまで、幅広い開発ニーズに対応
              </p>
            </div>
            
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-white text-xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI動画生成</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                最新のAI技術を活用した、革新的な動画コンテンツ制作
              </p>
            </div>
            
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-white text-xl">⛓️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ブロックチェーン開発</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Web3時代の革新的なソリューションを提供します
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section className="px-4 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">制作実績</h2>
          <div className="bg-white rounded-3xl p-16 shadow-sm border border-gray-100">
            <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl">🚧</span>
            </div>
            <p className="text-lg text-gray-600 mb-4">現在準備中です</p>
            <p className="text-sm text-gray-500">近日中に魅力的な実績をご紹介予定です</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">お問い合わせ</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            プロジェクトのご相談やお見積もりなど、お気軽にお声がけください
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://x.com/utaraska" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <span className="text-xl">𝕏</span>
              <span className="font-medium">@utaraska</span>
            </a>
            
            <span className="text-gray-400 hidden sm:block">または</span>
            
            <button className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105">
              お問い合わせフォーム
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="px-4 py-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2024 ウタラスカ合同会社. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
