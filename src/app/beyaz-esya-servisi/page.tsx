import { Metadata } from 'next';
import Link from 'next/link';
import { Container, Card, CardContent, Button } from '@/components/ui';
import { Hero, BrandGrid, FAQSection, Disclaimer } from '@/components/sections';
import { generateServicePageSEO, generateServiceSchema } from '@/lib/seo';
import { cities } from '@/data/cities';
import { getBrandsByCategory } from '@/data/markalar';
import { 
  Refrigerator, 
  WashingMachine, 
  Utensils, 
  Flame, 
  Box,
  Thermometer,
  MapPin,
  Settings,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = generateServicePageSEO('beyaz-esya-servisi');

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

export default function BeyazEsyaServisiPage() {
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
        title="Beyaz Eşya Servisi"
        subtitle="Türkiye genelinde tüm beyaz eşya markaları için profesyonel servis hizmeti. Buzdolabı, çamaşır makinesi, bulaşık makinesi ve tüm ankastre cihazlarınız için uzman ekibimizle hizmetinizdeyiz."
      />

      <section className="py-8 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        <DecorativePattern />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="text-slate-700 leading-relaxed">Beyaz eşya servisi kapsamında buzdolabı, çamaşır makinesi, bulaşık makinesi, kurutma makinesi ve ankastre cihazlarınız için profesyonel teknik destek sunuyoruz. Tüm marka ve modellerde uzman teknisyenlerimizle hizmetinizdeyiz.</p>
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
            icon={Settings}
            title="Beyaz Eşya Servis Hizmetleri"
            subtitle="Tüm beyaz eşya markalarında arıza tespiti, tamir, bakım ve montaj hizmetleri sunuyoruz."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Refrigerator className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Buzdolabı Servisi</h3>
                <p className="text-slate-600 mb-4">
                  Tüm buzdolabı markalarında soğutma sorunları, kompresör arızaları, termostat problemleri ve daha birçok arıza için profesyonel çözümler.
                </p>
                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  <li>• Soğutmama sorunları</li>
                  <li>• Kompresör arızaları</li>
                  <li>• Termostat ayarları</li>
                  <li>• Su damlacığı problemi</li>
                  <li>• No-frost sistemi</li>
                  <li>• Kapak contalari</li>
                  <li>• Buzlanma problemi</li>
                  <li>• Elektronik kart onarımı</li>
                </ul>
                <Link href="/buzdolabi-servisi" className="inline-flex items-center gap-1 text-blue-900 font-medium hover:underline text-sm group">
                  Detaylı Bilgi 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <WashingMachine className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Çamaşır Makinesi Servisi</h3>
                <p className="text-slate-600 mb-4">
                  Çamaşır makinesi arızalarında uzman teknik ekibimizle yanınızdayız. Sıkışma, su alma, boşaltma ve elektronik kart sorunları.
                </p>
                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  <li>• Su almama / su alma sorunları</li>
                  <li>• Sıkışma problemleri</li>
                  <li>• Su boşaltma arızaları</li>
                  <li>• Tambur dönümü sorunları</li>
                  <li>• Elektronik kart onarımı</li>
                  <li>• Rulman değişimi</li>
                  <li>• Amortisör değişimi</li>
                  <li>• Su kaçağı problemleri</li>
                </ul>
                <Link href="/camasir-makinesi-servisi" className="inline-flex items-center gap-1 text-blue-900 font-medium hover:underline text-sm group">
                  Detaylı Bilgi 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Utensils className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Bulaşık Makinesi Servisi</h3>
                <p className="text-slate-600 mb-4">
                  Bulaşık makinesi yıkama sorunları, su alma problemleri ve tüm arıza türlerinde profesyonel servis hizmeti.
                </p>
                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  <li>• Yıkama yapmama</li>
                  <li>• Kurutmama sorunları</li>
                  <li>• Su sızıntıları</li>
                  <li>• Filtre tıkanıklıkları</li>
                  <li>• Pompa arızaları</li>
                  <li>• Sepet tamir ve değişimi</li>
                  <li>• Deterjan dispenser</li>
                  <li>• Isıtma rezistansı</li>
                </ul>
                <Link href="/bulasik-makinesi-servisi" className="inline-flex items-center gap-1 text-blue-900 font-medium hover:underline text-sm group">
                  Detaylı Bilgi 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Flame className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Kurutma Makinesi Servisi</h3>
                <p className="text-slate-600 mb-4">
                  Kurutma makinesi ısıtma sorunları, motor arızaları ve tüm problemler için uzman ekibimiz.
                </p>
                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  <li>• Isıtmama sorunları</li>
                  <li>• Aşırı gürültü</li>
                  <li>• Zamanlama problemleri</li>
                  <li>• Motor arızaları</li>
                  <li>• Rezistans değişimi</li>
                  <li>• Fan motoru</li>
                  <li>• Elektronik kart</li>
                  <li>• Kurutma yapmama</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Box className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Ankastre Servis</h3>
                <p className="text-slate-600 mb-4">
                  Ankastre ocak, fırın, davlumbaz ve buzdolapları için profesyonel montaj ve tamir hizmetleri.
                </p>
                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  <li>• Ankastre ocak montajı</li>
                  <li>• Fırın arızaları</li>
                  <li>• Davlumbaz bakımı</li>
                  <li>• Doğalgaz dönüşümü</li>
                  <li>• Ocak göğüs değişimi</li>
                  <li>• Aspiratör tamiri</li>
                  <li>• Termostat ayarı</li>
                  <li>• Aydınlatma</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Thermometer className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Derin Dondurucu Servisi</h3>
                <p className="text-slate-600 mb-4">
                  Derin dondurucu ve no-frost buzdolapları için özel servis hizmetleri.
                </p>
                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  <li>• Dondurmama sorunları</li>
                  <li>• Aşırı buzlanma</li>
                  <li>• Sesli çalışma</li>
                  <li>• No-frost sistemi</li>
                  <li>• Kompresör değişimi</li>
                  <li>• Gaz dolumu</li>
                  <li>• Defrost rezistansı</li>
                  <li>• Fan motoru</li>
                </ul>
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
            title="Şehir Bazlı Beyaz Eşya Servisi"
          />
          
          <div className="flex flex-wrap justify-center gap-3">
            {cityPages.map((city) => (
              <Link key={city.id} href={`/${city.slug}/beyaz-esya-servisi`}>
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
