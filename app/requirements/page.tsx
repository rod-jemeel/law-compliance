import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

export default function RequirementsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Business Permit Requirements
            </h1>
            <p className="text-muted-foreground">
              Comprehensive guide to all requirements for business registration
              and renewal in Dumaguete City
            </p>
          </div>
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search requirements..."
              className="w-full pl-8"
            />
          </div>
        </div>

        <Tabs defaultValue="national" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="national">National Requirements</TabsTrigger>
            <TabsTrigger value="local">Local Requirements</TabsTrigger>
          </TabsList>
          <TabsContent value="national">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>National Level Registration Requirements</CardTitle>
                <CardDescription>
                  Requirements for registering your business with national
                  government agencies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      Department of Trade and Industry (DTI) Registration
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Required For:</h4>
                          <p className="text-sm text-muted-foreground">
                            Sole Proprietorships
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Requirements:</h4>
                          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>
                              Valid government-issued ID of the business owner
                            </li>
                            <li>
                              Proposed business name that follows DTI guidelines
                            </li>
                            <li>
                              Completed application form (available online
                              through BNRS NextGen)
                            </li>
                            <li>
                              Payment of registration fee (varies based on scope
                              of business)
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium">Validity:</h4>
                          <p className="text-sm text-muted-foreground">
                            5 years, renewable
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Where to Apply:</h4>
                          <p className="text-sm text-muted-foreground">
                            Online through the Business Name Registration System
                            Next Generation (BNRS NextGen) platform
                          </p>
                        </div>
                        <div className="pt-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link
                              href="https://bnrs.dti.gov.ph"
                              target="_blank"
                            >
                              Visit DTI BNRS Website
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      Securities and Exchange Commission (SEC) Registration
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Required For:</h4>
                          <p className="text-sm text-muted-foreground">
                            Partnerships and Corporations
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Requirements:</h4>
                          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>Company name verification slip</li>
                            <li>Articles of Incorporation/Partnership</li>
                            <li>Treasurer&apos;s Affidavit</li>
                            <li>
                              Written undertaking to comply with SEC reportorial
                              requirements
                            </li>
                            <li>Valid IDs of all incorporators/partners</li>
                            <li>
                              Payment of filing fees (based on authorized
                              capital stock)
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium">Validity:</h4>
                          <p className="text-sm text-muted-foreground">
                            Perpetual (subject to annual compliance
                            requirements)
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Where to Apply:</h4>
                          <p className="text-sm text-muted-foreground">
                            SEC Company Registration System (CRS) online or at
                            SEC offices
                          </p>
                        </div>
                        <div className="pt-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="https://www.sec.gov.ph" target="_blank">
                              Visit SEC Website
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      Cooperative Development Authority (CDA) Registration
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Required For:</h4>
                          <p className="text-sm text-muted-foreground">
                            Cooperatives
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Requirements:</h4>
                          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>Economic Survey</li>
                            <li>Articles of Cooperation</li>
                            <li>Cooperative By-laws</li>
                            <li>Treasurer&apos;s Affidavit</li>
                            <li>Bond of Accountable Officers</li>
                            <li>
                              Proof of membership training on cooperatives
                            </li>
                            <li>Payment of registration fees</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium">Validity:</h4>
                          <p className="text-sm text-muted-foreground">
                            Perpetual (subject to annual compliance
                            requirements)
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Where to Apply:</h4>
                          <p className="text-sm text-muted-foreground">
                            CDA Extension Office with jurisdiction over the
                            cooperative&apos;s principal address
                          </p>
                        </div>
                        <div className="pt-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="https://cda.gov.ph" target="_blank">
                              Visit CDA Website
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      Bureau of Internal Revenue (BIR) Registration
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Required For:</h4>
                          <p className="text-sm text-muted-foreground">
                            All business types
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Requirements:</h4>
                          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>DTI/SEC/CDA Certificate of Registration</li>
                            <li>
                              Mayor&apos;s/Business Permit application form or
                              Official Receipt
                            </li>
                            <li>
                              Lease contract (if renting) or proof of property
                              ownership
                            </li>
                            <li>
                              Valid government-issued ID of the business
                              owner/representative
                            </li>
                            <li>
                              BIR Form No. 1901 (for Sole Proprietorships) or
                              BIR Form No. 1903 (for Partnerships/Corporations)
                            </li>
                            <li>Books of accounts for registration</li>
                            <li>Documentary Stamp Tax payment</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium">Validity:</h4>
                          <p className="text-sm text-muted-foreground">
                            Annual renewal required (before January 31st each
                            year)
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Where to Apply:</h4>
                          <p className="text-sm text-muted-foreground">
                            Revenue District Office (RDO) with jurisdiction over
                            the business&apos;s registered address
                          </p>
                        </div>
                        <div className="pt-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="https://www.bir.gov.ph" target="_blank">
                              Visit BIR Website
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>
                      Social Security System (SSS) Registration
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Required For:</h4>
                          <p className="text-sm text-muted-foreground">
                            All businesses with employees
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Requirements:</h4>
                          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>DTI/SEC/CDA Certificate of Registration</li>
                            <li>Mayor&apos;s/Business Permit</li>
                            <li>BIR Certificate of Registration</li>
                            <li>
                              List of employees with their respective SSS
                              numbers
                            </li>
                            <li>
                              Valid ID of the business owner/authorized
                              representative
                            </li>
                            <li>
                              Special Power of Attorney (if represented by an
                              authorized person)
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium">Validity:</h4>
                          <p className="text-sm text-muted-foreground">
                            Perpetual (subject to monthly contribution
                            requirements)
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Where to Apply:</h4>
                          <p className="text-sm text-muted-foreground">
                            SSS branch with jurisdiction over the
                            business&apos;s registered address or online through
                            SSS website
                          </p>
                        </div>
                        <div className="pt-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="https://www.sss.gov.ph" target="_blank">
                              Visit SSS Website
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>
                      PhilHealth and Pag-IBIG Registration
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Required For:</h4>
                          <p className="text-sm text-muted-foreground">
                            All businesses with employees
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Requirements:</h4>
                          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>DTI/SEC/CDA Certificate of Registration</li>
                            <li>Mayor&apos;s/Business Permit</li>
                            <li>BIR Certificate of Registration</li>
                            <li>
                              List of employees with their respective
                              PhilHealth/Pag-IBIG numbers
                            </li>
                            <li>
                              Valid ID of the business owner/authorized
                              representative
                            </li>
                            <li>Employer Registration Form</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium">Validity:</h4>
                          <p className="text-sm text-muted-foreground">
                            Perpetual (subject to monthly contribution
                            requirements)
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Where to Apply:</h4>
                          <p className="text-sm text-muted-foreground">
                            PhilHealth and Pag-IBIG offices or online through
                            their respective websites
                          </p>
                        </div>
                        <div className="pt-2 flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link
                              href="https://www.philhealth.gov.ph"
                              target="_blank"
                            >
                              Visit PhilHealth Website
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link
                              href="https://www.pagibigfund.gov.ph"
                              target="_blank"
                            >
                              Visit Pag-IBIG Website
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="local">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Dumaguete City Local Requirements</CardTitle>
                <CardDescription>
                  Requirements for obtaining business permits and licenses from
                  Dumaguete City government
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Barangay Clearance</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Required For:</h4>
                          <p className="text-sm text-muted-foreground">
                            All businesses operating within Dumaguete City
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Requirements:</h4>
                          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>
                              Photocopy of DTI/SEC/CDA Certificate of
                              Registration
                            </li>
                            <li>
                              Proof of business address (lease contract or
                              property tax declaration)
                            </li>
                            <li>
                              Valid government-issued ID of the business
                              owner/representative
                            </li>
                            <li>
                              Payment of barangay clearance fee (varies by
                              barangay)
                            </li>
                            <li>
                              For renewal: Previous year&apos;s Barangay
                              Business Permit and Official Receipt
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium">Validity:</h4>
                          <p className="text-sm text-muted-foreground">
                            1 year (annual renewal required before January 20th)
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Where to Apply:</h4>
                          <p className="text-sm text-muted-foreground">
                            Barangay Hall where the business is physically
                            located
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Tax Clearance</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Required For:</h4>
                          <p className="text-sm text-muted-foreground">
                            All businesses operating within Dumaguete City
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Requirements:</h4>
                          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>Application form for Tax Clearance</li>
                            <li>
                              Proof of payment of all local taxes and fees
                            </li>
                            <li>
                              For renewal: Previous year&apos;s Business Permit
                              and Official Receipt
                            </li>
                            <li>
                              Valid government-issued ID of the business
                              owner/representative
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium">Validity:</h4>
                          <p className="text-sm text-muted-foreground">
                            For the specific transaction (new application or
                            renewal)
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Where to Apply:</h4>
                          <p className="text-sm text-muted-foreground">
                            Dumaguete City Treasurer&apos;s Office
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Environmental Permit</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Required For:</h4>
                          <p className="text-sm text-muted-foreground">
                            All businesses operating within Dumaguete City
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Requirements:</h4>
                          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>Application form for Environmental Permit</li>
                            <li>Business description and operations</li>
                            <li>Site development plan or layout</li>
                            <li>Waste management plan (if applicable)</li>
                            <li>
                              Environmental Compliance Certificate (for certain
                              businesses)
                            </li>
                            <li>Payment of environmental permit fee</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium">Validity:</h4>
                          <p className="text-sm text-muted-foreground">
                            1 year (annual renewal required)
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Where to Apply:</h4>
                          <p className="text-sm text-muted-foreground">
                            City Environment and Natural Resources Office (ENRO)
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Zoning Clearance</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Required For:</h4>
                          <p className="text-sm text-muted-foreground">
                            All businesses operating within Dumaguete City
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Requirements:</h4>
                          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>Application form for Zoning Clearance</li>
                            <li>Business location map/vicinity map</li>
                            <li>
                              Proof of business address (lease contract or
                              property tax declaration)
                            </li>
                            <li>Building layout or floor plan</li>
                            <li>Land title or tax declaration</li>
                            <li>Payment of zoning clearance fee</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium">Validity:</h4>
                          <p className="text-sm text-muted-foreground">
                            For the specific transaction (new application or
                            renewal)
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Where to Apply:</h4>
                          <p className="text-sm text-muted-foreground">
                            City Planning and Development Office
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Sanitary/Health Permit</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Required For:</h4>
                          <p className="text-sm text-muted-foreground">
                            All businesses operating within Dumaguete City
                            (especially food-related)
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Requirements:</h4>
                          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>Application form for Sanitary/Health Permit</li>
                            <li>
                              Health certificates of employees (for food
                              establishments)
                            </li>
                            <li>
                              Certificate of attendance to food handling seminar
                              (for food establishments)
                            </li>
                            <li>Building layout showing sanitary facilities</li>
                            <li>Payment of sanitary/health permit fee</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium">Validity:</h4>
                          <p className="text-sm text-muted-foreground">
                            1 year (annual renewal required)
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Where to Apply:</h4>
                          <p className="text-sm text-muted-foreground">
                            City Health Office
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>
                      Certificate of Occupancy / Annual Safety Inspection
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Required For:</h4>
                          <p className="text-sm text-muted-foreground">
                            Certificate of Occupancy: New businesses
                            <br />
                            Certificate of Annual Safety Inspection (CASI): For
                            renewal
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Requirements:</h4>
                          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>Application form</li>
                            <li>
                              Building permit and certificate of completion (for
                              new buildings)
                            </li>
                            <li>Building layout or floor plan</li>
                            <li>Electrical plan and permit</li>
                            <li>
                              Structural stability certificate (if applicable)
                            </li>
                            <li>Payment of inspection fee</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium">Validity:</h4>
                          <p className="text-sm text-muted-foreground">
                            1 year (annual renewal required)
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Where to Apply:</h4>
                          <p className="text-sm text-muted-foreground">
                            City Engineer&apos;s Office
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-7">
                    <AccordionTrigger>
                      Fire Safety Inspection Certificate
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Required For:</h4>
                          <p className="text-sm text-muted-foreground">
                            All businesses operating within Dumaguete City
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Requirements:</h4>
                          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>Application form for Fire Safety Inspection</li>
                            <li>Building layout or floor plan</li>
                            <li>
                              Proof of installed fire safety equipment (fire
                              extinguishers, alarms, etc.)
                            </li>
                            <li>Emergency evacuation plan</li>
                            <li>Payment of fire safety inspection fee</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium">Validity:</h4>
                          <p className="text-sm text-muted-foreground">
                            1 year (annual renewal required)
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Where to Apply:</h4>
                          <p className="text-sm text-muted-foreground">
                            Bureau of Fire Protection (BFP) - Dumaguete City
                            Fire Station
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-8">
                    <AccordionTrigger>
                      Mayor&apos;s Permit / Business Permit
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Required For:</h4>
                          <p className="text-sm text-muted-foreground">
                            All businesses operating within Dumaguete City
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Requirements:</h4>
                          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>
                              Duly accomplished and notarized Mayor&apos;s
                              Permit Application Form
                            </li>
                            <li>DTI/SEC/CDA Certificate of Registration</li>
                            <li>Barangay Clearance</li>
                            <li>
                              Tax Clearance from City Treasurer&apos;s Office
                            </li>
                            <li>Environmental Permit from ENRO</li>
                            <li>Zoning Clearance</li>
                            <li>Sanitary/Health Permit</li>
                            <li>
                              Certificate of Occupancy (new) or CASI (renewal)
                            </li>
                            <li>Fire Safety Inspection Certificate</li>
                            <li>SSS, PhilHealth, Pag-IBIG clearances</li>
                            <li>BIR Clearance (R-VAT)</li>
                            <li>
                              For renewal: Previous year&apos;s Business Permit
                              and Official Receipt
                            </li>
                            <li>
                              Payment of business permit fees and local business
                              taxes
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium">Validity:</h4>
                          <p className="text-sm text-muted-foreground">
                            1 year (annual renewal required before January 20th)
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Where to Apply:</h4>
                          <p className="text-sm text-muted-foreground">
                            Online through the eBPLS portal or at the Business
                            One-Stop Shop (BOSS) at Dumaguete City Hall
                          </p>
                        </div>
                        <div className="pt-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link
                              href="https://dumaguetecity.gov.ph/business-one-stop-shop/"
                              target="_blank"
                            >
                              Visit Dumaguete BOSS Website
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>
              Special Requirements for Specific Business Types
            </CardTitle>
            <CardDescription>
              Additional permits and licenses required for certain types of
              businesses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Food Establishments</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Food Handler&apos;s Certificate for all employees</li>
                    <li>Certificate of attendance to food handling seminar</li>
                    <li>FDA License to Operate (for food manufacturers)</li>
                    <li>Special Sanitary Permit</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">
                    Liquor Establishments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Liquor License</li>
                    <li>PNP Clearance</li>
                    <li>Neighborhood Consent (for certain areas)</li>
                    <li>Special Location Clearance</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">
                    Tourism-Related Businesses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Department of Tourism (DOT) Accreditation</li>
                    <li>Special Permits for Tour Operations</li>
                    <li>Transport Franchise (for tour vehicles)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">
                    Construction Companies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>PCAB License</li>
                    <li>Environmental Compliance Certificate</li>
                    <li>Professional Licenses of Engineers</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">
                    Healthcare Facilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>DOH License to Operate</li>
                    <li>Professional Licenses of Medical Staff</li>
                    <li>Special Waste Management Permit</li>
                    <li>PhilHealth Accreditation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">
                    Educational Institutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>DepEd/CHED/TESDA Permits and Licenses</li>
                    <li>Special Occupancy Permit</li>
                    <li>Faculty Credentials</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
