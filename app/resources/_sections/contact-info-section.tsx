"use client";

import Link from "next/link";
import { HelpCircle, MapPin, Phone } from "lucide-react";
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
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <CardTitle>City Government Offices</CardTitle>
          </div>
          <CardDescription>Key offices and contact details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium">Business Permits & Licensing Office</h4>
            <p className="text-sm text-muted-foreground">
              Ground Floor, Dumaguete City Hall
              <br />
              Tel: (035) 225-0386
              <br />
              Email: bplo@dumaguetecity.gov.ph
            </p>
          </div>
          <div>
            <h4 className="font-medium">City Treasurer&apos;s Office</h4>
            <p className="text-sm text-muted-foreground">
              1st Floor, Dumaguete City Hall
              <br />
              Tel: (035) 225-0385
              <br />
              Email: treasurer@dumaguetecity.gov.ph
            </p>
          </div>
          <div>
            <h4 className="font-medium">Office Hours</h4>
            <p className="text-sm text-muted-foreground">
              Monday to Friday: 8:00 AM - 5:00 PM
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link
              href="https://maps.app.goo.gl/dumaguete-city-hall"
              target="_blank"
            >
              <MapPin className="mr-2 h-4 w-4" />
              View on Map
            </Link>
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            <CardTitle>Government Agencies</CardTitle>
          </div>
          <CardDescription>
            National agencies (Dumaguete offices)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium">Bureau of Internal Revenue (BIR)</h4>
            <p className="text-sm text-muted-foreground">
              EBT Building, Perdices Street, Dumaguete City
              <br />
              Tel: (035) 225-4236
              <br />
              Email: rd_region13@bir.gov.ph
            </p>
          </div>
          <div>
            <h4 className="font-medium">Social Security System (SSS)</h4>
            <p className="text-sm text-muted-foreground">
              Perdices Street, Dumaguete City
              <br />
              Tel: (035) 225-9823
              <br />
              Email: dumaguete@sss.gov.ph
            </p>
          </div>
          <div>
            <h4 className="font-medium">
              Department of Trade & Industry (DTI)
            </h4>
            <p className="text-sm text-muted-foreground">
              2nd Floor, NICO Building, Rizal Boulevard, Dumaguete City
              <br />
              Tel: (035) 225-6177
              <br />
              Email: negros_oriental@dti.gov.ph
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/contact">
              <HelpCircle className="mr-2 h-4 w-4" />
              Contact Us for Assistance
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
