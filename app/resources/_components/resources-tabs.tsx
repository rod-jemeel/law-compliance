"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface ResourcesTabsProps {
  defaultValue?: string;
  children?: React.ReactNode;
}

export function ResourcesTabs({
  defaultValue = "official",
  children,
}: ResourcesTabsProps) {
  return (
    <Tabs defaultValue={defaultValue} className="w-full mb-8">
      <TabsList className="grid w-full grid-cols-3 mb-6">
        <TabsTrigger value="official">Official Websites</TabsTrigger>
        <TabsTrigger value="guides">Guides & Tutorials</TabsTrigger>
        <TabsTrigger value="contact">Contact Information</TabsTrigger>
      </TabsList>
      <TabsContent value="official">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {children}
        </div>
      </TabsContent>
      <TabsContent value="guides">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {children}
        </div>
      </TabsContent>
      <TabsContent value="contact">
        <div className="grid gap-6 md:grid-cols-2">{children}</div>
      </TabsContent>
    </Tabs>
  );
}
