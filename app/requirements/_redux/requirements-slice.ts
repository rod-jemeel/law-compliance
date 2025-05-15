"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RequirementsState {
  activeTab: "national" | "local";
  searchQuery: string;
  expandedItems: string[];
}

const initialState: RequirementsState = {
  activeTab: "national",
  searchQuery: "",
  expandedItems: [],
};

export const requirementsSlice = createSlice({
  name: "requirements",
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<"national" | "local">) => {
      state.activeTab = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    expandItem: (state, action: PayloadAction<string>) => {
      if (!state.expandedItems.includes(action.payload)) {
        state.expandedItems.push(action.payload);
      }
    },
    collapseItem: (state, action: PayloadAction<string>) => {
      state.expandedItems = state.expandedItems.filter(
        (id) => id !== action.payload
      );
    },
    toggleItem: (state, action: PayloadAction<string>) => {
      if (state.expandedItems.includes(action.payload)) {
        state.expandedItems = state.expandedItems.filter(
          (id) => id !== action.payload
        );
      } else {
        state.expandedItems.push(action.payload);
      }
    },
  },
});

export const {
  setActiveTab,
  setSearchQuery,
  expandItem,
  collapseItem,
  toggleItem,
} = requirementsSlice.actions;

export default requirementsSlice.reducer;
