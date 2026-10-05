import React, { useState } from 'react';
import { Gem, Sparkles, Eye, Shield, Compass } from 'lucide-react';

export const InteractiveGemGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'carat' | 'color' | 'clarity' | 'cut'>('carat');
  
  // Interactive states for each C
  const [caratValue, setCaratValue] = useState<number>(3.5);
  const [colorGrade, setColorGrade] = useState<'D' | 'E' | 'G' | 'J' | 'Fancy'>('D');
  const [clarityGrade, setClarityGrade] = useState<'FL' | 'VVS1' | 'VS1' | 'SI1'>('FL');
  const [cutType, setCutType] = useState<'Triple Excellent' | 'Very Good' | 'Good'>('Triple Excellent');

  // Stone visualizer helpers
  const getColorTint = () => {
    switch (colorGrade) {
      case 'D': return 'from-[#FFFFFF] via-[#EBF3FF] to-[#D6E6FF]';
      case 'E': return 'from-[#FFFFFF] via-[#F4F8FA] to-[#E2EDF0]';
      case 'G': return 'from-[#FEFEFA] via-[#F9F7EE] to-[#EBE6CE]';
      case 'J': return 'from-[#FFFDF0] via-[#F5EDC7] to-[#E3D38D]';
      case 'Fancy': return 'from-[#FFF380] via-[#FFD700] to-[#E0A800]';
    }
  };

  const getInclusions = () => {
    switch (clarityGrade) {
      case 'FL': return null;
      case 'VVS1':
        return (
          <div className="absolute top-[48%] left-[52%] w-1 h-1 rounded-full bg-white/60 blur-[0.5px]" />
        );
      case 'VS1':
        return (
          <>
            <div className="absolute top-[45%] left-[48%] w-1.5 h-1.5 rounded-full bg-black/40" />
            <div className="absolute top-[55%] left-[53%] w-1 h-1 rounded-full bg-black/30" />
          </>
        );
      case 'SI1':
        return (
          <>
            <div className="absolute top-[40%] left-[45%] w-2 h-1.5 rounded-full bg-black/50" />
            <div className="absolute top-[58%] left-[56%] w-2 h-1 bg-black/45" />
            <div className="absolute top-[52%] left-[42%] w-1 h-1.5 rounded-full bg-white/70" />
          </>
        );
    }
  };

  return (
    <section id="gemological-dossier" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto scroll-mt-20 border-t border-[#252320]">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-[#C5A880] mb-2">
          <span>Gemological Standards</span>
          <span aria-hidden="true">·</span>
          <span>Dual Laboratory Protocol</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#F9F7F4] tracking-[0.03em] mb-4">
          The 4Cs of Exceptional Rarity
        </h2>
        <p className="text-sm text-[#9E978E] font-light leading-relaxed">
          Maison Valoire selects solely the top 0.1% of global diamond output. Explore our interactive gemological benchmark to understand the physics of brilliance.
        </p>
      </div>

      {/* Interactive Tabs */}
      <div className="grid grid-cols-4 gap-2 mb-8 bg-[#121110] p-1.5 border border-[#22201D]">
        {[
          { id: 'carat', label: '1. Carat Weight', subtitle: 'Mass & Scale' },
          { id: 'color', label: '2. Color Grade', subtitle: 'D to Fancy' },
          { id: 'clarity', label: '3. Clarity', subtitle: 'Purity & Inclusions' },
          { id: 'cut', label: '4. Cut & Fire', subtitle: 'Optical Geometry' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`py-3 px-2 sm:px-4 text-left transition-all ${
              activeTab === tab.id
                ? 'bg-[#22201D] text-[#F3EFEA] border-l-2 border-[#C5A880]'
                : 'text-[#8C7A6B] hover:text-[#B8B2A9]'
            }`}
          >
            <div className="font-serif text-sm sm:text-base font-medium">{tab.label}</div>
            <div className="text-[10px] uppercase tracking-wider text-[#9E978E] hidden sm:block mt-0.5">
              {tab.subtitle}
            </div>
          </button>
        ))}
      </div>

      {/* Main Interactive Stage */}
      <div className="bg-[#121110] border border-[#22201D] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left: Gemstone Visualizer (lg:col-span-6) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 bg-[#090807] border border-[#1F1E1B] min-h-[340px] relative overflow-hidden">
          {/* Subtle light refraction gradient */}
          <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-[#C5A880]/10 via-transparent to-transparent opacity-40" />

          {/* Dynamic Faceted Diamond Illustration */}
          <div
            className="relative flex items-center justify-center transition-all duration-300"
            style={{
              transform: `scale(${activeTab === 'carat' ? 0.7 + (caratValue / 5) * 0.8 : 1.15})`,
            }}
          >
            {/* Diamond Gem Silhouette */}
            <div
              className={`relative w-40 h-40 rounded-full bg-gradient-to-br ${getColorTint()} shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center justify-center border border-white/40 transition-colors duration-500`}
            >
              {/* Facet lines */}
              <div className="absolute inset-4 border border-white/50 rotate-45" />
              <div className="absolute inset-6 border border-white/40 rotate-12" />
              <div className="absolute inset-8 border border-white/60 rotate-45" />
              <div className="w-12 h-12 bg-white/70 rotate-45 blur-[1px]" />

              {/* Dynamic Inclusions if in Clarity Tab */}
              {activeTab === 'clarity' && getInclusions()}
            </div>
          </div>

          {/* Dynamic Visualizer Readout */}
          <div className="mt-8 text-center z-10">
            {activeTab === 'carat' && (
              <div className="text-xs text-[#C5A880] tracking-widest font-mono">
                {caratValue.toFixed(2)} Carats · ~{(caratValue * 2.8 + 3.8).toFixed(1)} mm Diameter
              </div>
            )}
            {activeTab === 'color' && (
              <div className="text-xs text-[#C5A880] tracking-widest font-mono">
                {colorGrade === 'Fancy' ? 'Natural Fancy Intense Yellow' : `Grade ${colorGrade} · ${colorGrade === 'D' ? 'Pure Colorless' : colorGrade === 'E' ? 'Exceptional White' : colorGrade === 'G' ? 'Rare White' : 'Slight Tint'}`}
              </div>
            )}
            {activeTab === 'clarity' && (
              <div className="text-xs text-[#C5A880] tracking-widest font-mono">
                {clarityGrade === 'FL' ? 'Flawless (No internal blemishes under 10x)' : clarityGrade === 'VVS1' ? 'Very Very Slightly Included' : clarityGrade === 'VS1' ? 'Very Slightly Included' : 'Slightly Included'}
              </div>
            )}
            {activeTab === 'cut' && (
              <div className="text-xs text-[#C5A880] tracking-widest font-mono">
                {cutType} · 57 Facet Brilliant Symmetry
              </div>
            )}
          </div>
        </div>

        {/* Right: Interactive Controls (lg:col-span-6) */}
        <div className="lg:col-span-6 space-y-6">
          {activeTab === 'carat' && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs tracking-wider uppercase text-[#C5A880]">Adjust Carat Mass</span>
                <span className="font-mono text-lg text-[#F3EFEA] font-medium">{caratValue.toFixed(2)} ct</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="5.0"
                step="0.25"
                value={caratValue}
                onChange={(e) => setCaratValue(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-[#252320] accent-[#C5A880] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#8C7A6B] mt-2">
                <span>1.00 ct</span>
                <span>2.00 ct</span>
                <span>3.50 ct (Solitaire)</span>
                <span>5.00 ct (Museum)</span>
              </div>
              <p className="mt-6 text-xs text-[#9E978E] leading-relaxed">
                Carat measures the physical weight of a diamond (1 carat = 0.200 grams). Because larger rough crystals are exponentially rarer in nature, value escalates geometrically rather than linearly with carat mass.
              </p>
            </div>
          )}

          {activeTab === 'color' && (
            <div>
              <div className="text-xs tracking-wider uppercase text-[#C5A880] mb-3">
                Select Color Spectrum
              </div>
              <div className="grid grid-cols-5 gap-2">
                {(['D', 'E', 'G', 'J', 'Fancy'] as const).map((grade) => (
                  <button
                    key={grade}
                    onClick={() => setColorGrade(grade)}
                    className={`py-3 px-1 text-center border transition-all ${
                      colorGrade === grade
                        ? 'bg-[#C5A880] text-[#0B0A09] border-[#C5A880] font-bold'
                        : 'bg-[#181715] border-[#2A2825] text-[#9E978E] hover:border-[#8C7A6B]'
                    }`}
                  >
                    <div className="font-serif text-lg">{grade}</div>
                    <div className="text-[9px] uppercase tracking-tighter mt-1">
                      {grade === 'D' ? 'Flawless' : grade === 'Fancy' ? 'Yellow' : 'Fine'}
                    </div>
                  </button>
                ))}
              </div>
              <p className="mt-6 text-xs text-[#9E978E] leading-relaxed">
                D is the highest color grade attainable, signifying an entirely colorless body devoid of nitrogen impurities. Maison Valoire accepts exclusively D, E, F, and certified Fancy Intense natural hues.
              </p>
            </div>
          )}

          {activeTab === 'clarity' && (
            <div>
              <div className="text-xs tracking-wider uppercase text-[#C5A880] mb-3">
                Select Clarity Scale
              </div>
              <div className="grid grid-cols-4 gap-2">
                {(['FL', 'VVS1', 'VS1', 'SI1'] as const).map((clarity) => (
                  <button
                    key={clarity}
                    onClick={() => setClarityGrade(clarity)}
                    className={`py-3 px-1 text-center border transition-all ${
                      clarityGrade === clarity
                        ? 'bg-[#C5A880] text-[#0B0A09] border-[#C5A880] font-bold'
                        : 'bg-[#181715] border-[#2A2825] text-[#9E978E] hover:border-[#8C7A6B]'
                    }`}
                  >
                    <div className="font-serif text-lg">{clarity}</div>
                    <div className="text-[9px] uppercase tracking-tighter mt-1">
                      {clarity === 'FL' ? 'Flawless' : clarity === 'VVS1' ? 'Ultra Clean' : 'Eye Clean'}
                    </div>
                  </button>
                ))}
              </div>
              <p className="mt-6 text-xs text-[#9E978E] leading-relaxed">
                Clarity assesses microscopic internal inclusions and surface blemishes. An FL (Flawless) stone has zero visible characteristics under 10x binocular gemological examination.
              </p>
            </div>
          )}

          {activeTab === 'cut' && (
            <div>
              <div className="text-xs tracking-wider uppercase text-[#C5A880] mb-3">
                Cut Grading Standard
              </div>
              <div className="space-y-2">
                {(['Triple Excellent', 'Very Good', 'Good'] as const).map((cut) => (
                  <button
                    key={cut}
                    onClick={() => setCutType(cut)}
                    className={`w-full p-3 text-left border flex items-center justify-between transition-colors ${
                      cutType === cut
                        ? 'bg-[#22201D] border-[#C5A880] text-[#F3EFEA]'
                        : 'bg-[#181715] border-[#2A2825] text-[#8C7A6B] hover:text-[#F3EFEA]'
                    }`}
                  >
                    <div>
                      <div className="font-serif text-sm font-medium">{cut}</div>
                      <div className="text-[11px] text-[#9E978E]">
                        {cut === 'Triple Excellent'
                          ? 'Optimal internal total light reflection (100% fire return)'
                          : 'Minor light leakage through side pavilion'}
                      </div>
                    </div>
                    {cutType === cut && <Sparkles className="w-4 h-4 text-[#C5A880]" />}
                  </button>
                ))}
              </div>
              <p className="mt-6 text-xs text-[#9E978E] leading-relaxed">
                The cut dictates how light bounces internally between facets. An Excellent cut produces maximum scintillation, white brightness (brilliance), and spectral rainbow flashes (fire).
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
