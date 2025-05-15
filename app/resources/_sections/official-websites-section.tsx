"use client";

import Link from "next/link";
import { Building2, Link2 } from "lucide-react";
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
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            <CardTitle>Dumaguete City Government</CardTitle>
          </div>
          <CardDescription>Official website of Dumaguete City</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Access information about city services, announcements, and the
            online eBPLS portal for business permit applications and renewals.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href="https://dumaguetecity.gov.ph" target="_blank">
              <Link2 className="mr-2 h-4 w-4" />
              Visit Website
            </Link>
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            <CardTitle>Bureau of Internal Revenue</CardTitle>
          </div>
          <CardDescription>Official BIR website</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Access tax forms, registration requirements, e-filing services, and
            updates on tax regulations and deadlines.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href="https://www.bir.gov.ph" target="_blank">
              <Link2 className="mr-2 h-4 w-4" />
              Visit Website
            </Link>
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            <CardTitle>Department of Trade and Industry</CardTitle>
          </div>
          <CardDescription>Official DTI website</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Register business names, access business resources, and stay updated
            on trade and industry policies and programs.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href="https://www.dti.gov.ph" target="_blank">
              <Link2 className="mr-2 h-4 w-4" />
              Visit Website
            </Link>
          </Button>
        </CardFooter>
      </Card>
      {/* Additional agencies can be added here */}
    </div>
  );
}
