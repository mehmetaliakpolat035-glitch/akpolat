import { Container } from '@/components/ui';

export function Disclaimer() {
  return (
    <section className="py-8 bg-slate-100 border-t border-slate-200">
      <Container>
        <div className="text-center">
          <p className="text-sm text-slate-600 leading-relaxed max-w-4xl mx-auto">
            <span className="font-semibold">Önemli Bilgilendirme: </span>
            Firmamız, yukarıdaki markaların yetkili servisi veya iş ortağı değildir. 
            Tüm bakım ve onarım hizmetleri, alanında uzman ekibimiz tarafından bağımsız özel servis kapsamında sunulmaktadır. 
            Markaların isimleri sadece bilgilendirici amaçlıdır.
          </p>
        </div>
      </Container>
    </section>
  );
}
