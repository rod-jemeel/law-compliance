"use client";

import { ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function PenaltiesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4 w-full lg:max-w-[50%]">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Avoid Costly Penalties
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Non-compliance with business permit requirements can result in
                significant financial and operational consequences.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5 text-primary" />
                <p className="font-medium">
                  25% surcharge on unpaid local business taxes
                </p>
              </div>
              <div className="flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5 text-primary" />
                <p className="font-medium">
                  2% monthly interest on outstanding amounts
                </p>
              </div>
              <div className="flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5 text-primary" />
                <p className="font-medium">
                  PHP 5,000 - 20,000 fines for operating without BIR
                  registration
                </p>
              </div>
              <div className="flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5 text-primary" />
                <p className="font-medium">
                  Potential business closure and reputational damage
                </p>
              </div>
            </div>{" "}
            <div>
              <Button>Start Tracking Now</Button>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4 w-full lg:max-w-[45%]">
            <Card>
              <CardHeader>
                <CardTitle>Penalty Calculator</CardTitle>
                <CardDescription>
                  Estimate potential penalties for late renewal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Annual Business Tax Amount (PHP)
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter amount"
                      type="number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Months Overdue
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter months"
                      type="number"
                    />
                  </div>
                  <Button className="w-full">Calculate Penalty</Button>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Estimated Penalty:</p>
                  <p className="text-2xl font-bold">PHP 0.00</p>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
