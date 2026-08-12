import Link from "next/link";

import type { Author } from "@/lib/content/types";

/** E-E-A-T block: a real, named author with stated expertise and a profile link. */
export function AuthorCard({ author }: { author: Author }) {
  return (
    <section
      aria-label="About the author"
      className="gradient-border glass-panel flex flex-col gap-5 rounded-3xl p-6 sm:flex-row sm:p-8"
    >
      <div
        aria-hidden
        className="font-heading flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue/25 to-purple-500/25 text-lg font-medium text-foreground"
      >
        {author.initials}
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-heading text-base font-medium tracking-tight">{author.name}</p>
        <p className="text-xs tracking-wide text-brand-blue uppercase">{author.role}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{author.bio}</p>
        <ul className="mt-1 flex flex-wrap gap-2">
          {author.expertise.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-2 flex flex-wrap gap-4 text-sm">
          <Link href="/about" className="text-foreground underline-offset-4 hover:underline">
            About ROVQIX
          </Link>
          <Link href="/contact" className="text-foreground underline-offset-4 hover:underline">
            Contact the team
          </Link>
        </div>
      </div>
    </section>
  );
}
