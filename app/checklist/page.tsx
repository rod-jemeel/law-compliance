"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChecklistTabs } from "./_components";
import { ChecklistProvider, useChecklist } from "./_redux/checklist-context";
import {
  NationalRequirementsSection,
  LocalRequirementsSection,
  RenewalRequirementsSection,
  RenewalDocumentsSection,
  PenaltyCalculatorSection,
} from "./_sections";

// Client Components wrapper
function ChecklistContent() {
  const { state } = useChecklist();
  const { activeTab } = state;

  // Define the content for each tab
  const newBusinessContent = (
    <div className="grid gap-6 md:grid-cols-2 mx-auto">
      <NationalRequirementsSection />
      <LocalRequirementsSection />
    </div>
  );

  const renewalContent = (
    <div className="grid gap-6 md:grid-cols-2 mx-auto">
      <RenewalRequirementsSection />
      <RenewalDocumentsSection />
    </div>
  );

  // Define tabs
  const tabs = [
    {
      id: "new",
      label: "New Business Registration",
      content: newBusinessContent,
    },
    {
      id: "renewal",
      label: "Annual Renewal",
      content: renewalContent,
    },
  ];
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container py-6 max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Compliance Checklists</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Custom Checklist
          </Button>
        </div>

        <ChecklistTabs defaultValue={activeTab} tabs={tabs} />
        <PenaltyCalculatorSection />
      </main>
    </div>
  );
}

// Page Component with Provider
export default function Checklist() {
  return (
    <ChecklistProvider>
      <ChecklistContent />
    </ChecklistProvider>
  );
}
