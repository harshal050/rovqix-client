import type { ServiceType } from "../src/service-types";

export const notaryService: ServiceType = {
  slug: "notary-service",
  noun: "notary business",
  plural: "Notaries",
  owners: "notaries",
  parent: "notary-service-website",
  priority: "fees, travel area and availability",
  customerNeeds: ["your fees", "how far you travel", "availability including evenings", "what ID is needed"],
  hesitation: "not knowing whether you will come to them today",
  pricingModel: "per signature plus travel",
  seasonal: [],
  tier: "one-page",
};
