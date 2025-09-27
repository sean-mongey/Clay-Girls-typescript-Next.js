# Unified Header Design System

## Overview

All pages now use a consistent, professional header design that creates a cohesive user experience across the Clay Girls website.

## Design Principles

### **Consistent & Professional**
- Clean white background for all page headers
- Consistent typography and spacing
- Professional appearance that builds trust
- Focus on content rather than competing visual elements

### **Brand-Aligned**
- Uses your established color palette (gray-900 for titles, gray-600 for descriptions)
- Maintains brand consistency across all pages
- Professional typography that reflects your pottery studio's quality

## Implementation

### **PageHeader Component**
Located at `src/components/ui/page-header.tsx`

```typescript
interface PageHeaderProps {
  title: string
  description: string
  className?: string
}
```

### **Usage Example**
```typescript
import { PageHeader } from '@/components/ui/page-header'

<PageHeader 
  title="Page Title"
  description="Page description that explains what this page is about."
/>
```

## Updated Pages

### **Gallery Page**
- **Title**: "Our Gallery"
- **Description**: "Explore our collection of handcrafted ceramic pieces. Each item is carefully created with love and attention to detail."

### **Contact Page**
- **Title**: "Get in Touch"
- **Description**: "Ready to start your pottery journey? We'd love to hear from you and help you create something beautiful."

### **Workshops Page**
- **Title**: "Pottery Workshops"
- **Description**: "Discover the joy of creating with clay in our hands-on pottery workshops"

### **Home Page**
- **Status**: Keeps the special HeroSection component
- **Reason**: Landing page needs more visual impact and call-to-action buttons

## Design Specifications

### **Layout**
- **Background**: `bg-white`
- **Padding**: `py-16 md:py-20` (responsive vertical padding)
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Alignment**: `text-center`

### **Typography**
- **Title**: `text-4xl md:text-5xl font-bold text-gray-900 mb-4`
- **Description**: `text-xl text-gray-600 max-w-3xl mx-auto`

### **Responsive Design**
- **Mobile**: Smaller text sizes and padding
- **Desktop**: Larger text sizes and more generous spacing
- **Tablet**: Smooth transition between mobile and desktop

## Benefits

### **User Experience**
- ✅ **Consistent Navigation** - Users know what to expect
- ✅ **Professional Appearance** - Builds trust and credibility
- ✅ **Clear Hierarchy** - Easy to understand page purpose
- ✅ **Mobile Friendly** - Works perfectly on all devices

### **Brand Consistency**
- ✅ **Unified Look** - All pages feel like part of the same site
- ✅ **Professional Image** - Reflects the quality of your pottery
- ✅ **Easy Maintenance** - One component to update for all pages

### **Technical Benefits**
- ✅ **Reusable Component** - DRY principle, easy to maintain
- ✅ **TypeScript Support** - Type-safe implementation
- ✅ **Flexible** - Easy to customize per page if needed

## Customization

### **Adding New Pages**
1. Import the PageHeader component
2. Add it at the top of your page content
3. Provide appropriate title and description

### **Modifying Styling**
Edit `src/components/ui/page-header.tsx` to change:
- Colors (background, text)
- Typography (sizes, weights)
- Spacing (padding, margins)
- Layout (alignment, container width)

### **Page-Specific Customization**
Use the `className` prop to add page-specific styling:
```typescript
<PageHeader 
  title="Special Page"
  description="This page has custom styling"
  className="bg-gray-50"
/>
```

## Future Enhancements

- [ ] Add breadcrumb navigation
- [ ] Include page-specific icons
- [ ] Add background patterns or subtle textures
- [ ] Implement animated entrance effects
- [ ] Add social sharing buttons

## Best Practices

1. **Keep Descriptions Concise** - 1-2 sentences maximum
2. **Use Action-Oriented Language** - Encourage engagement
3. **Maintain Consistency** - Use similar tone across all pages
4. **Test on Mobile** - Ensure readability on small screens
5. **Update Regularly** - Keep content fresh and relevant
