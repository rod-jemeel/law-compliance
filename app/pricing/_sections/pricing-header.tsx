"use client";

export function PricingHeader() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
      <span className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">
        Subscription Plans
      </span>
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
        Simple, Transparent Pricing
      </h1>
      <p className="text-slate-600 max-w-[900px] md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed">
        Choose the plan that&apos;s right for your business. All plans include a
        14-day free trial.
      </p>
    </div>
  );
}
