export function CreatePaintProcess() {
  const steps = [
    {
      number: 1,
      title: 'Shape Your Clay',
      description: 'Learn hand-building techniques to create your own unique ceramic piece from raw clay.',
      icon: '🏺',
      details: ['Hand-building techniques', 'Pinch, coil, and slab methods', 'Create bowls, mugs, or decorative pieces']
    },
    {
      number: 2,
      title: 'Dry & First Fire',
      description: 'Your piece dries naturally, then we fire it in our kiln to create a bisque-fired ceramic.',
      icon: '⏳',
      details: ['Natural drying process', 'Bisque firing in professional kiln', 'Ready for painting in 1-2 weeks']
    },
    {
      number: 3,
      title: 'Paint & Decorate',
      description: 'Return for a second session to paint and decorate your bisque-fired piece with glazes.',
      icon: '🎨',
      details: ['Glaze application techniques', 'Multiple color options', 'Professional finishing touches']
    },
    {
      number: 4,
      title: 'Final Fire & Pickup',
      description: 'We fire your painted piece one final time. Your unique creation will be ready in 5-7 days.',
      icon: '✨',
      details: ['Glaze firing process', 'Glossy, food-safe finish', 'Your one-of-a-kind creation']
    },
  ];

  return (
    <div className="bg-white rounded-lg p-8 shadow-lg">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-clay-800 mb-2 font-display">
          Create & Paint Experience
        </h3>
        <p className="text-clay-600">
          For those who want to experience the complete pottery journey from clay to finished piece
        </p>
        <div className="mt-4 inline-flex items-center px-4 py-2 bg-clay-100 rounded-full">
          <span className="text-clay-700 font-medium">Duration: 2 sessions (3-4 hours total)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            Clay and all shaping tools
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-clay-500 rounded-full mr-3"></span>
            Two kiln firings (bisque + glaze)
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-clay-500 rounded-full mr-3"></span>
            Glazes and painting materials
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-clay-500 rounded-full mr-3"></span>
            Expert instruction throughout
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-clay-500 rounded-full mr-3"></span>
            Your unique handmade creation
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-clay-500 rounded-full mr-3"></span>
            Food-safe finish
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-teal-200 rounded-lg">
        <div className="flex items-start">
          <span className="text-teal-500 mr-3 mt-1">ℹ️</span>
          <div>
            <h5 className="font-semibold text-teal-800 mb-1">Important Note:</h5>
            <p className="text-teal-700 text-sm">
              This experience requires two separate sessions. The first session is for shaping, 
              and you'll return 2+ weeks later for painting after your piece has been bisque-fired.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
