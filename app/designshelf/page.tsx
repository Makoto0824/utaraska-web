// Design Shelf ページ - 新しいサイト（https://www.utaraska.co.jp/）用
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function DesignShelf() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-50 to-cyan-100">
      <div className="designshelf-container">
        {/* ヘッダー */}
        <header className="header">
          <nav>
            <div className="nav-container">
              <Link href="/" className="logo-link">
                <Image 
                  src="/images/logo.png" 
                  alt="ウタラスカ合同会社" 
                  width={120} 
                  height={40}
                  className="site-logo"
                />
              </Link>
              <div className="nav-links">
                <Link href="/" className="nav-link">ホーム</Link>
                <div className="nav-link">
                  ブランド
                  <div className="mega-menu">
                    <div className="mega-menu-content">
                <Link href="/designshelf" className="mega-menu-item brand">ゆるスタイル・ジャパン</Link>
                <Link href="/designshelf" className="mega-menu-item brand">Japanese Art Studio</Link>
                <Link href="/designshelf" className="mega-menu-item brand">ワロタ商店</Link>
                <Link href="/designshelf" className="mega-menu-item more">詳しくはこちら</Link>
                    </div>
                  </div>
                </div>
                <Link href="/" className="nav-link">お問い合わせ</Link>
                <Link href="/" className="nav-link">運営者情報</Link>
              </div>
            </div>
          </nav>
        </header>

        {/* メインコンテンツ */}
        <main className="main-content">
          {/* バナースライドショー */}
          <section className="banner-section">
            <div className="banner-slider">
              <div className="banner-slide active">
                <Image 
                  src="/designshelf/images/banner1.jpg" 
                  alt="Design Shelf Collection" 
                  width={1200} 
                  height={400}
                  className="banner-image"
                />
                <div className="banner-content">
                  <h1 className="banner-title">Design Shelf</h1>
                  <p className="banner-subtitle">Amazon Merch Collection</p>
                  <button className="cta-button">コレクションを見る</button>
                </div>
              </div>
            </div>
          </section>

          {/* ブランド紹介セクション */}
          <section className="brands-section">
            <div className="container">
              <h2 className="section-title">ブランド一覧</h2>
              <div className="brands-grid">
                <div className="brand-card">
                  <Image 
                    src="/designshelf/images/tee1.png" 
                    alt="ゆるスタイル・ジャパン" 
                    width={300} 
                    height={300}
                    className="brand-image"
                  />
                  <h3 className="brand-name">ゆるスタイル・ジャパン</h3>
                  <p className="brand-description">日本のゆるい文化をテーマにしたデザイン</p>
                  <Link href="/designshelf" className="brand-link">詳細を見る</Link>
                </div>
                
                <div className="brand-card">
                  <Image 
                    src="/designshelf/images/tee2.png" 
                    alt="Japanese Art Studio" 
                    width={300} 
                    height={300}
                    className="brand-image"
                  />
                  <h3 className="brand-name">Japanese Art Studio</h3>
                  <p className="brand-description">伝統的な日本美術をモダンにアレンジ</p>
                  <Link href="/designshelf" className="brand-link">詳細を見る</Link>
                </div>
                
                <div className="brand-card">
                  <Image 
                    src="/designshelf/images/tee3.png" 
                    alt="ワロタ商店" 
                    width={300} 
                    height={300}
                    className="brand-image"
                  />
                  <h3 className="brand-name">ワロタ商店</h3>
                  <p className="brand-description">笑いをテーマにしたユニークなデザイン</p>
                  <Link href="/designshelf" className="brand-link">詳細を見る</Link>
                </div>
              </div>
            </div>
          </section>

          {/* 商品グリッド */}
          <section className="products-section">
            <div className="container">
              <h2 className="section-title">人気商品</h2>
              <div className="products-grid">
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i} className="product-card">
                    <Image 
                      src={`/designshelf/images/tee${i + 1}.png`} 
                      alt={`商品 ${i + 1}`} 
                      width={256} 
                      height={256}
                      className="product-image"
                    />
                    <div className="product-info">
                      <h3 className="product-name">デザインTシャツ {i + 1}</h3>
                      <p className="product-price">¥2,980</p>
                      <button className="product-button">Amazonで購入</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* フッター */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h3>ウタラスカ合同会社</h3>
                <p>〒150-0001 東京都渋谷区神宮前4-18-9</p>
                <p>contact@utaraska.co.jp</p>
              </div>
              <div className="footer-section">
                <h4>Design Shelf</h4>
                <ul>
                  <li><Link href="/designshelf">ブランド一覧</Link></li>
                  <li><Link href="/">運営者情報</Link></li>
                  <li><Link href="/">お問い合わせ</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2025 ウタラスカ合同会社. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
      </div>
    </div>
  );
}
