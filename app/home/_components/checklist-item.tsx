"use client";

import { CheckCircle2 } from "lucide-react";

interface ChecklistItemProps {
  title: string;
  description: string;
}

export default function ChecklistItem({
  title,
  description,
}: ChecklistItemProps) {
  return (
    <div className="flex items-start space-x-2">
      <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
