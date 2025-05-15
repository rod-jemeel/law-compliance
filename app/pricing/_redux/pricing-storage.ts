"use client";

export const savePricingPreference = (plan: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("selectedPricingPlan", plan);
  }
};

export const loadPricingPreference = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("selectedPricingPlan");
  }
  return null;
};
