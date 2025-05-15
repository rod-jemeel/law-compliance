import { useState } from "react";
import { Button } from "@/components/ui/button";

interface PenaltyCalculatorProps {
  initialTaxAmount?: number;
  initialMonthsOverdue?: number;
}

export function PenaltyCalculator({
  initialTaxAmount = 0,
  initialMonthsOverdue = 0,
}: PenaltyCalculatorProps) {
  const [taxAmount, setTaxAmount] = useState(initialTaxAmount);
  const [monthsOverdue, setMonthsOverdue] = useState(initialMonthsOverdue);
  const [surcharge, setSurcharge] = useState(0);
  const [interest, setInterest] = useState(0);
  const [total, setTotal] = useState(0);

  const calculatePenalty = () => {
    const calculatedSurcharge = taxAmount * 0.25; // 25% surcharge
    const calculatedInterest = taxAmount * 0.02 * monthsOverdue; // 2% monthly interest
    const calculatedTotal = calculatedSurcharge + calculatedInterest;

    setSurcharge(calculatedSurcharge);
    setInterest(calculatedInterest);
    setTotal(calculatedTotal);
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
            Annual Business Tax Amount (PHP)
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-red-200 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Enter amount"
            type="number"
            value={taxAmount || ""}
            onChange={(e) => setTaxAmount(Number(e.target.value))}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Months Overdue
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-red-200 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Enter months"
            type="number"
            value={monthsOverdue || ""}
            onChange={(e) => setMonthsOverdue(Number(e.target.value))}
          />
        </div>
        <Button
          className="w-full bg-red-600 hover:bg-red-700 text-white"
          onClick={calculatePenalty}
        >
          Calculate Penalty
        </Button>
      </div>
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
          <h3 className="font-medium text-red-700">Estimated Penalties:</h3>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span className="text-red-600">25% Surcharge:</span>
              <span className="font-medium">PHP {surcharge.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-red-600">2% Monthly Interest:</span>
              <span className="font-medium">PHP {interest.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-t border-red-200 pt-1 mt-1">
              <span className="font-medium text-red-700">Total Penalty:</span>
              <span className="font-bold text-red-700">
                PHP {total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-red-200 p-4 bg-red-50">
          <h4 className="font-medium mb-2 text-red-700">Important Note:</h4>
          <p className="text-sm text-red-600">
            Operating without valid permits can lead to business closure and
            additional penalties. Always renew before the January 20th deadline.
          </p>
        </div>
      </div>
    </div>
  );
}
