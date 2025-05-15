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

export function LocalRequirementsSection() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Local Government Requirements</CardTitle>
        <CardDescription>
          Requirements for registering your business with Dumaguete City LGU
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Barangay Business Clearance</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Required For:</h4>
                  <p className="text-sm text-muted-foreground">
                    All businesses operating within the barangay
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Requirements:</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Application form from the Barangay Hall</li>
                    <li>Proof of business ownership (DTI/SEC registration)</li>
                    <li>Valid ID of the business owner</li>
                    <li>Contract of Lease (if renting the business space)</li>
                    <li>
                      Payment of Barangay Business Clearance fee (varies by
                      barangay)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Validity:</h4>
                  <p className="text-sm text-muted-foreground">
                    1 year, renewable annually
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Where to Apply:</h4>
                  <p className="text-sm text-muted-foreground">
                    Barangay Hall where the business is located
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Zoning Clearance/Locational Clearance
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Required For:</h4>
                  <p className="text-sm text-muted-foreground">
                    All businesses to ensure compliance with the city&apos;s
                    zoning ordinance
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Requirements:</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Application form</li>
                    <li>Barangay Business Clearance</li>
                    <li>Tax Declaration of the property</li>
                    <li>Sketch plan of business location</li>
                    <li>
                      Proof of ownership or contract of lease of the business
                      location
                    </li>
                    <li>Payment of zoning clearance fee</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Validity:</h4>
                  <p className="text-sm text-muted-foreground">
                    1 year, renewable annually
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Where to Apply:</h4>
                  <p className="text-sm text-muted-foreground">
                    City Planning and Development Office (CPDO)
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          {/* Additional local requirements can be added here */}
        </Accordion>
      </CardContent>
    </Card>
  );
}
