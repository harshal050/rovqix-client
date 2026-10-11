import type { ServiceType } from "../src/service-types";

export const autoDetailing: ServiceType = {
  slug: "auto-detailing",
  noun: "auto detailing business",
  plural: "Auto detailers",
  owners: "detailers",
  parent: "auto-detailing-website",
  priority: "before and after photos and package pricing by vehicle size",
  customerNeeds: ["package prices for their vehicle", "results photos", "whether you come to them", "how long it takes"],
  hesitation: "not knowing whether the result justifies the price",
  pricingModel: "packages by vehicle size, plus add-ons",
  seasonal: ["snow", "heat"],
  tier: "one-page",
};
