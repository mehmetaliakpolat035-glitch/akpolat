import Link from 'next/link';
import { MapPin, ChevronRight } from 'lucide-react';
import { Container, Card, CardContent } from '@/components/ui';
import { cities } from '@/data/cities';

export function CityCoverage() {
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
              <MapPin className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Hizmet Verilen Bölgeler
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-blue-400" />
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-blue-400" />
          </div>
          
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Türkiye genelinde 81 ilde teknik servis hizmeti sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-8">
          {cities.map((city) => (
            <Link key={city.id} href={`/${city.slug}`}>
              <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 rounded-xl bg-white group">
                <CardContent className="p-3 text-center flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400 group-hover:text-blue-900 transition-colors" />
                  <span className="font-semibold text-slate-800 group-hover:text-blue-900 text-base transition-colors">
                    {city.name}
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/servis-bolgeleri"
            className="inline-flex items-center gap-2 text-blue-900 font-bold hover:gap-3 transition-all group"
          >
            Tüm Bölgeleri Gör
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
