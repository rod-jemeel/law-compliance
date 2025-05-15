import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  RequirementsHeader,
  NationalRequirementsSection,
  LocalRequirementsSection,
} from "./_sections";

export default function RequirementsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container py-6 max-w-5xl mx-auto">
          <RequirementsHeader />

          <Tabs defaultValue="national" className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="national">National Requirements</TabsTrigger>
              <TabsTrigger value="local">Local Requirements</TabsTrigger>
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
