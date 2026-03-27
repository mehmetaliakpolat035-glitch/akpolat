'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Container } from '@/components/ui';
import { Hero, BlogGrid, Breadcrumb, Disclaimer } from '@/components/sections';
import { Pagination } from '@/components/ui/Pagination';
import { blogPosts, blogCategories } from '@/data/blogs';
import { BookOpen, Filter } from 'lucide-react';

export default function BlogContent() {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('sayfa') || '1', 10);
  const selectedCategory = searchParams.get('kategori');
  
  const postsPerPage = 12;
  
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
    { label: 'Blog', href: '/blog' },
    ...(categoryName ? [{ label: categoryName }] : []),
  ];

  const title = categoryName || "Teknik Servis Blog";
  const description = categoryName 
    ? `${categoryName} kategorisindeki ${totalPosts} blog yazısı`
    : `Tüm blog yazılarımız - Toplam ${totalPosts} yazı`;

  return (
    <div>
      <Container className="mt-4">
        <Breadcrumb items={breadcrumbItems} />
      </Container>
      
      <Hero 
        title={title}
        subtitle={description}
      />
      
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

      <section id="yazilar" className="py-12 md:py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
              <BookOpen className="w-8 h-8 text-blue-900" />
            </div>
            
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              {categoryName || 'Tüm Yazılar'}
            </h2>
            
            <p className="text-slate-600 max-w-2xl mx-auto">
              {selectedCategory
                ? `${categoryName} kategorisindeki tüm teknik servis yazılarımız.`
                : 'Beyaz eşya, kombi ve klima ile ilgili tüm blog yazılarımız.'
              }
            </p>
          </div>

          <BlogGrid posts={paginatedPosts} />

          {totalPages > 1 && (
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              baseUrl="/blog"
            />
          )}
        </Container>
      </section>

      <Disclaimer />
    </div>
  );
}
