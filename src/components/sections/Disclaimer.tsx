import { Container } from '@/components/ui';

export function Disclaimer() {
  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Ana Başlık */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              En Yakın Servis Hizmetleri - Yasal Uyarı ve Bilgilendirme
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6 text-slate-700">
            {/* Genel Bilgilendirme */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Özel Servis Statüsü ve Marka Bağımsızlığı
              </h3>
              <p className="leading-relaxed mb-4">
                Bu internet sitesi, bağımsız bir özel teknik servis tarafından işletilmektedir. Sunulan tüm hizmetler, 
                ilgili markaların resmi veya yetkili servis hizmetleri değildir. Web sitemizde adı geçen marka isimleri, 
                logo ve ticari unvanlar ilgili firmaların tescilli markalarıdır ve yalnızca cihazların hangi markalara 
                ait olduğunu belirtmek amacıyla kullanılmaktadır.
              </p>
              <p className="leading-relaxed">
                Firmamız; üretici, ithalatçı veya distribütör firmalardan tamamen bağımsız olarak faaliyet gösteren, 
                özel servis statüsünde hizmet sunan bir teknik servis kuruluşudur. İlgili markalar ile herhangi bir 
                resmî ortaklık, yetkilendirme, temsil, lisans, sponsorluk veya distribütörlük ilişkimiz bulunmamaktadır.
              </p>
            </div>

            {/* Hizmet Kapsamı */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Hizmet Kapsamı ve Garanti Durumu
              </h3>
              <p className="leading-relaxed mb-4">
                Sunulan teknik servis hizmetleri; bakım, onarım, arıza tespiti, parça değişimi ve teknik destek 
                işlemlerini kapsamakta olup, ağırlıklı olarak garanti süresi sona ermiş cihazlar için ücretli olarak 
                sağlanmaktadır. Tüm servis hizmetleri, garanti kapsamı dışında kalan cihazlar için sunulmakta olup; 
                kullanıcılar bu konuda açık ve şeffaf şekilde bilgilendirilmektedir.
              </p>
              <p className="leading-relaxed mb-4">
                Garanti süresi devam eden ürünler için kullanıcıların, ilgili markanın resmi yetkili servisleri ile 
                doğrudan iletişime geçmeleri önerilmektedir. Firmamız, ilgili markaların resmi servis prosedürleri, 
                garanti koşulları, fiyat politikaları veya kampanyaları üzerinde herhangi bir yetkiye sahip değildir.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-sm font-semibold text-blue-900">
                  Onarim, parca kullanimi ve destek kapsamina iliskin guncel uygulama kosullari servis sureci sirasinda
                  kullanicilarla ayrica paylasilmaktadir.
                </p>
              </div>
            </div>

            {/* Servis Süreci */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Servis Süreci ve Müşteri Onayı
              </h3>
              <p className="leading-relaxed mb-4">
                Servis sureci boyunca uygulanacak islemler, kullanilacak yontemler ve ucretlendirme bilgileri
                kullanicilarla acik ve seffaf bicimde paylasilir. Hizmet kapsami ve teknik inceleme sureci,
                cihazin durumuna gore degerlendirilir.
              </p>
              <p className="leading-relaxed font-semibold text-slate-900">
                Yapilacak islemlerle ilgili nihai bilgilendirme, servis surecine gecilmeden once kullaniciya
                aktarilir. Guncel uygulama kosullari ve destek kapsami servis kaydi sirasinda ayrica aciklanir.
              </p>
            </div>

            {/* Google Ads ve Etik Uyum */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Google Ads Politika ve Şeffaflık Bildirimi
              </h3>
              <p className="leading-relaxed mb-4">
                Bu web sitesinde sunulan tüm hizmetler ve yayınlanan reklamlar; Google Ads reklam politikaları, 
                tüketicinin korunması mevzuatı ve etik ticaret kurallarına uygun olarak yürütülmektedir. 
                Özellikle Google Ads&apos;in &quot;Kabul Edilemez İş Uygulamaları (Unacceptable Business Practices)&quot; 
                politikası kapsamında:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Kullanıcıları yanıltan, yanlış yönlendiren veya aldatıcı ifadeler kullanılmamaktadır.</li>
                <li>Yetkili servis, resmi temsilci veya marka ortağı izlenimi oluşturacak hiçbir içerik, görsel veya reklam metni yer almamaktadır.</li>
                <li>Hizmet koşulları, servis kapsamı, ücretlendirme ve garanti durumu açık ve şeffaf şekilde belirtilmektedir.</li>
                <li>Tüketicinin karar verme sürecini manipüle eden, baskı kuran veya yanıltıcı ticari uygulamalardan kaçınılmaktadır.</li>
                <li>Marka haklarını ihlal eden veya haksız rekabete yol açabilecek herhangi bir reklam faaliyeti yürütülmemektedir.</li>
                <li>Google Ads tarafından tanımlanan kabul edilemez iş uygulamalarına karşı sıfır tolerans politikası uygulanmaktadır.</li>
              </ul>
              <p className="leading-relaxed">
                Amacımız, kullanıcıların doğru bilgiye ulaşmasını sağlamak ve güvenilir, şeffaf bir servis deneyimi sunmaktır. 
                Marka logo ve görselleri kullanılmamaktadır. Kullanıcıları yanlış yönlendirecek, baskı oluşturacak veya 
                gerçeğe aykırı bilgi içeren reklam ve içerikler yayınlanmamaktadır.
              </p>
            </div>

            {/* Yasal Uyarı */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Yasal Uyarı ve Sorumluluk Reddi
              </h3>
              <p className="leading-relaxed mb-4">
                Sitemizde yer alan içeriklerde, reklam alanlarında veya hizmet açıklamalarında &quot;yetkili servis&quot;, 
                &quot;resmi servis&quot; ya da benzeri ifadeler kullanılmamakta olup, tüm servis faaliyetleri özel teknik 
                servis kapsamında yürütülmektedir. İşçilik ve servis süreçleri, yürürlükteki tüketici mevzuatına 
                ve hizmet sözleşmelerine uygun şekilde yürütülmektedir.
              </p>
              <p className="leading-relaxed mb-4">
                Web sitemizde yer alan tüm içerikler, bilgilendirme amaçlı olarak hazırlanmış olup; zaman içerisinde 
                güncellenebilir, değiştirilebilir veya kaldırılabilir. Firmamız, site içeriğinde yer alan bilgilerin 
                doğruluğu ve güncelliği konusunda azami özeni göstermesine rağmen, oluşabilecek yazım hataları, 
                teknik aksaklıklar veya üçüncü taraf kaynaklı bilgi değişikliklerinden sorumlu tutulamaz.
              </p>
            </div>

            {/* Kabul Beyanı */}
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Kullanıcı Kabul Beyanı
              </h3>
              <p className="leading-relaxed mb-4">
                Kullanıcılar, siteyi ziyaret ederek ve hizmet talebi oluşturarak bu bilgilendirme ve yasal uyarı 
                metnini okumuş ve kabul etmiş sayılır. Bu site Google Ads politikalarına, tüketici mevzuatına ve 
                etik ticaret kurallarına uygun şekilde faaliyet göstermektedir.
              </p>
              <p className="leading-relaxed">
                Firmamız, yürürlükteki yasa ve yönetmelikler çerçevesinde faaliyet göstermekte olup; tüketici 
                haklarına, şeffaf hizmet anlayışına ve dürüst ticari uygulamalara önem vermektedir. Şeffaflık ve 
                kullanıcı güveni önceliğimizdir. Hizmetlerimiz ile ilgili her türlü soru, görüş ve talep için 
                iletişim kanallarımız üzerinden tarafımızla iletişime geçilebilir.
              </p>
            </div>

            {/* Özet */}
            <div className="bg-slate-900 text-white rounded-xl p-6 text-center">
              <p className="text-lg font-bold mb-2">Özetle:</p>
              <p className="text-slate-300">
                Yetkili servis değildir. Garanti dışı cihazlara özel servis. 
                Marka isimleri ve logoları bilgilendirme amacıyla kullanılmaktadır. 
                Tüm hizmetler bağımsız özel teknik servis kapsamında sunulmaktadır.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
