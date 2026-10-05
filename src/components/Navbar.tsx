import React, { useState, useEffect } from 'react';
import { Bookmark, Sparkles, Volume2, VolumeX, Menu, X } from 'lucide-react';

interface NavbarProps {
  dossierCount: number;
  onOpenDossier: () => void;
  onOpenSalonModal: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  dossierCount,
  onOpenDossier,
  onOpenSalonModal,
  soundEnabled,
  onToggleSound
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0A09]/90 backdrop-blur-md border-b border-[#252320] py-3.5 shadow-xl'
          : 'bg-gradient-to-b from-[#0B0A09]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark in display face */}
        <a
          href="#"
          className="font-serif text-2xl sm:text-3xl tracking-[0.22em] text-[#F3EFEA] hover:text-[#C5A880] transition-colors uppercase whitespace-nowrap"
        >
          Maison Valoire
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-[0.16em] uppercase text-[#B8B2A9]">
          <a
            href="#creations"
            className="hover:text-[#F3EFEA] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#C5A880] after:transition-all after:duration-200"
          >
            Creations
          </a>
          <a
            href="#gemological-dossier"
            className="hover:text-[#F3EFEA] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#C5A880] after:transition-all after:duration-200"
          >
            The 4Cs Guide
          </a>
          <a
            href="#atelier"
            className="hover:text-[#F3EFEA] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#C5A880] after:transition-all after:duration-200"
          >
            The Atelier
          </a>
          <a
            href="#salons"
            className="hover:text-[#F3EFEA] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#C5A880] after:transition-all after:duration-200"
          >
            Salons
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Subtle Ambient Sound Toggle */}
          <button
            onClick={onToggleSound}
            title={soundEnabled ? 'Mute crystalline ambient chime' : 'Enable crystalline ambient chime'}
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-[#252320] text-[#B8B2A9] hover:text-[#C5A880] hover:border-[#C5A880]/50 transition-colors"
            aria-label="Sound ambiance toggle"
          >
            {soundEnabled ? (
              <Volume2 className="w-3.5 h-3.5" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 opacity-60" />
            )}
          </button>

          {/* Private Dossier Drawer Button */}
          <button
            onClick={onOpenDossier}
            className="relative flex items-center gap-2 px-3 py-2 text-xs tracking-wider uppercase text-[#F3EFEA] hover:text-[#C5A880] transition-colors"
            title="Curated Dossier (Saved Pieces & Salon Inquiry)"
          >
            <Bookmark className="w-4 h-4 text-[#C5A880]" />
            <span className="hidden sm:inline font-sans text-[12px] tracking-[0.14em]">Dossier</span>
            {dossierCount > 0 && (
              <span className="w-4 h-4 text-[10px] font-mono tabular-nums flex items-center justify-center rounded-full bg-[#C5A880] text-[#0B0A09] font-bold">
                {dossierCount}
              </span>
            )}
          </button>

          {/* Primary Action Button: Private Viewing */}
          <button
            onClick={onOpenSalonModal}
            className="px-4 py-2 text-xs tracking-[0.18em] uppercase font-medium text-[#0B0A09] bg-[#C5A880] hover:bg-[#d8c2a3] transition-colors rounded-none whitespace-nowrap active:scale-[0.98]"
          >
            Private Salon
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#F3EFEA] p-1.5 focus-visible:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0A09] border-b border-[#252320] px-6 py-5 space-y-4">
          <nav className="flex flex-col gap-4 text-xs tracking-[0.18em] uppercase text-[#B8B2A9]">
            <a
              href="#creations"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#F3EFEA] transition-colors py-1"
            >
              Creations
            </a>
            <a
              href="#gemological-dossier"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#F3EFEA] transition-colors py-1"
            >
              The 4Cs Guide
            </a>
            <a
              href="#atelier"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#F3EFEA] transition-colors py-1"
            >
              The Atelier
            </a>
            <a
              href="#salons"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#F3EFEA] transition-colors py-1"
            >
              Salons
            </a>
          </nav>

          <div className="pt-3 border-t border-[#1F1E1B] flex items-center justify-between">
            <button
              onClick={() => {
                onToggleSound();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 text-xs text-[#B8B2A9]"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[#C5A880]" /> : <VolumeX className="w-4 h-4" />}
              <span>{soundEnabled ? 'Atelier Sound Active' : 'Enable Atelier Sound'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
