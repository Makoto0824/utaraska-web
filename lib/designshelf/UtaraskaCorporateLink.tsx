import { UTARASKA_CORPORATE_URL } from '@/lib/designshelf/siteUrls';

export function UtaraskaCorporateLink({
  className = '',
  children = 'ウタラスカ合同会社',
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a href={UTARASKA_CORPORATE_URL} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
