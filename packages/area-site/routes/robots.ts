import type { MetadataRoute } from "next";

import { getCurrentShard, shardOrigin } from "@rovqix/areas";


export default function robots(): MetadataRoute.Robots {
  const origin = shardOrigin(getCurrentShard());
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
