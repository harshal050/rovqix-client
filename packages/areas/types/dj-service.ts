import type { ServiceType } from "../src/service-types";

export const djService: ServiceType = {
  slug: "dj-service",
  noun: "DJ business",
  plural: "DJs",
  owners: "DJs",
  parent: "dj-service-website",
  priority: "package pricing and date availability",
  customerNeeds: ["package prices", "date availability", "music samples", "equipment included"],
  hesitation: "not knowing whether the date is free before enquiring",
  pricingModel: "per event, by package",
  seasonal: ["mild"],
  tier: "one-page",
};
