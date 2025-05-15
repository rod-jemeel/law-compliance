"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Business } from "../_redux/dashboard-state";
import { EditBusinessModal } from "./business-modals";

interface BusinessCardProps {
  business: Business;
}

export default function BusinessCard({ business }: BusinessCardProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg bg-white hover:border-indigo-200 transition-colors">
        <div>
          <h3 className="font-medium text-gray-800">{business.name}</h3>
          <p className="text-sm text-slate-500">{business.type}</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsEditModalOpen(true)}
          className="border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-800"
        >
          Manage
        </Button>
      </div>

      <EditBusinessModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        business={business}
      />
    </>
  );
}
