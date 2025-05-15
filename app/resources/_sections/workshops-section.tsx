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
    <Card className="border-0 shadow-md hover:shadow-lg transition-all">
      <CardHeader className="border-b border-slate-100">
        <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">
          Educational Events
        </span>
        <CardTitle className="text-xl text-gray-900">
          Upcoming Workshops and Seminars
        </CardTitle>
        <CardDescription className="text-slate-500">
          Educational events to help you understand business registration and
          compliance
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-teal-200 hover:shadow-sm transition-all bg-white">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
                <Calendar className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">
                  Business Registration Workshop
                </h3>
                <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
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
              className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm"
            >
              Register
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-teal-200 hover:shadow-sm transition-all bg-white">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
                <Calendar className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">
                  Tax Compliance for Small Businesses
                </h3>
                <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
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
              className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm"
            >
              Register
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-teal-200 hover:shadow-sm transition-all bg-white">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
                <Calendar className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">
                  Digital Business Permits Seminar
                </h3>
                <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
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
              className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm"
            >
              Register
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-slate-50 rounded-b-lg border-t border-slate-100">
        <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm">
          View All Events
        </Button>
      </CardFooter>
    </Card>
  );
}
