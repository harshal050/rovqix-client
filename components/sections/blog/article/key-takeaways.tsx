import { Check } from "lucide-react";

/** Scannable summary near the top — the block AI answer engines quote most. */
export function KeyTakeaways({ items }: { items: string[] }) {
  if (items.length === 0) return null;

  return (
    <section
      aria-labelledby="key-takeaways"
      className="gradient-border glass-panel rounded-3xl p-6 sm:p-7"
    >
      <h2
        id="key-takeaways"
        className="font-heading text-xs font-medium tracking-widest text-muted-foreground uppercase"
      >
        Key takeaways
      </h2>
      <ul className="mt-4 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-foreground/85">
            <Check aria-hidden className="mt-1 size-4 shrink-0 text-brand-blue" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
