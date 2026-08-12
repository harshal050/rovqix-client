import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants/site";

/** End-of-article conversion block, pointed at the cluster's service page. */
export function ArticleCta({ service }: { service: { label: string; href: string } }) {
  return (
    <section className="gradient-border glass-panel relative overflow-hidden rounded-3xl p-8 sm:p-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-16 size-64 rounded-full bg-brand-blue/10 blur-3xl"
      />
      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-lg">
          <h2 className="font-heading text-2xl font-medium tracking-tight text-balance sm:text-3xl">
            Want this built properly, the first time?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {siteConfig.name} designs and builds production web platforms — Next.js front ends,
            Node.js APIs and the infrastructure behind them. Tell us what you&apos;re building and
            we&apos;ll scope it with you.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3">
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            size="lg"
            className="h-11 rounded-full px-5 text-base"
          >
            Start a project
            <ArrowRight aria-hidden data-icon="inline-end" />
          </Button>
          <Button
            render={<Link href={service.href} />}
            nativeButton={false}
            variant="outline"
            size="lg"
            className="h-11 rounded-full px-5 text-sm"
          >
            {service.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
