'use client';

import { BookingForm } from '@/components/ui/booking-form';

const workshops = [
  {
    id: "beginners",
    title: "Beginners Hand Building",
    duration: "2 hours",
    capacity: 8,
    price: "£45",
  },
  {
    id: "intermediate",
    title: "Intermediate Pottery",
    duration: "3 hours",
    capacity: 6,
    price: "£60",
  },
  {
    id: "private",
    title: "Private Group Session",
    duration: "2-3 hours",
    capacity: 10,
    price: "From £150",
  },
];

export function BookingSection() {
  const handleBooking = async (data: {
    workshopId: string;
    date: Date;
    timeSlot: string;
    attendees: number;
  }) => {
    // TODO: Integrate with your booking system or API
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
    console.log('Booking data:', data);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-clay-800 mb-4 font-display">
            Book a Workshop
          </h2>
          <p className="text-clay-600 max-w-2xl mx-auto text-lg">
            Choose your preferred workshop, date, and time to start your pottery journey
          </p>
        </div>

        <div data-aos="fade-up">
          <BookingForm workshops={workshops} onSubmit={handleBooking} />
        </div>
      </div>
    </section>
  );
}