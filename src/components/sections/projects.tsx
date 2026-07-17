"use client";

import { Github, ExternalLink } from "lucide-react";
import {
  researchProjects,
  SKILL_DOMAIN_META,
  type ResearchProject,
} from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/motion";
import { useSkillsProjects } from "@/components/sections/skills-projects-context";

const STATUS_STYLES: Record<
  ResearchProject["status"],
  string
> = {
  research: "bg-emerald-50 text-emerald-800 border-emerald-100",
  published: "bg-blue-50 text-blue-800 border-blue-100",
  production: "bg-violet-50 text-violet-800 border-violet-100",
};

const STATUS_LABEL: Record<ResearchProject["status"], string> = {
  research: "Research",
  published: "Published",
  production: "Production",
};

export function Projects() {
  const {
    selectedSkillId,
    selectedProjectId,
    relatedProjectIds,
    selectProject,
    domainFilter,
  } = useSkillsProjects();

  const hasSkillSelection = selectedSkillId !== null;

  const visible = researchProjects.filter((project) => {
    if (domainFilter === "all") return true;
    return project.domains.includes(domainFilter);
  });

  return (
    <section
      id="projects"
      aria-label="Research projects"
      className="py-20 px-6 md:px-16 lg:px-24 bg-slate-50"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionHeading
            subtitle="Selected Work"
            title="Projects"
            description="Flagship research first. Click a project to highlight the skills behind it — or filter via Skills above."
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-5">
          {visible.map((project) => {
            const isSelected = selectedProjectId === project.id;
            const isRelated =
              hasSkillSelection && relatedProjectIds.has(project.id);
            const isDimmed =
              (hasSkillSelection || selectedProjectId !== null) &&
              !isSelected &&
              !isRelated;
            const isFeatured = Boolean(project.featured);

            return (
              <article
                key={project.id}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                onClick={() => selectProject(project.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    selectProject(project.id);
                  }
                }}
                className={[
                  "bg-white border rounded-xl p-6 flex flex-col text-left cursor-pointer transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2",
                  isSelected
                    ? "border-slate-900 shadow-md scale-[1.01]"
                    : isRelated
                      ? "border-blue-300 shadow-sm"
                      : isFeatured
                        ? "border-slate-200 hover:border-slate-400 hover:shadow-sm"
                        : "border-slate-200/80 hover:border-slate-300",
                  isDimmed ? "opacity-40" : "opacity-100",
                ].join(" ")}
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span
                    className={[
                      "text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-md border",
                      STATUS_STYLES[project.status],
                    ].join(" ")}
                  >
                    {STATUS_LABEL[project.status]}
                  </span>
                  {project.outcome && (
                    <span className="font-mono text-[11px] text-slate-500 tracking-tight">
                      {project.outcome}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-slate-900 text-lg mb-2 tracking-tight">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.domains.slice(0, 2).map((d) => (
                    <span
                      key={d}
                      className="text-[10px] font-mono uppercase tracking-wider text-slate-400"
                    >
                      {SKILL_DOMAIN_META[d].short}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div
                  className="flex gap-3 pt-3 border-t border-slate-100"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub (opens in new tab)`}
                      className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded"
                    >
                      <Github size={14} aria-hidden="true" />
                      Code
                    </a>
                  )}
                  {project.paperUrl && (
                    <a
                      href={project.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Read ${project.title} paper (opens in new tab)`}
                      className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded"
                    >
                      <ExternalLink size={14} aria-hidden="true" />
                      Paper
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-sm text-slate-500 mt-8">
            No projects in this domain — try All or another filter.
          </p>
        )}
      </div>
    </section>
  );
}
