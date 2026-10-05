import React, { useState } from 'react';
import { DossierItem, JewelleryPiece } from '../types/jewellery';
import { X, Trash2, ArrowRight, ShieldCheck, Calendar, CheckCircle2, Printer, MapPin } from 'lucide-react';

interface PrivateDossierDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: DossierItem[];
  onRemoveItem: (pieceId: string) => void;
  selectedCurrency: 'USD' | 'EUR' | 'GBP';
  onOpenSalonModal: () => void;
  onSelectPiece: (piece: JewelleryPiece) => void;
}

export const PrivateDossierDrawer: React.FC<PrivateDossierDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  selectedCurrency,
  onOpenSalonModal,
  onSelectPiece,
}) => {
  const [inquirySubmitted, setInquirySubmitted] = useState<boolean>(false);
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [salonLocation, setSalonLocation] = useState<string>('Paris Place Vendôme');
  const [reservationRef, setReservationRef] = useState<string>('');

  if (!isOpen) return null;

  const totalCarats = items.reduce((acc, item) => acc + item.piece.totalCaratWeight, 0);

  const formatPrice = (piece: JewelleryPiece) => {
    if (selectedCurrency === 'EUR') return `€ ${piece.valuationEUR.toLocaleString()}`;
    if (selectedCurrency === 'GBP') return `£ ${piece.valuationGBP.toLocaleString()}`;
    return `$ ${piece.valuationUSD.toLocaleString()}`;
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientEmail.trim()) return;

    const ref = `MV-VIP-${Math.floor(100000 + Math.random() * 900000)}`;
    setReservationRef(ref);
    setInquirySubmitted(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-title"
      className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm flex justify-end animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-[#11100E] border-l border-[#2E2C28] h-full flex flex-col justify-between shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#22201D] bg-[#0E0D0B] flex items-center justify-between">
          <div>
            <div className="text-[11px] tracking-[0.24em] uppercase text-[#C5A880]">
              Place Vendôme · Client Portfolio
            </div>
            <h2 id="dossier-title" className="font-serif text-2xl text-[#F9F7F4] font-normal">
              Private Curated Dossier
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#9E978E] hover:text-[#F3EFEA] hover:bg-[#1E1C1A] transition-colors"
            aria-label="Close dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="p-6 flex-1 overflow-y-auto space-y-6">
          {inquirySubmitted ? (
            /* Inquiry Confirmation Docket */
            <div className="bg-[#141311] border border-[#2E2C28] p-8 text-center space-y-5">
              <CheckCircle2 className="w-12 h-12 text-[#C5A880] mx-auto" />
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-[#C5A880] mb-1">
                  Private Viewing Confirmed
                </div>
                <h3 className="font-serif text-2xl text-[#F9F7F4]">Dossier Dispatched to Maitre Joaillier</h3>
              </div>

              <div className="p-4 bg-[#0B0A09] border border-[#252320] text-left space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-[#8C7A6B]">Reference Pass:</span>
                  <span className="text-[#C5A880] font-bold">{reservationRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7A6B]">Beneficiary:</span>
                  <span className="text-[#F3EFEA]">{clientName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7A6B]">Salon:</span>
                  <span className="text-[#F3EFEA]">{salonLocation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7A6B]">Curated Pieces:</span>
                  <span className="text-[#F3EFEA]">{items.length} High Joaillerie items</span>
                </div>
              </div>

              <p className="text-xs text-[#9E978E] font-light leading-relaxed">
                A private salon concierge will contact your secure email address ({clientEmail}) within 4 business hours to coordinate security arrival and champagne tasting.
              </p>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={handlePrint}
                  className="flex-1 py-2.5 text-xs tracking-wider uppercase border border-[#3A3733] text-[#F3EFEA] hover:border-[#C5A880] transition-colors flex items-center justify-center gap-2"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print VIP Pass</span>
                </button>
                <button
                  onClick={() => {
                    setInquirySubmitted(false);
                    onClose();
                  }}
                  className="flex-1 py-2.5 text-xs tracking-wider uppercase bg-[#C5A880] text-[#0B0A09]"
                >
                  Return to Salon
                </button>
              </div>
            </div>
          ) : items.length === 0 ? (
            /* Empty State */
            <div className="text-center py-20 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#181715] border border-[#2A2825] flex items-center justify-center text-[#8C7A6B]">
                <ShieldCheck className="w-6 h-6 text-[#C5A880]" />
              </div>
              <p className="font-serif text-xl text-[#F9F7F4]">Your Private Dossier is Empty</p>
              <p className="text-xs text-[#8C7A6B] max-w-xs mx-auto leading-relaxed">
                Save bespoke creations as you explore to assemble a private viewing docket for your salon appointment.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 text-xs tracking-widest uppercase bg-[#C5A880] text-[#0B0A09]"
              >
                Explore Creations
              </button>
            </div>
          ) : (
            /* Items List */
            <>
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.piece.id}
                    className="p-4 bg-[#141311] border border-[#22201D] hover:border-[#383530] transition-colors flex gap-4"
                  >
                    <img
                      src={item.piece.image}
                      alt={item.piece.title}
                      referrerPolicy="no-referrer"
                      onClick={() => {
                        onClose();
                        onSelectPiece(item.piece);
                      }}
                      className="w-20 h-20 object-cover bg-[#090807] border border-[#252320] cursor-pointer"
                    />

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <h4
                            onClick={() => {
                              onClose();
                              onSelectPiece(item.piece);
                            }}
                            className="font-serif text-lg text-[#F9F7F4] truncate hover:text-[#C5A880] cursor-pointer"
                          >
                            {item.piece.title}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.piece.id)}
                            className="text-[#736E67] hover:text-[#E05252] p-1 transition-colors"
                            title="Remove from dossier"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="text-[11px] text-[#9E978E] font-mono mt-0.5">
                          {item.piece.primaryGemstone.cut} · {item.piece.totalCaratWeight} ct · {item.piece.metal}
                        </div>

                        {item.selectedSize && (
                          <div className="text-[10px] text-[#C5A880] mt-1 font-mono">
                            Selected Size: {item.selectedSize}
                          </div>
                        )}

                        {item.customEngraving && (
                          <div className="text-[10px] text-[#D8C2A3] mt-0.5 italic font-serif">
                            Engraving: &ldquo;{item.customEngraving}&rdquo;
                          </div>
                        )}
                      </div>

                      <div className="text-xs font-mono text-[#F3EFEA] pt-2 border-t border-[#1C1A17] flex justify-between items-center mt-2">
                        <span className="text-[10px] uppercase tracking-wider text-[#8C7A6B]">Valuation</span>
                        <span>{formatPrice(item.piece)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dossier Gemological Aggregate Summary */}
              <div className="p-4 bg-[#171614] border border-[#262421] space-y-1.5 text-xs">
                <div className="text-[10px] tracking-wider uppercase text-[#C5A880]">
                  Portfolio Gemological Summary
                </div>
                <div className="flex justify-between text-[#9E978E]">
                  <span>Total Sourced Specimens:</span>
                  <span className="text-[#F3EFEA] font-mono">{items.length} Creations</span>
                </div>
                <div className="flex justify-between text-[#9E978E]">
                  <span>Total Carat Mass:</span>
                  <span className="text-[#F3EFEA] font-mono">{totalCarats.toFixed(2)} Carats</span>
                </div>
                <div className="flex justify-between text-[#9E978E]">
                  <span>Certification Authority:</span>
                  <span className="text-[#F3EFEA]">Dual GIA & Gübelin</span>
                </div>
              </div>

              {/* Dispatch to Maitre Joaillier Form */}
              <form onSubmit={handleInquirySubmit} className="pt-4 border-t border-[#22201D] space-y-3">
                <div className="text-xs uppercase tracking-wider text-[#C5A880]">
                  Book Salon Viewing for these pieces
                </div>

                <div>
                  <label className="block text-[11px] text-[#8C7A6B] mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Lady Katherine Vance"
                    className="w-full bg-[#141311] border border-[#2A2825] px-3 py-2 text-xs text-[#F3EFEA] focus:border-[#C5A880] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-[#8C7A6B] mb-1">Confidential Email</label>
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="katherine@vance-holdings.com"
                    className="w-full bg-[#141311] border border-[#2A2825] px-3 py-2 text-xs text-[#F3EFEA] focus:border-[#C5A880] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-[#8C7A6B] mb-1">Preferred Salon Location</label>
                  <select
                    value={salonLocation}
                    onChange={(e) => setSalonLocation(e.target.value)}
                    className="w-full bg-[#141311] border border-[#2A2825] px-3 py-2 text-xs text-[#F3EFEA] focus:border-[#C5A880] focus:outline-none"
                  >
                    <option value="Paris Place Vendôme">Paris · 26 Place Vendôme</option>
                    <option value="London New Bond Street">London · 14 New Bond Street</option>
                    <option value="New York Madison Avenue">New York · 712 Madison Avenue</option>
                    <option value="Digital Haute Salon">Encrypted Digital VIP Salon (4K Video)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 text-xs tracking-[0.2em] uppercase font-medium bg-[#C5A880] text-[#0B0A09] hover:bg-[#d8c2a3] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Dispatch Private Viewing Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </>
          )}
        </div>

        {/* Footer Note */}
        <div className="p-4 border-t border-[#1C1A17] bg-[#0A0908] text-center text-[10px] text-[#6E6961] tracking-wider uppercase">
          Confidential Client Protocol · Place Vendôme High Joaillerie
        </div>
      </div>
    </div>
  );
};
