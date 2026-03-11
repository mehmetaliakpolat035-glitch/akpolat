export interface Brand {
  id: string;
  name: string;
  slug: string;
  category: 'beyaz-esya' | 'kombi' | 'klima';
  description: string;
}

export const brands: Brand[] = [
  // Beyaz Eşya Markaları
  { id: 'arcelik', name: 'Arçelik', slug: 'arcelik-beyaz-esya', category: 'beyaz-esya', description: 'Arçelik beyaz eşya servis hizmetleri' },
  { id: 'beko', name: 'Beko', slug: 'beko-beyaz-esya', category: 'beyaz-esya', description: 'Beko beyaz eşya servis hizmetleri' },
  { id: 'vestel', name: 'Vestel', slug: 'vestel-beyaz-esya', category: 'beyaz-esya', description: 'Vestel beyaz eşya servis hizmetleri' },
  { id: 'grundig', name: 'Grundig', slug: 'grundig-beyaz-esya', category: 'beyaz-esya', description: 'Grundig beyaz eşya servis hizmetleri' },
  { id: 'lg', name: 'LG', slug: 'lg-beyaz-esya', category: 'beyaz-esya', description: 'LG beyaz eşya servis hizmetleri' },
  { id: 'samsung', name: 'Samsung', slug: 'samsung-beyaz-esya', category: 'beyaz-esya', description: 'Samsung beyaz eşya servis hizmetleri' },
  { id: 'bosch', name: 'Bosch', slug: 'bosch-beyaz-esya', category: 'beyaz-esya', description: 'Bosch beyaz eşya servis hizmetleri' },
  { id: 'siemens', name: 'Siemens', slug: 'siemens-beyaz-esya', category: 'beyaz-esya', description: 'Siemens beyaz eşya servis hizmetleri' },
  { id: 'electrolux', name: 'Electrolux', slug: 'electrolux-beyaz-esya', category: 'beyaz-esya', description: 'Electrolux beyaz eşya servis hizmetleri' },
  { id: 'candy', name: 'Candy', slug: 'candy-beyaz-esya', category: 'beyaz-esya', description: 'Candy beyaz eşya servis hizmetleri' },
  { id: 'ariston', name: 'Ariston', slug: 'ariston-beyaz-esya', category: 'beyaz-esya', description: 'Ariston beyaz eşya servis hizmetleri' },
  { id: 'hotpoint', name: 'Hotpoint', slug: 'hotpoint-beyaz-esya', category: 'beyaz-esya', description: 'Hotpoint beyaz eşya servis hizmetleri' },
  { id: 'profilo', name: 'Profilo', slug: 'profilo-beyaz-esya', category: 'beyaz-esya', description: 'Profilo beyaz eşya servis hizmetleri' },
  { id: 'altus', name: 'Altus', slug: 'altus-beyaz-esya', category: 'beyaz-esya', description: 'Altus beyaz eşya servis hizmetleri' },
  { id: 'regal', name: 'Regal', slug: 'regal-beyaz-esya', category: 'beyaz-esya', description: 'Regal beyaz eşya servis hizmetleri' },
  { id: 'aeg', name: 'AEG', slug: 'aeg-beyaz-esya', category: 'beyaz-esya', description: 'AEG beyaz eşya servis hizmetleri' },
  { id: 'amana', name: 'Amana', slug: 'amana-beyaz-esya', category: 'beyaz-esya', description: 'Amana beyaz eşya servis hizmetleri' },
  { id: 'falke', name: 'Falke', slug: 'falke-beyaz-esya', category: 'beyaz-esya', description: 'Falke beyaz eşya servis hizmetleri' },
  { id: 'franke', name: 'Franke', slug: 'franke-beyaz-esya', category: 'beyaz-esya', description: 'Franke beyaz eşya servis hizmetleri' },
  { id: 'gaggenau', name: 'Gaggenau', slug: 'gaggenau-beyaz-esya', category: 'beyaz-esya', description: 'Gaggenau beyaz eşya servis hizmetleri' },
  { id: 'indesit', name: 'Indesit', slug: 'indesit-beyaz-esya', category: 'beyaz-esya', description: 'Indesit beyaz eşya servis hizmetleri' },
  { id: 'lambert', name: 'Lambert', slug: 'lambert-beyaz-esya', category: 'beyaz-esya', description: 'Lambert beyaz eşya servis hizmetleri' },
  { id: 'miele', name: 'Miele', slug: 'miele-beyaz-esya', category: 'beyaz-esya', description: 'Miele beyaz eşya servis hizmetleri' },
  { id: 'philips', name: 'Philips', slug: 'philips-beyaz-esya', category: 'beyaz-esya', description: 'Philips beyaz eşya servis hizmetleri' },
  { id: 'seg', name: 'SEG', slug: 'seg-beyaz-esya', category: 'beyaz-esya', description: 'SEG beyaz eşya servis hizmetleri' },
  { id: 'sony', name: 'Sony', slug: 'sony-beyaz-esya', category: 'beyaz-esya', description: 'Sony beyaz eşya servis hizmetleri' },
  { id: 'subzero', name: 'Sub-Zero', slug: 'subzero-beyaz-esya', category: 'beyaz-esya', description: 'Sub-Zero beyaz eşya servis hizmetleri' },
  { id: 'sunny', name: 'Sunny', slug: 'sunny-beyaz-esya', category: 'beyaz-esya', description: 'Sunny beyaz eşya servis hizmetleri' },
  { id: 'teka', name: 'Teka', slug: 'teka-beyaz-esya', category: 'beyaz-esya', description: 'Teka beyaz eşya servis hizmetleri' },
  { id: 'westinghouse', name: 'Westinghouse', slug: 'westinghouse-beyaz-esya', category: 'beyaz-esya', description: 'Westinghouse beyaz eşya servis hizmetleri' },
  
  // Kombi Markaları
  { id: 'viessmann', name: 'Viessmann', slug: 'viessmann-kombi', category: 'kombi', description: 'Viessmann kombi servis hizmetleri' },
  { id: 'buderus', name: 'Buderus', slug: 'buderus-kombi', category: 'kombi', description: 'Buderus kombi servis hizmetleri' },
  { id: 'vaillant', name: 'Vaillant', slug: 'vaillant-kombi', category: 'kombi', description: 'Vaillant kombi servis hizmetleri' },
  { id: 'demirdokum', name: 'DemirDöküm', slug: 'demirdokum-kombi', category: 'kombi', description: 'DemirDöküm kombi servis hizmetleri' },
  { id: 'baymak', name: 'Baymak', slug: 'baymak-kombi', category: 'kombi', description: 'Baymak kombi servis hizmetleri' },
  { id: 'alarko', name: 'Alarko', slug: 'alarko-kombi', category: 'kombi', description: 'Alarko kombi servis hizmetleri' },
  { id: 'ferroli', name: 'Ferroli', slug: 'ferroli-kombi', category: 'kombi', description: 'Ferroli kombi servis hizmetleri' },
  { id: 'immergas', name: 'Immergas', slug: 'immergas-kombi', category: 'kombi', description: 'Immergas kombi servis hizmetleri' },
  { id: 'airfel', name: 'Airfel', slug: 'airfel-kombi', category: 'kombi', description: 'Airfel kombi servis hizmetleri' },
  { id: 'protherm', name: 'Protherm', slug: 'protherm-kombi', category: 'kombi', description: 'Protherm kombi servis hizmetleri' },
  { id: 'eca', name: 'E.C.A', slug: 'eca-kombi', category: 'kombi', description: 'E.C.A kombi servis hizmetleri' },
  { id: 'warmhaus', name: 'Warmhaus', slug: 'warmhaus-kombi', category: 'kombi', description: 'Warmhaus kombi servis hizmetleri' },
  { id: 'baxi', name: 'Baxi', slug: 'baxi-kombi', category: 'kombi', description: 'Baxi kombi servis hizmetleri' },
  { id: 'baykan', name: 'Baykan', slug: 'baykan-kombi', category: 'kombi', description: 'Baykan kombi servis hizmetleri' },
  { id: 'termoteknik', name: 'Termoteknik', slug: 'termoteknik-kombi', category: 'kombi', description: 'Termoteknik kombi servis hizmetleri' },
  
  // Klima Markaları
  { id: 'daikin', name: 'Daikin', slug: 'daikin-klima', category: 'klima', description: 'Daikin klima servis hizmetleri' },
  { id: 'mitsubishi', name: 'Mitsubishi', slug: 'mitsubishi-klima', category: 'klima', description: 'Mitsubishi klima servis hizmetleri' },
  { id: 'lg-klima', name: 'LG', slug: 'lg-klima', category: 'klima', description: 'LG klima servis hizmetleri' },
  { id: 'samsung-klima', name: 'Samsung', slug: 'samsung-klima', category: 'klima', description: 'Samsung klima servis hizmetleri' },
  { id: 'panasonic', name: 'Panasonic', slug: 'panasonic-klima', category: 'klima', description: 'Panasonic klima servis hizmetleri' },
  { id: 'sharp', name: 'Sharp', slug: 'sharp-klima', category: 'klima', description: 'Sharp klima servis hizmetleri' },
  { id: 'toshiba', name: 'Toshiba', slug: 'toshiba-klima', category: 'klima', description: 'Toshiba klima servis hizmetleri' },
  { id: 'carrier', name: 'Carrier', slug: 'carrier-klima', category: 'klima', description: 'Carrier klima servis hizmetleri' },
  { id: 'midea-klima', name: 'Midea', slug: 'midea-klima', category: 'klima', description: 'Midea klima servis hizmetleri' },
  { id: 'klimeks', name: 'Klimeks', slug: 'klimeks-klima', category: 'klima', description: 'Klimeks klima servis hizmetleri' },
  { id: 'fujitsu', name: 'Fujitsu', slug: 'fujitsu-klima', category: 'klima', description: 'Fujitsu klima servis hizmetleri' },
  { id: 'gree', name: 'Gree', slug: 'gree-klima', category: 'klima', description: 'Gree klima servis hizmetleri' },
  { id: 'airfel-klima', name: 'Airfel', slug: 'airfel-klima', category: 'klima', description: 'Airfel klima servis hizmetleri' },
  { id: 'alarko-klima', name: 'Alarko', slug: 'alarko-klima', category: 'klima', description: 'Alarko klima servis hizmetleri' },
];

export const getBrandBySlug = (slug: string): Brand | undefined => {
  return brands.find(brand => brand.slug === slug);
};

export const getBrandsByCategory = (category: 'beyaz-esya' | 'kombi' | 'klima'): Brand[] => {
  return brands.filter(brand => brand.category === category);
};

export const allBrands = brands;
