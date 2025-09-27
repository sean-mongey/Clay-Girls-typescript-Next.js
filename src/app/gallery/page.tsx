import { getGalleryData } from "@/lib/gallery"
import { GalleryCarousel } from "@/components/ui/gallery-carousel"
import { PageHeader } from "@/components/ui/page-header"

export default async function GalleryPage() {
  const categories = await getGalleryData()

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <PageHeader 
        title="Our Gallery"
        description="Explore our collection of handcrafted ceramic pieces. Each item is carefully created with love and attention to detail."
      />

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