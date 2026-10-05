import React, { useState, useMemo } from 'react';
import { JewelleryPiece } from '../types/jewellery';
import { Search, ZoomIn, Bookmark, Check, SlidersHorizontal, Sparkles } from 'lucide-react';

interface JewelleryGridProps {
  pieces: JewelleryPiece[];
  selectedCurrency: 'USD' | 'EUR' | 'GBP';
  onSelectPiece: (piece: JewelleryPiece) => void;
  onToggleDossierItem: (piece: JewelleryPiece) => void;
  isPieceInDossier: (pieceId: string) => boolean;
}

export const JewelleryGrid: React.FC<JewelleryGridProps> = ({
  pieces,
  selectedCurrency,
  onSelectPiece,
  onToggleDossierItem,
  isPieceInDossier,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMetal, setSelectedMetal] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'carat_desc' | 'valuation_desc'>('featured');

  // Filter & Sort Logic
  const filteredPieces = useMemo(() => {
    return pieces
      .filter((piece) => {
        // Category filter
        if (selectedCategory !== 'all') {
          if (selectedCategory === 'rings' && piece.category !== 'rings') return false;
          if (selectedCategory === 'necklaces' && piece.category !== 'necklaces' && piece.category !== 'high_joaillerie') return false;
          if (selectedCategory === 'earrings' && piece.category !== 'earrings') return false;
          if (selectedCategory === 'bracelets' && piece.category !== 'bracelets') return false;
        }

        // Metal filter
        if (selectedMetal !== 'all') {
          if (piece.metal !== selectedMetal) return false;
        }

        // Search query
        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase();
          const matchTitle = piece.title.toLowerCase().includes(query);
          const matchGem = piece.primaryGemstone.type.toLowerCase().includes(query);
          const matchCut = piece.primaryGemstone.cut.toLowerCase().includes(query);
          const matchCollection = piece.collection.toLowerCase().includes(query);
          if (!matchTitle && !matchGem && !matchCut && !matchCollection) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'carat_desc') {
          return b.totalCaratWeight - a.totalCaratWeight;
        }
        if (sortBy === 'valuation_desc') {
          return b.valuationUSD - a.valuationUSD;
        }
        return 0; // default featured order
      });
  }, [pieces, selectedCategory, selectedMetal, searchQuery, sortBy]);

  const formatPrice = (piece: JewelleryPiece) => {
    if (selectedCurrency === 'EUR') {
      return `€ ${piece.valuationEUR.toLocaleString()}`;
    }
    if (selectedCurrency === 'GBP') {
      return `£ ${piece.valuationGBP.toLocaleString()}`;
    }
    return `$ ${piece.valuationUSD.toLocaleString()}`;
  };

  return (
    <section id="creations" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#252320] pb-8">
        <div>
          {/* Zero-Pill Unboxed Sub-Header */}
          <div className="flex items-center gap-2 text-xs tracking-[0.24em] uppercase text-[#C5A880] mb-2">
            <span>High Joaillerie Collection</span>
            <span aria-hidden="true">·</span>
            <span>Handmade In Paris</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#F9F7F4] tracking-[0.03em]">
            The Curated Showcase
          </h2>
        </div>

        {/* Refined Search input */}
        <div className="mt-6 md:mt-0 relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8C7A6B]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search cut, diamond, emerald..."
            className="w-full bg-[#141311] border border-[#2A2825] pl-9 pr-4 py-2 text-xs text-[#F3EFEA] placeholder-[#736E67] focus:border-[#C5A880] focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Filter Toolbar: Functional Segmented Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#1A1917]">
        {/* Category Segmented Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#121110] border border-[#22201D]">
          {[
            { id: 'all', label: 'All Creations' },
            { id: 'rings', label: 'Solitaires & Rings' },
            { id: 'necklaces', label: 'High Necklaces' },
            { id: 'earrings', label: 'Ear Pendants' },
            { id: 'bracelets', label: 'Cuffs & Bracelets' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs tracking-wider uppercase transition-colors whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-[#22201D] text-[#F3EFEA] font-medium shadow-sm'
                  : 'text-[#9E978E] hover:text-[#F3EFEA]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Metal & Sort dropdowns */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 text-xs text-[#9E978E]">
            <span className="whitespace-nowrap">Metal:</span>
            <select
              value={selectedMetal}
              onChange={(e) => setSelectedMetal(e.target.value)}
              className="bg-[#141311] border border-[#2A2825] px-2.5 py-1.5 text-xs text-[#F3EFEA] focus:border-[#C5A880] focus:outline-none"
            >
              <option value="all">All Metals</option>
              <option value="Platinum 950">Platinum 950</option>
              <option value="18k Yellow Gold">18k Yellow Gold</option>
              <option value="18k White Gold">18k White Gold</option>
              <option value="18k Rose Gold">18k Rose Gold</option>
            </select>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#9E978E]">
            <span className="whitespace-nowrap">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#141311] border border-[#2A2825] px-2.5 py-1.5 text-xs text-[#F3EFEA] focus:border-[#C5A880] focus:outline-none"
            >
              <option value="featured">Featured Atelier Order</option>
              <option value="carat_desc">Carat Weight (Highest)</option>
              <option value="valuation_desc">Valuation (Highest)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid: 3-column desktop layout with generous gap-8 */}
      {filteredPieces.length === 0 ? (
        <div className="text-center py-20 bg-[#121110] border border-[#22201D] p-8">
          <p className="font-serif text-xl text-[#F9F7F4] mb-2">No creations found matching this criteria</p>
          <p className="text-xs text-[#9E978E] mb-6">Clear your search filters or contact our master jeweler for a bespoke commission.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedMetal('all');
              setSearchQuery('');
            }}
            className="px-5 py-2 text-xs uppercase tracking-widest bg-[#C5A880] text-[#0B0A09]"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPieces.map((piece) => {
            const inDossier = isPieceInDossier(piece.id);

            return (
              <article
                key={piece.id}
                className="group relative bg-[#121110] border border-[#22201D] hover:border-[#C5A880]/50 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Product Image Stage: 70% card height */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0A0908] cursor-pointer" onClick={() => onSelectPiece(piece)}>
                  <img
                    src={piece.image}
                    alt={`${piece.title} - ${piece.primaryGemstone.type}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-black/20 opacity-60" />

                  {/* Top Floating Actions: Zero-Pill Unboxed tag & Loupe trigger */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
                    <span className="text-[11px] tracking-[0.16em] uppercase font-mono text-[#E8D9C4] bg-[#0B0A09]/80 px-2 py-0.5 backdrop-blur-sm border border-[#3A3733]/50">
                      {piece.editionLimit || 'Pièce Unique'}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectPiece(piece);
                      }}
                      className="pointer-events-auto p-2 bg-[#0B0A09]/80 hover:bg-[#C5A880] hover:text-[#0B0A09] text-[#F3EFEA] backdrop-blur-sm transition-colors"
                      title="Inspect piece in High-Res Loupe"
                      aria-label="Inspect piece in High-Res Loupe"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Quick Action Overlay on Hover */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#0B0A09] via-[#0B0A09]/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between">
                    <span className="text-[11px] tracking-[0.14em] uppercase text-[#C5A880]">
                      Click to inspect details & loupe
                    </span>
                    <ZoomIn className="w-3.5 h-3.5 text-[#C5A880]" />
                  </div>
                </div>

                {/* Card Content & Metadata */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Collection & Category Kicker */}
                    <div className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-[#8C7A6B] mb-1.5">
                      <span>{piece.collection}</span>
                      <span aria-hidden="true">·</span>
                      <span>{piece.metal}</span>
                    </div>

                    {/* Product Name */}
                    <h3
                      onClick={() => onSelectPiece(piece)}
                      className="font-serif text-2xl text-[#F9F7F4] hover:text-[#C5A880] transition-colors cursor-pointer mb-2 font-normal"
                    >
                      {piece.title}
                    </h3>

                    {/* Unboxed Gemological Metadata */}
                    <div className="flex items-center gap-2 text-xs text-[#9E978E] font-light mb-4">
                      <span>{piece.primaryGemstone.cut}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums text-[#D8C2A3]">{piece.primaryGemstone.carat} ct</span>
                      {piece.primaryGemstone.clarity && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>{piece.primaryGemstone.clarity}</span>
                        </>
                      )}
                    </div>

                    <p className="text-xs text-[#8C8780] line-clamp-2 leading-relaxed mb-6 font-light">
                      {piece.description}
                    </p>
                  </div>

                  {/* Price & Contiguous Dossier Button */}
                  <div className="pt-4 border-t border-[#1F1E1B] flex items-center justify-between">
                    <div>
                      <div className="text-[10px] tracking-[0.16em] uppercase text-[#8C7A6B]">Valuation</div>
                      <div className="font-mono tabular-nums text-sm sm:text-base text-[#F3EFEA] font-medium">
                        {formatPrice(piece)}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onToggleDossierItem(piece)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 text-xs tracking-wider uppercase transition-all ${
                          inDossier
                            ? 'bg-[#C5A880] text-[#0B0A09] font-medium'
                            : 'border border-[#3A3733] text-[#B8B2A9] hover:border-[#C5A880] hover:text-[#F3EFEA]'
                        }`}
                        title={inDossier ? 'Saved in your private dossier' : 'Save to private dossier'}
                      >
                        {inDossier ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Saved</span>
                          </>
                        ) : (
                          <>
                            <Bookmark className="w-3.5 h-3.5" />
                            <span>Save</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => onSelectPiece(piece)}
                        className="px-3 py-1.5 text-xs tracking-wider uppercase bg-[#1C1B18] hover:bg-[#2A2824] text-[#E8D9C4] border border-[#2E2C28] transition-colors"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};
