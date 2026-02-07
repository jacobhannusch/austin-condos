import { Condo } from '@/types/condo';

export const condos: Condo[] = [
  {
    slug: 'seaholm-residences',
    name: 'Seaholm Residences',
    address: '222 West Ave.',
    city: 'Austin',
    state: 'TX',
    zip: '78701',
    yearBuilt: 2016,
    floors: 30,
    totalResidences: 280,
    architect: 'STG Design',
    developer: 'Southwest Strategies Group',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop',
    ],
    floorPlans: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=1000&fit=crop',
    ],
    description: 'Seaholm Residences is a landmark 30-story luxury high-rise in downtown Austin, offering sophisticated urban living with breathtaking views of Lady Bird Lake and the Austin skyline.',
    amenities: [
      '24/7 Concierge',
      'Resort-Style Pool',
      'State-of-the-Art Fitness Center',
      'Private Theater',
      'Residents Lounge',
      'Sky Lounge',
      'Pet Park',
      'Bike Storage',
    ],
    metaDescription: 'Seaholm Residences - Luxury high-rise condos in downtown Austin. 30 floors, 280 residences with resort-style amenities and stunning views.',
    keywords: ['Seaholm Residences', 'Austin condos', 'downtown Austin', 'luxury condos', 'high-rise living'],
  },
  {
    slug: 'the-austonian',
    name: 'The Austonian',
    address: '200 Congress Ave.',
    city: 'Austin',
    state: 'TX',
    zip: '78701',
    yearBuilt: 2010,
    floors: 56,
    totalResidences: 189,
    architect: 'Ziegler Cooper Architects',
    developer: 'Benchmark',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1080&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop',
    ],
    floorPlans: [
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=1000&fit=crop',
    ],
    description: 'The Austonian is the tallest residential building in Austin, offering unparalleled luxury and breathtaking 360-degree views of the city. This iconic tower sets the standard for high-rise living in Texas.',
    amenities: [
      '24/7 Concierge & Security',
      '10th Floor Pool Deck',
      'Fitness Center & Spa',
      'Wine Storage',
      'Private Dining Room',
      'Guest Suites',
      'Dog Park',
      'Valet Parking',
    ],
    metaDescription: 'The Austonian - Austin\'s tallest residential tower. 56 floors of luxury condos with world-class amenities and panoramic city views.',
    keywords: ['The Austonian', 'Austin condos', 'luxury high-rise', 'Congress Avenue', 'tallest building'],
  },
  {
    slug: 'four-seasons-residences',
    name: 'Four Seasons Residences',
    address: '98 San Jacinto Blvd.',
    city: 'Austin',
    state: 'TX',
    zip: '78701',
    yearBuilt: 2010,
    floors: 34,
    totalResidences: 147,
    architect: 'Page Southerland Page',
    developer: 'Benchmark/Riverstone',
    heroImage: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1920&h=1080&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=800&fit=crop',
    ],
    floorPlans: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=1000&fit=crop',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    description: 'Four Seasons Residences combines the legendary hospitality of Four Seasons with the finest in residential living. Enjoy full access to hotel amenities while maintaining the privacy of your own luxury residence.',
    amenities: [
      'Four Seasons Hotel Services',
      'Rooftop Pool',
      'Fitness Center',
      'Spa Access',
      'Room Service',
      'Housekeeping Available',
      'Valet Parking',
      'Private Terraces',
    ],
    metaDescription: 'Four Seasons Residences Austin - Luxury condos with full Four Seasons hotel services. Waterfront living on Lady Bird Lake.',
    keywords: ['Four Seasons', 'Austin condos', 'luxury residences', 'hotel condos', 'Lady Bird Lake'],
  },
];

// Helper function to get a condo by slug
export function getCondoBySlug(slug: string): Condo | undefined {
  return condos.find((condo) => condo.slug === slug);
}

// Helper function to get all condo slugs for static generation
export function getAllCondoSlugs(): string[] {
  return condos.map((condo) => condo.slug);
}
