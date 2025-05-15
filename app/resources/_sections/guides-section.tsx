"use client";

import Link from "next/link";
import { BookOpen, FileText, GraduationCap } from "lucide-react";
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
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <CardTitle>New Business Registration Guide</CardTitle>
          </div>
          <CardDescription>Step-by-step guide</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Comprehensive guide to registering a new business in Dumaguete City,
            including all required forms, documents, and agency procedures.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/guides/new-business-registration">
              <FileText className="mr-2 h-4 w-4" />
              View Guide
            </Link>
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <CardTitle>Business Permit Renewal Guide</CardTitle>
          </div>
          <CardDescription>Annual renewal process</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Complete guide to the annual business permit renewal process,
            including deadlines, requirements, and step-by-step procedures.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/guides/renewal-process">
              <FileText className="mr-2 h-4 w-4" />
              View Guide
            </Link>
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <CardTitle>Tax Compliance Tutorial</CardTitle>
          </div>
          <CardDescription>BIR requirements</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Learn about tax filing requirements, deadlines, and best practices
            for maintaining good standing with the Bureau of Internal Revenue.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/guides/tax-compliance">
              <FileText className="mr-2 h-4 w-4" />
              View Tutorial
            </Link>
          </Button>
        </CardFooter>
      </Card>
      {/* Additional guides can be added here */}
    </div>
  );
}
