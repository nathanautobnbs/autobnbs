"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <h2 className="font-display font-bold text-gray-900 text-2xl mb-3">
          Something went wrong
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 bg-gold-gradient text-gray-900 font-display font-semibold text-sm px-6 py-3 rounded-full hover:scale-105 transition-all duration-200"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
