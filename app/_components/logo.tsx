import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ComplianceLogo() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <Link
      href="/"
      className={`text-xl font-bold ${
        isHomePage ? "text-white" : "text-black"
      }`}
    >
      BP Compliance
    </Link>
  );
}
