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
      <Card className="border-0 shadow-md hover:shadow-lg transition-all">
        <CardHeader className="border-b border-slate-100">
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
            Manage
          </span>
          <CardTitle className="text-xl text-gray-900">
            Your Businesses
          </CardTitle>
          <CardDescription className="text-slate-500">
            Manage your registered businesses
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {state.businesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </CardContent>
        <CardFooter className="bg-slate-50 rounded-b-lg border-t border-slate-100">
          <Button
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
            onClick={() => setIsAddModalOpen(true)}
          >
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
