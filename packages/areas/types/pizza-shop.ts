import type { ServiceType } from "../src/service-types";

export const pizzaShop: ServiceType = {
  slug: "pizza-shop",
  noun: "pizza shop",
  plural: "Pizza shops",
  owners: "pizzeria owners",
  parent: "pizza-shop-website",
  priority: "direct ordering that avoids delivery platform commission",
  customerNeeds: ["the menu and prices", "delivery area and minimum", "current deals", "how to order direct"],
  hesitation: "defaulting to a delivery app out of habit",
  pricingModel: "per item, with deals and bundles",
  seasonal: [],
  tier: "one-page",
};
