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
      <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
        <div>
          <h3 className="font-medium">{business.name}</h3>
          <p className="text-sm text-muted-foreground">{business.type}</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsEditModalOpen(true)}
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
