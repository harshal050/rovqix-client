import type { LandingGroup, LandingPage } from "./types";
import { getGroup } from "./groups";

import { servicePages } from "./services";
import { servicePagesExtra } from "./services-extra";
import { hirePages } from "./hire";
import { hirePagesExtra } from "./hire-extra";
import { locationPages } from "./locations";
import { locationPagesExtra } from "./locations-extra";
import { industryPages } from "./industries";
import { industryPagesExtra } from "./industries-extra";
import { costPages } from "./cost";
import { comparePages } from "./compare";
import { locationPagesUs } from "./locations-us";
import { industryPagesUs } from "./industries-us";
import { servicePagesUs } from "./services-us";
import { localPersonalCarePages } from "./local-personal-care";
import { localTradesPages } from "./local-trades";
import { localFoodRetailPages } from "./local-food-retail";
import { localServicesPages } from "./local-services";
import { localBridgePages } from "./local-bridge";
import { localOfferPages } from "./local-offers";
import { localHomeTradesPages } from "./local-home-trades";
import { localRetailMiscPages } from "./local-retail-misc";
import { localSpecialistPages } from "./local-specialist";
import { localRepairAutoPages } from "./local-repair-auto";
import { localFoodLeisurePages } from "./local-food-leisure";
import { localHomeFitnessPages } from "./local-home-fitness";
import { localFinalPages } from "./local-final";

export const landingPages: LandingPage[] = [
  ...servicePages,
  ...servicePagesExtra,
  ...hirePages,
  ...hirePagesExtra,
  ...locationPages,
  ...locationPagesExtra,
  ...industryPages,
  ...industryPagesExtra,
  ...costPages,
  ...comparePages,
  ...locationPagesUs,
  ...industryPagesUs,
  ...servicePagesUs,
  ...localPersonalCarePages,
  ...localTradesPages,
  ...localFoodRetailPages,
  ...localServicesPages,
  ...localBridgePages,
  ...localOfferPages,
  ...localHomeTradesPages,
  ...localRetailMiscPages,
  ...localSpecialistPages,
  ...localRepairAutoPages,
  ...localFoodLeisurePages,
  ...localHomeFitnessPages,
  ...localFinalPages,
];

const bySlug = new Map(landingPages.map((page) => [page.slug, page]));

export function getLandingPage(slug: string): LandingPage | undefined {
  return bySlug.get(slug);
}

export function getLandingPagesByGroup(group: LandingGroup): LandingPage[] {
  return landingPages.filter((page) => page.group === group);
}

/**
 * Path for a landing page, derived from its group — or its absolute URL when
 * it lives on an area subdomain.
 */
export function landingPath(page: LandingPage): string {
  if (page.url) return page.url;
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
