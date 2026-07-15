import { getFaqs } from "@/lib/api/faq";
import { EyebrowBadge } from "@/components/shared/eyebrow-badge";
import { Reveal } from "@/components/shared/reveal";
import { JsonLd } from "@/components/shared/json-ld";
import { faqPageJsonLd } from "@/lib/seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export async function Faq() {
  const faqs = await getFaqs();

  return (
    <section id="faq" className="relative mx-auto max-w-5xl px-6 py-28 sm:px-8">
      <JsonLd data={faqPageJsonLd(faqs)} />
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <EyebrowBadge>FAQ</EyebrowBadge>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-heading mt-6 text-3xl font-medium tracking-tight text-balance sm:text-4xl">
              Questions,
              <span className="text-gradient-brand"> answered.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 max-w-sm text-muted-foreground">
              Can&apos;t find what you&apos;re looking for? Reach out directly and
              we&apos;ll get back to you within a day.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Accordion className="glass-panel gradient-border rounded-2xl px-6">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="py-5 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
