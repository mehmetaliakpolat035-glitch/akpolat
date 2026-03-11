import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container, Card, CardContent, Badge, Button } from '@/components/ui';
import { Hero, Breadcrumb, BrandGrid, Disclaimer } from '@/components/sections';
import { generateCityPageSEO, generateLocalBusinessSchema } from '@/lib/seo';
import { cities, getCityBySlug } from '@/data/cities';
import { services } from '@/data/services';
import { AutoLink } from '@/lib/autoLink';
import { MapPin, ChevronRight } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return generateCityPageSEO(slug);
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  
  if (!city) {
    notFound();
  }
  
  const schema = generateLocalBusinessSchema(city.slug);
  
  const breadcrumbItems = [
    { label: city.name, href: `/${city.slug}` },
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
        city={city.name}
        title={`${city.name} Teknik Servis`}
        subtitle={city.description}
      />
      
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="max-w-3xl">
            <AutoLink 
              text={`${city.name} ve tüm ilçelerinde beyaz eşya, kombi ve klima servis hizmetleri sunmaktayız. Profesyonel teknik servis ekibimiz, ${city.name}'ın tüm ilçelerinde hızlı ve güvenilir hizmet sağlamaktadır.`}
              maxLinks={3}
              className="text-slate-700 leading-relaxed"
            />
          </div>
        </Container>
      </section>
      
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {city.name}'de Hizmet Verdiğimiz Hizmetler
            </h2>
            <div className="text-lg text-slate-600 max-w-2xl mx-auto">
              <AutoLink 
                text={`${city.name} ve tüm ilçelerinde beyaz eşya, kombi ve klima servis hizmetleri sunmaktayız.`}
                maxLinks={3}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.id} href={`/${city.slug}/${service.slug}`}>
                <Card variant="elevated" className="group h-full hover:border-red-300 transition-all">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                      {city.name} {service.name}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {service.shortDescription}
                    </p>
                    <Button variant="outline" size="sm" className="group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600">
                      İncele <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {city.name} İlçeler
            </h3>
            <p className="text-slate-600">
              {city.name}'de hizmet verdiğimiz ilçeler
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {city.districts.map((district) => (
              <Link key={district.id} href={`/${city.slug}/${district.slug}-beyaz-esya-servisi`}>
                <Card className="hover:border-red-300 transition-colors">
                  <CardContent className="p-3 text-center">
                    <span className="font-medium text-slate-700 hover:text-red-600 transition-colors">
                      {district.name}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      
      <BrandGrid />
      <Disclaimer />
    </>
  );
}
