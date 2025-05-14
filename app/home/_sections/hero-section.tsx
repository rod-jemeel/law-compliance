"use client";

import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4 w-full lg:max-w-[60%]">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Never Miss a Business Permit Deadline Again
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Stay compliant with all business registration and renewal
                requirements in Dumaguete City with our easy-to-use tracking
                system.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" color="">
                Start Tracking
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>{" "}
            </div>
          </div>
          <div className="flex w-full lg:w-[40%] flex-col justify-center space-y-4 rounded-xl border bg-background p-4 shadow-lg sm:p-6 lg:p-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">Upcoming Deadlines</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="space-y-0.5">
                  <h4 className="font-medium">Barangay Clearance Renewal</h4>
                  <p className="text-sm text-muted-foreground">
                    Before January 20, 2026
                  </p>
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full border bg-primary text-primary-foreground">
                  <span className="text-xs font-bold">67</span>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="space-y-0.5">
                  <h4 className="font-medium">Mayor's Permit Renewal</h4>
                  <p className="text-sm text-muted-foreground">
                    Before January 20, 2026
                  </p>
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full border bg-primary text-primary-foreground">
                  <span className="text-xs font-bold">67</span>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="space-y-0.5">
                  <h4 className="font-medium">BIR Annual Registration</h4>
                  <p className="text-sm text-muted-foreground">
                    Before January 31, 2026
                  </p>
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full border bg-primary text-primary-foreground">
                  <span className="text-xs font-bold">78</span>
                </div>
              </div>
            </div>
            <Button className="w-full">View All Deadlines</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
