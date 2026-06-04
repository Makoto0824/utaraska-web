import Image from 'next/image';
import Link from 'next/link';
import { UtaraskaCorporateLink } from '@/lib/designshelf/UtaraskaCorporateLink';
import '../rakugaki/rakugaki.css';

const KEY_POINTS = [
  '氏名やメールアドレスなどの個人情報は、記載した目的の範囲で利用します。',
  'らくがきTへの応募情報は、企画の運営・審査・連絡・謝礼送付のために使用します。',
  '採用作品については、応募時の公開用ニックネームをサイト・SNS等で表示する場合があります。',
  '応募フォームなど、外部サービスを利用する場合があります。',
  'ご本人からのお問い合わせに応じて、開示・訂正・削除等に対応します。',
  '未成年の方の情報は、保護者の方が応募・問い合わせを行う前提で取り扱います。',
] as const;

const TOC = [
  { id: 'section-1', label: '1. このポリシーについて' },
  { id: 'section-2', label: '2. 運営者' },
  { id: 'section-3', label: '3. 取得する個人情報' },
  { id: 'section-4', label: '4. 利用目的' },
  { id: 'section-5', label: '5. らくがきT応募時の取り扱い' },
  { id: 'section-6', label: '6. お問い合わせ時の取り扱い' },
  { id: 'section-7', label: '7. 第三者提供・外部サービス' },
  { id: 'section-8', label: '8. Cookie・アクセス解析' },
  { id: 'section-9', label: '9. 保管期間' },
  { id: 'section-10', label: '10. 安全管理' },
  { id: 'section-11', label: '11. 開示・訂正・削除等' },
  { id: 'section-12', label: '12. 未成年の個人情報' },
  { id: 'section-13', label: '13. ポリシーの変更' },
  { id: 'section-14', label: '14. お問い合わせ' },
] as const;

function PolicySection({
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
          <Link href="/odd" className="flex items-center">
            <Image
              src="/designshelf/images/logo.png"
              alt="utaraska odd"
              width={120}
              height={60}
              className="h-auto w-[100px] sm:w-[120px]"
            />
          </Link>
          <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 sm:gap-6">
            <Link href="/odd" className="text-gray-600 hover:text-gray-900">
              ホーム
            </Link>
            <Link href="/odd/picks" className="text-gray-600 hover:text-gray-900">
              Amazonおすすめ
            </Link>
            <Link href="/odd/rakugaki" className="text-gray-600 hover:text-gray-900">
              らくがきT
            </Link>
            <Link href="/odd/contact" className="text-gray-600 hover:text-gray-900">
              お問い合わせ
            </Link>
            <Link href="/odd/about" className="text-gray-600 hover:text-gray-900">
              運営情報
            </Link>
            <Link href="/odd/en" className="text-gray-600 hover:text-gray-900">
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
    <footer className="mt-16 bg-gray-800 py-10 text-white">
      <div className="mx-auto max-w-3xl px-4 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} <UtaraskaCorporateLink className="underline underline-offset-2 hover:text-white">ウタラスカ合同会社</UtaraskaCorporateLink></p>
        <p className="mt-2">
          <Link href="/odd" className="underline underline-offset-2 hover:text-white">
            utaraska odd
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="rakugaki-page min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
        <article className="rakugaki-card rakugaki-notebook p-6 sm:p-10">
          <p className="rakugaki-badge mb-6">utaraska odd</p>
          <h1 className="mb-4 text-2xl font-bold text-slate-800 sm:text-3xl">プライバシーポリシー</h1>
          <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
            このページでは、utaraska odd（以下「当サイト」）および「らくがきT」企画において、
            ウタラスカ合同会社（以下「当社」）が個人情報をどのように取り扱うかをまとめています。
            当サイトの利用、らくがきTへの応募、お問い合わせの前に、内容をご確認ください。
          </p>

          <div className="rakugaki-notice-card mb-8">
            <p className="text-sm leading-relaxed text-amber-950 sm:text-base">
              当社は、個人情報を適切に管理し、利用目的の範囲内で取り扱います。
              内容にご不明点がある場合は、お問い合わせ窓口よりご連絡ください。
            </p>
          </div>

          <div className="rakugaki-terms-keypoints mb-8">
            <h2 className="mb-3 text-sm font-bold text-slate-700">知っておいていただきたいこと</h2>
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
            <PolicySection id="section-1" title="1. このポリシーについて">
              <p>
                本ポリシーは、当サイトの閲覧、らくがきTへの応募、お問い合わせなど、
                当社が個人情報を取得する場面に適用されます。
                本ポリシーに定めのない事項については、関連する法令およびガイドラインに従い、適切に取り扱います。
              </p>
            </PolicySection>

            <PolicySection id="section-2" title="2. 運営者">
              <p>
                当サイトおよびらくがきT企画の運営者は、ウタラスカ合同会社です。
                所在地、事業内容などの詳細は
                <Link href="/odd/about" className="rakugaki-terms-link">
                  運営情報
                </Link>
                をご確認ください。
              </p>
            </PolicySection>

            <PolicySection id="section-3" title="3. 取得する個人情報">
              <p className="mb-3">当社が取得する個人情報には、次のようなものがあります。</p>
              <ul className="rakugaki-terms-list">
                <li>氏名、公開用ニックネーム（採用作品の紹介・クレジット表示用。本名ではなく、公開してよい名前をご記入ください）</li>
                <li>メールアドレス</li>
                <li>お問い合わせ内容</li>
                <li>らくがきTへの応募内容（作品画像、コメント、年齢に関する情報など）</li>
                <li>採用連絡や謝礼送付に必要な情報</li>
                <li>Cookie等を通じて取得されるアクセス情報（IPアドレス、閲覧ページ、端末情報など）</li>
              </ul>
              <p className="mt-4 text-sm text-slate-600">
                応募フォームやお問い合わせの際に、上記以外の情報をお尋ねする場合があります。
                その場合は、入力画面または本ポリシーでお知らせします。
              </p>
            </PolicySection>

            <PolicySection id="section-4" title="4. 利用目的">
              <p className="mb-3">取得した個人情報は、次の目的で利用します。</p>
              <ul className="rakugaki-terms-list">
                <li>当サイトの提供、表示、改善</li>
                <li>らくがきT企画の運営、審査、採用連絡、謝礼送付</li>
                <li>採用作品の紹介、商品ページ・SNS等での公開用ニックネームの表示</li>
                <li>お問い合わせへの対応</li>
                <li>不正利用の防止、トラブル対応</li>
                <li>アクセス状況の分析、サイト改善</li>
                <li>法令に基づく対応</li>
              </ul>
            </PolicySection>

            <PolicySection id="section-5" title="5. らくがきT応募時の取り扱い" highlight>
              <p className="mb-3">
                らくがきTへの応募では、Googleフォーム等の外部フォームを利用する場合があります。
                応募時にお預かりする情報は、主に次の目的で利用します。
              </p>
              <ul className="rakugaki-terms-list">
                <li>応募内容の確認、審査</li>
                <li>採用の連絡、確認事項のやり取り</li>
                <li>採用謝礼（Amazonギフト券等）の送付</li>
                <li>応募に関する問い合わせ対応</li>
                <li>企画運営上必要な記録の保管</li>
                <li>採用作品の紹介、商品ページ・SNS・当サイト等での公開用ニックネームの表示</li>
              </ul>
              <p className="mt-4 text-sm text-slate-600">
                公開用ニックネームは、採用作品を紹介する際に作者名として表示する目的で利用します。
                本名の記載はお願いしておりません。
              </p>
              <p className="mt-4">
                応募作品の著作権や利用許諾については、
                <Link href="/odd/rakugaki/terms" className="rakugaki-terms-link">
                  らくがきT応募規約
                </Link>
                をご確認ください。
              </p>
              <p className="mt-4 text-sm text-slate-600">
                原則として、不採用作品について個別連絡を行わない場合があります。
                採用の連絡が届かない場合は、不採用とご理解ください。
              </p>
            </PolicySection>

            <PolicySection id="section-6" title="6. お問い合わせ時の取り扱い">
              <p>
                お問い合わせの際にお預かりした氏名、メールアドレス、問い合わせ内容は、
                回答、確認、記録保管、同様の問い合わせへの対応のために利用します。
              </p>
            </PolicySection>

            <PolicySection id="section-7" title="7. 第三者提供・外部サービス">
              <p className="mb-3">
                当社は、次の場合を除き、本人の同意なく個人情報を第三者に提供しません。
              </p>
              <ul className="rakugaki-terms-list">
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために必要がある場合</li>
                <li>国の機関等への協力が必要な場合</li>
              </ul>
              <p className="mb-3 mt-4">当社は、業務の遂行にあたり、次のような外部サービスを利用する場合があります。</p>
              <ul className="rakugaki-terms-list">
                <li>Googleフォーム（応募フォーム）</li>
                <li>Google Analytics（アクセス解析）</li>
                <li>ホスティング、メール送信等のインフラサービス</li>
                <li>謝礼送付に関するサービス</li>
              </ul>
              <p className="mt-4 text-sm text-slate-600">
                これらのサービス提供者においても、各社のプライバシーポリシーに基づき情報が取り扱われる場合があります。
              </p>
            </PolicySection>

            <PolicySection id="section-8" title="8. Cookie・アクセス解析">
              <p>
                当サイトでは、サイトの利用状況を把握し、改善するために Google Analytics を利用しています。
                Cookie 等を通じて、アクセス情報が Google 社に送信される場合があります。
                ブラウザの設定により Cookie を無効にすることもできますが、一部機能に影響する場合があります。
              </p>
            </PolicySection>

            <PolicySection id="section-9" title="9. 保管期間">
              <p>
                個人情報は、利用目的の達成に必要な期間保管します。
                らくがきTの応募情報は、企画運営、採用記録、問い合わせ対応のために必要な期間保管した後、
                当社の判断または法令に従い、削除または匿名化します。
                具体的な保管期間は、情報の種類や利用目的により異なります。
              </p>
            </PolicySection>

            <PolicySection id="section-10" title="10. 安全管理">
              <p>
                当社は、個人情報への不正アクセス、漏えい、改ざん、滅失等を防止するため、
                必要かつ適切な安全管理措置を講じます。
                外部サービスを利用する場合も、利用目的の範囲内で適切に管理します。
              </p>
            </PolicySection>

            <PolicySection id="section-11" title="11. 開示・訂正・削除等">
              <p>
                ご本人から、当社が保有する個人情報の開示、訂正、追加、削除、利用停止等を求められた場合、
                本人確認のうえ、法令に従い合理的な範囲で対応します。
                ご希望がある場合は、
                <Link href="/odd/contact" className="rakugaki-terms-link">
                  お問い合わせ窓口
                </Link>
                よりご連絡ください。
              </p>
            </PolicySection>

            <PolicySection id="section-12" title="12. 未成年の個人情報" highlight>
              <p>
                らくがきTでは、未成年の方の作品について、保護者の方が応募することを前提としています。
                保護者の方は、応募にあたり、本人および未成年の個人情報が本ポリシーおよび
                <Link href="/odd/rakugaki/terms" className="rakugaki-terms-link">
                  応募規約
                </Link>
                に基づいて取り扱われることに同意したうえで、応募してください。
              </p>
            </PolicySection>

            <PolicySection id="section-13" title="13. ポリシーの変更">
              <p>
                当社は、必要に応じて本ポリシーを変更する場合があります。
                変更後の内容は、本ページに掲載した時点で有効になります。
                重要な変更がある場合は、当サイト上でお知らせする場合があります。
              </p>
            </PolicySection>

            <PolicySection id="section-14" title="14. お問い合わせ">
              <p>
                本ポリシーに関するお問い合わせは、
                <Link href="/odd/contact" className="rakugaki-terms-link">
                  お問い合わせ窓口
                </Link>
                よりご連絡ください。
              </p>
            </PolicySection>
          </div>

          <footer className="rakugaki-terms-footer mt-12 border-t border-dashed border-amber-200/60 pt-8">
            <p className="text-sm text-slate-600">制定日：2026年5月24日</p>
            <p className="mt-1 text-sm text-slate-600">運営：ウタラスカ合同会社</p>
            <div className="mt-8 text-center">
              <Link href="/odd" className="rakugaki-cta-secondary inline-flex">
                utaraska odd トップへ戻る
              </Link>
            </div>
          </footer>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
