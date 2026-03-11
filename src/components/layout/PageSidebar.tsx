'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui';
import { getBrandsByCategory } from '@/data/markalar';

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

  const beyazEsyaMarkalari = getBrandsByCategory('beyaz-esya').slice(0, 8);
  const kombiMarkalari = getBrandsByCategory('kombi').slice(0, 8);
  const klimaMarkalari = getBrandsByCategory('klima').slice(0, 8);

  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <Container>
        <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wide mb-3">
              Popüler Markalar
            </h3>
            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-500 uppercase">Beyaz Eşya</div>
              <div className="flex flex-wrap gap-1">
                {beyazEsyaMarkalari.map((marka) => (
                  <Link
                    key={marka.id}
                    href={`/marka/${marka.slug}`}
                    className="text-xs text-slate-600 hover:text-blue-900"
                  >
                    {marka.name}
                  </Link>
                ))}
              </div>
              <div className="text-xs font-semibold text-slate-500 uppercase mt-1">Kombi</div>
              <div className="flex flex-wrap gap-1">
                {kombiMarkalari.map((marka) => (
                  <Link
                    key={marka.id}
                    href={`/marka/${marka.slug}`}
                    className="text-xs text-slate-600 hover:text-blue-900"
                  >
                    {marka.name}
                  </Link>
                ))}
              </div>
              <div className="text-xs font-semibold text-slate-500 uppercase mt-1">Klima</div>
              <div className="flex flex-wrap gap-1">
                {klimaMarkalari.map((marka) => (
                  <Link
                    key={marka.id}
                    href={`/marka/${marka.slug}`}
                    className="text-xs text-slate-600 hover:text-blue-900"
                  >
                    {marka.name}
                  </Link>
                ))}
              </div>
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
