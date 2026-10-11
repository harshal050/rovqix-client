import type { ArticleSection, LandingPage } from "@rovqix/shared/lib/content/landing/types";
import { cities, climateNotes, tierNotes, type City } from "./cities";
import { extendedCities } from "./cities-extended";
import { englishMarkets, internationalCities } from "./cities-international";
import type { ServiceType } from "./service-types";
import type { Variant, VariantContext } from "./variants";
import { starterPricing, starterProof } from "@rovqix/shared/lib/content/landing/local-shared";

/**
 * ============================================================================
 * KILL SWITCH
 * ============================================================================
 * Set to false to remove every area page from the subdomains and the sitemap
 * on the next deploy of each site. Do this if Search Console shows indexing or quality problems
 * after these pages go live.
 *
 * These pages are generated from a template (every business type x every city,
 * 112,914 pages across the area subdomains).
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

/** Publish date on every area page; bump it when the template changes materially. */
export const AREA_PAGES_PUBLISHED_AT = "2026-08-13";

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

function buildPage(shard: Shard, service: ServiceType, variant: Variant, city: City): LandingPage {
  const slug = areaSlug(service.slug, variant.slug, city.slug);
  const seed = seedFrom(slug);
  const startPrice = service.tier === "one-page" ? "$349" : "$749";
  const ctx: VariantContext = {
    service,
    city,
    startPrice,
    Noun: `${service.noun.charAt(0).toUpperCase()}${service.noun.slice(1)}`,
  };
  const [primaryKeyword, ...secondaryKeywords] = variant.keywords(ctx);
  const description = variant.description(ctx);

  return {
    slug,
    group: "areas",
    url: areaPageUrl(shard, slug),
    title: variant.title(ctx),
    seoTitle: variant.seoTitle(ctx),
    description,
    excerpt: description,
    eyebrow: `${variant.label} · ${city.name}, ${city.stateAbbr}`,
    primaryKeyword,
    secondaryKeywords: [
      ...secondaryKeywords,
      `${city.name} ${service.noun} website`,
      `web designer for ${service.owners} ${city.stateAbbr}`,
    ],
    answer: variant.answer(ctx),
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
    sections: [
      ...(variant.section ? [variant.section(ctx)] : []),
      ...buildSections(service, city, seed),
    ],
    pricing: starterPricing,
    faqs: [
      ...(variant.faq ? [variant.faq(ctx)] : []),
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
    publishedAt: AREA_PAGES_PUBLISHED_AT,
  };
}

/** One business type published in one variant: 1,107 pages (one per city). */
export type Track = { service: ServiceType; variant: Variant };

/**
 * One area subdomain (plumber-websites.rovqix.in, …): a business type in
 * every variant. Registered in ./index.ts.
 */
export type Shard = {
  /** Value of AREA_SHARD that builds this site, and its app folder name. */
  id: string;
  /** plumber-websites -> https://plumber-websites.rovqix.in */
  subdomain: string;
  tracks: Track[];
};

/** URL slug of a track's city index: barber-shop-website-cost */
export function trackSlug(track: Track): string {
  return `${track.service.slug}-${track.variant.slug}`;
}

/** "Barber shops · Website cost" */
export function trackLabel(track: Track): string {
  return `${track.service.plural} · ${track.variant.label}`;
}

/** Apex domain the area subdomains hang off. */
export const AREA_ROOT_DOMAIN = "rovqix.in";

export function shardOrigin(shard: Shard): string {
  return `https://${shard.subdomain}.${AREA_ROOT_DOMAIN}`;
}

/** Page slug: {type}-{variant}-{city}. Single source of truth for the URL. */
export function areaSlug(serviceSlug: string, variantSlug: string, citySlug: string): string {
  return `${serviceSlug}-${variantSlug}-${citySlug}`;
}

/** Slug of the original "web design" page for a type + city. */
export function serviceAreaSlug(serviceSlug: string, citySlug: string): string {
  return areaSlug(serviceSlug, "web-design", citySlug);
}

/** https://beauty.rovqix.in/barber-shop-web-design-atlanta */
export function areaPageUrl(shard: Shard, slug: string): string {
  return `${shardOrigin(shard)}/${slug}`;
}

/** A track's city index: https://web01.rovqix.in/service/barber-shop-website-cost */
export function areaTrackUrl(shard: Shard, track: Track): string {
  return `${shardOrigin(shard)}/service/${trackSlug(track)}`;
}

/**
 * Cities ordered by how much a page is worth:
 *   1. The cities in cities.ts — they have real neighbourhood and industry
 *      data, so their pages are the strongest content we generate.
 *   2. Bigger metros before smaller ones.
 *   3. English-speaking markets before the rest, because those are the only
 *      ones where an English page matches the actual search intent.
 * The order is used by the sitemap, so the best pages are listed first.
 */
const tierRank: Record<string, number> = { major: 0, large: 1, mid: 2 };

const allCities: City[] = [...cities, ...extendedCities, ...internationalCities];

/** Every city that gets a page for every business type. */
export const areaCities: City[] = SERVICE_AREA_PAGES_ENABLED
  ? [...allCities].sort((a, b) => {
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
    })
  : [];

/** Cities grouped by state (or country), for the city index pages. */
export const citiesByState: { state: string; cities: City[] }[] = Object.values(
  areaCities.reduce<Record<string, { state: string; cities: City[] }>>((acc, city) => {
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

/** Every page slug on a subdomain, without building the pages themselves. */
export function shardPageSlugs(shard: Shard): string[] {
  return shard.tracks.flatMap(({ service, variant }) =>
    areaCities.map((city) => areaSlug(service.slug, variant.slug, city.slug))
  );
}

export function shardPageCount(shard: Shard): number {
  return shard.tracks.length * areaCities.length;
}

const slugIndexCache = new Map<string, Map<string, [Track, City]>>();

/** Builds one page of a subdomain, or undefined if the slug is not on it. */
export function getShardPage(shard: Shard, slug: string): LandingPage | undefined {
  let index = slugIndexCache.get(shard.id);
  if (!index) {
    index = new Map();
    for (const track of shard.tracks) {
      for (const city of areaCities) {
        index.set(areaSlug(track.service.slug, track.variant.slug, city.slug), [track, city]);
      }
    }
    slugIndexCache.set(shard.id, index);
  }
  const match = index.get(slug);
  return match ? buildPage(shard, match[0].service, match[0].variant, match[1]) : undefined;
}

/** The business types on a subdomain, in order, each with its tracks. */
export function shardServices(shard: Shard): { service: ServiceType; tracks: Track[] }[] {
  const groups: { service: ServiceType; tracks: Track[] }[] = [];
  for (const track of shard.tracks) {
    const last = groups[groups.length - 1];
    if (last?.service === track.service) last.tracks.push(track);
    else groups.push({ service: track.service, tracks: [track] });
  }
  return groups;
}

/** "Barber shops & Hair salons" — a subdomain named by what it covers. */
export function shardName(shard: Shard): string {
  return shardServices(shard).map(({ service }) => service.plural).join(" & ");
}
