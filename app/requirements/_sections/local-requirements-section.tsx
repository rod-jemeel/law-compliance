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
import { Calendar, CheckCircle, MapPin } from "lucide-react";

export function LocalRequirementsSection() {
  // Helper function to render requirement content consistently
  const renderRequirementContent = (
    requiredFor: string,
    requirements: string[],
    validity: string,
    whereToApply: string,
    websiteUrl?: string,
    websiteName?: string
  ) => (
    <div className="space-y-6 p-4 rounded-md border border-teal-100 bg-teal-50/30">
      <div className="bg-white p-3 rounded shadow-sm border-l-4 border-l-teal-500">
        <h4 className="font-semibold text-gray-700 flex items-center gap-2 mb-1">
          <span className="text-teal-600">Required For:</span>
        </h4>
        <p className="text-sm">
          <span className="inline-block bg-teal-100 text-teal-800 rounded-full px-3 py-1 font-medium">
            {requiredFor}
          </span>
        </p>
      </div>

      <div className="bg-white p-3 rounded shadow-sm">
        <h4 className="font-semibold text-gray-700 flex items-center gap-2 mb-2">
          <CheckCircle className="h-4 w-4 text-teal-600" />
          Requirements:
        </h4>
        <ul className="list-none pl-5 text-sm space-y-2">
          {requirements.map((item, index) => (
            <li key={index} className="flex gap-2 items-start">
              <span className="inline-block h-5 w-5 rounded-full bg-teal-100 text-teal-700 text-xs flex items-center justify-center mt-0.5 font-bold">
                {index + 1}
              </span>
              <span className="text-slate-600">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="bg-white p-3 rounded shadow-sm flex-1 border-l-4 border-l-amber-500">
          <h4 className="font-semibold text-gray-700 flex items-center gap-2 mb-1">
            <Calendar className="h-4 w-4 text-amber-600" />
            Validity:
          </h4>
          <p className="text-sm bg-amber-50 px-3 py-1.5 rounded text-amber-700 font-medium">
            {validity}
          </p>
        </div>

        <div className="bg-white p-3 rounded shadow-sm flex-1 border-l-4 border-l-teal-500">
          <h4 className="font-semibold text-gray-700 flex items-center gap-2 mb-1">
            <MapPin className="h-4 w-4 text-teal-600" />
            Where to Apply:
          </h4>
          <p className="text-sm text-slate-600">{whereToApply}</p>
        </div>
      </div>

      {websiteUrl && (
        <div className="pt-2">
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white shadow-sm"
            size="sm"
            asChild
          >
            <Link href={websiteUrl} target="_blank">
              Visit {websiteName || "Website"}
            </Link>
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-all">
      <CardHeader className="border-b border-slate-100">
        <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">
          Local Registration
        </span>
        <CardTitle className="text-xl text-gray-900">
          City / Municipality Local Requirements
        </CardTitle>
        <CardDescription className="text-slate-500">
          Requirements for obtaining business permits and licenses from City /
          Municipality government
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-medium hover:text-gray-700">
              Barangay Clearance
            </AccordionTrigger>
            <AccordionContent>
              {renderRequirementContent(
                "All businesses operating within City / Municipality",
                [
                  "Photocopy of DTI/SEC/CDA Certificate of Registration",
                  "Proof of business address (lease contract or property tax declaration)",
                  "Valid government-issued ID of the business owner/representative",
                  "Payment of barangay clearance fee (varies by barangay)",
                  "For renewal: Previous year's Barangay Business Permit and Official Receipt",
                ],
                "1 year (annual renewal required before January 20th)",
                "Barangay Hall where the business is physically located"
              )}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="font-medium hover:text-gray-700">
              Tax Clearance
            </AccordionTrigger>
            <AccordionContent>
              {renderRequirementContent(
                "All businesses operating within City / Municipality",
                [
                  "Application form for Tax Clearance",
                  "Proof of payment of all local taxes and fees",
                  "For renewal: Previous year's Business Permit and Official Receipt",
                  "Valid government-issued ID of the business owner/representative",
                ],
                "For the specific transaction (new application or renewal)",
                "City / Municipality Treasurer's Office"
              )}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="font-medium hover:text-gray-700">
              Environmental Permit
            </AccordionTrigger>
            <AccordionContent>
              {renderRequirementContent(
                "All businesses operating within City / Municipality",
                [
                  "Application form for Environmental Permit",
                  "Business description and operations",
                  "Site development plan or layout",
                  "Waste management plan (if applicable)",
                  "Environmental Compliance Certificate (for certain businesses)",
                  "Payment of environmental permit fee",
                ],
                "1 year (annual renewal required)",
                "City Environment and Natural Resources Office (ENRO)"
              )}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="font-medium hover:text-gray-700">
              Zoning Clearance
            </AccordionTrigger>
            <AccordionContent>
              {renderRequirementContent(
                "All businesses operating within City / Municipality",
                [
                  "Application form for Zoning Clearance",
                  "Business location map/vicinity map",
                  "Proof of business address (lease contract or property tax declaration)",
                  "Building layout or floor plan",
                  "Land title or tax declaration",
                  "Payment of zoning clearance fee",
                ],
                "For the specific transaction (new application or renewal)",
                "City Planning and Development Office"
              )}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="font-medium hover:text-gray-700">
              Sanitary/Health Permit
            </AccordionTrigger>
            <AccordionContent>
              {renderRequirementContent(
                "All businesses operating within City / Municipality (especially food-related)",
                [
                  "Application form for Sanitary/Health Permit",
                  "Health certificates of employees (for food establishments)",
                  "Certificate of attendance to food handling seminar (for food establishments)",
                  "Building layout showing sanitary facilities",
                  "Payment of sanitary/health permit fee",
                ],
                "1 year (annual renewal required)",
                "City Health Office"
              )}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="font-medium hover:text-gray-700">
              Certificate of Occupancy / Annual Safety Inspection
            </AccordionTrigger>
            <AccordionContent>
              {renderRequirementContent(
                "Certificate of Occupancy: New businesses\nCertificate of Annual Safety Inspection (CASI): For renewal",
                [
                  "Application form",
                  "Building permit and certificate of completion (for new buildings)",
                  "Building layout or floor plan",
                  "Electrical plan and permit",
                  "Structural stability certificate (if applicable)",
                  "Payment of inspection fee",
                ],
                "1 year (annual renewal required)",
                "City Engineer's Office"
              )}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="font-medium hover:text-gray-700">
              Fire Safety Inspection Certificate
            </AccordionTrigger>
            <AccordionContent>
              {renderRequirementContent(
                "All businesses operating within City / Municipality",
                [
                  "Application form for Fire Safety Inspection",
                  "Building layout or floor plan",
                  "Proof of installed fire safety equipment (fire extinguishers, alarms, etc.)",
                  "Emergency evacuation plan",
                  "Payment of fire safety inspection fee",
                ],
                "1 year (annual renewal required)",
                "Bureau of Fire Protection (BFP) - City / Municipality Fire Station"
              )}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="font-medium hover:text-gray-700">
              Mayor&apos;s Permit / Business Permit
            </AccordionTrigger>
            <AccordionContent>
              {renderRequirementContent(
                "All businesses operating within City / Municipality",
                [
                  "Duly accomplished and notarized Mayor's Permit Application Form",
                  "DTI/SEC/CDA Certificate of Registration",
                  "Barangay Clearance",
                  "Tax Clearance from City Treasurer's Office",
                  "Environmental Permit from ENRO",
                  "Zoning Clearance",
                  "Sanitary/Health Permit",
                  "Certificate of Occupancy (new) or CASI (renewal)",
                  "Fire Safety Inspection Certificate",
                  "SSS, PhilHealth, Pag-IBIG clearances",
                  "BIR Clearance (R-VAT)",
                  "For renewal: Previous year's Business Permit and Official Receipt",
                  "Payment of business permit fees and local business taxes",
                ],
                "1 year (annual renewal required before January 20th)",
                "Online through the eBPLS portal or at the Business One-Stop Shop (BOSS) at City / Municipality Hall",
                "https://dumaguetecity.gov.ph/business-one-stop-shop/",
                "Dumaguete BOSS Website"
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
