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
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
      <CardFooter>
        <Button className="w-full" onClick={onSave}>
          {saveButtonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
