import { configureStore } from "@reduxjs/toolkit";
import rootSlice from "./app/_redux/root-slice";
import homeSlice from "./app/home/_redux/home-slice";
import dashboardSlice from "./app/dashboard/_redux/dashboard-slice";

export const store = configureStore({
  reducer: {
    rootState: rootSlice,
    homeState: homeSlice,
    dashboardState: dashboardSlice,
  },
});

// Infer the type of makeStore
export type GetState = typeof store.getState;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
