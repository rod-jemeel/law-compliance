"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import HeroSection from "./_sections/hero-section";
import FeaturesSection from "./_sections/features-section";
import ChecklistSection from "./_sections/checklist-section";
import DeadlinesSection from "./_sections/deadlines-section";
import PenaltiesSection from "./_sections/penalties-section";
import CTASection from "./_sections/cta-section";
import { authService } from "../auth/_services/auth-service";

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(authService.isLoggedIn());

    // If user is logged in, redirect them to dashboard
    if (authService.isLoggedIn()) {
      setTimeout(() => {
        router.push("/dashboard");
      }, 100);
    }
  }, [router]);

  // If user is logged in, show a loading state or redirect
  if (isLoggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">You are logged in!</h2>
          <p className="text-muted-foreground mb-6">
            Redirecting to your dashboard...
          </p>
          <Button onClick={() => router.push("/dashboard")}>
            Go to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  // Otherwise show the public home page
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ChecklistSection />
        <DeadlinesSection />
        <PenaltiesSection />
        <CTASection />
      </main>
    </div>
  );
}
