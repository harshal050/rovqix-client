import type { ServiceType } from "../src/service-types";

export const computerRepair: ServiceType = {
  slug: "computer-repair",
  noun: "computer repair shop",
  plural: "Computer repair shops",
  owners: "repair technicians",
  parent: "computer-repair-website",
  priority: "flat-rate pricing, turnaround times and data safety",
  customerNeeds: ["repair prices", "how long it takes", "whether data is safe", "which devices you fix"],
  hesitation: "fear of losing photos and documents",
  pricingModel: "flat rates for common jobs",
  seasonal: [],
  tier: "one-page",
};
