import type { ArticleFaq, ArticleSection } from "@rovqix/shared/lib/content/types";

import type { City } from "./cities";
import type { ServiceType } from "./service-types";

/**
 * Page variants: each business type x city is published once per variant,
 * each answering a different search intent ("website cost", "SEO", …).
 *
 * The variant changes the headline, metadata, direct answer and adds its own
 * lead section and FAQ on top of the city-specific page body. Prices quoted
 * here are the site's published starter prices — never invent new ones.
 *
 * APPEND ONLY. The slug is part of every page URL and the order decides which
 * subdomain a page lives on (packages/areas/shards/*.json). Removing or
 * reordering variants moves or deletes published pages.
 */
export type VariantContext = {
  service: ServiceType;
  city: City;
  /** "$349" or "$749" — the type's starting price. */
  startPrice: string;
  /** "barber shop" with a capital first letter. */
  Noun: string;
};

export type Variant = {
  /** URL part: {type}-{slug}-{city}. */
  slug: string;
  /** Short label for index pages: "Website cost". */
  label: string;
  title: (c: VariantContext) => string;
  seoTitle: (c: VariantContext) => string;
  description: (c: VariantContext) => string;
  keywords: (c: VariantContext) => string[];
  answer: (c: VariantContext) => string;
  /** Lead section shown before the shared city sections. Omit for the base page. */
  section?: (c: VariantContext) => ArticleSection;
  faq?: (c: VariantContext) => ArticleFaq;
};

const p = (text: string) => ({ type: "p" as const, text });
const list = (items: string[]) => ({ type: "list" as const, items });
const loc = (c: VariantContext) => `${c.city.name}, ${c.city.stateAbbr}`;

export const variants: Variant[] = [
  {
    // The original page. Its slug keeps the URLs that were already published.
    slug: "web-design",
    label: "Website design",
    title: (c) => `${c.Noun} website design in ${c.city.name}`,
    seoTitle: (c) => `${c.city.name} ${c.service.noun} Website Design | ROVQIX`,
    description: (c) =>
      `Websites for ${c.service.owners} in ${loc(c)} from ${c.startPrice}. ${c.service.priority.charAt(0).toUpperCase()}${c.service.priority.slice(1)}, live in about a week, and you own it.`,
    keywords: (c) => [
      `${c.service.noun} website design ${c.city.name}`,
      `${c.service.noun} web design ${c.city.name}`,
      `website for ${c.service.owners} ${c.city.name}`,
    ],
    answer: (c) =>
      `ROVQIX builds websites for ${c.service.owners} in ${c.city.name}, ${c.city.state}, starting at ${c.startPrice} and live in about a week. The priority for this trade is ${c.service.priority}, and we handle the setup so you only need to supply photos, services and hours.`,
  },
  {
    slug: "website-cost",
    label: "Website cost",
    title: (c) => `How much a ${c.service.noun} website costs in ${c.city.name}`,
    seoTitle: (c) => `${c.Noun} Website Cost in ${c.city.name} | ROVQIX`,
    description: (c) =>
      `What a ${c.service.noun} website costs in ${loc(c)}: from ${c.startPrice} one-off, $749–$1,290 for a starter site, optional care from $49/month.`,
    keywords: (c) => [
      `${c.service.noun} website cost ${c.city.name}`,
      `how much is a ${c.service.noun} website`,
      `${c.service.noun} website price ${c.city.name}`,
    ],
    answer: (c) =>
      `A ${c.service.noun} website in ${c.city.name} costs from ${c.startPrice} for a one-page site and $749 to $1,290 for a starter site of four to six pages. Hosting and support are optional at $49 to $99 a month, with no contract.`,
    section: (c) => ({
      heading: `What you pay for a ${c.service.noun} website in ${c.city.name}`,
      body: [
        p(`Pricing is fixed before work starts, so a ${c.city.name} ${c.service.noun} knows the full cost up front.`),
        {
          type: "table",
          head: ["Option", "Price", "Best for"],
          rows: [
            ["One-page site", "$349", "Getting found and contacted quickly"],
            ["Starter site (4–6 pages)", "$749–$1,290", `${c.service.plural} with several services to explain`],
            ["Care plan (optional)", "$49–$99 / month", "Hosting, updates and small changes"],
          ],
        },
        p(`For ${c.service.owners}, the money is best spent on ${c.service.priority}. Everything else is secondary.`),
      ],
    }),
    faq: (c) => ({
      question: `Are there hidden costs for a ${c.service.noun} website?`,
      answer: `No. The build price is fixed, the domain is registered in your name, and the care plan is optional and rolling monthly. ${c.service.pricingModel.charAt(0).toUpperCase()}${c.service.pricingModel.slice(1)} is how most ${c.service.owners} price — the site shows that clearly.`,
    }),
  },
  {
    slug: "seo",
    label: "SEO",
    title: (c) => `SEO for ${c.service.plural.toLowerCase()} in ${c.city.name}`,
    seoTitle: (c) => `${c.Noun} SEO in ${c.city.name} | ROVQIX`,
    description: (c) =>
      `Get your ${c.service.noun} found in ${loc(c)}: fast pages, proper local SEO setup and a Google Business Profile that works. Sites from ${c.startPrice}.`,
    keywords: (c) => [
      `${c.service.noun} SEO ${c.city.name}`,
      `local SEO for ${c.service.owners} ${c.city.name}`,
      `${c.service.noun} marketing ${c.city.name}`,
    ],
    answer: (c) =>
      `Local SEO for a ${c.city.name} ${c.service.noun} comes down to three things: a fast site that names your services and area, a complete Google Business Profile, and steady reviews. ROVQIX builds the first two in from day one.`,
    section: (c) => ({
      heading: `How ${c.service.plural.toLowerCase()} in ${c.city.name} get found on Google`,
      body: [
        list([
          `A page per main service, naming ${c.city.name} and the areas you cover.`,
          "Titles, descriptions and structured data set on every page.",
          "Pages that load in about a second on a phone.",
          "A Google Business Profile linked to the site and kept consistent.",
        ]),
        p(`Customers search for ${c.service.customerNeeds.slice(0, 2).join(" and ")}. Pages that answer that directly rank and convert better than generic copy.`),
      ],
    }),
    faq: (c) => ({
      question: `Can you guarantee my ${c.service.noun} ranks first in ${c.city.name}?`,
      answer: "No one honestly can. We set up everything search engines look at; reviews and your Google Business Profile do the rest, and we show you how to keep both healthy.",
    }),
  },
  {
    slug: "website-redesign",
    label: "Website redesign",
    title: (c) => `${c.Noun} website redesign in ${c.city.name}`,
    seoTitle: (c) => `${c.Noun} Website Redesign ${c.city.name} | ROVQIX`,
    description: (c) =>
      `Replace an outdated ${c.service.noun} website in ${loc(c)} with a fast, mobile-first site from ${c.startPrice}, keeping your domain and Google rankings.`,
    keywords: (c) => [
      `${c.service.noun} website redesign ${c.city.name}`,
      `new website for ${c.service.noun} ${c.city.name}`,
      `update ${c.service.noun} website`,
    ],
    answer: (c) =>
      `A redesign for a ${c.city.name} ${c.service.noun} keeps your domain and the pages that already rank, redirects anything that moves, and rebuilds the rest around ${c.service.priority}. Most redesigns go live in one to two weeks.`,
    section: (c) => ({
      heading: `Signs your ${c.service.noun} website needs a redesign`,
      body: [
        list([
          "It is hard to use on a phone.",
          `It does not make ${c.service.priority} obvious.`,
          "You cannot update hours, prices or photos yourself.",
          "It loads slowly or shows security warnings.",
        ]),
        p("We move your content, keep your domain and email working, and redirect old URLs so existing Google traffic is not lost."),
      ],
    }),
    faq: (c) => ({
      question: "Will I lose my Google rankings after a redesign?",
      answer: `Not if it is done properly. We keep the URLs that rank, redirect the ones that change, and resubmit the sitemap, so a ${c.city.name} ${c.service.noun} keeps the traffic it has earned.`,
    }),
  },
  {
    slug: "online-booking-website",
    label: "Online booking website",
    title: (c) => `Online booking website for ${c.service.plural.toLowerCase()} in ${c.city.name}`,
    seoTitle: (c) => `${c.Noun} Booking Website ${c.city.name} | ROVQIX`,
    description: (c) =>
      `Let ${c.city.name} customers book or request a quote from your ${c.service.noun} website, any time, on their phone. From ${c.startPrice}.`,
    keywords: (c) => [
      `${c.service.noun} booking website ${c.city.name}`,
      `online booking for ${c.service.owners}`,
      `${c.service.noun} appointment website`,
    ],
    answer: (c) =>
      `ROVQIX connects your ${c.service.noun} website to the booking or quote tool you already use — or sets up a simple one — so ${c.city.name} customers can book in two taps without calling.`,
    section: (c) => ({
      heading: `Making it easy to book a ${c.service.noun} in ${c.city.name}`,
      body: [
        p(`The biggest reason customers do not book is ${c.service.hesitation}. A booking page answers that before they have to ask.`),
        list([
          "A booking or quote button on every page.",
          "Services, durations and prices shown before the customer commits.",
          "Confirmation by email so nobody wonders whether it worked.",
          "Tap-to-call and WhatsApp for people who prefer to talk.",
        ]),
      ],
    }),
    faq: () => ({
      question: "Can you use the booking system I already have?",
      answer: "Yes. Most booking and scheduling tools can be linked or embedded, so your calendar stays where it is and the website sends customers into it.",
    }),
  },
  {
    slug: "landing-page",
    label: "Landing page",
    title: (c) => `${c.Noun} landing page in ${c.city.name}`,
    seoTitle: (c) => `${c.Noun} Landing Page ${c.city.name} | ROVQIX`,
    description: (c) =>
      `A one-page site for a ${loc(c)} ${c.service.noun}: everything a customer needs on one fast page, live in about a week, from $349.`,
    keywords: (c) => [
      `${c.service.noun} landing page ${c.city.name}`,
      `one page website ${c.service.noun}`,
      `${c.service.noun} single page website ${c.city.name}`,
    ],
    answer: (c) =>
      `A landing page gives a ${c.city.name} ${c.service.noun} one fast page with ${c.service.customerNeeds.slice(0, 3).join(", ")} and a clear way to get in touch. It costs from $349 and goes live in about a week.`,
    section: (c) => ({
      heading: `What goes on a ${c.service.noun} landing page`,
      body: [
        list(c.service.customerNeeds.map((need) => `${need.charAt(0).toUpperCase()}${need.slice(1)}.`)),
        p("One page is often all a local business needs. It can grow into a full site later without starting again."),
      ],
    }),
    faq: () => ({
      question: "Is one page enough?",
      answer: "For many local businesses, yes. If you offer several distinct services or want each to rank on its own, a four to six page starter site is the better fit.",
    }),
  },
  {
    slug: "website-maintenance",
    label: "Website maintenance",
    title: (c) => `${c.Noun} website maintenance in ${c.city.name}`,
    seoTitle: (c) => `${c.Noun} Website Maintenance ${c.city.name} | ROVQIX`,
    description: (c) =>
      `Hosting, updates, backups and small changes for ${c.service.noun} websites in ${loc(c)}, from $49 a month, rolling monthly with no contract.`,
    keywords: (c) => [
      `${c.service.noun} website maintenance ${c.city.name}`,
      `website care plan ${c.service.noun}`,
      `${c.service.noun} website support ${c.city.name}`,
    ],
    answer: (c) =>
      `ROVQIX looks after ${c.service.noun} websites in ${c.city.name} for $49 to $99 a month: hosting, security, backups and small content changes like hours, prices and photos. It is rolling monthly, with no contract.`,
    section: (c) => ({
      heading: "What the care plan covers",
      body: [
        list([
          "Hosting on a fast global network.",
          "Security updates and daily backups.",
          `Small changes — hours, prices, photos, seasonal notices for ${c.service.plural.toLowerCase()}.`,
          "A check that forms and booking links still work.",
        ]),
        p("You can cancel any month, and the site, domain and content stay yours."),
      ],
    }),
    faq: () => ({
      question: "Do I have to take the care plan?",
      answer: "No. It is optional. You own the site and can host it yourself or elsewhere at any time.",
    }),
  },
  {
    slug: "google-business-profile",
    label: "Google Business Profile",
    title: (c) => `Google Business Profile setup for ${c.service.plural.toLowerCase()} in ${c.city.name}`,
    seoTitle: (c) => `${c.Noun} Google Business Profile ${c.city.name} | ROVQIX`,
    description: (c) =>
      `Set up or fix the Google Business Profile for your ${loc(c)} ${c.service.noun}: categories, services, hours, photos and reviews. From $149.`,
    keywords: (c) => [
      `${c.service.noun} Google Business Profile ${c.city.name}`,
      `Google Maps listing ${c.service.noun}`,
      `${c.service.noun} Google listing ${c.city.name}`,
    ],
    answer: (c) =>
      `For a ${c.city.name} ${c.service.noun}, the Google Business Profile usually brings in more customers than the website. ROVQIX sets it up properly — categories, services, hours, photos and a review process — for $149 to $299 one-off.`,
    section: (c) => ({
      heading: `Getting a ${c.service.noun} into the ${c.city.name} map results`,
      body: [
        list([
          "The right primary and secondary categories.",
          "Services and service area listed in full.",
          "Hours, photos and posts kept current.",
          "A simple routine for asking happy customers for reviews.",
        ]),
        p("The profile and the website should say the same thing — same name, address, phone and services. That consistency is what Google rewards."),
      ],
    }),
    faq: () => ({
      question: "Do I need a website if I have a Google Business Profile?",
      answer: "The profile gets you found; the website is where customers check prices, photos and details before they call. The two work best together.",
    }),
  },
  {
    slug: "website-hosting",
    label: "Website hosting",
    title: (c) => `${c.Noun} website hosting in ${c.city.name}`,
    seoTitle: (c) => `${c.Noun} Website Hosting ${c.city.name} | ROVQIX`,
    description: (c) =>
      `Fast, secure hosting for ${c.service.noun} websites in ${loc(c)}, with updates and backups included from $49 a month. No contract.`,
    keywords: (c) => [
      `${c.service.noun} website hosting ${c.city.name}`,
      `hosting for ${c.service.owners}`,
      `small business website hosting ${c.city.name}`,
    ],
    answer: (c) =>
      `Hosting for a ${c.city.name} ${c.service.noun} website is included in the ROVQIX care plan at $49 to $99 a month, with security updates, backups and small changes. Sites are served from a global network so they load fast on phones.`,
    section: () => ({
      heading: "Why hosting matters for a local business",
      body: [
        p("Slow or unreliable hosting costs enquiries: most visitors leave a page that takes more than a few seconds to load on mobile data."),
        list(["Pages served close to your customers.", "HTTPS and security updates handled.", "Daily backups.", "No surprise renewal prices."]),
      ],
    }),
    faq: () => ({
      question: "Can I move my existing website to your hosting?",
      answer: "Usually, yes. If the current site is worth keeping we move it; if it is slow or hard to update, a rebuild is often cheaper in the long run.",
    }),
  },
  {
    slug: "web-developer",
    label: "Web developer",
    title: (c) => `Web developer for ${c.service.plural.toLowerCase()} in ${c.city.name}`,
    seoTitle: (c) => `${c.Noun} Web Developer ${c.city.name} | ROVQIX`,
    description: (c) =>
      `A web developer that builds for ${c.service.owners} in ${loc(c)}: fixed prices from ${c.startPrice}, live in about a week, and you own everything.`,
    keywords: (c) => [
      `${c.service.noun} web developer ${c.city.name}`,
      `web designer for ${c.service.owners} ${c.city.name}`,
      `${c.service.noun} website builder ${c.city.name}`,
    ],
    answer: (c) =>
      `ROVQIX is a web development studio that builds sites for ${c.service.owners} in ${c.city.name} and beyond. You get a fixed price from ${c.startPrice}, a site live in about a week, and full ownership of the domain and content.`,
    section: (c) => ({
      heading: `What to look for in a web developer for your ${c.service.noun}`,
      body: [
        list([
          `They understand that ${c.service.priority} matters most.`,
          "A fixed price agreed before work starts.",
          "The domain registered in your name.",
          "No contract that locks the site to them.",
        ]),
        p("Everything is done remotely over email, phone and a preview link, so working with us from anywhere is straightforward."),
      ],
    }),
    faq: () => ({
      question: "Do you work remotely?",
      answer: "Yes. Every project is run over email, phone or WhatsApp and a live preview link, so location is never a constraint.",
    }),
  },
  {
    slug: "mobile-website",
    label: "Mobile-friendly website",
    title: (c) => `Mobile-friendly ${c.service.noun} website in ${c.city.name}`,
    seoTitle: (c) => `Mobile ${c.Noun} Website ${c.city.name} | ROVQIX`,
    description: (c) =>
      `Most ${c.city.name} customers find a ${c.service.noun} on their phone. Get a mobile-first site with tap-to-call and booking, from ${c.startPrice}.`,
    keywords: (c) => [
      `mobile friendly ${c.service.noun} website ${c.city.name}`,
      `${c.service.noun} mobile website`,
      `responsive website ${c.service.noun} ${c.city.name}`,
    ],
    answer: (c) =>
      `Most people looking for a ${c.service.noun} in ${c.city.name} are on a phone. ROVQIX builds mobile-first: large tap targets, tap-to-call, fast-loading photos and the essentials — ${c.service.customerNeeds.slice(0, 2).join(" and ")} — at the top.`,
    section: () => ({
      heading: "What mobile-first actually means",
      body: [
        list([
          "Designed for a phone screen first, then scaled up.",
          "Calling or booking takes one tap.",
          "Photos resized so pages load in about a second.",
          "Text readable without zooming.",
        ]),
      ],
    }),
    faq: () => ({
      question: "Will the site also look good on a computer?",
      answer: "Yes. Mobile-first means the phone experience is designed first; the same site adapts to tablets and desktops.",
    }),
  },
  {
    slug: "website-speed-optimization",
    label: "Website speed",
    title: (c) => `${c.Noun} website speed optimisation in ${c.city.name}`,
    seoTitle: (c) => `${c.Noun} Website Speed ${c.city.name} | ROVQIX`,
    description: (c) =>
      `Make your ${loc(c)} ${c.service.noun} website load in about a second on mobile — better Google rankings and more enquiries.`,
    keywords: (c) => [
      `${c.service.noun} website speed ${c.city.name}`,
      `slow ${c.service.noun} website`,
      `website performance ${c.service.noun}`,
    ],
    answer: (c) =>
      `A slow site loses ${c.city.name} customers before they see your ${c.service.noun}. ROVQIX builds and fixes sites to load in about a second on mobile, which also helps Google rankings.`,
    section: () => ({
      heading: "Where the speed comes from",
      body: [
        list([
          "Images resized and served in modern formats.",
          "Pages pre-built and served from a global network.",
          "No heavy page builders or unnecessary plugins.",
          "Core Web Vitals checked before launch.",
        ]),
      ],
    }),
    faq: () => ({
      question: "Can you speed up my current site?",
      answer: "Often, yes. If the platform is the bottleneck, rebuilding is usually faster and cheaper than patching it.",
    }),
  },
  {
    slug: "website-copywriting",
    label: "Website copywriting",
    title: (c) => `Website copywriting for ${c.service.plural.toLowerCase()} in ${c.city.name}`,
    seoTitle: (c) => `${c.Noun} Website Copywriting ${c.city.name} | ROVQIX`,
    description: (c) =>
      `Clear website wording for ${c.service.owners} in ${loc(c)} that answers what customers ask and turns visits into enquiries. Included with every build.`,
    keywords: (c) => [
      `${c.service.noun} website copywriting ${c.city.name}`,
      `${c.service.noun} website content`,
      `website text for ${c.service.owners}`,
    ],
    answer: (c) =>
      `Every ROVQIX ${c.service.noun} site includes the wording: plain answers to what ${c.city.name} customers want to know — ${c.service.customerNeeds.slice(0, 2).join(" and ")} — written from the details you send us.`,
    section: (c) => ({
      heading: `What customers want to read on a ${c.service.noun} website`,
      body: [
        list(c.service.customerNeeds.map((need) => `${need.charAt(0).toUpperCase()}${need.slice(1)}.`)),
        p(`Good copy also deals with the main hesitation in this trade — ${c.service.hesitation} — before the customer has to ask.`),
      ],
    }),
    faq: () => ({
      question: "Do I have to write the website text myself?",
      answer: "No. Send us your services, prices, hours and a few photos; we write the copy and you approve it.",
    }),
  },
  {
    slug: "website-agency",
    label: "Website agency",
    title: (c) => `${c.Noun} website agency for ${c.city.name}`,
    seoTitle: (c) => `${c.Noun} Website Agency ${c.city.name} | ROVQIX`,
    description: (c) =>
      `A website agency for ${c.service.owners} in ${loc(c)}: design, build, SEO setup and care in one place. From ${c.startPrice}, live in about a week.`,
    keywords: (c) => [
      `${c.service.noun} website agency ${c.city.name}`,
      `${c.service.noun} marketing agency ${c.city.name}`,
      `web agency for ${c.service.owners}`,
    ],
    answer: (c) =>
      `ROVQIX handles the whole website for a ${c.city.name} ${c.service.noun} — design, build, SEO setup, Google Business Profile and ongoing care — at fixed prices from ${c.startPrice}.`,
    section: (c) => ({
      heading: `Everything a ${c.service.noun} website needs, in one place`,
      body: [
        list([
          "Design and build around what your customers look for.",
          "SEO and Google Business Profile set up properly.",
          "Booking, quote or contact flows that work on a phone.",
          "Optional hosting and care from $49 a month.",
        ]),
        p(`One team, one fixed price, and a site focused on ${c.service.priority}.`),
      ],
    }),
    faq: () => ({
      question: "How is this different from a big agency?",
      answer: "Fixed, published prices, a site live in about a week, and no long contracts. You own the domain and content from day one.",
    }),
  },
];
