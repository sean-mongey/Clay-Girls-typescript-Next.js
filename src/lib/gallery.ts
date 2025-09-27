export interface GalleryImage {
  src: string
  alt: string
  filename: string
}

export interface GalleryCategory {
  name: string
  slug: string
  images: GalleryImage[]
  description?: string
}

/**
 * Static gallery data - easily manageable and ready for Sanity integration
 * This approach avoids file system permission issues and is more reliable
 */
export async function getGalleryData(): Promise<GalleryCategory[]> {
  // Static data structure - can be easily updated or replaced with Sanity
  const galleryData: GalleryCategory[] = [
    {
      name: "Bowls",
      slug: "bowls",
      description: "Handcrafted ceramic bowls perfect for everyday use and special occasions.",
      images: [
        {
          src: "/images/gallery/bowls/DSC_0006.JPG",
          alt: "Ceramic bowl - DSC_0006",
          filename: "DSC_0006.JPG"
        },
        {
          src: "/images/gallery/bowls/DSC_0007.JPG",
          alt: "Ceramic bowl - DSC_0007",
          filename: "DSC_0007.JPG"
        },
        {
          src: "/images/gallery/bowls/DSC_0008.JPG",
          alt: "Ceramic bowl - DSC_0008",
          filename: "DSC_0008.JPG"
        },
        {
          src: "/images/gallery/bowls/DSC_0009.JPG",
          alt: "Ceramic bowl - DSC_0009",
          filename: "DSC_0009.JPG"
        }
      ]
    },
    {
      name: "Course1",
      slug: "course1",
      description: "Student work from our beginner pottery course.",
      images: [
        {
          src: "/images/gallery/course1/DSC_0012.JPG",
          alt: "Course work - DSC_0012",
          filename: "DSC_0012.JPG"
        },
        {
          src: "/images/gallery/course1/DSC_0013.JPG",
          alt: "Course work - DSC_0013",
          filename: "DSC_0013.JPG"
        },
        {
          src: "/images/gallery/course1/DSC_0014.JPG",
          alt: "Course work - DSC_0014",
          filename: "DSC_0014.JPG"
        },
        {
          src: "/images/gallery/course1/DSC_0015.JPG",
          alt: "Course work - DSC_0015",
          filename: "DSC_0015.JPG"
        }
      ]
    },
    {
      name: "Mugs",
      slug: "mugs",
      description: "Unique ceramic mugs designed for your morning coffee or evening tea.",
      images: [
        {
          src: "/images/gallery/mugs/DSC_0010.JPG",
          alt: "Ceramic mug - DSC_0010",
          filename: "DSC_0010.JPG"
        }
      ]
    }
  ]

  return galleryData
}

/**
 * Helper function to add new gallery categories
 * This makes it easy to add new categories without touching the main data structure
 */
export function addGalleryCategory(
  categories: GalleryCategory[], 
  newCategory: GalleryCategory
): GalleryCategory[] {
  return [...categories, newCategory].sort((a, b) => a.name.localeCompare(b.name))
}

/**
 * Helper function to add images to an existing category
 */
export function addImagesToCategory(
  categories: GalleryCategory[],
  categorySlug: string,
  newImages: GalleryImage[]
): GalleryCategory[] {
  return categories.map(category => 
    category.slug === categorySlug 
      ? { ...category, images: [...category.images, ...newImages] }
      : category
  )
}
