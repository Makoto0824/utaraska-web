import Image from 'next/image';
import Link from 'next/link';
import { RAKUGAKI_T } from '@/lib/designshelf/rakugakiT';

const PRIVACY_POLICY_URL = '#';

const KEY_POINTS = [
  '採用されても、Amazonでの永久掲載や継続販売を保証するものではありません。',
  '採用謝礼は一回限りです。売上報告や追加報酬はありません。',
  '未成年の作品は、保護者の方が応募してください。',
  'AI生成画像は応募できません。',
  '応募作品は、応募者本人または保護者が権利を持つ手描きのオリジナル作品に限ります。',
] as const;

const TOC = [
  { id: 'section-1', label: '1. らくがきTについて' },
  { id: 'section-2', label: '2. 応募できる作品' },
  { id: 'section-3', label: '3. 未成年の作品について' },
  { id: 'section-4', label: '4. 応募できない作品' },
  { id: 'section-5', label: '5. 採用・不採用について' },
  { id: 'section-6', label: '6. 作品の加工・編集について' },
  { id: 'section-7', label: '7. 著作権と利用許諾について' },
  { id: 'section-8', label: '8. 商品化と販売場所について' },
  { id: 'section-9', label: '9. 採用謝礼について' },
  { id: 'section-10', label: '10. 販売停止・掲載終了について' },
  { id: 'section-11', label: '11. 応募者の責任' },
  { id: 'section-12', label: '12. 個人情報の扱い' },
  { id: 'section-13', label: '13. 規約の変更' },
  { id: 'section-14', label: '14. お問い合わせ' },
] as const;

function TermsSection({
  id,
  title,
  children,
  highlight = false,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <section
      id={id}
      className={`rakugaki-terms-section scroll-mt-24 ${highlight ? 'rakugaki-terms-section--highlight' : ''}`}
    >
      <h2 className="rakugaki-terms-heading">{title}</h2>
      <div className="rakugaki-terms-body">{children}</div>
    </section>
  );
}

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
              className="h-auto w-[100px] sm:w-[120px]"
            />
          </Link>
          <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm sm:gap-6">
            <Link href="/designshelf/jp/rakugaki" className="text-gray-600 hover:text-gray-900">
              らくがきT
            </Link>
            <Link href="/designshelf/jp/contact" className="text-gray-600 hover:text-gray-900">
              お問い合わせ
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-16 bg-gray-800 py-10 text-white">
      <div className="mx-auto max-w-3xl px-4 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} ウタラスカ合同会社</p>
        <p className="mt-2">
          <Link href="/designshelf/jp/rakugaki" className="underline underline-offset-2 hover:text-white">
            らくがきT
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default function RakugakiTermsPage() {
  const rewardLabel = RAKUGAKI_T.adoptionRewardYen.toLocaleString('ja-JP');

  return (
    <div className="rakugaki-page min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
        <article className="rakugaki-card rakugaki-notebook p-6 sm:p-10">
          <p className="rakugaki-badge mb-6">らくがきT</p>
          <h1 className="mb-4 text-2xl font-bold text-slate-800 sm:text-3xl">らくがきT応募規約</h1>
          <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
            このページでは、「らくがきT」に応募する前に確認していただきたい内容をまとめています。
            応募される方は、内容をご確認のうえ、同意してから作品をお送りください。
            未成年の方の作品は、保護者の方が応募してください。
          </p>

          <div className="rakugaki-notice-card mb-8">
            <p className="text-sm leading-relaxed text-amber-950 sm:text-base">
              この規約は、らくがきT企画への応募に関するものです。
              応募された時点で、本規約に同意したものとみなします。
            </p>
          </div>

          <div className="rakugaki-terms-keypoints mb-8">
            <h2 className="mb-3 text-sm font-bold text-slate-700">応募前に特に確認したいこと</h2>
            <ul className="space-y-2">
              {KEY_POINTS.map((point) => (
                <li key={point} className="flex gap-2 text-sm leading-relaxed text-slate-700">
                  <span className="rakugaki-terms-bullet" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <nav className="rakugaki-terms-toc mb-10" aria-label="目次">
            <h2 className="mb-3 text-sm font-bold text-slate-700">目次</h2>
            <ol className="space-y-1.5">
              {TOC.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="rakugaki-terms-toc-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-10">
            <TermsSection id="section-1" title="1. らくがきTについて">
              <p>
                らくがきTは、子どもの絵や手描きのらくがきなどを募集し、採用作品をDesign ShelfのTシャツとして商品化する投稿企画です。
                採用作品は、ウタラスカ合同会社がTシャツ用に加工・編集し、Amazon Merch On Demand、UP-T /
                BASE、その他当社が指定する販売場所で販売する場合があります。
              </p>
            </TermsSection>

            <TermsSection id="section-2" title="2. 応募できる作品">
              <p>
                応募できる作品は、応募者本人または保護者が権利を持つ、手描きのオリジナル作品に限ります。
                子どもの絵、大人が描いたらくがき、手描き文字、ゆるいキャラクター、動物、顔、意味はわからないけれど気になる絵などを歓迎します。
              </p>
            </TermsSection>

            <TermsSection id="section-3" title="3. 未成年の作品について" highlight>
              <p>
                未成年の方の作品は、必ず保護者の方が応募してください。
                保護者の方は、作品の応募、採用時の商品化、謝礼の受け取り、販売場所や販売期間の決定について同意したうえで応募してください。
              </p>
            </TermsSection>

            <TermsSection id="section-4" title="4. 応募できない作品" highlight>
              <p className="mb-3">以下の作品は応募できません。</p>
              <ul className="rakugaki-terms-list">
                <li>アニメ、漫画、ゲームなどの二次創作</li>
                <li>有名キャラクターに似ている作品</li>
                <li>ブランドロゴ、企業ロゴ、商品ロゴ</li>
                <li>芸能人、有名人、実在人物の似顔絵</li>
                <li>他人が描いた作品</li>
                <li>AI生成画像</li>
                <li>写真をそのまま使用したもの</li>
                <li>差別的、攻撃的、性的、暴力的な表現を含むもの</li>
                <li>公序良俗に反するもの</li>
                <li>その他、当社が不適切と判断したもの</li>
              </ul>
              <p className="mt-4 text-sm text-slate-600">
                応募後または採用後であっても、上記に該当すると当社が判断した場合、採用取消、販売停止、掲載終了を行う場合があります。
              </p>
            </TermsSection>

            <TermsSection id="section-5" title="5. 採用・不採用について">
              <p>
                応募いただいたすべての作品が採用されるわけではありません。
                当社が、Tシャツ化に向いているか、権利上の問題がないか、企画の雰囲気に合っているかを確認し、採用作品を決定します。
                不採用理由について、個別に回答できない場合があります。
              </p>
            </TermsSection>

            <TermsSection id="section-6" title="6. 作品の加工・編集について">
              <p>
                採用作品は、Tシャツとして販売しやすいように、当社が加工・編集する場合があります。
                線の調整、色の調整、余白の調整、配置変更、不要部分の削除、データ形式の変更などを行うことがあります。
                ただし、元のらくがきらしさをできるだけ残す方針で制作します。
              </p>
            </TermsSection>

            <TermsSection id="section-7" title="7. 著作権と利用許諾について">
              <p className="mb-3">
                応募作品の著作権は、原則として応募者または権利者に残ります。
                ただし、応募者は、応募作品および当社が加工・編集したデザインについて、当社が以下の目的で利用することを、無償かつ期間の定めなく許諾するものとします。
              </p>
              <ul className="rakugaki-terms-list">
                <li>Tシャツその他の商品への使用</li>
                <li>Amazon Merch On Demand、UP-T / BASE、その他販売サイトでの販売</li>
                <li>Design Shelfおよび当社サイトへの掲載</li>
                <li>SNS、広告、告知、実績紹介での使用</li>
                <li>商品画像、販売ページ、バナー、サムネイル等への使用</li>
                <li>企画の運営に必要な範囲での加工、編集、複製、公開</li>
              </ul>
              <p className="mt-4 text-sm text-slate-600">
                この利用許諾は、当社が独占的に権利を取得するものではありません。
                応募者自身が、元の作品を個人的に使用することは妨げません。
                ただし、当社が商品化したデザインと同一または極めて近い形で、第三者に販売・提供する場合は、事前にご相談ください。
              </p>
            </TermsSection>

            <TermsSection id="section-8" title="8. 商品化と販売場所について" highlight>
              <p className="mb-4">
                採用作品は、まずAmazon Merch On Demandで販売する場合があります。
                ただし、Amazonの掲載枠や販売状況により、一定期間後にUP-T /
                BASE、その他の販売場所へ移行する場合があります。
                販売場所、販売期間、販売価格、商品種類、掲載終了の判断は、当社が決定します。
              </p>
              <p className="rakugaki-terms-emphasis">
                採用された場合でも、Amazonでの永久掲載や継続販売を保証するものではありません。
              </p>
            </TermsSection>

            <TermsSection id="section-9" title="9. 採用謝礼について" highlight>
              <p>
                採用作品には、当社が定める採用謝礼をお送りします。
                現在の採用謝礼は、Amazonギフト券{rewardLabel}円分を予定しています。
                採用謝礼は一回限りです。販売数や売上に応じた追加報酬、継続的なロイヤリティ、売上報告はありません。
              </p>
              <p className="mt-4 text-sm text-slate-600">
                謝礼内容や金額は、今後変更される場合があります。
                変更がある場合は、応募ページまたは本ページでお知らせします。
              </p>
            </TermsSection>

            <TermsSection id="section-10" title="10. 販売停止・掲載終了について">
              <p className="mb-3">当社は、以下の場合、採用作品の商品化、販売、掲載を停止または終了できるものとします。</p>
              <ul className="rakugaki-terms-list">
                <li>権利侵害のおそれがある場合</li>
                <li>第三者から申し立てがあった場合</li>
                <li>応募内容に虚偽があると判断した場合</li>
                <li>販売場所の規約に反する可能性がある場合</li>
                <li>販売実績や掲載枠の都合により、掲載継続が難しい場合</li>
                <li>その他、当社が運営上必要と判断した場合</li>
              </ul>
            </TermsSection>

            <TermsSection id="section-11" title="11. 応募者の責任">
              <p>
                応募者は、応募作品が第三者の権利を侵害していないことを保証するものとします。
                応募作品に関して第三者との間で問題が生じた場合、応募者は誠実に対応するものとします。
                当社に損害が発生した場合、応募者に対応をお願いする場合があります。
              </p>
            </TermsSection>

            <TermsSection id="section-12" title="12. 個人情報の扱い">
              <p>
                応募時にいただいた氏名、メールアドレス、応募内容、作品画像などの情報は、らくがきT企画の運営、審査、採用連絡、謝礼送付、問い合わせ対応のために使用します。
                個人情報の詳しい取り扱いについては、当社の
                <a href={PRIVACY_POLICY_URL} className="rakugaki-terms-link">
                  プライバシーポリシー
                </a>
                をご確認ください。
              </p>
            </TermsSection>

            <TermsSection id="section-13" title="13. 規約の変更">
              <p>
                当社は、必要に応じて本規約を変更する場合があります。
                変更後の内容は、本ページに掲載した時点で有効になります。
                応募前には、最新の内容をご確認ください。
              </p>
            </TermsSection>

            <TermsSection id="section-14" title="14. お問い合わせ">
              <p>
                本企画や応募規約に関するお問い合わせは、Design Shelfまたはウタラスカ合同会社の
                <Link href="/designshelf/jp/contact" className="rakugaki-terms-link">
                  お問い合わせ窓口
                </Link>
                よりご連絡ください。
              </p>
            </TermsSection>
          </div>

          <footer className="rakugaki-terms-footer mt-12 border-t border-dashed border-amber-200/60 pt-8">
            <p className="text-sm text-slate-600">制定日：2026年5月24日</p>
            <p className="mt-1 text-sm text-slate-600">運営：ウタラスカ合同会社</p>
            <div className="mt-8 text-center">
              <Link href="/designshelf/jp/rakugaki" className="rakugaki-cta-secondary inline-flex">
                規約に同意して応募ページへ戻る
              </Link>
            </div>
          </footer>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
