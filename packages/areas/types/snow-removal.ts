import type { ServiceType } from "../src/service-types";

export const snowRemoval: ServiceType = {
  slug: "snow-removal",
  noun: "snow removal business",
  plural: "Snow removal companies",
  owners: "snow removal operators",
  parent: "snow-removal-website",
  priority: "seasonal contract pricing and service triggers",
  customerNeeds: ["seasonal and per-visit pricing", "at what snowfall you attend", "priority order", "service area"],
  hesitation: "not knowing at what point you actually turn up",
  pricingModel: "seasonal contract or per visit",
  seasonal: ["snow"],
  tier: "one-page",
};
