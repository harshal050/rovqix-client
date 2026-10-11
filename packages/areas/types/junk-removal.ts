import type { ServiceType } from "../src/service-types";

export const junkRemoval: ServiceType = {
  slug: "junk-removal",
  noun: "junk removal business",
  plural: "Junk removal companies",
  owners: "junk removal operators",
  parent: "junk-removal-website",
  priority: "pricing by load volume with photos of each size",
  customerNeeds: ["price for their pile", "same-day availability", "what you cannot take", "whether they must be home"],
  hesitation: "having no idea how to estimate the volume",
  pricingModel: "by truck load fraction",
  seasonal: [],
  tier: "one-page",
};
