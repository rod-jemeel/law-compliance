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
      <Card className="border-t-2 border-t-green-500 border-green-200 shadow-sm hover:shadow transition-all bg-green-50/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-green-600" />
            <CardTitle className="text-green-700">
              Business Registration Guide
            </CardTitle>
          </div>
          <CardDescription>
            Step-by-step guide for new businesses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Comprehensive guide covering all aspects of registering a new
            business in City / Municipality, from national registrations to
            local permits.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
            <FileText className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-t-2 border-t-green-500 border-green-200 shadow-sm hover:shadow transition-all bg-green-50/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-green-600" />
            <CardTitle className="text-green-700">
              Business Permit Renewal Guide
            </CardTitle>
          </div>
          <CardDescription>Annual renewal process explained</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Detailed guide on the annual business permit renewal process,
            including required documents, deadlines, and step-by-step
            procedures.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
            <FileText className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-t-2 border-t-green-500 border-green-200 shadow-sm hover:shadow transition-all bg-green-50/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-green-600" />
            <CardTitle className="text-green-700">Video Tutorials</CardTitle>
          </div>
          <CardDescription>
            Visual guides for business compliance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Collection of video tutorials demonstrating how to navigate the
            eBPLS portal, complete forms correctly, and understand compliance
            requirements.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
            View Tutorials
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-t-2 border-t-green-500 border-green-200 shadow-sm hover:shadow transition-all bg-green-50/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-green-600" />
            <CardTitle className="text-green-700">
              Frequently Asked Questions
            </CardTitle>
          </div>
          <CardDescription>Common questions and answers</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Answers to common questions about business registration, renewal,
            requirements, deadlines, and compliance issues in City /
            Municipality.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
            View FAQs
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-t-2 border-t-green-500 border-green-200 shadow-sm hover:shadow transition-all bg-green-50/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-green-600" />
            <CardTitle className="text-green-700">Document Templates</CardTitle>
          </div>
          <CardDescription>Ready-to-use forms and templates</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Collection of fillable forms, affidavits, and document templates
            needed for business registration and renewal processes.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
            Access Templates
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-t-2 border-t-green-500 border-green-200 shadow-sm hover:shadow transition-all bg-green-50/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <LifeBuoy className="h-5 w-5 text-green-600" />
            <CardTitle className="text-green-700">
              Compliance Calendar
            </CardTitle>
          </div>
          <CardDescription>Important dates and deadlines</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Calendar of important regulatory deadlines, filing dates, and
            renewal periods for businesses operating in City / Municipality.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
            View Calendar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
