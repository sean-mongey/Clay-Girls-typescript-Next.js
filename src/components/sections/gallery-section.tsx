import { Card } from '@/components/ui/card';

const galleryItems = [
  {
    image: '/images/modern-cups.jpg',
    title: 'Moderne Tassen',
    description: 'Geometrische Muster in kräftigen Farben',
  },
  {
    image: '/images/kids-plates.jpg',
    title: 'Kinderteller',
    description: 'Lustige Tiermotive für die Kleinen',
  },
  {
    image: '/images/decorative-bowls.jpg',
    title: 'Dekorative Schalen',
    description: 'Feine Blumenmuster für Ihr Zuhause',
  },
];

export function GallerySection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
            Inspirationen
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie Beispiele unserer Kunden und lassen Sie sich inspirieren
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="transition-all hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <Card.Header>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </Card.Header>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}