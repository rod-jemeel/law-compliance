"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ResourcesState {
  activeTab: string;
  searchQuery: string;
  favoriteResources: string[];
}

const initialState: ResourcesState = {
  activeTab: "official",
  searchQuery: "",
  favoriteResources: [],
};

export const resourcesSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    addFavoriteResource: (state, action: PayloadAction<string>) => {
      if (!state.favoriteResources.includes(action.payload)) {
        state.favoriteResources.push(action.payload);
      }
    },
    removeFavoriteResource: (state, action: PayloadAction<string>) => {
      state.favoriteResources = state.favoriteResources.filter(
        (id) => id !== action.payload
      );
    },
  },
});

export const {
  setActiveTab,
  setSearchQuery,
  addFavoriteResource,
  removeFavoriteResource,
} = resourcesSlice.actions;

export default resourcesSlice.reducer;
