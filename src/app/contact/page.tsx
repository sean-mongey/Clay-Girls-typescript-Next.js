import { ContactSection } from "@/components/sections/contact-section"
import { FAQSection } from "@/components/sections/faq-section"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-800 to-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
            Ready to start your pottery journey? We'd love to hear from you and help you create something beautiful.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* FAQ Section */}
      <FAQSection />
    </main>
  )
}