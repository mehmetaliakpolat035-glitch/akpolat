import { Brand } from '@/types';

export const brands: Brand[] = [
  { id: 'arcelik', name: 'Arçelik', logo: 'arcelik', category: 'beyaz-esya' },
  { id: 'beko', name: 'Beko', logo: 'beko', category: 'beyaz-esya' },
  { id: 'vestel', name: 'Vestel', logo: 'vestel', category: 'beyaz-esya' },
  { id: 'grundig', name: 'Grundig', logo: 'grundig', category: 'beyaz-esya' },
  { id: 'lg', name: 'LG', logo: 'lg', category: 'beyaz-esya' },
  { id: 'samsung', name: 'Samsung', logo: 'samsung', category: 'beyaz-esya' },
  { id: 'bosch', name: 'Bosch', logo: 'bosch', category: 'beyaz-esya' },
  { id: 'siemens', name: 'Siemens', logo: 'siemens', category: 'beyaz-esya' },
  { id: 'electrolux', name: 'Electrolux', logo: 'electrolux', category: 'beyaz-esya' },
  { id: ' candy', name: 'Candy', logo: 'candy', category: 'beyaz-esya' },
  { id: 'ariston', name: 'Ariston', logo: 'ariston', category: 'beyaz-esya' },
  { id: 'hotpoint', name: 'Hotpoint', logo: 'hotpoint', category: 'beyaz-esya' },
  
  { id: 'vietnam', name: 'Viessmann', logo: 'viessmann', category: 'kombi' },
  { id: 'buderus', name: 'Buderus', logo: 'buderus', category: 'kombi' },
  { id: 'vaillant', name: 'Vaillant', logo: 'vaillant', category: 'kombi' },
  { id: 'demirdokum', name: 'DemirDöküm', logo: 'demirdokum', category: 'kombi' },
  { id: 'baymak', name: 'Baymak', logo: 'baymak', category: 'kombi' },
  { id: 'alarko', name: 'Alarko', logo: 'alarko', category: 'kombi' },
  { id: 'ferroli', name: 'Ferroli', logo: 'ferroli', category: 'kombi' },
  { id: 'immergas', name: 'Immergas', logo: 'immergas', category: 'kombi' },
  { id: 'airfel', name: 'Airfel', logo: 'airfel', category: 'kombi' },
  { id: 'protherm', name: 'Protherm', logo: 'protherm', category: 'kombi' },
  
  { id: 'daikin', name: 'Daikin', logo: 'daikin', category: 'klima' },
  { id: 'mitsubishi', name: 'Mitsubishi', logo: 'mitsubishi', category: 'klima' },
  { id: 'lg-klima', name: 'LG', logo: 'lg', category: 'klima' },
  { id: 'samsung-klima', name: 'Samsung', logo: 'samsung', category: 'klima' },
  { id: 'panasonic', name: 'Panasonic', logo: 'panasonic', category: 'klima' },
  { id: 'sharp', name: 'Sharp', logo: 'sharp', category: 'klima' },
  { id: 'toshiba', name: 'Toshiba', logo: 'toshiba', category: 'klima' },
  { id: 'carrier', name: 'Carrier', logo: 'carrier', category: 'klima' },
  { id: 'midea', name: 'Midea', logo: 'midea', category: 'klima' },
  { id: 'klimeks', name: 'Klimeks', logo: 'klimeks', category: 'klima' },
];

export const getBrandsByCategory = (category: 'beyaz-esya' | 'kombi' | 'klima') => {
  return brands.filter(brand => brand.category === category);
};

export const allBrands = brands;
