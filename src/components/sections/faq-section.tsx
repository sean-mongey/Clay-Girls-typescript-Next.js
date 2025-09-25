import { Accordion } from '@/components/ui/accordion';

const faqs = [
  {
    title: 'Wie lange dauert der gesamte Prozess?',
    content: 'Die Bemalung selbst dauert je nach Projekt 1-3 Stunden. Nach Abgabe brennen wir Ihre Keramik im Ofen, was etwa eine Woche in Anspruch nimmt. Sie erhalten eine Benachrichtigung, sobald Ihr Stück abholbereit ist.',
  },
  {
    title: 'Kann ich mit Kindern kommen?',
    content: 'Ja, absolut! Keramikmalen ist ein wunderbarer kreativer Ausdruck für alle Altersgruppen. Wir haben spezielle Kindermotive und ungiftige Farben. Kinder unter 12 Jahren sollten von einem Erwachsenen begleitet werden.',
  },
  {
    title: 'Muss ich künstlerisch begabt sein?',
    content: 'Nein, überhaupt nicht! Wir haben Vorlagen und Muster zur Verfügung, und unser Team steht Ihnen mit Tipps und Tricks zur Seite. Jeder kann schöne Ergebnisse erzielen - es geht um den Spaß am kreativen Prozess.',
  },
];

export function FAQSection() {

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
            Häufige Fragen
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Alles was Sie über Keramikmalen wissen müssen
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}