import React from "react";

import { HeroSection } from "./_sections/hero-section";
import { FeaturesSection } from "./_sections/features-section";
import { DeadlinesSection } from "./_sections/deadlines-section";
import { AgenciesSection } from "./_sections/agencies-section";
import { CTASection } from "./_sections/cta-section";

export default function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center p-4 md:p-8 gap-8 max-w-7xl mx-auto">
      <HeroSection />
      <FeaturesSection />
      <DeadlinesSection />
      <AgenciesSection />
      <CTASection />
    </div>
  );
}
