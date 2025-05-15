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
    <Card className="mb-8 border-0 shadow-md hover:shadow-lg transition-all">
      <CardHeader className="border-b border-slate-100">
        <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide">
          Professional Services
        </span>
        <CardTitle className="text-xl text-gray-900">
          Need Professional Assistance?
        </CardTitle>
        <CardDescription className="text-slate-500">
          Connect with business registration consultants and service providers
          in City / Municipality
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border border-slate-200 hover:border-amber-200 hover:shadow-sm transition-all bg-white">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100">
                  <Briefcase className="h-5 w-5 text-amber-600" />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  Business Registration Consultants
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Professional consultants who can guide you through the entire
                business registration or renewal process.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm">
                View Directory
              </Button>
            </CardFooter>
          </Card>

          <Card className="border border-slate-200 hover:border-amber-200 hover:shadow-sm transition-all bg-white">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100">
                  <Calculator className="h-5 w-5 text-amber-600" />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  Accounting Firms
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Accounting professionals who can assist with financial
                requirements, tax compliance, and BIR registrations.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm">
                View Directory
              </Button>
            </CardFooter>
          </Card>

          <Card className="border border-slate-200 hover:border-amber-200 hover:shadow-sm transition-all bg-white">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100">
                  <Scale className="h-5 w-5 text-amber-600" />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  Legal Services
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Attorneys and legal professionals specializing in business law,
                permits, and regulatory compliance.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm">
                View Directory
              </Button>
            </CardFooter>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
