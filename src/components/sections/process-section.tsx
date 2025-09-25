export function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: 'Select Ceramic',
      description: 'Choose from our large selection of white ceramic pieces - from cups and plates to figurines.',
    },
    {
      number: 2,
      title: 'Design & Paint',
      description: 'Let your creativity run free with our high-quality colors and tools under expert guidance.',
    },
    {
      number: 3,
      title: 'Fire & Pickup',
      description: 'We fire your artwork in the kiln and after about a week you can pick up your finished piece.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
            Our Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From selection to finished artwork - it's that simple
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