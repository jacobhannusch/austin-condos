# Austin Condos Website

A modern, statically-generated website showcasing luxury high-rise condos in downtown Austin. Built with Next.js, TypeScript, and Tailwind CSS, matching the minimalist aesthetic of jacobinaustin.com.

## Features

- 🏢 **Individual Condo Pages** - Dedicated pages for each building with photos, floor plans, and details
- 🖼️ **Photo Galleries** - Interactive Swiper galleries with thumbnails
- 🔍 **Search Functionality** - Filter condos by name or address
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎨 **Brand-Matched Design** - Minimalist black/white aesthetic with clean typography
- ⚡ **Static Export** - Pre-rendered HTML for fast loading and easy traditional hosting
- 🔧 **Type-Safe** - Built with TypeScript for reliability

## Project Structure

```
austin-condos/
├── public/
│   └── images/condos/          # Condo images (hero, gallery, floor plans)
├── src/
│   ├── app/
│   │   ├── page.tsx           # Main listing page
│   │   ├── layout.tsx         # Root layout
│   │   └── condos/[slug]/     # Individual condo pages
│   ├── components/            # Reusable React components
│   ├── data/condos.ts        # Condo data (currently has 3 sample condos)
│   └── types/condo.ts        # TypeScript interfaces
├── next.config.ts            # Next.js config (static export enabled)
└── tailwind.config.ts        # Tailwind CSS configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Navigate to the project directory:
   ```bash
   cd austin-condos
   ```

2. Install dependencies (already done):
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Adding Condo Data

### 1. Add Condo Information

Edit `src/data/condos.ts` and add a new condo object to the array:

```typescript
{
  slug: 'your-condo-name',              // URL-friendly (e.g., 'austonian')
  name: 'Your Condo Name',
  address: '123 Main St.',
  city: 'Austin',
  state: 'TX',
  zip: '78701',
  yearBuilt: 2020,
  floors: 40,
  totalResidences: 300,
  architect: 'Architecture Firm',
  developer: 'Developer Name',
  heroImage: '/images/condos/your-condo-name/hero.jpg',
  galleryImages: [
    '/images/condos/your-condo-name/gallery-1.jpg',
    // ... more images
  ],
  floorPlans: [
    '/images/condos/your-condo-name/floor-plan-1.jpg',
  ],
  videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID', // Optional
  description: 'Your condo description...',
  amenities: ['Pool', 'Gym', 'Concierge'],
  metaDescription: 'SEO description',
  keywords: ['keywords', 'for', 'seo'],
}
```

### 2. Add Images

1. Create a folder: `public/images/condos/your-condo-name/`
2. Add your images:
   - `hero.jpg` - Main hero image
   - `gallery-1.jpg`, `gallery-2.jpg`, etc. - Gallery images
   - `floor-plan-1.jpg`, etc. - Floor plan images

**Image Recommendations:**
- Hero images: 1920x1080px or larger
- Gallery images: 1200x800px minimum
- Floor plans: High resolution for readability
- Optimize/compress images before adding (use tools like TinyPNG)

### 3. Rebuild

After adding condos, rebuild the site:

```bash
npm run build
```

## Building for Production

Generate the static website:

```bash
npm run build
```

The static files will be in the `out/` directory.

## Deploying to Traditional Hosting

### Via FTP/cPanel:

1. Build the site: `npm run build`
2. Upload the contents of the `out/` folder to your hosting's public directory (usually `public_html` or `www`)
3. Configure clean URLs (if needed):

**.htaccess** (for Apache):
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /$1.html [L]
```

### Alternative: Modern Hosting

For easier deployment, consider:
- **Vercel** - Free hosting, automatic deployments from Git
- **Netlify** - Free tier, drag-and-drop deployment

## Customization

### Updating Brand Colors

Edit `tailwind.config.ts` to add accent colors:

```typescript
extend: {
  colors: {
    accent: '#your-color',
  },
}
```

### Changing Fonts

To use Neue Haas Grotesk (or other custom fonts):

1. Add font files to `public/fonts/`
2. Update `src/app/globals.css`:

```css
@font-face {
  font-family: 'Neue Haas Grotesk';
  src: url('/fonts/NeueHaasGroteskText-Regular.woff2') format('woff2');
  font-weight: 400;
}

body {
  font-family: 'Neue Haas Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Modifying Styling

- Global styles: `src/app/globals.css`
- Component styles: Use Tailwind classes in components
- Swiper gallery styles: Customize in `globals.css` under "Swiper custom styles"

## Current Sample Data

The site includes 3 sample condos:
1. **Seaholm Residences** - 30 floors, 280 residences
2. **The Austonian** - 56 floors, 189 residences
3. **Four Seasons Residences** - 34 floors, 147 residences

All currently use placeholder images. Replace these with real photos as you gather them.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (generates static export)
- `npm run start` - Start production server (not needed for static hosting)
- `npm run lint` - Run ESLint

## Tech Stack

- **Next.js 16** - React framework with static export
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **Swiper** - Touch-enabled image galleries
- **React 19** - UI library

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

ISC

## Notes

- Images are set to `unoptimized: true` in Next.js config for static export compatibility
- The site is fully static - no server-side rendering or API routes
- SEO metadata is configured per-page for better search visibility
- Responsive design uses Tailwind's mobile-first approach
