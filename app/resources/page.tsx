import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ResourcesHeader,
  OfficialWebsitesSection,
  GuidesSection,
  ContactInfoSection,
  ProfessionalsSection,
  WorkshopsSection,
} from "./_sections";

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container py-6 max-w-5xl mx-auto">
          <ResourcesHeader />

          <Tabs defaultValue="official" className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger
                value="official"
                className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
              >
                Official Websites
              </TabsTrigger>
              <TabsTrigger
                value="guides"
                className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700 data-[state=active]:border-b-2 data-[state=active]:border-green-500"
              >
                Guides & Tutorials
              </TabsTrigger>
              <TabsTrigger
                value="contact"
                className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-700 data-[state=active]:border-b-2 data-[state=active]:border-purple-500"
              >
                Contact Information
              </TabsTrigger>
            </TabsList>
            <TabsContent value="official">
              <OfficialWebsitesSection />
            </TabsContent>
            <TabsContent value="guides">
              <GuidesSection />
            </TabsContent>
            <TabsContent value="contact">
              <ContactInfoSection />
            </TabsContent>
          </Tabs>

          <ProfessionalsSection />
          <WorkshopsSection />
        </div>
      </main>
    </div>
  );
}
