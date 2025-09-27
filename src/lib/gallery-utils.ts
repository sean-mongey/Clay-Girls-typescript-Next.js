import { GalleryCategory, GalleryImage } from './gallery'

/**
 * Utility functions to help manage gallery content
 * These make it easy to add new categories and images
 */

/**
 * Create a new gallery category
 */
export function createGalleryCategory(
  name: string,
  slug: string,
  description: string,
  images: GalleryImage[]
): GalleryCategory {
  return {
    name,
    slug,
    description,
    images
  }
}

/**
 * Create a new gallery image
 */
export function createGalleryImage(
  src: string,
  alt: string,
  filename: string
): GalleryImage {
  return {
    src,
    alt,
    filename
  }
}

/**
 * Example of how to add a new category to the gallery
 * 
 * To add a new category, update the galleryData array in src/lib/gallery.ts:
 * 
 * 1. Add your images to public/images/gallery/your-category-name/
 * 2. Use this function to create the category data:
 * 
 * const newCategory = createGalleryCategory(
 *   "Vases",
 *   "vases", 
 *   "Elegant ceramic vases for flowers and home decoration.",
 *   [
 *     createGalleryImage("/images/gallery/vases/vase1.jpg", "Ceramic vase - vase1", "vase1.jpg"),
 *     createGalleryImage("/images/gallery/vases/vase2.jpg", "Ceramic vase - vase2", "vase2.jpg"),
 *   ]
 * )
 * 
 * 3. Add the newCategory to the galleryData array in getGalleryData()
 */

/**
 * Sanity CMS integration helper
 * This shows how the data structure maps to Sanity
 */
export interface SanityGalleryMapping {
  sanityField: string
  ourField: string
  description: string
}

export const SANITY_MAPPING: SanityGalleryMapping[] = [
  {
    sanityField: 'name',
    ourField: 'name',
    description: 'Category display name'
  },
  {
    sanityField: 'slug.current',
    ourField: 'slug',
    description: 'URL-friendly identifier'
  },
  {
    sanityField: 'description',
    ourField: 'description',
    description: 'Category description text'
  },
  {
    sanityField: 'images[].asset',
    ourField: 'images[].src',
    description: 'Image source URL'
  },
  {
    sanityField: 'images[].alt',
    ourField: 'images[].alt',
    description: 'Image alt text for accessibility'
  }
]
