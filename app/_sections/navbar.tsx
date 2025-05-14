"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Bell, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ComplianceLogo } from "../_components/logo";
import { authService } from "../auth/_services/auth-service";

export default function Navbar() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if we're in auth pages to hide the navbar
  const isAuthPage = pathname?.startsWith("/auth");

  // Update login state from localStorage on client side
  useEffect(() => {
    setIsLoggedIn(authService.isLoggedIn());

    // Setup listener for storage changes to update state across tabs/windows
    const handleStorageChange = () => {
      setIsLoggedIn(authService.isLoggedIn());
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Handle logout
  const handleLogout = () => {
    authService.logout();
    setIsLoggedIn(false);
    window.location.href = "/";
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
          {isLoggedIn ? (
            <>
              <Link
                href="/dashboard"
                className="text-sm font-medium hover:text-primary"
              >
                Dashboard
              </Link>
              <Link
                href="/checklist"
                className="text-sm font-medium hover:text-primary"
              >
                Checklist
              </Link>
            </>
          ) : null}

          {/* These links are always visible */}
          <Link
            href="/requirements"
            className="text-sm font-medium hover:text-primary"
          >
            Requirements
          </Link>
          <Link
            href="/resources"
            className="text-sm font-medium hover:text-primary"
          >
            Resources
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
