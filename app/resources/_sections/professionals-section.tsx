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

export function ProfessionalsSection() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Need Professional Assistance?</CardTitle>
        <CardDescription>
          Connect with business registration consultants and service providers
          in Dumaguete City
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">
                Business Registration Consultants
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Professional consultants who can guide you through the entire
                business registration or renewal process.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Directory
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Accounting Firms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Accounting professionals who can assist with financial
                requirements, tax compliance, and BIR registrations.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Directory
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Legal Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Attorneys and legal professionals specializing in business law,
                permits, and regulatory compliance.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Directory
              </Button>
            </CardFooter>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
