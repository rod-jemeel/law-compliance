"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-slate-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-slate-600 md:text-left">
            &copy; 2025 BP Compliance. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6">
          <Link
            href="/terms"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
