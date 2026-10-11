import { PageHero } from "./page-hero";
import { Reveal } from "./reveal";

export function LegalPage({
  eyebrow,
  title,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={`Last updated ${updated}`} />
      <section className="relative mx-auto max-w-3xl px-6 pb-28 sm:px-8">
        <div className="flex flex-col gap-10">
          {sections.map((section) => (
            <Reveal key={section.heading}>
              <h2 className="font-heading text-xl font-medium">{section.heading}</h2>
              <div className="mt-3 flex flex-col gap-3">
                {section.body.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
