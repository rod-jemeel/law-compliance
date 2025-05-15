import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Save } from "lucide-react";

interface ChecklistCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  onSave?: () => void;
}

export function ChecklistCard({
  title,
  description,
  children,
  onSave,
}: ChecklistCardProps) {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-all w-full">
      <CardHeader className="border-b border-slate-100">
        <CardTitle className="text-xl text-gray-900">{title}</CardTitle>
        {description && (
          <CardDescription className="text-slate-500">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="pt-6 pb-4">
        <div className="space-y-3">{children}</div>
      </CardContent>
      {onSave && (
        <CardFooter className="bg-slate-50 rounded-b-lg border-t border-slate-100">
          <Button
            onClick={onSave}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            <Save className="mr-2 h-4 w-4" />
            Save Progress
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
