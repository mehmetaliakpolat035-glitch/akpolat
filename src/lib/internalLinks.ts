import { cities } from '@/data/cities';
import { brands } from '@/data/markalar';

export interface InternalLink {
  keyword: string;
  href: string;
}

const allServices = [
  { id: 'beyaz-esya', name: 'Beyaz Eşya', slug: 'beyaz-esya-servisi' },
  { id: 'kombi', name: 'Kombi', slug: 'kombi-servisi' },
  { id: 'klima', name: 'Klima', slug: 'klima-servisi' },
  { id: 'buzdolabi', name: 'Buzdolabı', slug: 'buzdolabi-servisi' },
  { id: 'camasir-makinesi', name: 'Çamaşır Makinesi', slug: 'camasir-makinesi-servisi' },
  { id: 'bulasik-makinesi', name: 'Bulaşık Makinesi', slug: 'bulasik-makinesi-servisi' },
];

function generateCityServiceLinks(): InternalLink[] {
  const links: InternalLink[] = [];
  
  for (const city of cities) {
    for (const service of allServices) {
      const keyword = `${city.name.toLowerCase()} ${service.name.toLowerCase()} servisi`;
      const href = `/${city.slug}/${service.slug}`;
      links.push({ keyword, href });
    }
  }
  
  return links;
}

function generateCityOnlyLinks(): InternalLink[] {
  const links: InternalLink[] = [];
  
  for (const city of cities) {
    const keyword = `${city.name.toLowerCase()} teknik servis`;
    const href = `/${city.slug}`;
    links.push({ keyword, href });
  }
  
  return links;
}

function generateServiceOnlyLinks(): InternalLink[] {
  const links: InternalLink[] = [];
  
  for (const service of allServices) {
    links.push({ keyword: service.name.toLowerCase(), href: `/${service.slug}` });
    links.push({ keyword: `${service.name.toLowerCase()} servisi`, href: `/${service.slug}` });
    links.push({ keyword: `${service.name.toLowerCase()} tamiri`, href: `/${service.slug}` });
    links.push({ keyword: `${service.name.toLowerCase()} bakımı`, href: `/${service.slug}` });
    links.push({ keyword: `${service.name.toLowerCase()} arızası`, href: `/${service.slug}` });
  }
  
  return links;
}

function generateServiceTypeLinks(): InternalLink[] {
  return [
    { keyword: 'beyaz eşya servisi', href: '/beyaz-esya-servisi' },
    { keyword: 'beyaz eşya tamiri', href: '/beyaz-esya-servisi' },
    { keyword: 'beyaz eşya bakımı', href: '/beyaz-esya-servisi' },
    { keyword: 'beyaz eşya arızası', href: '/beyaz-esya-servisi' },
    { keyword: 'kombi servisi', href: '/kombi-servisi' },
    { keyword: 'kombi tamiri', href: '/kombi-servisi' },
    { keyword: 'kombi bakımı', href: '/kombi-servisi' },
    { keyword: 'kombi arızası', href: '/kombi-servisi' },
    { keyword: 'kombi montajı', href: '/kombi-servisi' },
    { keyword: 'doğalgaz kombi servisi', href: '/kombi-servisi' },
    { keyword: 'yoğuşmalı kombi servisi', href: '/kombi-servisi' },
    { keyword: 'klima servisi', href: '/klima-servisi' },
    { keyword: 'klima tamiri', href: '/klima-servisi' },
    { keyword: 'klima bakımı', href: '/klima-servisi' },
    { keyword: 'klima arızası', href: '/klima-servisi' },
    { keyword: 'klima montajı', href: '/klima-servisi' },
    { keyword: 'klima gaz dolumu', href: '/klima-servisi' },
    { keyword: 'split klima servisi', href: '/klima-servisi' },
    { keyword: 'buzdolabı servisi', href: '/buzdolabi-servisi' },
    { keyword: 'buzdolabı tamiri', href: '/buzdolabi-servisi' },
    { keyword: 'buzdolabı bakımı', href: '/buzdolabi-servisi' },
    { keyword: 'buzdolabı arızası', href: '/buzdolabi-servisi' },
    { keyword: 'buzdolabı soğutmuyor', href: '/buzdolabi-servisi' },
    { keyword: 'çamaşır makinesi servisi', href: '/camasir-makinesi-servisi' },
    { keyword: 'çamaşır makinesi tamiri', href: '/camasir-makinesi-servisi' },
    { keyword: 'çamaşır makinesi bakımı', href: '/camasir-makinesi-servisi' },
    { keyword: 'çamaşır makinesi arızası', href: '/camasir-makinesi-servisi' },
    { keyword: 'bulaşık makinesi servisi', href: '/bulasik-makinesi-servisi' },
    { keyword: 'bulaşık makinesi tamiri', href: '/bulasik-makinesi-servisi' },
    { keyword: 'bulaşık makinesi bakımı', href: '/bulasik-makinesi-servisi' },
    { keyword: 'bulaşık makinesi arızası', href: '/bulasik-makinesi-servisi' },
    { keyword: 'teknik servis', href: '/' },
    { keyword: 'teknik servis hizmeti', href: '/' },
    { keyword: 'profesyonel teknik servis', href: '/' },
  ];
}

function generateRegionLinks(): InternalLink[] {
  return [
    { keyword: 'ege bölgesi teknik servis', href: '/izmir' },
    { keyword: 'ege bölgesi beyaz eşya servisi', href: '/izmir/beyaz-esya-servisi' },
    { keyword: 'ege bölgesi kombi servisi', href: '/izmir/kombi-servisi' },
    { keyword: 'ege bölgesi klima servisi', href: '/izmir/klima-servisi' },
    { keyword: 'anadolu yakası teknik servis', href: '/istanbul' },
    { keyword: 'avrupa yakası teknik servis', href: '/istanbul' },
    { keyword: 'akdeniz bölgesi teknik servis', href: '/antalya' },
    { keyword: 'akdeniz bölgesi beyaz eşya servisi', href: '/antalya/beyaz-esya-servisi' },
    { keyword: 'karadeniz bölgesi teknik servis', href: '/trabzon' },
    { keyword: 'iç anadolu bölgesi teknik servis', href: '/ankara' },
  ];
}

function generateCommonSEOLinks(): InternalLink[] {
  return [
    { keyword: 'en iyi teknik servis', href: '/' },
    { keyword: 'ucuz teknik servis', href: '/' },
    { keyword: ' garantili teknik servis', href: '/' },
    { keyword: 'profesyonel beyaz eşya servisi', href: '/beyaz-esya-servisi' },
    { keyword: 'profesyonel kombi servisi', href: '/kombi-servisi' },
    { keyword: 'profesyonel klima servisi', href: '/klima-servisi' },
    { keyword: '24 saat teknik servis', href: '/iletisim' },
    { keyword: 'acil teknik servis', href: '/iletisim' },
    { keyword: 'tezgah üstü servis', href: '/iletisim' },
    { keyword: 'yetkili servis', href: '/hakkimizda' },
    { keyword: 'size en yakın teknik servis', href: '/iletisim' },
    { keyword: 'en yakın teknik servis', href: '/iletisim' },
  ];
}

function generateCityKeywordLinks(): InternalLink[] {
  const cityKeywords = [
    'izmir', 'manisa', 'istanbul', 'ankara', 'bursa', 'antalya', 'adana', 'gaziantep',
    'konya', 'kayseri', 'mersin', 'eskişehir', 'denizli', 'samsun', 'kahramanmaras',
    'diyarbakır', 'sakarya', 'trabzon', 'malatya', 'tekirdağ', 'aydın', 'balıkesir',
    'kütahya', 'çanakkale', 'sivas', 'çorum', 'niğde', 'uşak', 'zonguldak', 'kırşehir',
    'kırıkkale', 'erzincan', 'karaman', 'nevşehir', 'kars', 'aksaray', 'yozgat', 'çankırı',
    'artvin', 'şanlıurfa', 'kocaeli', 'rize', 'düzce', 'bitlis', 'siirt', 'kilis',
    'hakkari', 'kırklareli', 'bingöl', 'tunceli', 'muş', 'batman', 'şırnak', 'ağrı',
    'yalova', 'karabük', 'bartın', 'ardahan', 'gümüşhane', 'erzurum', 'mardin', 'van',
    'elazığ', 'hatay', 'isparta', 'afyon', 'bolu', 'kocaeli', 'izmit', 'gebze',
  ];
  
  const links: InternalLink[] = [];
  
  for (const city of cityKeywords) {
    links.push({ keyword: `${city} teknik servis`, href: `/${city}` });
    links.push({ keyword: `${city} beyaz eşya servisi`, href: `/${city}/beyaz-esya-servisi` });
    links.push({ keyword: `${city} kombi servisi`, href: `/${city}/kombi-servisi` });
    links.push({ keyword: `${city} klima servisi`, href: `/${city}/klima-servisi` });
    links.push({ keyword: `${city} buzdolabı servisi`, href: `/${city}/buzdolabi-servisi` });
    links.push({ keyword: `${city} çamaşır makinesi servisi`, href: `/${city}/camasir-makinesi-servisi` });
    links.push({ keyword: `${city} bulaşık makinesi servisi`, href: `/${city}/bulasik-makinesi-servisi` });
  }
  
  return links;
}

function generateBrandLinks(): InternalLink[] {
  const links: InternalLink[] = [];
  
  for (const brand of brands) {
    const brandName = brand.name.toLowerCase();
    links.push({ keyword: brandName, href: `/marka/${brand.slug}` });
    links.push({ keyword: `${brandName} servisi`, href: `/marka/${brand.slug}` });
    links.push({ keyword: `${brandName} tamiri`, href: `/marka/${brand.slug}` });
    links.push({ keyword: `${brandName} arızası`, href: `/marka/${brand.slug}` });
    links.push({ keyword: `${brandName} teknik servis`, href: `/marka/${brand.slug}` });
    
    // Şehirli marka linkleri
    for (const city of cities.slice(0, 10)) {
      const cityName = city.name.toLowerCase();
      links.push({ 
        keyword: `${cityName} ${brandName} servisi`, 
        href: `/${city.slug}/marka/${brand.slug}` 
      });
    }
  }
  
  return links;
}

const manualLinks: InternalLink[] = [
  { keyword: 'türkiye geneli teknik servis', href: '/' },
  { keyword: 'türkiye teknik servis', href: '/' },
  { keyword: 'tüm türkiye beyaz eşya servisi', href: '/beyaz-esya-servisi' },
  { keyword: 'tüm türkiye kombi servisi', href: '/kombi-servisi' },
  { keyword: 'tüm türkiye klima servisi', href: '/klima-servisi' },
  { keyword: 'ege bölgesi servis', href: '/izmir' },
  { keyword: 'akdeniz bölgesi servis', href: '/antalya' },
  { keyword: 'karadeniz bölgesi servis', href: '/trabzon' },
  { keyword: 'iç anadolu bölgesi servis', href: '/ankara' },
  { keyword: 'marmara bölgesi servis', href: '/istanbul' },
];

export const internalLinks: InternalLink[] = [
  ...manualLinks,
  ...generateCityServiceLinks(),
  ...generateCityOnlyLinks(),
  ...generateServiceOnlyLinks(),
  ...generateServiceTypeLinks(),
  ...generateRegionLinks(),
  ...generateCommonSEOLinks(),
  ...generateCityKeywordLinks(),
  ...generateBrandLinks(),
];

export const getInternalLinks = (): InternalLink[] => {
  return internalLinks;
};
