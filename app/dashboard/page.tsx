"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/hooks";
import { dashboardActions } from "./_redux/dashboard-slice";
import { loadDashboardState } from "./_redux/dashboard-storage";
import DashboardHeader from "./_sections/dashboard-header";
import SummarySection from "./_sections/summary-section";
import ContentGrid from "./_sections/content-grid";
import ChecklistSection from "./_sections/checklist-section";

export default function Dashboard() {
  const dispatch = useAppDispatch();
  // Load dashboard state from local storage on page load
  useEffect(() => {
    const storedState = loadDashboardState();
    if (storedState) {
      dispatch(dashboardActions.loadDashboardState(storedState));
    }

    // Also check for checklist state to sync any recent changes
    const {
      loadChecklistState,
    } = require("../checklist/_redux/checklist-storage");
    const checklistState = loadChecklistState();
    if (checklistState) {
      dispatch(
        dashboardActions.syncComplianceWithChecklist({ checklistState })
      );
    }
  }, [dispatch]);

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
