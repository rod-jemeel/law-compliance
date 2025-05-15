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
        return "bg-green-50 border-green-200";
      case "Warning":
        return "bg-yellow-50 border-yellow-200";
      case "Critical":
        return "bg-red-50 border-red-200";
      default:
        return "";
    }
  };

  // Get status icon
  const StatusIcon = ({ status }: { status: string }) => {
    switch (status) {
      case "Good":
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case "Warning":
        return <AlertTriangle className="h-6 w-6 text-yellow-500" />;
      case "Critical":
        return <XCircle className="h-6 w-6 text-red-500" />;
      default:
        return null;
    }
  };

  // Get progress bar color class
  const getProgressColorClass = (percentage: number) => {
    if (percentage >= 75) return "progress-green";
    if (percentage >= 40) return "progress-yellow";
    return "progress-red";
  };

  return (
    <div className="grid gap-6 md:grid-cols-3 mb-8">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Upcoming Deadlines</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className={`text-3xl font-bold ${
              state.upcomingDeadlines.length > 5
                ? "text-red-500"
                : state.upcomingDeadlines.length > 2
                ? "text-yellow-500"
                : "text-green-500"
            }`}
          >
            {state.upcomingDeadlines.length}
          </div>
          <p className="text-sm text-muted-foreground">
            Within the next 90 days
          </p>
        </CardContent>
      </Card>
      <Card className={getStatusClasses(state.complianceStatus.status)}>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Compliance Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <StatusIcon status={state.complianceStatus.status} />
            <div
              className={`text-3xl font-bold ${
                state.complianceStatus.status === "Good"
                  ? "text-green-500"
                  : state.complianceStatus.status === "Warning"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {state.complianceStatus.status}
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            {state.complianceStatus.message}
          </p>
        </CardContent>
      </Card>
      <Card
        className={
          state.documentStatus.percentage >= 75
            ? "bg-green-50 border-green-200"
            : state.documentStatus.percentage >= 40
            ? "bg-yellow-50 border-yellow-200"
            : "bg-red-50 border-red-200"
        }
      >
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Document Status</CardTitle>
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
                className="h-3 w-full"
              />
            </div>
            <span
              className={
                state.documentStatus.percentage >= 75
                  ? "text-green-500"
                  : state.documentStatus.percentage >= 40
                  ? "text-yellow-500"
                  : "text-red-500"
              }
            >
              {state.documentStatus.percentage}%
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">
              {state.documentStatus.message}
            </p>
          </div>
        </CardContent>
      </Card>

      <style jsx global>{`
        .progress-green .bg-primary {
          background-color: rgb(34 197 94); /* green-500 */
        }
        .progress-yellow .bg-primary {
          background-color: rgb(234 179 8); /* yellow-500 */
        }
        .progress-red .bg-primary {
          background-color: rgb(239 68 68); /* red-500 */
        }
      `}</style>
    </div>
  );
}
