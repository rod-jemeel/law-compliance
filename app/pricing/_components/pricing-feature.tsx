"use client";

import { Check } from "lucide-react";

export interface PricingFeatureProps {
  feature: string;
}

export function PricingFeature({ feature }: PricingFeatureProps) {
  return (
    <li className="flex items-center gap-2">
      <Check className="h-4 w-4 text-primary" />
      <span>{feature}</span>
    </li>
  );
}
