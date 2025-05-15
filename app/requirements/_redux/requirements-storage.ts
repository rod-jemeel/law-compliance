"use client";

export const saveRequirementsPreferences = (preferences: {
  activeTab?: "national" | "local";
  expandedItems?: string[];
}) => {
  if (typeof window !== "undefined") {
    const currentPrefs = loadRequirementsPreferences();
    const updatedPrefs = { ...currentPrefs, ...preferences };
    localStorage.setItem(
      "requirementsPreferences",
      JSON.stringify(updatedPrefs)
    );
  }
};

export const loadRequirementsPreferences = () => {
  if (typeof window !== "undefined") {
    try {
      const savedPrefs = localStorage.getItem("requirementsPreferences");
      if (savedPrefs) {
        return JSON.parse(savedPrefs);
      }
    } catch (error) {
      console.error("Error loading requirements preferences:", error);
    }
  }
  return {
    activeTab: "national",
    expandedItems: [],
  };
};
