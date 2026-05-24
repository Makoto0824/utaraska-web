'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { RAKUGAKI_T } from '@/lib/designshelf/rakugakiT';
import { HeroStickers } from './HeroStickers';

const ALT_TEXTS = [
  '胸元にらくがきを配置したTシャツの着用イメージ（1）',
  '胸元にらくがきを配置したTシャツの着用イメージ（2）',
] as const;

export function HeroTshirtCarousel({ large = false }: { large?: boolean }) {
  const images = RAKUGAKI_T.heroTshirtImages;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const sizeClass = large ? 'max-w-[280px] sm:max-w-[340px]' : 'max-w-[240px] sm:max-w-[280px]';

  return (
    <div className={`relative z-10 mx-auto w-full ${sizeClass}`}>
      <div className="relative">
        <HeroStickers />
        <div className="relative aspect-[3/4]">
        <div className="absolute inset-0 overflow-hidden rounded-2xl bg-white shadow-[0_8px_28px_rgb(15_23_42/0.08)] ring-1 ring-amber-100/70">
          <div className="absolute inset-0 p-4 sm:p-5">
            {images.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-4 transition-opacity duration-500 sm:inset-5 ${
                  index === current ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
              >
                <Image
                  src={src}
                  alt={ALT_TEXTS[index] ?? ALT_TEXTS[0]}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 75vw, 340px"
                  priority={index === 0}
                  unoptimized
                />
              </div>
            ))}
          </div>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-base text-slate-400 shadow-sm ring-1 ring-slate-200/80 transition-colors hover:bg-white hover:text-rose-500"
                aria-label="前の画像"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
                className="absolute right-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-base text-slate-400 shadow-sm ring-1 ring-slate-200/80 transition-colors hover:bg-white hover:text-rose-500"
                aria-label="次の画像"
              >
                ›
              </button>
              <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
                {images.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setCurrent(index)}
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      index === current ? 'bg-rose-400' : 'bg-slate-200 hover:bg-rose-200'
                    }`}
                    aria-label={`画像 ${index + 1} を表示`}
                    aria-current={index === current ? 'true' : undefined}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        </div>
      </div>
      <p className="mt-4 text-center text-xs leading-relaxed text-slate-500 sm:text-sm">
        ※イメージ画像です。実際の商品は採用作品に合わせ、胸元の配置やTシャツの色味が異なる場合があります。
      </p>
    </div>
  );
}
