import type { ServiceType } from "../src/service-types";

export const barberShop: ServiceType = {
  slug: "barber-shop",
  noun: "barber shop",
  plural: "Barber shops",
  owners: "barbers",
  parent: "barber-shop-website",
  priority: "a gallery of real cuts and a booking link",
  customerNeeds: ["photos of your cuts", "the price of a standard cut", "whether you are open now", "how to book"],
  hesitation: "not knowing whether the shop does the style they want",
  pricingModel: "a fixed price per service",
  seasonal: [],
  tier: "one-page",
};
