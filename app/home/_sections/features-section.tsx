"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, CheckSquare } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <span className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">
            Why Choose Our Platform
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Stay Compliant, Stay in Business
          </h2>
          <p className="text-slate-600 md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed max-w-3xl">
            Securing and maintaining valid business permits is not just a
            procedural requirement—it&apos;s essential for legal operation in
            the Philippines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-md bg-white hover:shadow-lg transition-all">
            <CardHeader className="pb-2 space-y-2">
              <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center mb-2">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-800">
                Avoid Penalties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                Operating without valid permits can lead to fines of PHP
                5,000-20,000, business closure, and reputational damage.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-white hover:shadow-lg transition-all">
            <CardHeader className="pb-2 space-y-2">
              <div className="h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-2">
                <Clock className="h-6 w-6 text-indigo-600" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-800">
                Track Deadlines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                Never miss critical renewal dates with automated reminders for
                Barangay Clearance, Mayor&apos;s Permit, and BIR registration.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-white hover:shadow-lg transition-all">
            <CardHeader className="pb-2 space-y-2">
              <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-2">
                <CheckSquare className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-800">
                Simplify Compliance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                Access comprehensive checklists and step-by-step guides tailored
                specifically for local businesses.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
