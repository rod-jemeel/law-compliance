"use client";

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
                    Corporations, Partnerships, and other juridical entities
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Requirements:</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Name verification and reservation</li>
                    <li>Articles of Incorporation/Partnership</li>
                    <li>Treasurer&apos;s Affidavit</li>
                    <li>Bank certificate of deposit</li>
                    <li>Registration data sheet</li>
                    <li>
                      Payment of filing fees (based on authorized capital stock)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Validity:</h4>
                  <p className="text-sm text-muted-foreground">
                    Perpetual with annual reporting requirements
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Where to Apply:</h4>
                  <p className="text-sm text-muted-foreground">
                    SEC Electronic Simplified Processing of Application for
                    Registration of Companies (eSPARC) online platform
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          {/* Additional national requirements can be added here */}
        </Accordion>
      </CardContent>
    </Card>
  );
}
