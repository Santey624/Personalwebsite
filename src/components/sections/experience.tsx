import { FlaskConical, Briefcase } from "lucide-react";
import { experience } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const TYPE_ICON = {
  research: FlaskConical,
  industry: Briefcase,
} as const;

const TYPE_STYLE = {
  research: "bg-emerald-50 text-emerald-700",
  industry: "bg-violet-50 text-violet-700",
} as const;

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Professional experience"
      className="py-20 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionHeading subtitle="Career Path" title="Experience" />
        </FadeIn>

        <StaggerContainer className="max-w-3xl mx-auto space-y-6">
          {experience.map((entry) => {
            const Icon = TYPE_ICON[entry.type];
            const style = TYPE_STYLE[entry.type];

            return (
              <StaggerItem key={entry.id}>
                <article className="border border-slate-200 rounded-xl p-6 hover:border-slate-400 hover:shadow-sm transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">
                        {entry.role}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {entry.organization} &middot; {entry.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${style}`}
                      >
                        <Icon size={12} aria-hidden="true" />
                        {entry.type === "research" ? "Research" : "Industry"}
                      </span>
                      <span className="text-sm text-slate-500 font-medium">
                        {entry.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {entry.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-slate-600"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
