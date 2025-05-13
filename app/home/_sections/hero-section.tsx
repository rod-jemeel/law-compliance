import React from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="w-full py-16 px-4 flex flex-col items-center relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Business Compliance Assistant
        </h1>
        <p className="text-xl text-muted-foreground mx-auto mb-8 leading-relaxed">
          Navigating Business Registration and Renewal in Dumaguete City made
          simple. Track, manage, and stay on top of your compliance requirements
          with ease.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Button size="lg" className="font-medium">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="font-medium">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
