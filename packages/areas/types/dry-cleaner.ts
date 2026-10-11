import type { ServiceType } from "../src/service-types";

export const dryCleaner: ServiceType = {
  slug: "dry-cleaner",
  noun: "dry cleaning business",
  plural: "Dry cleaners",
  owners: "dry cleaners",
  parent: "dry-cleaner-website",
  priority: "pricing by garment and turnaround time",
  customerNeeds: ["price per garment", "turnaround time", "pickup and delivery", "specialist cleaning"],
  hesitation: "uncertainty about cost and whether delicate items are safe",
  pricingModel: "per garment",
  seasonal: [],
  tier: "one-page",
};
