import { WorkshopsSection } from '@/components/sections/workshops-section';
import { ProcessSection } from '@/components/sections/process-section';
import { BookingInfoSection } from '@/components/sections/booking-info-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CTASection } from '@/components/sections/cta-section';
import { PageHeader } from '@/components/ui/page-header';

export default function WorkshopsPage() {
  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <PageHeader 
        title="Pottery Workshops"
        description="Discover the joy of creating with clay in our hands-on pottery workshops"
      />

      {/* Workshops Section */}
      <WorkshopsSection />

      {/* Booking Information */}
      <BookingInfoSection />


      {/* CTA Section */}
      <CTASection />
    </main>
  )
}