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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-clay-800 mb-4 font-display">
            Get in Touch
          </h2>
          <p className="text-clay-600 max-w-2xl mx-auto text-lg">
            Have questions about our workshops or want to book a private session? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={info.title}
              className="text-center p-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-clay-100 text-clay-700 mb-4">
                <info.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-clay-800 mb-2">{info.title}</h3>
              <a
                href={info.link}
                className="text-clay-600 hover:text-clay-800 transition-colors"
              >
                {info.details}
              </a>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto" data-aos="fade-up">
          <ContactForm onSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  );
}