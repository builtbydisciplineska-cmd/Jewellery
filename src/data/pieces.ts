import { JewelleryPiece } from '../types/jewellery';
import heroImg from '../assets/images/hero_haute_jewellery_1791204332809.jpg';
import solitaireImg from '../assets/images/product_solitaire_diamond_ring_1791204351720.jpg';
import emeraldImg from '../assets/images/product_emerald_high_necklace_1791204367206.jpg';
import sapphireImg from '../assets/images/product_sapphire_earrings_1791204380455.jpg';

export const HIGH_JEWELLERY_PIECES: JewelleryPiece[] = [
  {
    id: 'leternel-solitaire-352',
    title: "L'Éternel Solitaire",
    frenchTitle: "Solitaire Ovale Exceptionnel",
    collection: "Lumière du Nord",
    category: "rings",
    metal: "Platinum 950",
    metalPurity: "PT950 Hand-Forged Solid",
    primaryGemstone: {
      type: "Natural Diamond",
      carat: 3.52,
      cut: "Oval Brilliant",
      color: "D (Colorless)",
      clarity: "FL (Flawless)",
      origin: "Botswana Ethical Mine (Kimberley Certified)"
    },
    accentStones: "Concealed micro-pavé bridge with 18 round brilliant diamonds (0.24 ct total)",
    totalCaratWeight: 3.76,
    valuationUSD: 148000,
    valuationEUR: 136000,
    valuationGBP: 116000,
    referenceCode: "MV-SOL-092-PT",
    image: solitaireImg,
    description: "An extraordinary 3.52-carat oval brilliant diamond of paramount purity (D/FL), set in a four-claw platinum wire mounting engineered with an open gallery to channel pure natural luminescence into the pavilion.",
    atelierNote: "Forged by Master Jeweler Jean-Luc Moreau over 68 bench hours in Place Vendôme. Features a cathedral taper and micro-bead setting under 40x optical magnification.",
    gemologicalDossier: {
      certificateAuthority: "GIA",
      certificateNumber: "GIA-2235918402",
      cutGrade: "Exceptional",
      polish: "Excellent",
      symmetry: "Excellent",
      fluorescence: "None",
      dimensions: "12.18 x 8.42 x 5.12 mm",
      tablePercentage: "58.0%",
      depthPercentage: "60.8%"
    },
    availableSizes: ["US 4.5", "US 5.0", "US 5.5", "US 6.0", "US 6.5", "US 7.0", "US 7.5", "US 8.0"],
    isPieceUnique: true,
    editionLimit: "Pièce Unique 1/1"
  },
  {
    id: 'emeraude-royale-cascade',
    title: "Émeraude Royale Cascade",
    frenchTitle: "Collier Haute Joaillerie Émeraudes",
    collection: "Jardins Impériaux",
    category: "necklaces",
    metal: "18k White Gold",
    metalPurity: "750/1000 Palladium Alloy (Non-Plated White)",
    primaryGemstone: {
      type: "Muzo Emeralds",
      carat: 18.40,
      cut: "Graduated Pear & Octagonal Step Cut",
      color: "Vivid Green (Muzo Green)",
      clarity: "Minor Cedar Oil (Traditional)",
      origin: "Boyacá, Colombia (Historical Mine)"
    },
    accentStones: "142 marquise, pear, and brilliant-cut diamonds (E-F / VVS, 16.80 ct total)",
    totalCaratWeight: 35.20,
    valuationUSD: 385000,
    valuationEUR: 354000,
    valuationGBP: 302000,
    referenceCode: "MV-NCK-114-WG",
    image: emeraldImg,
    description: "A museum-grade high joaillerie necklace crowned by nine graduated Colombian emeralds exhibiting the coveted 'jardin' inclusions characteristic of the historic Muzo deposits, articulated with flexible articulated diamond links.",
    atelierNote: "Each articulated link is calibrated to contour perfectly against the clavicle, moving like silk. Accompanied by a Gübelin Gem Lab portrait book.",
    gemologicalDossier: {
      certificateAuthority: "Gübelin Gem Lab",
      certificateNumber: "GUB-2026-90411",
      cutGrade: "Ideal Brilliant",
      polish: "Excellent",
      symmetry: "Excellent",
      fluorescence: "None",
      dimensions: "Graduated central drops: 14.5mm to 8.2mm",
      tablePercentage: "62.4%",
      depthPercentage: "61.2%"
    },
    isPieceUnique: true,
    editionLimit: "Pièce Unique 1/1"
  },
  {
    id: 'saphir-imperial-chandelier',
    title: "Saphir Impérial Chandelier",
    frenchTitle: "Pendants d'Oreilles Saphirs de Ceylan",
    collection: "Nuit Étoilée",
    category: "earrings",
    metal: "Platinum 950",
    metalPurity: "PT950 Precision Cast",
    primaryGemstone: {
      type: "Ceylon Sapphires",
      carat: 12.80,
      cut: "Cushion & Drop Briolette Cut",
      color: "Royal Cornflower Blue (Unheated)",
      clarity: "Eye Clean (High Transparency)",
      origin: "Ratnapura, Sri Lanka"
    },
    accentStones: "64 tapered baguette & marquise-cut diamonds (D-E / VVS1, 4.30 ct total)",
    totalCaratWeight: 17.10,
    valuationUSD: 195000,
    valuationEUR: 179000,
    valuationGBP: 153000,
    referenceCode: "MV-EAR-205-PT",
    image: sapphireImg,
    description: "Suspended drops of unheated Ceylon sapphires glowing with rich royal blue saturation, surrounded by an architectural spray of baguette and brilliant-cut diamonds designed to dance with natural light.",
    atelierNote: "Engineered with balanced weight distribution and secure French clip lever-backs to ensure effortless comfort during evening galas.",
    gemologicalDossier: {
      certificateAuthority: "SSEF Swiss Gemmological",
      certificateNumber: "SSEF-118942",
      cutGrade: "Precision Cushion",
      polish: "Excellent",
      symmetry: "Excellent",
      fluorescence: "None",
      dimensions: "10.4 x 8.8 mm (paired cushions)",
      tablePercentage: "59.2%",
      depthPercentage: "63.0%"
    },
    isPieceUnique: true,
    editionLimit: "Numbered Edition of 3"
  },
  {
    id: 'constellation-pave-cuff',
    title: "Constellation Pavé Cuff",
    frenchTitle: "Bracelet Manchette Or Rose & Diamants",
    collection: "Architecture Vivante",
    category: "bracelets",
    metal: "18k Rose Gold",
    metalPurity: "750/1000 5N Rose Gold",
    primaryGemstone: {
      type: "Natural Round Brilliant Diamonds",
      carat: 8.60,
      cut: "Round Brilliant Ideal Hearts & Arrows",
      color: "E (Colorless)",
      clarity: "VVS1",
      origin: "Canada Diavik (Ethical Traced)"
    },
    accentStones: "284 micro-pavé diamonds flush-set in hexagonal fluting",
    totalCaratWeight: 8.60,
    valuationUSD: 88000,
    valuationEUR: 81000,
    valuationGBP: 69000,
    referenceCode: "MV-BRC-301-RG",
    image: heroImg,
    description: "A sculpted architectural open-wire cuff in warm 18k rose gold, embedded with a celestial constellation of micro-pavé diamonds exhibiting laser-cut precision fluting.",
    atelierNote: "Features an invisible dual-spring clasp system requiring four weeks of specialized horological spring calibration.",
    gemologicalDossier: {
      certificateAuthority: "GIA",
      certificateNumber: "GIA-55018392",
      cutGrade: "Ideal Brilliant",
      polish: "Excellent",
      symmetry: "Excellent",
      fluorescence: "None",
      dimensions: "Internal circumference 16.5 cm (Customizable)",
      tablePercentage: "57.5%",
      depthPercentage: "61.5%"
    },
    availableSizes: ["Small (15.5 cm)", "Medium (16.5 cm)", "Large (17.5 cm)"],
    isPieceUnique: false,
    editionLimit: "Limited Series of 12"
  },
  {
    id: 'soleil-d-or-radiant-solitaire',
    title: "Soleil Doré Radiant Ring",
    frenchTitle: "Bague Solitaire Diamant Jaune Fancy",
    collection: "Lumière du Nord",
    category: "rings",
    metal: "18k Yellow Gold",
    metalPurity: "750/1000 3N Yellow Gold & Platinum Crown",
    primaryGemstone: {
      type: "Fancy Intense Yellow Diamond",
      carat: 4.12,
      cut: "Radiant Modified Brilliant",
      color: "Fancy Intense Yellow (Natural)",
      clarity: "VVS2",
      origin: "Kimberley Mine, South Africa"
    },
    accentStones: "Two tapered trapezoid colorless side diamonds (D/VS1, 0.85 ct total)",
    totalCaratWeight: 4.97,
    valuationUSD: 215000,
    valuationEUR: 198000,
    valuationGBP: 168000,
    referenceCode: "MV-SOL-108-YG",
    image: solitaireImg,
    description: "An intoxicating 4.12-carat Fancy Intense Yellow radiant diamond set in 18k yellow gold claws with a concealed platinum under-bezel, flanked by two crystalline trapezoid side stones.",
    atelierNote: "The mounting was specifically alloyed with 18k deep yellow gold beneath the center stone to optimize and elevate the stone's natural honey-golden fire.",
    gemologicalDossier: {
      certificateAuthority: "GIA",
      certificateNumber: "GIA-1209384711",
      cutGrade: "Exceptional",
      polish: "Excellent",
      symmetry: "Excellent",
      fluorescence: "Medium",
      dimensions: "9.85 x 8.40 x 5.48 mm",
      tablePercentage: "64.0%",
      depthPercentage: "65.2%"
    },
    availableSizes: ["US 5.0", "US 5.5", "US 6.0", "US 6.5", "US 7.0"],
    isPieceUnique: true,
    editionLimit: "Pièce Unique 1/1"
  },
  {
    id: 'riviere-nocturne-high-collar',
    title: "Rivière Nocturne Collar",
    frenchTitle: "Collier Rivière Diamants Dégradés",
    collection: "Nuit Étoilée",
    category: "high_joaillerie",
    metal: "Platinum 950",
    metalPurity: "PT950 Knife-Edge Articulation",
    primaryGemstone: {
      type: "Graduated Round Brilliant Diamonds",
      carat: 26.50,
      cut: "Triple Excellent Round Brilliant",
      color: "D - E (Colorless)",
      clarity: "VVS1 - VVS2",
      origin: "Ethically Sourced Provenance"
    },
    accentStones: "Central focal drop diamond of 2.10 ct (D/IF)",
    totalCaratWeight: 28.60,
    valuationUSD: 420000,
    valuationEUR: 386000,
    valuationGBP: 329000,
    referenceCode: "MV-NCK-088-PT",
    image: heroImg,
    description: "The pinnacle of classic Parisian high jewelry: a seamless rivière of 73 precision-matched diamonds gently graduating toward a breathtaking 2.10 ct D/IF solitary focal stone.",
    atelierNote: "Each collet is hand-notched with knife-edge platinum joints so the necklace drapes without twisting, lying flat against the skin in any movement.",
    gemologicalDossier: {
      certificateAuthority: "GIA",
      certificateNumber: "GIA-77192039",
      cutGrade: "Exceptional",
      polish: "Excellent",
      symmetry: "Excellent",
      fluorescence: "None",
      dimensions: "Graduated diamonds 3.0mm to 8.2mm, length 41 cm",
      tablePercentage: "57.0%",
      depthPercentage: "61.0%"
    },
    isPieceUnique: true,
    editionLimit: "Pièce Unique 1/1"
  }
];

export const ATELIER_STAGES = [
  {
    number: "01",
    phase: "Gouache & Gem Selection",
    french: "Le Gouaché & La Sélection",
    detail: "Every creation begins with a full-scale hand-painted gouache rendering on matte paper. Our Master Gemologist travels directly to ethical mines in Colombia, Botswana, and Sri Lanka to select fewer than 0.1% of candidate rough stones."
  },
  {
    number: "02",
    phase: "Sculptural Lost-Wax Mounting",
    french: "La Sculpture sur Cire",
    detail: "Artisans hand-sculpt a master prototype in jeweler's wax using millimeter calipers, accounting for the natural organic anatomy of each individual gemstone before casting in dense Platinum 950 or 18k Gold."
  },
  {
    number: "03",
    phase: "Micro-Pavé Setting Under Microscope",
    french: "Le Serti Haute Joaillerie",
    detail: "Working under 40x Leica stereoscopic microscopes, our setters raise minuscule platinum grains to secure each diamond. Prongs are rounded and mirror-polished so no garment can catch."
  },
  {
    number: "04",
    phase: "Mirror Finish & Place Vendôme Hallmark",
    french: "Le Polissage Miroir & Poinçon",
    detail: "The final piece receives multi-thread polishing inside inaccessible galleries and the French national eagle or dog head hallmark, certifying its precious metal provenance for generations."
  }
];

export const SALON_LOCATIONS = [
  {
    city: "Paris",
    address: "26 Place Vendôme, 75001 Paris",
    phone: "+33 1 42 68 00 20",
    hours: "Tuesday – Saturday: 10:30 – 19:00",
    leadTime: "By Appointment Only"
  },
  {
    city: "London",
    address: "14 New Bond Street, Mayfair, London W1S 3SX",
    phone: "+44 20 7499 1800",
    hours: "Monday – Saturday: 10:00 – 18:30",
    leadTime: "Private Viewing Suite"
  },
  {
    city: "New York",
    address: "712 Madison Avenue, New York, NY 10065",
    phone: "+1 212 555 0192",
    hours: "Monday – Saturday: 10:00 – 18:00",
    leadTime: "Penthouse Salon"
  },
  {
    city: "Digital Haute Salon",
    address: "Encrypted 4K Video Concierge with Master Gemologist",
    phone: "Direct VIP Hotline",
    hours: "Global Time Zones via Concierge",
    leadTime: "Instant Booking Confirmation"
  }
];
