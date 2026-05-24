import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RAKUGAKI_T } from '@/lib/designshelf/rakugakiT';
import { HeroTshirtCarousel } from './HeroTshirtCarousel';

function ApplyCta({
  className = '',
  fullWidth = false,
}: {
  className?: string;
  fullWidth?: boolean;
}) {
  return (
    <a
      href={RAKUGAKI_T.applicationFormUrl}
      className={`amazon-btn justify-center px-5 py-3 text-sm sm:text-base ${fullWidth ? 'w-full sm:w-auto' : ''} ${className}`}
      aria-label="落書きを応募する"
    >
      <span className="label text-center">落書きを応募する</span>
    </a>
  );
}

function SectionCard({
  id,
  title,
  children,
  className = '',
}: {
  id?: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 rounded-lg border border-gray-100 bg-white p-6 shadow-md sm:p-8 ${className}`}
    >
      <h2 className="mb-4 text-xl font-bold text-gray-800 sm:text-2xl">{title}</h2>
      {children}
    </section>
  );
}

function StepCard({
  step,
  title,
  children,
}: {
  step: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="relative rounded-lg border border-dashed border-amber-200 bg-amber-50/40 p-4 sm:p-5">
      <p className="mb-1 text-xs font-bold uppercase tracking-wide text-amber-700">{step}</p>
      <h3 className="mb-2 text-base font-bold text-gray-800 sm:text-lg">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{children}</p>
    </div>
  );
}

const FLOW_STEPS = [
  {
    step: 'STEP 1',
    title: '落書きを応募',
    body: 'スマホで撮った写真やスキャン画像を送ってください。',
  },
  {
    step: 'STEP 2',
    title: 'ウタラスカが審査',
    body: 'すべての作品が採用されるわけではありません。Tシャツに合いそうな作品を選びます。',
  },
  {
    step: 'STEP 3',
    title: 'Tシャツ用に調整',
    body: '線や配置を整え、Tシャツ用のデザインにします。胸元の位置や大きさは作品に合わせて決め、元の味はできるだけ残します。',
  },
  {
    step: 'STEP 4',
    title: 'Amazonで販売',
    body: '採用作品はまず Amazon Merch On Demand で一定期間販売します。',
  },
  {
    step: 'STEP 5',
    title: '掲載期間後の移行',
    body: '販売状況や掲載枠の都合により、UP-T / BASE へ移行する場合があります。',
  },
] as const;

const OK_EXAMPLES = [
  '小さな動物',
  '変な顔',
  'ゆるいキャラクター',
  '手描き文字',
  '子どもの絵',
  '意味はわからないけど気になる絵',
  'ちょっとシュールなイラスト',
  '大人がなんとなく描いた落書き',
] as const;

const NG_EXAMPLES = [
  'アニメ・漫画・ゲームなどの二次創作',
  '有名キャラクターに似ている絵',
  'ブランドロゴや企業ロゴ',
  '芸能人・有名人の似顔絵',
  '他人が描いた絵',
  'AI生成画像',
  '公序良俗に反する内容',
  '差別的・攻撃的な内容',
] as const;

const CHECKLIST = [
  '応募作品は、応募者本人または保護者が権利を持つオリジナル作品です。',
  '未成年の作品は、保護者が応募してください。',
  '採用作品は、ウタラスカが加工・編集・商品化・宣伝利用する場合があります。',
  'すべての作品が採用されるわけではありません。',
  '採用謝礼は一回限りです。',
  '第三者の権利を侵害する作品は応募できません。',
] as const;

const FAQ = [
  {
    q: '子どもの絵でも応募できますか？',
    a: 'はい。保護者の方が応募してください。',
  },
  {
    q: '写真で撮った画像でも大丈夫ですか？',
    a: '大丈夫です。できるだけ明るく、影が少ない状態で撮影してください。',
  },
  {
    q: '採用されなかった場合、連絡はありますか？',
    a: '運用初期は、採用者への連絡を優先する場合があります。',
  },
  {
    q: '自分で描いた大人の落書きでも応募できますか？',
    a: 'はい。大人の落書きも歓迎します。',
  },
  {
    q: 'AIで作った画像は応募できますか？',
    a: '現時点では受け付けていません。手描きの作品のみ対象です。',
  },
  {
    q: '採用後に売上報告はありますか？',
    a: 'ありません。謝礼は一回限りで、売上に応じた追加報酬はありません。',
  },
  {
    q: 'Amazonで販売終了したらどうなりますか？',
    a: '販売状況に応じて、UP-T / BASE へ移行する場合があります。',
  },
] as const;

function SiteHeader() {
  return (
    <header className="bg-white shadow-sm">
      <nav>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-y-3 px-4 py-4">
          <Link href="/designshelf/jp" className="flex items-center">
            <Image
              src="/designshelf/images/logo.png"
              alt="Design Shelf"
              width={120}
              height={60}
              className="h-auto w-[100px] transition-transform hover:scale-105 sm:w-[120px]"
            />
          </Link>
          <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 sm:gap-6">
            <Link href="/designshelf/jp" className="text-gray-600 transition-colors hover:text-gray-900">
              ホーム
            </Link>
            <Link href="/designshelf/jp/picks" className="text-gray-600 transition-colors hover:text-gray-900">
              Amazonおすすめ
            </Link>
            <Link href="/designshelf/jp/contact" className="text-gray-600 transition-colors hover:text-gray-900">
              お問い合わせ
            </Link>
            <Link href="/designshelf/jp/about" className="text-gray-600 transition-colors hover:text-gray-900">
              運営者情報
            </Link>
            <Link href="/designshelf" className="text-gray-600 transition-colors hover:text-gray-900">
              EN Store
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-16 bg-gray-800 py-12 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-bold">ウタラスカ合同会社</h3>
            <p className="mb-2 text-gray-300">
              〒150-0043
              <br />
              東京都渋谷区道玄坂1丁目10番8号渋谷道玄坂東急ビル2F−C
            </p>
            <p className="text-gray-300">contact@utaraska.co.jp</p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Design Shelf</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/designshelf/jp/picks" className="text-gray-300 transition-colors hover:text-white">
                  AmazonおすすめTシャツ
                </Link>
              </li>
              <li>
                <Link href="/designshelf/jp/about" className="text-gray-300 transition-colors hover:text-white">
                  運営者情報
                </Link>
              </li>
              <li>
                <Link href="/designshelf/jp/contact" className="text-gray-300 transition-colors hover:text-white">
                  お問い合わせ
                </Link>
                <div className="mt-1 text-xs text-gray-500">v0.1.4</div>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="https://www.instagram.com/designshelf2025/"
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
                <span className="text-sm">@designshelf2025</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="mb-2 text-gray-400">
            &copy; {new Date().getFullYear()} ウタラスカ合同会社. All rights reserved.
          </p>
          <p className="mx-auto max-w-4xl text-xs text-gray-500">
            落書きTの応募・採用条件の詳細は、本ページおよび
            <a href={RAKUGAKI_T.termsUrl} className="underline decoration-gray-600 underline-offset-2">
              利用規約
            </a>
            をご確認ください。
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RakugakiLandingPage() {
  const rewardLabel = RAKUGAKI_T.adoptionRewardYen.toLocaleString('ja-JP');

  return (
    <div className="min-h-screen bg-gray-100">
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-4 py-8">
        {/* ヒーロー */}
        <section className="mb-8 overflow-hidden rounded-lg border border-gray-100 bg-white p-6 shadow-md sm:p-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-2 inline-block rotate-[-1deg] rounded-md border border-dashed border-amber-300 bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-800">
                Design Shelf 投稿企画
              </p>
              <h1 className="mb-3 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">落書きT</h1>
              <p className="mb-4 text-lg font-bold leading-snug text-gray-700 sm:text-xl">
                あなたの落書きが、Tシャツになる。
              </p>
              <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">
                子どもの絵、ふと描いた落書き、ちょっと変なイラスト。
                その中から採用作品を選び、Design ShelfのTシャツとして商品化します。
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <ApplyCta fullWidth />
                <a
                  href="#examples"
                  className="inline-flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50 sm:w-auto sm:text-base"
                >
                  募集条件を見る
                </a>
              </div>
            </div>
            <HeroTshirtCarousel />
          </div>
        </section>

        <div className="flex flex-col gap-8">
          {/* この企画について */}
          <SectionCard id="about" title="落書きTとは">
            <div className="space-y-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              <p>
                落書きTは、みなさんから届いた手描きの絵を、ウタラスカがTシャツ用に少しだけ整えて販売する投稿企画です。
                きれいに描かれた絵よりも、線のゆれ、変な形、よくわからない表情など、その人にしか描けない味を大切にします。
              </p>
              <div className="rounded-lg border border-dashed border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">
                <p className="mb-1 font-semibold text-gray-800">運営方針</p>
                <p>清書しすぎず、元の落書きらしさを残します。</p>
                <p className="mt-2">
                  胸元に小さく載せることが多いですが、作品によっては中央寄りなど配置も変えます。サイズや位置はウタラスカがデザインに合わせて決めます。
                </p>
              </div>
            </div>
          </SectionCard>

          {/* 流れ */}
          <SectionCard id="flow" title="応募から販売まで">
            <div className="grid gap-3 sm:gap-4">
              {FLOW_STEPS.map((item) => (
                <StepCard key={item.step} step={item.step} title={item.title}>
                  {item.body}
                </StepCard>
              ))}
            </div>
          </SectionCard>

          {/* OK / NG */}
          <SectionCard id="examples" title="こんな落書きを募集しています">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-emerald-100 bg-emerald-50/50 p-4 sm:p-5">
                <h3 className="mb-3 text-sm font-bold text-emerald-800 sm:text-base">OK例</h3>
                <ul className="space-y-2">
                  {OK_EXAMPLES.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-gray-700">
                      <span className="shrink-0 font-bold text-emerald-600" aria-hidden>
                        ○
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-rose-100 bg-rose-50/50 p-4 sm:p-5">
                <h3 className="mb-3 text-sm font-bold text-rose-800 sm:text-base">NG例</h3>
                <ul className="space-y-2">
                  {NG_EXAMPLES.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-gray-700">
                      <span className="shrink-0 font-bold text-rose-500" aria-hidden>
                        ×
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionCard>

          {/* 謝礼 */}
          <SectionCard id="reward" title="採用された方には謝礼をお送りします">
            <div className="space-y-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              <p>
                採用作品には、謝礼としてAmazonギフト券をメールでお送りします。
                謝礼は一回限りです。販売数や売上に応じた追加報酬、継続ロイヤリティはありません。
              </p>
              <p className="inline-block rounded-lg bg-amber-50 px-4 py-3 text-base font-bold text-amber-900 ring-1 ring-amber-200">
                採用謝礼：Amazonギフト券 {rewardLabel}円分
              </p>
            </div>
          </SectionCard>

          {/* 販売 */}
          <SectionCard id="sales" title="販売場所と掲載期間について">
            <div className="space-y-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              <p>
                採用作品は、まず Amazon Merch On Demand で販売します。
                Amazonの掲載枠には限りがあるため、一定期間販売実績がない作品や、掲載枠の整理が必要な作品は、
                UP-T / BASE へ移行する場合があります。
              </p>
              <p>
                販売場所、販売期間、販売価格、商品種類は運営側で決定します。
                採用が Amazon での販売開始を保証するものではありません。
              </p>
              <p className="rounded-lg border-l-4 border-amber-500 bg-amber-50 px-4 py-3 font-semibold text-amber-950">
                採用＝Amazonで永久販売ではありません。
              </p>
            </div>
          </SectionCard>

          {/* 応募前 */}
          <SectionCard id="before-apply" title="応募前にご確認ください">
            <ul className="space-y-3">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-gray-700 sm:text-base">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-800 text-xs font-bold text-white"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-gray-500 sm:text-sm">
              詳細な条件・権利関係については、
              <a
                href={RAKUGAKI_T.termsUrl}
                className="font-medium text-gray-700 underline decoration-gray-400 underline-offset-2 hover:text-gray-900"
              >
                落書きT 利用規約
              </a>
              （準備中）もあわせてご確認ください。
            </p>
          </SectionCard>

          {/* FAQ */}
          <SectionCard id="faq" title="よくある質問">
            <dl className="divide-y divide-gray-100">
              {FAQ.map((item) => (
                <div key={item.q} className="py-4 first:pt-0 last:pb-0">
                  <dt className="mb-2 text-sm font-bold text-gray-800 sm:text-base">Q. {item.q}</dt>
                  <dd className="text-sm leading-relaxed text-gray-600 sm:text-base">A. {item.a}</dd>
                </div>
              ))}
            </dl>
          </SectionCard>

          {/* 最終CTA */}
          <section
            id="apply"
            className="scroll-mt-24 rounded-lg border border-dashed border-amber-300 bg-gradient-to-br from-amber-50/80 to-white p-6 text-center shadow-md sm:p-10"
          >
            <h2 className="mb-3 text-xl font-bold text-gray-800 sm:text-2xl">あなたの落書きを送ってください</h2>
            <p className="mx-auto mb-2 max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
              上手い絵である必要はありません。
            </p>
            <p className="mx-auto mb-6 max-w-md text-sm font-medium leading-relaxed text-gray-700 sm:text-base">
              胸元に載せたとき、なぜか気になる。
              <br className="hidden sm:inline" />
              そんな落書きを募集しています。
            </p>
            <ApplyCta className="mx-auto min-w-[240px]" />
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
