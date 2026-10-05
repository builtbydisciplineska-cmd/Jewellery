import React, { useState, useRef } from 'react';
import { JewelleryPiece } from '../types/jewellery';
import { X, ZoomIn, Bookmark, Check, ShieldCheck, Gem, Sparkles, Scale, Info, MapPin } from 'lucide-react';

interface ProductDetailModalProps {
  piece: JewelleryPiece | null;
  onClose: () => void;
  selectedCurrency: 'USD' | 'EUR' | 'GBP';
  onCurrencyChange: (currency: 'USD' | 'EUR' | 'GBP') => void;
  onAddToDossier: (piece: JewelleryPiece, size?: string, customEngraving?: string) => void;
  isPieceInDossier: boolean;
  onBookSalonForPiece: (piece: JewelleryPiece) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  piece,
  onClose,
  selectedCurrency,
  onCurrencyChange,
  onAddToDossier,
  isPieceInDossier,
  onBookSalonForPiece,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(
    piece?.availableSizes ? piece.availableSizes[1] || piece.availableSizes[0] : ''
  );
  const [engravingText, setEngravingText] = useState<string>('');
  const [showSizeGuide, setShowSizeGuide] = useState<boolean>(false);
  const [loupeActive, setLoupeActive] = useState<boolean>(false);
  const [loupePos, setLoupePos] = useState<{ x: number; y: number; bgX: number; bgY: number }>({
    x: 0,
    y: 0,
    bgX: 0,
    bgY: 0,
  });

  const imageContainerRef = useRef<HTMLDivElement>(null);

  if (!piece) return null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // percentage
    const bgX = (x / rect.width) * 100;
    const bgY = (y / rect.height) * 100;

    setLoupePos({ x, y, bgX, bgY });
  };

  const formatPrice = () => {
    if (selectedCurrency === 'EUR') return `€ ${piece.valuationEUR.toLocaleString()}`;
    if (selectedCurrency === 'GBP') return `£ ${piece.valuationGBP.toLocaleString()}`;
    return `$ ${piece.valuationUSD.toLocaleString()}`;
  };

  const handleSaveToDossier = () => {
    onAddToDossier(piece, selectedSize, engravingText);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-piece-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-[#11100E] border border-[#2E2C28] w-full max-w-5xl my-auto text-[#F3EFEA] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#22201D] bg-[#0E0D0B]">
          <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#C5A880]">
            <span>{piece.collection}</span>
            <span aria-hidden="true">/</span>
            <span className="text-[#9E978E]">{piece.referenceCode}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#9E978E] hover:text-[#F3EFEA] hover:bg-[#1E1C1A] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Two-column layout (Gallery / Interactive Loupe Left, Specs Module Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto flex-1">
          {/* Left Column: Interactive Loupe Stage (lg:col-span-7) */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-[#090807] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#22201D]">
            <div>
              {/* Interactive Image Container */}
              <div
                ref={imageContainerRef}
                onMouseEnter={() => setLoupeActive(true)}
                onMouseLeave={() => setLoupeActive(false)}
                onMouseMove={handleMouseMove}
                className="relative aspect-square sm:aspect-[4/3] w-full overflow-hidden cursor-crosshair bg-[#050504] border border-[#1E1C1A]"
              >
                <img
                  src={piece.image}
                  alt={piece.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />

                {/* Floating Loupe Magnifier Lens */}
                {loupeActive && (
                  <div
                    className="pointer-events-none absolute w-48 h-48 rounded-full border-2 border-[#C5A880] shadow-[0_0_25px_rgba(0,0,0,0.8)] overflow-hidden hidden sm:block"
                    style={{
                      left: `${loupePos.x - 96}px`,
                      top: `${loupePos.y - 96}px`,
                      backgroundImage: `url(${piece.image})`,
                      backgroundPosition: `${loupePos.bgX}% ${loupePos.bgY}%`,
                      backgroundSize: '350%',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    {/* Crosshair guide inside the loupe */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                      <div className="w-full h-[1px] bg-[#C5A880]" />
                      <div className="h-full w-[1px] bg-[#C5A880] absolute" />
                    </div>
                  </div>
                )}

                {/* Loupe Instruction hint */}
                <div className="absolute bottom-3 left-3 bg-[#0B0A09]/80 backdrop-blur-sm px-2.5 py-1 text-[11px] text-[#C5A880] flex items-center gap-1.5 border border-[#3A3733]/40">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Hover across stone to activate 3.5x optical loupe</span>
                </div>
              </div>

              {/* Gemological Certificate Badge */}
              <div className="mt-4 p-3.5 bg-[#141311] border border-[#262421] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                  <div>
                    <div className="text-xs font-serif text-[#F3EFEA]">
                      {piece.gemologicalDossier.certificateAuthority} Verified Dossier
                    </div>
                    <div className="text-[11px] text-[#9E978E] font-mono">
                      Report #{piece.gemologicalDossier.certificateNumber}
                    </div>
                  </div>
                </div>
                <span className="text-[11px] text-[#C5A880] tracking-wider uppercase">
                  {piece.gemologicalDossier.cutGrade}
                </span>
              </div>
            </div>

            {/* Atelier Craftsmanship Note */}
            <div className="mt-6 pt-4 border-t border-[#1C1A17] text-xs text-[#9E978E] leading-relaxed">
              <span className="text-[#C5A880] uppercase tracking-wider block mb-1 text-[11px]">
                Atelier Master Note
              </span>
              <p className="font-light italic">{piece.atelierNote}</p>
            </div>
          </div>

          {/* Right Column: Contiguous Purchase & Specification Module (lg:col-span-5) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#11100E]">
            <div className="space-y-6">
              {/* Title & Titles */}
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-[#8C7A6B] mb-1">
                  {piece.frenchTitle}
                </div>
                <h2 id="modal-piece-title" className="font-serif text-3xl text-[#F9F7F4] font-normal leading-tight">
                  {piece.title}
                </h2>
                <div className="text-xs text-[#9E978E] mt-1.5 flex items-center gap-2">
                  <span>{piece.metalPurity}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#C5A880]">{piece.editionLimit || 'Unique Specimen'}</span>
                </div>
              </div>

              {/* Valuation & Currency Switcher */}
              <div className="p-3.5 bg-[#171614] border border-[#2A2825] flex items-center justify-between">
                <div>
                  <div className="text-[10px] tracking-[0.18em] uppercase text-[#8C7A6B]">Estimated Valuation</div>
                  <div className="font-mono text-xl sm:text-2xl text-[#F9F7F4] font-medium tracking-tight">
                    {formatPrice()}
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-[#0E0D0B] p-1 border border-[#22201D]">
                  {(['USD', 'EUR', 'GBP'] as const).map((curr) => (
                    <button
                      key={curr}
                      onClick={() => onCurrencyChange(curr)}
                      className={`px-2 py-0.5 text-[10px] font-mono transition-colors ${
                        selectedCurrency === curr ? 'bg-[#C5A880] text-[#0B0A09] font-bold' : 'text-[#8C7A6B]'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>

              {/* Gemological Dossier Breakdown */}
              <div className="border border-[#22201D] divide-y divide-[#1D1B18] text-xs">
                <div className="p-2.5 bg-[#141311] font-serif text-[#E8D9C4] flex items-center justify-between">
                  <span>Gemological Specifications</span>
                  <Gem className="w-3.5 h-3.5 text-[#C5A880]" />
                </div>
                <div className="p-2.5 flex justify-between">
                  <span className="text-[#8C7A6B]">Primary Gemstone</span>
                  <span className="text-[#F3EFEA] font-medium">{piece.primaryGemstone.type}</span>
                </div>
                <div className="p-2.5 flex justify-between">
                  <span className="text-[#8C7A6B]">Carat Weight</span>
                  <span className="text-[#F3EFEA] font-mono">{piece.primaryGemstone.carat} Carats (Total: {piece.totalCaratWeight} ct)</span>
                </div>
                <div className="p-2.5 flex justify-between">
                  <span className="text-[#8C7A6B]">Cut & Proportions</span>
                  <span className="text-[#F3EFEA]">{piece.primaryGemstone.cut}</span>
                </div>
                {piece.primaryGemstone.color && (
                  <div className="p-2.5 flex justify-between">
                    <span className="text-[#8C7A6B]">Color Grade</span>
                    <span className="text-[#F3EFEA]">{piece.primaryGemstone.color}</span>
                  </div>
                )}
                {piece.primaryGemstone.clarity && (
                  <div className="p-2.5 flex justify-between">
                    <span className="text-[#8C7A6B]">Clarity Grade</span>
                    <span className="text-[#F3EFEA] font-mono">{piece.primaryGemstone.clarity}</span>
                  </div>
                )}
                <div className="p-2.5 flex justify-between">
                  <span className="text-[#8C7A6B]">Origin / Provenance</span>
                  <span className="text-[#F3EFEA]">{piece.primaryGemstone.origin}</span>
                </div>
                <div className="p-2.5 flex justify-between">
                  <span className="text-[#8C7A6B]">Dimensions</span>
                  <span className="text-[#F3EFEA] font-mono">{piece.gemologicalDossier.dimensions}</span>
                </div>
              </div>

              {/* Ring Size Option (if ring) */}
              {piece.availableSizes && piece.availableSizes.length > 0 && (
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-[#8C7A6B] tracking-wider uppercase text-[11px]">Select Size</span>
                    <button
                      onClick={() => setShowSizeGuide(!showSizeGuide)}
                      className="text-[#C5A880] hover:underline text-[11px]"
                    >
                      {showSizeGuide ? 'Hide Sizing Table' : 'Size Guide Table'}
                    </button>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {piece.availableSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-1.5 text-xs font-mono border transition-colors ${
                          selectedSize === size
                            ? 'bg-[#C5A880] text-[#0B0A09] border-[#C5A880] font-bold'
                            : 'bg-[#141311] border-[#2A2825] text-[#9E978E] hover:border-[#8C7A6B]'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>

                  {/* Expandable Size Guide */}
                  {showSizeGuide && (
                    <div className="mt-2 p-3 bg-[#171614] border border-[#2B2925] text-[11px] text-[#A6A097] space-y-1">
                      <p>• US 5.0 = 49.3 mm circumference (EU 49)</p>
                      <p>• US 6.0 = 51.9 mm circumference (EU 52)</p>
                      <p>• US 7.0 = 54.4 mm circumference (EU 54)</p>
                      <p>Complimentary bespoke resizing provided in any of our 3 global salons.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Bespoke Laser Engraving Customizer */}
              <div className="p-3.5 bg-[#141311] border border-[#242220]">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-[#C5A880] tracking-wider uppercase text-[11px] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Bespoke Atelier Engraving
                  </span>
                  <span className="text-[10px] text-[#8C7A6B] font-mono">Complimentary</span>
                </div>
                <input
                  type="text"
                  maxLength={18}
                  value={engravingText}
                  onChange={(e) => setEngravingText(e.target.value)}
                  placeholder="e.g. M & L · 14.02.26"
                  className="w-full bg-[#0D0C0A] border border-[#282622] px-3 py-1.5 text-xs text-[#F3EFEA] placeholder-[#66625C] focus:border-[#C5A880] focus:outline-none font-serif tracking-widest"
                />

                {/* Live Engraved Band Simulation */}
                {engravingText && (
                  <div className="mt-2.5 p-2 bg-gradient-to-r from-[#201E1A] via-[#332E27] to-[#201E1A] border border-[#443D34] rounded-none text-center">
                    <div className="text-[9px] uppercase tracking-widest text-[#9E978E] mb-0.5">
                      Preview on Platinum Band
                    </div>
                    <div className="font-serif italic text-sm tracking-[0.25em] text-[#E8D9C4] drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                      {engravingText}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-[#1F1E1B] space-y-2.5 mt-6">
              <button
                onClick={handleSaveToDossier}
                className={`w-full py-3 text-xs tracking-[0.18em] uppercase transition-all flex items-center justify-center gap-2 ${
                  isPieceInDossier
                    ? 'bg-[#2E2C28] text-[#C5A880] border border-[#C5A880]/50'
                    : 'bg-[#C5A880] text-[#0B0A09] hover:bg-[#d8c2a3] font-medium'
                }`}
              >
                {isPieceInDossier ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Updated in Private Dossier</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="w-4 h-4" />
                    <span>Add to Private Dossier</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  onClose();
                  onBookSalonForPiece(piece);
                }}
                className="w-full py-2.5 text-xs tracking-[0.18em] uppercase border border-[#3A3733] text-[#F3EFEA] hover:border-[#C5A880] hover:text-[#C5A880] transition-colors flex items-center justify-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Reserve Salon Viewing for this Piece</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
