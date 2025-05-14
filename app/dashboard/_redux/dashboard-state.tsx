export interface DashboardState {
  businesses: Business[];
  upcomingDeadlines: Deadline[];
  complianceStatus: ComplianceStatus;
  documentStatus: DocumentStatus;
  complianceItems: Record<string, BusinessComplianceItems>;
}

export interface Business {
  id: string;
  name: string;
  type: string;
}

export interface Deadline {
  id: string;
  title: string;
  businessId: string;
  businessName: string;
  dueDate: string;
  daysLeft: number;
}

export interface ComplianceItem {
  id: string;
  label: string;
  checked: boolean;
  validUntil?: string;
  category: string;
}

export interface BusinessComplianceItems {
  nationalItems: ComplianceItem[];
  localItems: ComplianceItem[];
  renewalItems: ComplianceItem[];
}

export interface ComplianceStatus {
  status: "Good" | "Warning" | "Critical";
  message: string;
}

export interface DocumentStatus {
  percentage: number;
  message: string;
}
