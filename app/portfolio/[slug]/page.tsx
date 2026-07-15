import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";

import { getProjects, getProjectBySlug } from "@/lib/api/projects";
import { BrowserMockup } from "@/components/shared/browser-mockup";
import { AuroraBackground } from "@/components/shared/aurora-background";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cta } from "@/components/sections/home/cta";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbJsonLd, withBaseKeywords } from "@/lib/seo";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
    keywords: withBaseKeywords(project.category, project.name, ...project.tags, ...project.services),
    openGraph: {
      title: project.name,
      description: project.description,
      images: project.image ? [project.image] : undefined,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
          { name: project.name, path: `/portfolio/${project.slug}` },
        ])}
      />
      <section className="relative overflow-hidden px-6 pt-40 pb-16 sm:px-8 sm:pt-48">
        <AuroraBackground />
        <div className="bg-grid bg-radial-fade pointer-events-none absolute inset-0 -z-10 opacity-50" />
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3.5" />
              Back to portfolio
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-sm font-medium text-brand-blue">{project.category}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="font-heading mt-2 text-4xl font-medium tracking-tight text-balance sm:text-5xl md:text-6xl">
              {project.name}
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{project.summary}</p>
          </Reveal>
          {project.liveUrl && (
            <Reveal delay={0.2}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                Visit live site
                <ExternalLink className="size-3.5" />
              </a>
            </Reveal>
          )}
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-6 border-t border-border pt-6 text-sm">
              <div>
                <p className="text-muted-foreground">Client</p>
                <p className="mt-1 font-medium">{project.client}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Year</p>
                <p className="mt-1 font-medium">{project.year}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Services</p>
                <p className="mt-1 font-medium">{project.services.join(", ")}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 sm:px-8">
        <Reveal>
          <BrowserMockup className="shadow-2xl">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(min-width: 1024px) 960px, 100vw"
                className="object-cover"
                preload
              />
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`} />
            )}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_55%)]" />
            {!project.image && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-heading text-4xl font-semibold text-white/90 drop-shadow-sm sm:text-5xl">
                  {project.name}
                </span>
              </div>
            )}
          </BrowserMockup>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="rounded-full">
              {tag}
            </Badge>
          ))}
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 border-t border-border pt-12 sm:grid-cols-3">
          {project.results.map((result, index) => (
            <Reveal key={result.label} delay={index * 0.08}>
              <p className="text-gradient-brand font-heading text-4xl font-semibold">
                {result.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{result.label}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16 flex justify-center pb-16">
          <Button render={<Link href="/portfolio" />} nativeButton={false} variant="outline" size="lg" className="rounded-full px-6">
            View More Work
            <ArrowUpRight data-icon="inline-end" />
          </Button>
        </Reveal>
      </section>

      <Cta />
    </>
  );
}
