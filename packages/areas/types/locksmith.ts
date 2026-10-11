import type { ServiceType } from "../src/service-types";

export const locksmith: ServiceType = {
  slug: "locksmith",
  noun: "locksmith business",
  plural: "Locksmiths",
  owners: "locksmiths",
  parent: "locksmith-website",
  priority: "one-tap calling and visible licence details",
  customerNeeds: ["immediate availability", "your callout price", "that you are licensed", "response time"],
  hesitation: "widely reported locksmith pricing scams",
  pricingModel: "a callout fee plus the job",
  seasonal: [],
  tier: "one-page",
};
