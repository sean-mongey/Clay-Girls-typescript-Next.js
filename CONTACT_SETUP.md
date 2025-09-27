# Contact Page Setup

## Overview

The contact page has been set up with a comprehensive contact system including:

- **Hero Section** - Welcoming introduction
- **Contact Information** - Multiple ways to reach Clay Girls
- **Contact Form** - Professional form with validation
- **FAQ Section** - Common questions and answers
- **Map Integration** - Location information

## Features

### Contact Form
- **Professional Design** - Clean, modern styling with proper spacing
- **Form Validation** - Required fields and email validation
- **Loading States** - Visual feedback during form submission
- **Success/Error Messages** - Clear feedback to users
- **Responsive Design** - Works perfectly on all devices

### Contact Information
- **Email**: claygirlsflims@gmail.com
- **Phone**: +41 76 262 37 79
- **Location**: Flims, Switzerland
- **Interactive Elements** - Clickable email, phone, and map links

### FAQ Section
- **8 Common Questions** - Covering booking, materials, pricing, etc.
- **Accordion Interface** - Easy to browse and expand
- **Comprehensive Answers** - Detailed information for each question

## Email Configuration

The contact form is already configured to send emails to `claygirlsflims@gmail.com`. 

### Environment Variables Required
Create a `.env.local` file with:
```env
EMAIL_USER=claygirlsflims@gmail.com
EMAIL_PASSWORD=your_gmail_app_password
```

### Gmail App Password Setup
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password for "Mail"
3. Use this 16-character password as `EMAIL_PASSWORD`

## Form Functionality

### What Happens When Someone Submits:
1. **Validation** - All required fields are checked
2. **Email Sent** - Message is sent to claygirlsflims@gmail.com
3. **Reply-To Set** - You can reply directly to the customer
4. **Confirmation** - Customer sees success message
5. **Form Reset** - Form clears for new submissions

### Email Format
```
Subject: Website Contact: [Customer's Subject]

Hello Clay Girls,

You have received a new message from your website contact form:

From: [Customer's Name]
Email: [Customer's Email]
Subject: [Customer's Subject]

Message:
[Customer's Message]

---
This message was sent from the Clay Girls website contact form.
```

## Customization

### Adding New FAQ Items
Edit `src/components/sections/faq-section.tsx`:
```typescript
const faqs = [
  // Add new FAQ objects here
  {
    title: 'Your Question',
    content: 'Your detailed answer here.'
  }
];
```

### Modifying Contact Information
Edit `src/components/sections/contact-section.tsx`:
```typescript
const contactInfo = [
  {
    icon: Mail, // or Phone, MapPin
    title: 'Your Title',
    details: 'Your contact details',
    link: 'mailto:your-email@example.com', // or tel:, https://
  }
];
```

### Styling Changes
- **Colors**: Update Tailwind classes (teal-600, teal-700, etc.)
- **Spacing**: Modify padding/margin classes
- **Layout**: Adjust grid classes for different layouts

## Testing

### Local Testing
1. Start development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out and submit the form
4. Check your email for the message

### Production Deployment
1. Set up environment variables on your hosting platform
2. Test the contact form in production
3. Verify emails are being received

## Security Features

- **Input Validation** - Prevents malicious input
- **Rate Limiting** - Prevents spam (can be added)
- **Environment Variables** - Secure credential storage
- **HTTPS Required** - Secure form submission

## Future Enhancements

- [ ] Add reCAPTCHA for spam protection
- [ ] Implement email templates
- [ ] Add contact form analytics
- [ ] Create admin dashboard for messages
- [ ] Add file upload capability
- [ ] Implement auto-responder emails
