import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Güvenilir botları whitelist'e al
const TRUSTED_BOTS = [
  'Googlebot',
  'Googlebot-Image',
  'Googlebot-Mobile', 
  'Bingbot',
  'Slurp',
  'DuckDuckBot',
  'Baiduspider',
  'YandexBot',
  'Applebot',
  'FacebookBot',
  'Twitterbot',
  'LinkedInBot',
  'WhatsApp',
  'AhrefsBot',
  'SemrushBot',
  'MJ12bot',
  'DotBot',
  'Rogerbot'
];

// Şüpheli pattern'ler
const SUSPICIOUS_PATTERNS = [
  /curl\/\d+/i,
  /wget\/\d+/i,
  /python-requests\/\d+/i,
  /scrapy/i,
  /httpclient/i,
  /go-http-client/i,
  /node/i,
  /postman/i,
  /java/i,
  /libwww/i,
  /http_request/i,
  /urllib/i,
  / mechanize/i
];

// Türkiye şehirleri ve plaka kodları (IP konum tespiti için)
const TURKEY_CITIES: Record<string, string> = {
  '35': 'izmir',
  '45': 'manisa',
  '34': 'istanbul',
  '06': 'ankara',
  '16': 'bursa',
  '07': 'antalya',
  '01': 'adana',
  '27': 'gaziantep',
  '41': 'kocaeli',
  '31': 'hatay',
  '55': 'samsun',
  '46': 'kahramanmaras',
  '10': 'balikesir',
  '48': 'mugla',
  '09': 'aydin',
  '20': 'denizli',
  '32': 'isparta',
  '42': 'konya',
  '38': 'kayseri',
  '58': 'sivas',
  '25': 'erzurum',
  '61': 'trabzon',
  '52': 'ordu',
  '60': 'tokat',
  '59': 'tekirdag',
  '22': 'edirne',
  '65': 'van',
  '44': 'malatya',
  '21': 'diyarbakir',
  '63': 'sanliurfa',
  '79': 'kilis',
  '80': 'osmaniye',
  '28': 'giresun',
  '53': 'rize',
  '14': 'bolu',
  '37': 'kastamonu',
  '05': 'amasya',
  '19': 'corum',
  '71': 'kirsehir',
  '51': 'nevsehir',
  '50': 'nevsehir',
  '68': 'aksaray',
  '78': 'karabuk',
  '67': 'zonguldak',
  '74': 'bartin',
  '78': 'karabuk',
  '18': 'cankiri',
  '66': 'yozgat',
  '40': 'kirsehir',
  '26': 'eskisehir',
  '43': 'kutahya',
  '64': 'usak',
  '11': 'bilecik',
  '39': 'kirklareli',
  '17': 'canakkale',
  '49': 'mardin',
  '47': 'mardin',
  '62': 'tunceli',
  '56': 'siirt',
  '69': 'bayburt',
  '13': 'bitlis',
  '36': 'kars',
  '75': 'ardahan',
  '08': 'artvin',
  '57': 'sinop',
  '12': 'bingol',
  '24': 'erzincan',
  '29': 'gumushane',
  '30': 'hakkari',
  '73': 'sirnak',
  '72': 'batman',
  '70': 'karaman',
  '15': 'burdur',
  '03': 'afyonkarahisar',
  '02': 'adiyaman',
  '04': 'agri',
  '23': 'elazig',
  '54': 'sakarya',
  '77': 'yalova',
  '33': 'mersin',
  '81': 'duzce',
};

// Arama motorlarından gelen kullanıcıları tespit et
function getCityFromReferer(referer: string): string | null {
  if (!referer) return null;
  
  try {
    const refererLower = referer.toLowerCase();
    
    // Google, Bing, Yahoo, Yandex vb. arama motorlarından gelen trafik
    if (refererLower.includes('google.') || 
        refererLower.includes('bing.') || 
        refererLower.includes('yahoo.') ||
        refererLower.includes('yandex.')) {
      
      // URL'den arama sorgusunu çıkar
      const url = new URL(referer);
      const searchQuery = url.searchParams.get('q') || 
                         url.searchParams.get('p') || 
                         url.searchParams.get('text') || '';
      
      if (searchQuery) {
        // Arama sorgusunda şehir ara
        const cityKeywords: Record<string, string[]> = {
          'izmir': ['izmir', 'izmır', 'bornova', 'karsiyaka', 'karsıyaka', 'konak', 'buca', 'cigli', 'çiğli', 'gaziemir', 'balcova', 'balçova', 'torbali', 'torbalı'],
          'manisa': ['manisa', 'manısa', 'sehzadeler', 'şehzadeler', 'yunusemre', 'yunusemre', 'akhisar', 'salihli', 'soma', 'turgutlu'],
          'istanbul': ['istanbul', 'istanbuf', 'kadikoy', 'kadıköy', 'besiktas', 'beşiktaş', 'sisli', 'şişli', 'uskudar', 'üsküdar', 'fatih', 'beyoglu', 'beyoğlu'],
          'ankara': ['ankara', 'ankra', 'cankaya', 'çankaya', 'kecioren', 'keçiören', 'yenimahalle', 'mamak', 'etimesgut'],
          'bursa': ['bursa', 'burfa', 'nilufer', 'nilüfer', 'osmangazi', 'yildirim', 'yıldırım'],
          'antalya': ['antalya', 'antalya', 'muratpasa', 'muratpaşa', 'kepez', 'konyaalti', 'konyaaltı'],
          'adana': ['adana', 'seyhan', 'cukurova', 'çukurova', 'yuregir', 'yüreğir'],
          'gaziantep': ['gaziantep', 'gazi antep', 'sahinbey', 'şahinbey', 'sehitkamil', 'şehitkamil'],
          'kocaeli': ['kocaeli', 'izmit', 'izmit', 'gebze', 'darica', 'darıca'],
          'samsun': ['samsun', 'samsun', 'atakum', 'ilkadim', 'ilkadım'],
          'denizli': ['denizli', 'denızlı', 'pamukkale', 'merkezefendi'],
          'mugla': ['mugla', 'muğla', 'bodrum', 'fethiye', 'marmaris', 'mentese', 'menteşe'],
          'aydin': ['aydin', 'aydın', 'efeler', 'nazilli', 'soke', 'söke'],
          'balikesir': ['balikesir', 'balıkesir', 'altieylul', 'altıeylül', 'karesi'],
          'konya': ['konya', 'konya', 'selcuklu', 'selçuklu', 'karatay', 'meram'],
          'kayseri': ['kayseri', 'kayserı', 'melikgazi', 'kocasinan', 'talas'],
          'eskisehir': ['eskisehir', 'eşkişehir', 'odunpazari', 'odunpazarı', 'tepebasi', 'tepebaşı'],
          'trabzon': ['trabzon', 'trabzof', 'ortahisar', 'akcaabat', 'akçaabat'],
          'van': ['van', 'van', 'ipekyolu', 'tusba', 'tuşba'],
          'malatya': ['malatya', 'malatya', 'battalgazi', 'yesilyurt', 'yeşilyurt'],
          'diyarbakir': ['diyarbakir', 'diyarbakır', 'kayapinar', 'kayapınar', 'baglar', 'bağlar', 'yenişehir'],
          'sanliurfa': ['sanliurfa', 'şanlıurfa', 'urfa', 'haliliye', 'eyyubiye', 'karakopru', 'karaköprü'],
          'mardin': ['mardin', 'mardın', 'artuklu', 'kiziltepe', 'kızıltepe'],
          'hatay': ['hatay', 'hatay', 'antakya', 'iskenderun', 'defne'],
          'tekirdag': ['tekirdag', 'tekirdağ', 'suleymanpasa', 'süleymanpaşa', 'corlu', 'çorlu'],
          'edirne': ['edirne', 'edirne', 'merkez'],
          'canakkale': ['canakkale', 'çanakkale', 'merkez', 'gelibolu'],
          'kirklareli': ['kirklareli', 'kırklareli', 'merkez', 'luleburgaz', 'lüleburgaz'],
        };
        
        const queryLower = searchQuery.toLowerCase();
        for (const [city, keywords] of Object.entries(cityKeywords)) {
          if (keywords.some(keyword => queryLower.includes(keyword))) {
            return city;
          }
        }
      }
    }
  } catch (e) {
    // URL parse hatası
  }
  
  return null;
}

// IP adresinden Türkiye şehri tespiti (basit implementasyon)
// Not: Gerçek uygulamada geoip servisi kullanılmalı (örn: MaxMind, IP2Location)
function getCityFromIP(ip: string): string | null {
  if (!ip || ip === 'unknown' || ip === '127.0.0.1' || ip.startsWith('192.168.') || ip.startsWith('10.')) {
    return null;
  }
  
  // Türkiye IP aralıkları (basit kontrol - gerçek uygulamada daha detaylı olmalı)
  // Bu sadece örnek - gerçek bir geoip servisi önerilir
  const ipParts = ip.split('.');
  if (ipParts.length === 4) {
    const firstOctet = parseInt(ipParts[0]);
    const secondOctet = parseInt(ipParts[1]);
    
    // Türkiye IP aralıkları (örnek)
    if (firstOctet === 88 || firstOctet === 95 || firstOctet === 176 || 
        firstOctet === 178 || firstOctet === 185 || firstOctet === 188 ||
        firstOctet === 195 || firstOctet === 212 || firstOctet === 213 ||
        firstOctet === 217 || firstOctet === 31 || firstOctet === 46 ||
        firstOctet === 78 || firstOctet === 80 || firstOctet === 81 ||
        firstOctet === 82 || firstOctet === 83 || firstOctet === 84 ||
        firstOctet === 85 || firstOctet === 86 || firstOctet === 87 ||
        firstOctet === 89 || firstOctet === 92 || firstOctet === 93 ||
        firstOctet === 94 || firstOctet === 109 || firstOctet === 144 ||
        firstOctet === 151 || firstOctet === 159 || firstOctet === 161 ||
        firstOctet === 168 || firstOctet === 171 || firstOctet === 176 ||
        firstOctet === 182 || firstOctet === 184 || firstOctet === 193 ||
        firstOctet === 194 || firstOctet === 195 || firstOctet === 198 ||
        firstOctet === 199 || firstOctet === 212 || firstOctet === 213 ||
        firstOctet === 217 || firstOctet === 223 || firstOctet === 31 ||
        firstOctet === 37 || firstOctet === 46 || firstOctet === 5 ||
        firstOctet === 24 || firstOctet === 62 || firstOctet === 77 ||
        firstOctet === 79 || firstOctet === 91 || firstOctet === 107 ||
        firstOctet === 109 || firstOctet === 149 || firstOctet === 150 ||
        firstOctet === 151 || firstOctet === 159 || firstOctet === 161 ||
        firstOctet === 168 || firstOctet === 171 || firstOctet === 176 ||
        firstOctet === 178 || firstOctet === 179 || firstOctet === 180 ||
        firstOctet === 182 || firstOctet === 184 || firstOctet === 185 ||
        firstOctet === 188 || firstOctet === 193 || firstOctet === 194 ||
        firstOctet === 195 || firstOctet === 198 || firstOctet === 199 ||
        firstOctet === 212 || firstOctet === 213 || firstOctet === 217 ||
        firstOctet === 223 || firstOctet === 5 || firstOctet === 24 ||
        firstOctet === 31 || firstOctet === 37 || firstOctet === 46 ||
        firstOctet === 62 || firstOctet === 77 || firstOctet === 79 ||
        firstOctet === 88 || firstOctet === 91 || firstOctet === 92 ||
        firstOctet === 93 || firstOctet === 94 || firstOctet === 95 ||
        firstOctet === 107 || firstOctet === 109 || firstOctet === 144 ||
        firstOctet === 149 || firstOctet === 150 || firstOctet === 151 ||
        firstOctet === 159 || firstOctet === 161 || firstOctet === 168 ||
        firstOctet === 171 || firstOctet === 176 || firstOctet === 178 ||
        firstOctet === 179 || firstOctet === 180 || firstOctet === 182 ||
        firstOctet === 184 || firstOctet === 185 || firstOctet === 188 ||
        firstOctet === 193 || firstOctet === 194 || firstOctet === 195 ||
        firstOctet === 198 || firstOctet === 199 || firstOctet === 212 ||
        firstOctet === 213 || firstOctet === 217 || firstOctet === 223) {
      // Türkiye'den geliyor gibi görünüyor
      // Varsayılan olarak İzmir'e yönlendir (en popüler şehirlerden biri)
      // Gerçek uygulamada daha detaylı IP-şehir eşleştirmesi yapılmalı
      return null; // IP'den şehir tespiti güvenilir değil, referer'a bak
    }
  }
  
  return null;
}

// Hız limiti için IP takibi (basit implementasyon)
const ipRequests = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT = 30; // 1 dakikada max 30 istek
const RATE_WINDOW = 60000; // 1 dakika (ms)

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const ip = request.headers.get('x-forwarded-for') || 
             request.headers.get('x-real-ip') || 
             'unknown';
  const referer = request.headers.get('referer') || '';
  const pathname = request.nextUrl.pathname;
  
  // Güvenilir bot kontrolü
  const isTrustedBot = TRUSTED_BOTS.some(bot => userAgent.includes(bot));
  
  // Şüpheli bot kontrolü
  const isSuspicious = SUSPICIOUS_PATTERNS.some(pattern => pattern.test(userAgent));
  
  // 1. Güvenilir botlara izin ver
  if (isTrustedBot) {
    return NextResponse.next();
  }
  
  // 2. Şüpheli user-agent'ları engelle
  if (isSuspicious && !isTrustedBot) {
    console.log(`🚫 Bot blocked: ${ip} - ${userAgent.substring(0, 100)}`);
    return new NextResponse('Access Denied', { 
      status: 403,
      headers: {
        'X-Bot-Protection': 'active'
      }
    });
  }
  
  // 3. Konum tespiti ve yönlendirme (sadece ana sayfa için)
  // Botlar için yönlendirme yapma
  if (pathname === '/' && !isTrustedBot) {
    let detectedCity: string | null = null;
    let detectionSource: string = '';
    
    // Önce referer'dan (Google/Bing arama) şehir tespiti dene
    const cityFromReferer = getCityFromReferer(referer);
    if (cityFromReferer) {
      detectedCity = cityFromReferer;
      detectionSource = 'referer';
      console.log(`🎯 City detected from referer: ${detectedCity} | Query: ${referer}`);
    }
    
    // Referer'dan bulunamadıysa IP'den dene
    if (!detectedCity) {
      const cityFromIP = getCityFromIP(ip);
      if (cityFromIP) {
        detectedCity = cityFromIP;
        detectionSource = 'ip';
        console.log(`🌍 City detected from IP: ${detectedCity} | IP: ${ip}`);
      }
    }
    
    // Şehir tespit edildiyse yönlendir
    if (detectedCity) {
      // Cookie kontrolü - kullanıcı daha önce bir şehir seçtiyse ona yönlendirme
      const cityCookie = request.cookies.get('user_city');
      if (!cityCookie || cityCookie.value !== detectedCity) {
        // Yönlendirme yap ve cookie'ye şehri kaydet
        const response = NextResponse.redirect(new URL(`/${detectedCity}`, request.url));
        response.cookies.set('user_city', detectedCity, { 
          maxAge: 60 * 60 * 24 * 30, // 30 gün
          path: '/',
          httpOnly: false, // JavaScript'ten erişilebilir
          sameSite: 'lax'
        });
        response.cookies.set('city_detection_source', detectionSource, {
          maxAge: 60 * 60 * 24 * 30,
          path: '/',
          httpOnly: false,
          sameSite: 'lax'
        });
        console.log(`🔄 Redirecting to: /${detectedCity} | Source: ${detectionSource}`);
        return response;
      }
    }
  }
  
  // 4. Rate limiting (gerçek kullanıcılar için)
  const now = Date.now();
  const ipKey = ip.toString();
  const requestData = ipRequests.get(ipKey);
  
  if (requestData) {
    // Zaman penceresi dışındaysa sıfırla
    if (now - requestData.timestamp > RATE_WINDOW) {
      ipRequests.set(ipKey, { count: 1, timestamp: now });
    } else {
      // Sınırı aştıysa engelle
      if (requestData.count >= RATE_LIMIT) {
        console.log(`⚠️ Rate limit exceeded: ${ip}`);
        return new NextResponse('Too Many Requests', { 
          status: 429,
          headers: {
            'Retry-After': '60',
            'X-Rate-Limit': '30'
          }
        });
      }
      // Sayaç artır
      requestData.count++;
    }
  } else {
    ipRequests.set(ipKey, { count: 1, timestamp: now });
  }
  
  // 5. SEO için gerekli header'ları ekle
  const response = NextResponse.next();
  
  // Botlara crawl-delay bilgisi ver
  response.headers.set('X-Robots-Tag', 'all');
  
  return response;
}

// Hangi path'lerde çalışacak
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
