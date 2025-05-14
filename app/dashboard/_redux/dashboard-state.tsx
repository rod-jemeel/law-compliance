export interface DashboardState {
  businesses: Business[];
  upcomingDeadlines: Deadline[];
  complianceStatus: ComplianceStatus;
  documentStatus: DocumentStatus;
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

export interface ComplianceStatus {
  status: "Good" | "Warning" | "Critical";
  message: string;
}

export interface DocumentStatus {
  percentage: number;
  message: string;
}
