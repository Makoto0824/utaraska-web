import Image from 'next/image';
import Link from 'next/link';
import { RAKUGAKI_T } from '@/lib/designshelf/rakugakiT';
import {
  ODD_BASE_STORE_URL,
  ODD_JP_URLS,
  UTARASKA_ABOUT_URL,
} from '@/lib/designshelf/siteUrls';
import { UtaraskaCorporateLink } from '@/lib/designshelf/UtaraskaCorporateLink';
import { COMPANY_INFO } from '@/lib/utaraska/homeData';

const ODD_LINKS = [
  { label: 'utaraska odd トップ', href: '/odd', external: false },
  { label: 'らくがきT', href: '/odd/rakugaki', external: false },
  { label: 'お問い合わせ', href: '/odd/contact', external: false },
  { label: 'プライバシーポリシー', href: ODD_JP_URLS.privacyPolicy, external: false },
  { label: 'らくがきT 応募規約', href: RAKUGAKI_T.termsUrl, external: false },
  { label: 'BASEストア', href: ODD_BASE_STORE_URL, external: true },
] as const;

const LINE_USES = [
  '新作・再販・販売開始のお知らせ',
  'AmazonやBASEの商品ページのご案内',
  'らくがきTなどの投稿企画に関するお知らせ',
  '応募内容や採用作品に関する確認',
  'キャンペーンや限定案内',
  'その他、utaraska oddに関するお知らせ',
] as const;

function OddSiteHeader() {
  return (
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
            <Link href="/odd/about" className="font-medium text-gray-900">
              運営情報
            </Link>
            <Link href="/odd/en" className="text-gray-600 transition-colors hover:text-gray-900">
              EN Store
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

function OddSiteFooter() {
  return (
    <footer className="mt-16 bg-gray-800 py-12 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-bold">
              <UtaraskaCorporateLink className="transition-colors hover:text-gray-200" />
            </h3>
            <p className="mb-2 text-gray-300">
              〒150-0043
              <br />
              東京都渋谷区道玄坂1丁目10番8号渋谷道玄坂東急ビル2F−C
            </p>
            <p className="text-gray-300">{COMPANY_INFO.email}</p>
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
                <Link href={UTARASKA_ABOUT_URL} className="text-gray-300 transition-colors hover:text-white">
                  ウタラスカ合同会社について
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
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="mb-2 text-gray-400">
            &copy; {new Date().getFullYear()}{' '}
            <UtaraskaCorporateLink className="transition-colors hover:text-gray-300">
              ウタラスカ合同会社
            </UtaraskaCorporateLink>
            . All rights reserved.
          </p>
          <p className="mx-auto max-w-4xl text-xs text-gray-500">
            一部の着用画像はAIで生成・編集しており、色味や細部が実物と異なる場合があります。ご購入前はAmazonの商品説明等をご確認ください。
          </p>
        </div>
      </div>
    </footer>
  );
}

function AboutSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
      <h2 className="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-bold text-gray-800 sm:text-2xl">
        {title}
      </h2>
      <div className="space-y-4 text-sm leading-relaxed text-gray-600 sm:text-base">{children}</div>
    </section>
  );
}

export default function OddAboutPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <OddSiteHeader />

      <main className="mx-auto max-w-4xl px-4 py-8">
        <div className="rounded-lg bg-white p-6 shadow-lg sm:p-8">
          <h1 className="mb-4 text-center text-3xl font-bold text-gray-800 sm:text-4xl">運営情報</h1>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed text-gray-600 sm:text-base">
            utaraska oddは、ウタラスカ合同会社が運営する、少し変でちょうどいいグッズや企画を届けるプロジェクトです。
            このページでは、運営者情報、各種ポリシー、LINE公式アカウントの運用についてご案内します。
          </p>

          <div className="space-y-10">
            <AboutSection id="about-odd" title="utaraska oddについて">
              <p>
                utaraska oddは、「ちょっと変で、ちょうどいい。」をコンセプトに、Tシャツやグッズ、投稿企画などを展開しています。
                Amazon、BASE、公式サイトを通じて、味のある絵やユニークなデザインを届けています。
              </p>
            </AboutSection>

            <AboutSection id="operator" title="運営者情報">
              <p>
                utaraska oddは、ウタラスカ合同会社が運営しています。
                運営会社の詳細は、ウタラスカ合同会社の会社情報ページをご確認ください。
              </p>
              <dl className="mt-4 grid gap-4 rounded-lg bg-gray-50 p-5 sm:grid-cols-2">
                <div>
                  <dt className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    運営会社
                  </dt>
                  <dd className="text-gray-800">{COMPANY_INFO.name}</dd>
                </div>
                <div>
                  <dt className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    会社情報
                  </dt>
                  <dd>
                    <Link href={UTARASKA_ABOUT_URL} className="font-medium text-blue-700 hover:text-blue-900">
                      ウタラスカ合同会社について
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    所在地
                  </dt>
                  <dd className="whitespace-pre-line text-gray-800">{COMPANY_INFO.address}</dd>
                </div>
                <div>
                  <dt className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    お問い合わせ先
                  </dt>
                  <dd>
                    <Link href="/odd/contact" className="font-medium text-blue-700 hover:text-blue-900">
                      お問い合わせページ
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    utaraska odd
                  </dt>
                  <dd>
                    <Link href="/odd" className="font-medium text-blue-700 hover:text-blue-900">
                      https://www.utaraska.co.jp/odd
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    BASEストア
                  </dt>
                  <dd>
                    <a
                      href={ODD_BASE_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue-700 hover:text-blue-900"
                    >
                      {ODD_BASE_STORE_URL}
                    </a>
                  </dd>
                </div>
              </dl>
            </AboutSection>

            <AboutSection id="links" title="各種リンク">
              <ul className="grid gap-3 sm:grid-cols-2">
                {ODD_LINKS.map((item) => (
                  <li key={item.href}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-800 transition-colors hover:border-gray-300 hover:bg-white sm:text-base"
                      >
                        <span>{item.label}</span>
                        <span aria-hidden className="text-gray-400">
                          ↗
                        </span>
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-800 transition-colors hover:border-gray-300 hover:bg-white sm:text-base"
                      >
                        <span>{item.label}</span>
                        <span aria-hidden className="text-gray-400">
                          →
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <p className="rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-600">
                特定商取引法に基づく表記は、BASEストア内の表記をご確認ください。
              </p>
            </AboutSection>

            <AboutSection id="line" title="LINE公式アカウントの運用について">
              <p>
                utaraska oddでは、LINE公式アカウントを通じて、新作情報、販売ページのご案内、投稿企画のお知らせ、応募内容に関する確認、採用作品に関するご連絡などを行う場合があります。
              </p>
              <div>
                <h3 className="mb-2 text-sm font-semibold text-gray-800 sm:text-base">
                  LINE公式アカウントで配信する内容
                </h3>
                <ul className="list-disc space-y-1 pl-5">
                  {LINE_USES.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </AboutSection>

            <AboutSection id="line-data" title="LINEで取得・利用する情報について">
              <p>
                LINE公式アカウントでは、LINE上の表示名、メッセージ内容、応募フォームで入力された情報との照合に必要な情報を確認する場合があります。
                これらの情報は、応募内容の確認、お問い合わせ対応、採用連絡、販売開始のお知らせ、企画運営、サービス改善のために使用します。
              </p>
              <p>
                個人情報の取り扱いについては、
                <Link href={ODD_JP_URLS.privacyPolicy} className="font-medium text-blue-700 hover:text-blue-900">
                  プライバシーポリシー
                </Link>
                をご確認ください。
              </p>
            </AboutSection>

            <AboutSection id="line-block" title="ブロック・配信停止について">
              <p>
                LINE公式アカウントからの配信が不要になった場合は、いつでもLINEアプリ上でブロックできます。
                ブロックした場合、採用連絡、販売開始のお知らせ、応募内容に関する確認などが届かない場合があります。
              </p>
            </AboutSection>

            <AboutSection id="contact" title="お問い合わせ">
              <p>
                utaraska odd、商品、投稿企画、LINE公式アカウントの運用に関するお問い合わせは、以下よりご連絡ください。
              </p>
              <Link
                href="/odd/contact"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-800 transition-colors hover:border-gray-400 sm:text-base"
              >
                お問い合わせページへ
              </Link>
            </AboutSection>
          </div>
        </div>
      </main>

      <OddSiteFooter />
    </div>
  );
}
