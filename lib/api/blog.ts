import { blogPosts } from "@/lib/constants/blog";

export type BlogPostItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
};

function toItem(post: (typeof blogPosts)[number]): BlogPostItem {
  return { ...post, content: [...post.content] };
}

export async function getBlogPosts(): Promise<BlogPostItem[]> {
  return blogPosts.map(toItem);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostItem | null> {
  const post = blogPosts.find((p) => p.slug === slug);
  return post ? toItem(post) : null;
}

export function getBlogCategories(posts: BlogPostItem[]): string[] {
  return ["All", ...Array.from(new Set(posts.map((post) => post.category)))];
}
