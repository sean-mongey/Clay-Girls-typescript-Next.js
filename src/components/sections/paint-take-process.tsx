export function PaintTakeProcess() {
  const steps = [
    {
      number: 1,
      title: 'Choose Your Piece',
      description: 'Select from our extensive collection of pre-made ceramic pieces - mugs, bowls, plates, figurines, and more.',
      icon: '🎨',
      details: ['Over 200+ ceramic pieces to choose from', 'All skill levels welcome', 'Perfect for beginners and families']
    },
    {
      number: 2,
      title: 'Design & Paint',
      description: 'Let your creativity flow with our premium ceramic paints, brushes, and tools under expert guidance.',
      icon: '🖌️',
      details: ['High-quality ceramic paints', 'Professional brushes and tools', 'Expert tips and techniques']
    },
    {
      number: 3,
      title: 'Fire & Finish',
      description: 'We carefully fire your artwork in our kiln. Your finished piece will be ready for pickup in 5-7 days.',
      icon: '🔥',
      details: ['Professional kiln firing', 'Glossy, durable finish', 'Ready to use and dishwasher safe']
    },
  ];

  return (
    <div className="bg-white rounded-lg p-8 shadow-lg">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-clay-800 mb-2 font-display">
          Paint & Take Experience
        </h3>
        <p className="text-clay-600">
          Perfect for beginners and those who want to focus on painting and decorating
        </p>
        <div className="mt-4 inline-flex items-center px-4 py-2 bg-clay-100 rounded-full">
          <span className="text-clay-700 font-medium">Duration: 1.5-2 hours</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.number}
            className="step-card bg-gray-50 p-6 rounded-lg text-center"
            data-aos="fade-up"
            data-aos-delay={step.number * 100}
          >
            <div className="w-16 h-16 bg-clay-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">{step.icon}</span>
            </div>
            <div className="w-8 h-8 bg-clay-600 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white text-sm font-bold">
                {step.number}
              </span>
            </div>
            <h4 className="text-lg font-bold text-clay-800 mb-3 font-display">
              {step.title}
            </h4>
            <p className="text-clay-600 mb-4 text-sm">{step.description}</p>
            <ul className="text-xs text-clay-500 space-y-1">
              {step.details.map((detail, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-1 h-1 bg-clay-400 rounded-full mr-2"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-clay-50 rounded-lg">
        <h4 className="text-lg font-bold text-clay-800 mb-3">What's Included:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-clay-600">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-clay-500 rounded-full mr-3"></span>
            All ceramic pieces and materials
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-clay-500 rounded-full mr-3"></span>
            Professional firing service
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-clay-500 rounded-full mr-3"></span>
            Expert guidance and tips
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-clay-500 rounded-full mr-3"></span>
            Take home your finished piece
          </div>
        </div>
      </div>
    </div>
  );
}
