"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Circle, AlertCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { loadChecklistState } from "../../../app/checklist/_redux/checklist-storage";
import { useAppSelector } from "@/hooks/hooks";
import { RootState } from "@/store";
import { ChecklistItem as SchemaChecklistItem } from "../../checklist/_redux/checklist-schema";

interface DisplayItem {
  id: string;
  label: string;
  checked: boolean;
  validUntil?: string;
  category: string;
}

export default function ComplianceChecklist() {
  const businesses = useAppSelector(
    (state: RootState) => state.dashboardState.businesses
  );
  const [displayItems, setDisplayItems] = useState<
    Record<string, DisplayItem[]>
  >({});
  const [loading, setLoading] = useState(true);

  // Load checklist data from local storage
  useEffect(() => {
    const loadChecklist = () => {
      const checklistState = loadChecklistState();
      if (!checklistState) {
        setLoading(false);
        return;
      }

      // Helper function to convert checklist section to array of display items
      const convertToDisplayItems = (
        section: Record<string, SchemaChecklistItem>,
        category: string
      ): DisplayItem[] => {
        return Object.values(section).map((item) => ({
          id: item.id,
          label: item.label,
          checked: item.checked,
          validUntil: item.checked ? "Jan 20, 2026" : undefined, // Placeholder date
          category,
        }));
      };

      // Transform data for display
      const items: Record<string, DisplayItem[]> = {};

      // First business (Acme Coffee Shop)
      const businessId1 = businesses[0]?.id || "acme";
      items[businessId1] = [
        ...convertToDisplayItems(
          checklistState.nationalRequirements,
          "National Requirements"
        ),
        ...convertToDisplayItems(
          checklistState.localRequirements,
          "Local Requirements"
        ),
      ];

      // Second business (Tech Solutions)
      const businessId2 = businesses[1]?.id || "tech";
      items[businessId2] = [
        ...convertToDisplayItems(
          checklistState.nationalRequirements,
          "National Requirements"
        ),
        ...convertToDisplayItems(
          checklistState.renewalRequirements,
          "Renewal Requirements"
        ),
      ];

      setDisplayItems(items);
      setLoading(false);
    };

    loadChecklist();
  }, [businesses]);

  if (loading) {
    return <div className="py-8 text-center">Loading checklist data...</div>;
  }

  return (
    <Tabs defaultValue={businesses[0]?.id || "acme"}>
      <TabsList className="mb-4">
        {businesses.map((business) => (
          <TabsTrigger key={business.id} value={business.id}>
            {business.name}
          </TabsTrigger>
        ))}
      </TabsList>

      {businesses.map((business) => (
        <TabsContent
          key={business.id}
          value={business.id}
          className="space-y-4"
        >
          <div className="space-y-2">
            {displayItems[business.id]?.length > 0 ? (
              displayItems[business.id].slice(0, 6).map((item: DisplayItem) => (
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
      ))}
    </Tabs>
  );
}
