import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChecklistItem, ChecklistState } from "./checklist-schema";

// Initial state factory function to create the default state
const createInitialState = (): ChecklistState => {
  // Helper to create a default checklist item
  const createItem = (
    id: string,
    label: string,
    description?: string
  ): ChecklistItem => ({
    id,
    label,
    description,
    checked: false,
  });

  return {
    activeTab: "new",
    nationalRequirements: {
      businessStructure: createItem(
        "item-1",
        "Determine the appropriate legal structure for the business",
        "Choose between Sole Proprietorship, Partnership, Corporation, or Cooperative"
      ),
      businessNameRegistration: createItem(
        "item-2",
        "Register the chosen business name with the Department of Trade and Industry (DTI)",
        "For Sole Proprietorships, register through the BNRS NextGen platform"
      ),
      secRegistration: createItem(
        "item-3",
        "Register with SEC/CDA",
        "For Partnerships and Corporations (SEC) or Cooperatives (CDA)"
      ),
      tinRegistration: createItem(
        "item-4",
        "Obtain a Taxpayer Identification Number (TIN) for the business from the BIR",
        "Required for all business types"
      ),
      birRegistration: createItem(
        "item-5",
        "Register the business with the BIR",
        "Using BIR Form No. 1901 (Sole Proprietorships) or BIR Form No. 1903 (Partnerships/Corporations)"
      ),
      booksOfAccounts: createItem(
        "item-6",
        "Register books of accounts with the BIR",
        "Manual, loose-leaf, or through a Computerized Accounting System"
      ),
      authorityToPrint: createItem(
        "item-7",
        "Apply for an Authority to Print (ATP) official receipts and invoices",
        "Required before issuing receipts to customers"
      ),
    },
    localRequirements: {
      barangayClearance: createItem(
        "local-1",
        "Obtain a Barangay Clearance",
        "From the Barangay Hall where the business is located"
      ),
      taxClearance: createItem(
        "local-2",
        "Secure a Tax Clearance",
        "From the Dumaguete City Treasurer's Office"
      ),
      environmentalPermit: createItem(
        "local-3",
        "Obtain an Environmental Permit",
        "From the City Environment and Natural Resources Office (ENRO)"
      ),
      zoningClearance: createItem(
        "local-4",
        "Secure a Zoning Clearance",
        "From the City Planning and Development Office"
      ),
      sanitaryPermit: createItem(
        "local-5",
        "Obtain a Sanitary/Health Permit",
        "From the City Health Office"
      ),
      certificateOfOccupancy: createItem(
        "local-6",
        "Secure a Certificate of Occupancy",
        "From the City Engineer's Office (for NEW businesses)"
      ),
      fireSafetyInspection: createItem(
        "local-7",
        "Obtain a Certificate of Fire Safety Inspection",
        "From the Bureau of Fire Protection (BFP)"
      ),
      mayorsPermit: createItem(
        "local-8",
        "Apply for Mayor's Permit",
        "Through the online eBPLS portal or at the Business One-Stop Shop (BOSS)"
      ),
    },
    renewalRequirements: {
      barangayClearanceRenewal: createItem(
        "renewal-1",
        "Renew Barangay Clearance",
        "Visit your Barangay Hall with previous permit and payment receipt"
      ),
      taxClearanceRenewal: createItem(
        "renewal-2",
        "Obtain a Tax Clearance",
        "From the Dumaguete City Treasurer's Office for the renewal period"
      ),
      environmentalPermitRenewal: createItem(
        "renewal-3",
        "Obtain an updated Environmental Permit",
        "From the City Environment and Natural Resources Office (ENRO)"
      ),
      annualSafetyInspection: createItem(
        "renewal-4",
        "Secure a Certificate of Annual Safety Inspection (CASI)",
        "From the City Engineer's Office"
      ),
      sanitaryPermitRenewal: createItem(
        "renewal-5",
        "Obtain an updated Sanitary/Health Permit",
        "From the City Health Office"
      ),
      fireSafetyInspectionRenewal: createItem(
        "renewal-6",
        "Secure an updated Certificate of Fire Safety Inspection",
        "From the Bureau of Fire Protection (BFP)"
      ),
      mayorsPermitRenewal: createItem(
        "renewal-7",
        "Renew Mayor's Permit",
        "Submit renewal application through eBPLS with updated information"
      ),
      birRegistrationRenewal: createItem(
        "renewal-8",
        "Renew BIR registration",
        "File BIR Form No. 0605 before January 31st"
      ),
    },
    renewalDocuments: {
      previousPermit: createItem(
        "doc-1",
        "Previous year's Business Permit and Official Receipt",
        "Original and photocopies"
      ),
      incomeTaxReturns: createItem(
        "doc-2",
        "Latest Income Tax Returns",
        "Annual, monthly, or quarterly as applicable"
      ),
      cedula: createItem(
        "doc-3",
        "Community Tax Certificate (Cedula)",
        "Current year"
      ),
      insurancePolicy: createItem(
        "doc-4",
        "Proof of local insurance policy",
        "Comprehensive General Liability (CGL) insurance"
      ),
      financialStatements: createItem(
        "doc-5",
        "Audited Financial Statements",
        "If required based on business type and size"
      ),
      leaseContract: createItem(
        "doc-6",
        "Lease contract",
        "Valid through the next year (if renting business premises)"
      ),
      socialSecurityRegistrations: createItem(
        "doc-7",
        "SSS/Pag-IBIG/PhilHealth registrations",
        "For current employees"
      ),
      noOperationsAffidavit: createItem(
        "doc-8",
        "Affidavit of No Operations",
        "If business did not operate in the previous year"
      ),
    },
    penaltyCalculator: {
      taxAmount: 0,
      monthsOverdue: 0,
      surcharge: 0,
      interest: 0,
      totalPenalty: 0,
    },
  };
};

// Create the slice
const checklistSlice = createSlice({
  name: "checklist",
  initialState: createInitialState(),
  reducers: {
    // Set active tab
    setActiveTab: (state, action: PayloadAction<"new" | "renewal">) => {
      state.activeTab = action.payload;
    },

    // Toggle a checklist item's checked status
    toggleChecklistItem: (
      state,
      action: PayloadAction<{
        section: keyof Omit<ChecklistState, "activeTab" | "penaltyCalculator">;
        itemKey: string;
      }>
    ) => {
      const { section, itemKey } = action.payload;
      // @ts-ignore - We know this structure exists based on our schema
      const item = state[section][itemKey];
      if (item) {
        item.checked = !item.checked;
      }
    },

    // Update penalty calculator values
    updatePenaltyCalculator: (
      state,
      action: PayloadAction<{ taxAmount?: number; monthsOverdue?: number }>
    ) => {
      const { taxAmount, monthsOverdue } = action.payload;

      if (taxAmount !== undefined) {
        state.penaltyCalculator.taxAmount = taxAmount;
      }

      if (monthsOverdue !== undefined) {
        state.penaltyCalculator.monthsOverdue = monthsOverdue;
      }
    },

    // Calculate penalties
    calculatePenalties: (state) => {
      const { taxAmount, monthsOverdue } = state.penaltyCalculator;
      const surcharge = taxAmount * 0.25; // 25% surcharge
      const interest = taxAmount * 0.02 * monthsOverdue; // 2% monthly interest
      const totalPenalty = surcharge + interest;

      state.penaltyCalculator.surcharge = surcharge;
      state.penaltyCalculator.interest = interest;
      state.penaltyCalculator.totalPenalty = totalPenalty;
    },

    // Load state from local storage
    loadState: (state, action: PayloadAction<ChecklistState>) => {
      return action.payload;
    },
  },
});

// Export actions and reducer
export const {
  setActiveTab,
  toggleChecklistItem,
  updatePenaltyCalculator,
  calculatePenalties,
  loadState,
} = checklistSlice.actions;

export default checklistSlice.reducer;
