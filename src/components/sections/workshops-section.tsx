import { Calendar, Users } from 'react-feather';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const workshops = [
  {
    title: "Beginners Hand Building",
    description: "Perfect for those new to clay work. Learn basic techniques of pinching, coiling, and slab building.",
    duration: "2 hours",
    capacity: "6-8 people",
    price: "£45",
  },
  {
    title: "Intermediate Pottery",
    description: "Build on your foundation with more complex techniques and decorative methods.",
    duration: "3 hours",
    capacity: "4-6 people",
    price: "£60",
  },
  {
    title: "Private Group Session",
    description: "Book a private session for your group. Perfect for parties and team building.",
    duration: "2-3 hours",
    capacity: "4-10 people",
    price: "From £150",
  }
];

export function WorkshopsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-clay-800 mb-4 font-display">
            Our Workshops
          </h2>
          <p className="text-clay-600 max-w-2xl mx-auto text-lg">
            Join us for a creative session of pottery making in a relaxed, friendly environment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <Card
              key={index}
              className="border-clay-200"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card.Header>
                <h3 className="text-xl font-bold text-clay-800 mb-2">
                  {workshop.title}
                </h3>
                <p className="text-clay-600">{workshop.description}</p>
              </Card.Header>
              <Card.Content>
                <div className="space-y-2">
                  <div className="flex items-center text-clay-700">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center text-clay-700">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{workshop.capacity}</span>
                  </div>
                  <div className="text-clay-900 font-bold mt-4">
                    {workshop.price}
                  </div>
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-clay-700 hover:bg-clay-800">
            Book a Workshop
          </Button>
        </div>
      </div>
    </section>
  );
}