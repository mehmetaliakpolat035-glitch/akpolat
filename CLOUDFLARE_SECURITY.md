# Cloudflare Bot Management ve Güvenlik Ayarları

## 1. Cloudflare Dashboard Ayarları

### Security > Bots
- **Bot Fight Mode**: ON (Basit botları engeller)
- **Super Bot Fight Mode**: ON (Gelişmiş bot koruma)
- **Definitely Automated**: Block
- **Likely Automated**: Challenge

### Security > WAF
Kural Ekle:
```
Field: User-Agent
Operator: Contains
Value: curl|wget|python|scrapy|java|postman
Action: Block
```

### Speed > Optimization
- **Auto Minify**: HTML, CSS, JS - ON
- **Brotli**: ON
- **Early Hints**: ON

## 2. Page Rules (Önemli)

### Rule 1: API Rate Limiting
URL: `*turkiyeteknikservis.com/api/*`
Settings:
- Security Level: High
- Browser Integrity Check: ON

### Rule 2: Form Koruma  
URL: `*turkiyeteknikservis.com/iletisim`
Settings:
- Security Level: High
- Challenge Captcha: ON

## 3. Workers/Pages Functions (Edge'de Çalışır)

```javascript
// _worker.js (dist klasörüne eklenecek)
export default {
  async fetch(request, env) {
    const userAgent = request.headers.get('User-Agent') || '';
    const ip = request.headers.get('CF-Connecting-IP');
    
    // Güvenilir bot whitelist
    const trustedBots = [
      'Googlebot', 'Bingbot', 'Slurp', 'DuckDuckBot',
      'AhrefsBot', 'SemrushBot', 'MJ12bot'
    ];
    
    const isTrusted = trustedBots.some(bot => userAgent.includes(bot));
    
    if (!isTrusted) {
      // Şüpheli pattern kontrolü
      if (/curl|wget|python|scrapy/i.test(userAgent)) {
        return new Response('Access Denied', { status: 403 });
      }
    }
    
    return fetch(request);
  }
};
```

## 4. SEO Koruma Kontrol Listesi

✅ **robots.txt** - Güvenilir botlara izin ver
✅ **middleware.ts** - Rate limiting (30 req/min)  
✅ **honeypot** - Form koruması
✅ **sitemap.xml** - Google'a doğru yol göster
✅ **canonical URLs** - Duplicate content önleme

## 5. Bot Saldırısı Anında Yapılacaklar

1. **Cloudflare Analytics** > Security Events kontrol et
2. **IP Access Rules** ile saldırgan IP'leri engelle
3. **Under Attack Mode** aç (5 dakika)
4. **Rate Limiting Rules** oluştur:
   - 10 requests / 10 seconds / IP
   - Action: Challenge

## 6. Monitoring

Cloudflare Analytics'te takip et:
- Total Requests (Normal: 1000-5000/gün)
- Bot Traffic (%20-30 normal)
- Security Events (Artış varsa saldırı)
- Top Traffic Countries (Türkiye %80+ olmalı)