"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { useAppSelector } from "@/hooks/hooks";
import { RootState } from "@/store";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BusinessCard from "../_components/business-card";
import { AddBusinessModal } from "../_components/business-modals";

export default function BusinessesSection() {
  const state = useAppSelector((state: RootState) => state.dashboardState);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Your Businesses</CardTitle>
          <CardDescription>Manage your registered businesses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {state.businesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => setIsAddModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Business
          </Button>
        </CardFooter>
      </Card>

      <AddBusinessModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </>
  );
}
