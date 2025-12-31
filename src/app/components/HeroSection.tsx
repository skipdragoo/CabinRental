import * as React from "react";
import { Button } from "./ui/button";
import cabinOutsideImg from "../images/cabin_outside.png";

interface HeroSectionProps {
  onCheckAvailability: () => void;
  onRequestBook: () => void;
}

export function HeroSection({ onCheckAvailability, onRequestBook }: HeroSectionProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          //src="https://images.unsplash.com/photo-1648326342761-8a9abfb7a2c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYWJpbiUyMGV4dGVyaW9yJTIwZm9yZXN0fGVufDF8fHx8MTc2NjQzMjc1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
          src={cabinOutsideImg}
          alt="Luxury cabin exterior surrounded by forest"
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 
          className="mb-6 tracking-tight"
          style={{ 
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 500,
            lineHeight: 1.1
          }}
        >
          A quiet cabin escape in the Ouachita Mountains
        </h1>
        <p 
          className="mb-8 max-w-2xl mx-auto opacity-95"
          style={{ 
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
            fontWeight: 300,
            lineHeight: 1.6
          }}
        >
          Sleeps 7 · 5 beds · 1 baths · TV · Fire Pit · National Forest access
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={onCheckAvailability}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Check Availability
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onRequestBook}
            className="bg-white/95 hover:bg-white text-foreground border-2 border-white px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Request to Book
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce">
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
}
