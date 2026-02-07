import Link from 'next/link';
import Image from 'next/image';
import { Condo } from '@/types/condo';

interface CondoCardProps {
  condo: Condo;
}

export default function CondoCard({ condo }: CondoCardProps) {
  return (
    <Link href={`/condos/${condo.slug}`} className="group block">
      <article className="bg-white border border-black/10 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-black/20">
        {/* Image */}
        <div className="relative h-64 lg:h-80 overflow-hidden bg-gray-100">
          <Image
            src={condo.heroImage}
            alt={condo.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8">
          <h3 className="text-2xl lg:text-3xl font-medium mb-2 group-hover:opacity-70 transition-opacity">
            {condo.name}
          </h3>
          <p className="text-sm text-black/60 mb-4">
            {condo.address}, {condo.city}, {condo.state} {condo.zip}
          </p>
          <div className="flex items-center justify-between text-xs text-black/50 border-t border-black/10 pt-4">
            <span>{condo.floors} Floors</span>
            <span>{condo.totalResidences} Residences</span>
            <span>Built {condo.yearBuilt}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
