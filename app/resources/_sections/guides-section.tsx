"use client";

import {
  BookOpen,
  FileText,
  GraduationCap,
  HelpCircle,
  LifeBuoy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function GuidesSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="border-0 shadow-md hover:shadow-lg transition-all">
        <CardHeader className="border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
              <BookOpen className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <span className="text-xs font-semibold text-green-600 uppercase tracking-wide block">
                User Guide
              </span>
              <CardTitle className="text-lg text-gray-900">
                Business Registration Guide
              </CardTitle>
            </div>
          </div>
          <CardDescription className="text-slate-500 mt-2">
            Step-by-step guide for new businesses
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-sm text-slate-600">
            Comprehensive guide covering all aspects of registering a new
            business in City / Municipality, from national registrations to
            local permits.
          </p>
        </CardContent>
        <CardFooter className="pt-2">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm">
            <FileText className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-0 shadow-md hover:shadow-lg transition-all">
        <CardHeader className="border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
              <BookOpen className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <span className="text-xs font-semibold text-green-600 uppercase tracking-wide block">
                User Guide
              </span>
              <CardTitle className="text-lg text-gray-900">
                Business Permit Renewal Guide
              </CardTitle>
            </div>
          </div>
          <CardDescription className="text-slate-500 mt-2">
            Annual renewal process explained
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-sm text-slate-600">
            Detailed guide on the annual business permit renewal process,
            including required documents, deadlines, and step-by-step
            procedures.
          </p>
        </CardContent>
        <CardFooter className="pt-2">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm">
            <FileText className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-0 shadow-md hover:shadow-lg transition-all">
        <CardHeader className="border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
              <GraduationCap className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <span className="text-xs font-semibold text-green-600 uppercase tracking-wide block">
                Tutorials
              </span>
              <CardTitle className="text-lg text-gray-900">
                Video Tutorials
              </CardTitle>
            </div>
          </div>
          <CardDescription className="text-slate-500 mt-2">
            Visual guides for business compliance
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-sm text-slate-600">
            Collection of video tutorials demonstrating how to navigate the
            eBPLS portal, complete forms correctly, and understand compliance
            requirements.
          </p>
        </CardContent>
        <CardFooter className="pt-2">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm">
            View Tutorials
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-0 shadow-md hover:shadow-lg transition-all">
        <CardHeader className="border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
              <HelpCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <span className="text-xs font-semibold text-green-600 uppercase tracking-wide block">
                FAQs
              </span>
              <CardTitle className="text-lg text-gray-900">
                Frequently Asked Questions
              </CardTitle>
            </div>
          </div>
          <CardDescription className="text-slate-500 mt-2">
            Common questions and answers
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-sm text-slate-600">
            Answers to common questions about business registration, renewal,
            requirements, deadlines, and compliance issues in City /
            Municipality.
          </p>
        </CardContent>
        <CardFooter className="pt-2">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm">
            View FAQs
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-0 shadow-md hover:shadow-lg transition-all">
        <CardHeader className="border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
              <FileText className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <span className="text-xs font-semibold text-green-600 uppercase tracking-wide block">
                Templates
              </span>
              <CardTitle className="text-lg text-gray-900">
                Document Templates
              </CardTitle>
            </div>
          </div>
          <CardDescription className="text-slate-500 mt-2">
            Ready-to-use forms and templates
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-sm text-slate-600">
            Collection of fillable forms, affidavits, and document templates
            needed for business registration and renewal processes.
          </p>
        </CardContent>
        <CardFooter className="pt-2">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm">
            Access Templates
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-0 shadow-md hover:shadow-lg transition-all">
        <CardHeader className="border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
              <LifeBuoy className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <span className="text-xs font-semibold text-green-600 uppercase tracking-wide block">
                Calendar
              </span>
              <CardTitle className="text-lg text-gray-900">
                Compliance Calendar
              </CardTitle>
            </div>
          </div>
          <CardDescription className="text-slate-500 mt-2">
            Important dates and deadlines
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-sm text-slate-600">
            Calendar of important regulatory deadlines, filing dates, and
            renewal periods for businesses operating in City / Municipality.
          </p>
        </CardContent>
        <CardFooter className="pt-2">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm">
            View Calendar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
