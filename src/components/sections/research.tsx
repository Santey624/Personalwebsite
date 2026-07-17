import {
  Microscope,
  MessageSquareText,
  HeartPulse,
  Bot,
  Languages,
  ShieldCheck,
  Globe2,
} from "lucide-react";
import { siteConfig, researchInterests } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const ICONS: Record<string, React.ReactNode> = {
  "low-resource": <Languages size={24} aria-hidden="true" />,
  multilingual: <Globe2 size={24} aria-hidden="true" />,
  "medical-ai": <HeartPulse size={24} aria-hidden="true" />,
  "ai-safety": <ShieldCheck size={24} aria-hidden="true" />,
  "agentic-ai": <Bot size={24} aria-hidden="true" />,
  nlp: <MessageSquareText size={24} aria-hidden="true" />,
};

export function Research() {
  return (
    <section
      id="about"
      aria-label="Research interests"
      className="py-20 px-6 md:px-16 lg:px-24 bg-slate-50"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionHeading subtitle="Research Focus" title="About My Research" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-slate-600 leading-relaxed text-base max-w-3xl mx-auto text-center mb-6">
            {siteConfig.researchStatement}
          </p>
          <p className="text-slate-500 leading-relaxed text-sm max-w-2xl mx-auto text-center mb-14">
            {siteConfig.personalInterests}
          </p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 gap-5">
          {researchInterests.map((interest) => (
            <StaggerItem key={interest.id}>
              <article className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-400 hover:shadow-sm transition-all duration-200 h-full">
                <div className="flex items-start gap-4">
                  <div className="text-blue-700 mt-0.5 shrink-0">
                    {ICONS[interest.id] ?? (
                      <Microscope size={24} aria-hidden="true" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1.5">
                      {interest.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {interest.description}
                    </p>
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
