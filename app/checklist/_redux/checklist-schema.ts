import { z } from "zod";

// Schema for a single checklist item
export const ChecklistItemSchema = z.object({
  id: z.string(),
  label: z.string(),
  description: z.string().optional(),
  checked: z.boolean().default(false),
});

// Schema for national requirements section
export const NationalRequirementsSchema = z.object({
  businessStructure: ChecklistItemSchema,
  businessNameRegistration: ChecklistItemSchema,
  secRegistration: ChecklistItemSchema,
  tinRegistration: ChecklistItemSchema,
  birRegistration: ChecklistItemSchema,
  booksOfAccounts: ChecklistItemSchema,
  authorityToPrint: ChecklistItemSchema,
});

// Schema for local requirements section
export const LocalRequirementsSchema = z.object({
  barangayClearance: ChecklistItemSchema,
  taxClearance: ChecklistItemSchema,
  environmentalPermit: ChecklistItemSchema,
  zoningClearance: ChecklistItemSchema,
  sanitaryPermit: ChecklistItemSchema,
  certificateOfOccupancy: ChecklistItemSchema,
  fireSafetyInspection: ChecklistItemSchema,
  mayorsPermit: ChecklistItemSchema,
});

// Schema for renewal requirements section
export const RenewalRequirementsSchema = z.object({
  barangayClearanceRenewal: ChecklistItemSchema,
  taxClearanceRenewal: ChecklistItemSchema,
  environmentalPermitRenewal: ChecklistItemSchema,
  annualSafetyInspection: ChecklistItemSchema,
  sanitaryPermitRenewal: ChecklistItemSchema,
  fireSafetyInspectionRenewal: ChecklistItemSchema,
  mayorsPermitRenewal: ChecklistItemSchema,
  birRegistrationRenewal: ChecklistItemSchema,
});

// Schema for documents required for renewal
export const RenewalDocumentsSchema = z.object({
  previousPermit: ChecklistItemSchema,
  incomeTaxReturns: ChecklistItemSchema,
  cedula: ChecklistItemSchema,
  insurancePolicy: ChecklistItemSchema,
  financialStatements: ChecklistItemSchema,
  leaseContract: ChecklistItemSchema,
  socialSecurityRegistrations: ChecklistItemSchema,
  noOperationsAffidavit: ChecklistItemSchema,
});

// Schema for penalty calculator
export const PenaltyCalculatorSchema = z.object({
  taxAmount: z.number().min(0).default(0),
  monthsOverdue: z.number().min(0).default(0),
  surcharge: z.number().min(0).default(0),
  interest: z.number().min(0).default(0),
  totalPenalty: z.number().min(0).default(0),
});

// Combined schema for the entire checklist state
export const ChecklistStateSchema = z.object({
  nationalRequirements: NationalRequirementsSchema,
  localRequirements: LocalRequirementsSchema,
  renewalRequirements: RenewalRequirementsSchema,
  renewalDocuments: RenewalDocumentsSchema,
  penaltyCalculator: PenaltyCalculatorSchema,
  activeTab: z.enum(["new", "renewal"]).default("new"),
});

// Type definitions derived from the schemas
export type ChecklistItem = z.infer<typeof ChecklistItemSchema>;
export type NationalRequirements = z.infer<typeof NationalRequirementsSchema>;
export type LocalRequirements = z.infer<typeof LocalRequirementsSchema>;
export type RenewalRequirements = z.infer<typeof RenewalRequirementsSchema>;
export type RenewalDocuments = z.infer<typeof RenewalDocumentsSchema>;
export type PenaltyCalculator = z.infer<typeof PenaltyCalculatorSchema>;
export type ChecklistState = z.infer<typeof ChecklistStateSchema>;
