import { promises as fs } from 'fs'
import path from 'path'

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
 * Truly dynamic gallery system that reads from file system
 * This will be easily replaceable with Sanity data later
 * Perfect for giving owners full control without touching code
 */
export async function getGalleryData(): Promise<GalleryCategory[]> {
  const galleryPath = path.join(process.cwd(), 'public', 'images', 'gallery')
  
  try {
    // Check if gallery directory exists
    await fs.access(galleryPath)
    
    const folders = await fs.readdir(galleryPath, { withFileTypes: true })
    const categoryFolders = folders.filter(folder => folder.isDirectory())
    
    if (categoryFolders.length === 0) {
      console.warn('No gallery folders found')
      return []
    }
    
    const categories: GalleryCategory[] = []
    
    for (const folder of categoryFolders) {
      try {
        const folderPath = path.join(galleryPath, folder.name)
        const files = await fs.readdir(folderPath)
        
        // Filter for image files with comprehensive extensions
        const imageFiles = files.filter(file => {
          const ext = path.extname(file).toLowerCase()
          return ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.bmp', '.tiff'].includes(ext)
        })
        
        if (imageFiles.length > 0) {
          const images: GalleryImage[] = imageFiles.map(file => ({
            src: `/images/gallery/${folder.name}/${file}`,
            alt: `${formatCategoryName(folder.name)} - ${path.parse(file).name}`,
            filename: file
          }))
          
          categories.push({
            name: formatCategoryName(folder.name),
            slug: folder.name,
            images,
            description: getCategoryDescription(folder.name)
          })
        } else {
          console.warn(`No images found in folder: ${folder.name}`)
        }
      } catch (folderError) {
        console.error(`Error reading folder ${folder.name}:`, folderError)
        // Continue with other folders even if one fails
      }
    }
    
    return categories.sort((a, b) => a.name.localeCompare(b.name))
  } catch (error) {
    console.error('Error reading gallery data:', error)
    
    // Fallback to empty array or cached data if needed
    return []
  }
}

/**
 * Formats folder names into readable category names
 */
function formatCategoryName(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Provides descriptions for different gallery categories
 * This can be moved to Sanity later for dynamic content
 */
function getCategoryDescription(slug: string): string {
  const descriptions: Record<string, string> = {
    'bowls': 'Handcrafted ceramic bowls perfect for everyday use and special occasions.',
    'mugs': 'Unique ceramic mugs designed for your morning coffee or evening tea.',
    'course1': 'Student work from our beginner pottery course.',
    'test': 'Test category for demonstrating the dynamic gallery functionality.',
    'decorative': 'Decorative ceramic pieces to enhance your home.',
    'plates': 'Beautiful ceramic plates for dining and display.',
    'vases': 'Elegant ceramic vases for flowers and home decoration.',
    'sculptures': 'Artistic ceramic sculptures and decorative pieces.',
    'functional': 'Practical ceramic items for everyday use.',
    'artwork': 'Unique ceramic artwork and creative pieces.'
  }
  
  return descriptions[slug] || `Beautiful ceramic ${slug} handcrafted with care.`
}

/**
 * Get a single category by slug (useful for individual category pages)
 */
export async function getGalleryCategory(slug: string): Promise<GalleryCategory | null> {
  const categories = await getGalleryData()
  return categories.find(category => category.slug === slug) || null
}

/**
 * Get all available category slugs (useful for generating static pages)
 */
export async function getGalleryCategorySlugs(): Promise<string[]> {
  const categories = await getGalleryData()
  return categories.map(category => category.slug)
}
