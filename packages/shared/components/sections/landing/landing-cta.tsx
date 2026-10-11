import Link from "../../shared/link";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";

import { Reveal } from "../../shared/reveal";
import { Button } from "../../ui/button";
import { siteConfig } from "../../../lib/constants/site";

export function LandingCta({ eyebrow }: { eyebrow: string }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
      <Reveal>
        <div className="gradient-border glass-panel relative overflow-hidden rounded-3xl p-8 sm:p-12">
          <div className="bg-grid bg-radial-fade pointer-events-none absolute inset-0 -z-10 opacity-40" />
          <p className="text-sm font-medium text-brand-blue">{eyebrow}</p>
          <h2 className="font-heading mt-3 max-w-2xl text-2xl font-medium tracking-tight text-balance sm:text-3xl">
            Tell us what you are building. We will tell you what it takes.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            A 30-minute call, then a written proposal with scope, price and timeline within two to three
            working days. No retainer required to get a real number, and no obligation if the answer is
            that we are not the right fit.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              size="lg"
              className="h-11 rounded-full px-5 text-base"
            >
              Book a call
              <ArrowRight aria-hidden data-icon="inline-end" />
            </Button>
            <Button
              render={<a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              variant="outline"
              size="lg"
              className="h-11 rounded-full px-5"
            >
              <MessageSquare aria-hidden data-icon="inline-start" />
              WhatsApp
            </Button>
            <Button
              render={<a href={siteConfig.emailHref} />}
              nativeButton={false}
              variant="ghost"
              size="lg"
              className="h-11 rounded-full px-5"
            >
              <Mail aria-hidden data-icon="inline-start" />
              {siteConfig.email}
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
