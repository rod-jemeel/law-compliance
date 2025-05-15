"use client";

import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactInfoSection() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h4 className="font-medium">Office Address</h4>
              <p className="text-sm text-muted-foreground">
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
            <Phone className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h4 className="font-medium">Phone Numbers</h4>
              <p className="text-sm text-muted-foreground">
                Main Office: +63 (35) 421-5678
                <br />
                Customer Support: +63 (35) 421-5679
                <br />
                Toll-Free: 1-800-PERMITS (1-800-7376487)
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h4 className="font-medium">Email Addresses</h4>
              <p className="text-sm text-muted-foreground">
                General Inquiries: info@permittracker.ph
                <br />
                Customer Support: support@permittracker.ph
                <br />
                Partnerships: partners@permittracker.ph
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Building2 className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h4 className="font-medium">Business Hours</h4>
              <p className="text-sm text-muted-foreground">
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
      {/* Additional cards can be added here */}
    </div>
  );
}
