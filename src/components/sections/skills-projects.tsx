"use client";

import { SkillsProjectsProvider } from "@/components/sections/skills-projects-context";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";

export function SkillsProjects() {
  return (
    <SkillsProjectsProvider>
      <Skills />
      <Projects />
    </SkillsProjectsProvider>
  );
}
