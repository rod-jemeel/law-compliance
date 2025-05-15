"use client";

import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-12">
          <div className="flex flex-col justify-center space-y-6 w-full lg:max-w-[60%]">
            <div className="space-y-4">
              <span className="inline-block text-indigo-600 font-semibold tracking-wide uppercase text-sm">
                Business Compliance Made Simple
              </span>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900">
                Never Miss a Business Permit Deadline Again
              </h1>
              <p className="text-slate-600 text-lg md:text-xl max-w-xl leading-relaxed">
                Stay compliant with all business registration and renewal
                requirements in the Philippines with our easy-to-use tracking
                system.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-md"
              >
                Start Tracking
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => router.push("/resources")}
                variant="outline"
                size="lg"
                className="border-indigo-200 text-indigo-700 hover:bg-indigo-50"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="flex w-full lg:w-[40%] flex-col justify-center space-y-4 rounded-xl border-0 bg-gradient-to-br from-rose-50 to-red-100 p-4 shadow-lg sm:p-6 lg:p-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-rose-600" />
              <h3 className="text-xl font-bold text-rose-700">
                Upcoming Deadlines
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-lg border border-rose-200 bg-white p-3 hover:border-rose-400 transition-colors shadow-sm">
                <div className="space-y-0.5">
                  <h4 className="font-medium text-gray-800">
                    Barangay Clearance Renewal
                  </h4>
                  <p className="text-sm text-rose-600 font-medium">
                    Before January 20, 2026
                  </p>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-600 text-white shadow-sm">
                  <span className="text-xs font-bold">67</span>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-rose-200 bg-white p-3 hover:border-rose-400 transition-colors shadow-sm">
                <div className="space-y-0.5">
                  <h4 className="font-medium text-gray-800">
                    Mayor&apos;s Permit Renewal
                  </h4>
                  <p className="text-sm text-rose-600 font-medium">
                    Before January 20, 2026
                  </p>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-600 text-white shadow-sm">
                  <span className="text-xs font-bold">67</span>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-rose-200 bg-white p-3 hover:border-rose-400 transition-colors shadow-sm">
                <div className="space-y-0.5">
                  <h4 className="font-medium text-gray-800">
                    BIR Annual Registration
                  </h4>
                  <p className="text-sm text-rose-600 font-medium">
                    Before January 31, 2026
                  </p>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-600 text-white shadow-sm">
                  <span className="text-xs font-bold">78</span>
                </div>
              </div>
            </div>

            <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white shadow-md">
              View All Deadlines
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
