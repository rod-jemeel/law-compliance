"use client";

import { useAppSelector } from "@/hooks/hooks";
import { RootState } from "@/store";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DeadlineCard from "../_components/deadline-card";

export default function DeadlinesSection() {
  const state = useAppSelector((state: RootState) => state.dashboardState);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Deadlines</CardTitle>
        <CardDescription>Critical dates for your businesses</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {state.upcomingDeadlines.map((deadline) => (
            <DeadlineCard key={deadline.id} deadline={deadline} />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View All Deadlines</Button>
      </CardFooter>
    </Card>
  );
}
