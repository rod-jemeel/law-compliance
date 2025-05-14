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
import ComplianceChecklist from "../_components/compliance-checklist-new";

export default function ChecklistSection() {
  const router = useRouter();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Compliance Checklists</CardTitle>
        <CardDescription>
          Track your progress on required documents and permits
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ComplianceChecklist />
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={() => router.push("/checklist")}>
          View Complete Checklists
        </Button>
      </CardFooter>
    </Card>
  );
}
