export function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: 'Keramik auswählen',
      description: 'Wählen Sie aus unserer großen Auswahl an weißen Keramikstücken - von Tassen über Teller bis zu Figuren.',
    },
    {
      number: 2,
      title: 'Gestalten & Bemalen',
      description: 'Lassen Sie Ihrer Kreativität freien Lauf mit unseren hochwertigen Farben und Werkzeugen unter fachkundiger Anleitung.',
    },
    {
      number: 3,
      title: 'Brennen & Abholen',
      description: 'Wir brennen Ihr Kunstwerk im Ofen und nach etwa einer Woche können Sie Ihr fertiges Stück abholen.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
            Unser Prozess
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Von der Auswahl bis zum fertigen Kunstwerk - so einfach geht's
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="step-card bg-gray-50 p-8 rounded-lg"
              data-aos="fade-up"
              data-aos-delay={step.number * 100}
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-indigo-600 text-2xl font-bold">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center font-playfair">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}