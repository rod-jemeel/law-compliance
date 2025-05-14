"use client";

import { useAppSelector } from "@/hooks/hooks";
import { RootState } from "@/store";
import BusinessesSection from "./businesses-section";
import DeadlinesSection from "./deadlines-section";

export default function ContentGrid() {
  const state = useAppSelector((state: RootState) => state.dashboardState);

  return (
    <div className="grid gap-6 lg:grid-cols-2 mb-8">
      <BusinessesSection />
      <DeadlinesSection />
    </div>
  );
}
