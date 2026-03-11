import { Metadata } from 'next';
import { Container } from '@/components/ui';
import { Hero, TrustSection } from '@/components/sections';
import { Award, Users, MapPin, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'En Yakın Servis Hizmetleri olarak beyaz eşya, kombi ve klima servis hizmetlerinde yılların deneyimi ile profesyonel teknik destek sunuyoruz.',
  alternates: {
    canonical: 'https://turkiyeteknikservis.com/hakkimizda'
  }
};

export default function AboutPage() {
  return (
    <>
      <Hero 
        title="Hakkımızda"
        subtitle="Türkiye genelinde teknik servis sektöründe güvenilir adres"
      />
      
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        {/* Dekoratif Arka Plan */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl" />
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <Container className="relative z-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20">
                <Award className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Kalite ve Güvenin Adresi
            </h2>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-blue-400" />
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-blue-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="space-y-5 text-slate-700 text-lg leading-relaxed">
                <p>
                  <strong className="text-slate-900">En Yakın Servis Hizmetleri</strong>, beyaz eşya, kombi ve klima servis hizmetlerinde Türkiye genelinde 
                  müşterilerimize profesyonel teknik destek sunan bir organizasyondur.
                </p>
                <p>
                  Yılların getirdiği deneyim ve alanında uzman teknik ekibimiz ile tüm marka ve 
                  modellerde arıza tespiti, tamir, bakım ve montaj hizmetleri sunuyoruz.
                </p>
                <p>
                  Müşteri memnuniyetini ön planda tutan anlayışımız, şeffaf fiyat politikamız 
                  ve garantili işçiliğimiz ile sektörde öncü konumdayız.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-blue-900" />
                </div>
                <div className="text-4xl font-bold text-blue-900 mb-1">15+</div>
                <div className="text-sm text-slate-700 font-medium">Yıllık Deneyim</div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-blue-900" />
                </div>
                <div className="text-4xl font-bold text-blue-900 mb-1">50+</div>
                <div className="text-sm text-slate-700 font-medium">Servis Bölgesi</div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Wrench className="w-6 h-6 text-blue-900" />
                </div>
                <div className="text-4xl font-bold text-blue-900 mb-1">30+</div>
                <div className="text-sm text-slate-700 font-medium">Servis Marka</div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-blue-900" />
                </div>
                <div className="text-4xl font-bold text-blue-900 mb-1">50K+</div>
                <div className="text-sm text-slate-700 font-medium">Mutlu Müşteri</div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      <TrustSection />
    </>
  );
}
