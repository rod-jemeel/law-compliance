import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="w-full mt-8 mb-12">
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Take control of your business compliance requirements. Create your
            account to access personalized checklists, set up reminders for
            important deadlines, and store all your important documents
            securely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Create Account
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
