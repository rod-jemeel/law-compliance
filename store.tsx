import { configureStore } from "@reduxjs/toolkit";
import rootSlice from "./app/_redux/root-slice";
import homeSlice from "./app/home/_redux/home-slice";
import dashboardSlice from "./app/dashboard/_redux/dashboard-slice";
import checklistReducer from "./app/checklist/_redux/checklist-slice";
import authReducer from "./app/auth/_redux/auth-slice";
import pricingReducer from "./app/pricing/_redux/pricing-slice";
import resourcesReducer from "./app/resources/_redux/resources-slice";
import requirementsReducer from "./app/requirements/_redux/requirements-slice";
import contactReducer from "./app/contact/_redux/contact-slice";

export const store = configureStore({
  reducer: {
    rootState: rootSlice,
    homeState: homeSlice,
    dashboardState: dashboardSlice,
    checklist: checklistReducer,
    auth: authReducer,
    pricing: pricingReducer,
    resources: resourcesReducer,
    requirements: requirementsReducer,
    contact: contactReducer,
  },
});

// Infer the type of makeStore
export type GetState = typeof store.getState;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
