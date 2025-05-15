import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ResourcesHeader,
  OfficialWebsitesSection,
  GuidesSection,
  ContactInfoSection,
} from "./_sections";

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container py-6 max-w-5xl mx-auto">
          <ResourcesHeader />

          <Tabs defaultValue="official" className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="official">Official Websites</TabsTrigger>
              <TabsTrigger value="guides">Guides & Tutorials</TabsTrigger>
              <TabsTrigger value="contact">Contact Information</TabsTrigger>
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
        </div>
      </main>
    </div>
  );
}
