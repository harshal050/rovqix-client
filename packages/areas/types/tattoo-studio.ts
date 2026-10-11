import type { ServiceType } from "../src/service-types";

export const tattooStudio: ServiceType = {
  slug: "tattoo-studio",
  noun: "tattoo studio",
  plural: "Tattoo studios",
  owners: "tattoo artists",
  parent: "tattoo-studio-website",
  priority: "artist portfolios organised by style",
  customerNeeds: ["portfolios by style", "deposit and booking policy", "shop hygiene and licensing", "rough pricing"],
  hesitation: "not knowing whether an artist works in their style",
  pricingModel: "hourly or per-piece, quoted after consultation",
  seasonal: [],
  tier: "starter",
};
