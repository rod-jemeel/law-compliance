import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DashboardState, Business, Deadline } from "./dashboard-state";

export const initialState: DashboardState = {
  businesses: [
    {
      id: "1",
      name: "Acme Coffee Shop",
      type: "Sole Proprietorship",
    },
    {
      id: "2",
      name: "Tech Solutions Inc.",
      type: "Corporation",
    },
  ],
  upcomingDeadlines: [
    {
      id: "1",
      title: "Barangay Clearance Renewal",
      businessId: "1",
      businessName: "Acme Coffee Shop",
      dueDate: "Jan 20, 2026",
      daysLeft: 67,
    },
    {
      id: "2",
      title: "Mayor's Permit Renewal",
      businessId: "1",
      businessName: "Acme Coffee Shop",
      dueDate: "Jan 20, 2026",
      daysLeft: 67,
    },
    {
      id: "3",
      title: "BIR Annual Registration",
      businessId: "2",
      businessName: "Tech Solutions Inc.",
      dueDate: "Jan 31, 2026",
      daysLeft: 78,
    },
  ],
  complianceStatus: {
    status: "Good",
    message: "All permits are current",
  },
  documentStatus: {
    percentage: 75,
    message: "3 of 12 documents need updating",
  },
};

export const dashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState,
  reducers: {
    addBusiness(state: DashboardState, action: PayloadAction<Business>) {
      state.businesses.push(action.payload);
    },
    addDeadline(state: DashboardState, action: PayloadAction<Deadline>) {
      state.upcomingDeadlines.push(action.payload);
    },
    updateComplianceStatus(
      state: DashboardState,
      action: PayloadAction<{
        status: "Good" | "Warning" | "Critical";
        message: string;
      }>
    ) {
      state.complianceStatus = action.payload;
    },
    updateDocumentStatus(
      state: DashboardState,
      action: PayloadAction<{ percentage: number; message: string }>
    ) {
      state.documentStatus = action.payload;
    },
  },
});

export const dashboardActions = dashboardSlice.actions;

export default dashboardSlice.reducer;
