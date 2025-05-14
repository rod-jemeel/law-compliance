"use client";

import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

export default function DeadlinesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Key Deadlines to Remember
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Mark these important dates on your calendar to avoid penalties
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 py-12">
          {" "}
          <Card className="flex flex-col items-center text-center w-full md:w-1/3">
            <CardHeader className="pt-6 px-6 w-full">
              <div className="flex flex-row items-center justify-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Barangay Clearance</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-4">
              <p className="text-3xl font-bold text-primary">January 20</p>
              <p className="text-sm text-muted-foreground mt-1">
                Annual deadline for renewal
              </p>
            </CardContent>
            <CardFooter className="px-6 pt-0 pb-6">
              <Button variant="outline" className="w-full">
                Set Reminder
              </Button>
            </CardFooter>
          </Card>{" "}
          <Card className="flex flex-col items-center text-center w-full md:w-1/3">
            <CardHeader className="pt-6 px-6 w-full">
              <div className="flex flex-row items-center justify-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Mayor's Permit</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-4">
              <p className="text-3xl font-bold text-primary">January 20</p>
              <p className="text-sm text-muted-foreground mt-1">
                Annual deadline for renewal
              </p>
            </CardContent>
            <CardFooter className="px-6 pt-0 pb-6">
              <Button variant="outline" className="w-full">
                Set Reminder
              </Button>
            </CardFooter>
          </Card>{" "}
          <Card className="flex flex-col items-center text-center w-full md:w-1/3">
            <CardHeader className="pt-6 px-6 w-full">
              <div className="flex flex-row items-center justify-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">BIR Registration</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-4">
              <p className="text-3xl font-bold text-primary">January 31</p>
              <p className="text-sm text-muted-foreground mt-1">
                Annual deadline for renewal
              </p>
            </CardContent>
            <CardFooter className="px-6 pt-0 pb-6">
              <Button variant="outline" className="w-full">
                Set Reminder
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
