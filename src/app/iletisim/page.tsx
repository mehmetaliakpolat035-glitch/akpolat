import { Metadata } from 'next';
import { Container, Card, CardContent } from '@/components/ui';
import { Hero, ContactCTA } from '@/components/sections';
import { ContactForm } from '@/components/forms';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'En Yakın Servis Hizmetleri iletişim bilgileri. Telefon, WhatsApp ve online randevu formu ile bize ulaşın.',
  alternates: {
    canonical: 'https://turkiyeteknikservis.com/iletisim'
  }
};

export default function ContactPage() {
  return (
    <>
      <Hero 
        title="İletişim"
        subtitle="Bizimle iletişime geçin, en kısa sürede yanınızdayız"
      />
      
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        {/* Dekoratif Arka Plan */}
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

        <Container className="relative z-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20">
                <Phone className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Bize Ulaşın
            </h2>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-blue-400" />
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-blue-400" />
            </div>
            
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              7/24 hizmetinizdeyiz. Dilediğiniz kanaldan bize ulaşabilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:from-blue-900 group-hover:to-blue-700 transition-all duration-300">
                  <Phone className="w-8 h-8 text-blue-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">Telefon</h3>
                <a href="tel:+908503047814" className="text-blue-900 font-bold hover:text-blue-700 transition-colors text-lg">
                  0850 304 7814
                </a>
                <p className="text-sm text-slate-600 mt-2 font-medium">7/24 Hizmet</p>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:from-green-600 group-hover:to-green-500 transition-all duration-300">
                  <MessageCircle className="w-8 h-8 text-green-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">WhatsApp</h3>
                <a href="https://wa.me/905558947176" className="text-blue-900 font-bold hover:text-blue-700 transition-colors text-lg">
                  0555 894 71 76
                </a>
                <p className="text-sm text-slate-600 mt-2 font-medium">Anında Yanıt</p>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-2xl bg-white group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:from-purple-600 group-hover:to-purple-500 transition-all duration-300">
                  <Mail className="w-8 h-8 text-purple-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">E-posta</h3>
                <a href="mailto:info@enyakinservishizmetleri.com" className="text-blue-900 font-bold hover:text-blue-700 transition-colors text-base">
                  info@enyakinservishizmetleri.com
                </a>
                <p className="text-sm text-slate-600 mt-2 font-medium">24 Saat İçinde Yanıt</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="border border-slate-200 rounded-2xl bg-white">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1 text-lg">Genel Müdürlük</h3>
                    <p className="text-slate-700">
                      Türkiye genelinde hizmet vermekteyiz. Şehir merkezlerinde şubelerimiz bulunmaktadır.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1 text-lg">Çalışma Saatleri</h3>
                    <p className="text-slate-700">
                      Haftanın 7 günü, günün 24 saatı hizmetinizdeyiz.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>
      
      <ContactForm />
    </>
  );
}
