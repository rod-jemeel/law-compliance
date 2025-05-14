import { DashboardState } from "./dashboard-state";

// Local storage key for the dashboard state
const DASHBOARD_STORAGE_KEY = "law-compliance-dashboard-state";

/**
 * Save the dashboard state to local storage
 */
export const saveDashboardState = (state: DashboardState): void => {
  if (typeof window !== "undefined") {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(DASHBOARD_STORAGE_KEY, serializedState);
    } catch (error) {
      console.error("Failed to save dashboard state to local storage:", error);
    }
  }
};

/**
 * Load the dashboard state from local storage
 * Returns null if no state is found or if there's an error parsing it
 */
export const loadDashboardState = (): DashboardState | null => {
  if (typeof window !== "undefined") {
    try {
      const serializedState = localStorage.getItem(DASHBOARD_STORAGE_KEY);

      if (!serializedState) {
        return null;
      }

      return JSON.parse(serializedState);
    } catch (error) {
      console.error(
        "Failed to load dashboard state from local storage:",
        error
      );
      return null;
    }
  }

  return null;
};
