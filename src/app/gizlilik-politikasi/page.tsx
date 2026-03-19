import { Metadata } from 'next';
import { Container } from '@/components/ui';
import { Shield, FileText, Lock, Eye, Cookie, UserCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası ve KVKK Aydınlatma Metni | En Yakın Servis Hizmetleri',
  description: 'En Yakın Servis Hizmetleri gizlilik politikası ve KVKK aydınlatma metni. Kişisel verilerinizin korunması, çerez kullanımı ve veri işleme süreçleri hakkında bilgi.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://turkiyeteknikservis.com/gizlilik-politikasi',
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50/50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl" />
        </div>
        
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Veri Güvenliği
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Gizlilik Politikası
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Kişisel verilerinizin güvenliği ve gizliliği bizim için çok önemlidir. 
              Bu sayfada verilerinizin nasıl işlendiğini ve korunduğunu öğrenebilirsiniz.
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <Container className="py-16">
        <div className="max-w-4xl mx-auto">
          {/* Son Güncelleme */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-blue-700" />
              </div>
              <div>
                <h2 className="font-bold text-slate-900 mb-2">Son Güncelleme</h2>
                <p className="text-slate-700">
                  Bu gizlilik politikası son olarak <strong>11 Mart 2026</strong> tarihinde güncellenmiştir. 
                  Politikada yapılan değişiklikler bu sayfada yayınlanacaktır.
                </p>
              </div>
            </div>
          </div>

          {/* KVKK Aydınlatma Metni */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-blue-700" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">KVKK Aydınlatma Metni</h2>
            </div>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700 leading-relaxed mb-4">
                6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, En Yakın Servis Hizmetleri 
                olarak kişisel verilerinizin işlenmesi ve korunması ile ilgili sizi bilgilendirmek isteriz.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Veri Sorumlusu</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>En Yakın Servis Hizmetleri</strong><br />
                Telefon: 08503047814<br />
                E-posta: info@turkiyeteknikservis.com<br />
                Adres: 1451 Sokak No:11/A Doğanlar/İzmir
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">İşlenen Kişisel Veriler</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Aşağıdaki kişisel verilerinizi işlemekteyiz:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                <li>Kimlik bilgileri (ad, soyad)</li>
                <li>İletişim bilgileri (telefon numarası, e-posta adresi)</li>
                <li>Adres bilgileri (servis için gerekli konum bilgisi)</li>
                <li>Cihaz bilgileri (marka, model, arıza detayı)</li>
                <li>IP adresi ve çerez verileri (web sitesi kullanımı)</li>
              </ul>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Veri İşleme Amaçları</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                <li>Servis taleplerinizin karşılanması ve yönetilmesi</li>
                <li>Sizinle iletişime geçilmesi ve bilgilendirme yapılması</li>
                <li>Hizmet kalitesinin artırılması ve müşteri memnuniyeti</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                <li>Web sitesi kullanımının analiz edilmesi ve iyileştirilmesi</li>
              </ul>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Veri Aktarımı</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Kişisel verileriniz, yalnızca servis hizmetinin sağlanması için gerekli olan 
                teknik servis personeli ile paylaşılabilir. Yasal zorunluluk olmadıkça 
                üçüncü taraflarla paylaşılmaz.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Veri Saklama Süresi</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Kişisel verileriniz, hizmetin sağlanması için gerekli olan süre boyunca ve 
                yasal zamanaşımı süreleri boyunca saklanmaktadır. Bu sürelerin sonunda 
                verileriniz silinmekte veya anonim hale getirilmektedir.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Haklarınız</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                KVKK kapsamında aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                <li>Verilerinizin düzeltilmesini veya silinmesini isteme</li>
                <li>İşlemeye itiraz etme</li>
                <li>Veri aktarımı talep etme</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4">
                Haklarınızı kullanmak için <strong>info@turkiyeteknikservis.com</strong> adresine 
                e-posta gönderebilir veya <strong>08503047814</strong> numaralı telefonu arayabilirsiniz.
              </p>
            </div>
          </section>

          {/* Çerez Politikası */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Cookie className="w-5 h-5 text-orange-700" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Çerez Politikası</h2>
            </div>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700 leading-relaxed mb-4">
                Web sitemiz, kullanıcı deneyimini iyileştirmek ve hizmetlerimizi optimize etmek için 
                çerezler kullanmaktadır. Çerezler, cihazınızda saklanan küçük metin dosyalarıdır.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Kullanılan Çerez Türleri</h3>
              
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-bold text-slate-900 mb-2">Zorunlu Çerezler</h4>
                  <p className="text-slate-700 text-sm">
                    Web sitesinin çalışması için gerekli olan temel çerezlerdir. 
                    Bu çerezler devre dışı bırakılamaz.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-bold text-slate-900 mb-2">Analitik Çerezler</h4>
                  <p className="text-slate-700 text-sm">
                    Ziyaretçi sayısı, sayfa görüntüleme gibi istatistiksel verileri toplar. 
                    Web sitemizi nasıl kullandığınızı anlamamıza yardımcı olur.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-bold text-slate-900 mb-2">Reklam Çerezleri</h4>
                  <p className="text-slate-700 text-sm">
                    İlgi alanlarınıza uygun reklamlar göstermek için kullanılır. 
                    Google Ads ve benzeri platformlar tarafından yerleştirilir.
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Çerez Yönetimi</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Çerez tercihlerinizi siteye ilk girişinizde gösterilen çerez banner'ı üzerinden 
                yönetebilirsiniz. Ayrıca tarayıcı ayarlarınızdan çerezleri tamamen devre dışı 
                bırakabilirsiniz, ancak bu durumda sitenin bazı özellikleri çalışmayabilir.
              </p>
            </div>
          </section>

          {/* İletişim */}
          <section className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-blue-700" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Veri Güvenliği ve İletişim</h2>
            </div>
            
            <p className="text-slate-700 leading-relaxed mb-6">
              Kişisel verilerinizin güvenliği için teknik ve idari tedbirler almaktayız. 
              Veri güvenliği ile ilgili sorularınız veya talepleriniz için bize ulaşabilirsiniz:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <a 
                href="tel:+908503047814"
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Telefon</div>
                  <div className="font-semibold text-slate-900">08503047814</div>
                </div>
              </a>

              <a 
                href="mailto:info@turkiyeteknikservis.com"
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500">E-posta</div>
                  <div className="font-semibold text-slate-900">info@turkiyeteknikservis.com</div>
                </div>
              </a>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
