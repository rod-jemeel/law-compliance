"use client";

import { useState } from "react";
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
import {
  ViewAllDeadlinesModal,
  AddDeadlineModal,
} from "../_components/deadline-modals";

export default function DeadlinesSection() {
  const state = useAppSelector((state: RootState) => state.dashboardState);
  const [isViewAllModalOpen, setIsViewAllModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Show only 3 most urgent deadlines
  const urgentDeadlines = [...state.upcomingDeadlines]
    .sort((a, b) => a.daysLeft - b.daysLeft)
    .slice(0, 3);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Deadlines</CardTitle>
          <CardDescription>Critical dates for your businesses</CardDescription>
        </CardHeader>
        <CardContent>
          {urgentDeadlines.length === 0 ? (
            <p className="text-center text-muted-foreground py-4">
              No upcoming deadlines. Add some to stay on track.
            </p>
          ) : (
            <div className="space-y-4">
              {urgentDeadlines.map((deadline) => (
                <DeadlineCard key={deadline.id} deadline={deadline} />
              ))}
            </div>
          )}
        </CardContent>

        <CardFooter>
          <div className="flex lg:flex-row flex-col gap-2">
            <Button
              className="w-full"
              variant="outline"
              onClick={() => setIsAddModalOpen(true)}
            >
              Add Deadline
            </Button>
            <Button
              className="w-full"
              onClick={() => setIsViewAllModalOpen(true)}
            >
              View All Deadlines
            </Button>
          </div>
        </CardFooter>
      </Card>

      <ViewAllDeadlinesModal
        isOpen={isViewAllModalOpen}
        onClose={() => setIsViewAllModalOpen(false)}
      />

      <AddDeadlineModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </>
  );
}
