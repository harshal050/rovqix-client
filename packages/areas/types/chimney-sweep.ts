import type { ServiceType } from "../src/service-types";

export const chimneySweep: ServiceType = {
  slug: "chimney-sweep",
  noun: "chimney sweep business",
  plural: "Chimney sweeps",
  owners: "chimney sweeps",
  parent: "chimney-sweep-website",
  priority: "inspection levels and sweeping prices",
  customerNeeds: ["sweeping and inspection prices", "what each inspection level covers", "certification", "seasonal availability"],
  hesitation: "not understanding what level of inspection they need",
  pricingModel: "per sweep or inspection level",
  seasonal: ["snow"],
  tier: "one-page",
};
