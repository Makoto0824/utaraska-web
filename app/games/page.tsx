import Image from 'next/image';
import Link from 'next/link';
import { APP_STORE_GAMES, KANTAN_GAMES } from '@/lib/utaraska/gamesData';
import '../utaraska-home.css';

export default function GamesPage() {
  return (
    <div className="utaraska-home">
      <header className="ut-header">
        <div className="ut-container ut-header-inner">
          <Link href="/" className="ut-back-link">
            ← トップへ
          </Link>
          <span className="ut-header-path">Games / ウタラスカ合同会社</span>
        </div>
      </header>

      <main>
        <section className="ut-hero ut-container">
          <div className="ut-games-hero-logo">
            <Image
              src="/games/logo_no_bg.png"
              alt="ウタラスカ合同会社"
              width={304}
              height={126}
              priority
            />
          </div>
          <p className="ut-kicker">Game Development</p>
          <h1 className="ut-heading ut-heading-xl">ゲーム作品・公開一覧</h1>
          <hr className="ut-rule-accent" />
          <p className="ut-lead" style={{ maxWidth: '40rem' }}>
            モバイルアプリやブラウザ向けのゲームを中心に、企画から開発・リリースまで手がけています。
            App Store の自社タイトルと、かんたんゲームボックス掲載のカジュアルゲームをこちらでご紹介します。
          </p>
          <p style={{ marginTop: '1rem', maxWidth: '40rem', fontSize: '0.9375rem', color: 'var(--ut-muted)' }}>
            イラスト・キャラ資産から実装まで一気通貫で相談いただく場合は、AI活用やモダンな開発手法で効率化しつつ、
            お見積りを抑えやすい体制です。
          </p>
        </section>

        <section className="ut-section ut-container">
          <p className="ut-kicker">App Store</p>
          <h2 className="ut-heading ut-heading-lg">公開作品</h2>
          <p className="ut-lead" style={{ fontSize: '0.9375rem', marginTop: '0.75rem', maxWidth: '36rem' }}>
            自社で企画・開発し、App Store で公開しているタイトルです。
          </p>

          <div style={{ marginTop: '2.5rem' }}>
            {APP_STORE_GAMES.map((game) => (
              <article key={game.id} className="ut-game-card">
                <div className="ut-game-card-inner">
                  <figure className="ut-game-icon-wrap">
                    <Image src={game.iconSrc} alt={game.iconAlt} width={120} height={120} />
                  </figure>
                  <div className="min-w-0 flex-1">
                    <p className="ut-game-num">{game.number}</p>
                    <h3 className="ut-game-title">{game.title}</h3>
                    <p className="ut-game-platform">{game.platform}</p>
                    <p className="ut-game-tagline">{game.tagline}</p>
                    <p className="ut-game-desc">{game.description}</p>
                    <a
                      href={game.storeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ut-btn ut-btn--primary"
                    >
                      App Store で見る
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="ut-section ut-section--tech">
          <div className="ut-container">
            <p className="ut-kicker">Browser Games</p>
            <h2 className="ut-heading ut-heading-lg">かんたんゲームボックス by GMO</h2>
            <p className="ut-lead" style={{ fontSize: '0.9375rem', marginTop: '0.75rem', maxWidth: '40rem' }}>
              <strong style={{ color: 'var(--ut-ink)', fontWeight: 600 }}>GMO メディア株式会社</strong>
              が提供する、アプリのインストールなしで遊べるカジュアルゲームのサービスです。
              パズル・アクションなどブラウザ向けのタイトルがそろい、ポイントプログラムと組み合わせた企画にも使われています。
            </p>

            <ul className="ut-kgb-grid">
              {KANTAN_GAMES.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ut-kgb-item"
                  >
                    <Image src={item.iconSrc} alt={item.iconAlt} width={48} height={48} />
                    <span className="ut-kgb-item-title">{item.title}</span>
                    <span className="ut-kgb-genre">{item.genre}</span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="ut-games-note">
              本ページのリンク先は第三者（GMO メディア株式会社）が運営するサイトです。
            </p>
          </div>
        </section>

        <section className="ut-section ut-container">
          <div className="ut-games-panel">
            <p className="ut-kicker" style={{ marginBottom: '0.75rem' }}>
              Contact
            </p>
            <h2 className="ut-heading ut-heading-md">制作・相談</h2>
            <p style={{ marginTop: '0.75rem', fontSize: '0.9375rem', color: 'var(--ut-muted)', lineHeight: 1.75 }}>
              ゲーム開発のご相談、受託制作のお問い合わせはこちらからどうぞ。要件が固まっていなくても構いません。
            </p>
            <div style={{ marginTop: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href="mailto:contact@utaraska.co.jp" className="ut-btn ut-btn--primary">
                contact@utaraska.co.jp
              </a>
              <Link href="/#contact" className="ut-btn ut-btn--ghost">
                会社サイトの問い合わせへ
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="ut-footer">
        <div className="ut-container">
          <nav className="ut-footer-links" aria-label="フッターナビゲーション">
            <Link href="/">トップ</Link>
            <Link href="/#works">実績</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
          <p>&copy; {new Date().getFullYear()} ウタラスカ合同会社. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
