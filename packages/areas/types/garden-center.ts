import type { ServiceType } from "../src/service-types";

export const gardenCenter: ServiceType = {
  slug: "garden-center",
  noun: "garden centre",
  plural: "Garden centres",
  owners: "garden centre owners",
  parent: "garden-center-website",
  priority: "what is in season and opening hours",
  customerNeeds: ["what is in stock now", "opening hours", "delivery for bulk items", "plant care advice"],
  hesitation: "driving out to find the plants they wanted are gone",
  pricingModel: "per plant or per yard for bulk",
  seasonal: ["snow", "mild", "heat"],
  tier: "starter",
};
