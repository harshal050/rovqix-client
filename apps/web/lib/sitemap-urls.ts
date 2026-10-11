import type { MetadataRoute } from "next";

import { siteConfig } from "@rovqix/shared/lib/constants/site";
import { getProjects } from "@/lib/api/projects";
import { getBlogPosts } from "@/lib/api/blog";
import { articles, getLastUpdated } from "@/lib/content/articles";
import { clusters } from "@/lib/content/clusters";
import { getLandingLastUpdated, landingPages, landingPath } from "@rovqix/shared/lib/content/landing";
import { landingGroups } from "@rovqix/shared/lib/content/landing/groups";
import {
  AREA_PAGES_PUBLISHED_AT,
  areaCities,
  areaPageUrl,
  areaSlug,
  areaTrackUrl,
  shardOrigin,
  shards,
} from "@rovqix/areas";

/**
 * Every indexable main-site URL, built from the same data the pages render
 * from — so publishing content adds it to the sitemap with no manual step.
 *
 * That includes the area subdomains (beauty.rovqix.in, …): Search Console
 * accepts their URLs here once rovqix.in is verified as a Domain property,
 * which covers every subdomain.
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
    ...landingRoutes,
    ...topicRoutes,
    ...articleRoutes,
    ...projectRoutes,
    ...blogRoutes,
  ];
}

/*
 * Area subdomain URLs (~1.58 million) are never materialised as one list:
 * each sitemap chunk computes just its own slice by index. Order: every
 * subdomain home and track index, then pages city-first (best cities first),
 * so the strongest pages land in the earliest chunks.
 */
const areaLastModified = new Date(`${AREA_PAGES_PUBLISHED_AT}T00:00:00Z`);
const areaIndexUrls: string[] = areaCities.length
  ? shards.flatMap((shard) => [shardOrigin(shard), ...shard.tracks.map((track) => areaTrackUrl(shard, track))])
  : [];
const areaTracks = shards.flatMap((shard) => shard.tracks.map((track) => ({ shard, track })));
const areaUrlCount = areaIndexUrls.length + areaTracks.length * areaCities.length;

function areaEntryAt(i: number): MetadataRoute.Sitemap[number] {
  if (i < areaIndexUrls.length) {
    return { url: areaIndexUrls[i], lastModified: areaLastModified, changeFrequency: "monthly", priority: 0.5 };
  }
  const k = i - areaIndexUrls.length;
  const city = areaCities[Math.floor(k / areaTracks.length)];
  const { shard, track } = areaTracks[k % areaTracks.length];
  return {
    url: areaPageUrl(shard, areaSlug(track.service.slug, track.variant.slug, city.slug)),
    lastModified: areaLastModified,
    changeFrequency: "monthly",
    priority: 0.4,
  };
}

/** One sitemap chunk: main-site URLs first, then the area subdomains. */
export async function getSitemapChunk(index: number): Promise<MetadataRoute.Sitemap> {
  const main = await getAllSitemapUrls();
  const start = index * SITEMAP_CHUNK_SIZE;
  const end = Math.min(start + SITEMAP_CHUNK_SIZE, main.length + areaUrlCount);
  const entries: MetadataRoute.Sitemap = [];
  for (let i = start; i < end; i += 1) {
    entries.push(i < main.length ? main[i] : areaEntryAt(i - main.length));
  }
  return entries;
}

/** How many chunk files the URL list needs. */
export async function getSitemapChunkCount(): Promise<number> {
  const urls = await getAllSitemapUrls();
  return Math.max(1, Math.ceil((urls.length + areaUrlCount) / SITEMAP_CHUNK_SIZE));
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
