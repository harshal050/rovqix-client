import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { getServices } from "@/lib/api/services";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { Reveal } from "@/components/shared/reveal";

export async function ServiceDetailList() {
  const services = await getServices();

  return (
    <section className="relative mx-auto max-w-5xl px-6 py-8 sm:px-8">
      <div className="flex flex-col divide-y divide-border">
        {services.map((service, index) => (
          <div key={service.id} id={service.id} className="scroll-mt-28 py-10">
            <Reveal delay={(index % 4) * 0.05}>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-5">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue/15 to-brand-violet/15 text-brand-blue">
                    <DynamicIcon name={service.icon} className="size-5" />
                  </span>
                  <div>
                    <h2 className="font-heading text-xl font-medium sm:text-2xl">
                      {service.title}
                    </h2>
                    <p className="mt-2 max-w-xl text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="group inline-flex shrink-0 items-center gap-1 self-start text-sm font-medium text-foreground/80 transition-colors hover:text-brand-blue sm:self-center"
                >
                  Get a quote
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
