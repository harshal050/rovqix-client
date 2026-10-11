import type { ServiceType } from "../src/service-types";

export const eventVenue: ServiceType = {
  slug: "event-venue",
  noun: "event venue",
  plural: "Event venues",
  owners: "venue managers",
  parent: "event-venue-website",
  priority: "capacity, availability and hire pricing",
  customerNeeds: ["capacity and layouts", "hire pricing", "date availability", "what is included"],
  hesitation: "not knowing whether the venue fits their guest count and budget",
  pricingModel: "hire fee, sometimes with minimum spend",
  seasonal: ["mild"],
  tier: "starter",
};
