import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ChecklistCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  onSave?: () => void;
  saveButtonText?: string;
}

export function ChecklistCard({
  title,
  description,
  children,
  onSave,
  saveButtonText = "Save Progress",
}: ChecklistCardProps) {
  return (
    <Card className="border-blue-200 bg-white shadow-md">
      <CardHeader>
        <CardTitle className="text-blue-700">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
      <CardFooter>
        <Button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          onClick={onSave}
        >
          {saveButtonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
