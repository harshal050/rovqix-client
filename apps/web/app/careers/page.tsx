import type { Metadata } from "next";
import { getCareers } from "@/lib/api/careers";
import { PageHero } from "@rovqix/shared/components/shared/page-hero";
import { JobList } from "@/components/sections/careers/job-list";
import { ApplyForm } from "@/components/sections/careers/apply-form";
import { EyebrowBadge } from "@rovqix/shared/components/shared/eyebrow-badge";
import { Reveal } from "@rovqix/shared/components/shared/reveal";
import { JsonLd } from "@rovqix/shared/components/shared/json-ld";
import { jobPostingJsonLd, withBaseKeywords } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const jobs = await getCareers();
  return {
    title: "Careers",
    description:
      "Join ROVQIX — we're hiring designers and engineers to build premium websites, SaaS platforms, and AI products for ambitious teams.",
    keywords: withBaseKeywords(
      "ROVQIX careers",
      "web developer jobs",
      "remote design jobs",
      ...jobs.map((job) => job.title)
    ),
  };
}

export default async function CareersPage() {
  const jobs = await getCareers();

  return (
    <>
      {jobs.map((job) => (
        <JsonLd key={job._id} data={jobPostingJsonLd(job)} />
      ))}
      <PageHero
        eyebrow="Careers"
        title="Build the internet's best-looking software with us."
        description="We're a small, senior team obsessed with craft. If that sounds like you, we'd love to hear from you."
      />
      <section className="relative mx-auto max-w-5xl px-6 pb-16 sm:px-8">
        <Reveal>
          <EyebrowBadge>Open Roles</EyebrowBadge>
        </Reveal>
        <div className="mt-6">
          <JobList jobs={jobs} />
        </div>
      </section>
      <section className="relative mx-auto max-w-3xl px-6 pb-28 sm:px-8">
        <Reveal>
          <EyebrowBadge>Apply</EyebrowBadge>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-heading mt-6 mb-8 text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            Send us your{" "}
            <span className="text-gradient-brand">application.</span>
          </h2>
        </Reveal>
        <ApplyForm jobs={jobs} />
      </section>
    </>
  );
}
