import type { Metadata } from "next";
import { notFound } from "next/navigation";

import type { LandingGroup, LandingPage } from "@/lib/content/landing/types";
import { getLandingPage, getLandingPagesByGroup } from "@/lib/content/landing";
import { LandingLayout } from "@/components/sections/landing/landing-layout";
import { landingMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

type RouteOptions = {
  /**
   * Which pages to prerender at build time. Everything else in the group still
   * works — it renders on first request and is then cached (dynamicParams is
   * left at its default of true).
   *
   * Use this for very large groups. Prerendering every page writes ~470KB of
   * html + rsc + meta per page to the build output, which exhausts the disk on
   * a Vercel build container somewhere north of ~25,000 pages.
   *
   * Omit it to prerender the whole group, which is right for small groups.
   */
  prerender?: (pages: LandingPage[]) => LandingPage[];
};

/**
 * Every landing group's [slug] route is identical apart from the group it
 * scopes to, so the route files just spread the result of this factory.
 */
export function createLandingRoute(group: LandingGroup, options: RouteOptions = {}) {
  async function resolve(params: Params["params"]) {
    const { slug } = await params;
    const page = getLandingPage(slug);
    // Guard the group too, so /hire/website-development 404s instead of
    // serving the same page under two URLs.
    if (!page || page.group !== group) return null;
    return page;
  }

  return {
    generateStaticParams: async () => {
      const pages = getLandingPagesByGroup(group);
      const selected = options.prerender ? options.prerender(pages) : pages;
      return selected.map((page) => ({ slug: page.slug }));
    },

    generateMetadata: async ({ params }: Params): Promise<Metadata> => {
      const page = await resolve(params);
      return page ? landingMetadata(page) : {};
    },

    Page: async ({ params }: Params) => {
      const page = await resolve(params);
      if (!page) notFound();
      return <LandingLayout page={page} />;
    },
  };
}
