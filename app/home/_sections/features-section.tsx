"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FeaturesSection() {
  return (
    <section className="w-full bg-gray-200/25 py-12 md:py-24 lg:py-32 bg-background">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Stay Compliant, Stay in Business
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Securing and maintaining valid business permits is not just a
              procedural requirement—it&apos;s essential for legal operation in
              the Philippines.
            </p>
          </div>
        </div>{" "}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-12 lg:gap-8">
          <Card className="w-full lg:w-1/3">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Avoid Penalties</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Operating without valid permits can lead to fines of PHP
                5,000-20,000, business closure, and reputational damage.
              </p>
            </CardContent>
          </Card>
          <Card className="w-full lg:w-1/3">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Track Deadlines</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {" "}
                Never miss critical renewal dates with automated reminders for
                Barangay Clearance, Mayor&apos;s Permit, and BIR registration.
              </p>
            </CardContent>
          </Card>
          <Card className="w-full lg:w-1/3">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Simplify Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Access comprehensive checklists and step-by-step guides tailored
                specifically for local businesses.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
