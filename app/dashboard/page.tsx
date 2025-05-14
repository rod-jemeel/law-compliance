"use client";

import DashboardHeader from "./_sections/dashboard-header";
import SummarySection from "./_sections/summary-section";
import ContentGrid from "./_sections/content-grid";
import ChecklistSection from "./_sections/checklist-section";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <DashboardHeader />
          <SummarySection />
          <ContentGrid />
          <ChecklistSection />
        </div>
      </main>
    </div>
  );
}
