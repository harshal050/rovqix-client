import type { ServiceType } from "../src/service-types";

export const petGrooming: ServiceType = {
  slug: "pet-grooming",
  noun: "pet grooming business",
  plural: "Pet groomers",
  owners: "groomers",
  parent: "pet-grooming-website",
  priority: "pricing by breed and size, and vaccination requirements",
  customerNeeds: ["price for their dog's size", "vaccination rules", "how long it takes", "before and after photos"],
  hesitation: "not knowing what it will cost for their specific dog",
  pricingModel: "by size and breed, with surcharges for matting",
  seasonal: [],
  tier: "one-page",
};
