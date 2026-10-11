import type { ServiceType } from "../src/service-types";

export const foodTruck: ServiceType = {
  slug: "food-truck",
  noun: "food truck",
  plural: "Food trucks",
  owners: "food truck operators",
  parent: "food-truck-website",
  priority: "today's location, updatable from your phone",
  customerNeeds: ["where you are today", "this week's schedule", "the menu", "catering enquiries"],
  hesitation: "arriving where the truck was yesterday",
  pricingModel: "per item, plus quoted catering",
  seasonal: ["snow", "mild"],
  tier: "one-page",
};
