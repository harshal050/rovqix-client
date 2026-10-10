import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants/site";

export const dynamic = "force-static";

/**
 * Everything is open, including AI retrieval crawlers — being citable in AI
 * answers is worth more to an agency than withholding the content. See
 * /blog/llms-txt-and-ai-crawlers for the reasoning behind this position.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    // /sitemap.xml is a sitemap index listing every chunk under /sitemaps/.
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
