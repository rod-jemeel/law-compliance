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

export function NationalRequirementsSection() {
  // Helper function to render requirement content consistently
  const renderRequirementContent = (
    requiredFor: string,
    requirements: string[],
    validity: string,
    whereToApply: string,
    websiteUrl?: string,
    websiteName?: string
  ) => (
    <div className="space-y-6 p-4 rounded-md border border-indigo-100 bg-indigo-50/30">
      <div className="bg-white p-3 rounded shadow-sm border-l-4 border-l-indigo-500">
        <h4 className="font-semibold text-gray-700 flex items-center gap-2 mb-1">
          <span className="text-indigo-600">Required For:</span>
        </h4>
        <p className="text-sm">
          <span className="inline-block bg-indigo-100 text-indigo-800 rounded-full px-3 py-1 font-medium">
            {requiredFor}
          </span>
        </p>
      </div>

      <div className="bg-white p-3 rounded shadow-sm">
        <h4 className="font-semibold text-gray-700 flex items-center gap-2 mb-2">
          <CheckCircle className="h-4 w-4 text-indigo-600" />
          Requirements:
        </h4>
        <ul className="list-none pl-5 text-sm space-y-2">
          {requirements.map((item, index) => (
            <li key={index} className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-xs font-bold text-indigo-700">
                  {index + 1}
                </span>
              </div>
              <span className="text-slate-600 pt-0.5">{item}</span>
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

        <div className="bg-white p-3 rounded shadow-sm flex-1 border-l-4 border-l-green-500">
          <h4 className="font-semibold text-gray-700 flex items-center gap-2 mb-1">
            <MapPin className="h-4 w-4 text-green-600" />
            Where to Apply:
          </h4>
          <p className="text-sm text-slate-600">{whereToApply}</p>
        </div>
      </div>

      {websiteUrl && (
        <div className="pt-2">
          <Button
            className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm"
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
        <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
          National Registration
        </span>
        <CardTitle className="text-xl text-gray-900">
          National Level Registration Requirements
        </CardTitle>
        <CardDescription className="text-slate-500">
          Requirements for registering your business with national government
          agencies
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-medium hover:text-gray-700">
              Department of Trade and Industry (DTI) Registration
            </AccordionTrigger>
            <AccordionContent>
              {renderRequirementContent(
                "Sole Proprietorships",
                [
                  "Valid government-issued ID of the business owner",
                  "Proposed business name that follows DTI guidelines",
                  "Completed application form (available online through BNRS NextGen)",
                  "Payment of registration fee (varies based on scope of business)",
                ],
                "5 years, renewable",
                "Online through the Business Name Registration System Next Generation (BNRS NextGen) platform",
                "https://bnrs.dti.gov.ph",
                "DTI BNRS Website"
              )}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="font-medium hover:text-gray-700">
              Securities and Exchange Commission (SEC) Registration
            </AccordionTrigger>
            <AccordionContent>
              {renderRequirementContent(
                "Partnerships and Corporations",
                [
                  "Company name verification slip",
                  "Articles of Incorporation/Partnership",
                  "Treasurer's Affidavit",
                  "Written undertaking to comply with SEC reportorial requirements",
                  "Valid IDs of all incorporators/partners",
                  "Payment of filing fees (based on authorized capital stock)",
                ],
                "Perpetual (subject to annual compliance requirements)",
                "SEC Company Registration System (CRS) online or at SEC offices",
                "https://www.sec.gov.ph",
                "SEC Website"
              )}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="font-medium hover:text-gray-700">
              Cooperative Development Authority (CDA) Registration
            </AccordionTrigger>
            <AccordionContent>
              {renderRequirementContent(
                "Cooperatives",
                [
                  "Economic Survey",
                  "Articles of Cooperation",
                  "Cooperative By-laws",
                  "Treasurer's Affidavit",
                  "Bond of Accountable Officers",
                  "Proof of membership training on cooperatives",
                  "Payment of registration fees",
                ],
                "Perpetual (subject to annual compliance requirements)",
                "CDA Extension Office with jurisdiction over the cooperative's principal address",
                "https://cda.gov.ph",
                "CDA Website"
              )}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="font-medium hover:text-gray-700">
              Bureau of Internal Revenue (BIR) Registration
            </AccordionTrigger>
            <AccordionContent>
              {renderRequirementContent(
                "All business types",
                [
                  "DTI/SEC/CDA Certificate of Registration",
                  "Mayor's/Business Permit application form or Official Receipt",
                  "Lease contract (if renting) or proof of property ownership",
                  "Valid government-issued ID of the business owner/representative",
                  "BIR Form No. 1901 (for Sole Proprietorships) or BIR Form No. 1903 (for Partnerships/Corporations)",
                  "Books of accounts for registration",
                  "Documentary Stamp Tax payment",
                ],
                "Annual renewal required (before January 31st each year)",
                "Revenue District Office (RDO) with jurisdiction over the business's registered address",
                "https://www.bir.gov.ph",
                "BIR Website"
              )}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="font-medium hover:text-gray-700">
              Social Security System (SSS) Registration
            </AccordionTrigger>
            <AccordionContent>
              {renderRequirementContent(
                "All businesses with employees",
                [
                  "DTI/SEC/CDA Certificate of Registration",
                  "Mayor's/Business Permit",
                  "BIR Certificate of Registration",
                  "List of employees with their respective SSS numbers",
                  "Valid ID of the business owner/authorized representative",
                  "Special Power of Attorney (if represented by an authorized person)",
                ],
                "Perpetual (subject to monthly contribution requirements)",
                "SSS branch with jurisdiction over the business's registered address or online through SSS website",
                "https://www.sss.gov.ph",
                "SSS Website"
              )}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="font-medium hover:text-gray-700">
              PhilHealth and Pag-IBIG Registration
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6 bg-indigo-50/30 p-4 rounded-md border border-indigo-100">
                <div className="bg-white p-3 rounded shadow-sm border-l-4 border-l-indigo-500">
                  <h4 className="font-semibold text-gray-700 flex items-center gap-2 mb-1">
                    <span className="text-indigo-600">Required For:</span>
                  </h4>
                  <p className="text-sm">
                    <span className="inline-block bg-indigo-100 text-indigo-800 rounded-full px-3 py-1 font-medium">
                      All businesses with employees
                    </span>
                  </p>
                </div>

                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-semibold text-gray-700 flex items-center gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-indigo-600" />
                    Requirements:
                  </h4>
                  <ul className="list-none pl-5 text-sm space-y-2">
                    {[
                      "DTI/SEC/CDA Certificate of Registration",
                      "Mayor's/Business Permit",
                      "BIR Certificate of Registration",
                      "List of employees with their respective PhilHealth/Pag-IBIG numbers",
                      "Valid ID of the business owner/authorized representative",
                      "Employer Registration Form",
                    ].map((item, index) => (
                      <li key={index} className="flex gap-3 items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                          <span className="text-xs font-bold text-indigo-700">
                            {index + 1}
                          </span>
                        </div>
                        <span className="text-slate-600 pt-0.5">{item}</span>
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
                      Perpetual (subject to monthly contribution requirements)
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded shadow-sm flex-1 border-l-4 border-l-green-500">
                    <h4 className="font-semibold text-gray-700 flex items-center gap-2 mb-1">
                      <MapPin className="h-4 w-4 text-green-600" />
                      Where to Apply:
                    </h4>
                    <p className="text-sm text-slate-600">
                      PhilHealth and Pag-IBIG offices or online through their
                      respective websites
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex gap-2">
                  <Button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm"
                    size="sm"
                    asChild
                  >
                    <Link href="https://www.philhealth.gov.ph" target="_blank">
                      Visit PhilHealth Website
                    </Link>
                  </Button>
                  <Button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm"
                    size="sm"
                    asChild
                  >
                    <Link href="https://www.pagibigfund.gov.ph" target="_blank">
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
  );
}
