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
              Beyaz esya, kombi ve klima cihazlari icin ozel servis hizmeti sunuyoruz.
              Hizmet kapsamimiz ve iletisim kanallarimiz hakkinda buradan bilgi alabilirsiniz.
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
                <span className="text-slate-700 font-medium">Iletisim Bilgileri</span>
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
                <strong className="text-slate-900">Yetkili servis değildir. Garanti dışı cihazlara özel servis.</strong>
              </p>

              <p>
                Bu site, ilgili markaların resmi veya yetkili servisi değildir. Sunulan hizmetler özel servis kapsamında verilmektedir. Marka isimleri ve logoları, tüketiciyi bilgilendirme amacıyla kullanılmaktadır. Resmi yetkimiz bulunmayan markalar için özel servis / bağımsız teknik servis olarak hizmet veriyoruz. Sitemizde &quot;yetkili servis&quot; ibaresi kullanılmaz. Firmamız, ilgili markalardan bağımsız olarak hizmet veren özel teknik servis merkezidir. Sitemizde adı geçen marka ve logolar ilgili firmalara aittir. Servisimiz, garanti süresi dolmuş cihazlara ücretli onarım desteği sunmaktadır.
              </p>

              <p>
                Sunulan hizmetlerin kapsami, uygulanacak islem adimlari ve ucretlendirme detaylari servis sureci oncesinde musterilere acik sekilde aktarilir.
              </p>

              <p>
                Bu site, adı geçen markaların resmi veya yetkili servisi değildir. Sunulan tüm hizmetler özel / bağımsız teknik servis kapsamında verilmektedir. Marka isimleri yalnızca bilgilendirme amaçlı kullanılmaktadır. Firmamız, ilgili markalardan bağımsız olarak hizmet vermektedir. Garanti süresi dolmuş cihazlara ücretli onarım hizmeti sunulmaktadır.
              </p>

              <p>
                <strong className="text-slate-900">Yasal Uyarı:</strong> Bu site, ilgili markaların resmi yetkili servisi değildir. Markadan bağımsız &quot;Özel Servis&quot; olarak hizmet vermektedir. Sitede kullanılan logolar ve marka isimleri, ilgili hak sahiplerine aittir ve sadece bilgi verme amaçlı kullanılmıştır. Firmamız, garanti süresi bitmiş cihazlara ücretli teknik destek sağlamaktadır.
              </p>

              <div className="rounded-2xl border border-slate-300 bg-slate-50 p-5 space-y-4">
                <p className="font-semibold text-slate-900">
                  Yasal Uyarı ve Bilgilendirme
                </p>
                <p>
                  Bu internet sitesi üzerinden sunulan tüm hizmetler, ilgili marka veya markaların resmi, yetkili, ana servis ya da üretici destek ağı kapsamında yer almamaktadır. Firmamız; üretici, ithalatçı veya distribütör firmalardan tamamen bağımsız olarak faaliyet gösteren, özel servis statüsünde hizmet sunan bir teknik servis kuruluşudur. Web sitemizde adı geçen marka isimleri, ürün adları, model bilgileri ve logolar; yalnızca tüketicilere cihaz uyumluluğu ve hizmet kapsamı hakkında bilgi verilmesi amacıyla kullanılmaktadır. Bu kullanım, ilgili markalar ile firmamız arasında herhangi bir yetkilendirme, temsil, lisans, sponsorluk veya ticari ortaklık ilişkisi bulunduğu anlamına gelmez.
                </p>
                <p>
                  Firmamız, ilgili markaların resmi servis prosedürleri, garanti koşulları, fiyat politikaları veya kampanyaları üzerinde herhangi bir yetkiye sahip değildir. Garanti süresi devam eden ürünler için kullanıcıların, ilgili markanın resmi yetkili servisleri ile doğrudan iletişime geçmeleri önerilmektedir. Sitemizde yer alan içeriklerde, reklam alanlarında veya hizmet açıklamalarında &quot;yetkili servis&quot;, &quot;resmi servis&quot; ya da benzeri ifadeler kullanılmamakta olup, tüm servis faaliyetleri özel teknik servis kapsamında yürütülmektedir.
                </p>
                <p>
                  Sunulan teknik servis hizmetleri; bakim, onarim, ariza tespiti, parca degisimi ve teknik destek islemlerini kapsamakta olup, agirlikli olarak garanti suresi sona ermis cihazlar icin ucretli olarak saglanmaktadir. Servis sureci, uygulanacak islemler ve ucretlendirme bilgileri kullanicilarla acik ve seffaf bicimde paylasilir.
                </p>
                <p>
                  Yapilacak islemler ve hizmet kapsami, servis surecine gecilmeden once kullaniciya bildirilir. Guncel uygulama kosullari, parca kullanimi ve destek kapsamiyla ilgili detaylar servis kaydi sirasinda ayrica aciklanir.
                </p>
                <p>
                  İşçilik ve servis süreçleri, yürürlükteki tüketici mevzuatına ve hizmet sözleşmelerine uygun şekilde yürütülmektedir. Web sitemizde yer alan tüm içerikler, bilgilendirme amaçlı olarak hazırlanmış olup; zaman içerisinde güncellenebilir, değiştirilebilir veya kaldırılabilir. Firmamız, site içeriğinde yer alan bilgilerin doğruluğu ve güncelliği konusunda azami özeni göstermesine rağmen, oluşabilecek yazım hataları, teknik aksaklıklar veya üçüncü taraf kaynaklı bilgi değişikliklerinden sorumlu tutulamaz.
                </p>
                <p className="font-semibold text-slate-900">
                  Kullanıcılar, siteyi ziyaret ederek ve hizmet talebi oluşturarak bu bilgilendirme ve yasal uyarı metnini okumuş ve kabul etmiş sayılır. Firmamız, yürürlükteki yasa ve yönetmelikler çerçevesinde faaliyet göstermekte olup; tüketici haklarına, şeffaf hizmet anlayışına ve dürüst ticari uygulamalara önem vermektedir. Hizmetlerimiz ile ilgili her türlü soru, görüş ve talep için iletişim kanallarımız üzerinden tarafımızla iletişime geçilebilir.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 space-y-4">
                <p className="font-semibold text-slate-900">
                  Politika ve Etik Uyum Taahhüdü
                </p>
                <p>
                  Bu web sitesinde sunulan tüm hizmetler ve yayınlanan reklamlar; Google Ads reklam politikaları, tüketicinin korunması mevzuatı ve etik ticaret kurallarına uygun olarak yürütülmektedir. Özellikle Google Ads&apos;in &quot;Kabul Edilemez İş Uygulamaları (Unacceptable Business Practices)&quot; politikası kapsamında; kullanıcıları yanıltan, yanlış yönlendiren veya aldatıcı ifadeler kullanılmamaktadır. Yetkili servis, resmi temsilci veya marka ortağı izlenimi oluşturacak hiçbir içerik, görsel veya reklam metni yer almamaktadır. Hizmet koşulları, servis kapsamı, ücretlendirme ve garanti durumu açık ve şeffaf şekilde belirtilmektedir. Tüketicinin karar verme sürecini manipüle eden, baskı kuran veya yanıltıcı ticari uygulamalardan kaçınılmaktadır. Marka haklarını ihlal eden veya haksız rekabete yol açabilecek herhangi bir reklam faaliyeti yürütülmemektedir. Amacımız, kullanıcıların doğru bilgiye ulaşmasını sağlamak ve güvenilir, şeffaf bir servis deneyimi sunmaktır.
                </p>
                <p className="font-semibold text-slate-900">
                  Google Ads tarafından tanımlanan kabul edilemez iş uygulamalarına karşı sıfır tolerans politikası uygulanmaktadır.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-300 bg-white p-5 space-y-4">
                <p className="font-semibold text-slate-900">
                  Yasal Bilgilendirme ve Marka Bağımsızlığı
                </p>
                <p>
                  Bu web sitesi, bağımsız bir özel teknik servis tarafından işletilmektedir. Sunulan hizmetler, ilgili markaların yetkili servis hizmetleri değildir. Web sitemizde adı geçen marka, logo ve ticari unvanlar ilgili firmaların tescilli markalarıdır ve yalnızca cihazların hangi markalara ait olduğunu belirtmek amacıyla kullanılmaktadır. İlgili markalar ile herhangi bir resmî ortaklık, yetkilendirme veya distribütörlük ilişkimiz bulunmamaktadır. Tüm servis hizmetleri, garanti kapsamı dışında kalan cihazlar için sunulmakta olup, kullanıcılar bu konuda açık ve şeffaf şekilde bilgilendirilmektedir. Google Ads reklam politikaları, tüketici mevzuatı ve haksız rekabet kurallarına uygun şekilde faaliyet göstermekteyiz. Kullanıcıları yanıltıcı, yetkili servis izlenimi oluşturan veya marka haklarını ihlal eden hiçbir reklam ve içerik kullanılmamaktadır. Şeffaflık ve kullanıcı güveni önceliğimizdir.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-300 bg-white p-5 space-y-4">
                <p className="font-semibold text-slate-900">
                  Google Ads Politika ve Şeffaflık Bildirimi
                </p>
                <p>
                  Bu web sitesi, bağımsız ve özel bir teknik servis tarafından işletilmektedir. Sunulan hizmetler, ilgili markaların yetkili servis hizmetleri değildir. Sitemizde adı geçen marka isimleri, cihazların hangi markalara ait olduğunu belirtmek amacıyla kullanılmaktadır. İlgili markalar ile herhangi bir resmî ortaklık, yetkilendirme veya distribütörlük ilişkimiz bulunmamaktadır. Marka logo ve görselleri kullanılmamaktadır. Tüm servis hizmetleri, garanti kapsamı dışında kalan cihazlar için sunulmakta olup; hizmet koşulları, servis kapsamı, ücretlendirme ve garanti durumu kullanıcıya açık ve şeffaf şekilde bildirilmektedir. Google Ads reklam politikaları kapsamında tanımlanan yanıltıcı beyanlar, yetkili servis izlenimi oluşturma, haksız rekabet, kabul edilemez iş uygulamaları ve aldatıcı ticari faaliyetlerden kesinlikle kaçınılmaktadır. Kullanıcıları yanlış yönlendirecek, baskı oluşturacak veya gerçeğe aykırı bilgi içeren reklam ve içerikler yayınlanmamaktadır. Google Ads&apos;in &quot;Unacceptable Business Practices (Kabul Edilemez İş Uygulamaları)&quot; politikasına karşı sıfır tolerans yaklaşımı benimsenmektedir. Amacımız, kullanıcıların doğru bilgiye ulaşmasını sağlamak ve güvenilir, şeffaf bir teknik servis hizmeti sunmaktır.
                </p>
              </div>
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
