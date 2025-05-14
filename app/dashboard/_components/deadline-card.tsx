"use client";

import { Deadline } from "../_redux/dashboard-state";

interface DeadlineCardProps {
  deadline: Deadline;
}

export default function DeadlineCard({ deadline }: DeadlineCardProps) {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
      <div>
        <h3 className="font-medium">{deadline.title}</h3>
        <p className="text-sm text-muted-foreground">{deadline.businessName}</p>
      </div>
      <div className="text-right">
        <p className="font-medium">{deadline.dueDate}</p>
        <p className="text-sm text-muted-foreground">
          {deadline.daysLeft} days left
        </p>
      </div>
    </div>
  );
}
