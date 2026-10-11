import type { Climate } from "./cities";

/**
 * Business types used to generate the service-area pages.
 *
 * Each entry carries enough real detail that a generated page says something
 * specific rather than swapping a name into a template: what customers search,
 * what they worry about, how the trade is priced, and how the seasons affect it.
 */
export type ServiceType = {
  /** Used in the URL: /areas/{slug}-web-design-{city} */
  slug: string;
  /** "barber shop" — used mid-sentence. */
  noun: string;
  /** "Barber shops" — used as a heading. */
  plural: string;
  /** How the owner describes themselves: "barbers". */
  owners: string;
  /** Links back to the detailed national page. */
  parent: string;
  /** The single most important thing on this trade's website. */
  priority: string;
  /** What their customer is trying to find out. */
  customerNeeds: string[];
  /** The specific worry that stops customers contacting them. */
  hesitation: string;
  /** How this trade is normally priced. */
  pricingModel: string;
  /** Which climates materially change demand for this trade. */
  seasonal: Climate[];
  /** Realistic starting price band for the site. */
  tier: "one-page" | "starter";
};
