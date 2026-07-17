import { FileText, ExternalLink } from "lucide-react";
import { publications } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const TYPE_LABEL: Record<string, string> = {
  journal: "Journal",
  conference: "Conference",
  preprint: "Preprint",
  thesis: "Thesis",
};

export function Publications() {
  if (publications.length === 0) {
    return (
      <section
        id="publications"
        aria-label="Publications"
        className="py-20 px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionHeading subtitle="Academic Output" title="Publications" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="text-center border border-dashed border-slate-300 rounded-xl py-12 px-6">
              <FileText
                size={32}
                className="text-slate-300 mx-auto mb-3"
                aria-hidden="true"
              />
              <p className="text-slate-500 text-sm">
                Publications will be listed here as they become available.
              </p>
              <p className="text-slate-400 text-xs mt-1">
                Currently focusing on ongoing research projects.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section
      id="publications"
      aria-label="Publications"
      className="py-20 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionHeading subtitle="Academic Output" title="Publications" />
        </FadeIn>

        <StaggerContainer className="space-y-4 max-w-3xl mx-auto">
          {publications.map((pub) => (
            <StaggerItem key={pub.id}>
              <article className="border border-slate-200 rounded-xl p-5 hover:border-slate-400 transition-colors duration-200">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="font-semibold text-slate-900 leading-snug mb-1">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-1">{pub.authors}</p>
                    <p className="text-sm text-slate-500">
                      <span className="italic">{pub.venue}</span>, {pub.year}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
                      {TYPE_LABEL[pub.type] ?? pub.type}
                    </span>
                    {pub.url && pub.url !== "#" && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Read "${pub.title}" (opens in new tab)`}
                        className="p-1.5 text-slate-400 hover:text-blue-700 transition-colors"
                      >
                        <ExternalLink size={16} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
