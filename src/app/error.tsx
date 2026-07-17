"use client";

import { useEffect } from "react";
import { RefreshCw } from "lucide-react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log to your error reporting service in production
    console.error("[App Error]", error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="text-center max-w-md">
        <p className="text-gray-500 text-sm font-medium mb-2">Oops</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 mb-8">
          An unexpected error occurred. Please try refreshing the page.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-700 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
        >
          <RefreshCw size={16} aria-hidden="true" />
          Try again
        </button>
      </div>
    </main>
  );
}
