# Internal Link Sistemi

Metin içinde geçen anahtar kelimeleri otomatik olarak ilgili sayfalara link veren SEO sistemi.

## Nasıl Çalışır

1. **Anahtar Kelime Eşleştirme**: Verilen metin içinde `internalLinks` listesindeki anahtar kelimeler aranır.
2. **Paragraf Bazlı**: Her paragrafta aynı kelime sadece 1 kez link yapılır.
3. **Limit**: Maksimum 5 link paragraf başına (ayaralanabilir).
4. **SEO Dostu**: Tüm linkler dofollow (nofollow yok).

## Kapsanan Anahtar Kelimeler

### Servis Türleri
- Beyaz eşya servisi, tamiri, bakımı, arızası
- Kombi servisi, tamiri, bakımı, arızası, montajı
- Klima servisi, tamiri, bakımı, arızası, montajı, gaz dolumu
- Buzdolabı servisi, tamiri, bakımı, arızası
- Çamaşır makinesi servisi, tamiri, bakımı, arızası
- Bulaşık makinesi servisi, tamiri, bakımı, arızası

### Şehir + Hizmet Kombinasyonları
- 81 il × 6 servis = otomatik üretilen linkler
- Örnek: "izmir beyaz eşya servisi", "istanbul kombi servisi", "ankara klima servisi"

### Bölge Bazlı
- Ege bölgesi, Akdeniz bölgesi, Karadeniz bölgesi, İç Anadolu, Marmara

### Genel SEO
- En iyi teknik servis, ucuz teknik servis, garantili servis
- Profesyonel servis, 24 saat servis, acil servis
- Yetkili servis, en yakın teknik servis

## Dosyalar

### `src/lib/internalLinks.ts`

Anahtar kelime haritası. Şehir + hizmet kombinasyonları otomatik üretilir.

```typescript
export interface InternalLink {
  keyword: string;  // Aranacak kelime
  href: string;    // Hedef URL
}
```

### `src/lib/autoLink.tsx`

Ana fonksiyonlar:

- `autoLinkText(text, options)`: Sunucu tarafında çalışır, HTML string döndürür.
- `<AutoLink />`: Client component, Next.js Link ile render eder.

## Yeni Anahtar Kelime Ekleme

`src/lib/internalLinks.ts` dosyasında `manualLinks` dizisine ekleme yap:

```typescript
const manualLinks: InternalLink[] = [
  // Mevcut linkler...
  { keyword: 'yeni kelime', href: '/yeni-sayfa' },
];
```

Veya otomatik üretilen linkleri genişletmek için yeni şehir/hizmet ekle.

## Kullanım

### Server Component (Statik İçerik)

```typescript
import { autoLinkText } from '@/lib/autoLink';

const htmlContent = autoLinkText('Metin içeriği', { maxLinks: 5 });
```

### Client Component (Interactive)

```typescript
import { AutoLink } from '@/lib/autoLink';

<AutoLink 
  text="Metin içeriği" 
  maxLinks={5}
  className="text-slate-700"
/>
```

## SEO Kuralları

- Aynı kelime aynı paragrafta sadece 1 kez link olur.
- Maksimum 5 link paragraf başına.
- Tüm linkler dofollow (SEO için).
- Daha uzun anahtar kelimeler öncelikli eşleşir.

## Sayfalarda Kullanım

- **Blog**: `src/app/blog/[slug]/page.tsx`
- **Şehir**: `src/app/[slug]/page.tsx`
- **Hizmet**: 
  - `beyaz-esya-servisi`
  - `kombi-servisi`
  - `klima-servisi`
  - `buzdolabi-servisi`
  - `camasir-makinesi-servisi`
  - `bulasik-makinesi-servisi`
