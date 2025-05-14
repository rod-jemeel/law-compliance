import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomeState } from "./home-state";

export const initialState: HomeState = {
  penaltyCalculator: {
    businessTaxAmount: 0,
    monthsOverdue: 0,
    calculatedPenalty: 0,
    surchargeAmount: 0,
    interestAmount: 0,
  },
};

export const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    setBusinessTaxAmount(state: HomeState, action: PayloadAction<number>) {
      state.penaltyCalculator.businessTaxAmount = action.payload;
    },
    setMonthsOverdue(state: HomeState, action: PayloadAction<number>) {
      state.penaltyCalculator.monthsOverdue = action.payload;
    },
    calculatePenalty(state: HomeState) {
      const { businessTaxAmount, monthsOverdue } = state.penaltyCalculator;

      // Calculate surcharge - 25% of the unpaid business tax
      const surchargeAmount = businessTaxAmount * 0.25;

      // Calculate interest - 2% per month of the unpaid business tax
      const interestAmount = businessTaxAmount * 0.02 * monthsOverdue;

      // Total penalty = surcharge + interest
      const calculatedPenalty = surchargeAmount + interestAmount;

      state.penaltyCalculator.surchargeAmount = surchargeAmount;
      state.penaltyCalculator.interestAmount = interestAmount;
      state.penaltyCalculator.calculatedPenalty = calculatedPenalty;
    },
  },
});

export const homeActions = homeSlice.actions;

export default homeSlice.reducer;
