import { MetadataRoute } from 'next';
import { cities } from '@/data/cities';
import { blogPosts } from '@/data/blogs';
import { brands } from '@/data/markalar';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

const BASE_URL = SITE_URL;
const BUILD_DATE = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 1. Ana Sayfa
  sitemapEntries.push({
    url: BASE_URL,
    lastModified: BUILD_DATE,
    changeFrequency: 'daily',
    priority: 1.0,
  });

  // 2. Gerçekte route'u olan servis sayfaları
  const servicePages = [
    { slug: 'beyaz-esya-servisi', priority: 0.95 },
    { slug: 'kombi-servisi', priority: 0.95 },
    { slug: 'klima-servisi', priority: 0.95 },
    { slug: 'buzdolabi-servisi', priority: 0.9 },
    { slug: 'camasir-makinesi-servisi', priority: 0.9 },
    { slug: 'bulasik-makinesi-servisi', priority: 0.9 },
  ];

  servicePages.forEach((service) => {
    sitemapEntries.push({
      url: `${BASE_URL}/${service.slug}`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: service.priority,
    });
  });

  // 3. Route'u olan statik sayfalar
  const staticPages = [
    { slug: 'hakkimizda', priority: 0.8, freq: 'monthly' as const },
    { slug: 'iletisim', priority: 0.9, freq: 'monthly' as const },
    { slug: 'servis-bolgeleri', priority: 0.85, freq: 'weekly' as const },
    { slug: 'blog', priority: 0.85, freq: 'daily' as const },
    { slug: 'marka', priority: 0.8, freq: 'weekly' as const },
    { slug: 'ariza-kodlari', priority: 0.75, freq: 'monthly' as const },
    { slug: 'gizlilik-politikasi', priority: 0.7, freq: 'yearly' as const },
  ];

  staticPages.forEach((page) => {
    sitemapEntries.push({
      url: `${BASE_URL}/${page.slug}`,
      lastModified: BUILD_DATE,
      changeFrequency: page.freq,
      priority: page.priority,
    });
  });

  // 4. Şehir landing sayfaları
  cities.forEach((city) => {
    const priority = city.priority === 'high' ? 0.85 : city.priority === 'medium' ? 0.8 : 0.75;

    sitemapEntries.push({
      url: `${BASE_URL}/${city.slug}`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority,
    });
  });

  // 5. Şehir + ana hizmet kombinasyonları
  // Dynamic route sadece src/data/services içindeki 3 ana hizmet için üretiliyor.
  const cityServicePages = [
    { slug: 'beyaz-esya-servisi', basePriority: 0.8 },
    { slug: 'kombi-servisi', basePriority: 0.8 },
    { slug: 'klima-servisi', basePriority: 0.8 },
  ];

  for (const city of cities) {
    const cityPriority = city.priority === 'high' ? 0.8 : city.priority === 'medium' ? 0.75 : 0.7;

    for (const service of cityServicePages) {
      sitemapEntries.push({
        url: `${BASE_URL}/${city.slug}/${service.slug}`,
        lastModified: BUILD_DATE,
        changeFrequency: 'weekly',
        priority: Math.min(cityPriority, service.basePriority),
      });
    }
  }

  // 6. Marka detay sayfaları
  for (const brand of brands) {
    sitemapEntries.push({
      url: `${BASE_URL}/marka/${brand.slug}`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.75,
    });
  }

  // 7. Blog yazıları
  for (const post of blogPosts) {
    sitemapEntries.push({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.createdAt),
      changeFrequency: 'monthly',
      priority: 0.65,
    });
  }

  console.log(`✓ Sitemap generated: ${sitemapEntries.length} URLs`);

  return sitemapEntries;
}
