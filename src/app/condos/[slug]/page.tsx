import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import CondoGallery from '@/components/CondoGallery';
import CondoDetails from '@/components/CondoDetails';
import { getCondoBySlug, getAllCondoSlugs } from '@/data/condos';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllCondoSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const condo = getCondoBySlug(slug);

  if (!condo) {
    return {
      title: 'Condo Not Found',
    };
  }

  return {
    title: `${condo.name} | Austin Condos`,
    description: condo.metaDescription,
    keywords: condo.keywords.join(', '),
  };
}

export default async function CondoPage({ params }: PageProps) {
  const { slug } = await params;
  const condo = getCondoBySlug(slug);

  if (!condo) {
    notFound();
  }

  return (
    <>
      <Hero
        title={condo.name}
        subtitle={`${condo.address}, ${condo.city}, ${condo.state} ${condo.zip}`}
        backgroundImage={condo.heroImage}
      />

      {/* Breadcrumb */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="text-sm text-black/50">
            <a href="/" className="hover:text-black transition-colors">
              Home
            </a>
            {' '}/{' '}
            <a href="/#" className="hover:text-black transition-colors">
              Condos
            </a>
            {' '}/{' '}
            <span className="text-black">{condo.name}</span>
          </nav>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <p className="text-lg lg:text-xl leading-relaxed text-black/80">
            {condo.description}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-medium mb-8">Photo Gallery</h2>
          <CondoGallery images={condo.galleryImages} name={condo.name} />
        </div>
      </section>

      {/* Property Details */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <CondoDetails condo={condo} />
        </div>
      </section>

      {/* Floor Plans */}
      {condo.floorPlans && condo.floorPlans.length > 0 && (
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-medium mb-8">Floor Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {condo.floorPlans.map((plan, index) => (
                <div key={index} className="bg-white border border-black/10 p-4">
                  <img
                    src={plan}
                    alt={`${condo.name} - Floor Plan ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Video */}
      {condo.videoUrl && (
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-medium mb-8">Video Tour</h2>
            <div className="aspect-video bg-gray-100">
              <iframe
                src={condo.videoUrl.replace('watch?v=', 'embed/')}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
