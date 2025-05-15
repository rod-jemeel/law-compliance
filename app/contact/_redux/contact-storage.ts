"use client";

import { ContactFormData } from "./contact-slice";

export interface ContactSubmission extends ContactFormData {
  timestamp: string;
  id: string;
}

export const saveContactSubmission = (formData: ContactFormData) => {
  if (typeof window !== "undefined") {
    // Store submission in localStorage for persistence
    const submissions = loadContactSubmissions();
    submissions.push({
      ...formData,
      timestamp: new Date().toISOString(),
      id: `submission-${Date.now()}`,
    });

    // Only keep the latest 10 submissions
    if (submissions.length > 10) {
      submissions.shift();
    }

    localStorage.setItem("contactSubmissions", JSON.stringify(submissions));
  }
};

export const loadContactSubmissions = (): ContactSubmission[] => {
  if (typeof window !== "undefined") {
    try {
      const savedSubmissions = localStorage.getItem("contactSubmissions");
      if (savedSubmissions) {
        return JSON.parse(savedSubmissions) as ContactSubmission[];
      }
    } catch (error) {
      console.error("Error loading contact submissions:", error);
    }
  }
  return [];
};
