'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Clock } from 'lucide-react';
import { Container } from '@/components/ui';
import { services, cities } from '@/data';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-50 to-white text-slate-900 relative overflow-hidden">
      {/* Dekoratif Arka Plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-50/40 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo ve İletişim */}
          <div>
            <div className="mb-5">
              <Image 
                src="/logo.png" 
                alt="En Yakın Servis Hizmetleri" 
                width={200} 
                height={70}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-slate-700 text-sm leading-relaxed mb-6">
              Türkiye genelinde beyaz eşya, kombi ve klima servis hizmetlerinde güvenilir adresiniz. 
              Profesyonel ekibimiz ve hızlı servis anlayışımızla yanınızdayız.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-blue-900" />
                </div>
                <a href="tel:+904440398" className="text-blue-900 font-semibold hover:text-blue-700 transition-colors">
                  444 0 398
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-blue-900" />
                </div>
                <a href="mailto:info@enyakinservishizmetleri.com" className="text-blue-900 font-semibold hover:text-blue-700 transition-colors">
                  info@enyakinservishizmetleri.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-blue-900" />
                </div>
                <span className="text-slate-700 font-medium">7/24 Hizmet</span>
              </div>
            </div>
          </div>

          {/* Hizmetlerimiz */}
          <div>
            <h3 className="text-slate-900 font-bold mb-5 text-lg flex items-center gap-2">
              <div className="w-1 h-5 bg-blue-900 rounded-full" />
              Hizmetlerimiz
            </h3>
            
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-sm text-slate-700 hover:text-blue-900 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-blue-900 transition-colors" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/ariza-kodlari"
                  className="text-sm text-slate-700 hover:text-blue-900 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-blue-900 transition-colors" />
                  Arıza Kodları
                </Link>
              </li>
            </ul>
          </div>

          {/* Servis Bölgeleri */}
          <div>
            <h3 className="text-slate-900 font-bold mb-5 text-lg flex items-center gap-2">
              <div className="w-1 h-5 bg-blue-900 rounded-full" />
              Servis Bölgeleri
            </h3>
            
            <ul className="space-y-3">
              {cities.slice(0, 6).map((city) => (
                <li key={city.id}>
                  <Link
                    href={`/${city.slug}`}
                    className="text-sm text-slate-700 hover:text-blue-900 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-blue-900 transition-colors" />
                    {city.name} Teknik Servis
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/servis-bolgeleri"
                  className="text-sm text-blue-900 font-semibold hover:text-blue-700 transition-colors flex items-center gap-2"
                >
                  <span>Tüm Bölgeler →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Kurumsal */}
          <div>
            <h3 className="text-slate-900 font-bold mb-5 text-lg flex items-center gap-2">
              <div className="w-1 h-5 bg-blue-900 rounded-full" />
              Kurumsal
            </h3>
            
            <ul className="space-y-3">
              {[
                { name: 'Hakkımızda', href: '/hakkimizda' },
                { name: 'İletişim', href: '/iletisim' },
                { name: 'Servis Bölgeleri', href: '/servis-bolgeleri' },
                { name: 'Blog', href: '/blog' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-slate-700 hover:text-blue-900 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-blue-900 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="py-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-slate-700 font-medium">
              © {new Date().getFullYear()} <span className="text-slate-900 font-bold">En Yakın Servis Hizmetleri</span>. Tüm hakları saklıdır.
            </p>
            <span className="text-slate-600">
              Bu site üzerinde sunulan hizmetler, bağımsız servis sağlayıcıları tarafından verilmektedir.
            </span>
          </div>
        </div>
      </Container>

      {/* Yasal Uyarı */}
      <div className="bg-slate-100 py-8">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-bold text-slate-900 mb-4 text-base">
              En Yakın Servis Hizmetleri - Yasal Uyarı ve Bilgilendirme
            </p>
            
            <div className="text-sm text-slate-700 leading-relaxed space-y-4">
              <p>
                Bu site, adı geçen markaların resmi veya yetkili servisi değildir. Sunulan hizmetler özel / bağımsız teknik servis kapsamında verilmektedir. 
                Marka isimleri ve logoları, tüketiciyi bilgilendirme amacıyla kullanılmaktadır.
              </p>
              
              <p>
                Bu internet sitesi üzerinden sunulan tüm hizmetler, ilgili marka veya markaların resmi, yetkili, ana servis ya da üretici destek ağı kapsamında 
                yer almamaktadır. En Yakın Servis Hizmetleri; üretici, ithalatçı veya distribütör firmalardan tamamen bağımsız olarak faaliyet gösteren, özel servis 
                statüsünde hizmet sunan bir teknik servis kuruluşudur.
              </p>
              
              <p>
                Sunulan teknik servis hizmetleri; bakım, onarım, arıza tespiti, parça değişimi ve teknik destek işlemlerini kapsamakta olup, ağırlıklı olarak garanti 
                süresi sona ermiş cihazlar için ücretli olarak sağlanmaktadır.
              </p>
              
              <p className="font-semibold text-slate-900">
                Kullanıcılar, siteyi ziyaret ederek ve hizmet talebi oluşturarak bu bilgilendirme ve yasal uyarı metnini okumuş ve kabul etmiş sayılır.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-300 bg-white p-6 text-left shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-4">
                İşletme Bilgileri
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">
                    İşletme Sahibi
                  </span>
                  <span className="font-medium text-slate-900">Mehmet Ali Akpolat</span>
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">
                    Vergi Dairesi
                  </span>
                  <span className="font-medium text-slate-900">Hasan Tahsin</span>
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">
                    Vergi Numarası
                  </span>
                  <span className="font-medium text-slate-900">0340486063</span>
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">
                    Açık Adres
                  </span>
                  <span className="font-medium text-slate-900">Doğanlar Mah. 1451 Sk. No: 11 A Bornova / İzmir</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6 pt-6 border-t border-slate-300 text-sm">
              <Link href="/gizlilik-politikasi" className="text-blue-900 hover:text-blue-700 font-medium">
                Gizlilik Politikası
              </Link>
              <span className="text-slate-400">|</span>
              <Link href="/gizlilik-politikasi" className="text-blue-900 hover:text-blue-700 font-medium">
                KVKK Aydınlatma Metni
              </Link>
              <span className="text-slate-400">|</span>
              <Link href="/iletisim" className="text-blue-900 hover:text-blue-700 font-medium">
                İletişim
              </Link>
            </div>
          </div>
        </Container>
      </div>
  </footer>
  );
}
