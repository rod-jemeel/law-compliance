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

  // Handle login and signup navigation
  const handleLogin = () => {
    router.push("/auth/login");
  };

  const handleSignup = () => {
    router.push("/auth/signup");
  };

  // Return null if we're in auth pages
  if (isAuthPage) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center">
        <div className="flex-1">
          <ComplianceLogo />
        </div>

        <nav className="hidden md:flex gap-8 justify-center flex-1">
          <Link
            href="/home"
            className={`text-sm font-medium transition-colors ${
              pathname === "/home" ? "text-indigo-600" : "text-gray-700"
            } hover:text-indigo-600`}
          >
            Home
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                href="/dashboard"
                className={`text-sm font-medium transition-colors ${
                  pathname === "/dashboard"
                    ? "text-indigo-600"
                    : "text-gray-700"
                } hover:text-indigo-600`}
              >
                Dashboard
              </Link>
              <Link
                href="/checklist"
                className={`text-sm font-medium transition-colors ${
                  pathname === "/checklist"
                    ? "text-indigo-600"
                    : "text-gray-700"
                } hover:text-indigo-600`}
              >
                Checklist
              </Link>
            </>
          ) : null}

          <Link
            href="/requirements"
            className={`text-sm font-medium transition-colors ${
              pathname === "/requirements" ? "text-indigo-600" : "text-gray-700"
            } hover:text-indigo-600`}
          >
            Requirements
          </Link>
          <Link
            href="/resources"
            className={`text-sm font-medium transition-colors ${
              pathname === "/resources" ? "text-indigo-600" : "text-gray-700"
            } hover:text-indigo-600`}
          >
            Resources
          </Link>
          <Link
            href="/pricing"
            className={`text-sm font-medium transition-colors ${
              pathname === "/pricing" ? "text-indigo-600" : "text-gray-700"
            } hover:text-indigo-600`}
          >
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-4 flex-1 justify-end">
          {isLoggedIn ? (
            <>
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-800"
              >
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-800"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogin}
                className="border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-800"
              >
                Login
              </Button>
              <Button
                size="sm"
                onClick={handleSignup}
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
