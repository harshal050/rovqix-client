import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { AuroraBackground } from "@rovqix/shared/components/shared/aurora-background";
import { Reveal } from "@rovqix/shared/components/shared/reveal";
import { Button } from "@rovqix/shared/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <AuroraBackground />
      <div className="bg-grid bg-radial-fade pointer-events-none absolute inset-0 -z-10 opacity-50" />
      <Reveal>
        <p className="font-heading text-gradient-brand text-8xl font-semibold sm:text-9xl">404</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="font-heading mt-4 text-2xl font-medium sm:text-3xl">
          This page doesn&apos;t exist.
        </h1>
      </Reveal>
      <Reveal delay={0.18}>
        <p className="mt-3 max-w-sm text-muted-foreground">
          The page you&apos;re looking for may have been moved or never existed.
        </p>
      </Reveal>
      <Reveal delay={0.26} className="mt-8">
        <Button render={<Link href="/" />} nativeButton={false} size="lg" className="rounded-full px-6">
          <ArrowLeft data-icon="inline-start" className="size-4" />
          Back to Home
        </Button>
      </Reveal>
    </section>
  );
}
