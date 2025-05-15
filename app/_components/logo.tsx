import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ComplianceLogo() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isDarkBg =
    pathname === "/home" || isHomePage || pathname?.includes("cta-section");

  return (
    <Link
      href="/"
      className={`flex items-center gap-2 text-xl font-bold transition-colors`}
    >
      <div className="flex items-center justify-center h-8 w-8 rounded-md bg-indigo-600 text-white font-bold text-xs">
        BP
      </div>
      <span className={isDarkBg ? "text-indigo-700" : "text-indigo-700"}>
        Compliance
      </span>
    </Link>
  );
}
