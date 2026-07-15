import type { Metadata } from "next";
import { getBlogPosts, getBlogCategories } from "@/lib/api/blog";
import { PageHero } from "@/components/shared/page-hero";
import { BlogGrid } from "@/components/sections/blog/blog-grid";
import { NewsletterBanner } from "@/components/sections/blog/newsletter-banner";
import { withBaseKeywords } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const posts = await getBlogPosts();
  const categories = getBlogCategories(posts).filter((c) => c !== "All");
  return {
    title: "Blog",
    description: "Notes on design, engineering, and product strategy from the ROVQIX studio.",
    keywords: withBaseKeywords("web design blog", "software development blog", ...categories),
  };
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const categories = getBlogCategories(posts);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notes on craft, product, and process."
        description="Field notes from building premium websites and products for ambitious teams."
      />
      <BlogGrid posts={posts} categories={categories} />
      <NewsletterBanner />
    </>
  );
}
