'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {
  COMPANY_INFO,
  PARTNER_LOGOS,
  PROCESS_STEPS,
  SERVICES,
  WORK_CASES,
} from '@/lib/utaraska/homeData';
import './utaraska-home.css';

export default function HomePage() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success('メールアドレスをコピーしました', {
        className: 'ut-toast-editorial',
        style: { background: '#faf9f6', color: '#1c1c1c' },
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('コピーに失敗しました', {
        className: 'ut-toast-editorial',
        style: { background: '#faf9f6', color: '#1c1c1c' },
      });
    }
  };

  return (
    <div className="utaraska-home">
      <Toaster position="top-center" />

      <header className="ut-header">
        <div className="ut-container ut-header-inner">
          <Link href="/" className="ut-logo-mark">
            <Image src="/images/logo.png" alt="" width={40} height={40} priority />
            <span className="ut-logo-text">ウタラスカ合同会社</span>
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="ut-hero ut-container" aria-labelledby="hero-heading">
          <p className="ut-hero-vertical" aria-hidden>
            イラストとあそび
          </p>
          <div className="ut-hero-content">
            <p className="ut-kicker">Creative Studio</p>
            <h1 id="hero-heading" className="ut-heading ut-heading-xl">
              イラストで世界観を固め、
              <br />
              ゲームで「あそび」を届ける。
            </h1>
            <hr className="ut-rule-accent" />
            <p className="ut-lead">
              ウタラスカ合同会社は、テレビ番組・企業案件向けのイラスト制作と、ゲーム・アプリ開発を軸に活動する小さなクリエイティブスタジオです。
              ビジュアルとプレイ体験の両方から、伝えたい体験を形にします。
            </p>
            <div className="ut-hero-tags" aria-label="主要領域">
              <span className="ut-tag">イラスト制作</span>
              <span className="ut-tag">ゲーム・アプリ開発</span>
              <span className="ut-tag">AI活用・プロトタイプ</span>
            </div>
            <div className="ut-hero-actions">
              <a href={`mailto:${COMPANY_INFO.email}`} className="ut-btn ut-btn--primary">
                制作の相談をする
              </a>
            </div>
          </div>
        </section>

        {/* Partners */}
        <div className="ut-container">
          <p className="ut-kicker" style={{ marginBottom: '0.75rem' }}>
            Partners
          </p>
          <p className="ut-lead" style={{ fontSize: '0.9375rem', marginBottom: 0 }}>
            イラスト・ゲームでお世話になったパートナー（放映局・配信など）
          </p>
        </div>
        <div className="ut-partners" aria-label="パートナー企業ロゴ">
          {PARTNER_LOGOS.map((logo) => (
            <Image key={logo.alt} src={logo.src} alt={logo.alt} width={100} height={48} />
          ))}
        </div>

        {/* About */}
        <section id="about" className="ut-section ut-container">
          <div className="ut-about-grid">
            <p className="ut-about-aside" aria-hidden>
              01
            </p>
            <div>
              <p className="ut-kicker">About</p>
              <h2 className="ut-heading ut-heading-lg">小さなチームで、最後まで伴走する。</h2>
              <p className="ut-lead" style={{ marginTop: '1.25rem' }}>
                番組やキャンペーン向けのイラスト・キャラクターデザインから、モバイルやブラウザのゲーム・アプリまで、
                ワンストップでご相談いただけます。制作フローにAIやモダンな開発手法を組み合わせ、
                外注の段階を減らすことで、コストを抑えたご提案が可能です。
              </p>
              <p style={{ marginTop: '1rem', color: 'var(--ut-muted)', fontSize: '0.9375rem' }}>
                受託のイラスト制作と、企画からリリースまでのゲーム開発——2本柱で、
                ブランドの「あそび」を届けるお手伝いをしています。
              </p>
              <div className="ut-stats">
                <div className="ut-stat">
                  <p className="ut-stat-value">100+</p>
                  <p className="ut-stat-label">プロジェクト実績</p>
                </div>
                <div className="ut-stat">
                  <p className="ut-stat-value">2本柱</p>
                  <p className="ut-stat-label">イラストとゲーム</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="ut-rule ut-container" />

        {/* Services */}
        <section id="services" className="ut-section ut-container">
          <p className="ut-kicker">Services</p>
          <h2 className="ut-heading ut-heading-lg">提供領域</h2>
          <p className="ut-lead" style={{ maxWidth: '36rem', marginTop: '0.75rem' }}>
            イラスト、ゲーム、AI活用——3つの領域を横断し、一つの窓口で進められます。
          </p>
          <div className="ut-service-list">
            {SERVICES.map((service) => (
              <article key={service.number} className="ut-service-card">
                <p className="ut-service-num">{service.number}</p>
                <h3 className="ut-service-title">{service.title}</h3>
                <p className="ut-service-lead">{service.lead}</p>
                <p className="ut-service-body">{service.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Works */}
        <section id="works" className="ut-section ut-section--tech">
          <div className="ut-container">
            <p className="ut-kicker">Works</p>
            <h2 className="ut-heading ut-heading-lg">実績・事例</h2>
            <p className="ut-lead" style={{ maxWidth: '40rem', marginTop: '0.75rem', marginBottom: '2.5rem' }}>
              放映局・番組向けのイラスト制作と、自社ゲームの公開タイトル。ギャラリーではなく、どんな価値を提供したかが伝わる構成にしています。
            </p>

            {WORK_CASES.map((work) => (
              <article key={work.id} className="ut-work-article">
                <div className="ut-work-header">
                  <h3 className="ut-work-client">{work.client}</h3>
                  <span className="ut-kicker" style={{ margin: 0 }}>
                    Case Study
                  </span>
                </div>
                <p className="ut-work-value">{work.value}</p>
                <ul className="ut-work-projects">
                  {work.projects.map((project) => (
                    <li key={project.name}>
                      <p className="ut-work-project-name">{project.name}</p>
                      <p className="ut-work-project-role">{project.role}</p>
                    </li>
                  ))}
                </ul>
                <div className="ut-work-gallery">
                  {work.images.map((image) => (
                    <figure key={image.src}>
                      <Image src={image.src} alt={image.alt} width={160} height={107} />
                    </figure>
                  ))}
                </div>
              </article>
            ))}

            <article className="ut-work-article">
              <div className="ut-work-header">
                <h3 className="ut-work-client">ゲーム作品・公開一覧</h3>
                <span className="ut-kicker" style={{ margin: 0 }}>
                  Games
                </span>
              </div>
              <p className="ut-work-value">
                自社モバイルタイトル（App Store）と、ブラウザ向けカジュアルゲームの紹介。
                ストア・プレイリンクは専用ページに集約しています。
              </p>
              <Link href="/games" className="ut-btn ut-btn--primary">
                ゲーム一覧を見る
              </Link>
            </article>

            <article className="ut-work-article">
              <div className="ut-work-header">
                <h3 className="ut-work-client">実績サマリー</h3>
              </div>
              <p className="ut-work-value">
                放映局とのイラスト実績に加え、ブラウザゲームの提供、自社ゲームのリリースなど、
                オンエア・配信に耐えるクオリティを意識した制作を行っています。
              </p>
              <ul className="ut-work-projects">
                <li>
                  <p className="ut-work-project-name">放映局とのイラスト実績</p>
                  <p className="ut-work-project-role">BSフジ・TBS・日本テレビ・テレビ朝日</p>
                </li>
                <li>
                  <p className="ut-work-project-name">ブラウザゲームの提供</p>
                  <p className="ut-work-project-role">ゲーム配信プラットフォーム向け</p>
                </li>
                <li>
                  <p className="ut-work-project-name">自社ゲームのリリース</p>
                  <p className="ut-work-project-role">モバイルアプリ・Web（詳細はゲームページ）</p>
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="ut-section ut-container">
          <p className="ut-kicker">Process</p>
          <h2 className="ut-heading ut-heading-lg">ご相談からの流れ</h2>
          <p className="ut-lead" style={{ maxWidth: '32rem', marginTop: '0.75rem' }}>
            イラスト・ゲーム、どちらでもシンプルに。難しい専門用語は使わず、進め方を一緒に決めます。
          </p>
          <div className="ut-process-list">
            {PROCESS_STEPS.map((step) => (
              <article key={step.step} className="ut-process-item">
                <p className="ut-process-step">{step.step}</p>
                <h3 className="ut-process-title">{step.title}</h3>
                <p className="ut-process-body">{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Message */}
        <section className="ut-section ut-container" aria-labelledby="message-heading">
          <p className="ut-kicker">Message</p>
          <h2 id="message-heading" className="ut-heading ut-heading-lg">
            あそびゴコロを、仕事の質に。
          </h2>
          <blockquote className="ut-message" style={{ marginTop: '2rem' }}>
            <p>
              私たちは「なんでもできます」より、イラストとゲームに集中した小さなスタジオです。
              番組で培ったビジュアルの実務力と、自社タイトルをリリースしてきた開発経験を活かし、
              相談しやすい距離感で、最後まで伴走することを大切にしています。
            </p>
            <footer className="ut-message-sign">代表　平澤 誠 / ウタラスカ合同会社</footer>
          </blockquote>
        </section>

        {/* Contact + Company */}
        <section id="contact" className="ut-section ut-section--tech">
          <div className="ut-container">
            <p className="ut-kicker">Contact</p>
            <h2 className="ut-heading ut-heading-lg">まずはご相談ください</h2>
            <p className="ut-lead" style={{ marginTop: '0.75rem', marginBottom: '2.5rem' }}>
              イラスト・ゲームのご相談、お見積りはお気軽にどうぞ。要件が固まっていなくても問題ありません。
            </p>

            <div className="ut-contact-grid">
              <div>
                <h3 className="ut-heading ut-heading-md">お問い合わせ</h3>
                <div className="ut-contact-actions">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(COMPANY_INFO.email)}
                    className="ut-contact-link"
                    style={{ width: '100%', cursor: 'pointer', textAlign: 'left' }}
                  >
                    <span>{copied ? 'コピーしました' : COMPANY_INFO.email}</span>
                    <span aria-hidden>{copied ? 'OK' : 'Copy'}</span>
                  </button>
                  <Link href="/odd" className="ut-contact-link">
                    <span>utaraska odd（ブランドサイト）</span>
                    <span aria-hidden>→</span>
                  </Link>
                </div>
                <p className="ut-contact-note">
                  メールアドレスをタップするとクリップボードにコピーされます。
                </p>
              </div>

              <div>
                <h3 className="ut-heading ut-heading-md">会社概要</h3>
                <dl className="ut-info-list">
                  <div className="ut-info-row">
                    <dt>社名</dt>
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
                </dl>
                <div style={{ marginTop: '1.5rem' }}>
                  <div className="ut-biz-block">
                    <h4>受託（イラスト・ビジュアル）</h4>
                    <ul>
                      <li>イラスト・キャラクターデザイン（テレビ・映像・プロモーション等）</li>
                      <li>番組内ビジュアル・クイズ・解説用イラスト</li>
                    </ul>
                  </div>
                  <div className="ut-biz-block">
                    <h4>ゲーム・アプリ開発</h4>
                    <ul>
                      <li>ゲーム・アプリの企画・開発（モバイル・ブラウザ等）</li>
                      <li>キャラクター・イラスト資産から実装まで一気通貫でのご相談</li>
                      <li>AI活用による効率化で、コストを抑えた開発支援</li>
                      <li>自社タイトルの企画・リリース・運営</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="ut-footer">
        <div className="ut-container">
          <nav className="ut-footer-links" aria-label="フッターナビゲーション">
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
