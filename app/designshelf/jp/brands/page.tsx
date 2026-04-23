import { redirect } from 'next/navigation';

/** ブランド別ページは廃止。JPストアトップへ */
export default function BrandsIndexPage() {
  redirect('/designshelf/jp');
}
