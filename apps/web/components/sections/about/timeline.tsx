import { getSiteSettings } from "@rovqix/shared/lib/api/settings";
import { SectionHeading } from "@rovqix/shared/components/shared/section-heading";
import { Reveal } from "@rovqix/shared/components/shared/reveal";

export async function Timeline() {
  const settings = await getSiteSettings();

  return (
    <section className="relative mx-auto max-w-4xl px-6 py-20 sm:px-8">
      <SectionHeading
        eyebrow="Our Story"
        title="From first client to platform-scale builds."
        gradientWord="platform-scale builds."
      />

      <div className="relative mt-16">
        <div className="absolute top-0 bottom-0 left-[7px] w-px bg-gradient-to-b from-brand-blue via-brand-violet to-brand-cyan sm:left-1/2 sm:-translate-x-1/2" />
        <div className="flex flex-col gap-10">
          {settings.timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.year}
                className={`relative flex items-start gap-6 sm:items-center sm:gap-0 ${
                  isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className={`hidden flex-1 sm:block ${isEven ? "pr-12 text-right" : "pl-12 text-left"}`}>
                  <Reveal>
                    <TimelineContent item={item} />
                  </Reveal>
                </div>
                <span className="relative z-10 mt-1.5 size-3.5 shrink-0 rounded-full bg-brand-blue ring-4 ring-background sm:mx-6" />
                <div className="flex-1 sm:hidden">
                  <Reveal>
                    <TimelineContent item={item} />
                  </Reveal>
                </div>
                <div className="hidden flex-1 sm:block" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TimelineContent({
  item,
}: {
  item: { year: string; title: string; description: string };
}) {
  return (
    <div>
      <span className="font-heading text-xs font-medium text-brand-blue">{item.year}</span>
      <h3 className="font-heading mt-1 text-lg font-medium">{item.title}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{item.description}</p>
    </div>
  );
}
