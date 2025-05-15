"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
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
      <main className="flex-1 container py-10 max-w-5xl mx-auto">
        <div className="flex flex-col mb-8">
          <span className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">
            Track Your Progress
          </span>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">
              Compliance Checklists
            </h1>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm">
              <Plus className="mr-2 h-4 w-4" />
              Create Custom Checklist
            </Button>
          </div>
          <p className="text-slate-500 mt-2 max-w-2xl">
            Track your progress on required documents and permits to stay
            compliant with regulatory requirements.
          </p>
        </div>

        <ChecklistTabs defaultValue={activeTab} tabs={tabs} />
        <PenaltyCalculatorSection />
      </main>
    </div>
  );
}

// Page Component with Provider
export default function Checklist() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  // Check if user is logged in
  useEffect(() => {
    if (!isLoggedIn) {
      // Redirect to login page if not logged in
      setTimeout(() => {
        router.push("/auth/login");
      }, 100);
    } else {
      setIsLoading(false);
    }
  }, [isLoggedIn, router]);

  // Show login prompt if not logged in
  if (!isLoggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center bg-white p-8 rounded-xl shadow-md max-w-md w-full">
          <h2 className="text-xl font-bold mb-4 text-gray-900">
            Login Required
          </h2>
          <p className="text-slate-500 mb-6">
            You need to be logged in to access the compliance checklists.
          </p>
          <Button
            onClick={() => router.push("/auth/login")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            Go to Login
          </Button>
        </div>
      </div>
    );
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4 text-indigo-700">
            Loading Checklists...
          </h2>
          <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <ChecklistProvider>
      <ChecklistContent />
    </ChecklistProvider>
  );
}
