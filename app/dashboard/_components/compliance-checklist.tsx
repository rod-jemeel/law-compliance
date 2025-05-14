"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Circle, AlertCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { loadChecklistState } from "../../../app/checklist/_redux/checklist-storage";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import { RootState } from "@/store";
import { dashboardActions } from "../_redux/dashboard-slice";
import { BusinessComplianceItems } from "../_redux/dashboard-state";

interface DisplayItem {
  id: string;
  label: string;
  checked: boolean;
  validUntil?: string;
  category: string;
}

export default function ComplianceChecklist() {
  const dispatch = useAppDispatch();
  const businesses = useAppSelector(
    (state: RootState) => state.dashboardState.businesses
  );
  const complianceItems = useAppSelector(
    (state: RootState) => state.dashboardState.complianceItems || {}
  );
  const [loading, setLoading] = useState(true); // Load checklist data from local storage and sync with dashboard
  useEffect(() => {
    const loadAndSyncChecklist = async () => {
      // Initialize empty compliance items if needed
      const safeComplianceItems: Record<string, BusinessComplianceItems> = {};

      if (businesses && businesses.length > 0) {
        businesses.forEach((business) => {
          safeComplianceItems[business.id] = {
            nationalItems: [],
            localItems: [],
            renewalItems: [],
          };
        });

        // Initialize with empty structure if needed
        dispatch(
          dashboardActions.initializeComplianceItems({
            complianceItems: safeComplianceItems,
          })
        );
      }

      const checklistState = loadChecklistState();

      if (checklistState) {
        // Sync the checklist state with dashboard
        dispatch(
          dashboardActions.syncComplianceWithChecklist({ checklistState })
        );
      }

      setLoading(false);
    };

    loadAndSyncChecklist();

    // Set up a polling mechanism to check for changes in localStorage
    const checkForUpdates = setInterval(() => {
      const checklistState = loadChecklistState();
      if (checklistState) {
        dispatch(
          dashboardActions.syncComplianceWithChecklist({ checklistState })
        );
      }
    }, 500); // Check every half second

    // Clean up interval on component unmount
    return () => clearInterval(checkForUpdates);
  }, [dispatch, businesses]);

  if (loading) {
    return <div className="py-8 text-center">Loading checklist data...</div>;
  }

  // Get items to display for a business
  const getBusinessDisplayItems = (businessId: string): DisplayItem[] => {
    // Make sure the specific business items exist
    if (!complianceItems[businessId]) return [];

    const businessComplianceItems = complianceItems[businessId];

    // Safely combine all item types for the business, ensuring each array exists
    return [
      ...(businessComplianceItems.nationalItems || []),
      ...(businessComplianceItems.localItems || []),
      ...(businessComplianceItems.renewalItems || []),
    ];
  };

  return (
    <Tabs defaultValue={businesses[0]?.id || "acme"}>
      <TabsList className="mb-4">
        {businesses.map((business) => (
          <TabsTrigger key={business.id} value={business.id}>
            {business.name}
          </TabsTrigger>
        ))}
      </TabsList>

      {businesses.map((business) => {
        const businessItems = getBusinessDisplayItems(business.id);

        return (
          <TabsContent
            key={business.id}
            value={business.id}
            className="space-y-4"
          >
            <div className="space-y-2">
              {businessItems.length > 0 ? (
                businessItems.slice(0, 6).map((item: DisplayItem) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 border border-gray-300 rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      {item.checked ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : (
                        <Circle className="h-5 w-5 text-gray-300" />
                      )}
                      <span>{item.label}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.validUntil
                        ? `Valid until: ${item.validUntil}`
                        : "Not submitted"}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-4 text-muted-foreground">
                  <AlertCircle className="mx-auto h-8 w-8 mb-2" />
                  <p>No checklist items found for this business.</p>
                  <p className="text-xs mt-1">
                    Visit the Checklist page to add requirements.
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
