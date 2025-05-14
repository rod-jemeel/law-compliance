"use client";

import { useAppSelector } from "@/hooks/hooks";
import { RootState } from "@/store";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function SummarySection() {
  const state = useAppSelector((state: RootState) => state.dashboardState);

  return (
    <div className="grid gap-6 md:grid-cols-3 mb-8">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Upcoming Deadlines</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">
            {state.upcomingDeadlines.length}
          </div>
          <p className="text-sm text-muted-foreground">
            Within the next 90 days
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Compliance Status</CardTitle>
        </CardHeader>
        <CardContent>
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
          <p className="text-sm text-muted-foreground">
            {state.complianceStatus.message}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Document Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm items-center flex flex-row gap-2 font-bold mb-2">
            <Progress
              value={state.documentStatus.percentage}
              className="h-3 w-full"
            />
            {state.documentStatus.percentage}%
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">
              {state.documentStatus.message}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
