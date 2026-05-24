/** ヒーロー内のシール風ラベル（CSS・SVGのみ） */

export function HeroStickers() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-visible" aria-hidden>
      <span className="rakugaki-label rakugaki-label--sky -left-1 top-[8%] rotate-[-6deg] sm:left-0">
        スマホで撮った絵でもOK
      </span>
      <span className="rakugaki-label rakugaki-label--lemon right-0 top-[4%] rotate-[5deg] sm:-right-2">
        上手じゃなくてOK
      </span>
      <svg className="rakugaki-hero-doodle absolute -left-3 bottom-[18%] h-6 w-6 text-amber-300/60" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2 L14 9 H22 L16 13 L18 21 L12 17 L6 21 L8 13 L2 9 H10 Z" />
      </svg>
      <svg className="rakugaki-hero-doodle absolute -right-2 bottom-[22%] h-5 w-5 text-sky-300/70" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" />
      </svg>
      <svg className="rakugaki-hero-doodle absolute right-[15%] top-[2%] h-8 w-14 text-rose-300/50" viewBox="0 0 56 16" fill="none">
        <path d="M2 10 Q18 4 34 10 T54 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}
