import { Metadata } from 'next';
import Link from 'next/link';
import { Hero, ServiceHelp, TrustSection, ContactCTA } from '@/components/sections';
import { generateLocalBusinessSchema } from '@/lib/seo';
import { Container, Button } from '@/components/ui';
import { getFeaturedBlogs } from '@/data/blogs';
import { BookOpen, ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import { SITE_URL } from '@/lib/site';

// Alt kısımdaki bileşenleri lazy load ile yükle
const CityCoverage = dynamic(() => import('@/components/sections').then(mod => mod.CityCoverage), {
  loading: () => <div className="py-20 bg-slate-50 animate-pulse" />
});

const FAQSection = dynamic(() => import('@/components/sections').then(mod => mod.FAQSection), {
  loading: () => <div className="py-20 bg-slate-50 animate-pulse" />
});

const BlogGrid = dynamic(() => import('@/components/sections').then(mod => mod.BlogGrid), {
  loading: () => <div className="py-10 animate-pulse"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="h-64 bg-slate-200 rounded-2xl"/><div className="h-64 bg-slate-200 rounded-2xl"/><div className="h-64 bg-slate-200 rounded-2xl"/></div></div></div>
});

export const metadata: Metadata = {
  title: 'En Yakın Servis Hizmetleri | Beyaz Eşya, Kombi, Klima Servisi',
  description: 'Beyaz esya, kombi ve klima cihazlari icin ozel servis hizmeti. Hizmet kapsamimizi, sehir sayfalarimizi ve iletisim kanallarimizi inceleyin.',
  alternates: {
    canonical: SITE_URL
  }
};

function Disclaimer() {
  return (
    <section className="py-10 bg-slate-100 border-t border-slate-200">
      <Container>
        <div className="text-center">
          <p className="text-sm text-slate-700 leading-relaxed max-w-4xl mx-auto">
            <span className="font-bold text-slate-900">Önemli Bilgilendirme: </span>
            Firmamız, yukarıdaki markaların yetkili servisi veya iş ortağı değildir. 
            Tüm bakım ve onarım hizmetleri, alanında uzman ekibimiz tarafından bağımsız özel servis kapsamında sunulmaktadır. 
            Markaların isimleri sadece bilgilendirici amaçlıdır.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed max-w-4xl mx-auto mt-4">
            Arçelik, Beko, Vestel, LG, Samsung, Bosch, Siemens, Viessmann, Buderus, Vaillant, Daikin, Mitsubishi ve benzeri markalara ait garanti kapsamı dışındaki cihazlar için özel servis hizmeti sunuyoruz.
          </p>
        </div>
      </Container>
    </section>
  );
}

// Dekoratif Arka Plan Deseni
function DecorativePattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sol Üst Dekorasyon */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl" />
      
      {/* Sağ Alt Dekorasyon */}
      <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl" />
      
      {/* Grid Deseni */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Dalgalı Çizgi - Üst */}
      <svg className="absolute top-0 left-0 w-full h-16 text-blue-50" viewBox="0 0 1440 64" fill="none" preserveAspectRatio="none">
        <path d="M0,32 C360,64 720,0 1080,32 C1260,48 1380,40 1440,32 L1440,0 L0,0 Z" fill="currentColor"/>
      </svg>
    </div>
  );
}

export default function HomePage() {
  const schema = generateLocalBusinessSchema();
  const featuredBlogs = getFeaturedBlogs();
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <Hero />
      <ServiceHelp />
      <TrustSection />

      <ContactCTA />
      
      {/* Blog Bölümü - Dekoratif ve Gelişmiş Tasarım */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        <DecorativePattern />
        
        <Container className="relative z-10">
          {/* Başlık Bölümü */}
          <div className="text-center mb-14">
            {/* İkon ve Başlık */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 rounded-2xl mb-6 shadow-lg shadow-blue-900/20">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Arıza Rehberleri ve Blog Yazıları
            </h2>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Beyaz eşya arıza sorunlarına çözümler ve bakım ipuçları
            </p>
            
            {/* Dekoratif Çizgi */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-300" />
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-300" />
            </div>
            
            <Button size="lg" className="group">
              <Link href="/blog" className="flex items-center gap-2">
                Tüm Yazıları Gör
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
          {/* Blog Grid */}
          <BlogGrid posts={featuredBlogs} columns={3} />
        </Container>
      </section>
      
      <CityCoverage />
      <Disclaimer />
      <FAQSection />
    </>
  );
}
