import { createContext, useContext, useEffect, ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { ChecklistState } from "./checklist-schema";
import {
  setActiveTab,
  toggleChecklistItem,
  updatePenaltyCalculator,
  calculatePenalties,
  loadState,
} from "./checklist-slice";
import { saveChecklistState, loadChecklistState } from "./checklist-storage";

// Create a type for the context value
interface ChecklistContextValue {
  state: ChecklistState;
  setActiveTab: (tab: "new" | "renewal") => void;
  toggleChecklistItem: (
    section: keyof Omit<ChecklistState, "activeTab" | "penaltyCalculator">,
    itemKey: string
  ) => void;
  updatePenaltyCalculator: (values: {
    taxAmount?: number;
    monthsOverdue?: number;
  }) => void;
  calculatePenalties: () => void;
  saveState: () => void;
}

// Create the context
const ChecklistContext = createContext<ChecklistContextValue | undefined>(
  undefined
);

// Provider component
interface ChecklistProviderProps {
  children: ReactNode;
}

export function ChecklistProvider({ children }: ChecklistProviderProps) {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.checklist);

  // Load state from local storage on initial render
  useEffect(() => {
    const savedState = loadChecklistState();
    if (savedState) {
      dispatch(loadState(savedState));
    }
  }, [dispatch]);

  // Helper functions
  const handleSetActiveTab = (tab: "new" | "renewal") => {
    dispatch(setActiveTab(tab));
  };

  const handleToggleChecklistItem = (
    section: keyof Omit<ChecklistState, "activeTab" | "penaltyCalculator">,
    itemKey: string
  ) => {
    dispatch(toggleChecklistItem({ section, itemKey }));
  };

  const handleUpdatePenaltyCalculator = (values: {
    taxAmount?: number;
    monthsOverdue?: number;
  }) => {
    dispatch(updatePenaltyCalculator(values));
  };

  const handleCalculatePenalties = () => {
    dispatch(calculatePenalties());
  };

  const handleSaveState = () => {
    saveChecklistState(state);
  };

  // Save state to local storage whenever it changes
  useEffect(() => {
    saveChecklistState(state);
  }, [state]);

  const contextValue: ChecklistContextValue = {
    state,
    setActiveTab: handleSetActiveTab,
    toggleChecklistItem: handleToggleChecklistItem,
    updatePenaltyCalculator: handleUpdatePenaltyCalculator,
    calculatePenalties: handleCalculatePenalties,
    saveState: handleSaveState,
  };

  return (
    <ChecklistContext.Provider value={contextValue}>
      {children}
    </ChecklistContext.Provider>
  );
}

// Hook for using the checklist context
export function useChecklist() {
  const context = useContext(ChecklistContext);

  if (!context) {
    throw new Error("useChecklist must be used within a ChecklistProvider");
  }

  return context;
}
