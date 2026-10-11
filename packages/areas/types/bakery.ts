import type { ServiceType } from "../src/service-types";

export const bakery: ServiceType = {
  slug: "bakery",
  noun: "bakery",
  plural: "Bakeries",
  owners: "bakers",
  parent: "bakery-website",
  priority: "custom cake enquiries with lead times stated",
  customerNeeds: ["what you make", "custom cake ordering", "lead times", "allergen information"],
  hesitation: "not knowing how far ahead to order a custom cake",
  pricingModel: "per item, with custom work quoted",
  seasonal: [],
  tier: "starter",
};
