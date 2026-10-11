import type { ServiceType } from "../src/service-types";

export const photographer: ServiceType = {
  slug: "photographer",
  noun: "photography business",
  plural: "Photographers",
  owners: "photographers",
  parent: "photographer-website",
  priority: "a portfolio and clear package pricing",
  customerNeeds: ["your portfolio", "package prices", "availability on their date", "what they receive"],
  hesitation: "not knowing whether your style matches what they want",
  pricingModel: "packages by session type",
  seasonal: ["mild"],
  tier: "starter",
};
