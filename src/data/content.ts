import { FAQ, TrustItem } from '@/types';

export const faqs: FAQ[] = [
  {
    question: 'Servis çağırmadan önce nelere dikkat etmeliyim?',
    answer: 'Cihazınızda herhangi bir arıza belirtisi gördüğünüzde önce cihazın fişini çekip tekrar takmayı deneyebilirsiniz. Eğer sorun devam ediyorsa, bizi arayarak uzman ekibimizden destek alabilirsiniz. Arıza kodları için ilgili sayfamızı ziyaret edebilirsiniz.'
  },
  {
    question: 'Servis randevusu ne kadar sürede gelir?',
    answer: 'Şehir merkezlerinde genellikle 2-4 saat içinde, ilçe ve kırsal bölgelerde ise 24 saat içinde servis ekibimizi adresinize yönlendiriyoruz. Acil durumlar için hızlı servis seçeneğimiz mevcuttur.'
  },
  {
    question: 'Servis ücreti ne kadar?',
    answer: 'Servis ücreti arızanın türüne, cihaz marka ve modeline göre değişiklik göstermektedir. İlk keşif ve arıza tespiti için size şeffaf fiyat bilgisi sunuyoruz. Yerinde tespit sonrası onayınız alarak işleme başlıyoruz.'
  },
  {
    question: 'Parça değişimi gerektiğinde orijinal parça kullanılıyor mu?',
    answer: 'Evet, cihazınızın markasına uygun orijinal yedek parça kullanıyoruz. Parça değişimi sonrası garanti belgesi düzenlenmektedir.'
  },
  {
    question: 'Hizmet verilen bölgeler neresidir?',
    answer: 'Türkiye genelinde İzmir, Manisa, İstanbul, Ankara, Bursa, Antalya, Adana, Konya, Gaziantep ve Kayseri başta olmak üzere 81 ilde hizmet sunuyoruz. Detaylı bölge bilgisi için Servis Bölgeleri sayfamızı inceleyebilirsiniz.'
  },
  {
    question: 'Garanti kapsamında işlem yapılıyor mu?',
    answer: 'Cihazınızın garanti süresi içinde olması durumunda, üretici firma garantisi kapsamında işlem yapılabilmektedir. Garanti belgesi ve satın alma tarihi ile birlikte bizi arayarak randevu oluşturabilirsiniz.'
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
    title: 'Garanti Belgeli Hizmet',
    description: 'Tüm işlemlerimiz garanti kapsamındadır. Parça değişimlerinde orijinal yedek parça kullanıyoruz.'
  },
  {
    icon: 'Clock',
    title: 'Hızlı Servis',
    description: 'Şehir merkezlerinde 2-4 saat içinde adresinizdeyiz. Acil durumlar için hızlı müdahale ekibimiz hazır.'
  },
  {
    icon: 'Wrench',
    title: 'Uzman Ekip',
    description: 'Alanında deneyimli, sertifikalı teknik ekibimiz tüm marka ve modeller için profesyonel destek sunar.'
  },
  {
    icon: 'Receipt',
    title: 'Şeffaf Fiyat',
    description: 'İşlem öncesi size detaylı fiyat bilgisi sunuyoruz. Gizli ücret yok, tam fatura ile hizmet.'
  },
  {
    icon: 'MapPin',
    title: 'Geniş Kapsama',
    description: 'Türkiye genelinde 10+ il ve 50+ ilçede hizmet sunuyoruz. Size en yakın ekibimizi yönlendiriyoruz.'
  },
  {
    icon: 'Headphones',
    title: '7/24 İletişim',
    description: 'Haftanın 7 günü, günün 24 saatı müşteri hizmetlerimizden destek alabilirsiniz.'
  }
];
