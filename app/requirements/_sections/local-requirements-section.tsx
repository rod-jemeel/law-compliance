"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function LocalRequirementsSection() {
  return (
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
                      Photocopy of DTI/SEC/CDA Certificate of Registration
                    </li>
                    <li>
                      Proof of business address (lease contract or property tax
                      declaration)
                    </li>
                    <li>
                      Valid government-issued ID of the business
                      owner/representative
                    </li>
                    <li>
                      Payment of barangay clearance fee (varies by barangay)
                    </li>
                    <li>
                      For renewal: Previous year&apos;s Barangay Business Permit
                      and Official Receipt
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
                    Barangay Hall where the business is physically located
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
                    <li>Proof of payment of all local taxes and fees</li>
                    <li>
                      For renewal: Previous year&apos;s Business Permit and
                      Official Receipt
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
                    For the specific transaction (new application or renewal)
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
                      Proof of business address (lease contract or property tax
                      declaration)
                    </li>
                    <li>Building layout or floor plan</li>
                    <li>Land title or tax declaration</li>
                    <li>Payment of zoning clearance fee</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Validity:</h4>
                  <p className="text-sm text-muted-foreground">
                    For the specific transaction (new application or renewal)
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
                    All businesses operating within Dumaguete City (especially
                    food-related)
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Requirements:</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Application form for Sanitary/Health Permit</li>
                    <li>
                      Health certificates of employees (for food establishments)
                    </li>
                    <li>
                      Certificate of attendance to food handling seminar (for
                      food establishments)
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
                    Certificate of Annual Safety Inspection (CASI): For renewal
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Requirements:</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Application form</li>
                    <li>
                      Building permit and certificate of completion (for new
                      buildings)
                    </li>
                    <li>Building layout or floor plan</li>
                    <li>Electrical plan and permit</li>
                    <li>Structural stability certificate (if applicable)</li>
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
                    Bureau of Fire Protection (BFP) - Dumaguete City Fire
                    Station
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
                      Duly accomplished and notarized Mayor&apos;s Permit
                      Application Form
                    </li>
                    <li>DTI/SEC/CDA Certificate of Registration</li>
                    <li>Barangay Clearance</li>
                    <li>Tax Clearance from City Treasurer&apos;s Office</li>
                    <li>Environmental Permit from ENRO</li>
                    <li>Zoning Clearance</li>
                    <li>Sanitary/Health Permit</li>
                    <li>Certificate of Occupancy (new) or CASI (renewal)</li>
                    <li>Fire Safety Inspection Certificate</li>
                    <li>SSS, PhilHealth, Pag-IBIG clearances</li>
                    <li>BIR Clearance (R-VAT)</li>
                    <li>
                      For renewal: Previous year&apos;s Business Permit and
                      Official Receipt
                    </li>
                    <li>
                      Payment of business permit fees and local business taxes
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
                    Online through the eBPLS portal or at the Business One-Stop
                    Shop (BOSS) at Dumaguete City Hall
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
  );
}
