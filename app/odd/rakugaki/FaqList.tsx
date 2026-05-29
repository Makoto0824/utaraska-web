type FaqItem = { q: string; a: string };

export function FaqList({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="space-y-0">
      {items.map((item) => (
        <details key={item.q} className="rakugaki-faq rakugaki-faq-card group">
          <summary className="text-sm sm:text-base">
            <span className="rakugaki-faq-q-label">Q</span>
            {item.q}
          </summary>
          <p className="rakugaki-faq-answer text-sm sm:text-base">
            <span className="rakugaki-faq-q-label">A</span>
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
