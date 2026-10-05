import React, { useState, useEffect } from 'react';
import { SALON_LOCATIONS } from '../data/pieces';
import { JewelleryPiece } from '../types/jewellery';
import { X, Calendar, Clock, MapPin, CheckCircle2, ShieldCheck, Sparkles, Printer } from 'lucide-react';

interface PrivateSalonModalProps {
  isOpen: boolean;
  onClose: () => void;
  featuredPiece?: JewelleryPiece | null;
}

export const PrivateSalonModal: React.FC<PrivateSalonModalProps> = ({
  isOpen,
  onClose,
  featuredPiece,
}) => {
  const [selectedLocation, setSelectedLocation] = useState<string>('Paris');
  const [appointmentDate, setAppointmentDate] = useState<string>('2026-10-15');
  const [appointmentTime, setAppointmentTime] = useState<string>('14:30');
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [champagnePreference, setChampagnePreference] = useState<string>('Dom Pérignon Vintage');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [confirmationCode, setConfirmationCode] = useState<string>('');

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientEmail.trim()) return;

    const code = `MV-SALON-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmationCode(code);
    setIsConfirmed(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="salon-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-[#11100E] border border-[#2E2C28] w-full max-w-2xl my-auto text-[#F3EFEA] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#22201D] bg-[#0E0D0B]">
          <div className="flex items-center gap-2 text-xs tracking-[0.24em] uppercase text-[#C5A880]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Private Salon Viewing Protocol</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#9E978E] hover:text-[#F3EFEA] hover:bg-[#1E1C1A] transition-colors"
            aria-label="Close salon modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {isConfirmed ? (
            <div className="text-center py-6 space-y-6">
              <CheckCircle2 className="w-14 h-14 text-[#C5A880] mx-auto animate-bounce" />
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-[#C5A880] mb-1">
                  Private Salon Viewing Confirmed
                </div>
                <h3 className="font-serif text-3xl text-[#F9F7F4]">
                  Bienvenue, {clientName}
                </h3>
              </div>

              {/* VIP Docket Box */}
              <div className="p-6 bg-[#0B0A09] border border-[#252320] text-left space-y-3 text-xs font-mono">
                <div className="flex justify-between border-b border-[#1A1917] pb-2">
                  <span className="text-[#8C7A6B]">Confirmation Docket:</span>
                  <span className="text-[#C5A880] font-bold">{confirmationCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7A6B]">Salon Destination:</span>
                  <span className="text-[#F3EFEA]">{selectedLocation} Salon Suite</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7A6B]">Date & Scheduled Hour:</span>
                  <span className="text-[#F3EFEA]">{appointmentDate} at {appointmentTime}</span>
                </div>
                {featuredPiece && (
                  <div className="flex justify-between">
                    <span className="text-[#8C7A6B]">Reserved Specimen:</span>
                    <span className="text-[#C5A880]">{featuredPiece.title} ({featuredPiece.referenceCode})</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-[#8C7A6B]">Reception Tasting:</span>
                  <span className="text-[#F3EFEA]">{champagnePreference}</span>
                </div>
              </div>

              <p className="text-xs text-[#9E978E] font-light leading-relaxed max-w-md mx-auto">
                Your private security pass and concierge contact card have been transmitted to <span className="text-[#F3EFEA]">{clientEmail}</span>. Our Head of Salon will personally welcome you.
              </p>

              <div className="flex gap-4 pt-2">
                <button
                  onClick={handlePrint}
                  className="flex-1 py-3 text-xs tracking-wider uppercase border border-[#3A3733] text-[#F3EFEA] hover:border-[#C5A880] transition-colors flex items-center justify-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Salon Pass</span>
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-3 text-xs tracking-wider uppercase bg-[#C5A880] text-[#0B0A09] hover:bg-[#d8c2a3] font-medium"
                >
                  Close & Return
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 id="salon-modal-title" className="font-serif text-2xl text-[#F9F7F4] mb-1 font-normal">
                  Reserve a Private Viewing Salon
                </h3>
                <p className="text-xs text-[#9E978E] font-light">
                  Experience our high creations in complete confidentiality with a dedicated Master Gemologist.
                </p>
              </div>

              {/* If booked for a specific piece */}
              {featuredPiece && (
                <div className="p-3 bg-[#151412] border border-[#2B2925] flex items-center gap-3">
                  <img
                    src={featuredPiece.image}
                    alt={featuredPiece.title}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 object-cover border border-[#252320]"
                  />
                  <div>
                    <div className="text-[10px] tracking-wider uppercase text-[#C5A880]">
                      Viewing Specimen Requested
                    </div>
                    <div className="font-serif text-sm text-[#F3EFEA]">{featuredPiece.title}</div>
                    <div className="text-[11px] text-[#8C7A6B] font-mono">{featuredPiece.referenceCode}</div>
                  </div>
                </div>
              )}

              {/* Salon Location Picker */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-2">
                  Select Salon Destination
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {SALON_LOCATIONS.map((loc) => (
                    <button
                      key={loc.city}
                      type="button"
                      onClick={() => setSelectedLocation(loc.city)}
                      className={`p-2.5 text-center border transition-all ${
                        selectedLocation === loc.city
                          ? 'bg-[#C5A880] text-[#0B0A09] border-[#C5A880] font-bold'
                          : 'bg-[#141311] border-[#2A2825] text-[#9E978E] hover:border-[#8C7A6B]'
                      }`}
                    >
                      <div className="text-xs font-serif">{loc.city}</div>
                      <div className="text-[9px] uppercase tracking-tighter mt-0.5">
                        {loc.city === 'Digital Haute Salon' ? 'Encrypted 4K' : 'Salon Suite'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time Picker */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8C7A6B] mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    className="w-full bg-[#141311] border border-[#2A2825] px-3 py-2 text-xs text-[#F3EFEA] focus:border-[#C5A880] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8C7A6B] mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                    Time Slot
                  </label>
                  <select
                    value={appointmentTime}
                    onChange={(e) => setAppointmentTime(e.target.value)}
                    className="w-full bg-[#141311] border border-[#2A2825] px-3 py-2 text-xs text-[#F3EFEA] focus:border-[#C5A880] focus:outline-none"
                  >
                    <option value="11:00">11:00 AM (Morning Salon)</option>
                    <option value="14:30">02:30 PM (Afternoon Salon)</option>
                    <option value="17:00">05:00 PM (Sunset Tasting)</option>
                    <option value="18:30">06:30 PM (Nocturne Viewing)</option>
                  </select>
                </div>
              </div>

              {/* Client Credentials */}
              <div className="space-y-3 pt-2 border-t border-[#1C1A17]">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8C7A6B] mb-1">
                    Your Full Name & Honorific
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Countess Isabelle de Valois"
                    className="w-full bg-[#141311] border border-[#2A2825] px-3 py-2 text-xs text-[#F3EFEA] focus:border-[#C5A880] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8C7A6B] mb-1">
                      Direct Email
                    </label>
                    <input
                      type="email"
                      required
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="isabelle@valois-estate.com"
                      className="w-full bg-[#141311] border border-[#2A2825] px-3 py-2 text-xs text-[#F3EFEA] focus:border-[#C5A880] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8C7A6B] mb-1">
                      Direct Contact Phone
                    </label>
                    <input
                      type="tel"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="+33 6 12 34 56 78"
                      className="w-full bg-[#141311] border border-[#2A2825] px-3 py-2 text-xs text-[#F3EFEA] focus:border-[#C5A880] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8C7A6B] mb-1">
                    Reception Beverage Service
                  </label>
                  <select
                    value={champagnePreference}
                    onChange={(e) => setChampagnePreference(e.target.value)}
                    className="w-full bg-[#141311] border border-[#2A2825] px-3 py-2 text-xs text-[#F3EFEA] focus:border-[#C5A880] focus:outline-none"
                  >
                    <option value="Dom Pérignon Vintage">Dom Pérignon Vintage Brut</option>
                    <option value="Krug Grande Cuvée">Krug Grande Cuvée</option>
                    <option value="Ruinart Blanc de Blancs">Ruinart Blanc de Blancs</option>
                    <option value="Mariage Frères Grand Cru Tea">Mariage Frères Grand Cru Artisan Tea</option>
                    <option value="Sparkling Mineral Water">Pure Sparkling Mineral Spring Water</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8C7A6B] mb-1">
                    Bespoke Requests or Diamond Desiderata
                  </label>
                  <textarea
                    rows={2}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="Specific carat size preferences, anniversary dates, security escort details..."
                    className="w-full bg-[#141311] border border-[#2A2825] px-3 py-2 text-xs text-[#F3EFEA] focus:border-[#C5A880] focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 text-xs tracking-[0.2em] uppercase font-medium bg-[#C5A880] text-[#0B0A09] hover:bg-[#d8c2a3] transition-colors font-sans"
              >
                Confirm Private Salon Reservation
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
