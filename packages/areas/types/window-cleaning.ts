import type { ServiceType } from "../src/service-types";

export const windowCleaning: ServiceType = {
  slug: "window-cleaning",
  noun: "window cleaning business",
  plural: "Window cleaners",
  owners: "window cleaners",
  parent: "window-cleaning-website",
  priority: "instant pricing by property size and recurring plans",
  customerNeeds: ["price for their property", "what is included", "recurring options", "availability"],
  hesitation: "not knowing whether inside windows are included",
  pricingModel: "by property size or window count",
  seasonal: ["coastal", "mild"],
  tier: "one-page",
};
