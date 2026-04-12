import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container, Card, CardContent, Button } from '@/components/ui';
import { Hero, Breadcrumb, BrandGrid, FAQSection, Disclaimer } from '@/components/sections';
import { generateCityServicePageSEO, generateLocalBusinessSchema, generateServiceSchema } from '@/lib/seo';
import { cities, getCityBySlug } from '@/data/cities';
import { services, getServiceBySlug } from '@/data/services';
import { MapPin, CheckCircle } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string; service: string }>;
}

export async function generateStaticParams() {
  const params: { slug: string; service: string }[] = [];
  
  for (const city of cities) {
    for (const service of services) {
      params.push({
        slug: city.slug,
        service: service.slug,
      });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, service } = await params;
  return generateCityServicePageSEO(slug, service);
}

export default async function CityServicePage({ params }: Props) {
  const { slug, service: serviceSlug } = await params;
  
  const city = getCityBySlug(slug);
  const service = getServiceBySlug(serviceSlug);
  
  if (!city || !service) {
    notFound();
  }
  
  const localBusinessSchema = generateLocalBusinessSchema(city.slug);
  const serviceSchema = generateServiceSchema(serviceSlug, city.slug);
  
  const schema = {
    ...localBusinessSchema,
    ...serviceSchema,
  };
  
  const breadcrumbItems = [
    { label: city.name, href: `/${city.slug}` },
    { label: service.name },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <Container className="mt-4">
        <Breadcrumb items={breadcrumbItems} />
      </Container>
      
      <Hero 
        title={`${city.name} ${service.name}`}
        subtitle={`${city.name} ve tüm ilçelerinde ${service.name.toLowerCase()}. ${city.name}'da profesyonel teknik servis hizmeti için hemen arayın.`}
      />
      
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                {`${city.name}'de ${service.name}`}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {city.name} ilinde {service.name.toLowerCase()} hizmeti sunuyoruz. 
                {city.name} merkez ve tüm ilçelerinde uzman teknik ekibimizle cihazlarınızın 
                arıza, bakım ve montaj işlemlerini gerçekleştiriyoruz.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700">{city.name} merkezde 2-4 saat içinde servis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700">Tüm ilçelerde aynı gün servis imkanı</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700">Garantili işçilik ve orijinal parça</span>
                </div>
              </div>
            </div>
            
            <Card variant="elevated">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  {city.name} {service.name} Kapsamı
                </h3>
                <ul className="space-y-2">
                  {city.districts.slice(0, 6).map((district) => (
                    <li key={district.id} className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span className="text-slate-600">
                        {district.name} {service.name}
                      </span>
                    </li>
                  ))}
                  {city.districts.length > 6 && (
                    <li className="text-sm text-slate-500">
                      +{city.districts.length - 6} ilçede daha hizmet
                    </li>
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              {city.name} {service.name} Hizmet Kapsamı
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card variant="bordered">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Arıza Tespit ve Tamir</h4>
                  <p className="text-sm text-slate-600">
                    Cihazınızda oluşan arızaları profesyonel ekibimizle tespit ediyor ve en kısa sürede tamir ediyoruz.
                  </p>
                </CardContent>
              </Card>
              <Card variant="bordered">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Periyodik Bakım</h4>
                  <p className="text-sm text-slate-600">
                    Cihazlarınızın ömrünü uzatmak için düzenli bakım hizmetleri sunuyoruz.
                  </p>
                </CardContent>
              </Card>
              <Card variant="bordered">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Montaj ve Kurulum</h4>
                  <p className="text-sm text-slate-600">
                    Yeni cihazlarınızın profesyonel montajı ve kurulum hizmetleri.
                  </p>
                </CardContent>
              </Card>
              <Card variant="bordered">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Yedek Parça</h4>
                  <p className="text-sm text-slate-600">
                    Tüm marka ve model cihazlar için orijinal yedek parça temini.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/iletisim">
              <Button size="lg">
                {city.name} {service.name} İçin Randevu Al
              </Button>
            </Link>
          </div>
        </Container>
      </section>
      
      <BrandGrid />
      <Disclaimer />
      <FAQSection />
    </>
  );
}
