"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase, Calculator, Scale } from "lucide-react";

export function ProfessionalsSection() {
  return (
    <Card className="mb-8 border-t-2 border-t-amber-500 border-amber-200 shadow-sm bg-amber-50/30">
      <CardHeader>
        <CardTitle className="text-amber-700">
          Need Professional Assistance?
        </CardTitle>
        <CardDescription>
          Connect with business registration consultants and service providers
          in City / Municipality
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border border-amber-200 hover:shadow bg-white">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-amber-600" />
                <CardTitle className="text-lg text-amber-700">
                  Business Registration Consultants
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Professional consultants who can guide you through the entire
                business registration or renewal process.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                View Directory
              </Button>
            </CardFooter>
          </Card>

          <Card className="border border-amber-200 hover:shadow bg-white">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-amber-600" />
                <CardTitle className="text-lg text-amber-700">
                  Accounting Firms
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Accounting professionals who can assist with financial
                requirements, tax compliance, and BIR registrations.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                View Directory
              </Button>
            </CardFooter>
          </Card>

          <Card className="border border-amber-200 hover:shadow bg-white">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-amber-600" />
                <CardTitle className="text-lg text-amber-700">
                  Legal Services
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Attorneys and legal professionals specializing in business law,
                permits, and regulatory compliance.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                View Directory
              </Button>
            </CardFooter>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
