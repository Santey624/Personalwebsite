import { GraduationCap, BookOpen } from "lucide-react";
import { education } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function Education() {
  return (
    <section
      id="education"
      aria-label="Education"
      className="py-20 px-6 md:px-16 lg:px-24 bg-slate-50"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionHeading subtitle="Academic Background" title="Education" />
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu) => (
            <StaggerItem key={edu.id}>
              <article className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-400 hover:shadow-sm transition-all duration-200 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
                    <GraduationCap size={20} aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium text-slate-500">
                    {edu.period}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-lg mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm font-medium text-slate-700 mb-1">
                  {edu.field}
                </p>
                <p className={`text-sm text-slate-500 ${edu.lab ? "mb-1" : "mb-4"}`}>
                  {edu.university} &middot; {edu.location}
                </p>
                {edu.lab && (
                  <p className="text-sm text-blue-700 font-medium mb-4">
                    {edu.lab}
                  </p>
                )}

                {edu.thesis && (
                  <div className="mb-4">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                      <BookOpen size={12} aria-hidden="true" />
                      Thesis / Research
                    </div>
                    <p className="text-sm text-slate-600 italic">
                      {edu.thesis}
                    </p>
                  </div>
                )}

                {edu.coursework && edu.coursework.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Key Coursework
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
