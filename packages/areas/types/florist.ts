import type { ServiceType } from "../src/service-types";

export const florist: ServiceType = {
  slug: "florist",
  noun: "florist",
  plural: "Florists",
  owners: "florists",
  parent: "florist-website",
  priority: "same-day delivery cut-off times",
  customerNeeds: ["same-day availability", "delivery area and fees", "arrangements by occasion", "sympathy orders"],
  hesitation: "not knowing whether it can arrive today",
  pricingModel: "per arrangement, plus delivery",
  seasonal: ["mild"],
  tier: "starter",
};
