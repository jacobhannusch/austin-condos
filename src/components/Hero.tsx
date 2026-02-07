interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  variant?: 'light' | 'dark';
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  variant = 'dark',
}: HeroProps) {
  return (
    <section className="relative w-full h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-4 ${
            variant === 'dark' || backgroundImage ? 'text-white' : 'text-black'
          }`}
        >
          {/* Split title for underline effect */}
          <span className="inline-block">
            {title.split(' ').map((word, index) => (
              <span key={index} className="inline-block mr-3 lg:mr-4 mb-2 lg:mb-0">
                {word}
                {/* Add animated underline to select words */}
                {index === title.split(' ').length - 1 && (
                  <span className="block h-1 bg-white mt-2 animate-drawLine" />
                )}
              </span>
            ))}
          </span>
        </h1>
        {subtitle && (
          <p
            className={`text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto ${
              variant === 'dark' || backgroundImage ? 'text-white/80' : 'text-black/70'
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
