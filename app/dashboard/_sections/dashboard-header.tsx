"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-slate-500 mt-1">Manage your business compliance</p>
      </div>
      <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
        <Plus className="mr-2 h-4 w-4" />
        Add New Business
      </Button>
    </div>
  );
}
