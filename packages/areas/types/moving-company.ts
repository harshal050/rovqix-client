import type { ServiceType } from "../src/service-types";

export const movingCompany: ServiceType = {
  slug: "moving-company",
  noun: "moving business",
  plural: "Moving companies",
  owners: "movers",
  parent: "moving-company-website",
  priority: "an instant estimate and your licence numbers",
  customerNeeds: ["a price estimate", "your licence and insurance", "availability on their date", "what is included"],
  hesitation: "well-publicised moving scams and hostage-load stories",
  pricingModel: "by home size and distance, confirmed after a survey",
  seasonal: ["mild"],
  tier: "starter",
};
