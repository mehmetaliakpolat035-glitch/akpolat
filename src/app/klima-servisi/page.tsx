import { Metadata } from 'next';
import Link from 'next/link';
import { Container, Card, CardContent, Button } from '@/components/ui';
import { Hero, FAQSection, Disclaimer } from '@/components/sections';
import { generateServicePageSEO, generateServiceSchema } from '@/lib/seo';
import { cities } from '@/data/cities';
import { 
  Wrench, 
  Settings, 
  Package,
  Wind,
  Thermometer,
  Building,
  MapPin,
  Shield,
  type LucideIcon,
} from 'lucide-react';

export const metadata: Metadata = generateServicePageSEO('klima-servisi');

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

export default function KlimaServisiPage() {
  const schema = generateServiceSchema('klima');
  
  const cityPages = cities.filter(c => c.priority === 'high' || c.priority === 'medium');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <Hero 
        title="Klima Servisi"
        subtitle="Türkiye genelinde split klima, multi split, VRF ve merkezi klima sistemleri için profesyonel servis, bakım, montaj ve gaz dolumu hizmetleri."
      />

      <section className="py-8 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        <DecorativePattern />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="text-slate-700 leading-relaxed">Klima servisi kapsamında split klima, multi split, VRF ve merkezi klima sistemleriniz için arıza tespiti, tamir, bakım, montaj ve gaz dolumu hizmetleri sunuyoruz. Tüm marka ve modellerde uzman teknisyenlerimizle hizmetinizdeyiz.</p>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        <DecorativePattern />
        <Container className="relative z-10">
          <SectionHeader 
            icon={Shield}
            title="Klima Servis Hizmetleri"
            subtitle="Tüm klima türlerinde arıza tespiti, tamir, bakım ve montaj hizmetleri"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Klima Arıza Tamiri</h3>
                <p className="text-slate-600 mb-4">
                  Tüm klima arıza türlerinde uzman teknik ekibimizle hızlı çözümler.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Soğutmama sorunları</li>
                  <li>• Üşütme problemleri</li>
                  <li>• Elektrik arızaları</li>
                  <li>• Kumanda sorunları</li>
                  <li>• Fan motoru arızaları</li>
                  <li>• Kompresör arızaları</li>
                  <li>• Sensör problemleri</li>
                  <li>• Elektronik kart onarımı</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Klima Bakımı</h3>
                <p className="text-slate-600 mb-4">
                  Periyodik bakım ile klimanızın ömrünü uzatın ve verimliliğini artırın.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Filtre temizliği</li>
                  <li>• İç ünite temizliği</li>
                  <li>• Dış ünite kontrolü</li>
                  <li>• Gaz basıncı kontrolü</li>
                  <li>• Boru izolasyonu</li>
                  <li>• Drenaj temizliği</li>
                  <li>• Elektrik bağlantıları</li>
                  <li>• Performans testi</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Package className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Klima Montaj</h3>
                <p className="text-slate-600 mb-4">
                  Profesyonel klima montajı ve demontaj hizmetleri.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Split klima montajı</li>
                  <li>• Multi split kurulum</li>
                  <li>• VRF sistem montajı</li>
                  <li>• Boru döşeme</li>
                  <li>• Drenaj hattı</li>
                  <li>• Elektrik tesisatı</li>
                  <li>• Kumanda kurulumu</li>
                  <li>• Vakumlama işlemi</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Wind className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Gaz Dolumu</h3>
                <p className="text-slate-600 mb-4">
                  R410A, R22 ve R32 gaz dolumu ve kaçak tespit hizmetleri.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Gaz kaçağı tespiti</li>
                  <li>• R410A dolumu</li>
                  <li>• R32 dolumu</li>
                  <li>• R22 dolumu</li>
                  <li>• Vakumlama</li>
                  <li>• Gaz tahliye</li>
                  <li>• Kaçak onarımı</li>
                  <li>• Filtre değişimi</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Thermometer className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Klima Kumandası</h3>
                <p className="text-slate-600 mb-4">
                  Kumanda arızaları ve programlama hizmetleri.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Kumanda onarımı</li>
                  <li>• Program ayarları</li>
                  <li>• Wifi bağlantı</li>
                  <li>• Akıllı kontrol</li>
                  <li>• Kumanda değişimi</li>
                  <li>• Pil değişimi</li>
                  <li>• Tuş tamiri</li>
                  <li>• Ekran değişimi</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Merkezi Klima</h3>
                <p className="text-slate-600 mb-4">
                  VRF, VRV ve merkezi klima sistemleri için uzman ekip.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• VRF sistem bakım</li>
                  <li>• Merkezi kontrol</li>
                  <li>• Sistem optimizasyonu</li>
                  <li>• Enerji verimliliği</li>
                  <li>• Merkezi gaz dolumu</li>
                  <li>• Pipeline temizliği</li>
                  <li>• Dış ünite bakımı</li>
                  <li>• Kumanda programlama</li>
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
            title="Şehir Bazlı Klima Servisi"
          />
          
          <div className="flex flex-wrap justify-center gap-3">
            {cityPages.map((city) => (
              <Link key={city.id} href={`/${city.slug}/klima-servisi`}>
                <Button variant="outline" size="sm" className="hover:bg-blue-900 hover:text-white transition-colors">
                  {city.name}
                </Button>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      
      <Disclaimer />
      <FAQSection />
    </>
  );
}
