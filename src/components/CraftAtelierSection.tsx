import React from 'react';
import { ATELIER_STAGES } from '../data/pieces';
import { ShieldCheck, Award, Sparkles } from 'lucide-react';
import craftBenchImg from '../assets/images/craft_atelier_bench_1791204394360.jpg';

export const CraftAtelierSection: React.FC = () => {
  return (
    <section id="atelier" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto scroll-mt-20 border-t border-[#252320]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#252320]">
        <div>
          <div className="flex items-center gap-2 text-xs tracking-[0.24em] uppercase text-[#C5A880] mb-2">
            <span>26 Place Vendôme · Paris</span>
            <span aria-hidden="true">·</span>
            <span>Five Generations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#F9F7F4] tracking-[0.03em]">
            The Master Atelier & Métiers d’Art
          </h2>
        </div>
        <p className="text-xs text-[#9E978E] max-w-md font-light mt-4 md:mt-0 leading-relaxed">
          From the initial hand-painted gouaché sketch to the final laser hallmark, every jewel requires between 60 to 240 bench hours of uninterrupted artisanal devotion.
        </p>
      </div>

      {/* Hero Atelier Visual Stage */}
      <div className="relative mb-16 overflow-hidden border border-[#22201D] aspect-[16/9] sm:aspect-[21/9]">
        <img
          src={craftBenchImg}
          alt="Master jeweler working on gold ring with micro loupe at Parisian bench"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-transparent to-black/30" />
        <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#C5A880] mb-1">
              Atelier Saint-Honoré · Place Vendôme
            </div>
            <div className="font-serif text-xl sm:text-2xl text-[#F9F7F4]">
              Where Light Is Sculpted by Human Hands
            </div>
          </div>
          <div className="text-xs text-[#B8B2A9] font-mono sm:text-right">
            Hand-Crafted Precision Tolerances: ±0.02 mm
          </div>
        </div>
      </div>

      {/* 4-Step Craft Sequence (Strictly following editorial numbering 01. Phase without mechanical slop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {ATELIER_STAGES.map((stage) => (
          <div
            key={stage.number}
            className="p-6 bg-[#121110] border border-[#22201D] hover:border-[#C5A880]/40 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="font-serif text-3xl text-[#C5A880] font-light mb-4">
                {stage.number}.
              </div>
              <h3 className="font-serif text-xl text-[#F9F7F4] mb-1 font-normal">
                {stage.phase}
              </h3>
              <div className="text-[11px] tracking-wider italic text-[#8C7A6B] mb-4">
                {stage.french}
              </div>
              <p className="text-xs text-[#9E978E] font-light leading-relaxed">
                {stage.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Ethical Sourcing Charter */}
      <div className="mt-16 p-8 bg-[#141311] border border-[#262421] grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="flex items-center gap-3">
          <Award className="w-8 h-8 text-[#C5A880] shrink-0" />
          <div>
            <div className="font-serif text-base text-[#F9F7F4]">100% Recycled Precious Metals</div>
            <div className="text-xs text-[#8C7A6B]">Sourced solely from certified RJC (Responsible Jewellery Council) refineries.</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-[#C5A880] shrink-0" />
          <div>
            <div className="font-serif text-base text-[#F9F7F4]">Kimberley Certified Provenance</div>
            <div className="text-xs text-[#8C7A6B]">Strict warranty that every diamond is non-conflict and tracked to mine origin.</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Sparkles className="w-8 h-8 text-[#C5A880] shrink-0" />
          <div>
            <div className="font-serif text-base text-[#F9F7F4]">Lifetime Atelier Care</div>
            <div className="text-xs text-[#8C7A6B]">Annual prong inspection, ultrasonic bath, and re-rhodium plating for life.</div>
          </div>
        </div>
      </div>
    </section>
  );
};
