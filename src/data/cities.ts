import { City } from '@/types';

export const cities: City[] = [
  {
    id: 'izmir',
    name: 'İzmir',
    slug: 'izmir',
    plateCode: '35',
    population: 4425789,
    priority: 'high',
    coordinates: { lat: 38.4237, lng: 27.1428 },
    description: 'İzmir, Ege\'nin incisi olarak binlerce haneye teknik servis hizmeti sunmaktadır. Bornova, Karşıyaka, Konak, Alsancak gibi merkez ilçelerde ve tüm ilçelerde profesyonel servis ekibimizle hizmetinizdeyiz.',
    districts: [
      { id: 'bornova', name: 'Bornova', slug: 'bornova', citySlug: 'izmir' },
      { id: 'karsiyaka', name: 'Karşıyaka', slug: 'karsiyaka', citySlug: 'izmir' },
      { id: 'konak', name: 'Konak', slug: 'konak', citySlug: 'izmir' },
      { id: 'buca', name: 'Buca', slug: 'buca', citySlug: 'izmir' },
      { id: 'cigli', name: 'Çiğli', slug: 'cigli', citySlug: 'izmir' },
      { id: 'gaziemir', name: 'Gaziemir', slug: 'gaziemir', citySlug: 'izmir' },
      { id: 'balcova', name: 'Balçova', slug: 'balcova', citySlug: 'izmir' },
      { id: 'narlidere', name: 'Narlıdere', slug: 'narlidere', citySlug: 'izmir' },
      { id: 'torbali', name: 'Torbalı', slug: 'torbali', citySlug: 'izmir' },
      { id: 'menderes', name: 'Menderes', slug: 'menderes', citySlug: 'izmir' },
    ]
  },
  {
    id: 'manisa',
    name: 'Manisa',
    slug: 'manisa',
    plateCode: '45',
    population: 1463755,
    priority: 'high',
    coordinates: { lat: 38.6191, lng: 27.4289 },
    description: 'Manisa\'da merkez ve tüm ilçelerinde teknik servis hizmeti sunuyoruz. Şehzadeler, Yunusemre ve diğer ilçelerde profesyonel ekibimizle zamanında yanınızdayız.',
    districts: [
      { id: 'sehzadeler', name: 'Şehzadeler', slug: 'sehzadeler', citySlug: 'manisa' },
      { id: 'yunusemre', name: 'Yunusemre', slug: 'yunusemre', citySlug: 'manisa' },
      { id: 'akhisar', name: 'Akhisar', slug: 'akhisar', citySlug: 'manisa' },
      { id: 'salihli', name: 'Salihli', slug: 'salihli', citySlug: 'manisa' },
      { id: 'soma', name: 'Soma', slug: 'soma', citySlug: 'manisa' },
      { id: 'turgutlu', name: 'Turgutlu', slug: 'turgutlu', citySlug: 'manisa' },
      { id: 'alas', name: 'Alaşehir', slug: 'alas', citySlug: 'manisa' },
      { id: 'saruhanli', name: 'Saruhanlı', slug: 'saruhanli', citySlug: 'manisa' },
    ]
  },
  {
    id: 'istanbul',
    name: 'İstanbul',
    slug: 'istanbul',
    plateCode: '34',
    population: 15636290,
    priority: 'high',
    coordinates: { lat: 41.0082, lng: 28.9784 },
    description: 'İstanbul\'un Avrupa ve Anadolu yakasında tüm ilçelerinde teknik servis hizmeti. Kadıköy, Beşiktaş, Ataşehir ve diğer tüm ilçelerde profesyonel ekibimizle hizmetinizdeyiz.',
    districts: [
      { id: 'kadikoy', name: 'Kadıköy', slug: 'kadikoy', citySlug: 'istanbul' },
      { id: 'besiktas', name: 'Beşiktaş', slug: 'besiktas', citySlug: 'istanbul' },
      { id: 'atasehir', name: 'Ataşehir', slug: 'atasehir', citySlug: 'istanbul' },
      { id: 'uskudar', name: 'Üsküdar', slug: 'uskudar', citySlug: 'istanbul' },
      { id: 'maltepe', name: 'Maltepe', slug: 'maltepe', citySlug: 'istanbul' },
      { id: 'pendik', name: 'Pendik', slug: 'pendik', citySlug: 'istanbul' },
      { id: 'fatih', name: 'Fatih', slug: 'fatih', citySlug: 'istanbul' },
      { id: 'beyoglu', name: 'Beyoğlu', slug: 'beyoglu', citySlug: 'istanbul' },
      { id: 'basaksehir', name: 'Başakşehir', slug: 'basaksehir', citySlug: 'istanbul' },
      { id: 'sariyer', name: 'Sarıyer', slug: 'sariyer', citySlug: 'istanbul' },
    ]
  },
  {
    id: 'ankara',
    name: 'Ankara',
    slug: 'ankara',
    plateCode: '06',
    population: 5787415,
    priority: 'high',
    coordinates: { lat: 39.9334, lng: 32.8597 },
    description: 'Ankara\'da Çankaya, Keçiören, Mamak ve tüm ilçelerde profesyonel teknik servis hizmeti.',
    districts: [
      { id: 'cankaya', name: 'Çankaya', slug: 'cankaya', citySlug: 'ankara' },
      { id: 'kecioren', name: 'Keçiören', slug: 'kecioren', citySlug: 'ankara' },
      { id: 'mamak', name: 'Mamak', slug: 'mamak', citySlug: 'ankara' },
      { id: 'yenimahalle', name: 'Yenimahalle', slug: 'yenimahalle', citySlug: 'ankara' },
      { id: 'sincan', name: 'Sincan', slug: 'sincan', citySlug: 'ankara' },
      { id: 'polatli', name: 'Polatlı', slug: 'polatli', citySlug: 'ankara' },
      { id: 'cubuk', name: 'Çubuk', slug: 'cubuk', citySlug: 'ankara' },
      { id: 'elmadag', name: 'Elmadağ', slug: 'elmadag', citySlug: 'ankara' },
    ]
  },
  {
    id: 'bursa',
    name: 'Bursa',
    slug: 'bursa',
    plateCode: '16',
    population: 3106953,
    priority: 'high',
    coordinates: { lat: 40.1826, lng: 29.0665 },
    description: 'Bursa\'da merkez ve tüm ilçelerinde beyaz eşya, kombi ve klima servis hizmeti.',
    districts: [
      { id: 'nilufer', name: 'Nilüfer', slug: 'nilufer', citySlug: 'bursa' },
      { id: 'osmangazi', name: 'Osmangazi', slug: 'osmangazi', citySlug: 'bursa' },
      { id: 'yildirim', name: 'Yıldırım', slug: 'yildirim', citySlug: 'bursa' },
      { id: 'gemlik', name: 'Gemlik', slug: 'gemlik', citySlug: 'bursa' },
      { id: 'mudanya', name: 'Mudanya', slug: 'mudanya', citySlug: 'bursa' },
      { id: 'inegol', name: 'İnegöl', slug: 'inegol', citySlug: 'bursa' },
      { id: 'orhangazi', name: 'Orhangazi', slug: 'orhangazi', citySlug: 'bursa' },
    ]
  },
  {
    id: 'antalya',
    name: 'Antalya',
    slug: 'antalya',
    plateCode: '07',
    population: 2631525,
    priority: 'high',
    coordinates: { lat: 36.8969, lng: 30.7133 },
    description: 'Antalya\'da Alanya, Konyaaltı, Muratpaşa ve tüm ilçelerde teknik servis hizmeti.',
    districts: [
      { id: 'konyaalti', name: 'Konyaaltı', slug: 'konyaalti', citySlug: 'antalya' },
      { id: 'muratpasa', name: 'Muratpaşa', slug: 'muratpasa', citySlug: 'antalya' },
      { id: 'alanya', name: 'Alanya', slug: 'alanya', citySlug: 'antalya' },
      { id: 'kemer', name: 'Kemer', slug: 'kemer', citySlug: 'antalya' },
      { id: 'serik', name: 'Serik', slug: 'serik', citySlug: 'antalya' },
      { id: 'manavgat', name: 'Manavgat', slug: 'manavgat', citySlug: 'antalya' },
      { id: 'kumluca', name: 'Kumluca', slug: 'kumluca', citySlug: 'antalya' },
    ]
  },
  {
    id: 'adana',
    name: 'Adana',
    slug: 'adana',
    plateCode: '01',
    population: 2274805,
    priority: 'medium',
    coordinates: { lat: 37.0017, lng: 35.3213 },
    description: 'Adana\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'seyhan', name: 'Seyhan', slug: 'seyhan', citySlug: 'adana' },
      { id: 'yuregir', name: 'Yüreğir', slug: 'yuregir', citySlug: 'adana' },
      { id: 'cukurova', name: 'Çukurova', slug: 'cukurova', citySlug: 'adana' },
      { id: 'saimbeyli', name: 'Saimbeyli', slug: 'saimbeyli', citySlug: 'adana' },
    ]
  },
  {
    id: 'gaziantep',
    name: 'Gaziantep',
    slug: 'gaziantep',
    plateCode: '27',
    population: 2104000,
    priority: 'medium',
    coordinates: { lat: 37.0662, lng: 37.3833 },
    description: 'Gaziantep\'te merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'sehitkamil', name: 'Şehitkamil', slug: 'sehitkamil', citySlug: 'gaziantep' },
      { id: 'sehitler', name: 'Şehitler', slug: 'sehitler', citySlug: 'gaziantep' },
      { id: 'nizip', name: 'Nizip', slug: 'nizip', citySlug: 'gaziantep' },
      { id: 'islahiye', name: 'İslahiye', slug: 'islahiye', citySlug: 'gaziantep' },
    ]
  },
  {
    id: 'konya',
    name: 'Konya',
    slug: 'konya',
    plateCode: '42',
    population: 2235614,
    priority: 'medium',
    coordinates: { lat: 37.8746, lng: 32.4932 },
    description: 'Konya\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'selcuklu', name: 'Selçuklu', slug: 'selcuklu', citySlug: 'konya' },
      { id: 'meram', name: 'Meram', slug: 'meram', citySlug: 'konya' },
      { id: 'karatay', name: 'Karatay', slug: 'karatay', citySlug: 'konya' },
      { id: 'cumra', name: 'Çumra', slug: 'cumra', citySlug: 'konya' },
      { id: 'aksehir', name: 'Akşehir', slug: 'aksehir', citySlug: 'konya' },
    ]
  },
  {
    id: 'kayseri',
    name: 'Kayseri',
    slug: 'kayseri',
    plateCode: '38',
    population: 1436244,
    priority: 'medium',
    coordinates: { lat: 38.7312, lng: 35.4787 },
    description: 'Kayseri\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'kocasinan', name: 'Kocasinan', slug: 'kocasinan', citySlug: 'kayseri' },
      { id: 'melikgazi', name: 'Melikgazi', slug: 'melikgazi', citySlug: 'kayseri' },
      { id: 'talas', name: 'Talas', slug: 'talas', citySlug: 'kayseri' },
      { id: 'sarıoglan', name: 'Sarıoğlan', slug: 'sarioglan', citySlug: 'kayseri' },
    ]
  },
  {
    id: 'mersin',
    name: 'Mersin',
    slug: 'mersin',
    plateCode: '33',
    population: 1898237,
    priority: 'medium',
    coordinates: { lat: 36.8, lng: 34.6333 },
    description: 'Mersin\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'akdeniz', name: 'Akdeniz', slug: 'akdeniz', citySlug: 'mersin' },
      { id: 'yenisehir', name: 'Yenişehir', slug: 'yenisehir', citySlug: 'mersin' },
      { id: 'toroslar', name: 'Toroslar', slug: 'toroslar', citySlug: 'mersin' },
      { id: 'tarsus', name: 'Tarsus', slug: 'tarsus', citySlug: 'mersin' },
      { id: 'silifke', name: 'Silifke', slug: 'silifke', citySlug: 'mersin' },
    ]
  },
  {
    id: 'eskişehir',
    name: 'Eskişehir',
    slug: 'eskisehir',
    plateCode: '26',
    population: 906617,
    priority: 'medium',
    coordinates: { lat: 39.7667, lng: 30.5256 },
    description: 'Eskişehir\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'odunpazarı', name: 'Odunpazarı', slug: 'odunpazari', citySlug: 'eskisehir' },
      { id: 'tepebasi', name: 'Tepebaşı', slug: 'tepebasi', citySlug: 'eskisehir' },
      { id: ' Sivrihisar', name: 'Sivrihisar', slug: 'sivrihisar', citySlug: 'eskisehir' },
    ]
  },
  {
    id: 'denizli',
    name: 'Denizli',
    slug: 'denizli',
    plateCode: '20',
    population: 1050116,
    priority: 'medium',
    coordinates: { lat: 37.7765, lng: 29.0864 },
    description: 'Denizli\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'pamukkale', name: 'Pamukkale', slug: 'pamukkale', citySlug: 'denizli' },
      { id: 'merkezefendi', name: 'Merkezefendi', slug: 'merkezefendi', citySlug: 'denizli' },
      { id: 'acipayam', name: 'Acıpayam', slug: 'acipayam', citySlug: 'denizli' },
    ]
  },
  {
    id: 'samsun',
    name: 'Samsun',
    slug: 'samsun',
    plateCode: '55',
    population: 1377304,
    priority: 'medium',
    coordinates: { lat: 41.2928, lng: 36.3313 },
    description: 'Samsun\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'ilkadim', name: 'İlkadım', slug: 'ilkadim', citySlug: 'samsun' },
      { id: 'atakum', name: 'Atakum', slug: 'atakum', citySlug: 'samsun' },
      { id: 'canik', name: 'Canik', slug: 'canik', citySlug: 'samsun' },
      { id: 'bafra', name: 'Bafra', slug: 'bafra', citySlug: 'samsun' },
    ]
  },
  {
    id: 'kahramanmaras',
    name: 'Kahramanmaraş',
    slug: 'kahramanmaras',
    plateCode: '46',
    population: 1156128,
    priority: 'medium',
    coordinates: { lat: 37.5858, lng: 36.9371 },
    description: 'Kahramanmaraş\'ta merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'dulkadiroglu', name: 'Dulkadiroğlu', slug: 'dulkadiroglu', citySlug: 'kahramanmaras' },
      { id: 'onikisubat', name: 'Onikişubat', slug: 'onikisubat', citySlug: 'kahramanmaras' },
      { id: 'elbistan', name: 'Elbistan', slug: 'elbistan', citySlug: 'kahramanmaras' },
    ]
  },
  {
    id: 'diyarbakir',
    name: 'Diyarbakır',
    slug: 'diyarbakir',
    plateCode: '21',
    population: 1779365,
    priority: 'medium',
    coordinates: { lat: 37.9144, lng: 40.2306 },
    description: 'Diyarbakır\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'yenişehir', name: 'Yenişehir', slug: 'yenisehir', citySlug: 'diyarbakir' },
      { id: 'bağlar', name: 'Bağlar', slug: 'baglar', citySlug: 'diyarbakir' },
      { id: 'kayapınar', name: 'Kayapınar', slug: 'kayapinar', citySlug: 'diyarbakir' },
    ]
  },
  {
    id: 'sakarya',
    name: 'Sakarya',
    slug: 'sakarya',
    plateCode: '54',
    population: 1060865,
    priority: 'medium',
    coordinates: { lat: 40.694, lng: 30.4358 },
    description: 'Sakarya\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'adapazarı', name: 'Adapazarı', slug: 'adapazari', citySlug: 'sakarya' },
      { id: 'serdivan', name: 'Serdivan', slug: 'serdivan', citySlug: 'sakarya' },
      { id: 'akyazi', name: 'Akyazı', slug: 'akyazi', citySlug: 'sakarya' },
    ]
  },
  {
    id: 'trabzon',
    name: 'Trabzon',
    slug: 'trabzon',
    plateCode: '61',
    population: 807903,
    priority: 'medium',
    coordinates: { lat: 41.0027, lng: 39.7168 },
    description: 'Trabzon\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'ortahisar', name: 'Ortahisar', slug: 'ortahisar', citySlug: 'trabzon' },
      { id: 'akçaabat', name: 'Akçaabat', slug: 'akcaabat', citySlug: 'trabzon' },
      { id: 'of', name: 'Of', slug: 'of', citySlug: 'trabzon' },
    ]
  },
  {
    id: 'malatya',
    name: 'Malatya',
    slug: 'malatya',
    plateCode: '44',
    population: 808692,
    priority: 'medium',
    coordinates: { lat: 38.3552, lng: 38.3095 },
    description: 'Malatya\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'yeşilyurt', name: 'Yeşilyurt', slug: 'yesilyurt', citySlug: 'malatya' },
      { id: 'battalgazi', name: 'Battalgazi', slug: 'battalgazi', citySlug: 'malatya' },
      { id: 'doğanşehir', name: 'Doğanşehir', slug: 'dogansehir', citySlug: 'malatya' },
    ]
  },
  {
    id: 'tekirdağ',
    name: 'Tekirdağ',
    slug: 'tekirdag',
    plateCode: '59',
    population: 1090828,
    priority: 'medium',
    coordinates: { lat: 40.9833, lng: 27.5167 },
    description: 'Tekirdağ\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'süleymanpaşa', name: 'Süleymanpaşa', slug: 'suleymanpasa', citySlug: 'tekirdag' },
      { id: 'çorlu', name: 'Çorlu', slug: 'corlu', citySlug: 'tekirdag' },
      { id: 'çerkezköy', name: 'Çerkezköy', slug: 'cerkezkoy', citySlug: 'tekirdag' },
    ]
  },
  {
    id: 'aydin',
    name: 'Aydın',
    slug: 'aydin',
    plateCode: '09',
    population: 1123410,
    priority: 'medium',
    coordinates: { lat: 37.856, lng: 27.8416 },
    description: 'Aydın\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'efeler', name: 'Efeler', slug: 'efeler', citySlug: 'aydin' },
      { id: 'nazilli', name: 'Nazilli', slug: 'nazilli', citySlug: 'aydin' },
      { id: 'söke', name: 'Söke', slug: 'soke', citySlug: 'aydin' },
    ]
  },
  {
    id: 'balikesir',
    name: 'Balıkesir',
    slug: 'balikesir',
    plateCode: '10',
    population: 1245130,
    priority: 'medium',
    coordinates: { lat: 39.6484, lng: 27.8826 },
    description: 'Balıkesir\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'altieylül', name: 'Altıeylül', slug: 'altieylul', citySlug: 'balikesir' },
      { id: 'karesi', name: 'Karesi', slug: 'karesi', citySlug: 'balikesir' },
      { id: 'bandırma', name: 'Bandırma', slug: 'bandirma', citySlug: 'balikesir' },
    ]
  },
  {
    id: 'kutahya',
    name: 'Kütahya',
    slug: 'kutahya',
    plateCode: '43',
    population: 578640,
    priority: 'low',
    coordinates: { lat: 39.4242, lng: 29.9833 },
    description: 'Kütahya\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'kutahya' },
      { id: 'tavşanlı', name: 'Tavşanlı', slug: 'tavsanh', citySlug: 'kutahya' },
    ]
  },
  {
    id: 'canakkale',
    name: 'Çanakkale',
    slug: 'canakkale',
    plateCode: '17',
    population: 559383,
    priority: 'low',
    coordinates: { lat: 40.1553, lng: 26.4142 },
    description: 'Çanakkale\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'canakkale' },
      { id: 'biga', name: 'Biga', slug: 'biga', citySlug: 'canakkale' },
    ]
  },
  {
    id: 'sivas',
    name: 'Sivas',
    slug: 'sivas',
    plateCode: '58',
    population: 621301,
    priority: 'low',
    coordinates: { lat: 39.7477, lng: 37.0179 },
    description: 'Sivas\'ta merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'sivas' },
      { id: 'şarkışla', name: 'Şarkışla', slug: 'sarkisla', citySlug: 'sivas' },
    ]
  },
  {
    id: 'corum',
    name: 'Çorum',
    slug: 'corum',
    plateCode: '19',
    population: 526282,
    priority: 'low',
    coordinates: { lat: 40.5489, lng: 34.9533 },
    description: 'Çorum\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'corum' },
      { id: 'osmancik', name: 'Osmancık', slug: 'osmancik', citySlug: 'corum' },
    ]
  },
  {
    id: 'nigde',
    name: 'Niğde',
    slug: 'nigde',
    plateCode: '51',
    population: 362071,
    priority: 'low',
    coordinates: { lat: 37.9667, lng: 34.6939 },
    description: 'Niğde\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'nigde' },
      { id: 'bor', name: 'Bor', slug: 'bor', citySlug: 'nigde' },
    ]
  },
  {
    id: 'usak',
    name: 'Uşak',
    slug: 'usak',
    plateCode: '64',
    population: 373183,
    priority: 'low',
    coordinates: { lat: 38.6823, lng: 29.4082 },
    description: 'Uşak\'ta merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'usak' },
      { id: 'banaz', name: 'Banaz', slug: 'banaz', citySlug: 'usak' },
    ]
  },
  {
    id: 'zonguldak',
    name: 'Zonguldak',
    slug: 'zonguldak',
    plateCode: '67',
    population: 596053,
    priority: 'low',
    coordinates: { lat: 41.4564, lng: 31.7987 },
    description: 'Zonguldak\'ta merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'zonguldak' },
      { id: 'eregli', name: 'Ereğli', slug: 'eregli', citySlug: 'zonguldak' },
    ]
  },
  {
    id: 'kirsehir',
    name: 'Kırşehir',
    slug: 'kirsehir',
    plateCode: '40',
    population: 243042,
    priority: 'low',
    coordinates: { lat: 39.1425, lng: 34.1709 },
    description: 'Kırşehir\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'kirsehir' },
    ]
  },
  {
    id: 'kirkkale',
    name: 'Kırıkkale',
    slug: 'kirkkale',
    plateCode: '71',
    population: 277729,
    priority: 'low',
    coordinates: { lat: 39.8468, lng: 33.5153 },
    description: 'Kırıkkale\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'kirkkale' },
    ]
  },
  {
    id: 'erzincan',
    name: 'Erzincan',
    slug: 'erzincan',
    plateCode: '24',
    population: 237185,
    priority: 'low',
    coordinates: { lat: 39.75, lng: 39.5 },
    description: 'Erzincan\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'erzincan' },
    ]
  },
  {
    id: 'karaman',
    name: 'Karaman',
    slug: 'karaman',
    plateCode: '70',
    population: 258838,
    priority: 'low',
    coordinates: { lat: 37.1759, lng: 33.2287 },
    description: 'Karaman\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'karaman' },
    ]
  },
  {
    id: ' Nevşehir',
    name: 'Nevşehir',
    slug: 'nevsehir',
    plateCode: '50',
    population: 308003,
    priority: 'low',
    coordinates: { lat: 38.6939, lng: 34.6857 },
    description: 'Nevşehir\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'nevsehir' },
    ]
  },
  {
    id: 'kars',
    name: 'Kars',
    slug: 'kars',
    plateCode: '36',
    population: 274289,
    priority: 'low',
    coordinates: { lat: 40.6167, lng: 43.1 },
    description: 'Kars\'ta merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'kars' },
    ]
  },
  {
    id: 'aksaray',
    name: 'Aksaray',
    slug: 'aksaray',
    plateCode: '68',
    population: 412245,
    priority: 'low',
    coordinates: { lat: 38.3687, lng: 34.037 },
    description: 'Aksaray\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'aksaray' },
    ]
  },
  {
    id: 'yozgat',
    name: 'Yozgat',
    slug: 'yozgat',
    plateCode: '66',
    population: 418650,
    priority: 'low',
    coordinates: { lat: 39.8181, lng: 34.8147 },
    description: 'Yozgat\'ta merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'yozgat' },
    ]
  },
  {
    id: 'cankiri',
    name: 'Çankırı',
    slug: 'cankiri',
    plateCode: '18',
    population: 195789,
    priority: 'low',
    coordinates: { lat: 40.6013, lng: 33.6134 },
    description: 'Çankırı\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'cankiri' },
    ]
  },
  {
    id: 'artvin',
    name: 'Artvin',
    slug: 'artvin',
    plateCode: '08',
    population: 166143,
    priority: 'low',
    coordinates: { lat: 41.1828, lng: 41.8183 },
    description: 'Artvin\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'artvin' },
    ]
  },
  {
    id: 'sanliurfa',
    name: 'Şanlıurfa',
    slug: 'sanliurfa',
    plateCode: '63',
    population: 2061355,
    priority: 'medium',
    coordinates: { lat: 37.1591, lng: 38.7969 },
    description: 'Şanlıurfa\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'haliliye', name: 'Haliliye', slug: 'haliliye', citySlug: 'sanliurfa' },
      { id: 'eyyubiye', name: 'Eyyübiye', slug: 'eyyubiye', citySlug: 'sanliurfa' },
      { id: 'karaköprü', name: 'Karaköprü', slug: 'karakopru', citySlug: 'sanliurfa' },
    ]
  },
  {
    id: 'kocaeli',
    name: 'Kocaeli',
    slug: 'kocaeli',
    plateCode: '41',
    population: 1958237,
    priority: 'high',
    coordinates: { lat: 40.8533, lng: 29.8815 },
    description: 'Kocaeli\'nde merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'izmit', name: 'İzmit', slug: 'izmit', citySlug: 'kocaeli' },
      { id: 'gebze', name: 'Gebze', slug: 'gebze', citySlug: 'kocaeli' },
      { id: 'körfez', name: 'Körfez', slug: 'korfez', citySlug: 'kocaeli' },
      { id: 'gölcük', name: 'Gölcük', slug: 'golcuk', citySlug: 'kocaeli' },
    ]
  },
  {
    id: 'rize',
    name: 'Rize',
    slug: 'rize',
    plateCode: '53',
    population: 344359,
    priority: 'low',
    coordinates: { lat: 41.0201, lng: 40.5234 },
    description: 'Rize\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'rize' },
      { id: 'çayeli', name: 'Çayeli', slug: 'cayeli', citySlug: 'rize' },
    ]
  },
  {
    id: 'duzce',
    name: 'Düzce',
    slug: 'duzce',
    plateCode: '81',
    population: 395679,
    priority: 'low',
    coordinates: { lat: 40.8438, lng: 31.1565 },
    description: 'Düzce\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'duzce' },
      { id: 'akçakoca', name: 'Akçakoca', slug: 'akcakoca', citySlug: 'duzce' },
    ]
  },
  {
    id: 'bitlis',
    name: 'Bitlis',
    slug: 'bitlis',
    plateCode: '13',
    population: 349581,
    priority: 'low',
    coordinates: { lat: 38.4004, lng: 42.1095 },
    description: 'Bitlis\'te merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'bitlis' },
    ]
  },
  {
    id: 'siirt',
    name: 'Siirt',
    slug: 'siirt',
    plateCode: '56',
    population: 331670,
    priority: 'low',
    coordinates: { lat: 37.9333, lng: 41.95 },
    description: 'Siirt\'te merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'siirt' },
    ]
  },
  {
    id: 'kilis',
    name: 'Kilis',
    slug: 'kilis',
    plateCode: '79',
    population: 142490,
    priority: 'low',
    coordinates: { lat: 36.7184, lng: 37.1212 },
    description: 'Kilis\'te merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'kilis' },
    ]
  },
  {
    id: 'hakkari',
    name: 'Hakkari',
    slug: 'hakkari',
    plateCode: '30',
    population: 280991,
    priority: 'low',
    coordinates: { lat: 37.5744, lng: 43.7408 },
    description: 'Hakkari\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'hakkari' },
    ]
  },
  {
    id: 'kirklareli',
    name: 'Kırklareli',
    slug: 'kirklareli',
    plateCode: '39',
    population: 361836,
    priority: 'low',
    coordinates: { lat: 41.7333, lng: 27.2167 },
    description: 'Kırklareli\'nde merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'kirklareli' },
      { id: 'lüleburgaz', name: 'Lüleburgaz', slug: 'luleburgaz', citySlug: 'kirklareli' },
    ]
  },
  {
    id: 'bingol',
    name: 'Bingöl',
    slug: 'bingol',
    plateCode: '12',
    population: 282324,
    priority: 'low',
    coordinates: { lat: 38.8855, lng: 40.4966 },
    description: 'Bingöl\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'bingol' },
    ]
  },
  {
    id: 'tunceli',
    name: 'Tunceli',
    slug: 'tunceli',
    plateCode: '62',
    population: 88481,
    priority: 'low',
    coordinates: { lat: 39.1079, lng: 39.5401 },
    description: 'Tunceli\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'tunceli' },
    ]
  },
  {
    id: 'mus',
    name: 'Muş',
    slug: 'mus',
    plateCode: '49',
    population: 405228,
    priority: 'low',
    coordinates: { lat: 38.9462, lng: 41.7539 },
    description: 'Muş\'ta merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'mus' },
    ]
  },
  {
    id: 'batman',
    name: 'Batman',
    slug: 'batman',
    plateCode: '72',
    population: 635178,
    priority: 'low',
    coordinates: { lat: 37.8812, lng: 41.1351 },
    description: 'Batman\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'batman' },
    ]
  },
  {
    id: 'sirnak',
    name: 'Şırnak',
    slug: 'sirnak',
    plateCode: '73',
    population: 537762,
    priority: 'low',
    coordinates: { lat: 37.4187, lng: 42.4918 },
    description: 'Şırnak\'ta merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'sirnak' },
    ]
  },
  {
    id: ' Agri',
    name: 'Ağrı',
    slug: 'agri',
    plateCode: '04',
    population: 528399,
    priority: 'low',
    coordinates: { lat: 39.7191, lng: 43.0503 },
    description: 'Ağrı\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'agri' },
    ]
  },
  {
    id: 'yalova',
    name: 'Yalova',
    slug: 'yalova',
    plateCode: '77',
    population: 288078,
    priority: 'low',
    coordinates: { lat: 40.65, lng: 29.2667 },
    description: 'Yalova\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'yalova' },
    ]
  },
  {
    id: 'karabuk',
    name: 'Karabük',
    slug: 'karabuk',
    plateCode: '78',
    population: 249287,
    priority: 'low',
    coordinates: { lat: 41.2061, lng: 32.6204 },
    description: 'Karabük\'te merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'karabuk' },
    ]
  },
  {
    id: 'bartin',
    name: 'Bartın',
    slug: 'bartin',
    plateCode: '74',
    population: 198999,
    priority: 'low',
    coordinates: { lat: 41.6344, lng: 32.3375 },
    description: 'Bartın\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'bartin' },
    ]
  },
  {
    id: 'ardahan',
    name: 'Ardahan',
    slug: 'ardahan',
    plateCode: '75',
    population: 97465,
    priority: 'low',
    coordinates: { lat: 41.1105, lng: 42.7022 },
    description: 'Ardahan\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'ardahan' },
    ]
  },
  {
    id: 'gumushane',
    name: 'Gümüşhane',
    slug: 'gumushane',
    plateCode: '29',
    population: 169166,
    priority: 'low',
    coordinates: { lat: 40.4386, lng: 39.5086 },
    description: 'Gümüşhane\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'gumushane' },
    ]
  },
  {
    id: 'caycuma',
    name: 'Zonguldak',
    slug: 'caycuma',
    plateCode: '67',
    population: 150188,
    priority: 'low',
    coordinates: { lat: 41.4271, lng: 32.3274 },
    description: 'Zonguldak\'ta merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'caycuma', name: 'Çaycuma', slug: 'caycuma', citySlug: 'caycuma' },
    ]
  },
  {
    id: 'amasra',
    name: 'Bartın',
    slug: 'amasra',
    plateCode: '74',
    population: 57454,
    priority: 'low',
    coordinates: { lat: 41.6297, lng: 32.3865 },
    description: 'Bartın Amasra\'da teknik servis hizmeti.',
    districts: [
      { id: 'amasra', name: 'Amasra', slug: 'amasra', citySlug: 'amasra' },
    ]
  },
  {
    id: 'karasu',
    name: 'Sakarya',
    slug: 'karasu',
    plateCode: '54',
    population: 64008,
    priority: 'low',
    coordinates: { lat: 41.1962, lng: 30.6844 },
    description: 'Sakarya Karasu\'da teknik servis hizmeti.',
    districts: [
      { id: 'karasu', name: 'Karasu', slug: 'karasu', citySlug: 'karasu' },
    ]
  },
  {
    id: 'edremit',
    name: 'Balıkesir',
    slug: 'edremit',
    plateCode: '10',
    population: 148341,
    priority: 'low',
    coordinates: { lat: 39.5967, lng: 27.0181 },
    description: 'Balıkesir Edremit\'te teknik servis hizmeti.',
    districts: [
      { id: 'edremit', name: 'Edremit', slug: 'edremit', citySlug: 'edremit' },
    ]
  },
  {
    id: 'bodrum',
    name: 'Muğla',
    slug: 'bodrum',
    plateCode: '48',
    population: 180044,
    priority: 'low',
    coordinates: { lat: 37.0343, lng: 27.4305 },
    description: 'Muğla Bodrum\'da teknik servis hizmeti.',
    districts: [
      { id: 'bodrum', name: 'Bodrum', slug: 'bodrum', citySlug: 'bodrum' },
    ]
  },
  {
    id: 'marmaris',
    name: 'Muğla',
    slug: 'marmaris',
    plateCode: '48',
    population: 94685,
    priority: 'low',
    coordinates: { lat: 36.8568, lng: 28.2745 },
    description: 'Muğla Marmaris\'te teknik servis hizmeti.',
    districts: [
      { id: 'marmaris', name: 'Marmaris', slug: 'marmaris', citySlug: 'marmaris' },
    ]
  },
  {
    id: 'fethiye',
    name: 'Muğla',
    slug: 'fethiye',
    plateCode: '48',
    population: 161691,
    priority: 'low',
    coordinates: { lat: 36.6217, lng: 29.2394 },
    description: 'Muğla Fethiye\'de teknik servis hizmeti.',
    districts: [
      { id: 'fethiye', name: 'Fethiye', slug: 'fethiye', citySlug: 'fethiye' },
    ]
  },
  {
    id: 'kusadasi',
    name: 'Aydın',
    slug: 'kusadasi',
    plateCode: '09',
    population: 68782,
    priority: 'low',
    coordinates: { lat: 37.8656, lng: 27.8418 },
    description: 'Aydın Kuşadası\'nda teknik servis hizmeti.',
    districts: [
      { id: 'kusadasi', name: 'Kuşadası', slug: 'kusadasi', citySlug: 'kusadasi' },
    ]
  },
  {
    id: 'cesme',
    name: 'İzmir',
    slug: 'cesme',
    plateCode: '35',
    population: 46667,
    priority: 'low',
    coordinates: { lat: 38.3256, lng: 26.3074 },
    description: 'İzmir Çeşme\'de teknik servis hizmeti.',
    districts: [
      { id: 'cesme', name: 'Çeşme', slug: 'cesme', citySlug: 'cesme' },
    ]
  },
  {
    id: 'cappadocia',
    name: 'Nevşehir',
    slug: 'cappadocia',
    plateCode: '50',
    population: 5000,
    priority: 'low',
    coordinates: { lat: 38.6431, lng: 34.8289 },
    description: 'Nevşehir Kapadokya bölgesinde teknik servis hizmeti.',
    districts: [
      { id: 'ürgüp', name: 'Ürgüp', slug: 'urgup', citySlug: 'cappadocia' },
      { id: 'gülşehir', name: 'Gülşehir', slug: 'gulsehir', citySlug: 'cappadocia' },
    ]
  },
  {
    id: 'urgup',
    name: 'Nevşehir',
    slug: 'urgup',
    plateCode: '50',
    population: 35411,
    priority: 'low',
    coordinates: { lat: 38.6313, lng: 34.9085 },
    description: 'Nevşehir Ürgüp\'te teknik servis hizmeti.',
    districts: [
      { id: 'urgup', name: 'Ürgüp', slug: 'urgup', citySlug: 'urgup' },
    ]
  },
  {
    id: 'safranbolu',
    name: 'Karabük',
    slug: 'safranbolu',
    plateCode: '78',
    population: 64395,
    priority: 'low',
    coordinates: { lat: 41.2495, lng: 32.6844 },
    description: 'Karabük Safranbolu\'nda teknik servis hizmeti.',
    districts: [
      { id: 'safranbolu', name: 'Safranbolu', slug: 'safranbolu', citySlug: 'safranbolu' },
    ]
  },
  {
    id: 'uludag',
    name: 'Bursa',
    slug: 'uludag',
    plateCode: '16',
    population: 5000,
    priority: 'low',
    coordinates: { lat: 40.0833, lng: 29.0833 },
    description: 'Bursa Uludağ\'da teknik servis hizmeti.',
    districts: [
      { id: 'uludag', name: 'Uludağ', slug: 'uludag', citySlug: 'uludag' },
    ]
  },
  {
    id: 'palandoken',
    name: 'Erzurum',
    slug: 'palandoken',
    plateCode: '25',
    population: 35000,
    priority: 'low',
    coordinates: { lat: 39.8972, lng: 41.2678 },
    description: 'Erzurum Palandöken\'de teknik servis hizmeti.',
    districts: [
      { id: 'palandoken', name: 'Palandöken', slug: 'palandoken', citySlug: 'palandoken' },
    ]
  },
  {
    id: 'erzurum',
    name: 'Erzurum',
    slug: 'erzurum',
    plateCode: '25',
    population: 762112,
    priority: 'low',
    coordinates: { lat: 39.9043, lng: 41.2679 },
    description: 'Erzurum\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'palandoken', name: 'Palandöken', slug: 'palandoken', citySlug: 'erzurum' },
      { id: 'yakutiye', name: 'Yakutiye', slug: 'yakutiye', citySlug: 'erzurum' },
    ]
  },
  {
    id: 'mardin',
    name: 'Mardin',
    slug: 'mardin',
    plateCode: '47',
    population: 862757,
    priority: 'low',
    coordinates: { lat: 37.3212, lng: 40.7245 },
    description: 'Mardin\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'artuklu', name: 'Artuklu', slug: 'artuklu', citySlug: 'mardin' },
      { id: 'nusaybin', name: 'Nusaybin', slug: 'nusaybin', citySlug: 'mardin' },
    ]
  },
  {
    id: 'van',
    name: 'Van',
    slug: 'van',
    plateCode: '65',
    population: 1100190,
    priority: 'low',
    coordinates: { lat: 38.4891, lng: 43.4089 },
    description: 'Van\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'tuşba', name: 'Tuşba', slug: 'tusba', citySlug: 'van' },
      { id: 'edremit', name: 'Edremit', slug: 'edremit', citySlug: 'van' },
    ]
  },
  {
    id: 'elazig',
    name: 'Elazığ',
    slug: 'elazig',
    plateCode: '23',
    population: 587960,
    priority: 'low',
    coordinates: { lat: 38.681, lng: 39.2264 },
    description: 'Elazığ\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'elazig' },
    ]
  },
  {
    id: 'hatay',
    name: 'Hatay',
    slug: 'hatay',
    plateCode: '31',
    population: 1605953,
    priority: 'medium',
    coordinates: { lat: 36.4018, lng: 36.3498 },
    description: 'Hatay\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'antakya', name: 'Antakya', slug: 'antakya', citySlug: 'hatay' },
      { id: 'iskenderun', name: 'İskenderun', slug: 'iskenderun', citySlug: 'hatay' },
    ]
  },
  {
    id: 'isparta',
    name: 'Isparta',
    slug: 'isparta',
    plateCode: '32',
    population: 445325,
    priority: 'low',
    coordinates: { lat: 37.7648, lng: 30.5566 },
    description: 'Isparta\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'isparta' },
    ]
  },
  {
    id: 'afyon',
    name: 'Afyonkarahisar',
    slug: 'afyon',
    plateCode: '03',
    population: 736912,
    priority: 'low',
    coordinates: { lat: 38.7312, lng: 30.5387 },
    description: 'Afyonkarahisar\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'afyon' },
    ]
  },
  {
    id: 'bolu',
    name: 'Bolu',
    slug: 'bolu',
    plateCode: '14',
    population: 320014,
    priority: 'low',
    coordinates: { lat: 40.7355, lng: 31.6061 },
    description: 'Bolu\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
    districts: [
      { id: 'merkez', name: 'Merkez', slug: 'merkez', citySlug: 'bolu' },
    ]
  },
  {
    id: 'amkara',
    name: 'Ankara',
    slug: 'ankara',
    plateCode: '06',
    population: 5787415,
    priority: 'high',
    coordinates: { lat: 39.9334, lng: 32.8597 },
    description: 'Ankara\'da merkez ve tüm ilçelerinde profesyonel teknik servis hizmeti.',
    districts: [
      { id: 'cankaya', name: 'Çankaya', slug: 'cankaya', citySlug: 'ankara' },
      { id: 'kecioren', name: 'Keçiören', slug: 'kecioren', citySlug: 'ankara' },
      { id: 'mamak', name: 'Mamak', slug: 'mamak', citySlug: 'ankara' },
    ]
  },
];

export const getCityBySlug = (slug: string): City | undefined => {
  return cities.find(city => city.slug === slug);
};

export const getCityDistricts = (citySlug: string) => {
  const city = getCityBySlug(citySlug);
  return city?.districts || [];
};

export const priorityCities = cities.filter(city => city.priority === 'high');
export const mediumPriorityCities = cities.filter(city => city.priority === 'medium');
export const allCities = cities;
