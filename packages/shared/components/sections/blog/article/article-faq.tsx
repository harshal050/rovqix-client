import { Plus } from "lucide-react";

import type { ArticleFaq } from "../../../../lib/content/types";
import { headingId } from "../../../../lib/content/format";

/**
 * Native <details> accordion: answers are present in the HTML whether or not
 * the item is open, so search engines and AI answer engines can extract them
 * without JavaScript.
 */
export function ArticleFaqSection({ faqs }: { faqs: ArticleFaq[] }) {
  if (faqs.length === 0) return null;

  return (
    <section aria-labelledby="faq" className="flex flex-col gap-6">
      <h2
        id="faq"
        className="font-heading scroll-mt-28 text-2xl font-medium tracking-tight sm:text-3xl"
      >
        Frequently asked questions
      </h2>
      <div className="flex flex-col gap-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            id={headingId(faq.question)}
            className="group gradient-border glass-panel scroll-mt-28 rounded-2xl px-5 py-4 sm:px-6"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
              <h3 className="font-heading text-base font-medium tracking-tight text-foreground">
                {faq.question}
              </h3>
              <Plus
                aria-hidden
                className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-45"
              />
            </summary>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
