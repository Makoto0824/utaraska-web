/** らくがきT LP 用インラインSVG（絵文字不使用） */

type IconProps = { className?: string };

export function IconPhone({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}

export function IconSearch({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M15 15 L20 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconPen({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 20 L16 8 L18 10 L6 22 Z" fill="currentColor" opacity="0.25" />
      <path d="M4 20 L16 8 L18 10 L6 22 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M16 8 L19 5 L21 7 L18 10" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function IconTshirt({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 5 L10 3 H14 L16 5 L20 4 V8 L18 9 V20 H6 V9 L4 8 V4 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 1.5" />
    </svg>
  );
}

export function IconShop({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 9 H20 L18 20 H6 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8 9 V6 Q12 3 16 6 V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconCheck({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 8.5 L6.5 12 L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCross({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M4 4 L12 12 M12 4 L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconSpark({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M10 2 V18 M2 10 H18 M5 5 L15 15 M15 5 L5 15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <circle cx="10" cy="10" r="2.5" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

export function IconNote({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M4 3 H14 L16 5 V17 H4 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M14 3 V5 H16" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 9 H13 M7 12 H11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconGift({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="10" width="16" height="10" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 10 V20 M4 10 H20" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 10 Q8 10 7 7 Q6 4 9 4 Q12 4 12 10 Q12 4 15 4 Q18 4 17 7 Q16 10 12 10" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconArrowRight({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 12" fill="none" aria-hidden>
      <path d="M2 6 H20 M14 2 L20 6 L14 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 3" />
    </svg>
  );
}

export function IconDoodleStar({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M8 1 L9.5 5.5 H14 L10.5 8.5 L12 13 L8 10 L4 13 L5.5 8.5 L2 5.5 H6.5 Z" opacity="0.7" />
    </svg>
  );
}

export function IconDoodleCircle({ className = 'h-3 w-3' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="none" aria-hidden>
      <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
    </svg>
  );
}

const OK_ICON_CYCLE = [IconSpark, IconNote, IconPen, IconTshirt] as const;

export function OkExampleIcon({ index }: { index: number }) {
  const Icon = OK_ICON_CYCLE[index % OK_ICON_CYCLE.length];
  return <Icon className="h-4 w-4 shrink-0 text-emerald-500" />;
}

export const STEP_ICONS = [IconPhone, IconSearch, IconPen, IconTshirt, IconShop] as const;
