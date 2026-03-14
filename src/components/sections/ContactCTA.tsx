import Link from 'next/link';
import { Phone, MessageCircle, ArrowRight, Headphones } from 'lucide-react';
import { Container, Button, Card, CardContent } from '@/components/ui';

export function ContactCTA() {
  return (
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

      <Container className="relative z-10 max-w-5xl">
        <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-3xl px-8 py-12 lg:px-12 lg:py-16 shadow-2xl relative overflow-hidden">
          {/* Dekoratif Arka Plan İçinde */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center text-white">
            <div className="flex items-center justify-center mb-4">
              <div className="w-14 h-14 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center border border-white/20">
                <Headphones className="w-7 h-7 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hemen Servis Çağırın
            </h2>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-blue-400" />
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-blue-400" />
            </div>
            
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">
              Teknik ekibimiz en kısa sürede adresinize ulaşarak sorununuzu çözsün
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 shadow-xl"
              >
                <Link href="/iletisim" className="flex items-center gap-2 font-bold">
                  Servis Talebi Oluştur
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <a
                href="tel:+908503047814"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3.5 font-bold hover:bg-white/10 transition-colors rounded-xl"
              >
                <Phone className="w-5 h-5" />
                0850 304 7814
              </a>
            </div>
          </div>

          <div className="relative z-10 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center text-white">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Hızlı İletişim</h3>
                <p className="text-sm text-blue-200">Hemen arayın, en kısa sürede yanınızdayız</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center text-white">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                <p className="text-sm text-blue-200">Mesaj atın, size hemen dönelim</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center text-white">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Online Randevu</h3>
                <p className="text-sm text-blue-200">Online randevu formu ile kolayca randevu alın</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
