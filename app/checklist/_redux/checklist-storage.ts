import { ChecklistState, ChecklistStateSchema } from "./checklist-schema";

// Local storage key for the checklist state
const CHECKLIST_STORAGE_KEY = "law-compliance-checklist-state";

/**
 * Save the checklist state to local storage
 */
export const saveChecklistState = (state: ChecklistState): void => {
  if (typeof window !== "undefined") {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(CHECKLIST_STORAGE_KEY, serializedState);
    } catch (error) {
      console.error("Failed to save checklist state to local storage:", error);
    }
  }
};

/**
 * Load the checklist state from local storage
 * Returns null if no state is found or if there's an error parsing it
 */
export const loadChecklistState = (): ChecklistState | null => {
  if (typeof window !== "undefined") {
    try {
      const serializedState = localStorage.getItem(CHECKLIST_STORAGE_KEY);

      if (!serializedState) {
        return null;
      }

      const parsedState = JSON.parse(serializedState);

      // Validate the parsed state against our schema
      const result = ChecklistStateSchema.safeParse(parsedState);

      if (result.success) {
        return result.data;
      } else {
        console.error(
          "Invalid checklist state format in local storage:",
          result.error
        );
        return null;
      }
    } catch (error) {
      console.error(
        "Failed to load checklist state from local storage:",
        error
      );
      return null;
    }
  }

  return null;
};
