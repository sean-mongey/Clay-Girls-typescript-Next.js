import { GalleryCategory, GalleryImage } from './gallery'

/**
 * Sanity-compatible gallery data structure
 * This is how the data would look when coming from Sanity CMS
 */
export interface SanityGalleryCategory {
  _id: string
  _type: 'galleryCategory'
  name: string
  slug: {
    current: string
  }
  description?: string
  images: SanityGalleryImage[]
  order?: number
  publishedAt: string
}

export interface SanityGalleryImage {
  _id: string
  _type: 'galleryImage'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  caption?: string
  order?: number
}

/**
 * Converts Sanity data to our internal gallery format
 * This function would be used when integrating with Sanity
 */
export function transformSanityGalleryData(sanityCategories: SanityGalleryCategory[]): GalleryCategory[] {
  return sanityCategories
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .map(category => ({
      name: category.name,
      slug: category.slug.current,
      description: category.description,
      images: category.images
        .sort((a, b) => (a.order || 0) - (b.order || 0))
        .map(image => ({
          src: `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}`,
          alt: image.alt || `${category.name} image`,
          filename: image.asset._ref
        }))
    }))
}

/**
 * Example Sanity query for gallery data
 * This would be used in your Sanity client
 */
export const GALLERY_QUERY = `
  *[_type == "galleryCategory"] | order(order asc) {
    _id,
    _type,
    name,
    slug,
    description,
    order,
    publishedAt,
    images[] {
      _id,
      _type,
      asset,
      alt,
      caption,
      order
    } | order(order asc)
  }
`

/**
 * Example of how to use this with Sanity client
 * 
 * import { createClient } from '@sanity/client'
 * import { transformSanityGalleryData } from './sanity-gallery'
 * 
 * const client = createClient({
 *   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
 *   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
 *   useCdn: true,
 * })
 * 
 * export async function getGalleryDataFromSanity(): Promise<GalleryCategory[]> {
 *   const sanityData = await client.fetch(GALLERY_QUERY)
 *   return transformSanityGalleryData(sanityData)
 * }
 */
