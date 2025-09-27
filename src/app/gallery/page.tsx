import { getGalleryData } from "@/lib/gallery"
import { GalleryCarousel } from "@/components/ui/gallery-carousel"

export default async function GalleryPage() {
  const categories = await getGalleryData()

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of handcrafted ceramic pieces. Each item is carefully 
            created with love and attention to detail.
          </p>
        </div>
      </div>

      {/* Gallery Categories */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.length > 0 ? (
            <div className="space-y-20">
              {categories.map((category) => (
                <GalleryCarousel
                  key={category.slug}
                  category={category}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Gallery Coming Soon
              </h2>
              <p className="text-gray-600">
                We're working on adding beautiful images to our gallery. Check back soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}