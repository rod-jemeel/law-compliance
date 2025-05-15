"use client";

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
import ChecklistItem from "../_components/checklist-item";
import { useRouter } from "next/navigation";

export default function ChecklistSection() {
  const router = useRouter();
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-700">
              Comprehensive Checklists
            </h2>
            <p className=" md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to know about business registration and
              renewal in the Philippines.
            </p>
          </div>
        </div>{" "}
        <div className="w-full flex justify-center py-12">
          <Tabs defaultValue="new" className="w-full max-w-4xl">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="new">New Registration</TabsTrigger>
              <TabsTrigger value="renewal">Annual Renewal</TabsTrigger>
            </TabsList>{" "}
            <TabsContent value="new" className="mt-6 space-y-4">
              {" "}
              <Card className="border-blue-200 bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-blue-700">
                    National Level Requirements
                  </CardTitle>
                  <CardDescription className="text-blue-600">
                    Complete these steps before proceeding to local registration
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ChecklistItem
                    title="Determine your business structure"
                    description="Choose between Sole Proprietorship, Partnership, Corporation, or Cooperative"
                  />
                  <ChecklistItem
                    title="Register with DTI (for Sole Proprietorship)"
                    description="Register your business name through the BNRS NextGen platform"
                  />
                  <ChecklistItem
                    title="Register with SEC/CDA (for other business types)"
                    description="Complete registration with Securities and Exchange Commission or Cooperative Development Authority"
                  />
                  <ChecklistItem
                    title="Register with BIR"
                    description="Obtain TIN, register books of accounts, and get Authority to Print receipts"
                  />
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => router.push("/requirements")}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    View Complete Checklist
                  </Button>
                </CardFooter>
              </Card>{" "}
              <Card className="border-blue-200 bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-blue-700">
                    Local Level Requirements (City / Municipality)
                  </CardTitle>
                  <CardDescription className="text-blue-600">
                    Steps to complete at your City / Municipality government
                    offices
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ChecklistItem
                    title="Obtain Barangay Clearance"
                    description="Visit your local Barangay Hall with required documents"
                  />
                  <ChecklistItem
                    title="Secure necessary clearances and permits"
                    description="Including Tax Clearance, Environmental Permit, Zoning Clearance, and more"
                  />
                  <ChecklistItem
                    title="Apply for Mayor's Permit"
                    description="Submit application through eBPLS or at the Business One-Stop Shop"
                  />
                  <ChecklistItem
                    title="Pay required fees"
                    description="Pay business permit fees and local business taxes"
                  />
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => router.push("/requirements")}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    View Complete Checklist
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="renewal" className="mt-6 space-y-4">
              {" "}
              <Card className="border-blue-200 bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-blue-700">
                    Annual Renewal Requirements
                  </CardTitle>
                  <CardDescription className="text-blue-600">
                    Complete these steps before January 20th each year
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ChecklistItem
                    title="Renew Barangay Clearance"
                    description="Visit your local Barangay Hall with required renewal documents"
                  />
                  <ChecklistItem
                    title="File and pay business taxes"
                    description="Submit tax declarations and payments at City Treasurer's Office"
                  />
                  <ChecklistItem
                    title="Renew Mayor's Permit"
                    description="Visit Business Permits and Licensing Office with requirements"
                  />
                  <ChecklistItem
                    title="Complete BIR annual registration"
                    description="File required forms and pay annual registration fee"
                  />
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => router.push("/requirements")}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    View Complete Checklist
                  </Button>
                </CardFooter>
              </Card>{" "}
              <Card className="border-blue-200 bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-blue-700">
                    Required Documents
                  </CardTitle>
                  <CardDescription className="text-blue-600">
                    Documents to prepare for annual renewal
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ChecklistItem
                    title="Previous year's business permit"
                    description="Original copy of your last business permit"
                  />
                  <ChecklistItem
                    title="Barangay Clearance for renewal"
                    description="Updated clearance from your business location"
                  />
                  <ChecklistItem
                    title="Financial statements"
                    description="Required for businesses with specific revenue thresholds"
                  />
                  <ChecklistItem
                    title="Tax compliance documents"
                    description="Proof of payment for all required taxes"
                  />
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => router.push("/requirements")}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    View Complete Document List
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
