import { Metadata } from 'next';
import Link from 'next/link';
import { Container, Card, CardContent } from '@/components/ui';
import { Hero, Breadcrumb, Disclaimer } from '@/components/sections';
import { brands, getBrandsByCategory } from '@/data/markalar';

export const metadata: Metadata = {
  title: 'Servis Verdiğimiz Markalar | Türkiye Teknik Servis',
  description: 'Tüm beyaz eşya, kombi ve klima markaları için profesyonel teknik servis hizmeti. Arçelik, Beko, Bosch, Viessmann, Daikin ve daha fazlası.',
  alternates: {
    canonical: 'https://turkiyeteknikservis.com/marka',
  },
};

export default function MarkalarPage() {
  const beyazEsyaMarkalari = getBrandsByCategory('beyaz-esya');
  const kombiMarkalari = getBrandsByCategory('kombi');
  const klimaMarkalari = getBrandsByCategory('klima');
  
  const breadcrumbItems = [
    { label: 'Markalar' },
  ];

  return (
    <>
      <Container className="mt-4">
        <Breadcrumb items={breadcrumbItems} />
      </Container>
      
      <Hero 
        title="Servis Verdiğimiz Markalar"
        subtitle="Tüm beyaz eşya, kombi ve klima markaları için profesyonel teknik servis hizmeti sunuyoruz"
      />
      
      <section className="py-16 lg:py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Beyaz Eşya Markaları
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
            {beyazEsyaMarkalari.map((marka) => (
              <Link key={marka.id} href={`/marka/${marka.slug}`}>
                <Card className="border border-slate-300 hover:border-blue-900 hover:shadow-md transition-all h-full">
                  <CardContent className="p-4 text-center">
                    <span className="font-bold text-slate-800">
                      {marka.name}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Kombi Markaları
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
            {kombiMarkalari.map((marka) => (
              <Link key={marka.id} href={`/marka/${marka.slug}`}>
                <Card className="border border-slate-300 hover:border-blue-900 hover:shadow-md transition-all h-full">
                  <CardContent className="p-4 text-center">
                    <span className="font-bold text-slate-800">
                      {marka.name}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Klima Markaları
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {klimaMarkalari.map((marka) => (
              <Link key={marka.id} href={`/marka/${marka.slug}`}>
                <Card className="border border-slate-300 hover:border-blue-900 hover:shadow-md transition-all h-full">
                  <CardContent className="p-4 text-center">
                    <span className="font-bold text-slate-800">
                      {marka.name}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      
      <Disclaimer />
    </>
  );
}
