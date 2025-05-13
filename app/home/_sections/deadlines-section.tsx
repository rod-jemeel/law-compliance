import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function DeadlinesSection() {
  const deadlines = [
    {
      date: "January 20",
      description: "Barangay Clearance Renewal Deadline",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      ),
    },
    {
      date: "January 20",
      description: "Mayor's Permit Renewal Deadline",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      ),
    },
    {
      date: "January 31",
      description: "BIR Annual Registration Renewal",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full py-10">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Critical Compliance Deadlines
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Mark these important dates on your calendar to avoid penalties and
          ensure smooth business operations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {deadlines.map((deadline, index) => (
          <Card
            key={index}
            className="border-2 hover:border-primary/20 transition-all duration-300 overflow-hidden"
          >
            <div className="bg-primary/5 p-4 flex justify-center">
              <div className="text-primary">{deadline.icon}</div>
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="font-bold text-2xl mb-2 text-primary">
                {deadline.date}
              </h3>
              <p className="text-sm text-muted-foreground">
                {deadline.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button size="lg" variant="default">
          Add to My Calendar
        </Button>
      </div>
    </section>
  );
}
