import React, { useState, useEffect } from 'react';
import { HIGH_JEWELLERY_PIECES } from './data/pieces';
import { JewelleryPiece, DossierItem } from './types/jewellery';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { JewelleryGrid } from './components/JewelleryGrid';
import { ProductDetailModal } from './components/ProductDetailModal';
import { InteractiveGemGuide } from './components/InteractiveGemGuide';
import { CraftAtelierSection } from './components/CraftAtelierSection';
import { SalonsSection } from './components/SalonsSection';
import { PrivateDossierDrawer } from './components/PrivateDossierDrawer';
import { PrivateSalonModal } from './components/PrivateSalonModal';
import { Footer } from './components/Footer';
import { playLuxuryChime } from './utils/audio';

export default function App() {
  const [pieces] = useState<JewelleryPiece[]>(HIGH_JEWELLERY_PIECES);
  const [selectedPiece, setSelectedPiece] = useState<JewelleryPiece | null>(null);
  const [dossierItems, setDossierItems] = useState<DossierItem[]>(() => {
    try {
      const saved = localStorage.getItem('mv_dossier_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isDossierOpen, setIsDossierOpen] = useState<boolean>(false);
  const [isSalonModalOpen, setIsSalonModalOpen] = useState<boolean>(false);
  const [salonFeaturedPiece, setSalonFeaturedPiece] = useState<JewelleryPiece | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);

  // Sync dossier with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('mv_dossier_items', JSON.stringify(dossierItems));
    } catch {
      // quota or local storage restriction
    }
  }, [dossierItems]);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    if (nextState) {
      playLuxuryChime();
    }
  };

  const handleSelectPiece = (piece: JewelleryPiece) => {
    setSelectedPiece(piece);
    if (soundEnabled) playLuxuryChime();
  };

  const isPieceInDossier = (pieceId: string) => {
    return dossierItems.some((item) => item.piece.id === pieceId);
  };

  const handleToggleDossierItem = (piece: JewelleryPiece) => {
    if (isPieceInDossier(piece.id)) {
      setDossierItems((prev) => prev.filter((item) => item.piece.id !== piece.id));
    } else {
      const newItem: DossierItem = {
        piece,
        selectedSize: piece.availableSizes ? piece.availableSizes[0] : undefined,
        addedAt: new Date().toISOString(),
      };
      setDossierItems((prev) => [...prev, newItem]);
      if (soundEnabled) playLuxuryChime();
    }
  };

  const handleAddToDossier = (piece: JewelleryPiece, size?: string, customEngraving?: string) => {
    setDossierItems((prev) => {
      const filtered = prev.filter((item) => item.piece.id !== piece.id);
      const updatedItem: DossierItem = {
        piece,
        selectedSize: size,
        customEngraving: customEngraving?.trim() || undefined,
        addedAt: new Date().toISOString(),
      };
      return [...filtered, updatedItem];
    });
    if (soundEnabled) playLuxuryChime();
  };

  const handleRemoveDossierItem = (pieceId: string) => {
    setDossierItems((prev) => prev.filter((item) => item.piece.id !== pieceId));
  };

  const handleBookSalonForPiece = (piece: JewelleryPiece) => {
    setSalonFeaturedPiece(piece);
    setIsSalonModalOpen(true);
    if (soundEnabled) playLuxuryChime();
  };

  const handleBookSalonLocation = (city: string) => {
    setSalonFeaturedPiece(null);
    setIsSalonModalOpen(true);
    if (soundEnabled) playLuxuryChime();
  };

  const handleExploreCreations = () => {
    const el = document.getElementById('creations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0A09] text-[#F3EFEA] font-sans selection:bg-[#C5A880] selection:text-black flex flex-col">
      {/* Top Bar Navigation */}
      <Navbar
        dossierCount={dossierItems.length}
        onOpenDossier={() => setIsDossierOpen(true)}
        onOpenSalonModal={() => {
          setSalonFeaturedPiece(null);
          setIsSalonModalOpen(true);
        }}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
      />

      {/* Main Showcase Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreCreations={handleExploreCreations}
          onBookSalon={() => {
            setSalonFeaturedPiece(null);
            setIsSalonModalOpen(true);
          }}
        />

        {/* Curated Showcase Grid */}
        <JewelleryGrid
          pieces={pieces}
          selectedCurrency={selectedCurrency}
          onSelectPiece={handleSelectPiece}
          onToggleDossierItem={handleToggleDossierItem}
          isPieceInDossier={isPieceInDossier}
        />

        {/* 4Cs Interactive Gemological Guide */}
        <InteractiveGemGuide />

        {/* The Master Atelier & Craft Section */}
        <CraftAtelierSection />

        {/* Global Flagships & Private Salons */}
        <SalonsSection onBookSalonLocation={handleBookSalonLocation} />
      </main>

      {/* Footnote & Compliance */}
      <Footer />

      {/* Interactive Product Detail & Loupe Modal */}
      {selectedPiece && (
        <ProductDetailModal
          piece={selectedPiece}
          onClose={() => setSelectedPiece(null)}
          selectedCurrency={selectedCurrency}
          onCurrencyChange={setSelectedCurrency}
          onAddToDossier={handleAddToDossier}
          isPieceInDossier={isPieceInDossier(selectedPiece.id)}
          onBookSalonForPiece={handleBookSalonForPiece}
        />
      )}

      {/* Client Curated Dossier Slide-Over Drawer */}
      <PrivateDossierDrawer
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
        items={dossierItems}
        onRemoveItem={handleRemoveDossierItem}
        selectedCurrency={selectedCurrency}
        onOpenSalonModal={() => {
          setIsDossierOpen(false);
          setIsSalonModalOpen(true);
        }}
        onSelectPiece={handleSelectPiece}
      />

      {/* Private Salon Appointment Booking Modal */}
      <PrivateSalonModal
        isOpen={isSalonModalOpen}
        onClose={() => setIsSalonModalOpen(false)}
        featuredPiece={salonFeaturedPiece}
      />
    </div>
  );
}
