import type { ServiceType } from "../src/service-types";

export const bookkeepingService: ServiceType = {
  slug: "bookkeeping-service",
  noun: "bookkeeping business",
  plural: "Bookkeepers",
  owners: "bookkeepers",
  parent: "bookkeeping-service-website",
  priority: "monthly package pricing and software supported",
  customerNeeds: ["monthly package prices", "which software you use", "industries you serve", "whether tax filing is included"],
  hesitation: "not knowing whether tax returns are included",
  pricingModel: "monthly by transaction volume",
  seasonal: [],
  tier: "starter",
};
