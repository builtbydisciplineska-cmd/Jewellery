import React from 'react';
import { SALON_LOCATIONS } from '../data/pieces';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

interface SalonsSectionProps {
  onBookSalonLocation: (city: string) => void;
}

export const SalonsSection: React.FC<SalonsSectionProps> = ({ onBookSalonLocation }) => {
  return (
    <section id="salons" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto scroll-mt-20 border-t border-[#252320]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#252320]">
        <div>
          <div className="flex items-center gap-2 text-xs tracking-[0.24em] uppercase text-[#C5A880] mb-2">
            <span>Global Flagships & Salons</span>
            <span aria-hidden="true">·</span>
            <span>By Appointment Only</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#F9F7F4] tracking-[0.03em]">
            Private Viewing Salons
          </h2>
        </div>
        <p className="text-xs text-[#9E978E] max-w-md font-light mt-4 md:mt-0 leading-relaxed">
          Each Maison Valoire salon is an intimate sanctuary engineered for discrete gemological inspection, illuminated with calibrated North daylight.
        </p>
      </div>

      {/* Salons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SALON_LOCATIONS.map((salon) => (
          <div
            key={salon.city}
            className="p-6 bg-[#121110] border border-[#22201D] hover:border-[#C5A880]/50 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#C5A880]">
                  {salon.leadTime}
                </span>
                <MapPin className="w-4 h-4 text-[#8C7A6B]" />
              </div>

              <h3 className="font-serif text-2xl text-[#F9F7F4] mb-3 font-normal">
                {salon.city}
              </h3>

              <div className="space-y-3 text-xs text-[#9E978E] mb-8 font-light">
                <p className="text-[#C8C2BA]">{salon.address}</p>

                <div className="flex items-center gap-2 pt-2 border-t border-[#1C1A17]">
                  <Phone className="w-3.5 h-3.5 text-[#8C7A6B]" />
                  <span className="font-mono text-[11px]">{salon.phone}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#8C7A6B]" />
                  <span className="text-[11px]">{salon.hours}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onBookSalonLocation(salon.city)}
              className="w-full py-2.5 text-xs tracking-[0.16em] uppercase border border-[#3A3733] text-[#F3EFEA] hover:bg-[#C5A880] hover:text-[#0B0A09] hover:border-[#C5A880] transition-colors flex items-center justify-center gap-2 group"
            >
              <span>Schedule Viewing</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
