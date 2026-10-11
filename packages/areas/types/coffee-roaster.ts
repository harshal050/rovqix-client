import type { ServiceType } from "../src/service-types";

export const coffeeRoaster: ServiceType = {
  slug: "coffee-roaster",
  noun: "coffee roastery",
  plural: "Coffee roasters",
  owners: "roasters",
  parent: "coffee-roaster-website",
  priority: "origins, tasting notes and subscriptions",
  customerNeeds: ["bean origins and notes", "subscription options", "wholesale accounts", "roast dates"],
  hesitation: "not knowing whether the coffee suits their brewing method",
  pricingModel: "per bag, with subscription pricing",
  seasonal: [],
  tier: "starter",
};
