export interface Condo {
  slug: string; // URL-friendly identifier
  name: string; // "Seaholm Residences"
  address: string; // "222 West Ave."
  city: string; // "Austin"
  state: string; // "TX"
  zip: string; // "78701"

  // Property Details
  yearBuilt: number; // 2016
  floors: number; // 30
  totalResidences: number; // 280
  architect?: string; // "STG Design"
  developer?: string; // "Southwest Strategies Group"

  // Media
  heroImage: string; // Path to main image
  galleryImages: string[]; // Array of gallery image paths
  floorPlans: string[]; // Array of floor plan image paths
  videoUrl?: string; // Optional YouTube/Vimeo URL

  // Description
  description: string; // Rich text description
  amenities: string[]; // ["Pool", "Gym", "Concierge"]

  // SEO
  metaDescription: string;
  keywords: string[];
}
