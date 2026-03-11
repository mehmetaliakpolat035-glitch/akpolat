import { Metadata } from 'next';
import Link from 'next/link';
import { Container, Card, CardContent, Button } from '@/components/ui';
import { Hero, BrandGrid, FAQSection, Disclaimer } from '@/components/sections';
import { generateServicePageSEO, generateServiceSchema } from '@/lib/seo';
import { cities } from '@/data/cities';
import { getBrandsByCategory } from '@/data/markalar';
import { 
  Droplets,
  Cog,
  RotateCcw,
  Cpu,
  Disc,
  Settings,
  MapPin,
  WashingMachine,
  Shield
} from 'lucide-react';

export const metadata: Metadata = generateServicePageSEO('camasir-makinesi-servisi');

// Dekoratif Arka Plan Deseni
function DecorativePattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl" />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

// Modern Section Header Component
function SectionHeader({ icon: Icon, title, subtitle }: { icon: any, title: string, subtitle?: string }) {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-4">{subtitle}</p>}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-blue-400" />
        <div className="w-2 h-2 bg-blue-500 rounded-full" />
        <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-blue-400" />
      </div>
    </div>
  );
}

export default function CamasirMakinesiServisiPage() {
  const schema = generateServiceSchema('beyaz-esya');
  
  const cityPages = cities.filter(c => c.priority === 'high' || c.priority === 'medium');
  const brands = getBrandsByCategory('beyaz-esya');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <Hero 
        title="Çamaşır Makinesi Servisi"
        subtitle="Türkiye genelinde tüm çamaşır makinesi markaları için profesyonel servis, bakım ve arıza tamiri hizmetleri."
      />

      <section className="py-8 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        <DecorativePattern />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="text-slate-700 leading-relaxed">Çamaşır makinesi servisi kapsamında tüm çamaşır makinesi markalarınız için arıza tespiti, tamir, bakım ve montaj hizmetleri sunuyoruz. Su almama, su boşaltma, sıkışma, tambur dönmeme ve elektronik kart arızaları için uzman teknisyenlerimizle hizmetinizdeyiz.</p>
          </div>
        </Container>
      </section>

      <section className="py-12 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        <DecorativePattern />
        <Container className="relative z-10">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Hangi Marka İçin Servis İstiyorsunuz?
            </h2>
            <p className="text-slate-600 mb-6">
              Aşağıdan markanızı seçerek ayrıntılı bilgi alabilirsiniz
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {brands.map((marka) => (
                <Link
                  key={marka.id}
                  href={`/marka/${marka.slug}`}
                  className="px-4 py-2 text-sm bg-white border border-slate-200 hover:border-blue-900 hover:text-blue-900 hover:shadow-md transition-all rounded-full"
                >
                  {marka.name}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
      
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        <DecorativePattern />
        <Container className="relative z-10">
          <SectionHeader 
            icon={WashingMachine}
            title="Çamaşır Makinesi Servis Hizmetleri"
            subtitle="Tüm çamaşır makinesi markalarında arıza tespiti, tamir, bakım ve montaj hizmetleri"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Su Almama</h3>
                <p className="text-slate-600 mb-4">
                  Çamaşır makinesinin su almaması, su valfi ve elektronik kart arızaları.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Cog className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Sıkışma</h3>
                <p className="text-slate-600 mb-4">
                  Tambur sıkışması, motor arızaları ve sürtünme problemleri.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <RotateCcw className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Su Boşaltma</h3>
                <p className="text-slate-600 mb-4">
                  Su boşaltmama, drain pompası ve tahliye hortumu kontrolleri.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Elektronik Kart</h3>
                <p className="text-slate-600 mb-4">
                  Elektronik kart arızaları, program ayarları ve sensör kontrolleri.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Disc className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Tambur Arızası</h3>
                <p className="text-slate-600 mb-4">
                  Tambur mili, rulman ve amortisör arızaları.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Periyodik Bakım</h3>
                <p className="text-slate-600 mb-4">
                  Çamaşır makinesinin ömrünü uzatmak için düzenli bakım hizmetleri.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
      
      <section className="py-12 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        <DecorativePattern />
        <Container className="relative z-10">
          <SectionHeader 
            icon={MapPin}
            title="Şehir Bazlı Çamaşır Makinesi Servisi"
          />
          
          <div className="flex flex-wrap justify-center gap-3">
            {cityPages.map((city) => (
              <Link key={city.id} href={`/${city.slug}/camasir-makinesi-servisi`}>
                <Button variant="outline" size="sm" className="hover:bg-blue-900 hover:text-white transition-colors">
                  {city.name}
                </Button>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      
      <BrandGrid category="beyaz-esya" />
      <Disclaimer />
      <FAQSection />
    </>
  );
}
