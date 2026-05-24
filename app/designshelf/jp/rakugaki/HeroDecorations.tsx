import Image from 'next/image';
import { RAKUGAKI_T } from '@/lib/designshelf/rakugakiT';

/** ヒーロー背景に散らす手描き装飾（deco + doodle を統合） */
function getHeroBackgroundImages() {
  const seen = new Set<string>();
  const images: string[] = [];
  for (const src of [...RAKUGAKI_T.heroDecorationImages, ...RAKUGAKI_T.doodleStickerImages]) {
    if (!seen.has(src)) {
      seen.add(src);
      images.push(src);
    }
  }
  return images;
}

/** 大小まちまちに散らす（index は getHeroBackgroundImages の並び） */
const HERO_BG_LAYOUT = [
  // 太陽 — 左上
  {
    className:
      'absolute -left-4 top-0 h-20 w-20 rotate-[14deg] opacity-[0.3] sm:-left-2 sm:top-[3%] sm:h-28 sm:w-28 lg:left-[1%] lg:top-[5%]',
  },
  // 家 — カルーセル側（左のテキスト・CTAを避ける）
  {
    className:
      'absolute right-[4%] top-[38%] h-12 w-14 -rotate-[5deg] opacity-[0.26] sm:right-[5%] sm:top-[36%] sm:h-16 sm:w-20 lg:right-0 lg:top-[50%] lg:h-20 lg:w-24',
  },
  // 星 — 右上寄り（角から離す）
  {
    className:
      'absolute right-[11%] top-[15%] h-12 w-12 rotate-[9deg] opacity-[0.31] sm:right-[14%] sm:top-[17%] sm:h-16 sm:w-16 lg:right-[6%] lg:top-[10%]',
  },
  // 波線
  {
    className:
      'absolute bottom-[18%] right-[1%] h-9 w-28 rotate-[4deg] opacity-[0.24] sm:bottom-[20%] sm:h-11 sm:w-36 lg:right-[2%] lg:bottom-[16%]',
  },
  // 丸 — 中央やや左
  {
    className:
      'absolute left-[28%] top-[62%] h-9 w-9 opacity-[0.22] sm:left-[32%] sm:top-[58%] sm:h-10 sm:w-10 lg:left-[24%] lg:top-[54%]',
  },
  // 三角 — 中央やや右
  {
    className:
      'absolute right-[22%] top-[66%] h-8 w-8 rotate-[7deg] opacity-[0.2] sm:right-[26%] sm:top-[62%] sm:h-9 sm:w-9 lg:right-[20%] lg:top-[58%]',
  },
  // 猫 — カルーセル方向へやや寄せる（左〜中央寄り）
  {
    className:
      'absolute left-[6%] top-[20%] h-14 w-14 -rotate-[11deg] opacity-[0.3] sm:left-[9%] sm:top-[22%] sm:h-16 sm:w-16 lg:left-[20%] lg:top-[34%] lg:h-20 lg:w-20',
  },
  // 虹 — 右下寄り（星・猫と被らない）
  {
    className:
      'absolute right-[4%] bottom-[34%] h-14 w-14 rotate-[6deg] opacity-[0.28] sm:right-[6%] sm:bottom-[32%] sm:h-[4.5rem] sm:w-[4.5rem] lg:right-[9%] lg:bottom-[28%]',
  },
  // 色鉛筆
  {
    className:
      'absolute bottom-[7%] right-[22%] h-10 w-10 -rotate-[8deg] opacity-[0.25] sm:bottom-[8%] sm:right-[24%] sm:h-12 sm:w-12 lg:right-[28%]',
  },
  // 雲 — 上中央（2カラムの間）
  {
    className:
      'absolute left-[52%] top-[2%] h-12 w-12 -rotate-[7deg] opacity-[0.27] sm:left-[48%] sm:top-[4%] sm:h-16 sm:w-16 lg:left-[54%] lg:top-[6%]',
  },
] as const;

export function HeroDecorations() {
  const images = getHeroBackgroundImages();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-8 top-8 h-32 w-32 rounded-full bg-yellow-200/20 blur-2xl" />
      <div className="absolute -right-6 bottom-12 h-40 w-40 rounded-full bg-sky-200/25 blur-2xl" />
      <div className="absolute right-1/4 top-1/3 h-24 w-24 rounded-full bg-pink-200/20 blur-xl" />

      {images.map((src, index) => (
        <div key={src} className={HERO_BG_LAYOUT[index]?.className ?? 'absolute opacity-25'}>
          <Image
            src={src}
            alt=""
            width={160}
            height={160}
            className="h-full w-full object-contain"
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}
