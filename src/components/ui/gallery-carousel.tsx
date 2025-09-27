"use client"

import Image from "next/image"
import { useState } from "react"
import { GalleryCategory } from "@/lib/gallery"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"

interface GalleryCarouselProps {
  category: GalleryCategory
  className?: string
}

export function GalleryCarousel({ category, className }: GalleryCarouselProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Category Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
        {category.description && (
          <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
        )}
      </div>

      {/* Carousel */}
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {category.images.map((image, index) => (
              <CarouselItem key={image.filename} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300">
                    <Card.Content className="p-0">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          onClick={() => setSelectedImage(image.src)}
                        />
                      </div>
                    </Card.Content>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold z-10 hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <Image
              src={selectedImage}
              alt="Full size gallery image"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}