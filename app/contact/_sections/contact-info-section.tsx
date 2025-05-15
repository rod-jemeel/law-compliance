"use client";

import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactInfoSection() {
  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-md hover:shadow-lg transition-all">
        <CardHeader className="border-b border-slate-100">
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
            Our Details
          </span>
          <CardTitle className="text-xl text-gray-900">
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 flex-shrink-0">
              <MapPin className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Office Address</h4>
              <p className="text-sm text-slate-500 mt-1">
                PermitTracker Philippines Inc.
                <br />
                Suite 1201, One Dumaguete Place
                <br />
                Rizal Boulevard, City / Municipality 6200
                <br />
                Negros Oriental, Philippines
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 flex-shrink-0">
              <Phone className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Phone Numbers</h4>
              <p className="text-sm text-slate-500 mt-1">
                Main Office: +63 (35) 421-5678
                <br />
                Customer Support: +63 (35) 421-5679
                <br />
                Toll-Free: 1-800-PERMITS (1-800-7376487)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 flex-shrink-0">
              <Mail className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Email Addresses</h4>
              <p className="text-sm text-slate-500 mt-1">
                General Inquiries:{" "}
                <span className="text-indigo-600">info@permittracker.ph</span>
                <br />
                Customer Support:{" "}
                <span className="text-indigo-600">
                  support@permittracker.ph
                </span>
                <br />
                Partnerships:{" "}
                <span className="text-indigo-600">
                  partners@permittracker.ph
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 flex-shrink-0">
              <Building2 className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Business Hours</h4>
              <p className="text-sm text-slate-500 mt-1">
                Monday - Friday: 8:00 AM - 5:00 PM
                <br />
                Saturday: 9:00 AM - 1:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
