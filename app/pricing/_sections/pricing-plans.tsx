"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PricingPlans() {
  return (
    <div className="grid gap-6 py-12 lg:grid-cols-3">
      <Card>
        <div className="flex flex-col">
          <CardHeader>
            <CardTitle>Basic</CardTitle>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold">₱499</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <CardDescription>
              Perfect for small businesses just getting started.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Track 1 business</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Basic deadline reminders</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Standard checklists</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Access to requirements database</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Email support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Get Started</Button>
          </CardFooter>
        </div>
      </Card>
      <Card className="border-2 border-primary">
        <CardHeader>
          <div className="inline-block rounded-lg text-[#008DDE] bg-primary  py-1 text-sm text-primary-foreground mb-2">
            * Most Popular
          </div>
          <CardTitle>Professional</CardTitle>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold">₱999</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          <CardDescription>
            Ideal for growing businesses with multiple permits.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Track up to 3 businesses</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Advanced deadline reminders (SMS + Email)</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Custom checklists</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Document storage (up to 100MB)</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Priority email support</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Compliance analytics</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Get Started</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Enterprise</CardTitle>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold">₱2,499</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          <CardDescription>
            For larger businesses with complex compliance needs.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Unlimited businesses</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Advanced notifications & alerts</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Custom workflows & approval chains</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Document storage (up to 1GB)</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Dedicated account manager</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>API access</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Advanced compliance analytics & reporting</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Contact Sales</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
