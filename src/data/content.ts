import { FAQ, TrustItem } from '@/types';

export const faqs: FAQ[] = [
  {
    question: 'Servis çağırmadan önce nelere dikkat etmeliyim?',
    answer: 'Cihazınızda herhangi bir arıza belirtisi gördüğünüzde önce cihazın fişini çekip tekrar takmayı deneyebilirsiniz. Eğer sorun devam ediyorsa, bizi arayarak uzman ekibimizden destek alabilirsiniz. Arıza kodları için ilgili sayfamızı ziyaret edebilirsiniz.'
  },
  {
    question: 'Servis randevusu ne kadar sürede gelir?',
    answer: 'Servis randevusu, bulunduğunuz bölgeye ve ekip uygunluğuna göre planlanmaktadır. Talebiniz alındıktan sonra size uygun yönlendirme ve bilgilendirme yapılır.'
  },
  {
    question: 'Servis ücreti ne kadar?',
    answer: 'Servis ücreti arızanın türüne, cihaz marka ve modeline göre değişiklik göstermektedir. İnceleme sonrası yapılacak işlemler ve ücret bilgisi kullanıcı onayına sunularak süreç planlanır.'
  },
  {
    question: 'Parça değişimi gerektiğinde orijinal parça kullanılıyor mu?',
    answer: 'Parça değişimi gerektiğinde cihazın ihtiyacına uygun parça seçenekleri değerlendirilir. Uygulanacak işlem ve parça bilgisi kullanıcı onayı sonrasında paylaşılır.'
  },
  {
    question: 'Hizmet verilen bölgeler neresidir?',
    answer: 'Farklı şehir ve bölgelerden gelen servis taleplerini hizmet kapsamı ve ekip uygunluğuna göre değerlendiriyoruz. Detaylı bölge bilgisi için Servis Bölgeleri sayfamızı inceleyebilirsiniz.'
  },
  {
    question: 'Garanti kapsamında işlem yapılıyor mu?',
    answer: 'Sunulan hizmetler ağırlıklı olarak garanti kapsamı dışındaki cihazlara yöneliktir. Garanti süresi devam eden ürünler için ilgili markanın yetkili servis kanallarıyla iletişime geçilmesi önerilir.'
  }
];

export const serviceFAQs: Record<string, FAQ[]> = {
  'beyaz-esya-servisi': [
    {
      question: 'Buzdolabım soğutmuyor, ne yapmalıyım?',
      answer: 'Buzdolabınızın soğutmama sorunu birçok nedenden kaynaklanabilir. Öncelikle termostat ayarını kontrol edin, havalandırma menfezlerinin kapalı olmadığından emin olun. Sorun devam ediyorsa servis çağırın.'
    },
    {
      question: 'Çamaşır makinesi su almıyor, neden?',
      answer: 'Su vanasının açık olduğundan, tahliye hortumunun doğru takıldığından emin olun. Su basıncı düşükse de bu sorun yaşanabilir. Eğer bu kontrolleri yaptıysanız ve sorun devam ediyorsa teknik servisi arayın.'
    },
    {
      question: 'Bulaşık makinesi yıkama yapmıyor, ne yapmalıyım?',
      answer: 'Önce programın doğru seçildiğinden emin olun. Drenaj hortumunu kontrol edin, tıkanıklık olmadığından emin olun. Gerekirse cihazı resetleyip tekrar deneyin.'
    }
  ],
  'kombi-servisi': [
    {
      question: 'Kombim neden ısıtmıyor?',
      answer: 'Kombinin ısıtmama sorunu basınç düşüklüğü, hava birikimi, sensör arızası veya ateşleme problemi gibi nedenlerden kaynaklanabilir. Önce basınç göstergesini kontrol edin, düşükse su ekleyin. Sorun devam ederse servisi arayın.'
    },
    {
      question: 'Kombi arıza kodu ne anlama geliyor?',
      answer: 'Her kombi markasının farklı arıza kodları vardır. Genel olarak E01 ateşleme, E03 sensör, E05 basınç, E10 su basıncı anlamına gelir. Detaylı bilgi için Arıza Kodları sayfamızı inceleyebilirsiniz.'
    },
    {
      question: 'Kombi bakımı ne sıklıkla yapılmalı?',
      answer: 'Kombinizin verimli çalışması ve ömrünü uzatmak için yılda en az bir kez (ideal olarak ısıtma sezonu başında) profesyonel bakım yaptırmanızı öneriyoruz.'
    }
  ],
  'klima-servisi': [
    {
      question: 'Klima soğutmuyor, ne yapmalıyım?',
      answer: 'Önce filtrelerin temiz olduğundan emin olun. Modun doğru ayarlandığını (soğutma modunda olduğunu) kontrol edin. Gaz seviyesi düşük olabilir, bu durumda gaz dolumu gerekir. Sorun devam ediyorsa servisi arayın.'
    },
    {
      question: 'Klima kaç derecede çalışmalı?',
      answer: 'Klimalar genellikle 16-30°C arasında ayarlanabilir. Enerji verimliliği ve konfor açısından yazın 24-26°C, kışın 20-22°C idealdir. Bu ayarlar hem konforunuzu sağlar hem de enerji tasarrufu yapmanıza yardımcı olur.'
    },
    {
      question: 'Klima gazı ne zaman doldurulmalı?',
      answer: 'Klima gazı, soğutma kapasitesinin düşmesi, eriyen buz kristalleri veya sesli çalışma gibi belirtilerle anlaşılabilir. Genellikle 2-3 yılda bir kontrol edilmesi önerilir.'
    }
  ]
};

export const trustItems: TrustItem[] = [
  {
    icon: 'Shield',
    title: 'Şeffaf Hizmet Anlayışı',
    description: 'Bakım ve onarım süreçlerinde yapılacak işlemler hakkında kullanıcılarımızı açık şekilde bilgilendiriyoruz.'
  },
  {
    icon: 'Clock',
    title: 'Planlı Servis Süreci',
    description: 'Servis taleplerini bulunduğunuz bölge ve ekibimizin uygunluğuna göre planlayarak yönlendiriyoruz.'
  },
  {
    icon: 'Wrench',
    title: 'Deneyimli Teknik Ekip',
    description: 'Farklı cihaz gruplarında bakım, onarım ve arıza tespiti süreçlerinde deneyimli ekiplerle hizmet sunuyoruz.'
  },
  {
    icon: 'Receipt',
    title: 'Şeffaf Fiyat',
    description: 'İşlem öncesi size detaylı fiyat bilgisi sunuyoruz. Gizli ücret yok, tam fatura ile hizmet.'
  },
  {
    icon: 'MapPin',
    title: 'Geniş Kapsama',
    description: 'Farklı şehir ve bölgelerde servis taleplerini değerlendirerek uygun yönlendirme sağlamaya çalışıyoruz.'
  },
  {
    icon: 'Headphones',
    title: 'İletişim Desteği',
    description: 'Telefon, WhatsApp ve e-posta kanallarımız üzerinden servis süreci hakkında bilgi alabilirsiniz.'
  }
];
