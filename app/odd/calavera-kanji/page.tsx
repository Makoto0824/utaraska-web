import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CALAVERA_KANJI } from '@/lib/designshelf/calaveraKanji';
import { UtaraskaCorporateLink } from '@/lib/designshelf/UtaraskaCorporateLink';
import { SongLyrics } from './SongLyrics';

function AmazonCta({ className = '' }: { className?: string }) {
  return (
    <a
      href={CALAVERA_KANJI.amazonProductUrl}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={`amazon-btn justify-center px-5 py-3 text-sm sm:text-base ${className}`}
      aria-label="AmazonでTシャツを見る"
    >
      <span className="label text-center">AmazonでTシャツを見る</span>
    </a>
  );
}

function SectionCard({
  title,
  children,
  className = '',
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`rounded-lg bg-white p-6 shadow-md sm:p-8 ${className}`}>
      <h2 className="mb-4 text-xl font-bold text-gray-800 sm:text-2xl">{title}</h2>
      {children}
    </section>
  );
}

export default function CalaveraKanjiLandingPage() {
  const { heroSingerVisualSrc, fullSongAudioSrc, instagramUrl, instagramWearImageUrl } = CALAVERA_KANJI;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <nav>
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-y-3 px-4 py-4">
            <Link href="/odd" className="flex items-center">
              <Image
                src="/designshelf/images/logo.png"
                alt="utaraska odd"
                width={120}
                height={60}
                className="h-auto w-[100px] transition-transform hover:scale-105 sm:w-[120px]"
              />
            </Link>
            <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 sm:gap-6">
              <Link href="/odd" className="text-gray-600 transition-colors hover:text-gray-900">
                ホーム
              </Link>
              <Link href="/odd/picks" className="text-gray-600 transition-colors hover:text-gray-900">
                Amazonおすすめ
              </Link>
              <Link href="/odd/rakugaki" className="text-gray-600 transition-colors hover:text-gray-900">
                らくがきT
              </Link>
              <Link href="/odd/contact" className="text-gray-600 transition-colors hover:text-gray-900">
                お問い合わせ
              </Link>
              <Link href="/odd/about" className="text-gray-600 transition-colors hover:text-gray-900">
                運営情報
              </Link>
              <Link href="/odd/en" className="text-gray-600 transition-colors hover:text-gray-900">
                EN Store
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-6 rounded-r-lg border-l-4 border-yellow-400 bg-yellow-50 p-4">
          <p className="text-xs text-yellow-800">
            <span className="font-semibold">ご注意：</span>
            一部の着用画像はAIで生成・編集しており、色味や細部が実物と異なる場合があります。ご購入前はAmazonの商品説明等をご確認ください。
          </p>
        </div>

        {/* ── ファーストビュー ── */}
        <section className="mb-10 overflow-hidden rounded-lg bg-white shadow-lg">
          <div className="relative h-[42vh] min-h-[260px] w-full bg-neutral-100 sm:aspect-video sm:h-auto sm:min-h-0">
            <Image
              src={heroSingerVisualSrc}
              alt="AIシンガー（名前募集中）キービジュアル"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width:768px) 100vw, 1152px"
              unoptimized
            />
          </div>
          <div className="p-6 sm:p-8">
            <div className="mx-auto mb-6 max-w-xs sm:max-w-sm">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-50 shadow-inner">
                <Image
                  src="/designshelf/images/40_skull/jp/tshirt_model2.jpg"
                  alt="カラベラドクロと漢字 Tシャツ（着用イメージ）"
                  fill
                  className="object-contain"
                  sizes="(max-width:768px) 90vw, 320px"
                  priority
                  unoptimized
                />
              </div>
            </div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">商品名</p>
            <h1 className="mb-6 text-2xl font-bold leading-snug text-gray-800 sm:text-3xl">
              カラベラドクロと漢字
            </h1>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <AmazonCta className="w-full sm:w-auto sm:min-w-[240px]" />
              <a
                href={instagramWearImageUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagramで着用イメージを見る（別タブ）"
                className="amazon-btn w-full justify-center px-5 py-3 text-sm sm:w-auto sm:min-w-[240px] sm:text-base"
              >
                <Image
                  src="/designshelf/images/Instagram_logo_black.png"
                  alt=""
                  width={22}
                  height={22}
                  className="h-5 w-5 shrink-0 brightness-0 invert"
                  unoptimized
                />
                <span className="label text-center">Instagramで着用イメージを見る</span>
              </a>
            </div>
          </div>
        </section>

        <div className="mx-auto flex max-w-3xl flex-col gap-10">

          {/* ── 前半：Tシャツ ── */}
          <SectionCard title='ただのドクロじゃない、"今を楽しむ"ためのグラフィック。'>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              <p>カラベラは、死を恐れるだけのモチーフではありません。</p>
              <p>
                メキシコの文化では、死は生の一部として受け入れられ、花や色、音楽とともに陽気に表現されます。
              </p>
              <p>
                このTシャツでは、カラフルなドクロ、花、漢字の要素を組み合わせ、
                少し不思議で、でも重くなりすぎないグラフィックに仕上げています。
              </p>
              <p>どんなカラーにも映えるデザインで、胸元にしっかり個性が残る一枚です。</p>
            </div>
          </SectionCard>

          <SectionCard title="このTシャツのポイント">
            <ul className="space-y-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              <li className="flex gap-2">
                <span className="shrink-0 text-gray-400">•</span>
                <span>ブラック・ネイビー・ホワイト・グレー・ピンクなど複数カラー展開</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-gray-400">•</span>
                <span>メンズ・レディース・キッズの各サイズあり</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-gray-400">•</span>
                <span>カラベラモチーフで個性が出る</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-gray-400">•</span>
                <span>ドクロでも怖すぎず、ポップで陽気な印象</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-gray-400">•</span>
                <span>漢字要素が入り、和の雰囲気も少し感じられる</span>
              </li>

            </ul>
          </SectionCard>

          {/* ── 後半：AIシンガー・曲 ── */}
          <SectionCard title="AIシンガー（名前募集中）">
            <div className="space-y-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              <p>まだ名前の決まっていないAIシンガーです。</p>
              <p>
                デビュー曲「骨まで笑え」では、カラベラの思想から着想を得て、
                終わりを恐れるより、今を楽しむ気持ちを歌っています。
              </p>
              <p>このTシャツは、その世界観に合わせて選ばれた一枚です。</p>
              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                正式な名前はまだありません。絶賛募集中なのでおすすめの名前があれば、下のボタンからInstagramのコメントで教えてください。
              </p>
              <div className="flex justify-center pt-2">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="名前をInstagramでコメントする（別タブ）"
                  className="amazon-btn w-full max-w-sm justify-center px-5 py-3 text-sm sm:text-base"
                >
                  <Image
                    src="/designshelf/images/Instagram_logo_black.png"
                    alt=""
                    width={22}
                    height={22}
                    className="h-5 w-5 shrink-0 brightness-0 invert"
                    unoptimized
                  />
                  <span className="label text-center">名前をInstagramでコメントする</span>
                </a>
              </div>
            </div>
          </SectionCard>

          <SectionCard title='デビュー曲「骨まで笑え」'>
            <div className="mb-6 space-y-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              <p>カラベラの持つ、明るく前向きな死生観をもとにしたAI楽曲です。</p>
              <p>
                悲しみや怖さを隠すのではなく、花で飾り、笑い、踊るように今を生きる。
                そんなメッセージを込めています。
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 sm:p-6">
              <audio controls className="w-full max-w-md" preload="metadata" src={fullSongAudioSrc}>
                お使いのブラウザは音声再生に未対応です。
              </audio>
            </div>
            <SongLyrics />
          </SectionCard>

        </div>
      </main>

      <footer className="mt-16 bg-gray-800 py-12 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-bold">
                <UtaraskaCorporateLink className="hover:text-gray-200 transition-colors" />
              </h3>
              <p className="mb-2 text-gray-300">
                〒150-0043
                <br />
                東京都渋谷区道玄坂1丁目10番8号渋谷道玄坂東急ビル2F−C
              </p>
              <p className="text-gray-300">contact@utaraska.co.jp</p>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold">utaraska odd</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/odd/picks" className="text-gray-300 transition-colors hover:text-white">
                    AmazonおすすめTシャツ
                  </Link>
                </li>
                <li>
                  <Link href="/odd/about" className="text-gray-300 transition-colors hover:text-white">
                    運営情報
                  </Link>
                </li>
                <li>
                  <Link href="/odd/privacy" className="text-gray-300 transition-colors hover:text-white">
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link href="/odd/contact" className="text-gray-300 transition-colors hover:text-white">
                    お問い合わせ
                  </Link>
                  <div className="mt-1 text-xs text-gray-500">v0.1.4</div>
                </li>
              </ul>
              <div className="mt-6">
                <a
                  href="https://www.instagram.com/utaraska_odd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
                >
                  <Image
                    src="/designshelf/images/Instagram_logo.png"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                    unoptimized
                  />
                  <span className="text-sm">@utaraska_odd</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="mb-2 text-gray-400">
              &copy; {new Date().getFullYear()}{' '}
              <UtaraskaCorporateLink className="hover:text-gray-300 transition-colors">ウタラスカ合同会社</UtaraskaCorporateLink>.
              All rights reserved.
            </p>
            <p className="mx-auto max-w-4xl text-xs text-gray-500">
              一部の着用画像はAIで生成・編集しており、色味や細部が実物と異なる場合があります。ご購入前はAmazonの商品説明等をご確認ください。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
