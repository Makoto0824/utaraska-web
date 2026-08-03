import originalArtItems from './originalArtItems.json';

export type OriginalArtCatalogEntry = {
  id: number;
  title: string;
  folder: string;
  imageExt: 'jpg' | 'png';
  baseItemId: string;
  price: string;
  description: string;
  features: readonly [string, string];
  brand?: string;
};

const SHAREZOH_DESCRIPTION = `原画：キャンバス
・サイズ：20cm×20cm
・素材：木材, コットン`;

const SHAREZOH_FEATURES = [
  'SHAREZOH シリーズの一点もの原画。キャンバスに描かれたオリジナル作品です。',
  '20cm四方のサイズ感で、お部屋に飾りやすい作品です。',
] as const;

const KAO_DESCRIPTION = '手描き原画。落書きの「顔」シリーズ。ハガキサイズ（100×148mm）。';

const KAO_FEATURES = [
  'RAKUGAKI KAO CLUB の手描き原画。落書きの「顔」シリーズです。',
  'ハガキサイズ（100×148mm）の一点もの作品です。',
] as const;

export const ORIGINAL_ART_CATALOG: OriginalArtCatalogEntry[] = originalArtItems.map((item) => ({
  ...item,
  imageExt: item.imageExt as 'jpg' | 'png',
  description: item.brand === 'SHAREZOH' ? SHAREZOH_DESCRIPTION : KAO_DESCRIPTION,
  features: item.brand === 'SHAREZOH' ? SHAREZOH_FEATURES : KAO_FEATURES,
}));

export const ORIGINAL_ART_PRODUCT_IDS = new Set(ORIGINAL_ART_CATALOG.map((entry) => entry.id));

export const ORIGINAL_ART_CATEGORY_URL = 'https://store.utaraska.co.jp/categories/6336616';
