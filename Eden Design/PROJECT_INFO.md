# NEW EDEN - Funeral Service Website

A modern, elegant, and professional funeral service website built with React, TypeScript, Tailwind CSS, and Motion (Framer Motion).

## 🎨 Design Features

### Visual Design
- **Elegant & Minimalist**: Professional design suitable for a funeral service
- **Premium Color Palette**: 
  - Primary Gold: #C8A45C (light mode) / #D4AF37 (dark mode)
  - Calm backgrounds with soft gradients
  - High contrast for readability
- **Typography**: 
  - Playfair Display for elegant headings
  - Inter for clean, readable body text

### User Experience
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Dark Mode**: Complete dark mode support with smooth transitions
- **Multi-Language**: Indonesian and English language support
- **Smooth Animations**: Subtle, professional animations using Motion
- **Accessibility**: Focus states, proper contrast ratios, semantic HTML

## 🏗️ Project Structure

```
/src
  /app
    /components
      - About.tsx              # About section with company values
      - Contact.tsx            # Contact information and map
      - CTA.tsx               # Call-to-action section
      - Footer.tsx            # Footer with links and social media
      - Hero.tsx              # Hero section with main message
      - LoadingScreen.tsx     # Initial loading animation
      - Navbar.tsx            # Navigation bar with scroll effect
      - OrderForm.tsx         # Order form popup with WhatsApp integration
      - Products.tsx          # Product showcase (caskets)
      - ScrollToTop.tsx       # Scroll to top button
      - ServiceDetail.tsx     # Service detail modal
      - Services.tsx          # Services grid
      - Testimonials.tsx      # Customer testimonials
      - WhyChooseUs.tsx       # Feature cards section
    - App.tsx                 # Main application component
  /styles
    - custom.css              # Custom animations and utilities
    - fonts.css               # Google Fonts imports
    - index.css               # Main CSS entry point
    - theme.css               # Color theme and design tokens
```

## 🎯 Key Components

### 1. **Navbar**
- Transparent on top, solid on scroll
- Dark mode toggle
- Language switcher (ID/EN)
- Mobile hamburger menu
- Smooth scroll navigation

### 2. **Hero Section**
- Large elegant title with gold frame
- Animated floating elements
- Dual CTA buttons
- Scroll indicator

### 3. **Services Section**
9 comprehensive funeral services:
- Casket packages
- Hearse service
- Cargo service
- Embalming
- Photo & video documentation
- Cremation service
- Private burial plots
- Exhumation service
- Escort service

### 4. **Products Section**
- Casket product cards
- Category badges (Economy, Mid-Range, Premium)
- Price ranges
- Interactive hover effects

### 5. **Service Detail Modal**
- Full-screen modal with service details
- Feature list with checkmarks
- High-quality images
- Direct order integration

### 6. **Order Form**
- Name, phone, service type, message fields
- WhatsApp integration
- Form validation
- Smooth modal animations

### 7. **Contact Section**
- Phone, email, address cards
- Interactive map placeholder
- Floating WhatsApp button

## 🎨 Color System

### Light Mode
```css
Primary Gold: #C8A45C
Secondary Blue: #DCEAF5
Background: #FFFFFF
Text Primary: #1F2937
Text Secondary: #6B7280
Card Background: #F9FAFB
Border: #E5E7EB
```

### Dark Mode
```css
Primary Gold: #D4AF37
Background: #0F172A
Card Background: #1E293B
Text Primary: #F9FAFB
Text Secondary: #CBD5E1
Border: #334155
```

## 🚀 Features

### Functionality
- ✅ Smooth scroll navigation
- ✅ Dark/Light mode toggle with persistence
- ✅ Multi-language support (ID/EN)
- ✅ WhatsApp integration for inquiries
- ✅ Order form with pre-filled messages
- ✅ Service detail modals
- ✅ Responsive mobile menu
- ✅ Scroll-to-top button
- ✅ Loading screen animation

### Animations
- ✅ Fade in on scroll
- ✅ Card hover effects (lift, glow, border)
- ✅ Button hover animations
- ✅ Smooth transitions
- ✅ Floating elements
- ✅ Modal enter/exit animations

### Responsive Design
- ✅ Desktop (1440px+)
- ✅ Tablet (768px - 1439px)
- ✅ Mobile (375px - 767px)
- ✅ Touch-friendly buttons
- ✅ Stacked layouts on mobile
- ✅ Optimized images

## 📱 WhatsApp Integration

The website includes WhatsApp integration for:
- Direct contact button in navbar
- Floating WhatsApp button
- Order form submission
- Pre-filled messages based on selected service

Phone number: +62 812-3456-7890 (update in code as needed)

## 🎭 Sections Overview

1. **Hero** - Main landing with title and CTAs
2. **Why Choose Us** - 3 key features (24/7, Quick Response, Professional)
3. **Services** - 9 service cards with details
4. **Products** - Casket product showcase
5. **Testimonials** - Customer reviews
6. **About** - Company mission and values
7. **CTA** - Call-to-action with contact buttons
8. **Contact** - Contact information and WhatsApp
9. **Footer** - Links, services list, social media

## 🔧 Customization

### Update Colors
Edit `/src/styles/theme.css` to change color variables.

### Update Content
All text content is in the component files with ID/EN translations.

### Update Images
Replace Unsplash URLs with your own images in component files.

### Update Contact Info
Search for phone numbers and emails in:
- `Contact.tsx`
- `Footer.tsx`
- `OrderForm.tsx`

### Update WhatsApp Number
Find and replace `6281234567890` with your WhatsApp number.

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Dependencies

- React 18.3.1
- Motion (Framer Motion) 12.23.24
- Lucide React (icons) 0.487.0
- Tailwind CSS 4.1.12
- TypeScript

## 🎯 Performance

- Optimized images from Unsplash
- Lazy loading for sections
- Smooth 60fps animations
- Fast loading screen (2 seconds)
- Minimal bundle size

## 💡 Best Practices

- Semantic HTML for accessibility
- ARIA labels for interactive elements
- Proper contrast ratios
- Keyboard navigation support
- Mobile-first responsive design
- Clean component architecture
- Reusable components
- Type-safe with TypeScript

## 📄 License

This is a custom website design for NEW EDEN Funeral Service.

---

Built with ❤️ using React, Tailwind CSS, and Motion
