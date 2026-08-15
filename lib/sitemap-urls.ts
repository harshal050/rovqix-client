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
 * Every indexable URL on the site, built from the same data the pages render
 * from — so publishing content adds it to the sitemap with no manual step.
 *
 * Shared by the two sitemap routes:
 *   /sitemap.xml      -> the sitemap index (submit this one)
 *   /sitemaps/{n}.xml -> the chunks it points at
 *
 * Google allows 50,000 URLs per sitemap file. We chunk at 25,000 so each file
 * stays small and a partial re-crawl is cheap.
 */
export const SITEMAP_CHUNK_SIZE = 25000;

export async function getAllSitemapUrls(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = (
    [
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
    ]
  ).map(({ path, priority, changeFrequency }) => ({
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

/** How many chunk files the URL list needs. */
export async function getSitemapChunkCount(): Promise<number> {
  const urls = await getAllSitemapUrls();
  return Math.max(1, Math.ceil(urls.length / SITEMAP_CHUNK_SIZE));
}

/** Escapes the five XML entities. URLs here are ASCII slugs, but be safe. */
export function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toIso(value: MetadataRoute.Sitemap[number]["lastModified"]): string {
  if (!value) return new Date().toISOString();
  return value instanceof Date ? value.toISOString() : new Date(value).toISOString();
}

/** Renders one <urlset> document. */
export function renderUrlset(entries: MetadataRoute.Sitemap): string {
  const body = entries
    .map((entry) => {
      const parts = [
        `    <loc>${escapeXml(String(entry.url))}</loc>`,
        `    <lastmod>${toIso(entry.lastModified)}</lastmod>`,
      ];
      if (entry.changeFrequency) parts.push(`    <changefreq>${entry.changeFrequency}</changefreq>`);
      if (entry.priority !== undefined) parts.push(`    <priority>${entry.priority}</priority>`);
      return `  <url>\n${parts.join("\n")}\n  </url>`;
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    body,
    "</urlset>",
  ].join("\n");
}
