"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ComplianceLogo } from "../_components/logo";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { rootActions } from "../_redux/root-slice";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const scrolled = useAppSelector((state) => state.rootState);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        dispatch(rootActions.setScrolled(true));
      } else {
        dispatch(rootActions.setScrolled(false));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      {" "}
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <ComplianceLogo />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            ComplianceAssist
          </span>
        </Link>{" "}
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/home"
            className="text-sm font-medium hover:text-primary transition-colors relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/checklist"
            className="text-sm font-medium hover:text-primary transition-colors relative group"
          >
            Checklists
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/deadlines"
            className="text-sm font-medium hover:text-primary transition-colors relative group"
          >
            Deadlines
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/guides"
            className="text-sm font-medium hover:text-primary transition-colors relative group"
          >
            Guides
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-primary transition-colors relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />{" "}
          <Button
            size="sm"
            variant="default"
            className="hidden md:inline-flex transition-transform hover:scale-105"
          >
            Get Started
          </Button>
          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuItem asChild>
                <Link href="/home" className="w-full cursor-pointer">
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/checklist" className="w-full cursor-pointer">
                  Checklists
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/deadlines" className="w-full cursor-pointer">
                  Deadlines
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/guides" className="w-full cursor-pointer">
                  Guides
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/contact" className="w-full cursor-pointer">
                  Contact
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Button variant="default" className="mt-2 w-full">
                  Get Started
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
