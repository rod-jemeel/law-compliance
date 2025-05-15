"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function RequirementsHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <span className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">
          Legal Documentation
        </span>
        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-2">
          Business Permit Requirements
        </h1>
        <p className="text-slate-500 max-w-2xl">
          Comprehensive guide to all requirements for business registration and
          renewal in your Local Government Unit (LGU).
        </p>
      </div>
      <div className="relative w-full md:w-[300px]">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-indigo-500" />
        <Input
          type="search"
          placeholder="Search requirements..."
          className="w-full pl-8 border-indigo-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
    </div>
  );
}
