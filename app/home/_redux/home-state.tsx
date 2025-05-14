export interface HomeState {
  penaltyCalculator: {
    businessTaxAmount: number;
    monthsOverdue: number;
    calculatedPenalty: number;
    surchargeAmount: number;
    interestAmount: number;
  };
}
