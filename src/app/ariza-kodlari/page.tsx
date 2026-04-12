import { Metadata } from 'next';
import { Container, Card, CardContent, Badge } from '@/components/ui';
import { Hero, Breadcrumb } from '@/components/sections';
import { toAbsoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Arıza Kodları',
  description: 'Beyaz eşya, kombi ve klima arıza kodları. Cihazınızda görülen arıza kodlarının anlamları ve çözüm önerileri.',
  alternates: {
    canonical: toAbsoluteUrl('/ariza-kodlari'),
  },
};

const errorCodes = [
  { brand: 'Arçelik', code: 'E01', description: 'Yıkama motoru arızası', solution: 'Motor veya motor kartı kontrolü gerekir.' },
  { brand: 'Arçelik', code: 'E02', description: 'Yıkama motoru devir sensörü arızası', solution: 'Sensör bağlantısını kontrol edin.' },
  { brand: 'Arçelik', code: 'E03', description: 'Drenaj motoru arızası', solution: 'Drenaj pompasını kontrol edin.' },
  { brand: 'Arçelik', code: 'E04', description: 'Su alma vanası arızası', solution: 'Su vanası veya elektronik kart sorunu.' },
  { brand: 'Arçelik', code: 'E05', description: 'Su seviye sensörü arızası', solution: 'Sensör veya basınç anahtarı kontrolü.' },
  { brand: 'Beko', code: 'E01', description: 'Motor arızası', solution: 'Motor bağlantılarını kontrol edin.' },
  { brand: 'Beko', code: 'E02', description: 'Isıtıcı sensörü arızası', solution: 'NTC sensörünü değiştirin.' },
  { brand: 'Beko', code: 'E03', description: 'Drenaj pompası arızası', solution: 'Pompayı temizleyin veya değiştirin.' },
  { brand: 'Beko', code: 'E04', description: 'Su alma problemi', solution: 'Su vanasını kontrol edin.' },
  { brand: 'Samsung', code: 'E1', description: 'Su alma hatası', solution: 'Su vanası veya basınç anahtarı.' },
  { brand: 'Samsung', code: 'E2', description: 'Drenaj hatası', solution: 'Drenaj hortumunu kontrol edin.' },
  { brand: 'Samsung', code: 'E3', description: 'Isıtıcı arızası', solution: 'Isıtıcı elementi kontrol edin.' },
  { brand: 'LG', code: 'PE', description: 'Su seviye sensörü arızası', solution: 'Basınç anahtarını kontrol edin.' },
  { brand: 'LG', code: 'dE', description: 'Kapı switch arızası', solution: 'Kapı switch veya kilit mekanizması.' },
  { brand: 'LG', code: 'IE', description: 'Su alma sorunu', solution: 'Su vanası kontrolü gerekir.' },
];

const kombiErrorCodes = [
  { brand: 'Viessmann', code: 'F0', description: 'Kontrol parametresi hatası', solution: 'Elektronik kart resetlenmeli.' },
  { brand: 'Viessmann', code: 'F1', description: 'Kazan aşırı ısınmış', solution: 'Termostat veya sensör kontrolü.' },
  { brand: 'Viessmann', code: 'F2', description: 'Sensör arızası', solution: 'NTC sensörü değiştirilmeli.' },
  { brand: 'Viessmann', code: 'F3', description: 'Aleve ulaşılamadı', solution: 'Gaz valfi veya elektrot kontrolü.' },
  { brand: 'DemirDöküm', code: 'E01', description: 'Ateşleme hatası', solution: 'Elektrot ve gaz basıncı kontrolü.' },
  { brand: 'DemirDöküm', code: 'E02', description: 'Aşırı ısınma', solution: 'Termostatik vanayı kontrol edin.' },
  { brand: 'DemirDöküm', code: 'E03', description: 'Düşük su basıncı', solution: 'Su basıncını kontrol edin.' },
  { brand: 'DemirDöküm', code: 'E04', description: 'Gaz vanası arızası', solution: 'Gaz valfi değişimi gerekebilir.' },
  { brand: 'Baymak', code: 'F1', description: 'Aşırı ısınma', solution: 'Sensör veya pompa kontrolü.' },
  { brand: 'Baymak', code: 'F2', description: 'NTC sensör arızası', solution: 'Sensörü değiştirin.' },
  { brand: 'Baymak', code: 'F3', description: 'Düşük basınç', solution: 'Su basıncını artırın.' },
  { brand: 'Baymak', code: 'F4', description: 'Alev yok', solution: 'Gaz valfi veya elektrot.' },
];

const klimaErrorCodes = [
  { brand: 'Daikin', code: 'A0', description: 'Oda sensörü arızası', solution: 'Oda sensörünü kontrol edin.' },
  { brand: 'Daikin', code: 'A1', description: 'İç ünite kartı arızası', solution: 'Elektronik kart kontrolü.' },
  { brand: 'Daikin', code: 'A3', description: 'Drenaj pompası arızası', solution: 'Pompayı temizleyin.' },
  { brand: 'Daikin', code: 'A6', description: 'Fan motoru arızası', solution: 'Fan motoru değişimi.' },
  { brand: 'Mitsubishi', code: 'E1', description: 'Uzaktan kumanda hatası', solution: 'Pil veya kumanda kontrolü.' },
  { brand: 'Mitsubishi', code: 'E2', description: 'Oda sensörü arızası', solution: 'Sensör bağlantısını kontrol.' },
  { brand: 'Mitsubishi', code: 'E3', description: 'Gaz kaçağı', solution: 'Gaz dolumu gerekebilir.' },
  { brand: 'Mitsubishi', code: 'E4', description: 'Yüksek basınç koruması', solution: 'Dış ünite temizliği.' },
  { brand: 'LG', code: 'CH01', description: 'Filtre uyarısı', solution: 'Filtreleri temizleyin.' },
  { brand: 'LG', code: 'CH02', description: 'Su tankı dolu', solution: 'Su tankını boşaltın.' },
  { brand: 'LG', code: 'CH10', description: 'Gaz kaçağı', solution: 'Gaz kaçağı tespiti gerekli.' },
];

export default function ArizaKodlariPage() {
  const breadcrumbItems = [
    { label: 'Arıza Kodları' },
  ];

  return (
    <>
      <Container className="mt-4">
        <Breadcrumb items={breadcrumbItems} />
      </Container>
      
      <Hero 
        title="Arıza Kodları"
        subtitle="Cihazınızda görülen arıza kodlarının anlamları ve çözüm önerileri. Kendiniz çözemediğiniz durumlarda uzman ekibimizi arayın."
      />
      
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Beyaz Eşya Arıza Kodları</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {errorCodes.map((item, index) => (
                <Card key={index} variant="bordered">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="info">{item.brand}</Badge>
                      <code className="bg-slate-100 px-2 py-1 rounded text-sm font-mono font-bold text-red-600">
                        {item.code}
                      </code>
                    </div>
                    <p className="text-slate-800 font-medium mb-2">{item.description}</p>
                    <p className="text-sm text-slate-600">{item.solution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Kombi Arıza Kodları</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {kombiErrorCodes.map((item, index) => (
                <Card key={index} variant="bordered">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="warning">{item.brand}</Badge>
                      <code className="bg-slate-100 px-2 py-1 rounded text-sm font-mono font-bold text-red-600">
                        {item.code}
                      </code>
                    </div>
                    <p className="text-slate-800 font-medium mb-2">{item.description}</p>
                    <p className="text-sm text-slate-600">{item.solution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Klima Arıza Kodları</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {klimaErrorCodes.map((item, index) => (
                <Card key={index} variant="bordered">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="success">{item.brand}</Badge>
                      <code className="bg-slate-100 px-2 py-1 rounded text-sm font-mono font-bold text-red-600">
                        {item.code}
                      </code>
                    </div>
                    <p className="text-slate-800 font-medium mb-2">{item.description}</p>
                    <p className="text-sm text-slate-600">{item.solution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
