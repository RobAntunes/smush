export interface Ingredient {
  name: string;
  dose: string;
  benefit: string;
  imageUrl: string;
}

export const ingredients: Ingredient[] = [
  {
    name: 'Ceremonial Matcha',
    dose: '1500mg',
    benefit: 'L-theanine rich green tea for calm, alpha-wave focus. Clean energy without the crash.',
    imageUrl: 'https://images.unsplash.com/photo-1515812165038-04b20a3250fc?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: "Lion's Mane",
    dose: '1000mg',
    benefit: 'Cognitive enhancement and neurogenesis support. The neuro-protector that enhances memory and nerve growth.',
    imageUrl: 'https://images.unsplash.com/photo-1627485938096-7c908cc4252e?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Cordyceps Cs-4',
    dose: '500mg',
    benefit: 'ATP production for physical stamina. Boosts athletic performance and energy at the cellular level.',
    imageUrl: 'https://images.unsplash.com/photo-1596522354195-e84de315f60d?q=80&w=2074&auto=format&fit=crop',
  },
  {
    name: 'Reishi',
    dose: '500mg',
    benefit: 'Stress adaptation and immune support. The ancient mushroom of calm and longevity.',
    imageUrl: 'https://images.unsplash.com/photo-1634141134668-2c3408288e25?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Chaga',
    dose: '300mg',
    benefit: 'Antioxidant powerhouse. Protects cells from oxidative stress and supports immune function.',
    imageUrl: 'https://images.unsplash.com/photo-1628177542680-8e4d8f6d0b8d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Spirulina',
    dose: '500mg',
    benefit: 'Complete protein source with micronutrient density. Alkalizing superfood for daily nutrition.',
    imageUrl: 'https://images.unsplash.com/photo-1608797178974-15b35a64ede9?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Chlorella',
    dose: '500mg',
    benefit: 'Detoxifying green algae rich in chlorophyll. Binds to heavy metals and supports cellular cleansing.',
    imageUrl: 'https://images.unsplash.com/photo-1628430043090-9c95bd6c2e6d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Wheatgrass',
    dose: '300mg',
    benefit: 'Alkalizing greens packed with vitamins, minerals, and enzymes for daily vitality.',
    imageUrl: 'https://images.unsplash.com/photo-1574938834385-49c0d94bb126?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Moringa',
    dose: '300mg',
    benefit: 'Complete vitamin and mineral profile. The "miracle tree" with 90+ nutrients.',
    imageUrl: 'https://images.unsplash.com/photo-1609240184404-0c24bfbfd87a?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Acerola Cherry',
    dose: '200mg',
    benefit: 'Natural vitamin C in its most bioavailable form. Immune support and collagen production.',
    imageUrl: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'MCT Powder',
    dose: '1000mg',
    benefit: 'Rapid ketone production for sustained energy. Brain fuel that bypasses glucose metabolism.',
    imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=2070&auto=format&fit=crop',
  },
];

// Featured ingredients for homepage hero
export const featuredIngredients = [
  {
    dose: '1.5g',
    name: 'Matcha',
  },
  {
    dose: '1.0g',
    name: "Lion's Mane",
  },
];
