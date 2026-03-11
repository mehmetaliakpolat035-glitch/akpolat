import Link from 'next/link';
import { WashingMachine, Flame, Snowflake, ArrowRight } from 'lucide-react';
import { Container, Card, CardContent } from '@/components/ui';
import { services } from '@/data/services';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  WashingMachine,
  Flame,
  Snowflake,
};

export function ServiceCards() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Hizmet Kategorileri
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tüm teknik servis ihtiyaçlarınız için profesyonel çözümler sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || WashingMachine;
            return (
              <Card key={service.id} variant="elevated" className="group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-blue-900 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.name}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.shortDescription}
                  </p>
                  
                  <Link
                    href={`/${service.slug}`}
                    className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:gap-3 transition-all"
                  >
                    Detaylı Bilgi
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
