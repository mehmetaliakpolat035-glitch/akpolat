import type { Metadata } from 'next';
import { Suspense } from 'react';
import BlogContent from './BlogContent';
import { toAbsoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Teknik Servis Blog | Beyaz Eşya, Kombi ve Klima Rehberleri',
  description: 'Beyaz eşya, kombi ve klima ile ilgili arıza çözümleri, bakım ipuçları ve teknik rehberler. Profesyonel teknik servis ekibimizden uzman bilgileri.',
  alternates: {
    canonical: toAbsoluteUrl('/blog')
  },
  openGraph: {
    title: 'Teknik Servis Blog | Beyaz Eşya, Kombi ve Klima Rehberleri',
    description: 'Beyaz eşya, kombi ve klima ile ilgili arıza çözümleri, bakım ipuçları ve teknik rehberler.',
    url: toAbsoluteUrl('/blog'),
    type: 'website',
  }
};

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Yükleniyor...</div>}>
      <BlogContent />
    </Suspense>
  );
}
