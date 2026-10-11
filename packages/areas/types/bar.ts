import type { ServiceType } from "../src/service-types";

export const bar: ServiceType = {
  slug: "bar",
  noun: "bar",
  plural: "Bars and taprooms",
  owners: "bar owners",
  parent: "bar-and-brewery-website",
  priority: "a current tap list and the events calendar",
  customerNeeds: ["what is on tap", "what is on tonight", "food situation", "whether dogs are allowed"],
  hesitation: "arriving for a beer or an event that is not on",
  pricingModel: "per drink, shown on the list",
  seasonal: [],
  tier: "one-page",
};
