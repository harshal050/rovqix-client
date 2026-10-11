import type { ServiceType } from "../src/service-types";

export const hairSalon: ServiceType = {
  slug: "hair-salon",
  noun: "hair salon",
  plural: "Hair salons",
  owners: "salon owners",
  parent: "hair-salon-website",
  priority: "a service menu with prices and stylist profiles",
  customerNeeds: ["colour and cut prices", "which stylist to book", "before and after work", "Saturday availability"],
  hesitation: "not knowing what a colour service will actually cost",
  pricingModel: "price ranges by service, with consultations for colour",
  seasonal: [],
  tier: "starter",
};
