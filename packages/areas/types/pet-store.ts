import type { ServiceType } from "../src/service-types";

export const petStore: ServiceType = {
  slug: "pet-store",
  noun: "pet store",
  plural: "Pet stores",
  owners: "pet store owners",
  parent: "pet-store-website",
  priority: "brands stocked and local delivery",
  customerNeeds: ["brands and prescription foods", "local delivery", "in-store services", "opening hours"],
  hesitation: "not knowing whether you stock their pet's specific food",
  pricingModel: "per item, with repeat order options",
  seasonal: [],
  tier: "one-page",
};
