type FaqItem = { q: string; a: string };

export function FaqList({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="rakugaki-faq divide-y divide-orange-100/80">
      {items.map((item) => (
        <details key={item.q} className="group py-1">
          <summary className="py-4 pr-2 text-sm font-bold leading-snug text-slate-800 sm:text-base">
            Q. {item.q}
          </summary>
          <p className="pb-4 pl-1 text-sm leading-relaxed text-slate-600 sm:text-base">A. {item.a}</p>
        </details>
      ))}
    </div>
  );
}
