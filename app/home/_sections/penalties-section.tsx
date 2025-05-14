"use client";

import { ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { RootState } from "@/store";
import { homeActions } from "../_redux/home-slice";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";

export default function PenaltiesSection() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state: RootState) => state.homeState);

  // Local state for form validation
  const [formErrors, setFormErrors] = useState({
    businessTaxAmount: false,
    monthsOverdue: false,
  });

  const handleBusinessTaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      dispatch(homeActions.setBusinessTaxAmount(value));
      setFormErrors((prev) => ({ ...prev, businessTaxAmount: false }));
    }
  };

  const handleMonthsOverdueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      dispatch(homeActions.setMonthsOverdue(value));
      setFormErrors((prev) => ({ ...prev, monthsOverdue: false }));
    }
  };
  const handleCalculatePenalty = (e: FormEvent) => {
    e.preventDefault();

    // Validate inputs
    const errors = {
      businessTaxAmount: state.penaltyCalculator.businessTaxAmount <= 0,
      monthsOverdue: state.penaltyCalculator.monthsOverdue < 0,
    };

    setFormErrors(errors);

    if (!errors.businessTaxAmount && !errors.monthsOverdue) {
      dispatch(homeActions.calculatePenalty());
    }
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4 w-full lg:max-w-[50%]">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Avoid Costly Penalties
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Non-compliance with business permit requirements can result in
                significant financial and operational consequences.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5 text-primary" />
                <p className="font-medium">
                  25% surcharge on unpaid local business taxes
                </p>
              </div>
              <div className="flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5 text-primary" />
                <p className="font-medium">
                  2% monthly interest on outstanding amounts
                </p>
              </div>
              <div className="flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5 text-primary" />
                <p className="font-medium">
                  PHP 5,000 - 20,000 fines for operating without BIR
                  registration
                </p>
              </div>
              <div className="flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5 text-primary" />
                <p className="font-medium">
                  Potential business closure and reputational damage
                </p>
              </div>
            </div>{" "}
            <div>
              <Button>Start Tracking Now</Button>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4 w-full lg:max-w-[45%]">
            <Card>
              {" "}
              <CardHeader>
                <CardTitle>Penalty Calculator</CardTitle>
                <CardDescription>
                  Estimate potential penalties for late renewal based on
                  Philippine local government regulations
                </CardDescription>
              </CardHeader>
              <CardContent>
                {" "}
                <form onSubmit={handleCalculatePenalty} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Annual Business Tax Amount (PHP)
                    </label>
                    <input
                      className={`flex h-10 w-full rounded-md border ${
                        formErrors.businessTaxAmount
                          ? "border-red-500"
                          : "border-gray-300"
                      } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                      placeholder="Enter amount"
                      type="number"
                      value={state.penaltyCalculator.businessTaxAmount || ""}
                      onChange={handleBusinessTaxChange}
                    />
                    {formErrors.businessTaxAmount && (
                      <p className="text-xs text-red-500 mt-1">
                        Please enter a valid amount greater than 0
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Months Overdue
                    </label>
                    <input
                      className={`flex h-10 w-full rounded-md border ${
                        formErrors.monthsOverdue
                          ? "border-red-500"
                          : "border-gray-300"
                      } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                      placeholder="Enter months"
                      type="number"
                      value={state.penaltyCalculator.monthsOverdue || ""}
                      onChange={handleMonthsOverdueChange}
                    />
                    {formErrors.monthsOverdue && (
                      <p className="text-xs text-red-500 mt-1">
                        Please enter a valid number of months (0 or more)
                      </p>
                    )}
                  </div>
                  <Button type="submit" className="w-full">
                    Calculate Penalty
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col items-start space-y-4">
                <div className="space-y-1 w-full">
                  <p className="text-sm font-medium">Estimated Penalty:</p>{" "}
                  <p className="text-2xl font-bold">
                    {formatCurrency(state.penaltyCalculator.calculatedPenalty)}
                  </p>
                </div>

                {state.penaltyCalculator.calculatedPenalty > 0 && (
                  <div className="space-y-2 w-full bg-muted p-3 rounded-md">
                    <p className="text-sm font-medium">Breakdown:</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <p className="text-muted-foreground">25% Surcharge:</p>{" "}
                      <p className="font-medium">
                        {formatCurrency(
                          state.penaltyCalculator.surchargeAmount
                        )}
                      </p>
                      <p className="text-muted-foreground">
                        2% Monthly Interest:
                      </p>{" "}
                      <p className="font-medium">
                        {formatCurrency(state.penaltyCalculator.interestAmount)}
                      </p>
                    </div>{" "}
                    <p className="text-xs mt-2 text-muted-foreground">
                      Based on the Local Government Code of the Philippines
                      which generally applies a 25% surcharge and 2% monthly
                      interest on late business permit renewals across all
                      municipalities and cities.
                    </p>
                  </div>
                )}
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
