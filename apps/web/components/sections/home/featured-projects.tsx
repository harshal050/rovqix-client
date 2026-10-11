import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { getFeaturedProjects } from "@/lib/api/projects";
import { SectionHeading } from "@rovqix/shared/components/shared/section-heading";
import { ProjectCard } from "@/components/sections/portfolio/project-card";
import { Reveal } from "@rovqix/shared/components/shared/reveal";
import { Button } from "@rovqix/shared/components/ui/button";

export async function FeaturedProjects() {
  const projects = await getFeaturedProjects(6);

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28 sm:px-8">
      <SectionHeading
        eyebrow="Selected Work"
        title="Products we're proud to have shipped."
        gradientWord="proud to have shipped."
        description="A glimpse of the platforms, storefronts, and startups ROVQIX has helped bring to life."
        align="left"
      />

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 2) * 0.1}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-14 flex justify-center">
        <Button
          render={<Link href="/portfolio" />}
          nativeButton={false}
          variant="outline"
          size="lg"
          className="rounded-full px-6"
        >
          View Full Portfolio
          <ArrowUpRight data-icon="inline-end" />
        </Button>
      </Reveal>
    </section>
  );
}
