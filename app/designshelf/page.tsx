// Design Shelf ページ - 新しいサイト（https://www.utaraska.co.jp/）用
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function DesignShelf() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-50 to-cyan-100">
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

      <style jsx>{`
        .designshelf-container {
          min-height: 100vh;
          color: #1f2937;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          line-height: 1.5;
        }

        .header {
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 2rem;
        }

        .logo-link {
          text-decoration: none;
        }

        .site-logo {
          height: 40px;
          width: auto;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          color: #1f2937;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: #3b82f6;
        }

        .mega-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          padding: 1rem;
          min-width: 200px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .nav-link:hover .mega-menu {
          opacity: 1;
          visibility: visible;
        }

        .mega-menu-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mega-menu-item {
          color: #1f2937;
          text-decoration: none;
          padding: 0.5rem;
          border-radius: 4px;
          transition: background-color 0.3s ease;
        }

        .mega-menu-item:hover {
          background-color: #f3f4f6;
        }

        .banner-section {
          position: relative;
          height: 400px;
          overflow: hidden;
        }

        .banner-slide {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .banner-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .banner-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: white;
          z-index: 2;
        }

        .banner-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .banner-subtitle {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        .cta-button {
          background-color: #3b82f6;
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .cta-button:hover {
          background-color: #2563eb;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: bold;
          margin: 4rem 0 3rem;
          color: #1f2937;
        }

        .brands-section {
          padding: 4rem 0;
          background-color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
        }

        .brands-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .brand-card {
          text-align: center;
          padding: 2rem;
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .brand-card:hover {
          transform: translateY(-4px);
        }

        .brand-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 1rem;
        }

        .brand-name {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #1f2937;
        }

        .brand-description {
          color: #6b7280;
          margin-bottom: 1.5rem;
        }

        .brand-link {
          color: #3b82f6;
          text-decoration: none;
          font-weight: 600;
        }

        .products-section {
          padding: 4rem 0;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .product-card {
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-4px);
        }

        .product-image {
          width: 100%;
          height: 256px;
          object-fit: cover;
        }

        .product-info {
          padding: 1.5rem;
        }

        .product-name {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #1f2937;
        }

        .product-price {
          font-size: 1.2rem;
          font-weight: bold;
          color: #3b82f6;
          margin-bottom: 1rem;
        }

        .product-button {
          width: 100%;
          background-color: #3b82f6;
          color: white;
          padding: 0.75rem;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .product-button:hover {
          background-color: #2563eb;
        }

        .footer {
          background-color: #1f2937;
          color: white;
          padding: 3rem 0 1rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h3,
        .footer-section h4 {
          margin-bottom: 1rem;
          color: white;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section ul li {
          margin-bottom: 0.5rem;
        }

        .footer-section ul li a {
          color: #d1d5db;
          text-decoration: none;
        }

        .footer-section ul li a:hover {
          color: white;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid #374151;
          color: #9ca3af;
        }

        @media (max-width: 768px) {
          .nav-container {
            flex-direction: column;
            gap: 1rem;
          }

          .nav-links {
            flex-direction: column;
            gap: 1rem;
          }

          .banner-title {
            font-size: 2rem;
          }

          .banner-subtitle {
            font-size: 1.2rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .brands-grid,
          .products-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
