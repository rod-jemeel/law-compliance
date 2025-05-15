import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface ChecklistItemProps {
  id: string;
  label: string;
  description?: string;
  checked: boolean;
  onCheckedChange: () => void;
}

export function ChecklistItem({
  id,
  label,
  description,
  checked,
  onCheckedChange,
}: ChecklistItemProps) {
  return (
    <Card
      className={`p-4 border ${
        checked ? "bg-green-50 border-green-200" : "bg-white border-slate-200"
      } hover:border-indigo-200 transition-colors`}
    >
      <div className="flex items-start gap-3">
        <Checkbox
          id={id}
          checked={checked}
          onCheckedChange={onCheckedChange}
          className="mt-1 data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600"
        />
        <div className="grid gap-1.5 leading-none w-full">
          <Label
            htmlFor={id}
            className={`text-base font-medium ${
              checked ? "text-green-700" : "text-gray-800"
            }`}
          >
            {label}
          </Label>
          {description && (
            <p
              className={`text-sm ${
                checked ? "text-green-600/80" : "text-slate-500"
              }`}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}
