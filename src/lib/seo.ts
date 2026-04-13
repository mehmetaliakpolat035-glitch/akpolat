import { Metadata } from 'next';
import { getServiceBySlug } from '@/data/services';
import { getCityBySlug } from '@/data/cities';
import { SITE_EMAIL, SITE_NAME, SITE_URL, toAbsoluteUrl } from '@/lib/site';

// Kapsamlı anahtar kelime grupları
const serviceKeywords: Record<string, string[]> = {
  'beyaz-esya-servisi': [
    'beyaz eşya teknik servis', 'beyaz eşya tamir', 'beyaz eşya bakım', 'beyaz eşya arıza',
    'beyaz eşya servisi', 'beyaz eşya tamircisi', 'beyaz eşya ustası', 'beyaz eşya onarım',
    'buzdolabı servisi', 'buzdolabı tamir', 'buzdolabı arıza', 'buzdolabı bakım',
    'çamaşır makinesi servisi', 'çamaşır makinesi tamir', 'çamaşır makinesi arıza',
    'bulaşık makinesi servisi', 'bulaşık makinesi tamir', 'bulaşık makinesi arıza',
    'ankastre servisi', 'ankastre tamir', 'fırın servisi', 'ocak servisi',
    'kurutma makinesi servisi', 'derin dondurucu servisi', 'buz makinesi servisi',
    'elektrikli süpürge servisi', 'ütü servisi', 'blender servisi', 'mikrodalga servisi',
    'beyaz eşya yedek parça', 'beyaz eşya montaj', 'beyaz eşya kurulum',
    'beyaz eşya gaz dolumu', 'beyaz eşya kompresör değişimi', 'beyaz eşya termostat',
    'beyaz eşya elektronik kart', 'beyaz eşya motor değişimi', 'beyaz eşya pompa',
    'beyaz eşya kapak contası', 'beyaz eşya rezistans', 'beyaz eşya sensör',
    'arçelik servisi', 'beko servisi', 'vestel servisi', 'bosch servisi',
    'siemens servisi', 'profilo servisi', 'altus servisi', 'regal servisi'
  ],
  'kombi-servisi': [
    'kombi teknik servis', 'kombi tamir', 'kombi bakım', 'kombi arıza', 'kombi servisi',
    'kombi tamiri', 'kombi ustası', 'kombi onarım', 'kombi montaj', 'kombi kurulum',
    'kombi petek temizliği', 'kombi bakım fiyatları', 'kombi arıza kodları',
    'kombi su basıncı', 'kombi sıcak su', 'kombi petek ısıtmıyor', 'kombi ses yapıyor',
    'kombi su damlatıyor', 'kombi çalışmıyor', 'kombi ateşleme arızası',
    'kombi e01 arızası', 'kombi e02 arızası', 'kombi e03 arızası', 'kombi f1 arızası',
    'kombi gaz valfi', 'kombi eşanjör', 'kombi pompa', 'kombi three-way vana',
    'kombi genleşme tankı', 'kombi hava purjörü', 'kombi filtre temizliği',
    'kombi anakart tamiri', 'kombi eşanjör tamiri', 'kombi eşanjör değişimi',
    'vaillant kombi servisi', 'buderus kombi servisi', 'viessmann kombi servisi',
    'demirdöküm kombi servisi', 'baymak kombi servisi', 'alarko kombi servisi',
    'ferroli kombi servisi', 'immergas kombi servisi', 'eca kombi servisi',
    'protherm kombi servisi', 'ariston kombi servisi', 'bosch kombi servisi'
  ],
  'klima-servisi': [
    'klima teknik servis', 'klima tamir', 'klima bakım', 'klima arıza', 'klima servisi',
    'klima tamiri', 'klima ustası', 'klima onarım', 'klima montaj', 'klima kurulum',
    'klima gaz dolumu', 'klima bakım fiyatları', 'klima arıza kodları', 'klima söküm',
    'klima taşıma', 'klima yer değiştirme', 'klima iç ünite', 'klima dış ünite',
    'klima soğutmuyor', 'klima ısıtmıyor', 'klima su damlatıyor', 'klima ses yapıyor',
    'klima koku yapıyor', 'klima fan çalışmıyor', 'klima kompresör arızası',
    'klima gaz kaçağı', 'klima boru temizliği', 'klima filtre temizliği',
    'klima elektronik kart', 'klima sensör değişimi', 'klima fan motoru',
    'klima kompresör değişimi', 'klima eşanjör temizliği', 'klima freon dolumu',
    'split klima servisi', 'multi klima servisi', 'kaset tipi klima servisi',
    'salon tipi klima servisi', 'mobil klima servisi', 'gizli tavan klima servisi',
    'vestel klima servisi', 'arçelik klima servisi', 'beko klima servisi',
    'midea klima servisi', 'daikin klima servisi', 'mitsubishi klima servisi',
    'lg klima servisi', 'samsung klima servisi', 'toshiba klima servisi',
    'fujitsu klima servisi', 'hitachi klima servisi', 'carrier klima servisi',
    'trane klima servisi', 'philco klima servisi', 'aux klima servisi'
  ],
  'buzdolabi-servisi': [
    'buzdolabı teknik servis', 'buzdolabı tamir', 'buzdolabı bakım', 'buzdolabı arıza',
    'buzdolabı servisi', 'buzdolabı tamiri', 'buzdolabı ustası', 'buzdolabı onarım',
    'buzdolabı soğutmuyor', 'buzdolabı dondurucu çalışmıyor', 'buzdolabı ses yapıyor',
    'buzdolabı su damlatıyor', 'buzdolabı buzlanma', 'buzdolabı ışığı yanmıyor',
    'buzdolabı kapak kapanmıyor', 'buzdolabı koku yapıyor', 'buzdolabı çok çalışıyor',
    'buzdolabı kompresör arızası', 'buzdolabı gaz kaçağı', 'buzdolabı termostat',
    'buzdolabı fan motoru', 'buzdolabı no frost', 'buzdolabı buz makinesi',
    'buzdolabı su sebili', 'buzdolabı elektronik kart', 'buzdolabı sensör',
    'buzdolabı rezistans', 'buzdolabı defrost', 'buzdolabı contası',
    'buzdolabı kompresör değişimi', 'buzdolabı gaz dolumu', 'buzdolabı fan değişimi',
    'derin dondurucu servisi', 'derin dondurucu tamir', 'derin dondurucu arıza',
    'side by side buzdolabı servisi', 'no frost buzdolabı servisi',
    'çift kapılı buzdolabı servisi', 'üç kapılı buzdolabı servisi',
    'endüstriyel buzdolabı servisi', 'sütlük buzdolabı servisi'
  ],
  'camasir-makinesi-servisi': [
    'çamaşır makinesi teknik servis', 'çamaşır makinesi tamir', 'çamaşır makinesi bakım',
    'çamaşır makinesi arıza', 'çamaşır makinesi servisi', 'çamaşır makinesi tamiri',
    'çamaşır makinesi ustası', 'çamaşır makinesi onarım', 'çamaşır makinesi kurulum',
    'çamaşır makinesi su almıyor', 'çamaşır makinesi su boşaltmıyor', 'çamaşır makinesi sıkışma',
    'çamaşır makinesi titriyor', 'çamaşır makinesi ses yapıyor', 'çamaşır makinesi dönmüyor',
    'çamaşır makinesi ısınmıyor', 'çamaşır makinesi kapak açılmıyor', 'çamaşır makinesi kilitleniyor',
    'çamaşır makinesi su kaçırıyor', 'çamaşır makinesi deterjan çekmecesi',
    'çamaşır makinesi elektronik kart', 'çamaşır makinesi motor arızası',
    'çamaşır makinesi rulman değişimi', 'çamaşır makinesi amortisör değişimi',
    'çamaşır makinesi kayış değişimi', 'çamaşır makinesi pompa değişimi',
    'çamaşır makinesi rezistans değişimi', 'çamaşır makinesi termostat',
    'çamaşır makinesi kapak kilidi', 'çamaşır makinesi su giriş valfi',
    'kurutma makinesi servisi', 'kurutma makinesi tamir', 'kurutma makinesi arıza',
    'çamaşır makinesi kireç temizliği', 'çamaşır makinesi tambur temizliği'
  ],
  'bulasik-makinesi-servisi': [
    'bulaşık makinesi teknik servis', 'bulaşık makinesi tamir', 'bulaşık makinesi bakım',
    'bulaşık makinesi arıza', 'bulaşık makinesi servisi', 'bulaşık makinesi tamiri',
    'bulaşık makinesi ustası', 'bulaşık makinesi onarım', 'bulaşık makinesi kurulum',
    'bulaşık makinesi su almıyor', 'bulaşık makinesi su boşaltmıyor', 'bulaşık makinesi yıkamıyor',
    'bulaşık makinesi kurutmuyor', 'bulaşık makinesi ısıtmıyor', 'bulaşık makinesi ses yapıyor',
    'bulaşık makinesi su kaçırıyor', 'bulaşık makinesi koku yapıyor', 'bulaşık makinesi köpüklüyor',
    'bulaşık makinesi deterjan almıyor', 'bulaşık makinesi parlatici almıyor', 'bulaşık makinesi tuz almıyor',
    'bulaşık makinesi elektronik kart', 'bulaşık makinesi pompa arızası',
    'bulaşık makinesi rezistans değişimi', 'bulaşık makinesi motor değişimi',
    'bulaşık makinesi kapak contası', 'bulaşık makinesi sprey kolu',
    'bulaşık makinesi filtre temizliği', 'bulaşık makinesi gider hortumu',
    'bulaşık makinesi su yumuşatıcı', 'bulaşık makinesi tuz kutusu',
    'ankastre bulaşık makinesi servisi', 'solo bulaşık makinesi servisi',
    'yarı ankastre bulaşık makinesi servisi', 'minyatür bulaşık makisi servisi'
  ]
};

// Şehir bazlı anahtar kelime varyasyonları
const cityVariations = (cityName: string): string[] => [
  `${cityName} teknik servis`,
  `${cityName} beyaz eşya servisi`,
  `${cityName} kombi servisi`,
  `${cityName} klima servisi`,
  `${cityName} buzdolabı servisi`,
  `${cityName} çamaşır makinesi servisi`,
  `${cityName} bulaşık makinesi servisi`,
  `${cityName} beyaz eşya tamir`,
  `${cityName} kombi tamir`,
  `${cityName} klima tamir`,
  `${cityName} buzdolabı tamir`,
  `${cityName} çamaşır makinesi tamir`,
  `${cityName} bulaşık makinesi tamir`,
  `${cityName} beyaz eşya arıza`,
  `${cityName} kombi arıza`,
  `${cityName} klima arıza`,
  `${cityName} en yakın teknik servis`,
  `${cityName} en yakın beyaz eşya servisi`,
  `${cityName} en yakın kombi servisi`,
  `${cityName} en yakın klima servisi`,
  `${cityName} en iyi teknik servis`,
  `${cityName} güvenilir teknik servis`,
  `${cityName} profesyonel teknik servis`,
  `${cityName} garantili teknik servis`,
  `${cityName} ucuz teknik servis`,
  `${cityName} hızlı teknik servis`,
  `${cityName} yerinde teknik servis`,
  `${cityName} aynı gün teknik servis`,
  `${cityName} 7/24 teknik servis`,
  `${cityName} acil teknik servis`
];

export interface PageSEOParams {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: 'website' | 'service';
  city?: string;
  service?: string;
}

export function generateBaseSEO(): Metadata {
  const allKeywords = [
    ...serviceKeywords['beyaz-esya-servisi'],
    ...serviceKeywords['kombi-servisi'],
    ...serviceKeywords['klima-servisi'],
    'teknik servis', 'tamir', 'bakım', 'arıza', 'onarım', 'ustası', 'servisi',
    'türkiye teknik servis', 'türkiye geneli servis', 'türkiye beyaz eşya servisi',
    'izmir teknik servis', 'istanbul teknik servis', 'ankara teknik servis',
    'bursa teknik servis', 'antalya teknik servis', 'adana teknik servis'
  ];

  return {
    title: {
      default: 'En Yakın Servis Hizmetleri | Beyaz Eşya, Kombi, Klima Servisi | Türkiye Geneli',
      template: '%s | En Yakın Servis Hizmetleri'
    },
    description: 'Beyaz eşya, kombi ve klima cihazları için özel servis hizmetleri hakkında bilgi alabilir, bulunduğunuz bölgeye uygun servis desteğini inceleyebilirsiniz.',
    keywords: allKeywords.slice(0, 50), // Max 50 keywords
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    openGraph: {
      type: 'website',
      locale: 'tr_TR',
      url: SITE_URL,
      siteName: SITE_NAME,
      title: 'En Yakın Servis Hizmetleri | Beyaz Eşya, Kombi, Klima Servisi | Türkiye Geneli',
      description: 'Beyaz eşya, kombi ve klima cihazları için özel servis hizmetleri hakkında bilgi alabilir, bulunduğunuz bölgeye uygun servis desteğini inceleyebilirsiniz.',
      images: [
        {
          url: '/banner.webp',
          width: 1200,
          height: 630,
          alt: 'En Yakın Servis Hizmetleri - Türkiye Geneli Teknik Servis'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'En Yakın Servis Hizmetleri | Beyaz Eşya, Kombi, Klima Servisi',
      description: 'Beyaz eşya, kombi ve klima cihazları için özel servis hizmetleri hakkında bilgi alabilirsiniz.',
      images: ['/banner.webp']
    },
    alternates: {
      canonical: SITE_URL,
      languages: {
        'tr-TR': SITE_URL
      }
    },
    other: {
      'geo.region': 'TR',
      'geo.placename': 'Türkiye',
      'ICBM': '39.9334, 32.8597',
    }
  };
}

export function generateServicePageSEO(serviceSlug: string): Metadata {
  const service = getServiceBySlug(serviceSlug);
  
  if (!service) {
    return generateBaseSEO();
  }

  const keywords = serviceKeywords[serviceSlug] || service.keywords;
  const title = `${service.name} | ${service.name} Tamiri ve Bakımı | Türkiye Geneli`;
  const description = `${service.name} için bakım, onarım ve arıza tespiti süreçleri hakkında bilgi alabilir, servis kapsamını inceleyebilirsiniz.`;
  const canonicalUrl = toAbsoluteUrl(`/${serviceSlug}`);

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'tr_TR',
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: '/banner.webp',
          width: 1200,
          height: 630,
          alt: `${service.name} - En Yakın Servis Hizmetleri`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    },
    alternates: {
      canonical: canonicalUrl
    }
  };
}

export function generateCityPageSEO(citySlug: string): Metadata {
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    return generateBaseSEO();
  }

  const cityKeywordsList = cityVariations(city.name);
  const title = `${city.name} Teknik Servis | Beyaz Eşya, Kombi, Klima | ${city.name} Servisi`;
  const description = `${city.name} ve çevresinde beyaz eşya, kombi ve klima servis hizmetleri hakkında bilgi alabilir, bölge kapsamını inceleyebilirsiniz.`;
  const canonicalUrl = toAbsoluteUrl(`/${citySlug}`);

  return {
    title,
    description,
    keywords: cityKeywordsList,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'tr_TR',
      url: canonicalUrl,
      siteName: SITE_NAME
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    },
    alternates: {
      canonical: canonicalUrl
    },
    other: {
      'geo.region': 'TR',
      'geo.placename': city.name,
    }
  };
}

export function generateCityServicePageSEO(citySlug: string, serviceSlug: string): Metadata {
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  
  if (!city || !service) {
    return generateBaseSEO();
  }

  const serviceKeywordsList = serviceKeywords[serviceSlug] || [];
  const cityServiceKeywords = serviceKeywordsList.map(kw => `${city.name} ${kw}`);
  
  const title = `${city.name} ${service.name} | ${service.name} Tamiri ${city.name} | Yerinde Servis`;
  const description = `${city.name} bölgesinde ${service.name.toLowerCase()} için bakım, onarım ve servis kapsamı hakkında bilgi alabilirsiniz.`;
  const canonicalUrl = toAbsoluteUrl(`/${citySlug}/${serviceSlug}`);

  return {
    title,
    description,
    keywords: [...cityServiceKeywords.slice(0, 30), ...cityVariations(city.name).slice(0, 20)],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'tr_TR',
      url: canonicalUrl,
      siteName: SITE_NAME
    },
    alternates: {
      canonical: canonicalUrl
    },
    other: {
      'geo.region': 'TR',
      'geo.placename': city.name,
    }
  };
}

export function generateLocalBusinessSchema(city?: string) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    description: 'Türkiye genelinde beyaz eşya, kombi ve klima teknik servis hizmeti',
    telephone: '+90-444-0-398',
    email: SITE_EMAIL,
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'Turkey'
    },
    serviceType: ['Beyaz Eşya Servisi', 'Kombi Servisi', 'Klima Servisi'],
    openingHours: 'Mo-Su 00:00-24:00',
    paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
    currenciesAccepted: 'TRY',
    url: SITE_URL,
    sameAs: [
      'https://facebook.com/enyakinservishizmetleri',
      'https://instagram.com/enyakinservishizmetleri',
      'https://twitter.com/enyakinservis'
    ]
  };

  if (city) {
    const cityData = getCityBySlug(city);
    if (cityData) {
      return {
        ...baseSchema,
        areaServed: {
          '@type': 'City',
          name: cityData.name
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: cityData.name,
          addressCountry: 'TR'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: cityData.coordinates.lat,
          longitude: cityData.coordinates.lng
        }
      };
    }
  }

  return baseSchema;
}

export function generateServiceSchema(serviceSlug: string, city?: string) {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME
    },
    serviceType: service.name,
    areaServed: city ? {
      '@type': 'City',
      name: city.charAt(0).toUpperCase() + city.slice(1)
    } : {
      '@type': 'Country',
      name: 'Turkey'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.name,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Arıza Tespiti'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tamir Hizmeti'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bakım Hizmeti'
          }
        }
      ]
    }
  };

  return schema;
}

export function generateHowToSchema(title: string, steps: string[], description?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description: description || `${title} adım adım rehber`,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: `Adım ${index + 1}`,
      text: step
    }))
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function generateArticleSchema(post: {
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  tags: string[];
  createdAt: string;
}) {
  const categoryName = post.category;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: '/banner.webp',
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: toAbsoluteUrl('/logo.png')
      }
    },
    datePublished: post.createdAt,
    dateModified: post.createdAt,
    keywords: post.tags.join(', '),
    articleSection: categoryName,
    inLanguage: 'tr-TR',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': toAbsoluteUrl(`/blog/${post.slug}`)
    }
  };
}
