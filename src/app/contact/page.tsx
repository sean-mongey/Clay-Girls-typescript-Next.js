import { ContactSection } from "@/components/sections/contact-section"
import { FAQSection } from "@/components/sections/faq-section"
import { PageHeader } from "@/components/ui/page-header"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <PageHeader 
        title="Get in Touch"
        description="Ready to start your pottery journey? We'd love to hear from you and help you create something beautiful."
      />

      {/* Contact Section */}
      <ContactSection />

      {/* FAQ Section */}
      <FAQSection />
    </main>
  )
}