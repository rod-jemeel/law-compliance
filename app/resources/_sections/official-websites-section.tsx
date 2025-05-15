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
            <CardTitle>Local Government Unit (LGU)</CardTitle>
          </div>
          <CardDescription>Official local government website</CardDescription>
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
        </CardFooter>{" "}
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
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            <CardTitle>Securities and Exchange Commission</CardTitle>
          </div>
          <CardDescription>Official SEC website</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Register corporations and partnerships, file required reports, and
            access information on SEC regulations and requirements.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href="https://www.sec.gov.ph" target="_blank">
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
            <CardTitle>Social Security System</CardTitle>
          </div>
          <CardDescription>Official SSS website</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Register employers and employees, manage contributions, and access
            SSS services and benefits information.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href="https://www.sss.gov.ph" target="_blank">
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
            <CardTitle>PhilHealth</CardTitle>
          </div>
          <CardDescription>Official PhilHealth website</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Register employers and employees, manage health insurance
            contributions, and access healthcare benefits information.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href="https://www.philhealth.gov.ph" target="_blank">
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
            <CardTitle>Pag-IBIG Fund</CardTitle>
          </div>
          <CardDescription>Official Pag-IBIG website</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Register employers and employees, manage housing fund contributions,
            and access Pag-IBIG services and benefits.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href="https://www.pagibigfund.gov.ph" target="_blank">
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
            <CardTitle>Bureau of Fire Protection</CardTitle>
          </div>
          <CardDescription>Official BFP website</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Access information on fire safety requirements, inspection
            procedures, and fire safety compliance for businesses.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href="https://bfp.gov.ph" target="_blank">
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
            <CardTitle>Cooperative Development Authority</CardTitle>
          </div>
          <CardDescription>Official CDA website</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Register cooperatives, access cooperative development resources, and
            stay updated on cooperative regulations.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href="https://cda.gov.ph" target="_blank">
              <Link2 className="mr-2 h-4 w-4" />
              Visit Website
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
