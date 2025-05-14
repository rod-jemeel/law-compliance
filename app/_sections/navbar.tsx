"use client";

import Link from "next/link";
import { Bell, FileCheck2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <FileCheck2 className="h-6 w-6 text-primary" />
          <span>PermitTracker</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/dashboard"
            className="text-sm font-medium hover:text-primary"
          >
            Dashboard
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Checklists
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Requirements
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Resources
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
}
