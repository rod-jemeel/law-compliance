"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { Bell, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ComplianceLogo } from "../_components/logo";
import { RootState } from "@/store";
import { logout } from "../auth/_redux/auth-slice";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  // Get login state from Redux
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  // Check if we're in auth pages to hide the navbar
  const isAuthPage = pathname?.startsWith("/auth");

  // Handle logout
  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  // Return null if we're in auth pages
  if (isAuthPage) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <ComplianceLogo />

        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className={`text-sm font-medium ${
              pathname === "/home" ? "text-[#008DDE]" : "text-black"
            } hover:text-primary`}
          >
            Home
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                href="/dashboard"
                className={`text-sm font-medium ${
                  pathname === "/dashboard" ? "text-[#008DDE]" : "text-black"
                } hover:text-primary`}
              >
                Dashboard
              </Link>
              <Link
                href="/checklist"
                className={`text-sm font-medium ${
                  pathname === "/checklist" ? "text-[#008DDE]" : "text-black"
                } hover:text-primary`}
              >
                Checklist
              </Link>
            </>
          ) : null}

          {/* These links are always visible */}
          <Link
            href="/requirements"
            className={`text-sm font-medium ${
              pathname === "/requirements" ? "text-[#008DDE]" : "text-black"
            } hover:text-primary`}
          >
            Requirements
          </Link>
          <Link
            href="/resources"
            className={`text-sm font-medium ${
              pathname === "/resources" ? "text-[#008DDE]" : "text-black"
            } hover:text-primary`}
          >
            Resources
          </Link>
          <Link
            href="/pricing"
            className={`text-sm font-medium ${
              pathname === "/pricing" ? "text-[#008DDE]" : "text-black"
            } hover:text-primary`}
          >
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Button variant="outline" size="sm" className="hidden md:flex">
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" size="sm" asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/auth/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
