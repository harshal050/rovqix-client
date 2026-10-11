import type { ServiceType } from "../src/service-types";

export const solarInstaller: ServiceType = {
  slug: "solar-installer",
  noun: "solar installation business",
  plural: "Solar installers",
  owners: "solar installers",
  parent: "solar-installer-website",
  priority: "savings estimates and incentive guidance",
  customerNeeds: ["system pricing", "available incentives", "realistic payback period", "financing options"],
  hesitation: "scepticism after aggressive door-to-door selling",
  pricingModel: "quoted per system after assessment",
  seasonal: ["heat", "mild"],
  tier: "starter",
};
