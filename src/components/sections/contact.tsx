import { Mail, Linkedin, Github } from "lucide-react";
import { siteConfig } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/motion";

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact information"
      className="py-20 px-6 md:px-16 lg:px-24 bg-slate-50"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionHeading subtitle="Get In Touch" title="Contact" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-slate-600 text-center max-w-xl mx-auto mb-10">
            Currently based in Osaka, Japan. I am open to PhD opportunities,
            research collaborations across Japan, and discussions about AI, NLP,
            data science, and healthcare. Feel free to reach out.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label={`Send email to ${siteConfig.email}`}
              className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            >
              <Mail size={18} aria-hidden="true" />
              {siteConfig.email}
            </a>

            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn (opens in new tab)"
              className="inline-flex items-center gap-3 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:border-slate-900 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            >
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>

            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub profile (opens in new tab)"
              className="inline-flex items-center gap-3 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:border-slate-900 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            >
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
