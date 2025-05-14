import HeroSection from "./_sections/hero-section";
import FeaturesSection from "./_sections/features-section";
import ChecklistSection from "./_sections/checklist-section";
import DeadlinesSection from "./_sections/deadlines-section";
import PenaltiesSection from "./_sections/penalties-section";
import CTASection from "./_sections/cta-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ChecklistSection />
        <DeadlinesSection />
        <PenaltiesSection />
        <CTASection />
      </main>
    </div>
  );
}
