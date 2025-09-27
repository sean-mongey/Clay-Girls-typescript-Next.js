import { Accordion } from '@/components/ui/accordion';

const faqs = [
  {
    title: 'How do I book a workshop or private session?',
    content: 'You can book through our website, call us at +41 76 262 37 79, or email us at claygirlsflims@gmail.com. We recommend booking in advance as our sessions fill up quickly.',
  },
  {
    title: 'What should I bring to a pottery session?',
    content: 'Just bring yourself and your creativity! We provide all materials including clay, tools, aprons, and glazes. Wear comfortable clothes that you don\'t mind getting a little dirty.',
  },
  {
    title: 'How long does it take to complete a piece?',
    content: 'The initial creation takes 1-3 hours depending on the project. After that, we fire your piece in our kiln, which takes about a week. You\'ll receive a notification when it\'s ready for pickup.',
  },
  {
    title: 'Can beginners join your workshops?',
    content: 'Absolutely! Our workshops are designed for all skill levels. We provide step-by-step guidance and have experienced instructors to help you create something beautiful, regardless of your experience.',
  },
  {
    title: 'Do you offer private sessions or group bookings?',
    content: 'Yes! We offer private sessions for individuals, couples, or small groups. Perfect for special occasions, team building, or just a unique experience with friends. Contact us to discuss your needs.',
  },
  {
    title: 'What age groups can participate?',
    content: 'Our workshops are suitable for ages 8 and up. Children under 12 should be accompanied by an adult. We have special programs and projects designed specifically for different age groups.',
  },
  {
    title: 'How much do workshops cost?',
    content: 'Workshop prices vary depending on the type and duration. Please contact us for current pricing and availability. We also offer package deals for multiple sessions.',
  },
  {
    title: 'What if I can\'t pick up my finished piece right away?',
    content: 'No problem! We can hold your finished pieces for up to 3 months. After that, we may need to charge a small storage fee. We\'ll always contact you before any fees are applied.',
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