export interface GemologicalDossier {
  certificateAuthority: 'GIA' | 'Gübelin Gem Lab' | 'SSEF Swiss Gemmological';
  certificateNumber: string;
  cutGrade: 'Exceptional' | 'Ideal Brilliant' | 'Precision Cushion';
  polish: 'Excellent' | 'Very Good';
  symmetry: 'Excellent';
  fluorescence: 'None' | 'Faint' | 'Medium' | 'Strong' | string;
  dimensions: string;
  tablePercentage: string;
  depthPercentage: string;
}

export interface JewelleryPiece {
  id: string;
  title: string;
  frenchTitle: string;
  collection: string;
  category: 'rings' | 'necklaces' | 'earrings' | 'bracelets' | 'high_joaillerie';
  metal: 'Platinum 950' | '18k Yellow Gold' | '18k White Gold' | '18k Rose Gold';
  metalPurity: string;
  primaryGemstone: {
    type: string;
    carat: number;
    cut: string;
    color?: string;
    clarity?: string;
    origin?: string;
  };
  accentStones?: string;
  totalCaratWeight: number;
  valuationUSD: number;
  valuationEUR: number;
  valuationGBP: number;
  referenceCode: string;
  image: string;
  description: string;
  atelierNote: string;
  gemologicalDossier: GemologicalDossier;
  availableSizes?: string[];
  isPieceUnique: boolean;
  editionLimit?: string;
}

export interface DossierItem {
  piece: JewelleryPiece;
  selectedSize?: string;
  customEngraving?: string;
  addedAt: string;
}

export interface SalonAppointment {
  salonLocation: 'Paris Place Vendôme' | 'London New Bond Street' | 'New York Madison Avenue' | 'Digital Private Salon';
  preferredDate: string;
  preferredTime: string;
  fullName: string;
  email: string;
  phone: string;
  notes?: string;
  appointmentRef: string;
}
