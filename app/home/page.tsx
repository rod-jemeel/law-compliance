"use client";

import HeroSection from "./_sections/hero-section";
import FeaturesSection from "./_sections/features-section";
import ChecklistSection from "./_sections/checklist-section";
import PenaltiesSection from "./_sections/penalties-section";
import CTASection from "./_sections/cta-section";

export default function Home() {
  // Show the regular home page for all users, welcome alert will be shown at the top when logged in
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
