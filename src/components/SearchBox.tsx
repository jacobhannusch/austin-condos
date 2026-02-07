'use client';

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBox({ value, onChange, placeholder = 'Search condos...' }: SearchBoxProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-6 py-4 text-lg border-2 border-black/20 focus:border-black outline-none transition-colors"
      />
    </div>
  );
}
