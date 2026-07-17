import { siteConfig } from "@/data/resume";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      aria-label="Site footer"
      className="border-t border-slate-100 bg-white py-8 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
        <p>
          &copy; {year}{" "}
          <span className="font-medium text-slate-700">{siteConfig.name}</span>.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
