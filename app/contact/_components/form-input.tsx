"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export interface FormInputProps {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FormInput({
  id,
  label,
  placeholder,
  type = "text",
  required = false,
  value,
  onChange,
}: FormInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
