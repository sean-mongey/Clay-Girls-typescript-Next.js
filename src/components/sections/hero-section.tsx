import { ArrowRight } from 'react-feather';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative bg-clay-50 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-clay-100/50 to-clay-50/80" />
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        data-aos="fade-up"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display text-clay-800">
          Unleash Your Creativity with Clay
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-clay-600">
          Join us for hands-on pottery workshops where every piece tells a story
        </p>
        <div className="space-x-4">
          <Button
            size="lg"
            className="bg-clay-700 hover:bg-clay-800 text-white"
          >
            Book a Workshop <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-clay-700 text-clay-700 hover:bg-clay-700 hover:text-white"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}