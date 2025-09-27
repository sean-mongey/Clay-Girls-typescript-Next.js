# Dynamic Gallery System

This gallery system is designed to be easily manageable and can be seamlessly integrated with Sanity CMS for content management.

## Current Implementation (File-based)

The gallery currently reads images from the `public/images/gallery/` directory structure:

```
public/images/gallery/
├── bowls/
│   ├── DSC_0006.JPG
│   ├── DSC_0007.JPG
│   └── ...
├── mugs/
│   ├── DSC_0010.JPG
│   └── ...
└── course1/
    ├── DSC_0012.JPG
    ├── DSC_0013.JPG
    └── ...
```

### How it works:
1. Each folder becomes a gallery category
2. Images in each folder are automatically detected
3. Category names are formatted from folder names (e.g., "course1" → "Course1")
4. Descriptions are provided based on category type

## Features

- **Dynamic Category Detection**: Automatically creates categories from folder structure
- **Responsive Carousels**: Uses shadcn carousel component with mobile-friendly navigation
- **Image Modal**: Click any image to view it in full size
- **SEO Optimized**: Proper alt tags and semantic HTML
- **TypeScript Support**: Fully typed for better development experience

## Sanity CMS Integration

The system is designed to easily switch to Sanity CMS. Here's how:

### 1. Install Sanity Dependencies
```bash
npm install @sanity/client @sanity/image-url
```

### 2. Environment Variables
Add to your `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 3. Update Gallery Page
Replace the import in `src/app/gallery/page.tsx`:
```typescript
// From:
import { getGalleryData } from "@/lib/gallery"

// To:
import { getGalleryDataFromSanity } from "@/lib/sanity-gallery"
```

### 4. Sanity Schema Example
Create these document types in your Sanity studio:

```javascript
// galleryCategory.js
export default {
  name: 'galleryCategory',
  title: 'Gallery Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string'
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images.0.asset'
    }
  }
}
```

## Customization

### Adding New Categories
1. **File-based**: Create a new folder in `public/images/gallery/`
2. **Sanity-based**: Add a new document in Sanity Studio

### Styling
The gallery uses Tailwind CSS classes. Key components:
- `GalleryCarousel`: Main carousel component
- `Carousel`: shadcn carousel wrapper
- Modal: Full-screen image viewer

### Image Optimization
Images are automatically optimized by Next.js Image component with:
- Responsive sizing
- Lazy loading
- WebP format support (when available)

## Performance Considerations

- Images are lazy-loaded for better performance
- Carousel only loads visible images
- Modal images are loaded on-demand
- Responsive image sizing reduces bandwidth

## Future Enhancements

- [ ] Image lazy loading with intersection observer
- [ ] Image preloading for smoother carousel experience
- [ ] Search and filter functionality
- [ ] Image tagging and categorization
- [ ] Social sharing for individual images
- [ ] Admin interface for non-technical users
