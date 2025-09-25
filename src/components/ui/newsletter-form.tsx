'use client';

import { useState } from 'react';
import { Send } from 'react-feather';
import { Button } from '@/components/ui/button';

interface NewsletterFormProps {
  onSubmit: (email: string) => Promise<void>;
}

export function NewsletterForm({ onSubmit }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await onSubmit(email);
      setStatus('success');
      setMessage('Thanks for subscribing! Please check your email to confirm.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-clay-200 rounded-md focus:outline-none focus:ring-2 focus:ring-clay-500"
            required
          />
        </div>
        <Button
          type="submit"
          disabled={status === 'loading'}
          className="bg-clay-700 hover:bg-clay-800 text-white"
        >
          {status === 'loading' ? (
            'Subscribing...'
          ) : (
            <>
              Subscribe <Send className="ml-2 h-4 w-4" />
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