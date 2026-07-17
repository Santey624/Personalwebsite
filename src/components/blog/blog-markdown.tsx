import ReactMarkdown from "react-markdown";

export function BlogMarkdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        h2: ({ children }) => (
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3 tracking-tight">
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className="text-slate-600 leading-relaxed mb-4 text-[15px] sm:text-base">
            {children}
          </p>
        ),
        ul: ({ children }) => (
          <ul className="list-disc pl-5 mb-4 space-y-1.5 text-slate-600">
            {children}
          </ul>
        ),
        li: ({ children }) => (
          <li className="leading-relaxed text-[15px] sm:text-base">{children}</li>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-slate-800">{children}</strong>
        ),
        hr: () => <hr className="my-10 border-slate-200" />,
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-blue-700 hover:underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
