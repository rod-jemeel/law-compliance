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
import { Calendar, Clock, MapPin } from "lucide-react";

export function WorkshopsSection() {
  return (
    <Card className="border-t-2 border-t-teal-500 border-teal-200 shadow-sm bg-teal-50/30">
      <CardHeader>
        <CardTitle className="text-teal-700">
          Upcoming Workshops and Seminars
        </CardTitle>
        <CardDescription>
          Educational events to help you understand business registration and
          compliance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-teal-200 rounded-lg hover:shadow-sm transition-all bg-white">
            <div className="flex items-start gap-4">
              <div className="bg-teal-100 p-2 rounded-full">
                <Calendar className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-teal-700">
                  Business Registration Workshop
                </h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  <Clock className="h-3.5 w-3.5 text-teal-500" />
                  June 15, 2025
                  <span className="mx-1">•</span>
                  <MapPin className="h-3.5 w-3.5 text-teal-500" />
                  City / Municipality Hall
                </p>
              </div>
            </div>
            <Button
              size="sm"
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              Register
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border border-teal-200 rounded-lg hover:shadow-sm transition-all bg-white">
            <div className="flex items-start gap-4">
              <div className="bg-teal-100 p-2 rounded-full">
                <Calendar className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-teal-700">
                  Tax Compliance for Small Businesses
                </h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  <Clock className="h-3.5 w-3.5 text-teal-500" />
                  July 8, 2025
                  <span className="mx-1">•</span>
                  <MapPin className="h-3.5 w-3.5 text-teal-500" />
                  DTI Negros Oriental Office
                </p>
              </div>
            </div>
            <Button
              size="sm"
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              Register
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border border-teal-200 rounded-lg hover:shadow-sm transition-all bg-white">
            <div className="flex items-start gap-4">
              <div className="bg-teal-100 p-2 rounded-full">
                <Calendar className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-teal-700">
                  Digital Business Permits Seminar
                </h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  <Clock className="h-3.5 w-3.5 text-teal-500" />
                  July 22, 2025
                  <span className="mx-1">•</span>
                  <MapPin className="h-3.5 w-3.5 text-teal-500" />
                  Online Webinar
                </p>
              </div>
            </div>
            <Button
              size="sm"
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              Register
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
          View All Events
        </Button>
      </CardFooter>
    </Card>
  );
}
