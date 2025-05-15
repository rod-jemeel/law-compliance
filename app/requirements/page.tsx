import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  RequirementsHeader,
  NationalRequirementsSection,
  LocalRequirementsSection,
} from "./_sections";

export default function RequirementsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <main className="flex-1">
        <div className="container py-10 max-w-5xl mx-auto">
          <RequirementsHeader />

          <Tabs defaultValue="national" className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-indigo-100 p-1 rounded-xl max-w-md mx-auto">
              <TabsTrigger
                value="national"
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-indigo-700 data-[state=active]:shadow-sm"
              >
                National Requirements
              </TabsTrigger>
              <TabsTrigger
                value="local"
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-indigo-700 data-[state=active]:shadow-sm"
              >
                Local Requirements
              </TabsTrigger>
            </TabsList>
            <TabsContent value="national">
              <NationalRequirementsSection />
            </TabsContent>
            <TabsContent value="local">
              <LocalRequirementsSection />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
