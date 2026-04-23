
# Mansion Society — 6-Page Website

A sophisticated "Modern Heritage" coffee shop website blending mansion elegance with specialty cafe warmth.

## Design System

**Colors**
- Background: `#F5F2ED` cream
- Accent: `#8B735B` Mansion Brown
- Text: `#333333` charcoal / `#A08D7B` muted brown
- Dividers: `#D4C9BD` light tan

**Typography**
- Headings: Playfair Display (serif, tight tracking, editorial)
- Body & CTAs: Inter (sans-serif)

**UI**
- Buttons: 8px radius, brown solid, white text, soft shadow
- Images: 8–12px radius with warm tone
- Generous whitespace, subtle hover/scroll animations

## Shared Layout
- **Header**: Minimal sticky nav — "Mansion Society" wordmark left, links right (Home, Menu, About, Gallery, Reviews, Contact)
- **Footer**: Brand blurb, quick links, hours, social placeholders (Instagram, Facebook), copyright
- Mobile: hamburger menu drawer

## Pages

### 1. Home (`/`)
- **Hero**: full-bleed warm interior image, H1 "Mansion Society: Where Heritage Meets Modern Indulgence", subtitle, "View Our Menu" CTA
- **Welcome**: brand intro highlighting Latinx & women-owned, coffee, brunch, baked goods
- **Highlights**: 3 featured items (Japanese Cheesecake, Garden Party Latte, Frenchie Croissant) with image, name, price → link to Menu
- **Ambiance**: split image + copy describing the timeless atmosphere
- **Testimonial teaser**: 2–3 short reviews → link to Reviews page
- **Visit CTA**: address + hours + button to Contact

### 2. Menu (`/menu`)
- Header "Our Curated Selections"
- Sticky category sub-nav (anchor jumps within page): Seasonal Specialty Drinks, Coffee & Espresso Basics, Food, Treats & Pastries, Others
- Each section: clean two-column list with item name, dotted leader, price, and italic description; featured items get a small thumbnail
- All items from your brief included with provided pricing

### 3. About (`/about`)
- Header "Our Story"
- Long-form narrative on founding and Latinx + women-owned heritage
- Mission & Values: 4-card grid (Quality, Community, Service, Ambiance)
- Image-text split for "The Mansion" history
- Team placeholder section with portrait spots

### 4. Gallery (`/gallery`)
- Header "Visual Delights"
- Masonry-style responsive grid mixing interior, drinks, pastries, scenes
- Lightbox on click (image opens in full-screen overlay)

### 5. Reviews (`/reviews`)
- Header "What Our Guests Say"
- Rating summary card: 4.6 ★ · 256 reviews
- Tag/keyword chips (banana pancake latte, croissants, friendly staff, cozy spot, etc.) — visual only
- Grid of review cards (all 10 reviews you provided): reviewer name, badge, date, full review text, subtle quote styling
- "Write a Review" CTA linking to Google

### 6. Contact (`/contact`)
- Header "Connect With Us"
- Two-column layout:
  - Left: address (202 Steeples Blvd, Indianapolis, IN), phone, email, hours table (Wed–Sat 8a–4p, Sun 9a–4p, closed Mon/Tue), social icons
  - Right: embedded Google Maps iframe of the address
- Per your direction: **no contact form**

## SEO
Each route gets unique `head()` metadata (title, description, og:title, og:description) and an og:image tied to its hero visual.

## Images
Use high-quality Unsplash photos that match the warm, editorial aesthetic — coffee, pastries, vintage interiors — applied with consistent rounding and warm tone.
