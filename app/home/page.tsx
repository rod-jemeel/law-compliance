"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Button } from "@/components/ui/button";
import HeroSection from "./_sections/hero-section";
import FeaturesSection from "./_sections/features-section";
import ChecklistSection from "./_sections/checklist-section";
import PenaltiesSection from "./_sections/penalties-section";
import CTASection from "./_sections/cta-section";

export default function Home() {
  const router = useRouter();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  // Function to navigate to dashboard
  const goToDashboard = () => {
    router.push("/dashboard");
  };

  // If user is logged in, show a welcome message with a quick access button
  // but don't automatically redirect
  if (isLoggedIn) {
    return (
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          <div className="bg-primary/5 bg-gray-200/25 py-12 px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              You&apos;re logged in. You can continue exploring our features or
              go to your dashboard.
            </p>
            <Button onClick={goToDashboard} className="mb-8">
              Go to Dashboard
            </Button>
          </div>
          <HeroSection />
          <FeaturesSection />
          <ChecklistSection />
          <PenaltiesSection />
          <CTASection />
        </main>
      </div>
    );
  }

  // Show the regular public home page for non-logged in users
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ChecklistSection />
        <PenaltiesSection />
        <CTASection />
      </main>
    </div>
  );
}
