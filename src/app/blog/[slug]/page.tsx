import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { Disclaimer, BlogGrid } from '@/components/sections';
import { blogPosts, getBlogBySlug, getBlogsByCategory, blogCategories, BlogPost } from '@/data/blogs';
import { Button } from '@/components/ui';
import { ArrowLeft } from 'lucide-react';

function generateArticleSchema(post: BlogPost) {
  const categoryName = blogCategories.find(c => c.id === post.category)?.name || post.category;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: 'En Yakın Servis Hizmetleri',
      url: 'https://turkiyeteknikservis.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'En Yakın Servis Hizmetleri',
      logo: {
        '@type': 'ImageObject',
        url: 'https://turkiyeteknikservis.com/logo.png'
      }
    },
    datePublished: post.createdAt,
    dateModified: post.createdAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://turkiyeteknikservis.com/blog/${post.slug}`
    },
    keywords: post.tags.join(', '),
    articleSection: categoryName
  };
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  
  if (!post) {
    return { title: 'Blog Yazısı Bulunamadı' };
  }
  
  const canonicalUrl = `https://turkiyeteknikservis.com/blog/${slug}`;
  
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: canonicalUrl,
      publishedTime: post.createdAt,
      authors: ['En Yakın Servis Hizmetleri'],
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  
  if (!post) {
    notFound();
  }
  
  const relatedPosts = getBlogsByCategory(post.category).filter(p => p.id !== post.id).slice(0, 3);
  const articleSchema = generateArticleSchema(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <section className="py-12 lg:py-16 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10">
          <article className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="mb-6">
                <Link 
                  href="/blog"
                  className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-900 font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Geri
                </Link>
              </div>
              
              <div className="mb-6">
                <span className="inline-block bg-blue-100 text-blue-900 text-sm font-bold px-4 py-2 rounded-full">
                  {blogCategories.find(c => c.id === post.category)?.name || post.category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-8 pb-8 border-b border-slate-200">
                <span className="font-medium">{post.createdAt}</span>
                <span>•</span>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link 
                      key={tag} 
                      href={`/blog?kategori=${post.category}`}
                      className="text-blue-900 hover:text-blue-700 font-medium"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div 
                className="prose prose-lg prose-slate max-w-none blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="bg-blue-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Profesyonel Yardım mı Lazım?
                  </h3>
                  <p className="text-slate-700 mb-6">
                    Uzman teknisyenlerimiz 7/24 hizmetinizdedir. Arıza tespiti ücretsizdir.
                  </p>
                  <Button size="lg" className="w-full md:w-auto">
                    <Link href="/iletisim" className="text-white font-bold">
                      Ücretsiz Servis Talebi Oluştur
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </Container>
      </section>
      
      {relatedPosts.length > 0 && (
        <section className="py-16 lg:py-20 bg-slate-50 border-t border-slate-200">
          <Container>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  İlgili Yazılar
                </h3>
                <p className="text-slate-600 mt-1">Aynı kategoriden benzer içerikler</p>
              </div>
              <Link 
                href={`/blog?kategori=${post.category}`}
                className="text-blue-900 font-bold hover:underline"
              >
                Tümünü Gör →
              </Link>
            </div>
            <BlogGrid posts={relatedPosts} columns={3} />
          </Container>
        </section>
      )}
      
      <Disclaimer />
    </>
  );
}
