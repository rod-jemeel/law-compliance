"use client";

export function PricingHeader() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Simple, Transparent Pricing
        </h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Choose the plan that&apos;s right for your business. All plans include
          a 14-day free trial.
        </p>
      </div>
    </div>
  );
}
