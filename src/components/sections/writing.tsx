import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPostMetaList, formatPostDate } from "@/lib/blog";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function Writing() {
  const posts = getPostMetaList().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section
      id="writing"
      aria-label="Technical writing"
      className="py-20 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionHeading
            subtitle="Technical Writing"
            title="Blog"
            description="Notes on AI in Japan, NLP, and systems that ship."
          />
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-5 mb-8">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <article className="h-full border border-slate-200 rounded-xl p-6 bg-white hover:border-slate-400 hover:shadow-sm transition-all duration-200 flex flex-col">
                <time
                  dateTime={post.date}
                  className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate-400"
                >
                  {formatPostDate(post.date)}
                </time>
                <h3 className="mt-2 font-bold text-slate-900 tracking-tight leading-snug flex-1">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {post.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.1}>
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded"
            >
              View all posts
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
