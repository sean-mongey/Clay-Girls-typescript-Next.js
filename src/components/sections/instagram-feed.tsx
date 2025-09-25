import { Instagram } from 'react-feather';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const instagramPosts = [
  {
    id: 1,
    imageUrl: '/images/instagram/workshop-1.jpg',
    likes: 124,
    comments: 12,
  },
  {
    id: 2,
    imageUrl: '/images/instagram/workshop-2.jpg',
    likes: 98,
    comments: 8,
  },
  {
    id: 3,
    imageUrl: '/images/instagram/workshop-3.jpg',
    likes: 156,
    comments: 15,
  },
  {
    id: 4,
    imageUrl: '/images/instagram/workshop-4.jpg',
    likes: 143,
    comments: 11,
  },
];

export function InstagramFeed() {
  return (
    <section className="py-16 md:py-24 bg-clay-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-clay-800 mb-4 font-display">
            Follow Our Journey
          </h2>
          <p className="text-clay-600 max-w-2xl mx-auto text-lg">
            Join our community and stay updated with our latest creations and workshops
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="relative aspect-square overflow-hidden rounded-lg"
              data-aos="fade-up"
            >
              <Image
                src={post.imageUrl}
                alt="Instagram post"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="bg-white border-clay-700 text-clay-700 hover:bg-clay-700 hover:text-white"
            onClick={() => window.open('https://www.instagram.com/clay_girls_/', '_blank')}
          >
            <span className="inline-flex items-center">
              <Instagram className="w-5 h-5 mr-2" />
              Follow us on Instagram
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}