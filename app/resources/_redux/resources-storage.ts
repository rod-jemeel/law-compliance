"use client";

export const saveResourcesPreferences = (preferences: {
  activeTab?: string;
  favoriteResources?: string[];
}) => {
  if (typeof window !== "undefined") {
    const currentPrefs = loadResourcesPreferences();
    const updatedPrefs = { ...currentPrefs, ...preferences };
    localStorage.setItem("resourcesPreferences", JSON.stringify(updatedPrefs));
  }
};

export const loadResourcesPreferences = () => {
  if (typeof window !== "undefined") {
    try {
      const savedPrefs = localStorage.getItem("resourcesPreferences");
      if (savedPrefs) {
        return JSON.parse(savedPrefs);
      }
    } catch (error) {
      console.error("Error loading resources preferences:", error);
    }
  }
  return {
    activeTab: "official",
    favoriteResources: [],
  };
};
