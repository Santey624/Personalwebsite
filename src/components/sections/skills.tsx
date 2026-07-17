"use client";

import { useMemo } from "react";
import {
  DOMAIN_ORDER,
  SKILL_DOMAIN_META,
  skills,
  skillsByDomain,
  skillById,
  projectById,
  type Skill,
  type SkillDomain,
} from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/motion";
import {
  useSkillsProjects,
  type DomainFilter,
} from "@/components/sections/skills-projects-context";

function skillSizeClass(level: Skill["level"]) {
  if (level === 3) return "text-sm px-3.5 py-2 font-semibold";
  if (level === 2) return "text-sm px-3 py-1.5 font-medium";
  return "text-xs px-2.5 py-1 font-medium";
}

export function Skills() {
  const {
    domainFilter,
    setDomainFilter,
    selectedSkillId,
    selectedProjectId,
    relatedSkillIds,
    selectSkill,
    clearSelection,
  } = useSkillsProjects();

  const visibleSkills = useMemo(() => {
    if (domainFilter === "all") return skills;
    return skillsByDomain.get(domainFilter) ?? [];
  }, [domainFilter]);

  const grouped = useMemo(() => {
    if (domainFilter !== "all") {
      return [
        {
          domain: domainFilter as SkillDomain,
          items: visibleSkills,
        },
      ];
    }
    return DOMAIN_ORDER.map((domain) => ({
      domain,
      items: skillsByDomain.get(domain) ?? [],
    }));
  }, [domainFilter, visibleSkills]);

  const selectedSkill = selectedSkillId
    ? skillById.get(selectedSkillId) ?? null
    : null;

  const hasSelection = Boolean(selectedSkillId || selectedProjectId);

  return (
    <section
      id="skills"
      aria-label="Technical skills"
      className="py-20 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionHeading
            subtitle="Technical Proficiency"
            title="Skills"
            description="Research and data science first — engineering and infrastructure as supporting depth. Select a skill to highlight related work."
          />
        </FadeIn>

        {/* Domain filters */}
        <FadeIn delay={0.05}>
          <div
            role="toolbar"
            aria-label="Filter skills by domain"
            className="flex flex-wrap justify-center gap-1.5 mb-10 p-1 rounded-xl border border-slate-200 bg-slate-50/80 max-w-3xl mx-auto"
          >
            <FilterChip
              label="All"
              active={domainFilter === "all"}
              primary
              onClick={() => setDomainFilter("all")}
            />
            {DOMAIN_ORDER.map((domain) => {
              const meta = SKILL_DOMAIN_META[domain];
              return (
                <FilterChip
                  key={domain}
                  label={meta.short}
                  active={domainFilter === domain}
                  primary={meta.primary}
                  onClick={() => setDomainFilter(domain as DomainFilter)}
                />
              );
            })}
          </div>
        </FadeIn>

        {/* Constellation */}
        <div className="space-y-8">
          {grouped.map(({ domain, items }) => {
            const meta = SKILL_DOMAIN_META[domain];
            return (
              <div key={domain}>
                <div className="flex items-baseline gap-3 mb-3">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400">
                    {meta.label}
                  </h3>
                  {!meta.primary && (
                    <span className="text-[11px] text-slate-400 font-medium">
                      supporting
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => {
                    const isSelected = selectedSkillId === skill.id;
                    const isRelated =
                      selectedProjectId !== null &&
                      relatedSkillIds.has(skill.id);
                    const isDimmed =
                      hasSelection && !isSelected && !isRelated;

                    return (
                      <button
                        key={skill.id}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => selectSkill(skill.id)}
                        className={[
                          "rounded-lg border transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2",
                          skillSizeClass(skill.level),
                          isSelected
                            ? "bg-slate-900 text-white border-slate-900 shadow-sm scale-[1.02]"
                            : isRelated
                              ? "bg-blue-50 text-blue-800 border-blue-200"
                              : meta.primary
                                ? "bg-white text-slate-800 border-slate-200 hover:border-slate-400"
                                : "bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300",
                          isDimmed ? "opacity-35" : "opacity-100",
                        ].join(" ")}
                      >
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detail strip */}
        <div
          className={[
            "mt-10 rounded-xl border px-5 py-4 transition-all duration-200",
            selectedSkill
              ? "border-slate-300 bg-slate-50"
              : "border-dashed border-slate-200 bg-transparent",
          ].join(" ")}
          aria-live="polite"
        >
          {selectedSkill ? (
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate-400 mb-1">
                  {SKILL_DOMAIN_META[selectedSkill.domain].label}
                </p>
                <p className="text-slate-900 font-semibold">
                  {selectedSkill.name}
                  <span className="ml-2 text-xs font-medium text-slate-500">
                    {selectedSkill.level === 3
                      ? "Core"
                      : selectedSkill.level === 2
                        ? "Strong"
                        : "Supporting"}
                  </span>
                </p>
                {selectedSkill.relatedProjectIds.length > 0 ? (
                  <p className="text-sm text-slate-600 mt-1">
                    Related:{" "}
                    {selectedSkill.relatedProjectIds.map((pid, i) => {
                      const project = projectById.get(pid);
                      if (!project) return null;
                      return (
                        <span key={pid}>
                          {i > 0 && ", "}
                          <a
                            href="#projects"
                            className="text-blue-700 hover:underline font-medium"
                            onClick={() => {
                              /* selection already set via skill; scroll handled by hash */
                            }}
                          >
                            {project.title}
                          </a>
                        </span>
                      );
                    })}
                  </p>
                ) : (
                  <p className="text-sm text-slate-500 mt-1">
                    Foundational capability across the stack.
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={clearSelection}
                className="shrink-0 text-sm text-slate-500 hover:text-slate-900 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded"
              >
                Clear
              </button>
            </div>
          ) : (
            <p className="text-sm text-slate-500 text-center">
              Select a skill to see related projects below.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function FilterChip({
  label,
  active,
  primary,
  onClick,
}: {
  label: string;
  active: boolean;
  primary: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={[
        "px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900",
        active
          ? primary
            ? "bg-slate-900 text-white"
            : "bg-slate-700 text-white"
          : "text-slate-600 hover:text-slate-900 hover:bg-white",
      ].join(" ")}
    >
      {label}
    </button>
  );
}
