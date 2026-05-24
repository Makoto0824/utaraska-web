'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { RAKUGAKI_T } from '@/lib/designshelf/rakugakiT';

const ALT_TEXTS = [
  '胸元に落書きを配置したTシャツの着用イメージ（1）',
  '胸元に落書きを配置したTシャツの着用イメージ（2）',
] as const;

export function HeroTshirtCarousel() {
  const images = RAKUGAKI_T.heroTshirtImages;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[300px]">
      <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border-2 border-dashed border-amber-200/80 bg-white p-3 shadow-md ring-4 ring-amber-50 sm:p-4">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-3 transition-opacity duration-500 sm:inset-4 ${
              index === current ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            <Image
              src={src}
              alt={ALT_TEXTS[index] ?? ALT_TEXTS[0]}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 72vw, 300px"
              priority={index === 0}
              unoptimized
            />
          </div>
        ))}

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-1 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-base text-orange-600 shadow-md ring-1 ring-orange-100 transition-colors hover:bg-orange-50"
              aria-label="前の画像"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
              className="absolute right-1 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-base text-orange-600 shadow-md ring-1 ring-orange-100 transition-colors hover:bg-orange-50"
              aria-label="次の画像"
            >
              ›
            </button>
            <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
              {images.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setCurrent(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    index === current ? 'bg-orange-500' : 'bg-orange-200 hover:bg-orange-300'
                  }`}
                  aria-label={`画像 ${index + 1} を表示`}
                  aria-current={index === current ? 'true' : undefined}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <p className="mt-3 text-center text-xs leading-relaxed text-slate-500">
        ※イメージ画像です。実際の商品は採用作品に合わせ、胸元の配置やTシャツの色味が異なる場合があります。
      </p>
    </div>
  );
}
