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
      <Card className="border-0 shadow-md hover:shadow-lg transition-all flex flex-col">
        <CardHeader className="pb-8">
          <CardTitle className="text-gray-900">Basic</CardTitle>
          <div className="flex items-baseline gap-1 mt-2">
            <span className="text-3xl font-bold text-indigo-600">₱499</span>
            <span className="text-slate-500">/month</span>
          </div>
          <CardDescription className="mt-3 text-slate-500">
            Perfect for small businesses just getting started.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100">
                <Check className="h-3.5 w-3.5 text-indigo-600" />
              </div>
              <span className="text-gray-700">Track 1 business</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100">
                <Check className="h-3.5 w-3.5 text-indigo-600" />
              </div>
              <span className="text-gray-700">Basic deadline reminders</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100">
                <Check className="h-3.5 w-3.5 text-indigo-600" />
              </div>
              <span className="text-gray-700">Standard checklists</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100">
                <Check className="h-3.5 w-3.5 text-indigo-600" />
              </div>
              <span className="text-gray-700">
                Access to requirements database
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100">
                <Check className="h-3.5 w-3.5 text-indigo-600" />
              </div>
              <span className="text-gray-700">Email support</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="pt-6">
          <Button
            variant="outline"
            className="w-full border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-800"
          >
            Get Started
          </Button>
        </CardFooter>
      </Card>

      {/* Professional Plan - Indigo theme (highlighted) */}
      <Card className="border-0 shadow-lg hover:shadow-xl transition-all relative flex flex-col bg-gradient-to-b from-indigo-50 to-white translate-y-[-8px]">
        <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
          Most Popular
        </div>
        <CardHeader className="pb-8">
          <CardTitle className="text-indigo-700">Professional</CardTitle>
          <div className="flex items-baseline gap-1 mt-2">
            <span className="text-3xl font-bold text-indigo-600">₱999</span>
            <span className="text-indigo-500">/month</span>
          </div>
          <CardDescription className="mt-3 text-indigo-500">
            Ideal for growing businesses with multiple permits.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100">
                <Check className="h-3.5 w-3.5 text-indigo-600" />
              </div>
              <span className="text-gray-700">Track up to 3 businesses</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100">
                <Check className="h-3.5 w-3.5 text-indigo-600" />
              </div>
              <span className="text-gray-700">
                Advanced deadline reminders (SMS + Email)
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100">
                <Check className="h-3.5 w-3.5 text-indigo-600" />
              </div>
              <span className="text-gray-700">Custom checklists</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100">
                <Check className="h-3.5 w-3.5 text-indigo-600" />
              </div>
              <span className="text-gray-700">
                Document storage (up to 100MB)
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100">
                <Check className="h-3.5 w-3.5 text-indigo-600" />
              </div>
              <span className="text-gray-700">Priority email support</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100">
                <Check className="h-3.5 w-3.5 text-indigo-600" />
              </div>
              <span className="text-gray-700">Compliance analytics</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="pt-6">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-md">
            Get Started
          </Button>
        </CardFooter>
      </Card>

      {/* Enterprise Plan - Premium theme */}
      <Card className="border-0 shadow-md hover:shadow-lg transition-all flex flex-col">
        <CardHeader className="pb-8">
          <CardTitle className="text-gray-900">Enterprise</CardTitle>
          <div className="flex items-baseline gap-1 mt-2">
            <span className="text-3xl font-bold text-indigo-600">₱2,499</span>
            <span className="text-slate-500">/month</span>
          </div>
          <CardDescription className="mt-3 text-slate-500">
            For larger businesses with complex compliance needs.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100">
                <Check className="h-3.5 w-3.5 text-indigo-600" />
              </div>
              <span className="text-gray-700">Unlimited businesses</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100">
                <Check className="h-3.5 w-3.5 text-indigo-600" />
              </div>
              <span className="text-gray-700">
                Advanced notifications & alerts
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100">
                <Check className="h-3.5 w-3.5 text-indigo-600" />
              </div>
              <span className="text-gray-700">
                Custom workflows & approval chains
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100">
                <Check className="h-3.5 w-3.5 text-indigo-600" />
              </div>
              <span className="text-gray-700">
                Document storage (up to 1GB)
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100">
                <Check className="h-3.5 w-3.5 text-indigo-600" />
              </div>
              <span className="text-gray-700">Dedicated account manager</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100">
                <Check className="h-3.5 w-3.5 text-indigo-600" />
              </div>
              <span className="text-gray-700">API access</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100">
                <Check className="h-3.5 w-3.5 text-indigo-600" />
              </div>
              <span className="text-gray-700">
                Advanced compliance analytics & reporting
              </span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="pt-6">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
            Contact Sales
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
