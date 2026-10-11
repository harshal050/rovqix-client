import type { ServiceType } from "../src/service-types";

export const partyRental: ServiceType = {
  slug: "party-rental",
  noun: "party rental business",
  plural: "Party rental companies",
  owners: "rental operators",
  parent: "party-rental-website",
  priority: "inventory pricing and date availability",
  customerNeeds: ["item prices", "availability on their date", "delivery area and fee", "setup requirements"],
  hesitation: "not knowing whether the item is free on their date",
  pricingModel: "per item per day, plus delivery",
  seasonal: ["mild"],
  tier: "starter",
};
