'use client';

import { Mail, MapPin, Phone } from 'react-feather';
import { ContactForm } from '@/components/ui/contact-form';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: 'claygirlsflims@gmail.com',
    link: 'mailto:claygirlsflims@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+41 76 262 37 79',
    link: 'tel:+41762623779',
  },
  {
    icon: MapPin,
    title: 'Location',
    details: 'Flims, Switzerland',
    link: 'https://maps.google.com/?q=Flims,Switzerland',
  },
];

export function ContactSection() {
  const handleSubmit = async (data: any) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const result = await response.json();
      console.log('Email sent successfully:', result);
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Get in touch with us through any of the methods below, or send us a message using the form.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-600">
                        <info.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-teal-600 transition-colors"
                      >
                        {info.details}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Find Us</h4>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MapPin className="w-6 h-6 text-teal-600" />
                    </div>
                    <p className="text-gray-600 font-medium">Flims, Switzerland</p>
                    <p className="text-sm text-gray-500 mt-1">
                      <a 
                        href="https://maps.google.com/?q=Flims,Switzerland" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700"
                      >
                        View on Google Maps
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-up" data-aos-delay="200">
            <ContactForm onSubmit={handleSubmit} />
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Response Time</h3>
          <p className="text-gray-600 mb-4">
            We typically respond to all inquiries within 24 hours during business days.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="font-semibold text-gray-900 mb-1">Workshop Inquiries</div>
              <div className="text-gray-600">Usually within 2-4 hours</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-1">Private Sessions</div>
              <div className="text-gray-600">Usually within 4-6 hours</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-1">General Questions</div>
              <div className="text-gray-600">Usually within 24 hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}