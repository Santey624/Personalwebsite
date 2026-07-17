import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/data/resume";
import { getPostMetaList, formatPostDate } from "@/lib/blog";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Blog",
  description: `Technical writing by ${siteConfig.name} on AI in Japan, NLP, sovereign AI, robotics, and building production AI systems.`,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description: `Technical writing by ${siteConfig.name} on AI, NLP, and Japan's tech ecosystem.`,
    url: `${siteConfig.siteUrl}/blog`,
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getPostMetaList();

  return (
    <main className="pt-24 pb-20 px-6 md:px-16 lg:px-24 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          subtitle="Writing"
          title="Blog"
          description="Notes on AI in Japan, NLP, and building systems that ship — by Santosh Gaire Sharma."
        />

        <ul className="space-y-6" role="list">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="border border-slate-200 rounded-xl p-6 hover:border-slate-400 hover:shadow-sm transition-all duration-200 bg-white">
                <time
                  dateTime={post.date}
                  className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate-400"
                >
                  {formatPostDate(post.date)}
                </time>
                <h2 className="mt-2 text-xl font-bold text-slate-900 tracking-tight">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {post.description}
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
              </article>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
