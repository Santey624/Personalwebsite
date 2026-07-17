"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/resume";

const SECTION_LINKS = [
  { label: "About", href: "/#about", id: "about" },
  { label: "Publications", href: "/#publications", id: "publications" },
  { label: "Education", href: "/#education", id: "education" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Blog", href: "/blog", id: "blog" },
  { label: "Contact", href: "/#contact", id: "contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const onBlog = pathname.startsWith("/blog");

  useEffect(() => {
    if (onBlog) {
      setActiveSection("blog");
      return;
    }

    const sectionIds = SECTION_LINKS.filter((l) => l.id !== "blog").map(
      (l) => l.id
    );
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onBlog]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSectionClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      setIsOpen(false);
      if (pathname === "/" && id !== "blog") {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    },
    [pathname]
  );

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || onBlog
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-white"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            aria-label="Home"
            className="text-lg font-bold text-slate-900 hover:text-slate-600 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded"
            onClick={() => setIsOpen(false)}
          >
            {siteConfig.name.split(" ")[0]}{" "}
            <span className="text-slate-400">
              {siteConfig.name.split(" ").slice(1).join(" ")}
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-5" role="list">
            {SECTION_LINKS.map(({ label, href, id }) => {
              const isActive = activeSection === id;
              return (
                <li key={id}>
                  <Link
                    href={href}
                    onClick={(e) => handleSectionClick(e, id)}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded ${
                      isActive
                        ? "text-slate-900"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => setIsOpen((o) => !o)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="md:hidden inline-flex items-center justify-center min-h-11 min-w-11 text-slate-700 hover:text-slate-900 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-lg"
          >
            {isOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        role="menu"
        aria-hidden={!isOpen}
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul
          className="bg-white border-t border-slate-100 px-6 py-3 space-y-0.5"
          role="list"
        >
          {SECTION_LINKS.map(({ label, href, id }) => {
            const isActive = activeSection === id;
            return (
              <li key={id} role="none">
                <Link
                  role="menuitem"
                  href={href}
                  onClick={(e) => handleSectionClick(e, id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm font-medium w-full text-left min-h-11 flex items-center px-1 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-lg ${
                    isActive
                      ? "text-slate-900"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
