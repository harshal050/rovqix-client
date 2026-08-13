import type { Metadata } from "next";
import { notFound } from "next/navigation";

import type { LandingGroup } from "@/lib/content/landing/types";
import { getLandingPage, getLandingPagesByGroup } from "@/lib/content/landing";
import { LandingLayout } from "@/components/sections/landing/landing-layout";
import { landingMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

/**
 * Every landing group's [slug] route is identical apart from the group it
 * scopes to, so the route files just spread the result of this factory.
 * Keeps 4 route segments (and any future ones) on one implementation.
 */
export function createLandingRoute(group: LandingGroup) {
  async function resolve(params: Params["params"]) {
    const { slug } = await params;
    const page = getLandingPage(slug);
    // Guard the group too, so /hire/website-development 404s instead of
    // serving the same page under two URLs.
    if (!page || page.group !== group) return null;
    return page;
  }

  return {
    generateStaticParams: async () =>
      getLandingPagesByGroup(group).map((page) => ({ slug: page.slug })),

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
