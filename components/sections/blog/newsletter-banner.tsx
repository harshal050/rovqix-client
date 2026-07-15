import { Reveal } from "@/components/shared/reveal";
import { NewsletterForm } from "@/components/layout/newsletter-form";

export function NewsletterBanner() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-28 sm:px-8">
      <Reveal>
        <div className="gradient-border glass-panel flex flex-col items-start justify-between gap-6 rounded-3xl p-8 sm:flex-row sm:items-center sm:p-10">
          <div className="max-w-md">
            <h3 className="font-heading text-2xl font-medium tracking-tight">
              Product &amp; design notes, occasionally.
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              No spam. Just the occasional case study and craft breakdown.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </Reveal>
    </section>
  );
}
