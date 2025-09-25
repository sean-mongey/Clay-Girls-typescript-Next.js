import { Accordion } from '@/components/ui/accordion';

const faqs = [
  {
    title: 'How long does the entire process take?',
    content: 'The painting itself takes 1-3 hours depending on the project. After submission, we fire your ceramic in the kiln, which takes about a week. You\'ll receive a notification as soon as your piece is ready for pickup.',
  },
  {
    title: 'Can I come with children?',
    content: 'Yes, absolutely! Ceramic painting is a wonderful creative expression for all age groups. We have special children\'s motifs and non-toxic colors. Children under 12 should be accompanied by an adult.',
  },
  {
    title: 'Do I need to be artistically talented?',
    content: 'No, not at all! We have templates and patterns available, and our team is here to help you with tips and tricks. Everyone can achieve beautiful results - it\'s about the fun of the creative process.',
  },
];

export function FAQSection() {

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about ceramic painting
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}