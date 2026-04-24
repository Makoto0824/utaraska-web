'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import {
  AMAZON_THREADS_PICKS,
  AMAZON_PICK_CATEGORY_LABELS,
  type AmazonPickCategory,
  extractThreadsBlockquoteHtml,
} from '@/lib/designshelf/amazonThreadsPicks';

const PICKS_PATH = '/designshelf/jp/picks';

type CategoryFilter = 'all' | AmazonPickCategory;

const FILTER_TABS: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'すべて' },
  ...AMAZON_PICK_CATEGORY_LABELS.map((c) => ({ id: c, label: c })),
];

function reinjectThreadsEmbedScript() {
  if (typeof document === 'undefined') return;
  const marker = 'data-designshelf-threads-embed';
  document.querySelectorAll(`script[${marker}]`).forEach((n) => n.remove());
  const s = document.createElement('script');
  s.src = 'https://www.threads.com/embed.js';
  s.async = true;
  s.setAttribute(marker, '1');
  document.body.appendChild(s);
}

export default function JpPicksPage() {
  const [category, setCategory] = useState<CategoryFilter>('all');

  const filtered = useMemo(() => {
    if (category === 'all') return AMAZON_THREADS_PICKS;
    return AMAZON_THREADS_PICKS.filter((p) => p.category === category);
  }, [category]);

  const filteredKey = filtered.map((p) => p.id).join(',');

  useEffect(() => {
    const id = window.requestAnimationFrame(() => reinjectThreadsEmbedScript());
    return () => {
      window.cancelAnimationFrame(id);
      document.querySelectorAll('script[data-designshelf-threads-embed]').forEach((n) => n.remove());
    };
  }, [category, filteredKey]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <nav>
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-4">
            <Link href="/designshelf/jp" className="flex items-center shrink-0">
              <Image
                src="/designshelf/images/logo.png"
                alt="Design Shelf"
                width={120}
                height={60}
                className="w-[100px] sm:w-[120px] h-auto hover:scale-105 transition-transform"
              />
            </Link>
            <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm sm:text-base sm:gap-6">
              <Link href="/designshelf/jp" className="text-gray-600 hover:text-gray-900 transition-colors">
                ホーム
              </Link>
              <Link href={PICKS_PATH} className="text-gray-900 font-medium">
                Amazonおすすめ
              </Link>
              <Link href="/designshelf/jp/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                お問い合わせ
              </Link>
              <Link href="/designshelf/jp/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                運営者情報
              </Link>
              <Link href="/designshelf" className="text-gray-600 hover:text-gray-900 transition-colors">
                EN Store
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-3 sm:px-4 py-8 w-full min-w-0">
        <div className="bg-white rounded-lg shadow-lg p-5 sm:p-8 w-full min-w-0">
          <p className="text-xs text-gray-500 mb-1">Amazon T-Shirt Picks</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">AmazonおすすめTシャツ</h1>

          <section className="mb-8 space-y-3 text-gray-600 leading-relaxed text-sm sm:text-base">
            <p>DesignShelfがAmazonで見つけた気になるTシャツを紹介するページです。</p>
            <p>掲載している商品はDesignShelfオリジナル商品ではありません。</p>
            <p>各投稿にはAmazonアソシエイトリンクが含まれます。</p>
          </section>

          <section className="mb-8" aria-label="カテゴリで絞り込み">
            <div className="flex flex-wrap gap-2">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setCategory(tab.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    category === tab.id
                      ? 'bg-gray-800 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </section>

          <section aria-label="Threadsの紹介投稿一覧" className="space-y-10 w-full min-w-0">
            {filtered.length === 0 ? (
              <p className="text-gray-500 text-center py-12">このカテゴリの投稿はまだありません。</p>
            ) : (
              filtered.map((pick) => (
                <article
                  key={pick.id}
                  className="border border-gray-200 rounded-xl p-4 sm:p-6 w-full min-w-0 max-w-full"
                >
                  <div className="mb-3 flex flex-wrap items-baseline gap-2 gap-y-1">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      {pick.category}
                    </span>
                    <h2 className="text-lg font-semibold text-gray-800">{pick.title}</h2>
                  </div>
                  <p className="mb-4 text-sm">
                    <a
                      href={pick.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline break-all"
                    >
                      Threadsで開く
                    </a>
                  </p>
                  {/* 公式埋め込みのみ。Amazon画像の自前取得・表示は行わない */}
                  <div
                    className="threads-embed-shell w-full min-w-0 max-w-full overflow-x-auto [&_blockquote]:!max-w-none [&_blockquote]:!w-full [&_blockquote]:min-w-0 [&_blockquote]:box-border"
                    dangerouslySetInnerHTML={{
                      __html: extractThreadsBlockquoteHtml(pick.embedHtml),
                    }}
                  />
                </article>
              ))
            )}
          </section>

          <section className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600 space-y-3 leading-relaxed">
            <p>このページにはAmazonアソシエイトリンクを含みます。</p>
            <p>掲載している商品はDesignShelfオリジナル商品ではありません。</p>
            <p>商品情報、価格、在庫状況はAmazonの商品ページでご確認ください。</p>
          </section>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ウタラスカ合同会社</h3>
              <p className="text-gray-300 mb-2">
                〒150-0043
                <br />
                東京都渋谷区道玄坂1丁目10番8号渋谷道玄坂東急ビル2F−C
              </p>
              <p className="text-gray-300">contact@utaraska.co.jp</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Design Shelf</h4>
              <ul className="space-y-2">
                <li>
                  <Link href={PICKS_PATH} className="text-gray-300 hover:text-white transition-colors">
                    AmazonおすすめTシャツ
                  </Link>
                </li>
                <li>
                  <Link href="/designshelf/jp/about" className="text-gray-300 hover:text-white transition-colors">
                    運営者情報
                  </Link>
                </li>
                <li>
                  <Link href="/designshelf/jp/contact" className="text-gray-300 hover:text-white transition-colors">
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} utaraska合同会社 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
