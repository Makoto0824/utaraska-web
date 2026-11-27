import type { MetadataRoute } from 'next';

const origin = 'https://www.utaraska.co.jp';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '/',
    '/about',
    '/games',
    '/odd',
    '/odd/basketball-t-shirts',
    '/odd/about',
    '/odd/calavera-kanji',
    '/odd/contact',
    '/odd/picks',
    '/odd/rakugaki',
    '/odd/en',
  ].map((path) => ({ url: new URL(path, origin).href }));
}
