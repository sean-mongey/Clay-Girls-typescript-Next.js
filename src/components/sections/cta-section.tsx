import { Calendar, Mail } from 'react-feather';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-indigo-600 text-white">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
          Bereit für Ihr kreatives Abenteuer?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Buchen Sie jetzt Ihren Termin und entdecken Sie die Freude am
          Keramikmalen
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <Button variant="outline" size="lg" className="mr-4">
            Termin buchen <Calendar className="ml-2" size={20} />
          </Button>
          <Button variant="outline" size="lg">
            Kontakt <Mail className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}