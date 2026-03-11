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

// Hız limiti için IP takibi (basit implementasyon)
const ipRequests = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT = 30; // 1 dakikada max 30 istek
const RATE_WINDOW = 60000; // 1 dakika (ms)

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const ip = request.headers.get('x-forwarded-for') || 
             request.headers.get('x-real-ip') || 
             'unknown';
  
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
  
  // 3. Rate limiting (gerçek kullanıcılar için)
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
  
  // 4. SEO için gerekli header'ları ekle
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