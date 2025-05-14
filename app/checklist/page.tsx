import Link from "next/link";
import { Bell, FileCheck2, Plus } from "lucide-react";
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
import { Checkbox } from "@/components/ui/checkbox";

export default function Checklist() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <FileCheck2 className="h-6 w-6 text-primary" />
            <span>PermitTracker</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/dashboard"
              className="text-sm font-medium hover:text-primary"
            >
              Dashboard
            </Link>
            <Link
              href="/checklist"
              className="text-sm font-medium text-primary"
            >
              Checklists
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Requirements
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Resources
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Bell className="mr-2 h-4 w-4" />
              Notifications
            </Button>
            <Button size="sm">Add Business</Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Compliance Checklists</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Custom Checklist
          </Button>
        </div>

        <Tabs defaultValue="new" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="new">New Business Registration</TabsTrigger>
            <TabsTrigger value="renewal">Annual Renewal</TabsTrigger>
          </TabsList>
          <TabsContent value="new">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>National Level Requirements</CardTitle>
                  <CardDescription>
                    Complete these steps before proceeding to local registration
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="item-1" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="item-1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Determine the appropriate legal structure for the
                        business
                      </label>
                      <p className="text-sm text-muted-foreground">
                        Choose between Sole Proprietorship, Partnership,
                        Corporation, or Cooperative
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="item-2" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="item-2"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Register the chosen business name with the Department of
                        Trade and Industry (DTI)
                      </label>
                      <p className="text-sm text-muted-foreground">
                        For Sole Proprietorships, register through the BNRS
                        NextGen platform
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="item-3" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="item-3"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Register with SEC/CDA
                      </label>
                      <p className="text-sm text-muted-foreground">
                        For Partnerships and Corporations (SEC) or Cooperatives
                        (CDA)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="item-4" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="item-4"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Obtain a Taxpayer Identification Number (TIN) for the
                        business from the BIR
                      </label>
                      <p className="text-sm text-muted-foreground">
                        Required for all business types
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="item-5" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="item-5"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Register the business with the BIR
                      </label>
                      <p className="text-sm text-muted-foreground">
                        Using BIR Form No. 1901 (Sole Proprietorships) or BIR
                        Form No. 1903 (Partnerships/Corporations)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="item-6" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="item-6"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Register books of accounts with the BIR
                      </label>
                      <p className="text-sm text-muted-foreground">
                        Manual, loose-leaf, or through a Computerized Accounting
                        System
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="item-7" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="item-7"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Apply for an Authority to Print (ATP) official receipts
                        and invoices
                      </label>
                      <p className="text-sm text-muted-foreground">
                        Required before issuing receipts to customers
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Save Progress</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    Local Level Requirements (Dumaguete City)
                  </CardTitle>
                  <CardDescription>
                    Steps to complete at the Dumaguete City government offices
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="local-1" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="local-1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Obtain a Barangay Clearance
                      </label>
                      <p className="text-sm text-muted-foreground">
                        From the Barangay Hall where the business is located
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="local-2" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="local-2"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Secure a Tax Clearance
                      </label>
                      <p className="text-sm text-muted-foreground">
                        From the Dumaguete City Treasurer's Office
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="local-3" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="local-3"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Obtain an Environmental Permit
                      </label>
                      <p className="text-sm text-muted-foreground">
                        From the City Environment and Natural Resources Office
                        (ENRO)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="local-4" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="local-4"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Secure a Zoning Clearance
                      </label>
                      <p className="text-sm text-muted-foreground">
                        From the City Planning and Development Office
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="local-5" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="local-5"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Obtain a Sanitary/Health Permit
                      </label>
                      <p className="text-sm text-muted-foreground">
                        From the City Health Office
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="local-6" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="local-6"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Secure a Certificate of Occupancy
                      </label>
                      <p className="text-sm text-muted-foreground">
                        From the City Engineer's Office (for NEW businesses)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="local-7" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="local-7"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Obtain a Certificate of Fire Safety Inspection
                      </label>
                      <p className="text-sm text-muted-foreground">
                        From the Bureau of Fire Protection (BFP)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="local-8" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="local-8"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Apply for Mayor's Permit
                      </label>
                      <p className="text-sm text-muted-foreground">
                        Through the online eBPLS portal or at the Business
                        One-Stop Shop (BOSS)
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Save Progress</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="renewal">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Annual Renewal Requirements</CardTitle>
                  <CardDescription>
                    Complete these steps before January 20th each year
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="renewal-1" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="renewal-1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Renew Barangay Clearance
                      </label>
                      <p className="text-sm text-muted-foreground">
                        Visit your Barangay Hall with previous permit and
                        payment receipt
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="renewal-2" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="renewal-2"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Obtain a Tax Clearance
                      </label>
                      <p className="text-sm text-muted-foreground">
                        From the Dumaguete City Treasurer's Office for the
                        renewal period
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="renewal-3" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="renewal-3"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Obtain an updated Environmental Permit
                      </label>
                      <p className="text-sm text-muted-foreground">
                        From the City Environment and Natural Resources Office
                        (ENRO)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="renewal-4" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="renewal-4"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Secure a Certificate of Annual Safety Inspection (CASI)
                      </label>
                      <p className="text-sm text-muted-foreground">
                        From the City Engineer's Office
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="renewal-5" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="renewal-5"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Obtain an updated Sanitary/Health Permit
                      </label>
                      <p className="text-sm text-muted-foreground">
                        From the City Health Office
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="renewal-6" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="renewal-6"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Secure an updated Certificate of Fire Safety Inspection
                      </label>
                      <p className="text-sm text-muted-foreground">
                        From the Bureau of Fire Protection (BFP)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="renewal-7" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="renewal-7"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Renew Mayor's Permit
                      </label>
                      <p className="text-sm text-muted-foreground">
                        Submit renewal application through eBPLS with updated
                        information
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="renewal-8" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="renewal-8"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Renew BIR registration
                      </label>
                      <p className="text-sm text-muted-foreground">
                        File BIR Form No. 0605 before January 31st
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Save Progress</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Required Documents for Renewal</CardTitle>
                  <CardDescription>
                    Prepare these documents before starting the renewal process
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="doc-1" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="doc-1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Previous year's Business Permit and Official Receipt
                      </label>
                      <p className="text-sm text-muted-foreground">
                        Original and photocopies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="doc-2" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="doc-2"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Latest Income Tax Returns
                      </label>
                      <p className="text-sm text-muted-foreground">
                        Annual, monthly, or quarterly as applicable
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="doc-3" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="doc-3"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Community Tax Certificate (Cedula)
                      </label>
                      <p className="text-sm text-muted-foreground">
                        Current year
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="doc-4" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="doc-4"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Proof of local insurance policy
                      </label>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive General Liability (CGL) insurance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="doc-5" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="doc-5"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Audited Financial Statements
                      </label>
                      <p className="text-sm text-muted-foreground">
                        If required based on business type and size
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="doc-6" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="doc-6"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Lease contract
                      </label>
                      <p className="text-sm text-muted-foreground">
                        Valid through the next year (if renting business
                        premises)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="doc-7" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="doc-7"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        SSS/Pag-IBIG/PhilHealth registrations
                      </label>
                      <p className="text-sm text-muted-foreground">
                        For current employees
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="doc-8" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="doc-8"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Affidavit of No Operations
                      </label>
                      <p className="text-sm text-muted-foreground">
                        If business did not operate in the previous year
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Save Progress</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Penalty Calculator</CardTitle>
            <CardDescription>
              Estimate potential penalties for late renewal or registration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Annual Business Tax Amount (PHP)
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter amount"
                    type="number"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Months Overdue
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter months"
                    type="number"
                  />
                </div>
                <Button className="w-full">Calculate Penalty</Button>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Estimated Penalties:</h3>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span>25% Surcharge:</span>
                      <span className="font-medium">PHP 0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>2% Monthly Interest:</span>
                      <span className="font-medium">PHP 0.00</span>
                    </div>
                    <div className="flex justify-between border-t pt-1 mt-1">
                      <span className="font-medium">Total Penalty:</span>
                      <span className="font-bold">PHP 0.00</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4 bg-muted/50">
                  <h4 className="font-medium mb-2">Important Note:</h4>
                  <p className="text-sm text-muted-foreground">
                    Operating without valid permits can lead to business closure
                    and additional penalties. Always renew before the January
                    20th deadline.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <FileCheck2 className="h-6 w-6 text-primary" />
            <p className="text-center text-sm leading-loose md:text-left">
              &copy; 2025 PermitTracker. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
