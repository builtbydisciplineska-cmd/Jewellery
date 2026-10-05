import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreCreations: () => void;
  onBookSalon: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCreations, onBookSalon }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background High Joaillerie Editorial Image with Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_haute_jewellery_1791204332809.jpg"
          alt="Maison Valoire Haute Joaillerie emerald and diamond necklace on travertine"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.05] scale-[1.02] transform transition-transform duration-1000"
        />
        {/* Measured dark scrim ensuring 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-[#0B0A09]/60 to-[#0B0A09]/40" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-transparent via-[#0B0A09]/40 to-[#0B0A09]/90" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Zero-Pill Unboxed Kicker */}
        <div className="flex items-center justify-center gap-3 text-xs tracking-[0.3em] uppercase text-[#C5A880] mb-5">
          <span>Place Vendôme</span>
          <span aria-hidden="true" className="text-[#8C7A6B]">·</span>
          <span>Haute Joaillerie</span>
          <span aria-hidden="true" className="text-[#8C7A6B]">·</span>
          <span>Since 1928</span>
        </div>

        {/* Display Headline with text-wrap balance */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-[0.04em] text-[#F9F7F4] leading-[1.08] max-w-4xl text-balance mb-6">
          Sculpted Light, <br />
          <span className="italic font-normal text-[#E8D9C4]">Timeless Rarity</span>
        </h1>

        {/* Editorial Subtitle */}
        <p className="font-sans text-base sm:text-lg text-[#C8C2BA] font-light max-w-2xl leading-relaxed mb-10 text-balance">
          Exceptional solitary diamonds and natural Colombian emeralds meticulously shaped by hand in our Parisian atelier. Each creation is a rare testament to geological miracle and five-generation craft.
        </p>

        {/* Primary Interactive Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExploreCreations}
            className="w-full sm:w-auto px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium bg-[#C5A880] text-[#0B0A09] hover:bg-[#d8c2a3] transition-all duration-200 active:scale-[0.98] shadow-lg"
          >
            Explore Creations
          </button>
          <button
            onClick={onBookSalon}
            className="w-full sm:w-auto px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium border border-[#C5A880]/50 text-[#F3EFEA] hover:bg-[#C5A880]/10 hover:border-[#C5A880] transition-all duration-200 active:scale-[0.98]"
          >
            Request Private Salon
          </button>
        </div>

        {/* Editorial Trust Markers: Clean unboxed stats with typographic separators */}
        <div className="mt-16 pt-8 border-t border-[#3A3733]/60 w-full max-w-2xl grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="font-serif text-xl sm:text-2xl text-[#F9F7F4] font-normal">GIA & Gübelin</div>
            <div className="text-[11px] tracking-[0.14em] text-[#9E978E] uppercase mt-0.5">Dual Certification</div>
          </div>
          <div>
            <div className="font-serif text-xl sm:text-2xl text-[#F9F7F4] font-normal">100% Conflict-Free</div>
            <div className="text-[11px] tracking-[0.14em] text-[#9E978E] uppercase mt-0.5">Kimberley Process</div>
          </div>
          <div>
            <div className="font-serif text-xl sm:text-2xl text-[#F9F7F4] font-normal">Place Vendôme</div>
            <div className="text-[11px] tracking-[0.14em] text-[#9E978E] uppercase mt-0.5">Master Atelier</div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <a
        href="#creations"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-[10px] tracking-[0.25em] uppercase text-[#8C7A6B] hover:text-[#C5A880] transition-colors"
        aria-label="Scroll to creations catalog"
      >
        <span>Discover</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
};
