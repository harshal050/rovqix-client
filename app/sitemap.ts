import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants/site";
import { getProjects } from "@/lib/api/projects";
import { getBlogPosts } from "@/lib/api/blog";
import { articles, getLastUpdated } from "@/lib/content/articles";
import { clusters } from "@/lib/content/clusters";
import { getLandingLastUpdated, landingPages, landingPath } from "@/lib/content/landing";
import { landingGroups } from "@/lib/content/landing/groups";
import { serviceTypes } from "@/lib/content/landing/service-area-types";
import { SERVICE_AREA_PAGES_ENABLED } from "@/lib/content/landing/service-areas";

/**
 * Sitemaps are split into chunks of 25,000 URLs. Google's hard limits are
 * 50,000 URLs and 50MB per file; chunking well below that keeps each file fast
 * to fetch and makes partial re-crawls cheaper.
 *
 * Next generates one file per id at /sitemap/{id}.xml, and /sitemap-index.xml
 * lists them. robots.txt points at the index.
 */
const CHUNK_SIZE = 25000;

async function allUrls(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = ([
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/portfolio", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/process", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/careers", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ]).map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  // Landing hubs. /services already appears above as a static route.
  const hubRoutes: MetadataRoute.Sitemap = landingGroups
    .filter((group) => group.segment !== "services")
    .map((group) => ({
      url: `${siteConfig.url}/${group.segment}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  const landingRoutes: MetadataRoute.Sitemap = landingPages.map((page) => ({
    url: `${siteConfig.url}${landingPath(page)}`,
    lastModified: new Date(`${getLandingLastUpdated(page)}T00:00:00Z`),
    changeFrequency: "monthly",
    // Commercial pages outrank articles: these are the conversion targets.
    priority: 0.8,
  }));

  // Per-business-type city indexes that sit between /areas and the generated
  // pages. Skipped entirely when the service-area kill switch is off.
  const serviceAreaIndexRoutes: MetadataRoute.Sitemap = SERVICE_AREA_PAGES_ENABLED
    ? serviceTypes.map((service) => ({
        url: `${siteConfig.url}/areas/service/${service.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.5,
      }))
    : [];

  const topicRoutes: MetadataRoute.Sitemap = clusters.map((cluster) => ({
    url: `${siteConfig.url}/blog/topics/${cluster.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteConfig.url}/blog/${article.slug}`,
    lastModified: new Date(`${getLastUpdated(article)}T00:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const [projects, blogPosts] = await Promise.all([getProjects(), getBlogPosts()]);

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteConfig.url}/portfolio/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const staticArticleSlugs = new Set(articles.map((article) => article.slug));
  const blogRoutes: MetadataRoute.Sitemap = blogPosts
    .filter((post) => !staticArticleSlugs.has(post.slug))
    .map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  return [
    ...staticRoutes,
    ...hubRoutes,
    ...serviceAreaIndexRoutes,
    ...landingRoutes,
    ...topicRoutes,
    ...articleRoutes,
    ...projectRoutes,
    ...blogRoutes,
  ];
}

/** Number of chunk files, derived from the real URL count. */
export async function sitemapChunkCount(): Promise<number> {
  const urls = await allUrls();
  return Math.max(1, Math.ceil(urls.length / CHUNK_SIZE));
}

export async function generateSitemaps(): Promise<{ id: number }[]> {
  const count = await sitemapChunkCount();
  return Array.from({ length: count }, (_, id) => ({ id }));
}

/**
 * Next 16 passes `id` as a Promise resolving to a string (see
 * next-metadata-route-loader: `handler({ id: targetIdPromise })`). Typing it as
 * a number silently produces NaN and an empty sitemap, so resolve and coerce it
 * explicitly.
 */
export default async function sitemap({
  id,
}: {
  id?: Promise<string> | string | number;
}): Promise<MetadataRoute.Sitemap> {
  const resolved = await id;
  const index = Number(resolved ?? 0);
  const start = Number.isFinite(index) ? index * CHUNK_SIZE : 0;
  const urls = await allUrls();
  return urls.slice(start, start + CHUNK_SIZE);
}
