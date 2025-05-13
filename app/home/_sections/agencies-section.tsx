import React from "react";
import { AgencyCard } from "../_components/feature-card";

export function AgenciesSection() {
  const agencies = [
    {
      title: "DTI",
      content:
        "Department of Trade and Industry - Business Name Registration for Sole Proprietorships",
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
          <path d="M20 7h-7.05a2 2 0 1 0-3.9 0H2"></path>
          <path d="M20 7v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7"></path>
          <rect x="8" y="11" width="8" height="5" rx="1"></rect>
        </svg>
      ),
    },
    {
      title: "SEC",
      content:
        "Securities and Exchange Commission - Registration for Partnerships and Corporations",
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
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "BIR",
      content:
        "Bureau of Internal Revenue - Tax registration and compliance for all businesses",
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
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
    },
    {
      title: "LGU",
      content:
        "Local Government Unit - Dumaguete City Hall for Mayor's Permit and local requirements",
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
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full py-10">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-3">Key Regulatory Agencies</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          These are the main government bodies you'll interact with during the
          business registration and renewal process
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {agencies.map((agency, index) => (
          <AgencyCard
            key={index}
            title={agency.title}
            content={agency.content}
            icon={agency.icon}
          />
        ))}
      </div>
    </section>
  );
}
