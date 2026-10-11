import type { ServiceType } from "../src/service-types";

export const catering: ServiceType = {
  slug: "catering",
  noun: "catering business",
  plural: "Caterers",
  owners: "caterers",
  parent: "catering-company-website",
  priority: "per-head pricing and an enquiry form that qualifies",
  customerNeeds: ["per-head prices", "availability on their date", "menu packages", "dietary handling"],
  hesitation: "not knowing whether you fit their budget",
  pricingModel: "per head, by package",
  seasonal: ["mild"],
  tier: "starter",
};
