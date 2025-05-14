"use client";

import { useState } from "react";
import { useAppDispatch } from "@/hooks/hooks";
import { AlertCircle, Edit2 } from "lucide-react";
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

interface DeadlineCardProps {
  deadline: Deadline;
}

export default function DeadlineCard({ deadline }: DeadlineCardProps) {
  const dispatch = useAppDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Determine urgency based on days left
  const getUrgencyColor = (daysLeft: number) => {
    if (daysLeft <= 7) return "text-red-500";
    if (daysLeft <= 30) return "text-amber-500";
    return "text-green-500";
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
        className="flex items-center justify-between p-4 border border-gray-300 rounded-lg relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <h3 className="font-medium">{deadline.title}</h3>
          <p className="text-sm text-muted-foreground">
            {deadline.businessName}
          </p>
        </div>
        <div className="text-right">
          <p className="font-medium">{deadline.dueDate}</p>
          <p className={`text-sm ${getUrgencyColor(deadline.daysLeft)}`}>
            {deadline.daysLeft} days left
          </p>
        </div>
        {isHovered && (
          <div className="absolute top-2 right-2 flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => setIsEditModalOpen(true)}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <Edit2 size={16} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Edit deadline</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={handleRemoveDeadline}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <AlertCircle size={16} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Remove deadline</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}{" "}
      </div>
      <EditDeadlineModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        deadline={deadline}
      />
    </>
  );
}
