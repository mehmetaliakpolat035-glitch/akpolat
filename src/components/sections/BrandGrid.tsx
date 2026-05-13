import { Award } from 'lucide-react';
import { brands } from '@/data/markalar';
import { Card, CardContent, Container } from '@/components/ui';

const categoryLabels = {
  'beyaz-esya': 'Beyaz Eşya',
  kombi: 'Kombi',
  klima: 'Klima',
} as const;

export function BrandGrid() {
  const groupedBrands = Object.entries(categoryLabels).map(([category, label]) => ({
    category,
    label,
    brands: brands.filter((brand) => brand.category === category),
  }));

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
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
            Hizmet Kapsamındaki Markalar
          </h2>

          <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-6">
            Beyaz eşya, kombi ve klima cihazlarında farklı marka ve modeller için özel servis kapsamındaki süreçler hakkında bilgi alabilirsiniz.
          </p>

          <div className="flex items-center justify-center gap-4">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-blue-400" />
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-blue-400" />
          </div>
        </div>

        <div className="space-y-10">
          {groupedBrands.map((group) => (
            <div key={group.category}>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-5">
                {group.label} Markaları
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {group.brands.map((brand) => (
                  <Card key={brand.slug} className="border border-slate-200 hover:border-blue-900 hover:shadow-md transition-all rounded-xl bg-white">
                    <CardContent className="p-4 text-center">
                      <span className="font-bold text-slate-800 text-base">
                        {brand.name}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-white/80 p-5 text-center">
          <p className="text-sm text-slate-700 leading-relaxed">
            Marka isimleri yalnızca cihaz uyumluluğu ve hizmet kapsamı hakkında bilgilendirme amacıyla kullanılmaktadır. Firmamız ilgili markaların yetkili servisi, resmi temsilcisi veya iş ortağı değildir.
          </p>
        </div>
      </Container>
    </section>
  );
}
