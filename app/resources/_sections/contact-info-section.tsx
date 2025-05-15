"use client";

import { Building2, Link2, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ContactInfoSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            <CardTitle>Dumaguete City Hall</CardTitle>
          </div>
          <CardDescription>Business One-Stop Shop (BOSS)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p className="text-sm">
              Dr. V. Locsin St., Dumaguete City, Negros Oriental
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p className="text-sm">(035) 225-0386</p>
          </div>
          <div className="flex items-start gap-2">
            <Link2 className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p className="text-sm">boss@dumaguetecity.gov.ph</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            View on Map
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            <CardTitle>BIR Revenue District Office</CardTitle>
          </div>
          <CardDescription>Dumaguete City</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p className="text-sm">
              National Highway, Dumaguete City, Negros Oriental
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p className="text-sm">(035) 225-4236</p>
          </div>
          <div className="flex items-start gap-2">
            <Link2 className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p className="text-sm">rdo79@bir.gov.ph</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            View on Map
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            <CardTitle>DTI Negros Oriental</CardTitle>
          </div>
          <CardDescription>Provincial Office</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p className="text-sm">
              2nd Floor, NEDA Building, EJ Blanco Drive, Dumaguete City
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p className="text-sm">(035) 225-6177</p>
          </div>
          <div className="flex items-start gap-2">
            <Link2 className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p className="text-sm">negrosoriental@dti.gov.ph</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            View on Map
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            <CardTitle>SSS Dumaguete Branch</CardTitle>
          </div>
          <CardDescription>Social Security System</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p className="text-sm">
              Rizal Boulevard, Dumaguete City, Negros Oriental
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p className="text-sm">(035) 225-4256</p>
          </div>
          <div className="flex items-start gap-2">
            <Link2 className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p className="text-sm">dumaguete@sss.gov.ph</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            View on Map
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            <CardTitle>PhilHealth Dumaguete</CardTitle>
          </div>
          <CardDescription>Local Health Insurance Office</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p className="text-sm">
              Perdices Street, Dumaguete City, Negros Oriental
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p className="text-sm">(035) 225-9125</p>
          </div>
          <div className="flex items-start gap-2">
            <Link2 className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p className="text-sm">actioncenter@philhealth.gov.ph</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            View on Map
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            <CardTitle>Pag-IBIG Fund Dumaguete</CardTitle>
          </div>
          <CardDescription>Branch Office</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p className="text-sm">
              Noblefranca Street, Dumaguete City, Negros Oriental
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p className="text-sm">(035) 225-7148</p>
          </div>
          <div className="flex items-start gap-2">
            <Link2 className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p className="text-sm">contactus@pagibigfund.gov.ph</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            View on Map
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
