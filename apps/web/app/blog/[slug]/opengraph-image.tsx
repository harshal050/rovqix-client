import { ImageResponse } from "next/og";
import { getBlogPosts, getBlogPostBySlug } from "@/lib/api/blog";
import { getArticleBySlug, getArticleSlugs } from "@/lib/content/articles";
import { getCluster } from "@/lib/content/clusters";
import { siteConfig } from "@rovqix/shared/lib/constants/site";

export const dynamic = "force-static";
export const dynamicParams = false;

// Same slug set as the article page — one card per article.
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  const slugs = new Set([...getArticleSlugs(), ...posts.map((post) => post.slug)]);
  return Array.from(slugs).map((slug) => ({ slug }));
}
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function resolve(slug: string) {
  const article = getArticleBySlug(slug);
  if (article) {
    return { title: article.title, eyebrow: getCluster(article.cluster).name };
  }
  const post = await getBlogPostBySlug(slug);
  if (post) return { title: post.title, eyebrow: post.category };
  return { title: siteConfig.name, eyebrow: "ROVQIX Blog" };
}

/**
 * No generateImageMetadata here on purpose: it would add an id segment to the
 * route, and the URL is referenced directly by articleImageUrl() for both the
 * social card and the article's featured image. Alt text is supplied through
 * the page's openGraph.images metadata instead.
 */
export const alt = `${siteConfig.name} article cover`;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { title, eyebrow } = await resolve(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#050816",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(59,130,246,0.35), transparent 55%), radial-gradient(circle at 10% 85%, rgba(124,58,237,0.35), transparent 55%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, fontWeight: 600, color: "#3B82F6" }}>
          {eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 70 ? 52 : 64,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#ffffff",
            maxWidth: 980,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "rgba(255,255,255,0.6)" }}>
          {siteConfig.name} — {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
