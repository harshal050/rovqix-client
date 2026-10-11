import type { ServiceType } from "../src/service-types";

export const securitySystemInstaller: ServiceType = {
  slug: "security-system-installer",
  noun: "security installation business",
  plural: "Security installers",
  owners: "security installers",
  parent: "security-system-installer-website",
  priority: "system packages and monitoring costs",
  customerNeeds: ["package prices", "monthly monitoring cost", "contract length", "licensing"],
  hesitation: "worry about long monitoring contracts",
  pricingModel: "equipment plus monthly monitoring",
  seasonal: [],
  tier: "starter",
};
