/** ヒーロー背景の手描き風装飾（装飾のみ・aria-hidden） */
export function HeroDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <svg className="absolute left-[4%] top-[8%] h-10 w-10 opacity-[0.22]" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="4 3" />
      </svg>
      <svg className="absolute right-[6%] top-[12%] h-8 w-8 opacity-20" viewBox="0 0 32 32" fill="#fcd34d">
        <path d="M16 2l2.5 9.5H28l-7.5 5.5 3 9.5L16 21l-7.5 5.5 3-9.5L4 11.5h9.5z" />
      </svg>
      <svg className="absolute bottom-[18%] left-[8%] h-6 w-14 opacity-[0.18]" viewBox="0 0 56 24">
        <path
          d="M2 14 Q14 4 28 12 T54 10"
          stroke="#fb923c"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <svg className="absolute bottom-[22%] right-[10%] h-12 w-12 opacity-[0.15]" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6 4" />
      </svg>
      <svg className="absolute right-[18%] top-[42%] h-5 w-5 opacity-25" viewBox="0 0 20 20" fill="#f9a8d4">
        <circle cx="10" cy="10" r="8" />
      </svg>
      <svg className="absolute left-[12%] top-[38%] h-7 w-7 opacity-20" viewBox="0 0 28 28" fill="none">
        <path d="M4 20 L14 4 L24 20 Z" stroke="#a78bfa" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
