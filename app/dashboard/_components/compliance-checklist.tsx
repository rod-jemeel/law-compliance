"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Circle, AlertCircle, Clock } from "lucide-react";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAndSyncChecklist = async () => {
      const safeComplianceItems: Record<string, BusinessComplianceItems> = {};

      if (businesses && businesses.length > 0) {
        businesses.forEach((business) => {
          safeComplianceItems[business.id] = {
            nationalItems: [],
            localItems: [],
            renewalItems: [],
          };
        });

        dispatch(
          dashboardActions.initializeComplianceItems({
            complianceItems: safeComplianceItems,
          })
        );
      }

      const checklistState = loadChecklistState();

      if (checklistState) {
        dispatch(
          dashboardActions.syncComplianceWithChecklist({ checklistState })
        );
      }

      setLoading(false);
    };

    loadAndSyncChecklist();

    const checkForUpdates = setInterval(() => {
      const checklistState = loadChecklistState();
      if (checklistState) {
        dispatch(
          dashboardActions.syncComplianceWithChecklist({ checklistState })
        );
      }
    }, 500);

    return () => clearInterval(checkForUpdates);
  }, [dispatch, businesses]);

  if (loading) {
    return <div className="py-8 text-center">Loading checklist data...</div>;
  }

  const getBusinessDisplayItems = (businessId: string): DisplayItem[] => {
    if (!complianceItems[businessId]) return [];

    const businessComplianceItems = complianceItems[businessId];

    return [
      ...(businessComplianceItems.nationalItems || []),
      ...(businessComplianceItems.localItems || []),
      ...(businessComplianceItems.renewalItems || []),
    ];
  };

  const isCloseToExpiry = (dateString?: string): boolean => {
    if (!dateString || dateString === "Perpetual") return false;

    try {
      const expiryDate = new Date(dateString);
      const today = new Date();
      const diffTime = expiryDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 && diffDays <= 30;
    } catch {
      return false;
    }
  };

  const getItemBackground = (item: DisplayItem): string => {
    if (!item.checked) return "bg-slate-50";
    if (isCloseToExpiry(item.validUntil)) return "bg-amber-50 border-amber-200";
    return "bg-green-50 border-green-200";
  };

  return (
    <Tabs defaultValue={businesses[0]?.id || "acme"}>
      <TabsList className="mb-4 bg-slate-100 p-1 rounded-lg">
        {businesses.map((business) => (
          <TabsTrigger
            key={business.id}
            value={business.id}
            className="rounded-md data-[state=active]:bg-white data-[state=active]:text-indigo-700 data-[state=active]:shadow-sm"
          >
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
            className="space-y-4 mt-2"
          >
            <div className="space-y-3">
              {businessItems.length > 0 ? (
                businessItems.slice(0, 6).map((item: DisplayItem) => (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between p-3 border rounded-lg hover:border-indigo-200 transition-colors ${getItemBackground(
                      item
                    )}`}
                  >
                    <div className="flex items-center gap-2">
                      {item.checked ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <Circle className="h-5 w-5 text-slate-300 flex-shrink-0" />
                      )}
                      <span className="text-gray-800">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-slate-500 flex-shrink-0">
                        {item.validUntil
                          ? `Valid until: ${item.validUntil}`
                          : "Not submitted"}
                      </div>
                      {item.validUntil && isCloseToExpiry(item.validUntil) && (
                        <Clock className="h-4 w-4 text-amber-500 flex-shrink-0" />
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 bg-slate-50 rounded-lg border border-slate-200">
                  <AlertCircle className="mx-auto h-8 w-8 mb-2 text-slate-400" />
                  <p className="text-gray-700 font-medium">
                    No checklist items found for this business.
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
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
