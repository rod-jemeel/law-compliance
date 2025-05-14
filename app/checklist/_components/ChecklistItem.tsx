import { Checkbox } from "@/components/ui/checkbox";

interface ChecklistItemProps {
  id: string;
  label: string;
  description?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export function ChecklistItem({
  id,
  label,
  description,
  checked = false,
  onCheckedChange,
}: ChecklistItemProps) {
  return (
    <div className="flex items-start space-x-2">
      <Checkbox
        id={id}
        className="mt-1"
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}
