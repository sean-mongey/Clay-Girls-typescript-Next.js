'use client';

import { useState } from 'react';
import { Send } from 'react-feather';
import { Button } from '@/components/ui/button';

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  onSubmit: (data: ContactFormState) => Promise<void>;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await onSubmit(formData);
      setStatus('success');
      setMessage('Thanks for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-clay-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 w-full px-4 py-2 border border-clay-200 rounded-md focus:outline-none focus:ring-2 focus:ring-clay-500"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-clay-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 w-full px-4 py-2 border border-clay-200 rounded-md focus:outline-none focus:ring-2 focus:ring-clay-500"
          required
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-clay-700">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="mt-1 w-full px-4 py-2 border border-clay-200 rounded-md focus:outline-none focus:ring-2 focus:ring-clay-500"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-clay-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="mt-1 w-full px-4 py-2 border border-clay-200 rounded-md focus:outline-none focus:ring-2 focus:ring-clay-500"
          required
        />
      </div>

      <div>
        <Button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-clay-700 hover:bg-clay-800 text-white"
        >
          {status === 'loading' ? (
            'Sending...'
          ) : (
            <>
              Send Message <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>

      {message && (
        <p className={`mt-2 text-sm ${
          status === 'error' ? 'text-red-600' : 'text-green-600'
        }`}>
          {message}
        </p>
      )}
    </form>
  );
}