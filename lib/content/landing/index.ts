import type { LandingGroup, LandingPage } from "@/lib/content/landing/types";
import { getGroup } from "@/lib/content/landing/groups";

import { servicePages } from "@/lib/content/landing/services";
import { hirePages } from "@/lib/content/landing/hire";
import { locationPages } from "@/lib/content/landing/locations";
import { industryPages } from "@/lib/content/landing/industries";

export const landingPages: LandingPage[] = [
  ...servicePages,
  ...hirePages,
  ...locationPages,
  ...industryPages,
];

const bySlug = new Map(landingPages.map((page) => [page.slug, page]));

export function getLandingPage(slug: string): LandingPage | undefined {
  return bySlug.get(slug);
}

export function getLandingPagesByGroup(group: LandingGroup): LandingPage[] {
  return landingPages.filter((page) => page.group === group);
}

/** Full URL path for a landing page, derived from its group. */
export function landingPath(page: LandingPage): string {
  return `/${getGroup(page.group).segment}/${page.slug}`;
}

export function landingPathBySlug(slug: string): string | undefined {
  const page = bySlug.get(slug);
  return page ? landingPath(page) : undefined;
}

/**
 * Explicit `related` first, then same-group neighbours — so every page always
 * links onward even if the data omits related slugs.
 */
export function getRelatedLandingPages(page: LandingPage, limit = 3): LandingPage[] {
  const picked: LandingPage[] = [];
  const seen = new Set([page.slug]);

  for (const slug of page.related ?? []) {
    const match = bySlug.get(slug);
    if (match && !seen.has(match.slug)) {
      picked.push(match);
      seen.add(match.slug);
    }
  }

  for (const candidate of getLandingPagesByGroup(page.group)) {
    if (picked.length >= limit) break;
    if (seen.has(candidate.slug)) continue;
    picked.push(candidate);
    seen.add(candidate.slug);
  }

  return picked.slice(0, limit);
}

export function getLandingLastUpdated(page: LandingPage): string {
  return page.updatedAt ?? page.publishedAt;
}
