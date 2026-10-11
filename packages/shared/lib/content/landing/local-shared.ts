import type { PricingTier, ProofPoint } from "./types";

/**
 * Shared building blocks for the /local pages.
 *
 * These describe TEMPLATE-BASED STARTER websites — a different product from the
 * custom builds priced on /services and /cost. Keeping the tiers in one place
 * means the ~$349 entry price cannot drift between pages and contradict itself.
 *
 * If you change these numbers, also review /cost/small-business-website-cost
 * and /compare/starter-vs-custom-website, which quote the same figures.
 */
export const starterPricing: PricingTier[] = [
  {
    name: "One-page",
    range: "$349 – $549",
    timeline: "About 1 week",
    bestFor: "Shops that mainly need to be found and called",
    includes: [
      "One scrolling page with all your key info",
      "Click-to-call and directions on mobile",
      "Hours, services and photo gallery",
      "Contact form to your email",
      "Google Business Profile linked up",
    ],
  },
  {
    name: "Starter site",
    range: "$749 – $1,290",
    timeline: "1–2 weeks",
    bestFor: "Most local businesses",
    includes: [
      "4–6 pages, including services and about",
      "Online booking or menu, if you need it",
      "Photo galleries you can update",
      "Reviews pulled in from Google",
      "Basic local SEO setup",
      "You can edit the text yourself",
    ],
    featured: true,
  },
  {
    name: "Care plan",
    range: "$49 – $99 / month",
    timeline: "Rolling monthly",
    bestFor: "Keeping it working without thinking about it",
    includes: [
      "Hosting, domain and security included",
      "Updates to hours, prices and photos",
      "Backups and uptime monitoring",
      "Small changes each month",
      "Cancel with 30 days notice",
    ],
  },
];

/** Consistent proof strip across local pages. */
export const starterProof: ProofPoint[] = [
  { metric: "From $349", label: "One-page site" },
  { metric: "~1 week", label: "Live and working" },
  { metric: "Yours", label: "Domain and content" },
  { metric: "No contract", label: "Care plan is monthly" },
];

/** Every local page links back to these. */
export const localReadMore = [
  { label: "What a small business website should cost", href: "/cost/small-business-website-cost" },
  { label: "Starter template or custom build?", href: "/compare/starter-vs-custom-website" },
];

/**
 * Shared FAQs appended to every local page. Page-specific FAQs come first so
 * each page still answers its own questions before these general ones.
 */
export const starterFaqs = [
  {
    question: "Is this a template or a custom design?",
    answer:
      "It is a template we adapt to your business — your colours, photos, services and words. It is not a custom design from scratch, which is what makes $349 possible. If you want fully custom, that starts around $2,500 and we will tell you honestly which one you need.",
  },
  {
    question: "What do you need from me to start?",
    answer:
      "Your logo if you have one, some photos of your work or your shop, your services and prices, and your opening hours. If you do not have photos, we will tell you what to take with a phone — it is usually enough.",
  },
  {
    question: "Do I own the website?",
    answer:
      "Yes. The domain is registered in your name, the content is yours, and you can move it elsewhere at any time. We do not hold your site hostage on a care plan.",
  },
  {
    question: "What happens if I stop the care plan?",
    answer:
      "You keep the site and the domain. You would need to arrange your own hosting, which is usually $5 to $15 a month, and we will help you move it across at no charge.",
  },
];
