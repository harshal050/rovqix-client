import type { ServiceType } from "../src/service-types";

export const hardwareStore: ServiceType = {
  slug: "hardware-store",
  noun: "hardware store",
  plural: "Hardware stores",
  owners: "hardware store owners",
  parent: "hardware-store-website",
  priority: "departments, services and opening hours",
  customerNeeds: ["what you stock", "in-store services", "opening hours", "trade accounts"],
  hesitation: "not knowing whether the trip is worth making",
  pricingModel: "per item, in store",
  seasonal: [],
  tier: "one-page",
};
