import type { ServiceType } from "../src/service-types";

export const restaurant: ServiceType = {
  slug: "restaurant",
  noun: "restaurant",
  plural: "Restaurants",
  owners: "restaurant owners",
  parent: "restaurant-website",
  priority: "a menu that loads instantly on a phone",
  customerNeeds: ["the menu and prices", "whether you are open now", "reservations", "directions"],
  hesitation: "not being able to read the menu before deciding",
  pricingModel: "per dish, shown on the menu",
  seasonal: [],
  tier: "starter",
};
