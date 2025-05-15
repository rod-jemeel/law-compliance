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
      {/* Basic Plan - Neutral theme */}
      <Card className="border border-gray-200 hover:border-gray-300 transition-all">
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
              <Check className="h-4 w-4 text-gray-500" />
              <span>Track 1 business</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-gray-500" />
              <span>Basic deadline reminders</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-gray-500" />
              <span>Standard checklists</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-gray-500" />
              <span>Access to requirements database</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-gray-500" />
              <span>Email support</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Get Started
          </Button>
        </CardFooter>
      </Card>

      {/* Professional Plan - Blue theme (highlighted) */}
      <Card className="border-2 border-blue-500 shadow-md hover:shadow-lg transition-all relative">
        <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
          Most Popular
        </div>
        <CardHeader className="bg-blue-50">
          <CardTitle className="text-blue-700">Professional</CardTitle>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-blue-700">₱999</span>
            <span className="text-blue-600">/month</span>
          </div>
          <CardDescription className="text-blue-600">
            Ideal for growing businesses with multiple permits.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-blue-500" />
              <span>Track up to 3 businesses</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-blue-500" />
              <span>Advanced deadline reminders (SMS + Email)</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-blue-500" />
              <span>Custom checklists</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-blue-500" />
              <span>Document storage (up to 100MB)</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-blue-500" />
              <span>Priority email support</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-blue-500" />
              <span>Compliance analytics</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="bg-blue-50">
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Get Started
          </Button>
        </CardFooter>
      </Card>

      {/* Enterprise Plan - Premium purple theme */}
      <Card className="border border-purple-200 hover:border-purple-300 transition-all">
        <CardHeader>
          <CardTitle className="text-purple-700">Enterprise</CardTitle>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-purple-700">₱2,499</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          <CardDescription>
            For larger businesses with complex compliance needs.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-purple-500" />
              <span>Unlimited businesses</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-purple-500" />
              <span>Advanced notifications & alerts</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-purple-500" />
              <span>Custom workflows & approval chains</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-purple-500" />
              <span>Document storage (up to 1GB)</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-purple-500" />
              <span>Dedicated account manager</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-purple-500" />
              <span>API access</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-purple-500" />
              <span>Advanced compliance analytics & reporting</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            Contact Sales
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
