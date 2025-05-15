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
    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors">
      <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600 flex-shrink-0" />
      <div>
        <p className="font-medium text-gray-800">{title}</p>
        <p className="text-sm text-slate-600 mt-1 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
