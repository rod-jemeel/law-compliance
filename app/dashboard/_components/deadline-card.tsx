"use client";

import { useState } from "react";
import { useAppDispatch } from "@/hooks/hooks";
import { Edit2, Trash2 } from "lucide-react";
import { Deadline } from "../_redux/dashboard-state";
import { dashboardActions } from "../_redux/dashboard-slice";
import { saveDashboardState } from "../_redux/dashboard-storage";
import { EditDeadlineModal } from "./deadline-modals";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

interface DeadlineCardProps {
  deadline: Deadline;
}

export default function DeadlineCard({ deadline }: DeadlineCardProps) {
  const dispatch = useAppDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Determine urgency based on days left
  const getUrgencyColor = (daysLeft: number) => {
    if (daysLeft <= 7) return "text-red-600";
    if (daysLeft <= 30) return "text-amber-600";
    return "text-green-600";
  };

  // Get background color based on urgency
  const getUrgencyBackground = (daysLeft: number) => {
    if (daysLeft <= 7) return "bg-red-50 border-red-200";
    if (daysLeft <= 30) return "bg-amber-50 border-amber-200";
    return "bg-white border-slate-200";
  };

  const handleRemoveDeadline = () => {
    dispatch(dashboardActions.removeDeadline(deadline.id));

    // Save to local storage after removing
    setTimeout(() => {
      const state = dispatch((_, getState) => getState()).dashboardState;
      saveDashboardState(state);
    }, 0);
  };

  return (
    <>
      <div
        className={`flex items-center justify-between p-4 border rounded-lg relative hover:shadow-sm transition-all ${getUrgencyBackground(
          deadline.daysLeft
        )}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <h3 className="font-medium text-gray-800">{deadline.title}</h3>
          <p className="text-sm text-slate-500">{deadline.businessName}</p>
        </div>
        <div className="text-right">
          <p className="font-medium text-gray-700">{deadline.dueDate}</p>
          <p
            className={`text-sm font-semibold ${getUrgencyColor(
              deadline.daysLeft
            )}`}
          >
            {deadline.daysLeft} days left
          </p>
        </div>

        {isHovered && (
          <div className="absolute inset-0 bg-black/5 rounded-lg flex items-center justify-end p-2 gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 bg-white border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-800"
                    onClick={() => setIsEditModalOpen(true)}
                  >
                    <Edit2 size={14} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Edit deadline</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 bg-white border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                    onClick={handleRemoveDeadline}
                  >
                    <Trash2 size={14} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Remove deadline</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
      </div>

      <EditDeadlineModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        deadline={deadline}
      />
    </>
  );
}
