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
import { Calendar, Plus, ListChecks } from "lucide-react";

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
      <Card className="border-0 shadow-md hover:shadow-lg transition-all flex flex-col">
        <CardHeader className="border-b border-slate-100">
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
            Track
          </span>
          <CardTitle className="text-xl text-gray-900">
            Upcoming Deadlines
          </CardTitle>
          <CardDescription className="text-slate-500">
            Critical dates for your businesses
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6 flex-grow">
          {urgentDeadlines.length === 0 ? (
            <div className="text-center py-8 bg-slate-50 rounded-lg border border-slate-200">
              <Calendar className="mx-auto h-10 w-10 mb-3 text-slate-400" />
              <p className="text-gray-700 font-medium">No upcoming deadlines</p>
              <p className="text-sm text-slate-500 mt-1">
                Add some deadlines to stay on track with your compliance
                requirements.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {urgentDeadlines.map((deadline) => (
                <DeadlineCard key={deadline.id} deadline={deadline} />
              ))}
            </div>
          )}
        </CardContent>

        <CardFooter className="bg-slate-50 rounded-b-lg border-t border-slate-100 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            <Button
              variant="outline"
              onClick={() => setIsAddModalOpen(true)}
              className="border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-800"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Deadline
            </Button>
            <Button
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
              onClick={() => setIsViewAllModalOpen(true)}
            >
              <ListChecks className="mr-2 h-4 w-4" />
              View All
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
