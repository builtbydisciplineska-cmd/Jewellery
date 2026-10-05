import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#080706] border-t border-[#1F1E1B] text-[#8C8780] text-xs font-light pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#1C1A17]">
          {/* Brand & Maison Intro */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-2xl tracking-[0.22em] text-[#F3EFEA] uppercase block">
              Maison Valoire
            </span>
            <div className="text-[11px] tracking-[0.18em] uppercase text-[#C5A880]">
              Haute Joaillerie · 26 Place Vendôme · Paris
            </div>
            <p className="text-xs text-[#9E978E] max-w-sm leading-relaxed">
              Maison de haute joaillerie fondée en 1928. Sculptor of solitary diamonds, unheated rare sapphires, and heirloom Colombian emeralds crafted for generational custody.
            </p>
          </div>

          {/* Nav Column: Collections */}
          <div className="space-y-3">
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#F3EFEA] font-normal">
              Collections
            </div>
            <ul className="space-y-2">
              <li><a href="#creations" className="hover:text-[#C5A880] transition-colors">L&apos;Éternel Solitaires</a></li>
              <li><a href="#creations" className="hover:text-[#C5A880] transition-colors">Jardins Impériaux</a></li>
              <li><a href="#creations" className="hover:text-[#C5A880] transition-colors">Nuit Étoilée Sapphires</a></li>
              <li><a href="#creations" className="hover:text-[#C5A880] transition-colors">Architecture Vivante</a></li>
              <li><a href="#creations" className="hover:text-[#C5A880] transition-colors">Pièces Uniques 1/1</a></li>
            </ul>
          </div>

          {/* Nav Column: Gemology & Services */}
          <div className="space-y-3">
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#F3EFEA] font-normal">
              Maison Expertise
            </div>
            <ul className="space-y-2">
              <li><a href="#gemological-dossier" className="hover:text-[#C5A880] transition-colors">The 4Cs Interactive Guide</a></li>
              <li><a href="#atelier" className="hover:text-[#C5A880] transition-colors">Place Vendôme Atelier</a></li>
              <li><a href="#salons" className="hover:text-[#C5A880] transition-colors">Private Salon Appointments</a></li>
              <li><a href="#salons" className="hover:text-[#C5A880] transition-colors">Bespoke Monogramming</a></li>
              <li><a href="#gemological-dossier" className="hover:text-[#C5A880] transition-colors">GIA & Gübelin Authentication</a></li>
            </ul>
          </div>

          {/* Gazette / Confidential Journal Subscription */}
          <div className="space-y-3">
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#F3EFEA] font-normal">
              La Gazette Privée
            </div>
            <p className="text-xs text-[#9E978E] leading-relaxed">
              Receive confidential notices regarding uncirculated rough gemstone arrivals and private salon auctions.
            </p>
            {subscribed ? (
              <div className="p-3 bg-[#141311] border border-[#2E2C28] text-xs text-[#C5A880] flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Subscribed to La Gazette</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter confidential email"
                    className="w-full bg-[#12110F] border border-[#262421] px-3 py-2 text-xs text-[#F3EFEA] placeholder-[#6E6961] focus:border-[#C5A880] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-2.5 bg-[#C5A880] text-[#0B0A09] hover:bg-[#d8c2a3] transition-colors"
                    aria-label="Subscribe to Gazette"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Quiet Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6E6961]">
          <div>
            © {new Date().getFullYear()} Maison Valoire Haute Joaillerie S.A. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Kimberley Process Certified</span>
            <span aria-hidden="true">·</span>
            <span>RJC Chain of Custody</span>
            <span aria-hidden="true">·</span>
            <span>Place Vendôme Association</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
