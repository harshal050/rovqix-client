import type { ServiceType } from "../src/service-types";

export const phoneRepair: ServiceType = {
  slug: "phone-repair",
  noun: "phone repair shop",
  plural: "Phone repair shops",
  owners: "repair technicians",
  parent: "phone-repair-website",
  priority: "pricing by device model and repair type",
  customerNeeds: ["price for their exact model", "how long it takes", "warranty on the repair", "parts quality"],
  hesitation: "worry about cheap parts failing quickly",
  pricingModel: "fixed price per model and repair",
  seasonal: [],
  tier: "one-page",
};
