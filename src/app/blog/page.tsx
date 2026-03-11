import { Metadata } from 'next';
import Link from 'next/link';
import { Container, Card, CardContent } from '@/components/ui';
import { Hero, BlogGrid, Breadcrumb, Disclaimer } from '@/components/sections';
import { Pagination } from '@/components/ui/Pagination';
import { blogPosts, blogCategories } from '@/data/blogs';
import { BookOpen, Filter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | Teknik Servis Yazıları ve Arıza Rehberleri',
  description: 'Beyaz eşya arıza rehberleri, çamaşır makinesi, bulaşık makinesi ve buzdolabı sorunlarına çözümler. Uzman teknik servis tavsiyeleri ve bakım ipuçları.',
  alternates: {
    canonical: 'https://turkiyeteknikservis.com/blog'
  }
};

interface Props {
  searchParams: Promise<{ sayfa?: string; kategori?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const params = await searchParams;
  const currentPage = parseInt(params.sayfa || '1', 10);
  const selectedCategory = params.kategori;
  
  const postsPerPage = 12;
  
  // Filtreleme
  let filteredPosts = blogPosts;
  let categoryName = null;
  
  if (selectedCategory) {
    filteredPosts = blogPosts.filter(post => post.category === selectedCategory);
    const category = blogCategories.find(c => c.slug === selectedCategory);
    categoryName = category?.name;
  }
  
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);
  
  const breadcrumbItems = [
    { label: 'Blog' },
    ...(categoryName ? [{ label: categoryName }] : []),
  ];

  return (
    <>
      <Container className="mt-4">
        <Breadcrumb items={breadcrumbItems} />
      </Container>
      
      <Hero 
        title={categoryName || "Teknik Servis Blog"}
        subtitle={categoryName 
          ? `${categoryName} kategorisindeki ${totalPosts} blog yazısı`
          : `Tüm blog yazılarımız - Toplam ${totalPosts} yazı`
        }
      />
      
      {/* Kategoriler Filtre */}
      <section className="py-8 bg-slate-50 border-b border-slate-200 sticky top-20 z-40">
        <Container>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-slate-600" />
              <span className="font-bold text-slate-900">Filtre:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Link 
                href="/blog#yazilar"
                className={`px-4 py-2 font-medium rounded-lg text-sm transition-colors ${
                  !selectedCategory
                    ? 'bg-blue-900 text-white'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-blue-900'
                }`}
              >
                Tümü ({blogPosts.length})
              </Link>
              
              {blogCategories.map((category) => {
                const count = blogPosts.filter(p => p.category === category.slug).length;
                return (
                  <Link 
                    key={category.id}
                    href={`/blog?kategori=${category.slug}#yazilar`}
                    className={`px-4 py-2 font-medium rounded-lg text-sm transition-colors ${
                      selectedCategory === category.slug
                        ? 'bg-blue-900 text-white'
                        : 'bg-white border border-slate-200 text-slate-700 hover:border-blue-900'
                    }`}
                  >
                    {category.name} ({count})
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
      
      {/* Blog Yazıları */}
      <section id="yazilar" className="py-20 lg:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden min-h-[600px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10">
          {paginatedPosts.length > 0 ? (
            <>
              <BlogGrid posts={paginatedPosts} columns={3} />
              
              {totalPages > 1 && (
                <Pagination 
                  currentPage={currentPage}
                  totalPages={totalPages}
                  baseUrl={selectedCategory ? `/blog?kategori=${selectedCategory}` : '/blog'}
                />
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-slate-600 text-lg mb-6">Bu kategoride henüz blog yazısı bulunmamaktadır.</p>
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 bg-blue-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-800 transition-all"
              >
                Tüm Yazıları Gör
              </Link>
            </div>
          )}
        </Container>
      </section>
      
      <Disclaimer />
    </>
  );
}
