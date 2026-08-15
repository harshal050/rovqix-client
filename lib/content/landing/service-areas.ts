import type { ArticleSection, LandingPage } from "@/lib/content/landing/types";
import { cities, climateNotes, tierNotes, type City } from "@/lib/content/landing/cities";
import { extendedCities } from "@/lib/content/landing/cities-extended";
import { englishMarkets, internationalCities } from "@/lib/content/landing/cities-international";
import { serviceTypes, type ServiceType } from "@/lib/content/landing/service-area-types";
import { starterPricing, starterProof } from "@/lib/content/landing/local-shared";

/**
 * ============================================================================
 * KILL SWITCH
 * ============================================================================
 * Set to false to remove every service-area page from the site and the sitemap
 * in one deploy. Do this if Search Console shows indexing or quality problems
 * after these pages go live.
 *
 * These pages are generated from a template (40 business types x 25 cities).
 * The content genuinely varies by city climate, metro size, local industries
 * and named neighbourhoods, but they are still programmatically produced and
 * carry more risk than the hand-written pages elsewhere on this site.
 *
 * Monitor after launch:
 *   - Search Console > Pages: watch for "Crawled - currently not indexed"
 *   - Search Console > Performance: watch total impressions across the site
 *   - If impressions on hand-written pages fall, turn this off first.
 * ============================================================================
 */
export const SERVICE_AREA_PAGES_ENABLED = true;

/** Deterministic pick so a given city/service always gets the same variant. */
function pick<T>(items: T[], seed: number): T {
  return items[seed % items.length];
}

function seedFrom(text: string): number {
  let total = 0;
  for (let i = 0; i < text.length; i += 1) total += text.charCodeAt(i);
  return total;
}

function buildSections(service: ServiceType, city: City, seed: number): ArticleSection[] {
  const hasAreas = Boolean(city.areas?.length);
  const nearby = city.areas?.slice(0, 4).join(", ") ?? "";
  const isSeasonal = service.seasonal.includes(city.climate);

  const sections: ArticleSection[] = [
    {
      heading: `What ${city.name} ${service.plural.toLowerCase()} need on a website`,
      answer: `Above everything else, ${service.priority}.`,
      body: [
        {
          type: "list",
          ordered: true,
          items: service.customerNeeds.map(
            (need, index) =>
              index === 0
                ? `${need.charAt(0).toUpperCase()}${need.slice(1)} — this is what they check first.`
                : `${need.charAt(0).toUpperCase()}${need.slice(1)}.`
          ),
        },
        {
          type: "p",
          text: `The hesitation that stops most enquiries in this trade is ${service.hesitation}. A site that answers it plainly, before anyone has to ask, converts noticeably better than one that does not.`,
        },
      ],
    },
    {
      heading: `Competing as a ${service.noun} in ${city.name}`,
      body: [
        { type: "p", text: tierNotes[city.metroTier] },
        {
          type: "p",
          text: city.localNote
            ? `${city.localNote} For ${service.owners} specifically, that shapes both when enquiries arrive and what customers expect to see before they contact you.`
            : `For ${service.owners} in ${city.name}, the practical question is whether a customer searching right now can find you, see ${service.priority}, and contact you in one tap. Most competing sites in this trade fail at least one of those.`,
        },
        {
          type: "callout",
          title: "Your Google listing still matters more",
          text: `For a ${service.noun} in ${city.name}, most searches end on the map result. Get your Google Business Profile right first — it is free — and treat the website as what confirms you are worth calling.`,
        },
      ],
    },
    {
      heading: `Covering the ${city.name} area`,
      body: [
        {
          type: "p",
          text: hasAreas
            ? `Customers here often search by neighbourhood rather than by city. If you cover ${nearby} or the wider ${city.name} metro, say so explicitly rather than leaving people to guess.`
            : `Customers often search by neighbourhood or nearby town rather than by city name. Whatever your actual coverage around ${city.name} is, name those places on your site rather than leaving people to guess.`,
        },
        {
          type: "list",
          items: [
            hasAreas
              ? `Name the specific areas you serve, such as ${city.areas!.slice(0, 3).join(", ")}.`
              : `Name the specific towns and neighbourhoods you serve around ${city.name}.`,
            "State any travel charge for the edges of your area, before someone enquires.",
            "Do not create a separate near-identical page for every suburb — it performs worse than one honest area list.",
            "Make sure your Google Business Profile service area matches what the site says.",
          ],
        },
      ],
    },
  ];

  if (isSeasonal) {
    sections.push({
      heading: `Seasonal demand in ${city.name}`,
      body: [
        { type: "p", text: climateNotes[city.climate] },
        {
          type: "p",
          text: `For ${service.owners}, that means the website should be easy for you to update as the season turns — swapping the headline offer, changing hours, and posting current availability without needing a developer.`,
        },
      ],
    });
  }

  sections.push({
    heading: "What it costs and how long it takes",
    body: [
      {
        type: "p",
        text: `A ${service.tier === "one-page" ? "one-page site" : "starter site"} for a ${service.noun} starts at ${service.tier === "one-page" ? "$349" : "$749"} and is usually live in about a week. Pricing on your own site is normally shown as ${service.pricingModel}.`,
      },
      {
        type: "table",
        head: ["Option", "Cost", "Live in"],
        rows: [
          ["One-page site", "$349 – $549", "About 1 week"],
          ["Starter site, 4–6 pages", "$749 – $1,290", "1–2 weeks"],
          ["Care plan (optional)", "$49 – $99 / month", "Ongoing"],
        ],
      },
      {
        type: "p",
        text: `The domain is registered in your name, you own the content, and the care plan is rolling monthly with no contract. If you decide you do not need a website yet, we will tell you that too.`,
      },
    ],
  });

  // Deterministic extra section so pages within a city do not all end identically.
  const closers: ArticleSection[] = [
    {
      heading: "What we need from you to start",
      body: [
        {
          type: "list",
          items: [
            "Your services and prices, written however you normally describe them.",
            "Ten to twenty photos — phone photos in good light are fine.",
            "Your opening hours and contact details.",
            "Your logo, if you have one.",
            "About two hours of your time in total.",
          ],
        },
      ],
    },
    {
      heading: "Common mistakes we see in this trade",
      body: [
        {
          type: "list",
          items: [
            `Hiding pricing, which loses enquiries rather than protecting margin.`,
            "Photos straight from a phone at full size, making the site slow on mobile.",
            "A contact form nobody has tested in months.",
            "Opening hours that are wrong on the site, the listing, or both.",
            `No clear answer to ${service.hesitation}.`,
          ],
        },
      ],
    },
    {
      heading: "How the build works",
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            "A short call to understand what you do and who you serve.",
            "You send photos, services and hours.",
            "We build it and send you a preview link, usually within a week.",
            "One round of changes.",
            "We put it live, set up your Google Business Profile link and hand over the logins.",
          ],
        },
      ],
    },
  ];

  sections.push(pick(closers, seed));
  return sections;
}

function buildPage(service: ServiceType, city: City): LandingPage {
  const slug = `${service.slug}-web-design-${city.slug}`;
  const seed = seedFrom(slug);
  const startPrice = service.tier === "one-page" ? "$349" : "$749";

  return {
    slug,
    group: "areas",
    title: `${service.noun.charAt(0).toUpperCase()}${service.noun.slice(1)} website design in ${city.name}`,
    seoTitle: `${city.name} ${service.noun} Website Design | ROVQIX`,
    description: `Websites for ${service.owners} in ${city.name}, ${city.stateAbbr} from ${startPrice}. ${service.priority.charAt(0).toUpperCase()}${service.priority.slice(1)}, live in about a week, and you own it.`,
    excerpt: `Websites for ${city.name} ${service.plural.toLowerCase()} from ${startPrice}, live in about a week.`,
    eyebrow: `${city.name}, ${city.stateAbbr}`,
    primaryKeyword: `${service.noun} website design ${city.name}`,
    secondaryKeywords: [
      `${service.noun} web design ${city.name}`,
      `website for ${service.owners} ${city.name}`,
      `${city.name} ${service.noun} website`,
      `web designer for ${service.owners} ${city.stateAbbr}`,
    ],
    answer: `ROVQIX builds websites for ${service.owners} in ${city.name}, ${city.state}, starting at ${startPrice} and live in about a week. The priority for this trade is ${service.priority}, and we handle the setup so you only need to supply photos, services and hours.`,
    intro: city.localNote
      ? `${city.localNote} That affects what a ${service.noun} in ${city.name} needs from a website more than any design trend does.`
      : `What a ${service.noun} in ${city.name} needs from a website is decided by how local customers actually search — on a phone, in a hurry, comparing two or three options.`,
    proof: starterProof,
    deliverables: [
      {
        title: service.priority.charAt(0).toUpperCase() + service.priority.slice(1),
        description: `The single most important thing on a ${service.noun} website, built properly rather than as an afterthought.`,
        icon: "Target",
      },
      {
        title: "Tap-to-call on mobile",
        description: `Most ${city.name} customers find you on a phone. Calling you should never take more than one tap.`,
        icon: "Phone",
      },
      {
        title: "Your service area, stated",
        description: city.areas?.length
          ? `${city.areas.slice(0, 4).join(", ")} and the wider metro — named, so nobody has to guess.`
          : `The towns and neighbourhoods you actually cover around ${city.name}, named so nobody has to guess.`,
        icon: "Globe",
      },
      {
        title: "Google Business Profile linked",
        description: `Set up or connected properly, which for a ${city.name} local business usually matters more than the site itself.`,
        icon: "BadgeCheck",
      },
      {
        title: "Fast on mobile data",
        description: "Photos resized and optimised, so the page loads in about a second on a phone.",
        icon: "Gauge",
      },
      {
        title: "Yours to keep",
        description: "Domain registered in your name, content yours, and no contract on the care plan.",
        icon: "Unlock",
      },
    ],
    sections: buildSections(service, city, seed),
    pricing: starterPricing,
    faqs: [
      {
        question: `How much does a ${service.noun} website cost in ${city.name}?`,
        answer: `From ${startPrice} for a one-page site and $749 to $1,290 for a starter site of four to six pages. Hosting and support are optional at $49 to $99 a month, rolling monthly with no contract.`,
      },
      {
        question: `Do you work with ${service.owners} outside ${city.name}?`,
        answer: city.areas?.length
          ? `Yes — we work remotely with businesses across the ${city.state} metro area including ${city.areas.slice(0, 3).join(", ")}, and internationally. Everything is done over email, phone and a preview link.`
          : `Yes — we work remotely with businesses across ${city.state} and internationally. Everything is done over email, phone and a preview link, so location is not a constraint.`,
      },
      {
        question: "How long will it take?",
        answer:
          "About a week for a one-page site and one to two weeks for a starter site, from the point you send photos, services and hours. The main thing that slows projects down is waiting on photos.",
      },
      {
        question: "Do I own the website?",
        answer:
          "Yes. The domain is registered in your name, the content is yours, and you can move it elsewhere at any time. We do not hold sites hostage on a support plan.",
      },
      {
        question: `Will this get me to the top of Google in ${city.name}?`,
        answer: `Nobody can promise that, and be careful of anyone who does. For local searches, your Google Business Profile and your reviews matter more than the website. We set the profile up properly as part of the build.`,
      },
    ],
    areaServed: [city.name, city.state],
    related: [service.parent],
    readMore: [
      { label: `${service.plural} website guide`, href: `/local/${service.parent}` },
      { label: "What a small business website should cost", href: "/cost/small-business-website-cost" },
      { label: "Google Business Profile setup", href: "/local/google-business-profile-setup" },
    ],
    publishedAt: "2026-08-13",
  };
}

/**
 * 40 business types x every city. Empty when the kill switch is off, which
 * removes the routes and the sitemap entries in a single deploy.
 */
const allCities: City[] = [...cities, ...extendedCities, ...internationalCities];

/** Slug for a given service + city pair. Single source of truth for the URL. */
export function serviceAreaSlug(serviceSlug: string, citySlug: string): string {
  return `${serviceSlug}-web-design-${citySlug}`;
}

/** Every city used by the matrix, in one list. */
export const serviceAreaCities: City[] = allCities;

/** Cities grouped by state, for the directory pages. */
export const citiesByState: { state: string; cities: City[] }[] = Object.values(
  allCities.reduce<Record<string, { state: string; cities: City[] }>>((acc, city) => {
    acc[city.state] ??= { state: city.state, cities: [] };
    acc[city.state].cities.push(city);
    return acc;
  }, {})
)
  .map((group) => ({
    state: group.state,
    cities: [...group.cities].sort((a, b) => a.name.localeCompare(b.name)),
  }))
  .sort((a, b) => a.state.localeCompare(b.state));


export const serviceAreaPages: LandingPage[] = SERVICE_AREA_PAGES_ENABLED
  ? serviceTypes.flatMap((service) => allCities.map((city) => buildPage(service, city)))
  : [];

/**
 * ============================================================================
 * BUILD-TIME PRERENDER BUDGET
 * ============================================================================
 * Prerendering every /areas page is not possible on Vercel. The arithmetic:
 *
 *   ~470 KB of build output per page (html + rsc + meta + segments)
 *   x 112,914 pages
 *   = ~53 GB
 *
 * A Vercel build container has roughly 13 GB. Our first attempt died with
 * ENOSPC after writing 11.3 GB. This is a hard physical limit, not a setting.
 *
 * So we prerender a priority-ordered subset and let the rest render on first
 * request. An on-demand page is cached after that first hit and serves the
 * exact same static HTML — a crawler cannot tell the two apart. The only
 * difference is that the very first visitor to a cold page waits ~1-4s.
 *
 * TUNING: PRERENDER_CITY_LIMIT is the only number to change.
 *
 *   pages prerendered = serviceTypes.length (102) x PRERENDER_CITY_LIMIT
 *   build output      = pages x ~470 KB
 *
 *   limit  50  ->  5,100 pages  ->  ~2.4 GB   (very safe)
 *   limit 115  -> 11,730 pages  ->  ~5.5 GB   (current — safe headroom)
 *   limit 150  -> 15,300 pages  ->  ~7.2 GB   (tighter)
 *   limit 200  -> 20,400 pages  ->  ~9.6 GB   (likely to fail)
 *
 * If a deploy fails with ENOSPC, lower this number and redeploy.
 * ============================================================================
 */
export const PRERENDER_CITY_LIMIT = 115;

/**
 * Cities ordered by how much a prerendered page is worth:
 *   1. The cities in cities.ts — they have real neighbourhood and industry
 *      data, so their pages are the strongest content we generate.
 *   2. Bigger metros before smaller ones.
 *   3. English-speaking markets before the rest, because those are the only
 *      ones where an English page matches the actual search intent.
 */
const tierRank: Record<string, number> = { major: 0, large: 1, mid: 2 };

const prerenderPriority: City[] = [...allCities].sort((a, b) => {
  const richA = cities.includes(a) ? 0 : 1;
  const richB = cities.includes(b) ? 0 : 1;
  if (richA !== richB) return richA - richB;

  const tierDiff = tierRank[a.metroTier] - tierRank[b.metroTier];
  if (tierDiff !== 0) return tierDiff;

  // stateAbbr holds a country code for international entries.
  const engA = englishMarkets.has(a.stateAbbr) || a.stateAbbr.length === 2 ? 0 : 1;
  const engB = englishMarkets.has(b.stateAbbr) || b.stateAbbr.length === 2 ? 0 : 1;
  if (engA !== engB) return engA - engB;

  return a.name.localeCompare(b.name);
});

/**
 * Slugs prerendered at build time. Everything else in /areas is still a real,
 * indexable, sitemap-listed page — it is just generated on first request.
 */
export const PRERENDERED_AREA_SLUGS: Set<string> = new Set(
  SERVICE_AREA_PAGES_ENABLED
    ? serviceTypes.flatMap((service) =>
        prerenderPriority
          .slice(0, PRERENDER_CITY_LIMIT)
          .map((city) => serviceAreaSlug(service.slug, city.slug))
      )
    : []
);
