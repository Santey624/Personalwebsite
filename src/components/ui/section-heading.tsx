interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  subtitle,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400 font-medium mb-3">
        {subtitle}
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-slate-900 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
