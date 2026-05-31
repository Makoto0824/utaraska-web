import Image from 'next/image';
import Link from 'next/link';
import { COMPANY_INFO } from '@/lib/utaraska/homeData';
import '../utaraska-home.css';

const BUSINESS_AREAS = [
  {
    number: '01',
    title: 'イラスト制作',
    body: 'テレビ番組、企業案件、プロモーションなどに向けたイラスト制作。',
  },
  {
    number: '02',
    title: 'ゲーム・アプリ開発',
    body: 'カジュアルゲーム、個人開発アプリ、Webアプリなどの企画・制作。',
  },
  {
    number: '03',
    title: 'AI活用制作',
    body: 'AIを活用したゲーム開発、アプリ開発、動画制作、音楽生成、プロトタイプ制作など。',
  },
  {
    number: '04',
    title: 'Web / サイト制作',
    body: '企画、デザイン、実装、運用を含むWeb制作。',
  },
] as const;

export default function AboutPage() {
  return (
    <div className="utaraska-home">
      <header className="ut-header">
        <div className="ut-container ut-header-inner">
          <Link href="/" className="ut-logo-mark">
            <Image src="/images/logo.png" alt="" width={40} height={40} priority />
            <span className="ut-logo-text">ウタラスカ合同会社</span>
          </Link>
        </div>
      </header>

      <main>
        <section className="ut-hero ut-container" aria-labelledby="about-heading">
          <Link href="/" className="ut-back-link">
            ← トップへ
          </Link>
          <p className="ut-kicker" style={{ marginTop: '1.5rem' }}>
            Company
          </p>
          <h1 id="about-heading" className="ut-heading ut-heading-xl">
            ウタラスカ合同会社について
          </h1>
          <hr className="ut-rule-accent" />
          <p className="ut-lead">
            ウタラスカ合同会社は、イラスト制作、ゲーム・アプリ開発、AIを活用した制作支援を行うクリエイティブスタジオです。
            企画、デザイン、実装、演出、運用までを横断し、表現と技術を組み合わせた制作を行っています。
          </p>
        </section>

        <section className="ut-section ut-container" aria-labelledby="business-heading">
          <p className="ut-kicker">Services</p>
          <h2 id="business-heading" className="ut-heading ut-heading-lg">
            事業内容
          </h2>
          <div className="ut-service-list ut-service-list--quad">
            {BUSINESS_AREAS.map((area) => (
              <article key={area.number} className="ut-service-card">
                <p className="ut-service-num">{area.number}</p>
                <h3 className="ut-service-title">{area.title}</h3>
                <p className="ut-service-body">{area.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ut-section ut-section--tech" aria-labelledby="approach-heading">
          <div className="ut-container">
            <p className="ut-kicker">Approach</p>
            <h2 id="approach-heading" className="ut-heading ut-heading-lg">
              制作姿勢
            </h2>
            <p className="ut-lead" style={{ maxWidth: '42rem', marginTop: '1rem' }}>
              ウタラスカは、見た目の完成度だけでなく、企画の目的、届けたい相手、運用後の使いやすさまで含めて制作を考えます。
              小さなチームならではの柔軟さを活かし、必要な表現と技術を組み合わせながら、実用性のあるクリエイティブを目指しています。
            </p>
          </div>
        </section>

        <section className="ut-section ut-container" aria-labelledby="company-heading">
          <p className="ut-kicker">Profile</p>
          <h2 id="company-heading" className="ut-heading ut-heading-lg">
            会社概要
          </h2>
          <dl className="ut-info-list" style={{ marginTop: '2rem' }}>
            <div className="ut-info-row">
              <dt>会社名</dt>
              <dd>{COMPANY_INFO.name}</dd>
            </div>
            <div className="ut-info-row">
              <dt>代表者</dt>
              <dd>{COMPANY_INFO.representative}</dd>
            </div>
            <div className="ut-info-row">
              <dt>所在地</dt>
              <dd>{COMPANY_INFO.address}</dd>
            </div>
            <div className="ut-info-row">
              <dt>設立</dt>
              <dd>{COMPANY_INFO.founded}</dd>
            </div>
            <div className="ut-info-row">
              <dt>事業内容</dt>
              <dd>
                イラスト・キャラクターデザイン、番組内ビジュアル、ゲーム・アプリ開発、Webサイト制作、AI活用による制作支援
              </dd>
            </div>
            <div className="ut-info-row">
              <dt>お問い合わせ先</dt>
              <dd>
                <a href={`mailto:${COMPANY_INFO.email}`} className="ut-inline-link">
                  {COMPANY_INFO.email}
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <section className="ut-section ut-section--tech" aria-labelledby="projects-heading">
          <div className="ut-container">
            <p className="ut-kicker">Projects</p>
            <h2 id="projects-heading" className="ut-heading ut-heading-lg">
              関連プロジェクト
            </h2>
            <article className="ut-project-card">
              <h3 className="ut-project-title">utaraska odd</h3>
              <p className="ut-project-body">
                「ちょっと変で、ちょうどいい。」をコンセプトに、Tシャツやグッズ、投稿企画などを展開するプロジェクトです。
              </p>
              <div className="ut-project-links">
                <Link href="/odd" className="ut-btn ut-btn--primary">
                  utaraska odd を見る
                </Link>
                <Link href="/odd/about" className="ut-btn ut-btn--ghost">
                  utaraska oddの運営情報
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="ut-section ut-container" aria-labelledby="contact-heading">
          <p className="ut-kicker">Contact</p>
          <h2 id="contact-heading" className="ut-heading ut-heading-lg">
            お問い合わせ
          </h2>
          <p className="ut-lead" style={{ maxWidth: '36rem', marginTop: '1rem' }}>
            制作のご相談、取材、協業、プロジェクトに関するお問い合わせは、以下よりご連絡ください。
          </p>
          <div className="ut-contact-actions" style={{ maxWidth: '28rem' }}>
            <a href={`mailto:${COMPANY_INFO.email}`} className="ut-contact-link">
              <span>{COMPANY_INFO.email}</span>
              <span aria-hidden>→</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="ut-footer">
        <div className="ut-container">
          <nav className="ut-footer-links" aria-label="フッターナビゲーション">
            <Link href="/">トップ</Link>
            <Link href="/about">会社情報</Link>
            <Link href="/games">Games</Link>
            <Link href="/odd">utaraska odd</Link>
          </nav>
          <p>&copy; {new Date().getFullYear()} ウタラスカ合同会社. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
