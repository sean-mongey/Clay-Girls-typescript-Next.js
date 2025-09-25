'use client';

import { NewsletterForm } from '@/components/ui/newsletter-form';

export function NewsletterSection() {
  const handleSubscribe = async (email: string) => {
    // TODO: Integrate with your newsletter service (e.g., Mailchimp, ConvertKit)
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
    console.log('Subscribing email:', email);
  };

  return (
    <section className="py-16 bg-clay-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-clay-800 mb-4 font-display">
            Join Our Creative Community
          </h2>
          <p className="text-clay-600 max-w-2xl mx-auto text-lg">
            Subscribe to our newsletter for workshop updates, pottery tips, and exclusive events
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <NewsletterForm onSubmit={handleSubscribe} />
        </div>
      </div>
    </section>
  );
}