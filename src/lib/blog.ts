import { blogPosts, type BlogPost, type BlogPostMeta } from "@/content/blog/posts";

function byDateDesc(a: BlogPostMeta, b: BlogPostMeta) {
  return b.date.localeCompare(a.date);
}

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(byDateDesc);
}

export function getPostMetaList(): BlogPostMeta[] {
  return getAllPosts().map(({ content: _c, ...meta }) => meta);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export function formatPostDate(date: string): string {
  return new Date(date + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
