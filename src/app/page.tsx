'use client';

import { AOSProvider } from '@/components/aos-provider';
import { HeroSection } from '@/components/sections/hero-section';
import { ProcessSection } from '@/components/sections/process-section';
import { GallerySection } from '@/components/sections/gallery-section';
import { WorkshopsSection } from '@/components/sections/workshops-section';
import { BookingSection } from '@/components/sections/booking-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { FAQSection } from '@/components/sections/faq-section';
import { CTASection } from '@/components/sections/cta-section';
import { InstagramFeed } from '@/components/sections/instagram-feed';
import { NewsletterSection } from '@/components/sections/newsletter-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <AOSProvider>
      <main className="bg-clay-50">
        <HeroSection />
        <ProcessSection />
        <GallerySection />
        <WorkshopsSection />
        <BookingSection />
        <TestimonialsSection />
        <FAQSection />
        <NewsletterSection />
        <InstagramFeed />
        <ContactSection />
        <CTASection />
      </main>
    </AOSProvider>
  );
}
