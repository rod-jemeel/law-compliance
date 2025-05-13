import React from "react";
import { FeatureCard } from "../_components/feature-card";

export function FeaturesSection() {
  const features = [
    {
      title: "Document Checklist",
      description: "Track required documents for new registration or renewal",
      content:
        "Access comprehensive checklists for both new business registration and annual renewals, tailored specifically for Dumaguete City requirements.",
      buttonText: "View Checklists",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full"
        >
          <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path>
          <rect x="9" y="3" width="6" height="4" rx="2"></rect>
          <path d="M9 14l2 2 4-4"></path>
        </svg>
      ),
    },
    {
      title: "Deadline Reminders",
      description: "Never miss important renewal dates",
      content:
        "Set up automated reminders for critical deadlines including Barangay Clearance (Jan 20), Mayor's Permit (Jan 20), and BIR registration (Jan 31).",
      buttonText: "Set Reminders",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full"
        >
          <path d="M10 2h4"></path>
          <path d="M12 14v-4"></path>
          <circle cx="12" cy="14" r="8"></circle>
        </svg>
      ),
    },
    {
      title: "Document Storage",
      description: "Securely store and organize your permits",
      content:
        "Upload and store digital copies of all your important business documents and permits in one secure location for easy access.",
      buttonText: "Manage Documents",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full"
        >
          <path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8"></path>
          <path d="M20 11L8 11"></path>
          <path d="M16 7l4 4-4 4"></path>
        </svg>
      ),
    },
    {
      title: "Process Guides",
      description: "Step-by-step instructions for compliance",
      content:
        "Access detailed guides for both new business registration and renewal processes, with specific instructions for Dumaguete City.",
      buttonText: "View Guides",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
        </svg>
      ),
    },
    {
      title: "Regulatory Updates",
      description: "Stay informed about changing regulations",
      content:
        "Get notifications about any changes in business registration and renewal requirements from DTI, SEC, BIR, and local Dumaguete City ordinances.",
      buttonText: "Check Updates",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      ),
    },
    {
      title: "Penalty Calculator",
      description: "Understand potential non-compliance costs",
      content:
        "Calculate potential penalties for late renewals, including the 25% surcharge and 2% monthly interest on unpaid local business taxes.",
      buttonText: "Calculate Penalties",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
    },
  ];
  return (
    <section className="w-full py-10">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold mb-3">Key Features</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our compliance assistant provides everything you need to stay on top
          of your business registration and renewal requirements in Dumaguete
          City.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            content={feature.content}
            buttonText={feature.buttonText}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
}
