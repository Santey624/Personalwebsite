"use client";

import Image from "next/image";
import { Github, Linkedin, Download, GraduationCap } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/resume";

export function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="min-h-[calc(100vh-4rem)] flex items-center px-6 md:px-16 lg:px-24 py-24"
    >
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-[260px_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-slate-200 shadow-sm bg-slate-100">
            {imgError ? (
              <div
                role="img"
                aria-label={siteConfig.name}
                className="w-full h-full flex items-center justify-center bg-slate-100 text-4xl font-bold text-slate-400 select-none"
              >
                {siteConfig.name.charAt(0)}
              </div>
            ) : (
              <Image
                src={siteConfig.photo}
                alt={`Portrait of ${siteConfig.name}`}
                fill
                sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                className="object-cover"
                onError={() => setImgError(true)}
                priority
              />
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-2 tracking-tight">
            {siteConfig.name}
          </h1>

          <p className="text-lg sm:text-xl font-medium text-slate-600 mb-2">
            {siteConfig.title}
          </p>

          <p className="text-sm text-slate-500 mb-3">
            {siteConfig.location} · Open to collaborations in Japan · JLPT N4 → N3
            (2027)
          </p>

          <p className="text-base text-blue-700 font-medium mb-6 italic">
            {siteConfig.tagline}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="flex flex-wrap gap-3 justify-center md:justify-start mb-5"
          >
            {siteConfig.hasCv ? (
              <a
                href={siteConfig.cvUrl}
                download
                aria-label="Download CV"
                className="inline-flex items-center gap-2 min-h-11 px-5 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
              >
                <Download size={16} aria-hidden="true" />
                Download CV
              </a>
            ) : null}

            <a
              href="#contact"
              className="inline-flex items-center gap-2 min-h-11 px-5 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            >
              Get in touch
            </a>

            {siteConfig.googleScholarUrl ? (
              <a
                href={siteConfig.googleScholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Scholar profile (opens in new tab)"
                className="inline-flex items-center gap-2 min-h-11 px-5 py-2.5 border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:border-slate-900 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
              >
                <GraduationCap size={16} aria-hidden="true" />
                Google Scholar
              </a>
            ) : null}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
            className="flex gap-3 justify-center md:justify-start"
          >
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in new tab)"
              className="inline-flex items-center justify-center min-h-11 min-w-11 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            >
              <Github size={18} aria-hidden="true" />
            </a>
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in new tab)"
              className="inline-flex items-center justify-center min-h-11 min-w-11 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
