import { fetchPublicRaw } from "@/lib/api/client";
import { blogPosts as staticBlogPosts } from "@/lib/constants/blog";

export type BlogPostItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
};

export async function getBlogPosts(): Promise<BlogPostItem[]> {
  const items = await fetchPublicRaw<BlogPostItem[]>("/blog");
  if (!items || items.length === 0)
    return staticBlogPosts.map((p) => ({ ...p, content: [...p.content] }));
  return items.map((item) => ({
    slug: item.slug,
    title: item.title,
    excerpt: item.excerpt,
    category: item.category,
    date: item.date,
    readTime: item.readTime,
    content: item.content,
  }));
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostItem | null> {
  const item = await fetchPublicRaw<BlogPostItem>(`/blog/${slug}`);
  if (item) return item;

  const fallback = staticBlogPosts.find((p) => p.slug === slug);
  if (!fallback) return null;
  return { ...fallback, content: [...fallback.content] };
}

export function getBlogCategories(posts: BlogPostItem[]): string[] {
  return ["All", ...Array.from(new Set(posts.map((post) => post.category)))];
}
