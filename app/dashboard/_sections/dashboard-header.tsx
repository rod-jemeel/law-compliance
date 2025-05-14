"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <Button>
        <Plus className="mr-2 h-4 w-4" />
        Add New Business
      </Button>
    </div>
  );
}
