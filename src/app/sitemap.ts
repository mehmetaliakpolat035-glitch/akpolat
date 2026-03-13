import { MetadataRoute } from 'next';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { blogPosts } from '@/data/blogs';
import { brands } from '@/data/markalar';

export const dynamic = 'force-static';

const BASE_URL = 'https://enyakinsevishismetleri.com.tr';
const CURRENT_DATE = new Date('2026-03-11');

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 1. Ana Sayfa (En Yüksek Öncelik)
  sitemapEntries.push({
    url: BASE_URL,
    lastModified: CURRENT_DATE,
    changeFrequency: 'daily',
    priority: 1.0,
  });

  // 2. Ana Hizmet Sayfaları (Yüksek Öncelik)
  const mainServices = [
    { slug: 'beyaz-esya-servisi', priority: 0.95 },
    { slug: 'kombi-servisi', priority: 0.95 },
    { slug: 'klima-servisi', priority: 0.95 },
    { slug: 'buzdolabi-servisi', priority: 0.9 },
    { slug: 'camasir-makinesi-servisi', priority: 0.9 },
    { slug: 'bulasik-makinesi-servisi', priority: 0.9 },
  ];

  mainServices.forEach(service => {
    sitemapEntries.push({
      url: `${BASE_URL}/${service.slug}`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'weekly',
      priority: service.priority,
    });
  });

  // 3. Statik Sayfalar
  const staticPages = [
    { slug: 'hakkimizda', priority: 0.8, freq: 'monthly' as const },
    { slug: 'iletisim', priority: 0.9, freq: 'monthly' as const },
    { slug: 'servis-bolgeleri', priority: 0.85, freq: 'weekly' as const },
    { slug: 'blog', priority: 0.85, freq: 'daily' as const },
    { slug: 'marka', priority: 0.8, freq: 'weekly' as const },
    { slug: 'ariza-kodlari', priority: 0.75, freq: 'monthly' as const },
  ];

  staticPages.forEach(page => {
    sitemapEntries.push({
      url: `${BASE_URL}/${page.slug}`,
      lastModified: CURRENT_DATE,
      changeFrequency: page.freq,
      priority: page.priority,
    });
  });

  // 4. Tüm Şehirler (81 il)
  cities.forEach(city => {
    const priority = city.priority === 'high' ? 0.85 : 
                    city.priority === 'medium' ? 0.8 : 0.75;
    
    sitemapEntries.push({
      url: `${BASE_URL}/${city.slug}`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'weekly',
      priority,
    });
  });

  // 5. Şehir + Hizmet Kombinasyonları
  for (const city of cities) {
    const cityPriority = city.priority === 'high' ? 0.8 : 
                        city.priority === 'medium' ? 0.75 : 0.7;
    
    for (const service of mainServices) {
      sitemapEntries.push({
        url: `${BASE_URL}/${city.slug}/${service.slug}`,
        lastModified: CURRENT_DATE,
        changeFrequency: 'weekly',
        priority: cityPriority,
      });
    }
  }

  // 6. Marka Sayfaları (Ana Sayfalar)
  for (const brand of brands) {
    sitemapEntries.push({
      url: `${BASE_URL}/marka/${brand.slug}`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'weekly',
      priority: 0.75,
    });
  }

  // 7. Şehir + Marka Kombinasyonları (Çok Önemli!)
  // Her şehir için her marka
  const priorityCities = cities.filter(c => c.priority === 'high' || c.priority === 'medium');
  
  for (const city of priorityCities) {
    for (const brand of brands) {
      sitemapEntries.push({
        url: `${BASE_URL}/${city.slug}/marka/${brand.slug}`,
        lastModified: CURRENT_DATE,
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }
  }

  // 8. Marka Varyasyonları (bosch-servis, arcelik-servis vb.)
  for (const brand of brands) {
    const brandName = brand.slug.split('-')[0]; // bosch-beyaz-esya -> bosch
    
    // Marka + servis varyasyonları
    sitemapEntries.push({
      url: `${BASE_URL}/${brandName}-servis`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'weekly',
      priority: 0.72,
    });
    
    sitemapEntries.push({
      url: `${BASE_URL}/${brandName}-tamir`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'weekly',
      priority: 0.7,
    });
    
    sitemapEntries.push({
      url: `${BASE_URL}/${brandName}-bakim`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'weekly',
      priority: 0.68,
    });
    
    sitemapEntries.push({
      url: `${BASE_URL}/${brandName}-ariza`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'weekly',
      priority: 0.68,
    });
  }

  // 9. Şehir + Marka Varyasyonları
  for (const city of priorityCities) {
    for (const brand of brands) {
      const brandName = brand.slug.split('-')[0];
      
      sitemapEntries.push({
        url: `${BASE_URL}/${city.slug}/${brandName}-servis`,
        lastModified: CURRENT_DATE,
        changeFrequency: 'weekly',
        priority: 0.68,
      });
      
      sitemapEntries.push({
        url: `${BASE_URL}/${city.slug}/${brandName}-tamir`,
        lastModified: CURRENT_DATE,
        changeFrequency: 'monthly',
        priority: 0.65,
      });
    }
  }

  // 10. Blog Yazıları
  for (const post of blogPosts) {
    sitemapEntries.push({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.createdAt),
      changeFrequency: 'monthly',
      priority: 0.65,
    });
  }

  // 11. Blog Kategorileri
  const categories = [
    'genel-ariza', 'marka-ariza', 'ariza-kodlari', 'sss', 
    'kendi-yap', 'parca', 'bakim', 'rehber'
  ];
  
  for (const cat of categories) {
    sitemapEntries.push({
      url: `${BASE_URL}/blog?kategori=${cat}`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'weekly',
      priority: 0.6,
    });
  }

  // 12. Önemli İlçeler
  for (const city of cities) {
    const topDistricts = city.districts.slice(0, 3);
    for (const district of topDistricts) {
      sitemapEntries.push({
        url: `${BASE_URL}/${city.slug}/${district.slug}-beyaz-esya-servisi`,
        lastModified: CURRENT_DATE,
        changeFrequency: 'monthly',
        priority: 0.55,
      });
      
      // İlçe + marka kombinasyonları
      for (const brand of brands.slice(0, 10)) { // Sadece top 10 marka
        sitemapEntries.push({
          url: `${BASE_URL}/${city.slug}/${district.slug}-${brand.slug}`,
          lastModified: CURRENT_DATE,
          changeFrequency: 'monthly',
          priority: 0.5,
        });
      }
    }
  }

  // 13. Arıza Kodu Sayfaları
  const errorCodes = ['E01', 'E02', 'E03', 'E10', 'E15', 'F1', 'EA', 'CE'];
  for (const code of errorCodes) {
    sitemapEntries.push({
      url: `${BASE_URL}/ariza-kodu-${code}`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  console.log(`✓ Sitemap generated: ${sitemapEntries.length} URLs`);

  return sitemapEntries;
}
