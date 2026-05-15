import Image from 'next/image';
import Link from 'next/link';
import { CALAVERA_KANJI_CAMPAIGN } from '@/lib/designshelf/calaveraKanjiCampaign';

function AmazonCta({ className = '' }: { className?: string }) {
  return (
    <a
      href={CALAVERA_KANJI_CAMPAIGN.amazonProductUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex w-full max-w-md items-center justify-center border-4 border-black bg-yellow-400 px-6 py-4 text-center text-base font-black text-black shadow-[6px_6px_0_0_rgb(0,0,0)] transition hover:bg-yellow-300 sm:text-lg ${className}`}
    >
      AmazonでTシャツを見る
    </a>
  );
}

export default function CalaveraKanjiLandingPage() {
  const { heroSingerVisualSrc, heroProductShirtSrc, fullSongUrl, instagramUrl } =
    CALAVERA_KANJI_CAMPAIGN;

  return (
    <div className="min-h-screen bg-neutral-100 text-black">
      <header className="sticky top-0 z-20 border-b-4 border-black bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
          <Link
            href="/designshelf/jp"
            className="text-sm font-bold text-neutral-700 underline decoration-2 underline-offset-2 hover:text-black"
          >
            ← JPストア一覧
          </Link>
          <span className="truncate text-xs font-bold text-red-600 sm:text-sm">広告着地ページ</span>
        </div>
      </header>

      <main>
        {/* ファーストビュー */}
        <section className="border-b-4 border-black bg-white">
          <div className="relative mx-auto max-w-3xl">
            <div className="relative h-[42vh] min-h-[260px] w-full border-b-4 border-black bg-neutral-900 sm:h-auto sm:min-h-0 sm:aspect-video">
              <Image
                src={heroSingerVisualSrc}
                alt="AIシンガーSAKI（仮名）キービジュアル・リールと同じカットの差し替え用"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width:768px) 100vw, 768px"
              />
            </div>
            <div className="relative -mt-0 border-t-4 border-black bg-gradient-to-br from-red-500 via-yellow-400 to-lime-400 p-1">
              <div className="border-4 border-black bg-white p-4 sm:p-6">
                <div className="relative mx-auto mb-4 max-w-[200px] sm:max-w-xs md:max-w-sm">
                  <div className="relative aspect-[3/4] overflow-hidden border-4 border-black bg-neutral-100">
                    <Image
                      src={heroProductShirtSrc}
                      alt="カラベラドクロと漢字 黒Tシャツ（着用イメージ）"
                      fill
                      className="object-contain"
                      sizes="(max-width:768px) 90vw, 320px"
                      priority
                    />
                  </div>
                </div>
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-red-600">
                  商品名
                </p>
                <h1 className="mb-4 text-2xl font-black leading-tight sm:text-3xl">
                  デビュー曲「骨まで笑え」で着用した黒Tシャツ
                </h1>
                <p className="mb-2 text-lg font-black text-neutral-900">カラベラドクロと漢字</p>
                <div className="mb-6 space-y-3 text-sm font-bold leading-relaxed text-neutral-800 sm:text-base">
                  <p>仮名：SAKI。名前は、まだ決まっていません。</p>
                  <p>デビュー曲は「骨まで笑え」。</p>
                  <p>
                    はじめて歌う彼女に着せたのは、
                    <br />
                    カラベラモチーフの黒Tシャツ。
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
                  <AmazonCta className="sm:flex-1" />
                  <a
                    href={fullSongUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full max-w-md items-center justify-center border-4 border-black bg-white px-6 py-4 text-center text-base font-black text-black transition hover:bg-neutral-100 sm:flex-1 sm:max-w-none sm:text-lg"
                  >
                    フルver.を聴く
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 商品説明 */}
        <section className="mx-auto max-w-3xl border-b-4 border-black bg-lime-100 px-4 py-14 sm:px-8">
          <h2 className="mb-6 inline-block border-4 border-black bg-white px-4 py-2 text-xl font-black sm:text-2xl">
            ただのドクロじゃない、“今を楽しむ”ためのグラフィック。
          </h2>
          <div className="space-y-4 border-4 border-black bg-white p-6 text-sm font-bold leading-relaxed sm:text-base">
            <p>カラベラは、死を恐れるだけのモチーフではありません。</p>
            <p>
              メキシコの文化では、死は生の一部として受け入れられ、花や色、音楽とともに陽気に表現されます。
            </p>
            <p>
              このTシャツでは、カラフルなドクロ、花、漢字の要素を組み合わせ、
              少し不思議で、でも重くなりすぎないグラフィックに仕上げています。
            </p>
            <p>黒Tシャツとして日常に合わせやすく、胸元にしっかり個性が残る一枚です。</p>
          </div>
        </section>

        {/* 特徴 + 中盤 CTA */}
        <section className="mx-auto max-w-3xl border-b-4 border-black bg-yellow-200 px-4 py-14 sm:px-8">
          <h2 className="mb-6 inline-block border-4 border-black bg-white px-4 py-2 text-xl font-black sm:text-2xl">
            このTシャツのポイント
          </h2>
          <ul className="mb-10 space-y-3 border-4 border-black bg-white p-6 text-sm font-bold leading-relaxed sm:text-base">
            <li className="flex gap-2">
              <span className="text-red-600">●</span>
              <span>黒Tシャツなのでコーディネートしやすい</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-600">●</span>
              <span>カラベラモチーフで個性が出る</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-600">●</span>
              <span>ドクロでも怖すぎず、ポップで陽気な印象</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-600">●</span>
              <span>漢字要素が入り、和の雰囲気も少し感じられる</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-600">●</span>
              <span>AIシンガーSAKI（仮名）の着用アイテムとして世界観を楽しめる</span>
            </li>
          </ul>
          <div className="flex justify-center">
            <AmazonCta />
          </div>
        </section>

        {/* AIシンガー紹介 */}
        <section className="mx-auto max-w-3xl border-b-4 border-black bg-white px-4 py-14 sm:px-8">
          <h2 className="mb-6 inline-block border-4 border-black bg-pink-400 px-4 py-2 text-xl font-black sm:text-2xl">
            AIシンガー SAKI（仮名）
          </h2>
          <div className="space-y-4 border-4 border-black bg-neutral-50 p-6 text-sm font-bold leading-relaxed sm:text-base">
            <p>SAKIは、まだ名前の決まっていないAIシンガーです。</p>
            <p>
              デビュー曲「骨まで笑え」では、カラベラの思想から着想を得て、
              終わりを恐れるより、今を楽しむ気持ちを歌っています。
            </p>
            <p>このTシャツは、その世界観に合わせて選ばれた一枚です。</p>
            <p className="rounded-lg border-2 border-dashed border-neutral-400 bg-white p-4 text-center text-neutral-800">
              この子に似合う名前を、Instagramのコメントで募集中です。
            </p>
          </div>
        </section>

        {/* 楽曲 + 埋め込みプレースホルダー */}
        <section className="mx-auto max-w-3xl border-b-4 border-black bg-red-500 px-4 py-14 sm:px-8">
          <h2 className="mb-6 inline-block border-4 border-black bg-white px-4 py-2 text-xl font-black sm:text-2xl">
            デビュー曲「骨まで笑え」
          </h2>
          <div className="mb-6 space-y-4 border-4 border-black bg-white p-6 text-sm font-bold leading-relaxed sm:text-base">
            <p>カラベラの持つ、明るく前向きな死生観をもとにしたAI楽曲です。</p>
            <p>
              悲しみや怖さを隠すのではなく、花で飾り、笑い、踊るように今を生きる。
              そんなメッセージを込めています。
            </p>
          </div>
          <div className="overflow-hidden border-4 border-black bg-neutral-900 shadow-[8px_8px_0_0_rgb(0,0,0)]">
            <div className="aspect-video w-full">
              {/* 音源・動画の埋め込みはここに iframe 等を追加（URL 確定後） */}
              <div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-b from-neutral-800 to-black p-6 text-center">
                <p className="text-sm font-bold text-yellow-400">音楽・動画プレーヤー（埋め込み予定）</p>
                <p className="max-w-sm text-xs font-bold text-neutral-400">
                  YouTube / Spotify などの embed または音声プレーヤーを、このブロック内に配置できます。
                </p>
                <a
                  href={fullSongUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex border-2 border-yellow-400 px-4 py-2 text-xs font-black text-yellow-400 hover:bg-yellow-400 hover:text-black"
                >
                  フルver.を別タブで開く
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 下部 CTA + Instagram */}
        <section className="mx-auto max-w-3xl bg-gradient-to-b from-green-200 to-cyan-200 px-4 py-14 sm:px-8">
          <div className="mb-10 flex flex-col items-center gap-4 border-4 border-black bg-white p-8">
            <p className="text-center text-sm font-bold text-neutral-700">広告で見たあの一枚を、Amazonで。</p>
            <AmazonCta />
          </div>
          <div className="border-4 border-black bg-black p-8 text-center">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-4 border-white bg-gradient-to-r from-pink-500 to-orange-500 px-6 py-4 text-sm font-black text-white shadow-[6px_6px_0_0_rgb(255,255,255)] transition hover:opacity-90 sm:text-base"
            >
              SAKIの名前案をInstagramでコメントする
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t-4 border-black bg-neutral-900 px-4 py-6 text-center">
        <Link
          href="/designshelf/jp"
          className="text-sm font-bold text-white underline hover:text-yellow-300"
        >
          Design Shelf JP 一覧へ戻る
        </Link>
        <p className="mt-2 text-xs text-neutral-500">© {new Date().getFullYear()} ウタラスカ合同会社</p>
      </footer>
    </div>
  );
}
