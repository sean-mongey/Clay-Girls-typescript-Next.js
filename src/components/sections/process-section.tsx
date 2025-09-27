'use client';

import { useState } from 'react';
import { PaintTakeProcess } from './paint-take-process';
import { CreatePaintProcess } from './create-paint-process';

export function ProcessSection() {
  const [activeProcess, setActiveProcess] = useState<'paint-take' | 'create-paint'>('paint-take');

  return (
    <section className="py-16 md:py-24 bg-clay-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-clay-800 mb-4 font-display">
            Choose Your Experience
          </h2>
          <p className="text-clay-600 max-w-3xl mx-auto text-lg">
            We offer two distinct pottery experiences to suit different interests and skill levels. 
            Whether you want to focus on painting or experience the complete journey from clay to finished piece.
          </p>
        </div>

        {/* Process Selection Tabs */}
        <div className="flex justify-center mb-12" data-aos="fade-up">
          <div className="bg-white p-2 rounded-lg shadow-md">
            <button
              onClick={() => setActiveProcess('paint-take')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeProcess === 'paint-take'
                  ? 'bg-clay-600 text-white shadow-md'
                  : 'text-clay-600 hover:bg-clay-50'
              }`}
            >
              🎨 Paint & Take
            </button>
            <button
              onClick={() => setActiveProcess('create-paint')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeProcess === 'create-paint'
                  ? 'bg-clay-600 text-white shadow-md'
                  : 'text-clay-600 hover:bg-clay-50'
              }`}
            >
              🏺 Create & Paint
            </button>
          </div>
        </div>

        {/* Process Content */}
        <div data-aos="fade-up" data-aos-delay="200">
          {activeProcess === 'paint-take' ? (
            <PaintTakeProcess />
          ) : (
            <CreatePaintProcess />
          )}
        </div>

        {/* Comparison Section */}
        <div className="mt-16" data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-2xl font-bold text-clay-800 text-center mb-8 font-display">
            Which Experience is Right for You?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-clay-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">🎨</span>
                Paint & Take
              </h4>
              <ul className="space-y-2 text-clay-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Perfect for beginners and families
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Single 1.5-2 hour session
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Focus on painting and creativity
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Great for groups and parties
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-clay-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">🏺</span>
                Create & Paint
              </h4>
              <ul className="space-y-2 text-clay-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Learn traditional pottery techniques
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Two sessions over 1-2 weeks
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Create truly unique pieces
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Deeper understanding of ceramics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}