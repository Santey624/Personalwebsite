import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/data/resume";
import {
  getAllSlugs,
  getPostBySlug,
  formatPostDate,
} from "@/lib/blog";
import { BlogMarkdown } from "@/components/blog/blog-markdown";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };

  const url = `${siteConfig.siteUrl}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
    alternates: { canonical: `/blog/${post.slug}` },
    keywords: [
      siteConfig.name,
      "Santosh Gaire Sharma",
      ...post.tags,
      "blog",
    ],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      siteName: siteConfig.name,
      publishedTime: post.date,
      authors: [siteConfig.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${siteConfig.siteUrl}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    mainEntityOfPage: url,
    url,
    keywords: post.tags.join(", "),
  };

  return (
    <main className="pt-24 pb-20 px-6 md:px-16 lg:px-24 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          All posts
        </Link>

        <header className="mb-10">
          <time
            dateTime={post.date}
            className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate-400"
          >
            {formatPostDate(post.date)}
          </time>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed">
            {post.description}
          </p>
          <p className="mt-3 text-sm text-slate-500">
            By{" "}
            <Link href="/" className="text-slate-800 font-medium hover:underline">
              {siteConfig.name}
            </Link>
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="border-t border-slate-100 pt-8">
          <BlogMarkdown content={post.content} />
        </div>

        {post.linkedInNote && (
          <p className="mt-12 pt-6 border-t border-slate-100 text-sm text-slate-400 italic">
            {post.linkedInNote}
          </p>
        )}
      </article>
    </main>
  );
}
