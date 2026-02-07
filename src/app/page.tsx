'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import CondoCard from '@/components/CondoCard';
import SearchBox from '@/components/SearchBox';
import { condos } from '@/data/condos';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter condos based on search query
  const filteredCondos = condos.filter((condo) => {
    const query = searchQuery.toLowerCase();
    return (
      condo.name.toLowerCase().includes(query) ||
      condo.address.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <Hero
        title="Downtown Austin Condos"
        subtitle="Discover luxury high-rise living in the heart of the city"
      />

      {/* Search Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SearchBox
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by name or address..."
          />
        </div>
      </section>

      {/* Condos Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {filteredCondos.length > 0 ? (
            <>
              <div className="mb-8">
                <p className="text-sm text-black/50">
                  Showing {filteredCondos.length} {filteredCondos.length === 1 ? 'condo' : 'condos'}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {filteredCondos.map((condo) => (
                  <CondoCard key={condo.slug} condo={condo} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-black/50">
                No condos found matching &quot;{searchQuery}&quot;
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
