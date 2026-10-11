import type { ServiceType } from "../src/service-types";

export const giftShop: ServiceType = {
  slug: "gift-shop",
  noun: "gift shop",
  plural: "Gift shops",
  owners: "shop owners",
  parent: "gift-shop-website",
  priority: "what you stock and seasonal opening hours",
  customerNeeds: ["what you stock", "opening hours", "gift wrapping", "local delivery"],
  hesitation: "not knowing whether they will find something suitable",
  pricingModel: "per item, in store",
  seasonal: [],
  tier: "one-page",
};
