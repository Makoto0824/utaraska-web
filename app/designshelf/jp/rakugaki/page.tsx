import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RAKUGAKI_T } from '@/lib/designshelf/rakugakiT';
import { FaqList } from './FaqList';
import { HeroDecorations } from './HeroDecorations';
import { HeroTshirtCarousel } from './HeroTshirtCarousel';
import {
  IconArrowRight,
  IconCheck,
  IconCross,
  IconDoodleCircle,
  IconDoodleStar,
  IconGift,
  IconNote,
  IconPen,
  IconShop,
  IconSpark,
  IconTshirt,
  OkExampleIcon,
  STEP_ICONS,
} from './RakugakiIcons';

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
      className={`rakugaki-cta-primary ${fullWidth ? 'w-full sm:w-auto' : ''} ${className}`}
      aria-label="らくがきを送ってみる"
    >
      らくがきを送ってみる
    </a>
  );
}

function SecondaryCta({ className = '' }: { className?: string }) {
  return (
    <a href="#examples" className={`rakugaki-cta-secondary w-full sm:w-auto ${className}`}>
      応募できる絵を見る
    </a>
  );
}

function CtaBand({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-start ${compact ? 'py-2' : 'py-4'}`}
    >
      <ApplyCta fullWidth />
      <SecondaryCta />
    </div>
  );
}

function SectionCard({
  id,
  title,
  lead,
  children,
  className = '',
  tint = 'white',
  icon,
}: {
  id?: string;
  title: string;
  lead?: string;
  children: ReactNode;
  className?: string;
  tint?: 'white' | 'sky' | 'mint' | 'blush' | 'cream';
  icon?: ReactNode;
}) {
  const tints = {
    white: 'bg-white/95 border-orange-100/60',
    sky: 'bg-sky-50/80 border-sky-100',
    mint: 'bg-emerald-50/50 border-emerald-100/80',
    blush: 'bg-pink-50/40 border-pink-100/80',
    cream: 'bg-amber-50/30 border-amber-100/50',
  };

  return (
    <section
      id={id}
      className={`rakugaki-card scroll-mt-24 border p-6 sm:p-8 lg:p-10 ${tints[tint]} ${className}`}
    >
      <h2 className="rakugaki-section-title mb-1 text-xl font-bold text-slate-800 sm:text-2xl">
        {icon ? <span className="rakugaki-section-icon">{icon}</span> : null}
        <span className="rakugaki-section-title-text">{title}</span>
      </h2>
      {lead ? (
        <p className="mb-6 mt-4 text-sm font-medium leading-relaxed text-orange-700/90 sm:text-base">{lead}</p>
      ) : (
        <div className="mb-6" />
      )}
      {children}
    </section>
  );
}

function StepCard({
  stepNum,
  title,
  children,
  calm = false,
}: {
  stepNum: number;
  title: string;
  children: ReactNode;
  calm?: boolean;
}) {
  const StepIcon = STEP_ICONS[stepNum - 1];

  return (
    <div className={`rakugaki-step-card ${calm ? 'rakugaki-step-card--calm' : ''}`}>
      <div className="flex items-center justify-between gap-2">
        <div className="rakugaki-step-icon-wrap">
          <StepIcon className="h-5 w-5" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wide text-orange-600/80">
          STEP {stepNum}
        </span>
      </div>
      <h3 className="text-base font-bold text-slate-800">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">{children}</p>
    </div>
  );
}

function SalesFlowDiagram() {
  return (
    <div
      className="rakugaki-flow-diagram"
      aria-label="販売の流れ：Amazon Merch On Demand からその他の販売場所へ移行する場合があります"
    >
      <div className="rakugaki-flow-node">
        <p className="text-xs font-bold text-slate-500">まず</p>
        <p className="mt-1 text-sm font-bold text-slate-800">Amazon Merch On Demand</p>
        <p className="mt-1 text-xs text-slate-500">一定期間、Amazonで掲載</p>
      </div>
      <div className="rakugaki-flow-arrow" aria-hidden>
        <IconArrowRight className="h-5 w-10" />
      </div>
      <div className="rakugaki-flow-node rakugaki-flow-node--alt">
        <p className="text-xs font-bold text-slate-500">必要に応じて</p>
        <p className="mt-1 text-sm font-bold text-slate-800">その他の販売場所</p>
        <p className="mt-1 text-xs text-slate-500">へ移行する場合あり</p>
      </div>
    </div>
  );
}

const FLOW_STEPS = [
  { title: 'らくがきを応募', body: 'スマホで撮った写真やスキャン画像を送ってください。', calm: false },
  { title: 'ウタラスカが審査', body: 'すべての作品が採用されるわけではありません。Tシャツに合いそうな作品を選びます。', calm: false },
  {
    title: 'Tシャツ用に調整',
    body: '線や配置を整え、Tシャツ用のデザインにします。胸元の位置や大きさは作品に合わせて決め、元の味はできるだけ残します。',
    calm: false,
  },
  { title: 'Amazonで販売', body: '採用作品はまず Amazon Merch On Demand で一定期間販売します。', calm: true },
  { title: '掲載期間後の移行', body: '販売状況や掲載枠の都合により、当社が指定するその他の販売場所へ移行する場合があります。', calm: true },
] as const;

const OK_EXAMPLES = [
  '小さな動物',
  '変な顔',
  'ゆるいキャラクター',
  '手描き文字',
  '子どもの絵',
  '意味はわからないけど気になる絵',
  'ちょっとシュールなイラスト',
  '大人がなんとなく描いたらくがき',
] as const;

const NG_EXAMPLES: { text: string; highlight?: boolean }[] = [
  { text: 'アニメ・漫画・ゲームなどの二次創作', highlight: true },
  { text: '有名キャラクターに似ている絵', highlight: true },
  { text: 'ブランドロゴや企業ロゴ', highlight: true },
  { text: '芸能人・有名人の似顔絵' },
  { text: '他人が描いた絵' },
  { text: 'AI生成画像', highlight: true },
  { text: '公序良俗に反する内容' },
  { text: '差別的・攻撃的な内容' },
];

const CHECKLIST = [
  '応募作品は、応募者本人または保護者が権利を持つオリジナル作品です。',
  '未成年の作品は、保護者が応募してください。',
  '採用作品は、ウタラスカが加工・編集・商品化・宣伝利用する場合があります。',
  'すべての作品が採用されるわけではありません。',
  '採用謝礼は一回限りです。',
  '第三者の権利を侵害する作品は応募できません。',
] as const;

const FAQ = [
  { q: '子どもの絵でも応募できますか？', a: 'はい。保護者の方が応募してください。' },
  { q: '写真で撮った画像でも大丈夫ですか？', a: '大丈夫です。できるだけ明るく、影が少ない状態で撮影してください。' },
  { q: '採用されなかった場合、連絡はありますか？', a: '運用初期は、採用者への連絡を優先する場合があります。' },
  { q: '自分で描いた大人のらくがきでも応募できますか？', a: 'はい。大人のらくがきも歓迎します。' },
  { q: 'AIで作った画像は応募できますか？', a: '現時点では受け付けていません。手描きの作品のみ対象です。' },
  { q: '採用後に売上報告はありますか？', a: 'ありません。謝礼は一回限りで、売上に応じた追加報酬はありません。' },
  { q: 'Amazonで販売終了したらどうなりますか？', a: '販売状況に応じて、当社が指定するその他の販売場所へ移行する場合があります。' },
] as const;

function SiteHeader() {
  return (
    <header className="bg-white/95 shadow-sm backdrop-blur-sm">
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
    <footer className="mt-20 bg-gray-800 py-12 text-white">
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
            らくがきTの応募・採用条件の詳細は、本ページおよび
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
    <div className="rakugaki-page min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
        {/* ヒーロー */}
        <section className="rakugaki-hero rakugaki-notebook relative mb-10 overflow-x-hidden p-6 sm:p-10 lg:p-12">
          <HeroDecorations />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr,auto] lg:items-center lg:gap-12">
            <div>
              <p className="rakugaki-badge mb-5 -rotate-1">Design Shelf 投稿企画</p>
              <h1 className="rakugaki-title mb-5 text-5xl font-black tracking-tight text-slate-800 sm:text-6xl lg:text-7xl">
                らくがきT
                <span className="rakugaki-title-en">RAKUGAKI TEE</span>
              </h1>
              <p className="rakugaki-story-lead mb-4 text-xl font-bold leading-snug sm:text-2xl">
                子どもの絵も、大人のらくがきも、Tシャツになる。
              </p>
              <p className="mb-8 text-sm leading-relaxed text-slate-600 sm:text-base">
                スマホで撮った手描きの絵を送るだけ。採用作品はウタラスカがTシャツ用に整えて、Design
                Shelfの企画として販売します。
              </p>
              <CtaBand />
            </div>
            <div className="relative z-10 mx-auto w-full">
              <HeroTshirtCarousel large />
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-10 sm:gap-12">
          {/* らくがきTとは */}
          <SectionCard id="about" title="らくがきTとは" icon={<IconSpark className="h-5 w-5" />} tint="cream">
            <div className="rakugaki-memo mb-6">
              <p className="text-base font-bold leading-relaxed text-amber-900 sm:text-lg">
                上手い絵より、なぜか気になる絵を探しています。
              </p>
            </div>
            <div className="space-y-5 text-sm leading-relaxed text-slate-700 sm:text-base">
              <p>
                らくがきTは、みなさんから届いた手描きの絵を、ウタラスカがTシャツ用に少しだけ整えて販売する投稿企画です。
                きれいに描かれた絵よりも、線のゆれ、変な形、よくわからない表情など、その人にしか描けない味を大切にします。
              </p>
              <div className="rakugaki-highlight-card">
                <div className="mb-2 flex items-center gap-2">
                  <IconPen className="h-5 w-5 text-amber-600" />
                  <p className="text-base font-bold text-amber-900">大切にしていること</p>
                </div>
                <p className="font-semibold text-slate-800">清書しすぎず、元のらくがきらしさを残します。</p>
                <p className="mt-2 text-sm text-slate-600">
                  胸元に小さく載せることが多いですが、作品によっては中央寄りなど配置も変えます。サイズや位置はウタラスカがデザインに合わせて決めます。
                </p>
              </div>
            </div>
          </SectionCard>

          {/* 応募から販売まで */}
          <SectionCard id="flow" title="応募から販売まで" icon={<IconNote className="h-5 w-5" />}>
            <div className="rakugaki-step-grid">
              {FLOW_STEPS.map((item, index) => (
                <StepCard key={item.title} stepNum={index + 1} title={item.title} calm={item.calm}>
                  {item.body}
                </StepCard>
              ))}
            </div>
          </SectionCard>

          {/* 募集しているらくがき / NG作品 */}
          <SectionCard
            id="examples"
            title="募集しているらくがき"
            lead="「なぜか気になる」——それが一番の条件です。"
            tint="mint"
            icon={<IconSpark className="h-5 w-5" />}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border-2 border-emerald-200/70 bg-white/90 p-5 sm:p-6">
                <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-emerald-800 sm:text-lg">
                  <span className="rakugaki-icon-badge">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  こんな絵、大歓迎
                </h3>
                <div className="rakugaki-tag-cloud">
                  {OK_EXAMPLES.map((item, index) => (
                    <span key={item} className="rakugaki-tag">
                      <OkExampleIcon index={index} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border-2 border-rose-200/60 bg-rose-50/30 p-5 sm:p-6">
                <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-rose-800 sm:text-lg">
                  <span className="rakugaki-icon-badge rakugaki-icon-badge--ng">
                    <IconCross className="h-3.5 w-3.5" />
                  </span>
                  応募できないもの
                </h3>
                <ul className="space-y-2">
                  {NG_EXAMPLES.map((item) => (
                    <li
                      key={item.text}
                      className={`rakugaki-ng-tag ${item.highlight ? 'rakugaki-ng-tag--warn' : 'rakugaki-ng-tag--plain'}`}
                    >
                      <IconCross className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose-400" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionCard>

          {/* 途中CTA */}
          <section className="rakugaki-card border border-orange-100/80 bg-gradient-to-r from-orange-50/90 to-amber-50/90 p-6 text-center sm:p-10">
            <p className="mb-5 text-sm font-medium leading-relaxed text-slate-700 sm:text-base">
              思い当たるらくがき、ノートの端の絵、ありませんか？
              <br className="hidden sm:inline" />
              上手い絵でなくて大丈夫。なぜか気になる絵を、ぜひ送ってください。
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <ApplyCta />
              <SecondaryCta />
            </div>
          </section>

          {/* 採用謝礼 */}
          <section
            id="reward"
            className="rakugaki-section-band--cream scroll-mt-24 border border-amber-100/60 p-6 sm:p-10 lg:p-12"
          >
            <h2 className="rakugaki-section-title mb-2 flex justify-center text-center text-lg font-bold text-slate-800 sm:text-xl">
              <span className="rakugaki-section-icon">
                <IconGift className="h-5 w-5" />
              </span>
              <span className="rakugaki-section-title-text">採用謝礼</span>
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-center text-sm leading-relaxed text-slate-600 sm:text-base">
              採用された方には、謝礼として Amazonギフト券をメールでお送りします。
            </p>
            <div className="rakugaki-gift-card mx-auto max-w-md">
              <p className="mb-1 pt-2 text-xs font-bold tracking-wider text-slate-500">採用謝礼</p>
              <p className="text-2xl font-black text-orange-600 sm:text-3xl">
                Amazonギフト券 {rewardLabel}円分
              </p>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">
                謝礼は一回限りです。販売数や売上に応じた追加報酬はありません。
              </p>
              <p className="mt-3 text-xs text-slate-500">
                金額は運用状況により変更される場合があります。最新の金額は本ページをご確認ください。
              </p>
            </div>
          </section>

          {/* 販売場所と掲載期間 */}
          <SectionCard id="sales" title="販売場所と掲載期間" tint="sky" icon={<IconShop className="h-5 w-5" />}>
            <SalesFlowDiagram />
            <div className="space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
              <p>
                採用作品は、まず Amazon Merch On Demand で販売します。
                Amazonの掲載枠には限りがあるため、一定期間販売実績がない作品や、掲載枠の整理が必要な作品は、
                当社が指定するその他の販売場所へ移行する場合があります。
              </p>
              <p>
                販売場所、販売期間、販売価格、商品種類は運営側で決定します。
                採用が Amazon での販売開始を保証するものではありません。
              </p>
              <div className="rakugaki-notice-card">
                <p className="font-bold text-amber-950">保護者の方へ</p>
                <p className="mt-1 font-semibold text-amber-900">採用＝Amazonで永久販売ではありません。</p>
                <p className="mt-2 text-sm text-amber-900/90">
                  掲載期間の終了後、当社が指定する別の販売先へ移行する場合があります。
                </p>
              </div>
            </div>
          </SectionCard>

          {/* 応募前の確認 */}
          <SectionCard id="before-apply" title="応募前の確認" icon={<IconCheck className="h-5 w-5" />}>
            <ul className="space-y-3">
              {CHECKLIST.map((item) => {
                const isGuardian = item.includes('保護者が応募');
                return (
                  <li
                    key={item}
                    className={`rakugaki-check-item bg-slate-50/70 text-sm text-slate-700 sm:text-base ${isGuardian ? 'rakugaki-check-item--highlight' : ''}`}
                  >
                    <span className="rakugaki-check-icon">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
            <p className="mt-6 rounded-2xl bg-slate-50 px-4 py-4 text-xs leading-relaxed text-slate-500 sm:text-sm">
              詳細な条件・権利関係については、
              <a
                href={RAKUGAKI_T.termsUrl}
                className="font-medium text-slate-700 underline decoration-slate-400 underline-offset-2 hover:text-slate-900"
              >
                らくがきT 利用規約
              </a>
              もあわせてご確認ください。
            </p>
          </SectionCard>

          {/* よくある質問 */}
          <SectionCard id="faq" title="よくある質問" tint="blush" icon={<IconNote className="h-5 w-5" />}>
            <FaqList items={FAQ} />
          </SectionCard>

          <p className="rakugaki-pre-cta mx-auto max-w-lg text-center text-sm leading-relaxed text-slate-600 sm:text-base">
            写真で撮った画像でも大丈夫です。まずは1枚、送ってみてください。
          </p>

          {/* 最終CTA */}
          <section id="apply" className="rakugaki-final-cta rakugaki-notebook scroll-mt-24 sm:p-12">
            <IconDoodleStar className="rakugaki-final-cta-deco left-4 top-4 h-6 w-6 text-amber-300" />
            <IconDoodleCircle className="rakugaki-final-cta-deco bottom-6 right-6 h-5 w-5 text-sky-300" />
            <h2 className="relative mb-4 text-xl font-bold text-slate-800 sm:text-2xl">
              そのらくがき、送ってみませんか。
            </h2>
            <p className="relative mx-auto mb-8 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
              上手い絵である必要はありません。左胸に小さく置いたときに、なぜか気になる。そんならくがきを募集しています。
            </p>
            <ApplyCta className="relative mx-auto min-w-[240px]" />
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
