"use client";

import { useEffect, useState } from "react";
import { cn } from "@rovqix/shared/lib/utils";

export type TocItem = { id: string; label: string; children?: { id: string; label: string }[] };

/**
 * Sticky table of contents with scroll spy. The links are real anchors
 * rendered server-side; the JS only adds the active highlight.
 */
export function TableOfContents({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const ids = items.flatMap((item) => [item.id, ...(item.children ?? []).map((c) => c.id)]);
    const headings = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Table of contents" className="flex flex-col gap-3">
      <p className="font-heading text-xs font-medium tracking-widest text-muted-foreground uppercase">
        On this page
      </p>
      <ol className="flex flex-col gap-1 border-l border-border">
        {items.map((item) => (
          <li key={item.id} className="flex flex-col">
            <TocLink id={item.id} label={item.label} active={active === item.id} />
            {item.children?.map((child) => (
              <TocLink
                key={child.id}
                id={child.id}
                label={child.label}
                active={active === child.id}
                nested
              />
            ))}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function TocLink({
  id,
  label,
  active,
  nested,
}: {
  id: string;
  label: string;
  active: boolean;
  nested?: boolean;
}) {
  return (
    <a
      href={`#${id}`}
      className={cn(
        "-ml-px border-l py-1.5 text-sm leading-snug transition-colors",
        nested ? "pl-7 text-[0.8rem]" : "pl-4",
        active
          ? "border-brand-blue text-foreground"
          : "border-transparent text-muted-foreground hover:text-foreground"
      )}
    >
      {label}
    </a>
  );
}
