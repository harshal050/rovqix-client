import { siteConfig } from "@/lib/constants/site";
import { articles, getArticlesByCluster } from "@/lib/content/articles";
import { clusters } from "@/lib/content/clusters";

export const dynamic = "force-static";

/**
 * llms.txt — a proposed convention offering language models a curated,
 * markdown summary of the site. Generated from the same content source as the
 * pages, so it can never go stale.
 */
export function GET() {
  const sections = clusters
    .map((cluster) => {
      const list = getArticlesByCluster(cluster.id)
        .map(
          (article) =>
            `- [${article.title}](${siteConfig.url}/blog/${article.slug}): ${article.description}`
        )
        .join("\n");
      return `## ${cluster.name}\n\n[All ${cluster.name} guides](${siteConfig.url}/blog/topics/${cluster.slug})\n\n${list}`;
    })
    .join("\n\n");

  const body = `# ${siteConfig.name}

> ${siteConfig.description}

${siteConfig.name} is a website development studio building business websites, startup and SaaS
platforms, ecommerce stores, AI product interfaces, dashboards and custom software with Next.js,
React, Node.js and PostgreSQL. Contact: ${siteConfig.email} / ${siteConfig.phone}.

## Company

- [Home](${siteConfig.url}/): overview of what ROVQIX builds
- [About](${siteConfig.url}/about): company story, team and expertise
- [Services](${siteConfig.url}/services): website, SaaS, ecommerce, custom software, SEO and performance work
- [Process](${siteConfig.url}/process): how projects run from discovery to maintenance
- [Portfolio](${siteConfig.url}/portfolio): selected project work
- [Pricing](${siteConfig.url}/pricing): package structure and indicative ranges
- [Contact](${siteConfig.url}/contact): start a project

## Guides

${articles.length} in-depth technical guides, organised into ${clusters.length} topic clusters.
Index: [${siteConfig.url}/blog](${siteConfig.url}/blog)

${sections}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
