import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container, Card, CardContent } from '@/components/ui';
import { Hero, Breadcrumb, Disclaimer } from '@/components/sections';
import { getBrandBySlug, brands } from '@/data/markalar';
import { toAbsoluteUrl } from '@/lib/site';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return brands.map((brand) => ({
    slug: brand.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    return { title: 'Marka Bulunamadı' };
  }

  const serviceNames: Record<string, string> = {
    'beyaz-esya': 'Beyaz Eşya',
    'kombi': 'Kombi',
    'klima': 'Klima',
  };

  return {
    title: `${brand.name} ${serviceNames[brand.category]} Servis Hizmetleri | Türkiye Teknik Servis`,
    description: `${brand.name} ${serviceNames[brand.category].toLowerCase()} grubundaki cihazlar için bakım, onarım ve arıza tespiti süreçleri hakkında bilgi alabilirsiniz.`,
    alternates: {
      canonical: toAbsoluteUrl(`/marka/${slug}`),
    },
  };
}

export default async function BrandDetailPage({ params }: Props) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    notFound();
  }

  const serviceNames: Record<string, string> = {
    'beyaz-esya': 'Beyaz Eşya',
    'kombi': 'Kombi',
    'klima': 'Klima',
  };

  const otherServices = [
    { 
      category: 'beyaz-esya' as const, 
      name: 'Beyaz Eşya Servisi', 
      slug: brand.slug.replace(`-${brand.category}`, '-beyaz-esya'),
      exists: brands.some(b => b.slug === brand.slug.replace(`-${brand.category}`, '-beyaz-esya'))
    },
    { 
      category: 'kombi' as const, 
      name: 'Kombi Servisi', 
      slug: brand.slug.replace(`-${brand.category}`, '-kombi'),
      exists: brands.some(b => b.slug === brand.slug.replace(`-${brand.category}`, '-kombi'))
    },
    { 
      category: 'klima' as const, 
      name: 'Klima Servisi', 
      slug: brand.slug.replace(`-${brand.category}`, '-klima'),
      exists: brands.some(b => b.slug === brand.slug.replace(`-${brand.category}`, '-klima'))
    },
  ].filter(s => s.exists && s.category !== brand.category);

  const breadcrumbItems = [
    { label: 'Markalar', href: '/marka' },
    { label: brand.name },
  ];

  return (
    <>
      <Container className="mt-4">
        <Breadcrumb items={breadcrumbItems} />
      </Container>
      
      <Hero 
        title={`${brand.name} ${serviceNames[brand.category]} Servis Hizmetleri`}
        subtitle={`${brand.name} ${serviceNames[brand.category].toLowerCase()} ürünleri için bakım, onarım ve arıza tespiti süreçleri hakkında bilgi alabilirsiniz.`}
      />
      
      <section className="py-16 lg:py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                {brand.name} Servis Hizmetleri
              </h2>
              <p className="text-slate-600 mb-6">
                {brand.name} marka cihazlar için bakım, onarım ve arıza tespiti süreçlerine yönelik servis hizmeti sunuyoruz.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 mb-8">
              <h3 className="text-lg font-bold text-blue-900 mb-4">Sunduğumuz Hizmetler</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-900">✓</span>
                  Arıza tespit ve onarım
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-900">✓</span>
                  Periyodik bakım hizmetleri
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-900">✓</span>
                  Yedek parça değişimi
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-900">✓</span>
                  Montaj ve kurulum
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-900">✓</span>
                  Garanti kapsamı dışı servis desteği
                </li>
              </ul>
            </div>

            {otherServices.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Diğer Servis Hizmetlerimiz</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {otherServices.map((service) => (
                    <Link key={service.category} href={`/marka/${service.slug}`}>
                      <Card className="border border-slate-300 hover:border-blue-900 hover:shadow-md transition-all">
                        <CardContent className="p-4 text-center">
                          <span className="font-semibold text-slate-800">
                            {brand.name} {service.name}
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="text-center">
              <a 
                href="tel:+904440398" 
                className="inline-block bg-blue-900 text-white font-bold px-8 py-3 hover:bg-blue-800 transition-colors"
              >
                Hemen Ara: 444 0 398
              </a>
            </div>
          </div>
        </Container>
      </section>
      
      <Disclaimer />
    </>
  );
}
