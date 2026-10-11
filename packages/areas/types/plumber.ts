import type { ServiceType } from "../src/service-types";

export const plumber: ServiceType = {
  slug: "plumber",
  noun: "plumbing business",
  plural: "Plumbers",
  owners: "plumbers",
  parent: "plumber-website",
  priority: "an emergency call button and your licence number",
  customerNeeds: ["whether you are available now", "your callout fee", "your service area", "that you are licensed"],
  hesitation: "fear of being overcharged in an emergency",
  pricingModel: "a callout fee plus hourly or per-job pricing",
  seasonal: ["snow"],
  tier: "one-page",
};
