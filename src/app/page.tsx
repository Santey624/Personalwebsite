import { Hero } from "@/components/sections/hero";
import { Research } from "@/components/sections/research";
import { Publications } from "@/components/sections/publications";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { SkillsProjects } from "@/components/sections/skills-projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Research />
      <Publications />
      <Education />
      <Experience />
      <SkillsProjects />
      <Contact />
    </main>
  );
}
