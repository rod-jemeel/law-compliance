import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PenaltyCalculator as PenaltyCalculatorComponent } from "../_components";
import { useChecklist } from "../_redux/checklist-context";

export function PenaltyCalculatorSection() {
  const { state } = useChecklist();
  const { penaltyCalculator } = state;

  return (
    <Card className="max-w-4xl mx-auto border-red-300 bg-red-50 shadow-md">
      <CardHeader>
        <CardTitle className="text-red-600">Penalty Calculator</CardTitle>
        <CardDescription className="text-red-800">
          Estimate potential penalties for late renewal or registration
        </CardDescription>
      </CardHeader>
      <CardContent>
        <PenaltyCalculatorComponent
          initialTaxAmount={penaltyCalculator.taxAmount}
          initialMonthsOverdue={penaltyCalculator.monthsOverdue}
        />
      </CardContent>
    </Card>
  );
}
