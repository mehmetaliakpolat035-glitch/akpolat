import { Metadata } from 'next';
import Link from 'next/link';
import { Container, Card, CardContent, Button } from '@/components/ui';
import { Hero, BrandGrid, FAQSection, Disclaimer } from '@/components/sections';
import { generateServicePageSEO, generateServiceSchema } from '@/lib/seo';
import { cities } from '@/data/cities';
import { getBrandsByCategory } from '@/data/markalar';
import { 
  Sparkles,
  Droplets,
  Flame,
  Filter,
  Settings,
  Utensils,
  MapPin,
  type LucideIcon,
} from 'lucide-react';

export const metadata: Metadata = generateServicePageSEO('bulasik-makinesi-servisi');

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

export default function BulasikMakinesiServisiPage() {
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
        title="Bulaşık Makinesi Servisi"
        subtitle="Türkiye genelinde tüm bulaşık makinesi markaları için profesyonel servis, bakım ve arıza tamiri hizmetleri."
      />

      <section className="py-8 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        <DecorativePattern />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="text-slate-700 leading-relaxed">Bulaşık makinesi servisi kapsamında tüm bulaşık makinesi markalarınız için arıza tespiti, tamir, bakım ve montaj hizmetleri sunuyoruz. Yıkama yapmama, kurutmama, su sızıntısı, sesli çalışma ve elektronik kart arızaları için uzman teknisyenlerimizle hizmetinizdeyiz.</p>
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
            icon={Utensils}
            title="Bulaşık Makinesi Servis Hizmetleri"
            subtitle="Tüm bulaşık makinesi markalarında arıza tespiti, tamir, bakım ve montaj hizmetleri"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Yıkama Yapmama</h3>
                <p className="text-slate-600 mb-4">
                  Bulaşık makinesinin yıkama yapmaması durumunda profesyonel arıza tespit ve onarım.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Motor arızaları</li>
                  <li>• Program kartı sorunları</li>
                  <li>• Yıkama motoru</li>
                  <li>• Sirkülasyon pompası</li>
                  <li>• Sensör arızaları</li>
                  <li>• Elektronik kart</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Su Almama</h3>
                <p className="text-slate-600 mb-4">
                  Su alma problemleri, su vanası arızaları ve elektrikli valf kontrolleri.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Su valfi arızası</li>
                  <li>• Şamandıra problemi</li>
                  <li>• Basınç sensörü</li>
                  <li>• Akış sensörü</li>
                  <li>• Su giriş valfi</li>
                  <li>• Filtre tıkanıklığı</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Flame className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Kurutmama</h3>
                <p className="text-slate-600 mb-4">
                  Kurutma fonksiyonu çalışmıyor ise ısıtma elemanı ve elektronik kart kontrolü.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Isıtma rezistansı</li>
                  <li>• Termostat arızası</li>
                  <li>• Fan motoru</li>
                  <li>• Nem sensörü</li>
                  <li>• Elektronik kart</li>
                  <li>• Kurutma motoru</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Su Sızıntısı</h3>
                <p className="text-slate-600 mb-4">
                  Su sızıntısı problemleri, kapak contaları ve tahliye pompası kontrolleri.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Kapak contası</li>
                  <li>• Gövde contası</li>
                  <li>• Tahliye pompası</li>
                  <li>• Su inlet hortumu</li>
                  <li>• Deterjan çekmecesi</li>
                  <li>• Yıkama haznesi</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Filter className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Filtre Tıkanıklığı</h3>
                <p className="text-slate-600 mb-4">
                  Filtre tıkanıklıkları, drain pompası ve tahliye hortumu kontrolleri.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Tahliye pompası</li>
                  <li>• Drain motoru</li>
                  <li>• Tahliye hortumu</li>
                  <li>• Filtre temizliği</li>
                  <li>• Drenaj tıkanıklığı</li>
                  <li>• Sensör temizliği</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Periyodik Bakım</h3>
                <p className="text-slate-600 mb-4">
                  Bulaşık makinesinin ömrünü uzatmak için düzenli bakım hizmetleri.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Filtre temizliği</li>
                  <li>• Püskürtme kolları</li>
                  <li>• Kapak contası temizliği</li>
                  <li>• İç temizlik</li>
                  <li>• Deterjan çekmecesi</li>
                  <li>• Genel kontrol</li>
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
            title="Şehir Bazlı Bulaşık Makinesi Servisi"
          />
          
          <div className="flex flex-wrap justify-center gap-3">
            {cityPages.map((city) => (
              <Link key={city.id} href={`/${city.slug}/bulasik-makinesi-servisi`}>
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
