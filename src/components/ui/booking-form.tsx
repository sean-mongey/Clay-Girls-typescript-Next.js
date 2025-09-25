'use client';

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

interface Workshop {
  id: string;
  title: string;
  duration: string;
  capacity: number;
  price: string;
}

interface BookingFormProps {
  workshops: Workshop[];
  onSubmit: (data: {
    workshopId: string;
    date: Date;
    timeSlot: string;
    attendees: number;
  }) => Promise<void>;
}

export function BookingForm({ workshops, onSubmit }: BookingFormProps) {
  const [selectedWorkshop, setSelectedWorkshop] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  const [attendees, setAttendees] = useState<number>(1);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  // Mock available dates (replace with actual data)
  const availableDates = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  // Mock time slots (replace with actual data)
  const timeSlots: TimeSlot[] = [
    { id: '1', time: '10:00 AM', available: true },
    { id: '2', time: '2:00 PM', available: true },
    { id: '3', time: '6:00 PM', available: true },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedWorkshop || !selectedDate || !selectedTimeSlot) {
      setStatus('error');
      setMessage('Please fill in all required fields');
      return;
    }

    setStatus('loading');
    try {
      await onSubmit({
        workshopId: selectedWorkshop,
        date: selectedDate,
        timeSlot: selectedTimeSlot,
        attendees,
      });
      setStatus('success');
      setMessage('Booking successful! We will send you a confirmation email shortly.');
      // Reset form
      setSelectedWorkshop('');
      setSelectedDate(null);
      setSelectedTimeSlot('');
      setAttendees(1);
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  };

  const selectedWorkshopDetails = workshops.find(w => w.id === selectedWorkshop);

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label className="block text-sm font-medium text-clay-700 mb-2">
          Select Workshop
        </label>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {workshops.map((workshop) => (
            <button
              key={workshop.id}
              type="button"
              onClick={() => setSelectedWorkshop(workshop.id)}
              className={`p-4 rounded-lg border text-left transition-colors ${
                selectedWorkshop === workshop.id
                  ? 'border-clay-700 bg-clay-50'
                  : 'border-clay-200 hover:border-clay-300'
              }`}
            >
              <h4 className="font-medium text-clay-900">{workshop.title}</h4>
              <p className="text-sm text-clay-600 mt-1">{workshop.duration}</p>
              <p className="text-sm text-clay-900 font-medium mt-2">
                {workshop.price}
              </p>
            </button>
          ))}
        </div>
      </div>

      {selectedWorkshopDetails && (
        <>
          <div>
            <label className="block text-sm font-medium text-clay-700 mb-2">
              Select Date
            </label>
            <Calendar
              selectedDate={selectedDate}
              availableDates={availableDates}
              onSelectDate={setSelectedDate}
            />
          </div>

          {selectedDate && (
            <div>
              <label className="block text-sm font-medium text-clay-700 mb-2">
                Select Time
              </label>
              <div className="grid gap-3 md:grid-cols-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    type="button"
                    disabled={!slot.available}
                    onClick={() => setSelectedTimeSlot(slot.id)}
                    className={`p-3 rounded-md border text-center transition-colors ${
                      selectedTimeSlot === slot.id
                        ? 'border-clay-700 bg-clay-50'
                        : slot.available
                        ? 'border-clay-200 hover:border-clay-300'
                        : 'border-clay-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedTimeSlot && (
            <div>
              <label className="block text-sm font-medium text-clay-700 mb-2">
                Number of Attendees
              </label>
              <select
                value={attendees}
                onChange={(e) => setAttendees(Number(e.target.value))}
                className="w-full p-2 border border-clay-200 rounded-md"
              >
                {Array.from(
                  { length: selectedWorkshopDetails.capacity },
                  (_, i) => i + 1
                ).map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'person' : 'people'}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <Button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-clay-700 hover:bg-clay-800 text-white"
            >
              {status === 'loading' ? 'Processing...' : 'Book Workshop'}
            </Button>
            {message && (
              <p
                className={`mt-2 text-sm ${
                  status === 'error' ? 'text-red-600' : 'text-green-600'
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </>
      )}
    </form>
  );
}