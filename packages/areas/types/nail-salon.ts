import type { ServiceType } from "../src/service-types";

export const nailSalon: ServiceType = {
  slug: "nail-salon",
  noun: "nail salon",
  plural: "Nail salons",
  owners: "nail technicians",
  parent: "nail-salon-website",
  priority: "a fast-loading design gallery",
  customerNeeds: ["design examples", "prices and durations", "walk-in availability", "hygiene standards"],
  hesitation: "uncertainty about hygiene and sterilisation",
  pricingModel: "a price per service with durations shown",
  seasonal: [],
  tier: "one-page",
};
