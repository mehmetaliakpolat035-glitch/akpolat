import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowRight, Wrench, BadgeCheck, ScanSearch, Headphones, MapPin } from 'lucide-react';
import { Container, Button } from '@/components/ui';

interface HeroProps {
  title?: string;
  subtitle?: string;
  city?: string;
}

export function Hero({ title, subtitle, city }: HeroProps) {
  const defaultTitle = city
    ? `${city} Teknik Servis Hizmetleri`
    : 'Türkiye\'nin Her Yerinde Teknik Servis';
  
  const defaultSubtitle = city
    ? `${city} ve tüm ilçelerinde beyaz eşya, kombi ve klima servis hizmeti. Profesyonel ekibimizle ${city}'da hizmetinizdeyiz.`
    : 'Beyaz eşya, kombi ve klima için profesyonel teknik servis hizmeti. Türkiye genelinde hızlı, güvenilir ve garantili servis.';

  return (
    <section className="relative bg-slate-900 overflow-hidden">
      {/* Arka Plan Görseli - Daha Belirgin */}
      <div className="absolute inset-0">
        <Image 
          src="/banner.jpg"
          alt="Teknik Servis"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent" />
      </div>

      {/* Dekoratif Elementler - Daha Hafif */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>
      
      <Container className="relative py-20 lg:py-28 min-h-[600px] md:min-h-[680px] lg:min-h-[720px] flex items-center">
        <div className="max-w-3xl">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-white/10">
            
            <div className="inline-flex items-center gap-2 bg-blue-900/90 px-4 py-2.5 mb-6 rounded-full shadow-lg">
              {city ? (
                <>
                  <MapPin className="w-4 h-4 text-blue-300" />
                  <span className="text-sm text-white font-bold">
                    {city} Bölgesi Hizmet
                  </span>
                </>
              ) : (
                <>
                  <Wrench className="w-4 h-4 text-blue-300" />
                  <span className="text-sm text-white font-bold">
                    Türkiye Geneli Servis
                  </span>
                </>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {title || defaultTitle}
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
              {subtitle || defaultSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="group shadow-xl shadow-blue-900/30">
                <Link href="/iletisim" className="flex items-center gap-2 text-white font-bold">
                  Servis Çağır
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                className="bg-white/95 text-blue-900 hover:bg-white shadow-xl"
              >
                <a href="tel:+908503041517" className="flex items-center gap-2 font-bold">
                  <Phone className="w-5 h-5" />
                  0850 304 15 17
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2.5 rounded-full">
                <BadgeCheck className="w-5 h-5 text-blue-300" />
                <span className="text-sm font-bold text-white">Garantili İşçilik</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2.5 rounded-full">
                <ScanSearch className="w-5 h-5 text-blue-300" />
                <span className="text-sm font-bold text-white">Ücretsiz Keşif</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2.5 rounded-full">
                <Headphones className="w-5 h-5 text-blue-300" />
                <span className="text-sm font-bold text-white">7/24 Destek</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
