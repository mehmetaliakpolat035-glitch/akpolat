import Link from 'next/link';
import { ArrowRight, Wrench } from 'lucide-react';
import { Container, Card, CardContent } from '@/components/ui';

const helpServices = [
  {
    title: 'Beyaz Eşya Servisi',
    description: 'Tüm beyaz eşya ürünleriniz için profesyonel, hızlı ve garantili teknik servis çözümleri.',
    link: '/beyaz-esya-servisi',
    subServices: [
      { name: 'Çamaşır Makinesi Servisi', link: '/beyaz-esya-servisi' },
      { name: 'Buzdolabı Servisi', link: '/beyaz-esya-servisi' },
      { name: 'Bulaşık Makinesi Servisi', link: '/beyaz-esya-servisi' },
      { name: 'Kurutma Makinesi Servisi', link: '/beyaz-esya-servisi' },
    ]
  },
  {
    title: 'Kombi Servisi',
    description: 'Kışın soğukta kalmayın. Petek temizliği, kombi bakımı ve arıza onarımı için profesyonel destek.',
    link: '/kombi-servisi',
    subServices: [
      { name: 'Kombi Arıza Tamiri', link: '/kombi-servisi' },
      { name: 'Kombi Bakım', link: '/kombi-servisi' },
      { name: 'Petek Temizliği', link: '/kombi-servisi' },
      { name: 'Kombi Montaj', link: '/kombi-servisi' },
    ]
  },
  {
    title: 'Klima Servisi',
    description: 'Yazın serin, kışın sıcak. Klima montaj, bakım, gaz dolumu ve tamir hizmetleri.',
    link: '/klima-servisi',
    subServices: [
      { name: 'Klima Arıza Tamiri', link: '/klima-servisi' },
      { name: 'Klima Bakım', link: '/klima-servisi' },
      { name: 'Klima Gaz Dolumu', link: '/klima-servisi' },
      { name: 'Klima Montaj', link: '/klima-servisi' },
    ]
  },
  {
    title: 'Ankastre Servis',
    description: 'Ankastre ocak, fırın, davlumbaz ve tüm pişirme cihazlarınız için profesyonel teknik servis.',
    link: '/beyaz-esya-servisi',
    subServices: [
      { name: 'Ocak Servisi', link: '/beyaz-esya-servisi' },
      { name: 'Fırın Servisi', link: '/beyaz-esya-servisi' },
      { name: 'Davlumbaz Servisi', link: '/beyaz-esya-servisi' },
      { name: 'Ankastre Montaj', link: '/beyaz-esya-servisi' },
    ]
  },
  {
    title: 'Termosifon Servisi',
    description: 'Sıcak su ihtiyacınız kesilmesin. Termosifon tamiri, montajı ve kireç temizliği.',
    link: '/beyaz-esya-servisi',
    subServices: [
      { name: 'Termosifon Tamiri', link: '/beyaz-esya-servisi' },
      { name: 'Termosifon Montaj', link: '/beyaz-esya-servisi' },
      { name: 'Kireç Temizliği', link: '/beyaz-esya-servisi' },
      { name: 'Termosifon Bakım', link: '/beyaz-esya-servisi' },
    ]
  },
  {
    title: 'Isı Pompası Servisi',
    description: 'Yüksek verimli ısı pompalarınız için kurulum, bakım ve onarım hizmetleri.',
    link: '/klima-servisi',
    subServices: [
      { name: 'Isı Pompası Tamiri', link: '/klima-servisi' },
      { name: 'Isı Pompası Bakım', link: '/klima-servisi' },
      { name: 'Isı Pompası Montaj', link: '/klima-servisi' },
      { name: 'VRF Sistem', link: '/klima-servisi' },
    ]
  },
];

export function ServiceHelp() {
  return (
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
              <Wrench className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Profesyonel Özel Servis Hizmeti
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-blue-400" />
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-blue-400" />
          </div>
          
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Cihazlarınızda yaşanan sorunlar için profesyonel çözüm merkezi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpServices.map((service, index) => (
            <Card
              key={service.title}
              className="border border-slate-200 hover:border-blue-900 hover:shadow-2xl transition-all duration-300 rounded-2xl bg-white group"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-900 to-blue-700 text-white text-base font-bold shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 text-right">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-base text-slate-700 mb-5 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="border-t border-slate-100 pt-4 mb-5">
                  <p className="text-xs font-bold text-blue-900 mb-3 uppercase tracking-wider">
                    Alt Kategoriler
                  </p>
                  <ul className="space-y-2">
                    {service.subServices.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <Link 
                          href={sub.link}
                          className="text-sm text-slate-700 hover:text-blue-900 transition-colors flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href={service.link}
                  className="inline-flex items-center gap-2 text-blue-900 font-bold text-sm hover:gap-3 transition-all group/link"
                >
                  Detaylı İncele
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
