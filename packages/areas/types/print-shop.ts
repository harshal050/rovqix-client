import type { ServiceType } from "../src/service-types";

export const printShop: ServiceType = {
  slug: "print-shop",
  noun: "print shop",
  plural: "Print shops",
  owners: "printers",
  parent: "print-shop-website",
  priority: "pricing and turnaround for common jobs",
  customerNeeds: ["prices for common jobs", "turnaround times", "file requirements", "whether you do design"],
  hesitation: "not knowing whether their file will actually print correctly",
  pricingModel: "per job, by quantity and specification",
  seasonal: [],
  tier: "one-page",
};
