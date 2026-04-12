import { Metadata } from 'next';
import Link from 'next/link';
import { Container, Card, CardContent, Button } from '@/components/ui';
import { Hero, BrandGrid, FAQSection, Disclaimer } from '@/components/sections';
import { generateServicePageSEO, generateServiceSchema } from '@/lib/seo';
import { cities } from '@/data/cities';
import { getBrandsByCategory } from '@/data/markalar';
import { 
  Wrench, 
  Settings, 
  Package,
  Droplets,
  Thermometer,
  Wind,
  MapPin,
  Shield,
  type LucideIcon,
} from 'lucide-react';

export const metadata: Metadata = generateServicePageSEO('kombi-servisi');

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
function SectionHeader({ icon: Icon, title, subtitle }: { icon: LucideIcon; title: string; subtitle?: string }) {
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

export default function KombiServisiPage() {
  const schema = generateServiceSchema('kombi');
  
  const cityPages = cities.filter(c => c.priority === 'high' || c.priority === 'medium');
  const brands = getBrandsByCategory('kombi');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <Hero 
        title="Kombi Servisi"
        subtitle="Türkiye genelinde tüm kombi markaları için profesyonel servis, bakım ve arıza tamiri hizmetleri. Doğalgaz, yoğuşmalı ve elektrikli kombiler için uzman ekibimizle hizmetinizdeyiz."
      />

      <section className="py-8 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        <DecorativePattern />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="text-slate-700 leading-relaxed">Kombi servisi kapsamında doğalgaz kombi, yoğuşmalı kombi ve elektrikli kombileriniz için arıza tespiti, tamir, bakım ve montaj hizmetleri sunuyoruz. Tüm marka ve modellerde uzman teknisyenlerimizle hizmetinizdeyiz.</p>
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
            icon={Shield}
            title="Kombi Servis Hizmetleri"
            subtitle="Tüm kombi markalarında arıza tespiti, tamir, bakım ve montaj hizmetleri"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Kombi Arıza Tamiri</h3>
                <p className="text-slate-600 mb-4">
                  Tüm kombi arıza türlerinde uzman teknik ekibimizle hızlı ve kalıcı çözümler sunuyoruz.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Ateşleme sorunları</li>
                  <li>• Sensör arızaları</li>
                  <li>• Eşanjör problemleri</li>
                  <li>• Elektronik kart onarımı</li>
                  <li>• Gaz valfi arızaları</li>
                  <li>• Düşük basınç sorunları</li>
                  <li>• Pompa arızaları</li>
                  <li>• Fan motoru problemleri</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Kombi Bakımı</h3>
                <p className="text-slate-600 mb-4">
                  Yıllık periyodik bakım ile kombinizin ömrünü uzatın ve verimliliğini artırın.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Yanma ayarı</li>
                  <li>• Filtre temizliği</li>
                  <li>• Genleşme tankı kontrolü</li>
                  <li>• Güvenlik testleri</li>
                  <li>• Gaz basıncı ayarı</li>
                  <li>• Termostat kalibrasyonu</li>
                  <li>• Su basıncı kontrolü</li>
                  <li>• Petek havası alma</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Package className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Kombi Montaj</h3>
                <p className="text-slate-600 mb-4">
                  Yeni kombi montajı, tesisat değişimi ve doğalgaz dönüşümü hizmetleri.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Yeni kombi kurulumu</li>
                  <li>• Tesisat yenileme</li>
                  <li>• Radyatör montajı</li>
                  <li>• Doğalgaz bağlantısı</li>
                  <li>• Kalorifer tesisatı</li>
                  <li>• Kombi demontaj</li>
                  <li>• Yerinde keşif</li>
                  <li>• Proje çizimi</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Yoğuşmalı Kombi</h3>
                <p className="text-slate-600 mb-4">
                  Yoğuşmalı kombi özel servis hizmetleri ve yedek parça temini.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Yoğuşma pompası</li>
                  <li>• Condens tahliye</li>
                  <li>• Alüminyum eşanjör</li>
                  <li>• Verimlilik ayarı</li>
                  <li>• Sıralı kombi bağlantısı</li>
                  <li>• Bacalı kombi dönüşümü</li>
                  <li>• Parça değişimi</li>
                  <li>• Hermetik bacalama</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Thermometer className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Kombi Yedek Parça</h3>
                <p className="text-slate-600 mb-4">
                  Orijinal yedek parça temini ve değişimi hizmetleri.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Orijinal parça</li>
                  <li>• Gaz valfi</li>
                  <li>• Düşük basınç anahtarı</li>
                  <li>• Pompa ve motor</li>
                  <li>• Fan ve fan motoru</li>
                  <li>• Eşanjör değişimi</li>
                  <li>• Sensör ve termostat</li>
                  <li>• Elektronik kart</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Wind className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Petek Temizliği</h3>
                <p className="text-slate-600 mb-4">
                  Radyatör petek temizliği ve tesisat yıkama hizmetleri.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Kimyasal yıkama</li>
                  <li>• Peteğe su basıncı</li>
                  <li>• Tesisat temizliği</li>
                  <li>• Isı dağılım testi</li>
                  <li>• Radyatör değişimi</li>
                  <li>• Termostatik vana</li>
                  <li>• Hava ayırıcı</li>
                  <li>• Tesisat tamiri</li>
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
            title="Şehir Bazlı Kombi Servisi"
          />
          
          <div className="flex flex-wrap justify-center gap-3">
            {cityPages.map((city) => (
              <Link key={city.id} href={`/${city.slug}/kombi-servisi`}>
                <Button variant="outline" size="sm" className="hover:bg-blue-900 hover:text-white transition-colors">
                  {city.name}
                </Button>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      
      <BrandGrid category="kombi" />
      <Disclaimer />
      <FAQSection />
    </>
  );
}
