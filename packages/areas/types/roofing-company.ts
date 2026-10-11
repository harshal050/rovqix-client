import type { ServiceType } from "../src/service-types";

export const roofingCompany: ServiceType = {
  slug: "roofing-company",
  noun: "roofing business",
  plural: "Roofing companies",
  owners: "roofers",
  parent: "roofing-company-website",
  priority: "proof you are local, licensed and insured",
  customerNeeds: ["that you are genuinely local", "insurance claim help", "financing options", "your licence"],
  hesitation: "suspicion of storm-chasing out-of-town contractors",
  pricingModel: "quoted per roof after inspection",
  seasonal: ["snow", "humid"],
  tier: "starter",
};
