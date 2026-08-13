import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants/site";
import { getProjects } from "@/lib/api/projects";
import { getBlogPosts } from "@/lib/api/blog";
import { articles, getLastUpdated } from "@/lib/content/articles";
import { clusters } from "@/lib/content/clusters";
import { getLandingLastUpdated, landingPages, landingPath } from "@/lib/content/landing";
import { landingGroups } from "@/lib/content/landing/groups";

/**
 * Every indexable URL, generated from the same sources the pages render from,
 * so publishing content adds it to the sitemap with no manual step.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
