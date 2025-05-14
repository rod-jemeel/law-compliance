"use client";

import { CheckCircle2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ComplianceChecklist() {
  return (
    <Tabs defaultValue="acme">
      <TabsList className="mb-4">
        <TabsTrigger value="acme">Acme Coffee Shop</TabsTrigger>
        <TabsTrigger value="tech">Tech Solutions Inc.</TabsTrigger>
      </TabsList>{" "}
      <TabsContent value="acme" className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 border border-gray-300 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>DTI Business Name Registration</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Valid until: Dec 15, 2027
            </div>
          </div>
          <div className="flex items-center justify-between p-3 border border-gray-300 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>BIR Registration</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Valid until: Jan 31, 2026
            </div>
          </div>
          <div className="flex items-center justify-between p-3 border border-gray-300 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Barangay Clearance</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Valid until: Jan 20, 2026
            </div>
          </div>
          <div className="flex items-center justify-between p-3 border border-gray-300 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Mayor's Permit</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Valid until: Jan 20, 2026
            </div>
          </div>
          <div className="flex items-center justify-between p-3 border border-gray-300 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Fire Safety Inspection Certificate</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Valid until: Jan 20, 2026
            </div>
          </div>
          <div className="flex items-center justify-between p-3 border border-gray-300 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Sanitary Permit</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Valid until: Jan 20, 2026
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="tech" className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 border border-gray-300 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>SEC Registration</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Valid until: Perpetual
            </div>
          </div>
          <div className="flex items-center justify-between p-3 border border-gray-300 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>BIR Registration</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Valid until: Jan 31, 2026
            </div>
          </div>
          <div className="flex items-center justify-between p-3 border border-gray-300 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Barangay Clearance</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Valid until: Jan 20, 2026
            </div>
          </div>
          <div className="flex items-center justify-between p-3 border border-gray-300 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Mayor's Permit</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Valid until: Jan 20, 2026
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
