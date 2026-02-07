import { Condo } from '@/types/condo';

interface CondoDetailsProps {
  condo: Condo;
}

export default function CondoDetails({ condo }: CondoDetailsProps) {
  const details = [
    { label: 'Year Built', value: condo.yearBuilt },
    { label: 'Floors', value: condo.floors },
    { label: 'Total Residences', value: condo.totalResidences },
    { label: 'Architect', value: condo.architect },
    { label: 'Developer', value: condo.developer },
  ];

  return (
    <div className="bg-white border border-black/10 p-8 lg:p-12">
      <h2 className="text-2xl lg:text-3xl font-medium mb-8">Property Details</h2>
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {details.map((detail) => (
          detail.value && (
            <div key={detail.label} className="border-b border-black/10 pb-4">
              <dt className="text-xs text-black/50 mb-1 uppercase tracking-wider">
                {detail.label}
              </dt>
              <dd className="text-lg font-medium">{detail.value}</dd>
            </div>
          )
        ))}
      </dl>

      {condo.amenities && condo.amenities.length > 0 && (
        <div className="mt-12">
          <h3 className="text-xl font-medium mb-6">Amenities</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {condo.amenities.map((amenity) => (
              <li key={amenity} className="flex items-start">
                <span className="text-black/50 mr-2">•</span>
                <span className="text-sm">{amenity}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
