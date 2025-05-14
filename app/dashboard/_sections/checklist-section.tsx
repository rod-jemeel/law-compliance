"use client";

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
        <Button className="w-full">View Complete Checklists</Button>
      </CardFooter>
    </Card>
  );
}
