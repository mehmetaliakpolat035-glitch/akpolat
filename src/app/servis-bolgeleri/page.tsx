import { Metadata } from 'next';
import Link from 'next/link';
import { Container, Card, CardContent, Badge } from '@/components/ui';
import { Hero, Breadcrumb } from '@/components/sections';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { MapPin } from 'lucide-react';
import { toAbsoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Servis Bölgeleri',
  description: 'Ozel servis hizmeti sundugumuz sehirler ve bolgeler hakkinda bilgi alin. Hizmet kapsamimizi ve destek sundugumuz lokasyonlari inceleyin.',
  alternates: {
    canonical: toAbsoluteUrl('/servis-bolgeleri'),
  },
};

export default function ServisBolgeleriPage() {
  const breadcrumbItems = [
    { label: 'Servis Bölgeleri' },
  ];

  return (
    <>
      <Container className="mt-4">
        <Breadcrumb items={breadcrumbItems} />
      </Container>
      
      <Hero 
        title="Servis Bölgeleri"
        subtitle="Hizmet sundugumuz sehirler ve bolgeler hakkinda bilgi alin."
      />
      
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Türkiye Geneli Servis Ağı
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Hizmet sundugumuz sehirleri ve bolgeleri burada inceleyebilirsiniz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {cities.map((city) => (
              <Link key={city.id} href={`/${city.slug}`}>
                <Card className="border border-slate-300 hover:border-blue-900 hover:shadow-md transition-all h-full">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-blue-900" />
                      <h3 className="font-bold text-slate-900 text-base">
                        {city.name}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {services.map((service) => (
                        <Link key={service.id} href={`/${city.slug}/${service.slug}`}>
                          <Badge variant="default" className="text-xs cursor-pointer hover:bg-blue-100">
                            {service.name}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                    
                    <p className="text-xs text-slate-500">
                      {city.districts.length} ilçe
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
