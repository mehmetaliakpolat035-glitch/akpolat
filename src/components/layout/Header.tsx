'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, ChevronDown, MapPin } from 'lucide-react';
import { Container, Button } from '@/components/ui';
import { useCity } from '@/components/CityProvider';

const navigation = [
  { name: 'Ana Sayfa', href: '/' },
];

const services = [
  { name: 'Beyaz Eşya Servisi', href: '/beyaz-esya-servisi', slug: 'beyaz-esya-servisi' },
  { name: 'Bulaşık Makinesi Servisi', href: '/bulasik-makinesi-servisi', slug: 'bulasik-makinesi-servisi' },
  { name: 'Buzdolabı Servisi', href: '/buzdolabi-servisi', slug: 'buzdolabi-servisi' },
  { name: 'Çamaşır Makinesi Servisi', href: '/camasir-makinesi-servisi', slug: 'camasir-makinesi-servisi' },
  { name: 'Kombi Servisi', href: '/kombi-servisi', slug: 'kombi-servisi' },
  { name: 'Klima Servisi', href: '/klima-servisi', slug: 'klima-servisi' },
];

const otherNav = [
  { name: 'Blog', href: '/blog' },
  { name: 'Bölgeler', href: '/servis-bolgeleri' },
  { name: 'İletişim', href: '/iletisim' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [citySelectorOpen, setCitySelectorOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const cityRef = useRef<HTMLDivElement>(null);
  const { city, loading, setManualCity } = useCity();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
      if (cityRef.current && !cityRef.current.contains(event.target as Node)) {
        setCitySelectorOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getServiceUrl = (href: string) => {
    if (city && href !== '/blog' && href !== '/servis-bolgeleri' && href !== '/iletisim' && href !== '/') {
      return `/${city.slug}${href}`;
    }
    return href;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {city && !loading && (
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white text-sm py-2.5">
          <Container>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-300" />
                <span className="font-bold">{city.name}</span>
                <span className="text-blue-200">için servis sayfasındasınız</span>
              </div>
              <Link href="/servis-bolgeleri" className="hover:underline font-medium text-white/90">
                Diğer şehirler →
              </Link>
            </div>
          </Container>
        </div>
      )}
      
      <Container>
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo.png" 
              alt="En Yakın Servis Hizmetleri" 
              width={220} 
              height={70}
              className="h-16 w-auto"
            />
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-3 text-base font-semibold text-slate-800 hover:text-blue-900 hover:bg-blue-50/80 transition-colors rounded-lg"
              >
                {item.name}
              </Link>
            ))}
            
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1.5 px-4 py-3 text-base font-semibold text-slate-800 hover:text-blue-900 hover:bg-blue-50/80 transition-colors rounded-lg"
              >
                Hizmetlerimiz
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-200 shadow-2xl rounded-xl overflow-hidden z-50">
                  <div className="py-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={getServiceUrl(service.href)}
                        onClick={() => setServicesOpen(false)}
                        className="block px-4 py-3 text-sm font-semibold text-slate-700 hover:text-blue-900 hover:bg-blue-50 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {otherNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-3 text-base font-semibold text-slate-800 hover:text-blue-900 hover:bg-blue-50/80 transition-colors rounded-lg"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+904440398"
              className="flex items-center gap-2 text-blue-900 font-bold text-lg hover:text-blue-700 transition-colors"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <span>444 0 398</span>
            </a>
            
            <Button size="lg" className="shadow-lg shadow-blue-900/20">
              <Link href={city ? `/${city.slug}/iletisim` : '/iletisim'} className="text-white font-bold">
                Servis Çağır
              </Link>
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-4 bg-white">
            <nav className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-semibold text-slate-800 hover:text-blue-900 hover:bg-blue-50"
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t border-slate-200 pt-3 mt-3">
                <div className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Hizmetlerimiz</div>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={getServiceUrl(service.href)}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 pl-8 text-sm font-semibold text-slate-700 hover:text-blue-900 hover:bg-blue-50"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              {otherNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-semibold text-slate-800 hover:text-blue-900 hover:bg-blue-50"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-4 pt-4 border-t border-slate-200 px-4">
              <a
href="tel:+904440398"
                className="flex items-center gap-3 text-blue-900 font-bold text-lg mb-3"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
<span>444 0 398</span>
              </a>
              
              <Button className="w-full">
                <Link 
                  href={city ? `/${city.slug}/iletisim` : '/iletisim'} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-white font-bold"
                >
                  Servis Çağır
                </Link>
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
