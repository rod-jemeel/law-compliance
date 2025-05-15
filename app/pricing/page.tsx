import { PricingHeader, PricingPlans } from "./_sections";

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto">
            <PricingHeader />
            <PricingPlans />
          </div>
        </section>
      </main>
    </div>
  );
}
