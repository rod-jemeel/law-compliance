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

export function NationalRequirementsSection() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>National Level Registration Requirements</CardTitle>
        <CardDescription>
          Requirements for registering your business with national government
          agencies
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
                    <li>Valid government-issued ID of the business owner</li>
                    <li>Proposed business name that follows DTI guidelines</li>
                    <li>
                      Completed application form (available online through BNRS
                      NextGen)
                    </li>
                    <li>
                      Payment of registration fee (varies based on scope of
                      business)
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
                    Online through the Business Name Registration System Next
                    Generation (BNRS NextGen) platform
                  </p>
                </div>
                <div className="pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://bnrs.dti.gov.ph" target="_blank">
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
                      Payment of filing fees (based on authorized capital stock)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Validity:</h4>
                  <p className="text-sm text-muted-foreground">
                    Perpetual (subject to annual compliance requirements)
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Where to Apply:</h4>
                  <p className="text-sm text-muted-foreground">
                    SEC Company Registration System (CRS) online or at SEC
                    offices
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
                  <p className="text-sm text-muted-foreground">Cooperatives</p>
                </div>
                <div>
                  <h4 className="font-medium">Requirements:</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Economic Survey</li>
                    <li>Articles of Cooperation</li>
                    <li>Cooperative By-laws</li>
                    <li>Treasurer&apos;s Affidavit</li>
                    <li>Bond of Accountable Officers</li>
                    <li>Proof of membership training on cooperatives</li>
                    <li>Payment of registration fees</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Validity:</h4>
                  <p className="text-sm text-muted-foreground">
                    Perpetual (subject to annual compliance requirements)
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
                      Mayor&apos;s/Business Permit application form or Official
                      Receipt
                    </li>
                    <li>
                      Lease contract (if renting) or proof of property ownership
                    </li>
                    <li>
                      Valid government-issued ID of the business
                      owner/representative
                    </li>
                    <li>
                      BIR Form No. 1901 (for Sole Proprietorships) or BIR Form
                      No. 1903 (for Partnerships/Corporations)
                    </li>
                    <li>Books of accounts for registration</li>
                    <li>Documentary Stamp Tax payment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Validity:</h4>
                  <p className="text-sm text-muted-foreground">
                    Annual renewal required (before January 31st each year)
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Where to Apply:</h4>
                  <p className="text-sm text-muted-foreground">
                    Revenue District Office (RDO) with jurisdiction over the
                    business&apos;s registered address
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
                    <li>List of employees with their respective SSS numbers</li>
                    <li>
                      Valid ID of the business owner/authorized representative
                    </li>
                    <li>
                      Special Power of Attorney (if represented by an authorized
                      person)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Validity:</h4>
                  <p className="text-sm text-muted-foreground">
                    Perpetual (subject to monthly contribution requirements)
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Where to Apply:</h4>
                  <p className="text-sm text-muted-foreground">
                    SSS branch with jurisdiction over the business&apos;s
                    registered address or online through SSS website
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
                      Valid ID of the business owner/authorized representative
                    </li>
                    <li>Employer Registration Form</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Validity:</h4>
                  <p className="text-sm text-muted-foreground">
                    Perpetual (subject to monthly contribution requirements)
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Where to Apply:</h4>
                  <p className="text-sm text-muted-foreground">
                    PhilHealth and Pag-IBIG offices or online through their
                    respective websites
                  </p>
                </div>
                <div className="pt-2 flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://www.philhealth.gov.ph" target="_blank">
                      Visit PhilHealth Website
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
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
