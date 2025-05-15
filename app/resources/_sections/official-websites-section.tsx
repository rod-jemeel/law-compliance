"use client";

import { ExternalLink, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function OfficialWebsitesSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="border-0 shadow-md hover:shadow-lg transition-all">
        <CardHeader className="border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
              <Globe className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide block">
                Business Name
              </span>
              <CardTitle className="text-lg text-gray-900">
                Department of Trade and Industry
              </CardTitle>
            </div>
          </div>
          <CardDescription className="text-slate-500 mt-2">
            Register your business name, access business resources, and learn
            about DTI programs.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-sm text-slate-600">
            Register your business name, access business resources, and learn
            about DTI programs for entrepreneurs.
          </p>
        </CardContent>
        <CardFooter className="pt-2">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm">
            <ExternalLink className="mr-2 h-4 w-4" />
            Visit Website
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-0 shadow-md hover:shadow-lg transition-all">
        <CardHeader className="border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
              <Globe className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide block">
                Business Entity
              </span>
              <CardTitle className="text-lg text-gray-900">
                Securities and Exchange Commission
              </CardTitle>
            </div>
          </div>
          <CardDescription className="text-slate-500 mt-2">
            Register corporations and partnerships, access SEC resources, and
            submit reports.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-sm text-slate-600">
            Register corporations and partnerships, access SEC resources, and
            submit required reports.
          </p>
        </CardContent>
        <CardFooter className="pt-2">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm">
            <ExternalLink className="mr-2 h-4 w-4" />
            Visit Website
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-0 shadow-md hover:shadow-lg transition-all">
        <CardHeader className="border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
              <Globe className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide block">
                Tax Compliance
              </span>
              <CardTitle className="text-lg text-gray-900">
                Bureau of Internal Revenue
              </CardTitle>
            </div>
          </div>
          <CardDescription className="text-slate-500 mt-2">
            Register for tax purposes, file and pay taxes, access tax forms, and
            learn about tax requirements.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-sm text-slate-600">
            Register for tax purposes, file and pay taxes, access tax forms, and
            learn about tax requirements.
          </p>
        </CardContent>
        <CardFooter className="pt-2">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm">
            <ExternalLink className="mr-2 h-4 w-4" />
            Visit Website
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
