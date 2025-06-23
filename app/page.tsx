// app/page.tsx
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-50 to-cyan-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-4 py-16 lg:py-24 text-center min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto w-full relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-16 relative">
            <div className="relative">
              <Image 
                src="/images/logo.png" 
                alt="ウタラスカ合同会社ロゴ" 
                width={140} 
                height={140}
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent leading-tight max-w-4xl mx-auto transform -rotate-1">
              クリエイティブ × テクノロジー<br className="hidden md:block" />で未来をつくる
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 font-bold max-w-3xl mx-auto leading-relaxed bg-yellow-200 px-6 py-4 rounded-3xl transform rotate-1 shadow-2xl border-4 border-black">
              イラスト制作からブロックチェーン開発まで、<br className="hidden md:block" />幅広い技術領域でお客様のビジョンを実現します
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="mt-12">
            <button className="group relative px-12 py-6 bg-gradient-to-r from-pink-500 to-yellow-400 text-black rounded-full hover:from-cyan-500 hover:to-pink-500 transition-all duration-300 hover:scale-110 hover:shadow-2xl text-xl font-black border-4 border-black transform hover:-rotate-2">
              <span className="relative z-10">お問い合わせ</span>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full"></div>
              <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-green-400 transform rotate-45"></div>
            </button>
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

      {/* Services Section */}
      <section className="px-4 py-20 bg-gradient-to-l from-green-200 to-yellow-200 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6 transform -rotate-1 bg-pink-300 inline-block px-8 py-4 border-4 border-black">
              提供サービス
            </h2>
            <p className="text-xl text-black font-bold max-w-2xl mx-auto bg-cyan-200 px-6 py-3 rounded-full border-4 border-black">
              多様な技術領域で、お客様のビジョンを形にします
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-8 bg-pink-400 rounded-none border-4 border-black hover:bg-yellow-400 transition-all duration-300 hover:-translate-y-3 hover:rotate-2 transform">
              <div className="w-16 h-16 bg-white rounded-full mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-black text-2xl font-black">🎨</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-4">イラスト制作</h3>
              <p className="text-black font-bold text-sm leading-relaxed">
                魅力的で印象的なイラストで、ブランドの個性を表現します
              </p>
            </div>
            
            <div className="group p-8 bg-cyan-400 rounded-none border-4 border-black hover:bg-pink-400 transition-all duration-300 hover:-translate-y-3 hover:-rotate-1 transform rotate-1">
              <div className="w-16 h-16 bg-white rounded-full mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-black text-2xl font-black">📱</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-4">アプリ／Unity開発</h3>
              <p className="text-black font-bold text-sm leading-relaxed">
                モバイルアプリからゲームまで、幅広い開発ニーズに対応
              </p>
            </div>
            
            <div className="group p-8 bg-yellow-400 rounded-none border-4 border-black hover:bg-cyan-400 transition-all duration-300 hover:-translate-y-3 hover:rotate-3 transform -rotate-1">
              <div className="w-16 h-16 bg-white rounded-full mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-black text-2xl font-black">🤖</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-4">AI動画生成</h3>
              <p className="text-black font-bold text-sm leading-relaxed">
                最新のAI技術を活用した、革新的な動画コンテンツ制作
              </p>
            </div>
            
            <div className="group p-8 bg-green-400 rounded-none border-4 border-black hover:bg-yellow-400 transition-all duration-300 hover:-translate-y-3 hover:-rotate-2 transform rotate-2">
              <div className="w-16 h-16 bg-white rounded-full mb-6 flex items-center justify-center border-4 border-black">
                <span className="text-black text-2xl font-black">⛓️</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-4">ブロックチェーン開発</h3>
              <p className="text-black font-bold text-sm leading-relaxed">
                Web3時代の革新的なソリューションを提供します
              </p>
            </div>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-16 left-16 w-12 h-12 bg-red-500 rounded-full"></div>
        <div className="absolute bottom-16 right-16 w-20 h-8 bg-purple-500 transform rotate-45"></div>
      </section>

      {/* Works Section */}
      <section className="px-4 py-20 bg-gradient-to-br from-red-200 to-purple-200 relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8 transform rotate-1 bg-yellow-300 inline-block px-8 py-4 border-4 border-black">
            制作実績
          </h2>
          <div className="bg-white rounded-none p-16 shadow-xl border-8 border-black transform -rotate-1">
            <div className="w-32 h-32 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full mx-auto mb-8 flex items-center justify-center border-4 border-black">
              <span className="text-4xl font-black">🚧</span>
            </div>
            <p className="text-2xl text-black font-black mb-4">現在準備中です</p>
            <p className="text-lg text-black font-bold">近日中に魅力的な実績をご紹介予定です</p>
          </div>
        </div>
        
        <div className="absolute top-10 right-20 w-16 h-16 bg-cyan-400 transform rotate-12"></div>
        <div className="absolute bottom-20 left-20 w-12 h-24 bg-green-400 transform -rotate-45"></div>
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
            
            <span className="text-yellow-300 font-black text-2xl hidden sm:block">または</span>
            
            <button className="px-8 py-4 border-4 border-pink-400 text-pink-400 rounded-full hover:bg-pink-400 hover:text-black transition-all duration-300 hover:scale-110 font-black transform hover:-rotate-2">
              お問い合わせフォーム
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
            © 2024 ウタラスカ合同会社. All rights reserved.
          </p>
        </div>
        <div className="absolute top-2 left-10 w-8 h-8 bg-red-500 rounded-full"></div>
        <div className="absolute top-2 right-10 w-6 h-6 bg-purple-500 transform rotate-45"></div>
      </footer>
    </main>
  );
}
