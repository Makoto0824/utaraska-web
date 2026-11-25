import catalogJson from './baseFiguresCatalog.json';

export type BaseFigureCatalogEntry = {
  id: number;
  designKey: string;
  baseItemId: string;
  title: string;
  priceYen: number;
  description: string;
  features: [string, string];
  hasBallChain: boolean;
  imagePending: boolean;
  baseUrlPending: boolean;
  assetFolder?: string;
  photoCount?: number;
  imageFiles?: string[];
  storeUrl?: string;
};

const FIGURE_PLACEHOLDER_IMAGE = '/designshelf/images/toys/placeholder-pending.svg';

export const BASE_FIGURE_CATALOG: BaseFigureCatalogEntry[] = catalogJson as BaseFigureCatalogEntry[];

/** バナー等から別導線のため odd 一覧には出さない BASE 商品 */
const BASE_FIGURE_EXCLUDED_BASE_ITEM_IDS = new Set(['165965919']);

const BASE_FIGURE_LISTING = BASE_FIGURE_CATALOG.filter(
  (e) => !BASE_FIGURE_EXCLUDED_BASE_ITEM_IDS.has(e.baseItemId),
);

function formatYen(yen: number): string {
  return `¥${yen.toLocaleString('ja-JP')}`;
}

export function buildBaseFigureProduct(entry: BaseFigureCatalogEntry) {
  const price = formatYen(entry.priceYen);
  const storeUrl =
    entry.storeUrl ??
    (!entry.baseUrlPending && entry.baseItemId
      ? `https://store.utaraska.co.jp/items/${entry.baseItemId}`
      : '');

  if (!entry.imagePending && entry.assetFolder && entry.imageFiles?.length) {
    const root = `/designshelf/images/toys/${entry.assetFolder}`;
    const files = entry.imageFiles;
    const photoCount = files.length;
    const figureFile = files[0];
    const designFile = photoCount <= 1 ? figureFile : files[photoCount - 1];
    const carouselImages = files.map((f) => `${root}/${f}`);
    return {
      id: entry.id,
      title: entry.title,
      brand: 'utaraska odd',
      image: `${root}/${figureFile}`,
      designImage: `${root}/${designFile}`,
      price,
      amazonLink: storeUrl,
      jpAssets: {
        root,
        design: designFile,
        slots: {
          figure: figureFile,
        },
      },
      carouselImages,
      features: [...entry.features],
      description: entry.description,
      variations: [
        {
          name: 'フィギュア',
          price,
          amazonLink: storeUrl,
        },
      ],
    };
  }

  const image = FIGURE_PLACEHOLDER_IMAGE;
  return {
    id: entry.id,
    title: entry.title,
    brand: 'utaraska odd',
    image,
    designImage: image,
    price,
    amazonLink: storeUrl,
    carouselImages: [image],
    features: [...entry.features],
    description: entry.description,
    variations: [
      {
        name: 'フィギュア',
        price,
        amazonLink: storeUrl,
      },
    ],
    jpAssets: {
      root: '/designshelf/images/toys',
      design: 'placeholder-pending.svg',
      slots: {
        figure: 'placeholder-pending.svg',
      },
    },
  };
}

export const BASE_FIGURE_PRODUCTS = BASE_FIGURE_LISTING.map(buildBaseFigureProduct);

export const BASE_FIGURE_PRODUCT_IDS = new Set(BASE_FIGURE_LISTING.map((e) => e.id));

/** 一覧先頭（CSV / BASE 同期順） */
export const BASE_FIGURE_PIN_ORDER = BASE_FIGURE_LISTING.map((e) => e.id);