import type { ServiceType } from "../src/service-types";

export const jewelryStore: ServiceType = {
  slug: "jewelry-store",
  noun: "jewellery store",
  plural: "Jewellers",
  owners: "jewellers",
  parent: "jewelry-store-website",
  priority: "consultation booking and custom design process",
  customerNeeds: ["your portfolio", "custom design process", "repairs and valuations", "consultation booking"],
  hesitation: "nervousness about a high-value purchase from an unfamiliar shop",
  pricingModel: "quoted per piece, repairs priced separately",
  seasonal: [],
  tier: "starter",
};
