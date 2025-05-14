import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ChecklistTabsProps {
  defaultValue: string;
  tabs: {
    id: string;
    label: string;
    content: ReactNode;
  }[];
}

export function ChecklistTabs({ defaultValue, tabs }: ChecklistTabsProps) {
  return (
    <Tabs defaultValue={defaultValue} className="w-full mb-8">
      <TabsList className="grid w-full grid-cols-2 mb-6 max-w-md mx-auto">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent
          key={tab.id}
          value={tab.id}
          className="flex justify-center"
        >
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
