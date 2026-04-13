'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui';

const serviceLinks = [
  { name: 'Beyaz Eşya Servisi', slug: 'beyaz-esya-servisi', desc: 'Beyaz eşya teknik servis teknisyeni arıza tespitinde' },
  { name: 'Bulaşık Makinesi Servisi', slug: 'beyaz-esya-servisi', desc: 'Bulaşık makinesi servisinde yerinde müdahale' },
  { name: 'Buzdolabı Servisi', slug: 'beyaz-esya-servisi', desc: 'Buzdolabı soğutma arızası için servis ekibi' },
  { name: 'Çamaşır Makinesi Servisi', slug: 'beyaz-esya-servisi', desc: 'Çamaşır makinesi tambur arızası servisi' },
  { name: 'Kombi Servisi', slug: 'kombi-servisi', desc: 'Kombi bakımı ve arıza onarım ustası' },
  { name: 'Klima Servisi', slug: 'klima-servisi', desc: 'Klima montaj ve bakım servisi' },
];

export function PageSidebar() {
  const pathname = usePathname();
  
  if (pathname === '/') return null;

  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <Container>
        <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wide mb-3">
              Servis Bilgilendirmesi
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-slate-600 leading-relaxed">
                Sunulan hizmetler, garanti kapsamı dışındaki cihazlar için özel servis kapsamında değerlendirilmektedir.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wide mb-3">
              Hizmetlerimiz
            </h3>
            <div className="space-y-2">
              {serviceLinks.map((service, idx) => (
                <Link
                  key={idx}
                  href={`/${service.slug}`}
                  className="block text-sm text-slate-600 hover:text-blue-900 hover:underline"
                >
                  <span className="font-medium">{service.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
