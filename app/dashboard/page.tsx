"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/hooks/hooks";
import { useSelector } from "react-redux";
import { dashboardActions } from "./_redux/dashboard-slice";
import { loadDashboardState } from "./_redux/dashboard-storage";
import DashboardHeader from "./_sections/dashboard-header";
import SummarySection from "./_sections/summary-section";
import ContentGrid from "./_sections/content-grid";
import ChecklistSection from "./_sections/checklist-section";
import { loadChecklistState } from "../checklist/_redux/checklist-storage";
import { Button } from "@/components/ui/button";
import { RootState } from "@/store";

export default function Dashboard() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  // Get auth state from Redux
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

  // Load dashboard state from local storage on page load
  useEffect(() => {
    if (!isLoggedIn) return;

    const storedState = loadDashboardState();
    if (storedState) {
      dispatch(dashboardActions.loadDashboardState(storedState));
    }

    // Also check for checklist state to sync any recent changes
    const checklistState = loadChecklistState();
    if (checklistState) {
      dispatch(
        dashboardActions.syncComplianceWithChecklist({ checklistState })
      );
    }
  }, [dispatch, isLoggedIn]);

  // Show login prompt if not logged in
  if (!isLoggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Login Required</h2>
          <p className="text-muted-foreground mb-6">
            You need to be logged in to access the dashboard.
          </p>
          <Button onClick={() => router.push("/auth/login")}>
            Go to Login
          </Button>
        </div>
      </div>
    );
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Loading Dashboard...</h2>
        </div>
      </div>
    );
  }

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
