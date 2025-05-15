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

export function WorkshopsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Workshops and Seminars</CardTitle>
        <CardDescription>
          Educational events to help you understand business registration and
          compliance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">Business Registration Workshop</h3>
              <p className="text-sm text-muted-foreground">
                June 15, 2025 • Dumaguete City Hall
              </p>
            </div>
            <Button variant="outline" size="sm">
              Register
            </Button>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">
                Tax Compliance for Small Businesses
              </h3>
              <p className="text-sm text-muted-foreground">
                July 8, 2025 • DTI Negros Oriental Office
              </p>
            </div>
            <Button variant="outline" size="sm">
              Register
            </Button>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">Digital Business Permits Seminar</h3>
              <p className="text-sm text-muted-foreground">
                July 22, 2025 • Online Webinar
              </p>
            </div>
            <Button variant="outline" size="sm">
              Register
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View All Events
        </Button>
      </CardFooter>
    </Card>
  );
}
