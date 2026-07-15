import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants/site";
import { getProjects } from "@/lib/api/projects";
import { getBlogPosts } from "@/lib/api/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/process",
    "/pricing",
    "/blog",
    "/careers",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const [projects, blogPosts] = await Promise.all([getProjects(), getBlogPosts()]);

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/portfolio/${project.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
