"use client";

import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ComplianceChecklist from "../_components/compliance-checklist";

export default function ChecklistSection() {
  const router = useRouter();

  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-all">
      <CardHeader className="border-b border-slate-100">
        <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
          Track Progress
        </span>
        <CardTitle className="text-xl text-gray-900">
          Compliance Checklists
        </CardTitle>
        <CardDescription className="text-slate-500">
          Track your progress on required documents and permits
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <ComplianceChecklist />
      </CardContent>
      <CardFooter className="bg-slate-50 rounded-b-lg border-t border-slate-100">
        <Button
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
          onClick={() => router.push("/checklist")}
        >
          View Complete Checklists
        </Button>
      </CardFooter>
    </Card>
  );
}
