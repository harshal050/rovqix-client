import type { ServiceType } from "../src/service-types";

export const weddingVenue: ServiceType = {
  slug: "wedding-venue",
  noun: "wedding venue",
  plural: "Wedding venues",
  owners: "venue owners",
  parent: "wedding-venue-website",
  priority: "packages, capacity and date availability",
  customerNeeds: ["package pricing", "capacity", "available dates", "what is included"],
  hesitation: "not knowing the true all-in cost",
  pricingModel: "per package, often per head",
  seasonal: ["mild"],
  tier: "starter",
};
