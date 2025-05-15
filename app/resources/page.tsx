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
    <div className="flex min-h-screen flex-col bg-slate-50">
      <main className="flex-1">
        <div className="container py-10 max-w-5xl mx-auto">
          <ResourcesHeader />

          <Tabs defaultValue="official" className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-3 mb-6 bg-indigo-100 p-1 rounded-xl max-w-3xl mx-auto">
              <TabsTrigger
                value="official"
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-indigo-700 data-[state=active]:shadow-sm"
              >
                Official Websites
              </TabsTrigger>
              <TabsTrigger
                value="guides"
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-indigo-700 data-[state=active]:shadow-sm"
              >
                Guides & Tutorials
              </TabsTrigger>
              <TabsTrigger
                value="contact"
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-indigo-700 data-[state=active]:shadow-sm"
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
