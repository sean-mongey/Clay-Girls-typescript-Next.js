import { Star } from 'react-feather';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Workshop Participant",
    image: "/images/testimonials/sarah.jpg",
    quote: "Such a fantastic experience! The instructors are patient and knowledgeable. I created a beautiful piece that I'm proud to display in my home.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Team Building Attendee",
    image: "/images/testimonials/james.jpg",
    quote: "Our team had an amazing time at the private workshop. It was the perfect blend of creativity and fun. Highly recommend for corporate events!",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Regular Student",
    image: "/images/testimonials/emily.jpg",
    quote: "I've been attending workshops for 3 months now and my skills have improved tremendously. The atmosphere is always welcoming and inspiring.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-clay-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-clay-800 mb-4 font-display">
            What Our Students Say
          </h2>
          <p className="text-clay-600 max-w-2xl mx-auto text-lg">
            Read about the experiences of people who have attended our workshops
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="bg-white"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card.Header>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-clay-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-clay-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <StarRating rating={testimonial.rating} />
              </Card.Header>
              <Card.Content>
                <p className="text-clay-600">{testimonial.quote}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}