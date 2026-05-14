import Image from 'next/image';
import Link from 'next/link';

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-50 to-cyan-100">
      <header className="sticky top-0 z-10 border-b-4 border-black bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          <Link
            href="/"
            className="font-black text-black underline decoration-4 decoration-pink-400 underline-offset-4 hover:text-pink-600"
          >
            ← トップへ
          </Link>
          <span className="font-black text-black">utaraska.co.jp/games</span>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="mb-10 flex justify-center">
          <Image
            src="/games/logo_no_bg.png"
            alt="ウタラスカ合同会社ロゴ"
            width={304}
            height={126}
            className="h-auto w-full max-w-[240px] object-contain sm:max-w-[272px]"
            priority
          />
        </div>

        <p className="mx-auto mb-10 max-w-2xl text-center text-lg font-bold leading-relaxed text-gray-900">
          モバイルアプリやブラウザ向けのゲームを中心に、企画から開発・リリースまで手がけています。イラスト・キャラ資産から実装まで一気通貫で相談いただく場合は、AI活用やバイブコーディングで効率化しつつお見積りを抑えやすい体制です。App Store の自社タイトルと、かんたんゲームボックス掲載のカジュアルゲームをこちらでご紹介します。
        </p>

        <section className="mb-10 rounded-none border-4 border-black bg-white p-8 shadow-[8px_8px_0_0_rgb(0,0,0)]">
          <h2 className="mb-6 inline-block border-2 border-black bg-yellow-300 px-4 py-2 text-xl font-black text-black">
            公開作品
          </h2>

          <div className="space-y-6">
            <article className="border-4 border-black bg-gradient-to-br from-slate-100 via-rose-50 to-violet-100 p-6 shadow-[4px_4px_0_0_rgb(0,0,0)]">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <Image
                  src="/games/color-face-blast-icon.png"
                  alt="Color Face Blastのアプリアイコン。4×4のグリッドに並んだカラフルな顔つきのブロック。"
                  width={160}
                  height={160}
                  className="shrink-0 rounded-3xl"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="mb-2 text-2xl font-black text-black md:text-3xl">Color Face Blast</h3>
                  <p className="mb-1 text-sm font-bold text-gray-700">
                    iPhone / iPad（App Store）・無料 · 持って置いて揃えて消す。スキマ時間に
                  </p>
                  <p className="mb-4 text-sm font-bold text-gray-600">
                    トレイから形付きピースを盤面の空きマスへ置き、横一列または縦一列がそろうとライン消去でスコア。同時に複数本消すとボーナス、連続成功でコンボ追加。ミッション色をライン消しに含めると制限時間が延びます。置けなくなったら、または時間切れでゲームオーバー。
                  </p>
                  <a
                    href="https://apps.apple.com/jp/app/color-face-blast/id6764055218"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-4 border-black bg-black px-6 py-3 font-black text-white shadow-[4px_4px_0_0_rgb(0,0,0)] transition-colors hover:bg-gray-800"
                  >
                    App Store で見る
                  </a>
                </div>
              </div>
            </article>

            <article className="border-4 border-black bg-gradient-to-br from-amber-50 via-orange-50 to-lime-50 p-6 shadow-[4px_4px_0_0_rgb(0,0,0)]">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <Image
                  src="/games/color-face-sort-icon.png"
                  alt="カラーフェイスソートのアプリアイコン。3列のボトルに並んだカラフルな顔つきのキャラクター。"
                  width={160}
                  height={160}
                  className="shrink-0 rounded-3xl"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="mb-2 text-2xl font-black text-black md:text-3xl">カラーフェイスソート</h3>
                  <p className="mb-1 text-sm font-bold text-gray-700">
                    iPhone / iPad（App Store）・無料 · サクッと遊べるボトル整理ゲーム
                  </p>
                  <p className="mb-4 text-sm font-bold text-gray-600">
                    出し元と移し先のボトルを順にタップして、同色をまとめて移動。1本最大4個、空か先頭と同色のときだけ注げます。同色で1本を満たすとスコア＆時間回復、連続でコンボ倍率アップ。タイムアップまで高得点を狙うパズルです。
                  </p>
                  <a
                    href="https://apps.apple.com/jp/app/%E3%82%AB%E3%83%A9%E3%83%BC%E3%83%95%E3%82%A7%E3%82%A4%E3%82%B9%E3%82%BD%E3%83%BC%E3%83%88/id6762062157"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-4 border-black bg-black px-6 py-3 font-black text-white shadow-[4px_4px_0_0_rgb(0,0,0)] transition-colors hover:bg-gray-800"
                  >
                    App Store で見る
                  </a>
                </div>
              </div>
            </article>

            <article className="border-4 border-black bg-gradient-to-br from-red-50 via-yellow-50 to-sky-50 p-6 shadow-[4px_4px_0_0_rgb(0,0,0)]">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <Image
                  src="/games/yusha-o-sagase-icon.png"
                  alt="勇者を探せのアプリアイコン。黄色い頭飾りと青い服の勇者キャラクター。"
                  width={160}
                  height={160}
                  className="shrink-0 rounded-3xl"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="mb-2 text-2xl font-black text-black md:text-3xl">勇者を探せ</h3>
                  <p className="mb-1 text-sm font-bold text-gray-700">iPhone / iPad（App Store）・無料</p>
                  <p className="mb-4 text-sm font-bold text-gray-600">
                    『探す勇者』を確認し、キャラの中から該当する勇者をタップ。制限時間内に高得点を目指す探しゲームです。見つけた勇者は図鑑に記録されます。
                  </p>
                  <a
                    href="https://apps.apple.com/jp/app/%E5%8B%87%E8%80%85%E3%82%92%E6%8E%A2%E3%81%9B/id6761643482"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-4 border-black bg-black px-6 py-3 font-black text-white shadow-[4px_4px_0_0_rgb(0,0,0)] transition-colors hover:bg-gray-800"
                  >
                    App Store で見る
                  </a>
                </div>
              </div>
            </article>

            <article className="border-4 border-black bg-gradient-to-br from-fuchsia-50 via-cyan-50 to-amber-50 p-6 shadow-[4px_4px_0_0_rgb(0,0,0)]">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <Image
                  src="/games/echo-gift-icon.png"
                  alt="Echo Giftのアプリアイコン。グラデーションのロゴと音符・ハートの装飾。"
                  width={160}
                  height={160}
                  className="shrink-0 rounded-3xl"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="mb-2 text-2xl font-black text-black md:text-3xl">Echo Gift</h3>
                  <p className="mb-1 text-sm font-bold text-gray-700">
                    iPhone / iPad（App Store）・無料 · 声をワケルン、魔法少女
                  </p>
                  <p className="mb-4 text-sm font-bold text-gray-600">
                    マイクで声を録音し、137体のおじさんに「ワケルン」（割り当て）。ワールドを歩いて声を聞き、図鑑を埋めるサウンド育成ゲームです。
                  </p>
                  <a
                    href="https://apps.apple.com/jp/app/echo-gift/id6760299223"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-4 border-black bg-black px-6 py-3 font-black text-white shadow-[4px_4px_0_0_rgb(0,0,0)] transition-colors hover:bg-gray-800"
                  >
                    App Store で見る
                  </a>
                </div>
              </div>
            </article>
          </div>

        </section>

        <section className="mb-10 rounded-none border-4 border-black bg-white p-8 shadow-[8px_8px_0_0_rgb(0,0,0)]">
          <h2 className="mb-4 inline-block border-2 border-black bg-lime-300 px-4 py-2 text-xl font-black text-black">
            かんたんゲームボックス by GMO
          </h2>
          <p className="mb-4 text-sm font-bold leading-relaxed text-gray-800">
            <strong className="text-black">GMO メディア株式会社</strong>
            が提供する、<strong className="text-black">アプリのインストールなし</strong>
            で遊べるカジュアルゲームのサービスです。パズル・アクションなどブラウザ向けのタイトルがそろい、ポイントプログラムと組み合わせた企画にも使われています。
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {[
              {
                href: 'https://kantan.game/easygame/game/647',
                title: 'アニマル マージ パズル',
                genre: 'パズル',
                iconSrc: '/games/kgb-animal-merge-puzzle.png',
                iconAlt: 'アニマル マージ パズルのロゴ',
              },
              {
                href: 'https://kantan.game/easygame/game/703',
                title: 'ダッシュんゴー / DASHN GO',
                genre: 'アクション',
                iconSrc: '/games/kgb-dashn-go.png',
                iconAlt: 'ダッシュんゴー / DASHN GO のアイコン',
              },
              {
                href: 'https://kantan.game/easygame/game/737',
                title: 'スライドラッシュ / SLIDE RUSH',
                genre: 'パズル',
                iconSrc: '/games/kgb-slide-rush.png',
                iconAlt: 'スライドラッシュ / SLIDE RUSH のアイコン',
              },
              {
                href: 'https://kantan.game/easygame/game/744',
                title: 'キャッチ フィッシュ',
                genre: 'アクション',
                iconSrc: '/games/kgb-catch-fish.png',
                iconAlt: 'キャッチ フィッシュ のアイコン',
              },
              {
                href: 'https://kantan.game/easygame/game/749',
                title: 'アルティメット バッター',
                genre: 'スポーツ',
                iconSrc: '/games/kgb-ultimate-batter.png',
                iconAlt: 'アルティメット バッターのアイコン',
              },
              {
                href: 'https://kantan.game/easygame/game/762',
                title: 'おっさんを探せ',
                genre: 'クイズ',
                iconSrc: '/games/kgb-ossan-o-sagase.png',
                iconAlt: 'おっさんを探せのアイコン',
              },
              {
                href: 'https://kantan.game/easygame/game/769',
                title: 'サバイバークエスト',
                genre: 'アクション',
                iconSrc: '/games/kgb-survival-quest.png',
                iconAlt: 'サバイバークエストのアイコン',
              },
              {
                href: 'https://kantan.game/easygame/game/781',
                title: 'カラーフェイスソート',
                genre: 'パズル',
                iconSrc: '/games/kgb-color-face-sort-kantan.png',
                iconAlt: 'かんたんゲームボックス版カラーフェイスソートのアイコン',
              },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border-2 border-black bg-lime-100 px-2 py-2 pr-3 font-bold text-black shadow-[2px_2px_0_0_rgb(0,0,0)] transition-colors hover:bg-lime-200"
                >
                  <Image
                    src={item.iconSrc}
                    alt={item.iconAlt}
                    width={56}
                    height={56}
                    className="h-14 w-14 shrink-0 rounded-2xl object-contain"
                  />
                  <span className="min-w-0 flex-1 text-sm leading-snug sm:text-base">{item.title}</span>
                  <span className="shrink-0 rounded border border-black bg-white px-2 py-0.5 text-xs font-black">
                    {item.genre}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs font-bold text-gray-600">
            本ページのリンク先は第三者（GMO メディア株式会社）が運営するサイトです。
          </p>
        </section>

        <section className="rounded-none border-4 border-black bg-cyan-200 p-8 shadow-[8px_8px_0_0_rgb(0,0,0)]">
          <h2 className="mb-4 text-xl font-black text-black">制作・相談</h2>
          <p className="mb-4 font-bold text-gray-900">
            ゲーム開発のご相談、受託制作のお問い合わせはこちらからどうぞ。
          </p>
          <a
            href="mailto:contact@utaraska.co.jp"
            className="inline-block border-4 border-black bg-white px-6 py-3 font-black text-black shadow-[4px_4px_0_0_rgb(0,0,0)] hover:bg-yellow-200 transition-colors"
          >
            contact@utaraska.co.jp
          </a>
        </section>
      </div>

      <footer className="border-t-8 border-black bg-gradient-to-r from-pink-500 via-yellow-500 to-cyan-500 px-4 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-block border-4 border-black bg-white px-6 py-3 font-black text-black">
            © {new Date().getFullYear()} ウタラスカ合同会社
          </p>
        </div>
      </footer>
    </main>
  );
}
