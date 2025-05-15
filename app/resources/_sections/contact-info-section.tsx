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
      <Card className="border-0 shadow-md hover:shadow-lg transition-all">
        <CardHeader className="border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100">
              <Building2 className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide block">
                Business Center
              </span>
              <CardTitle className="text-lg text-gray-900">
                City / Municipality Hall
              </CardTitle>
            </div>
          </div>
          <CardDescription className="text-slate-500 mt-2">
            Business One-Stop Shop (BOSS)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 pt-4">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-indigo-500 mt-0.5" />
            <p className="text-sm text-slate-600">
              Dr. V. Locsin St., City / Municipality, Negros Oriental
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="h-4 w-4 text-indigo-500 mt-0.5" />
            <p className="text-sm text-slate-600">(035) 225-0386</p>
          </div>
          <div className="flex items-start gap-2">
            <Link2 className="h-4 w-4 text-indigo-500 mt-0.5" />
            <p className="text-sm text-indigo-600">boss@dumaguetecity.gov.ph</p>
          </div>
        </CardContent>
        <CardFooter className="pt-2">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm">
            View on Map
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-0 shadow-md hover:shadow-lg transition-all">
        <CardHeader className="border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100">
              <Building2 className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide block">
                Business Center
              </span>
              <CardTitle className="text-lg text-gray-900">
                BIR Revenue District Office
              </CardTitle>
            </div>
          </div>
          <CardDescription className="text-slate-500 mt-2">
            City / Municipality
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 pt-4">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-indigo-500 mt-0.5" />
            <p className="text-sm text-slate-600">
              National Highway, City / Municipality, Negros Oriental
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="h-4 w-4 text-indigo-500 mt-0.5" />
            <p className="text-sm text-slate-600">(035) 225-4236</p>
          </div>
          <div className="flex items-start gap-2">
            <Link2 className="h-4 w-4 text-indigo-500 mt-0.5" />
            <p className="text-sm text-indigo-600">rdo79@bir.gov.ph</p>
          </div>
        </CardContent>
        <CardFooter className="pt-2">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm">
            View on Map
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-0 shadow-md hover:shadow-lg transition-all">
        <CardHeader className="border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100">
              <Building2 className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide block">
                Business Center
              </span>
              <CardTitle className="text-lg text-gray-900">
                DTI Negros Oriental
              </CardTitle>
            </div>
          </div>
          <CardDescription className="text-slate-500 mt-2">
            Provincial Office
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 pt-4">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-indigo-500 mt-0.5" />
            <p className="text-sm text-slate-600">
              2nd Floor, NEDA Building, EJ Blanco Drive, City / Municipality
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="h-4 w-4 text-indigo-500 mt-0.5" />
            <p className="text-sm text-slate-600">(035) 225-6177</p>
          </div>
          <div className="flex items-start gap-2">
            <Link2 className="h-4 w-4 text-indigo-500 mt-0.5" />
            <p className="text-sm text-indigo-600">negrosoriental@dti.gov.ph</p>
          </div>
        </CardContent>
        <CardFooter className="pt-2">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm">
            View on Map
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-0 shadow-md hover:shadow-lg transition-all">
        <CardHeader className="border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100">
              <Building2 className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide block">
                Business Center
              </span>
              <CardTitle className="text-lg text-gray-900">
                SSS Dumaguete Branch
              </CardTitle>
            </div>
          </div>
          <CardDescription className="text-slate-500 mt-2">
            Social Security System
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 pt-4">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-indigo-500 mt-0.5" />
            <p className="text-sm text-slate-600">
              Rizal Boulevard, City / Municipality, Negros Oriental
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="h-4 w-4 text-indigo-500 mt-0.5" />
            <p className="text-sm text-slate-600">(035) 225-4256</p>
          </div>
          <div className="flex items-start gap-2">
            <Link2 className="h-4 w-4 text-indigo-500 mt-0.5" />
            <p className="text-sm text-indigo-600">dumaguete@sss.gov.ph</p>
          </div>
        </CardContent>
        <CardFooter className="pt-2">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm">
            View on Map
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-0 shadow-md hover:shadow-lg transition-all">
        <CardHeader className="border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100">
              <Building2 className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide block">
                Business Center
              </span>
              <CardTitle className="text-lg text-gray-900">
                PhilHealth Dumaguete
              </CardTitle>
            </div>
          </div>
          <CardDescription className="text-slate-500 mt-2">
            Local Health Insurance Office
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 pt-4">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-indigo-500 mt-0.5" />
            <p className="text-sm text-slate-600">
              Perdices Street, City / Municipality, Negros Oriental
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="h-4 w-4 text-indigo-500 mt-0.5" />
            <p className="text-sm text-slate-600">(035) 225-9125</p>
          </div>
          <div className="flex items-start gap-2">
            <Link2 className="h-4 w-4 text-indigo-500 mt-0.5" />
            <p className="text-sm text-indigo-600">
              actioncenter@philhealth.gov.ph
            </p>
          </div>
        </CardContent>
        <CardFooter className="pt-2">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm">
            View on Map
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-0 shadow-md hover:shadow-lg transition-all">
        <CardHeader className="border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100">
              <Building2 className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide block">
                Business Center
              </span>
              <CardTitle className="text-lg text-gray-900">
                Pag-IBIG Fund Dumaguete
              </CardTitle>
            </div>
          </div>
          <CardDescription className="text-slate-500 mt-2">
            Branch Office
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 pt-4">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-indigo-500 mt-0.5" />
            <p className="text-sm text-slate-600">
              Noblefranca Street, City / Municipality, Negros Oriental
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="h-4 w-4 text-indigo-500 mt-0.5" />
            <p className="text-sm text-slate-600">(035) 225-7148</p>
          </div>
          <div className="flex items-start gap-2">
            <Link2 className="h-4 w-4 text-indigo-500 mt-0.5" />
            <p className="text-sm text-indigo-600">
              contactus@pagibigfund.gov.ph
            </p>
          </div>
        </CardContent>
        <CardFooter className="pt-2">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm">
            View on Map
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
