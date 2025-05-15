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
      <Card className="border-t-2 border-t-purple-500 border-purple-200 shadow-sm hover:shadow transition-all bg-purple-50/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-purple-600" />
            <CardTitle className="text-purple-700">
              City / Municipality Hall
            </CardTitle>
          </div>
          <CardDescription>Business One-Stop Shop (BOSS)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-purple-500 mt-0.5" />
            <p className="text-sm">
              Dr. V. Locsin St., City / Municipality, Negros Oriental
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="h-4 w-4 text-purple-500 mt-0.5" />
            <p className="text-sm">(035) 225-0386</p>
          </div>
          <div className="flex items-start gap-2">
            <Link2 className="h-4 w-4 text-purple-500 mt-0.5" />
            <p className="text-sm text-purple-700">boss@dumaguetecity.gov.ph</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            View on Map
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-t-2 border-t-purple-500 border-purple-200 shadow-sm hover:shadow transition-all bg-purple-50/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-purple-600" />
            <CardTitle className="text-purple-700">
              BIR Revenue District Office
            </CardTitle>
          </div>
          <CardDescription>City / Municipality</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-purple-500 mt-0.5" />
            <p className="text-sm">
              National Highway, City / Municipality, Negros Oriental
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="h-4 w-4 text-purple-500 mt-0.5" />
            <p className="text-sm">(035) 225-4236</p>
          </div>
          <div className="flex items-start gap-2">
            <Link2 className="h-4 w-4 text-purple-500 mt-0.5" />
            <p className="text-sm text-purple-700">rdo79@bir.gov.ph</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            View on Map
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-t-2 border-t-purple-500 border-purple-200 shadow-sm hover:shadow transition-all bg-purple-50/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-purple-600" />
            <CardTitle className="text-purple-700">
              DTI Negros Oriental
            </CardTitle>
          </div>
          <CardDescription>Provincial Office</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-purple-500 mt-0.5" />
            <p className="text-sm">
              2nd Floor, NEDA Building, EJ Blanco Drive, City / Municipality
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="h-4 w-4 text-purple-500 mt-0.5" />
            <p className="text-sm">(035) 225-6177</p>
          </div>
          <div className="flex items-start gap-2">
            <Link2 className="h-4 w-4 text-purple-500 mt-0.5" />
            <p className="text-sm text-purple-700">negrosoriental@dti.gov.ph</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            View on Map
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-t-2 border-t-purple-500 border-purple-200 shadow-sm hover:shadow transition-all bg-purple-50/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-purple-600" />
            <CardTitle className="text-purple-700">
              SSS Dumaguete Branch
            </CardTitle>
          </div>
          <CardDescription>Social Security System</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-purple-500 mt-0.5" />
            <p className="text-sm">
              Rizal Boulevard, City / Municipality, Negros Oriental
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="h-4 w-4 text-purple-500 mt-0.5" />
            <p className="text-sm">(035) 225-4256</p>
          </div>
          <div className="flex items-start gap-2">
            <Link2 className="h-4 w-4 text-purple-500 mt-0.5" />
            <p className="text-sm text-purple-700">dumaguete@sss.gov.ph</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            View on Map
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-t-2 border-t-purple-500 border-purple-200 shadow-sm hover:shadow transition-all bg-purple-50/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-purple-600" />
            <CardTitle className="text-purple-700">
              PhilHealth Dumaguete
            </CardTitle>
          </div>
          <CardDescription>Local Health Insurance Office</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-purple-500 mt-0.5" />
            <p className="text-sm">
              Perdices Street, City / Municipality, Negros Oriental
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="h-4 w-4 text-purple-500 mt-0.5" />
            <p className="text-sm">(035) 225-9125</p>
          </div>
          <div className="flex items-start gap-2">
            <Link2 className="h-4 w-4 text-purple-500 mt-0.5" />
            <p className="text-sm text-purple-700">
              actioncenter@philhealth.gov.ph
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            View on Map
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-t-2 border-t-purple-500 border-purple-200 shadow-sm hover:shadow transition-all bg-purple-50/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-purple-600" />
            <CardTitle className="text-purple-700">
              Pag-IBIG Fund Dumaguete
            </CardTitle>
          </div>
          <CardDescription>Branch Office</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-purple-500 mt-0.5" />
            <p className="text-sm">
              Noblefranca Street, City / Municipality, Negros Oriental
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="h-4 w-4 text-purple-500 mt-0.5" />
            <p className="text-sm">(035) 225-7148</p>
          </div>
          <div className="flex items-start gap-2">
            <Link2 className="h-4 w-4 text-purple-500 mt-0.5" />
            <p className="text-sm text-purple-700">
              contactus@pagibigfund.gov.ph
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            View on Map
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
