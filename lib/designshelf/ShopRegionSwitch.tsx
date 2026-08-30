import Image from 'next/image';
import Link from 'next/link';

type Region = 'jp' | 'en';

type ShopRegionSwitchProps = {
  current: Region;
  variant?: 'prominent' | 'compact';
  className?: string;
};

const STORES = [
  {
    region: 'jp' as const,
    href: '/odd',
    src: '/designshelf/images/button/shop_jp_button.png',
    altJa: 'Shop Japan（日本ストア）',
    altEn: 'Shop Japan',
  },
  {
    region: 'en' as const,
    href: '/odd/en',
    src: '/designshelf/images/button/shop_usa_button.png',
    altJa: 'Shop USA（米国ストア）',
    altEn: 'Shop USA',
  },
];

export function ShopRegionSwitch({
  current,
  variant = 'prominent',
  className = '',
}: ShopRegionSwitchProps) {
  const imageClass =
    variant === 'prominent' ? 'h-11 w-auto sm:h-14' : 'h-8 w-auto sm:h-9';
  const labelLocale = current === 'jp' ? 'ja' : 'en';

  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 ${className}`}
      role="navigation"
      aria-label={labelLocale === 'ja' ? 'ストア切り替え' : 'Store region switch'}
    >
      {STORES.map((store) => {
        const isCurrent = store.region === current;
        const alt = labelLocale === 'ja' ? store.altJa : store.altEn;
        const image = (
          <Image
            src={store.src}
            alt={alt}
            width={2172}
            height={724}
            className={`${imageClass} rounded-md transition-transform ${
              isCurrent
                ? 'ring-2 ring-gray-900 ring-offset-2'
                : 'opacity-80 hover:scale-105 hover:opacity-100'
            }`}
            unoptimized
          />
        );

        if (isCurrent) {
          return (
            <span key={store.region} className="inline-flex" aria-current="page">
              {image}
            </span>
          );
        }

        return (
          <Link
            key={store.region}
            href={store.href}
            className="inline-flex rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            {image}
          </Link>
        );
      })}
    </div>
  );
}
