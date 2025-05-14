import Link from "next/link";
import {
  BookOpen,
  Building2,
  FileText,
  GraduationCap,
  HelpCircle,
  LifeBuoy,
  Link2,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Resources</h1>
            <p className="text-muted-foreground">
              Helpful resources, guides, and contact information for business
              registration and compliance
            </p>
          </div>
        </div>

        <Tabs defaultValue="official" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="official">Official Websites</TabsTrigger>
            <TabsTrigger value="guides">Guides & Tutorials</TabsTrigger>
            <TabsTrigger value="contact">Contact Information</TabsTrigger>
          </TabsList>
          <TabsContent value="official">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <CardTitle>Dumaguete City Government</CardTitle>
                  </div>
                  <CardDescription>
                    Official website of Dumaguete City
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Access information about city services, announcements, and
                    the online eBPLS portal for business permit applications and
                    renewals.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="https://dumaguetecity.gov.ph" target="_blank">
                      <Link2 className="mr-2 h-4 w-4" />
                      Visit Website
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <CardTitle>Bureau of Internal Revenue</CardTitle>
                  </div>
                  <CardDescription>Official BIR website</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Access tax forms, registration requirements, e-filing
                    services, and updates on tax regulations and deadlines.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="https://www.bir.gov.ph" target="_blank">
                      <Link2 className="mr-2 h-4 w-4" />
                      Visit Website
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <CardTitle>Department of Trade and Industry</CardTitle>
                  </div>
                  <CardDescription>Official DTI website</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Register business names, access business resources, and stay
                    updated on trade and industry policies and programs.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="https://www.dti.gov.ph" target="_blank">
                      <Link2 className="mr-2 h-4 w-4" />
                      Visit Website
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <CardTitle>Securities and Exchange Commission</CardTitle>
                  </div>
                  <CardDescription>Official SEC website</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Register corporations and partnerships, file required
                    reports, and access information on SEC regulations and
                    requirements.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="https://www.sec.gov.ph" target="_blank">
                      <Link2 className="mr-2 h-4 w-4" />
                      Visit Website
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <CardTitle>Social Security System</CardTitle>
                  </div>
                  <CardDescription>Official SSS website</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Register employers and employees, manage contributions, and
                    access SSS services and benefits information.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="https://www.sss.gov.ph" target="_blank">
                      <Link2 className="mr-2 h-4 w-4" />
                      Visit Website
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <CardTitle>PhilHealth</CardTitle>
                  </div>
                  <CardDescription>Official PhilHealth website</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Register employers and employees, manage health insurance
                    contributions, and access healthcare benefits information.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="https://www.philhealth.gov.ph" target="_blank">
                      <Link2 className="mr-2 h-4 w-4" />
                      Visit Website
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <CardTitle>Pag-IBIG Fund</CardTitle>
                  </div>
                  <CardDescription>Official Pag-IBIG website</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Register employers and employees, manage housing fund
                    contributions, and access Pag-IBIG services and benefits.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="https://www.pagibigfund.gov.ph" target="_blank">
                      <Link2 className="mr-2 h-4 w-4" />
                      Visit Website
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <CardTitle>Bureau of Fire Protection</CardTitle>
                  </div>
                  <CardDescription>Official BFP website</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Access information on fire safety requirements, inspection
                    procedures, and fire safety compliance for businesses.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="https://bfp.gov.ph" target="_blank">
                      <Link2 className="mr-2 h-4 w-4" />
                      Visit Website
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <CardTitle>Cooperative Development Authority</CardTitle>
                  </div>
                  <CardDescription>Official CDA website</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Register cooperatives, access cooperative development
                    resources, and stay updated on cooperative regulations.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="https://cda.gov.ph" target="_blank">
                      <Link2 className="mr-2 h-4 w-4" />
                      Visit Website
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="guides">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <CardTitle>Business Registration Guide</CardTitle>
                  </div>
                  <CardDescription>
                    Step-by-step guide for new businesses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive guide covering all aspects of registering a
                    new business in Dumaguete City, from national registrations
                    to local permits.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <CardTitle>Business Permit Renewal Guide</CardTitle>
                  </div>
                  <CardDescription>
                    Annual renewal process explained
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Detailed guide on the annual business permit renewal
                    process, including required documents, deadlines, and
                    step-by-step procedures.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <CardTitle>Video Tutorials</CardTitle>
                  </div>
                  <CardDescription>
                    Visual guides for business compliance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Collection of video tutorials demonstrating how to navigate
                    the eBPLS portal, complete forms correctly, and understand
                    compliance requirements.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Tutorials
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </div>
                  <CardDescription>
                    Common questions and answers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Answers to common questions about business registration,
                    renewal, requirements, deadlines, and compliance issues in
                    Dumaguete City.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View FAQs
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <CardTitle>Document Templates</CardTitle>
                  </div>
                  <CardDescription>
                    Ready-to-use forms and templates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Collection of fillable forms, affidavits, and document
                    templates needed for business registration and renewal
                    processes.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Access Templates
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <LifeBuoy className="h-5 w-5 text-primary" />
                    <CardTitle>Compliance Calendar</CardTitle>
                  </div>
                  <CardDescription>
                    Important dates and deadlines
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Calendar of important regulatory deadlines, filing dates,
                    and renewal periods for businesses operating in Dumaguete
                    City.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Calendar
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="contact">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <CardTitle>Dumaguete City Hall</CardTitle>
                  </div>
                  <CardDescription>
                    Business One-Stop Shop (BOSS)
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <p className="text-sm">
                      Dr. V. Locsin St., Dumaguete City, Negros Oriental
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <p className="text-sm">(035) 225-0386</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Link2 className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <p className="text-sm">boss@dumaguetecity.gov.ph</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View on Map
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <CardTitle>BIR Revenue District Office</CardTitle>
                  </div>
                  <CardDescription>Dumaguete City</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <p className="text-sm">
                      National Highway, Dumaguete City, Negros Oriental
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <p className="text-sm">(035) 225-4236</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Link2 className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <p className="text-sm">rdo79@bir.gov.ph</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View on Map
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <CardTitle>DTI Negros Oriental</CardTitle>
                  </div>
                  <CardDescription>Provincial Office</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <p className="text-sm">
                      2nd Floor, NEDA Building, EJ Blanco Drive, Dumaguete City
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <p className="text-sm">(035) 225-6177</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Link2 className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <p className="text-sm">negrosoriental@dti.gov.ph</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View on Map
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <CardTitle>SSS Dumaguete Branch</CardTitle>
                  </div>
                  <CardDescription>Social Security System</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <p className="text-sm">
                      Rizal Boulevard, Dumaguete City, Negros Oriental
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <p className="text-sm">(035) 225-4256</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Link2 className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <p className="text-sm">dumaguete@sss.gov.ph</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View on Map
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <CardTitle>PhilHealth Dumaguete</CardTitle>
                  </div>
                  <CardDescription>
                    Local Health Insurance Office
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <p className="text-sm">
                      Perdices Street, Dumaguete City, Negros Oriental
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <p className="text-sm">(035) 225-9125</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Link2 className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <p className="text-sm">actioncenter@philhealth.gov.ph</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View on Map
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <CardTitle>Pag-IBIG Fund Dumaguete</CardTitle>
                  </div>
                  <CardDescription>Branch Office</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <p className="text-sm">
                      Noblefranca Street, Dumaguete City, Negros Oriental
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <p className="text-sm">(035) 225-7148</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Link2 className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <p className="text-sm">contactus@pagibigfund.gov.ph</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View on Map
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Need Professional Assistance?</CardTitle>
            <CardDescription>
              Connect with business registration consultants and service
              providers in Dumaguete City
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">
                    Business Registration Consultants
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Professional consultants who can guide you through the
                    entire business registration or renewal process.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Directory
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Accounting Firms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Accounting professionals who can assist with financial
                    requirements, tax compliance, and BIR registrations.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Directory
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Legal Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Attorneys and legal professionals specializing in business
                    law, permits, and regulatory compliance.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Directory
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Workshops and Seminars</CardTitle>
            <CardDescription>
              Educational events to help you understand business registration
              and compliance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">
                    Business Registration Workshop
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    June 15, 2025 • Dumaguete City Hall
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Register
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">
                    Tax Compliance for Small Businesses
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    July 8, 2025 • DTI Negros Oriental Office
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Register
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">
                    Digital Business Permits Seminar
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    July 22, 2025 • Online Webinar
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Register
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Events
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
