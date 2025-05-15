"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PricingState {
  selectedPlan: string | null;
}

const initialState: PricingState = {
  selectedPlan: null,
};

export const pricingSlice = createSlice({
  name: "pricing",
  initialState,
  reducers: {
    selectPlan: (state, action: PayloadAction<string>) => {
      state.selectedPlan = action.payload;
    },
    clearSelectedPlan: (state) => {
      state.selectedPlan = null;
    },
  },
});

export const { selectPlan, clearSelectedPlan } = pricingSlice.actions;

export default pricingSlice.reducer;
