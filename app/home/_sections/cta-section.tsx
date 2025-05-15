"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function CTASection() {
  const router = useRouter();
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-900 to-blue-900 text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <span className="bg-indigo-500/20 text-indigo-100 px-4 py-1.5 rounded-full text-sm font-medium">
            Take Action Today
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Ready to Stay Compliant?
          </h2>
          <p className="text-indigo-100 text-lg md:text-xl max-w-2xl leading-relaxed">
            Create your account today and never worry about missing a business
            permit deadline again.
          </p>

          <div className="flex flex-col gap-3 min-[400px]:flex-row pt-4">
            <Button
              size="lg"
              className="bg-white text-indigo-900 hover:bg-indigo-50 shadow-md"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={() => router.push("/resources")}
              variant="outline"
              size="lg"
              className="border-indigo-400 text-white hover:bg-indigo-800 hover:text-white"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
