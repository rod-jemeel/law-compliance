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
      <Card className="border-t-2 border-t-blue-500 border-blue-200 shadow-sm hover:shadow bg-blue-50/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-blue-600" />
            <CardTitle className="text-blue-700">
              Department of Trade and Industry
            </CardTitle>
          </div>
          <CardDescription>Business Name Registration</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Register your business name, access business resources, and learn
            about DTI programs for entrepreneurs.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            <ExternalLink className="mr-2 h-4 w-4" />
            Visit Website
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-t-2 border-t-blue-500 border-blue-200 shadow-sm hover:shadow bg-blue-50/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-blue-600" />
            <CardTitle className="text-blue-700">
              Securities and Exchange Commission
            </CardTitle>
          </div>
          <CardDescription>Corporation Registration</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Register corporations and partnerships, access SEC resources, and
            submit required reports.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            <ExternalLink className="mr-2 h-4 w-4" />
            Visit Website
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-t-2 border-t-blue-500 border-blue-200 shadow-sm hover:shadow bg-blue-50/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-blue-600" />
            <CardTitle className="text-blue-700">
              Bureau of Internal Revenue
            </CardTitle>
          </div>
          <CardDescription>Tax Registration and Compliance</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Register for tax purposes, file and pay taxes, access tax forms, and
            learn about tax requirements.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            <ExternalLink className="mr-2 h-4 w-4" />
            Visit Website
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
