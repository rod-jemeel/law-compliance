import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  DashboardState,
  Business,
  Deadline,
  ComplianceItem,
  BusinessComplianceItems,
} from "./dashboard-state";
import { ChecklistState } from "../../checklist/_redux/checklist-schema";

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
  complianceItems: {
    "1": {
      nationalItems: [
        {
          id: "item-1",
          label: "Determine the appropriate legal structure for the business",
          checked: true,
          validUntil: "Dec 15, 2027",
          category: "National Requirements",
        },
        {
          id: "item-2",
          label:
            "Register the chosen business name with the Department of Trade and Industry (DTI)",
          checked: true,
          validUntil: "Dec 15, 2027",
          category: "National Requirements",
        },
        {
          id: "item-3",
          label: "Register with SEC/CDA",
          checked: false,
          category: "National Requirements",
        },
        {
          id: "item-4",
          label:
            "Obtain a Taxpayer Identification Number (TIN) for the business from the BIR",
          checked: true,
          validUntil: "Jan 31, 2026",
          category: "National Requirements",
        },
        {
          id: "item-5",
          label: "Register the business with the BIR",
          checked: true,
          validUntil: "Jan 31, 2026",
          category: "National Requirements",
        },
        {
          id: "item-6",
          label: "Register books of accounts with the BIR",
          checked: true,
          validUntil: "Jan 31, 2026",
          category: "National Requirements",
        },
        {
          id: "item-7",
          label: "Authority to Print Receipts/Invoices",
          checked: true,
          validUntil: "Jan 31, 2026",
          category: "National Requirements",
        },
      ],
      localItems: [
        {
          id: "item-8",
          label: "Barangay Clearance",
          checked: true,
          validUntil: "Jan 20, 2026",
          category: "Local Requirements",
        },
        {
          id: "item-9",
          label: "Tax Clearance",
          checked: true,
          validUntil: "Jan 20, 2026",
          category: "Local Requirements",
        },
        {
          id: "item-10",
          label: "Environmental Permit",
          checked: true,
          validUntil: "Jan 20, 2026",
          category: "Local Requirements",
        },
        {
          id: "item-11",
          label: "Zoning Clearance",
          checked: true,
          validUntil: "Jan 20, 2026",
          category: "Local Requirements",
        },
        {
          id: "item-12",
          label: "Sanitary Permit",
          checked: true,
          validUntil: "Jan 20, 2026",
          category: "Local Requirements",
        },
        {
          id: "item-13",
          label: "Certificate of Occupancy",
          checked: true,
          validUntil: "Jan 20, 2026",
          category: "Local Requirements",
        },
        {
          id: "item-14",
          label: "Fire Safety Inspection Certificate",
          checked: true,
          validUntil: "Jan 20, 2026",
          category: "Local Requirements",
        },
        {
          id: "item-15",
          label: "Mayor's Permit",
          checked: true,
          validUntil: "Jan 20, 2026",
          category: "Local Requirements",
        },
      ],
      renewalItems: [],
    },
    "2": {
      nationalItems: [
        {
          id: "item-1",
          label: "Determine the appropriate legal structure for the business",
          checked: true,
          validUntil: "Perpetual",
          category: "National Requirements",
        },
        {
          id: "item-2",
          label:
            "Register the chosen business name with the Department of Trade and Industry (DTI)",
          checked: false,
          category: "National Requirements",
        },
        {
          id: "item-3",
          label: "Register with SEC/CDA",
          checked: true,
          validUntil: "Perpetual",
          category: "National Requirements",
        },
        {
          id: "item-4",
          label:
            "Obtain a Taxpayer Identification Number (TIN) for the business from the BIR",
          checked: true,
          validUntil: "Jan 31, 2026",
          category: "National Requirements",
        },
        {
          id: "item-5",
          label: "Register the business with the BIR",
          checked: true,
          validUntil: "Jan 31, 2026",
          category: "National Requirements",
        },
        {
          id: "item-6",
          label: "Register books of accounts with the BIR",
          checked: true,
          validUntil: "Jan 31, 2026",
          category: "National Requirements",
        },
        {
          id: "item-7",
          label: "Authority to Print Receipts/Invoices",
          checked: true,
          validUntil: "Jan 31, 2026",
          category: "National Requirements",
        },
      ],
      localItems: [],
      renewalItems: [
        {
          id: "item-16",
          label: "Barangay Clearance Renewal",
          checked: true,
          validUntil: "Jan 20, 2026",
          category: "Renewal Requirements",
        },
        {
          id: "item-17",
          label: "Tax Clearance Renewal",
          checked: true,
          validUntil: "Jan 20, 2026",
          category: "Renewal Requirements",
        },
        {
          id: "item-18",
          label: "Environmental Permit Renewal",
          checked: true,
          validUntil: "Jan 20, 2026",
          category: "Renewal Requirements",
        },
        {
          id: "item-19",
          label: "Annual Safety Inspection",
          checked: true,
          validUntil: "Jan 20, 2026",
          category: "Renewal Requirements",
        },
        {
          id: "item-20",
          label: "Sanitary Permit Renewal",
          checked: true,
          validUntil: "Jan 20, 2026",
          category: "Renewal Requirements",
        },
        {
          id: "item-21",
          label: "Fire Safety Inspection Renewal",
          checked: true,
          validUntil: "Jan 20, 2026",
          category: "Renewal Requirements",
        },
        {
          id: "item-22",
          label: "Mayor's Permit Renewal",
          checked: true,
          validUntil: "Jan 20, 2026",
          category: "Renewal Requirements",
        },
        {
          id: "item-23",
          label: "BIR Registration Renewal",
          checked: true,
          validUntil: "Jan 31, 2026",
          category: "Renewal Requirements",
        },
      ],
    },
  },
};

export const dashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState,
  reducers: {
    addBusiness(state: DashboardState, action: PayloadAction<Business>) {
      state.businesses.push(action.payload);
    },
    updateBusiness(state: DashboardState, action: PayloadAction<Business>) {
      const index = state.businesses.findIndex(
        (b) => b.id === action.payload.id
      );
      if (index !== -1) {
        state.businesses[index] = action.payload;
      }
    },
    removeBusiness(state: DashboardState, action: PayloadAction<string>) {
      state.businesses = state.businesses.filter(
        (b) => b.id !== action.payload
      );
      // Also remove any deadlines associated with this business
      state.upcomingDeadlines = state.upcomingDeadlines.filter(
        (d) => d.businessId !== action.payload
      );
    },
    addDeadline(state: DashboardState, action: PayloadAction<Deadline>) {
      state.upcomingDeadlines.push(action.payload);
    },
    updateDeadline(state: DashboardState, action: PayloadAction<Deadline>) {
      const index = state.upcomingDeadlines.findIndex(
        (d) => d.id === action.payload.id
      );
      if (index !== -1) {
        state.upcomingDeadlines[index] = action.payload;
      }
    },
    removeDeadline(state: DashboardState, action: PayloadAction<string>) {
      state.upcomingDeadlines = state.upcomingDeadlines.filter(
        (d) => d.id !== action.payload
      );
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
    updateComplianceItem(
      state: DashboardState,
      action: PayloadAction<{
        businessId: string;
        itemType: "nationalItems" | "localItems" | "renewalItems";
        itemId: string;
        updates: Partial<ComplianceItem>;
      }>
    ) {
      const { businessId, itemType, itemId, updates } = action.payload;
      const businessItems = state.complianceItems[businessId]?.[itemType];
      if (businessItems) {
        const itemIndex = businessItems.findIndex((item) => item.id === itemId);
        if (itemIndex !== -1) {
          businessItems[itemIndex] = {
            ...businessItems[itemIndex],
            ...updates,
          };
        }
      }
    },
    initializeComplianceItems(
      state: DashboardState,
      action: PayloadAction<{
        complianceItems: Record<string, BusinessComplianceItems>;
      }>
    ) {
      // Initialize or update the compliance items structure
      if (!state.complianceItems) {
        state.complianceItems = {};
      }

      // Merge any provided items
      if (action.payload.complianceItems) {
        Object.keys(action.payload.complianceItems).forEach((businessId) => {
          if (!state.complianceItems[businessId]) {
            state.complianceItems[businessId] = {
              nationalItems: [],
              localItems: [],
              renewalItems: [],
            };
          }

          // Copy any provided items
          const sourceItems = action.payload.complianceItems[businessId];
          if (sourceItems.nationalItems?.length) {
            state.complianceItems[businessId].nationalItems =
              sourceItems.nationalItems;
          }
          if (sourceItems.localItems?.length) {
            state.complianceItems[businessId].localItems =
              sourceItems.localItems;
          }
          if (sourceItems.renewalItems?.length) {
            state.complianceItems[businessId].renewalItems =
              sourceItems.renewalItems;
          }
        });
      }
    },
    syncComplianceWithChecklist(
      state: DashboardState,
      action: PayloadAction<{ checklistState: ChecklistState }>
    ) {
      const { checklistState } = action.payload;
      if (!checklistState) return;

      // Initialize complianceItems if it doesn't exist
      if (!state.complianceItems) {
        state.complianceItems = {};
      }

      // Ensure business compliance items exist
      if (!state.complianceItems["1"]) {
        state.complianceItems["1"] = {
          nationalItems: [],
          localItems: [],
          renewalItems: [],
        };
      }

      if (!state.complianceItems["2"]) {
        state.complianceItems["2"] = {
          nationalItems: [],
          localItems: [],
          renewalItems: [],
        };
      } // Helper to convert checklist items to dashboard compliance format
      const convertChecklistToDashboard = (
        section: Record<
          string,
          { id: string; label: string; checked: boolean; description?: string }
        >,
        category: string,
        isChecked: boolean = false
      ): ComplianceItem[] => {
        return Object.values(section).map((item) => ({
          id: item.id,
          label: item.label,
          checked: item.checked || isChecked,
          validUntil: item.checked || isChecked ? "Jan 20, 2026" : undefined,
          category,
        }));
      };

      // Update for Acme Coffee Shop (business 1)
      if (state.complianceItems["1"]) {
        state.complianceItems["1"].nationalItems = convertChecklistToDashboard(
          checklistState.nationalRequirements,
          "National Requirements"
        );
        state.complianceItems["1"].localItems = convertChecklistToDashboard(
          checklistState.localRequirements,
          "Local Requirements"
        );
      }

      // Update for Tech Solutions Inc. (business 2)
      if (state.complianceItems["2"]) {
        state.complianceItems["2"].nationalItems = convertChecklistToDashboard(
          checklistState.nationalRequirements,
          "National Requirements"
        );
        state.complianceItems["2"].renewalItems = convertChecklistToDashboard(
          checklistState.renewalRequirements,
          "Renewal Requirements"
        );
      }

      // Also update document status percentage based on completed items
      const allItems = [
        ...(state.complianceItems["1"]?.nationalItems || []),
        ...(state.complianceItems["1"]?.localItems || []),
        ...(state.complianceItems["2"]?.nationalItems || []),
        ...(state.complianceItems["2"]?.renewalItems || []),
      ];

      const totalItems = allItems.length;
      const completedItems = allItems.filter((item) => item.checked).length;
      const percentage = totalItems
        ? Math.round((completedItems / totalItems) * 100)
        : 0;

      state.documentStatus = {
        percentage,
        message: `${completedItems} of ${totalItems} documents completed`,
      };
    },
    loadDashboardState(
      state: DashboardState,
      action: PayloadAction<DashboardState>
    ) {
      return action.payload;
    },
  },
});

export const dashboardActions = dashboardSlice.actions;

export default dashboardSlice.reducer;
