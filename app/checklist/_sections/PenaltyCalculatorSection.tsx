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
  const { state, updatePenaltyCalculator, calculatePenalties } = useChecklist();
  const { penaltyCalculator } = state;

  const handleUpdateCalculator = (values: {
    taxAmount?: number;
    monthsOverdue?: number;
  }) => {
    updatePenaltyCalculator(values);
  };

  const handleCalculate = () => {
    calculatePenalties();
  };
  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Penalty Calculator</CardTitle>
        <CardDescription>
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
