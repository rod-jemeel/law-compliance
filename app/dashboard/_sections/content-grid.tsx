"use client";

import BusinessesSection from "./businesses-section";
import DeadlinesSection from "./deadlines-section";

export default function ContentGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-2 mb-8">
      <BusinessesSection />
      <DeadlinesSection />
    </div>
  );
}
