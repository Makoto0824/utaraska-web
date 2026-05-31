import Link from 'next/link';
import { UTARASKA_ABOUT_URL } from '@/lib/designshelf/siteUrls';

export function UtaraskaCorporateLink({
  className = '',
  children = 'ウタラスカ合同会社',
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link href={UTARASKA_ABOUT_URL} className={className}>
      {children}
    </Link>
  );
}
