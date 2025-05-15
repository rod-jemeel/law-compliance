"use client";

import { useAppSelector } from "@/hooks/hooks";
import { RootState } from "@/store";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";

export default function SummarySection() {
  const state = useAppSelector((state: RootState) => state.dashboardState);

  // Get status-specific classes
  const getStatusClasses = (status: string) => {
    switch (status) {
      case "Good":
        return "bg-green-50/70 border-green-200 shadow-sm";
      case "Warning":
        return "bg-amber-50/70 border-amber-200 shadow-sm";
      case "Critical":
        return "bg-red-50/70 border-red-200 shadow-sm";
      default:
        return "shadow-sm";
    }
  };

  // Get status icon
  const StatusIcon = ({ status }: { status: string }) => {
    switch (status) {
      case "Good":
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case "Warning":
        return <AlertTriangle className="h-6 w-6 text-amber-500" />;
      case "Critical":
        return <XCircle className="h-6 w-6 text-red-500" />;
      default:
        return null;
    }
  };

  // Get progress bar color class
  const getProgressColorClass = (percentage: number) => {
    if (percentage >= 75) return "progress-green";
    if (percentage >= 40) return "progress-amber";
    return "progress-red";
  };

  return (
    <div className="grid gap-6 md:grid-cols-3 mb-8">
      <Card className="border-0 shadow-sm hover:shadow transition-all">
        <CardHeader className="pb-2">
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
            Upcoming
          </span>
          <CardTitle className="text-xl text-gray-900">Deadlines</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className={`text-3xl font-bold ${
              state.upcomingDeadlines.length > 5
                ? "text-red-500"
                : state.upcomingDeadlines.length > 2
                ? "text-amber-500"
                : "text-green-500"
            }`}
          >
            {state.upcomingDeadlines.length}
          </div>
          <p className="text-sm text-slate-500">Within the next 90 days</p>
        </CardContent>
      </Card>

      <Card
        className={`border-0 ${getStatusClasses(
          state.complianceStatus.status
        )} hover:shadow transition-all`}
      >
        <CardHeader className="pb-2">
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
            Current Status
          </span>
          <CardTitle className="text-xl text-gray-900">
            Compliance Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <StatusIcon status={state.complianceStatus.status} />
            <div
              className={`text-3xl font-bold ${
                state.complianceStatus.status === "Good"
                  ? "text-green-500"
                  : state.complianceStatus.status === "Warning"
                  ? "text-amber-500"
                  : "text-red-500"
              }`}
            >
              {state.complianceStatus.status}
            </div>
          </div>
          <p className="text-sm text-slate-500">
            {state.complianceStatus.message}
          </p>
        </CardContent>
      </Card>

      <Card
        className={`border-0 ${
          state.documentStatus.percentage >= 75
            ? "bg-green-50/70 border-green-200"
            : state.documentStatus.percentage >= 40
            ? "bg-amber-50/70 border-amber-200"
            : "bg-red-50/70 border-red-200"
        } shadow-sm hover:shadow transition-all`}
      >
        <CardHeader className="pb-2">
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
            Documentation
          </span>
          <CardTitle className="text-xl text-gray-900">
            Document Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm items-center flex flex-row gap-2 font-bold mb-2">
            <div
              className={`w-full ${getProgressColorClass(
                state.documentStatus.percentage
              )}`}
            >
              <Progress
                value={state.documentStatus.percentage}
                className="h-3 w-full rounded-full"
              />
            </div>
            <span
              className={
                state.documentStatus.percentage >= 75
                  ? "text-green-500"
                  : state.documentStatus.percentage >= 40
                  ? "text-amber-500"
                  : "text-red-500"
              }
            >
              {state.documentStatus.percentage}%
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-slate-500">
              {state.documentStatus.message}
            </p>
          </div>
        </CardContent>
      </Card>

      <style jsx global>{`
        .progress-green .bg-primary {
          background-color: rgb(34 197 94); /* green-500 */
        }
        .progress-amber .bg-primary {
          background-color: rgb(234 179 8); /* amber-500 */
        }
        .progress-red .bg-primary {
          background-color: rgb(239 68 68); /* red-500 */
        }
      `}</style>
    </div>
  );
}
