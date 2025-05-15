import {
  ContactHeader,
  ContactFormSection,
  ContactInfoSection,
} from "./_sections";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <main className="flex-1">
        <div className="container py-12 max-w-5xl mx-auto">
          <ContactHeader />

          <div className="grid gap-8 md:grid-cols-2">
            <ContactFormSection />
            <ContactInfoSection />
          </div>
        </div>
      </main>
    </div>
  );
}
