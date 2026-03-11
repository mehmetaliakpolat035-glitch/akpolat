import Link from 'next/link';
import { ArrowRight, AlertTriangle, Tag, Terminal, HelpCircle, Wrench, Puzzle, Sparkles, BookOpen, MapPin, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui';
import { BlogPost } from '@/data/blogs';

const categoryConfig: Record<string, { icon: React.ComponentType<{ className?: string }>; color: string; bgColor: string; label: string }> = {
  'genel-ariza': { icon: AlertTriangle, color: 'text-red-600', bgColor: 'bg-red-50', label: 'Arıza' },
  'marka-ariza': { icon: Tag, color: 'text-blue-600', bgColor: 'bg-blue-50', label: 'Marka' },
  'ariza-kodlari': { icon: Terminal, color: 'text-purple-600', bgColor: 'bg-purple-50', label: 'Kod' },
  'sss': { icon: HelpCircle, color: 'text-green-600', bgColor: 'bg-green-50', label: 'SSS' },
  'kendi-yap': { icon: Wrench, color: 'text-orange-600', bgColor: 'bg-orange-50', label: 'Kendin Yap' },
  'parca': { icon: Puzzle, color: 'text-indigo-600', bgColor: 'bg-indigo-50', label: 'Parça' },
  'bakim': { icon: Sparkles, color: 'text-teal-600', bgColor: 'bg-teal-50', label: 'Bakım' },
  'rehber': { icon: BookOpen, color: 'text-cyan-600', bgColor: 'bg-cyan-50', label: 'Rehber' },
  'yerel': { icon: MapPin, color: 'text-pink-600', bgColor: 'bg-pink-50', label: 'Yerel' },
  'genel': { icon: Info, color: 'text-slate-600', bgColor: 'bg-slate-50', label: 'Genel' },
};

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const config = categoryConfig[post.category] || categoryConfig['genel'];
  const Icon = config.icon;

  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="border border-slate-200 hover:border-blue-900 hover:shadow-2xl transition-all duration-300 h-full group overflow-hidden">
        {/* Üst Renk Şeridi */}
        <div className={`h-1 w-full ${config.bgColor.replace('50', '500')}`} />
        
        <CardContent className="p-5">
          {/* Kategori Badge */}
          <div className="flex items-center justify-between mb-3">
            <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${config.bgColor} ${config.color}`}>
              <Icon className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold uppercase tracking-wide">
                {config.label}
              </span>
            </div>
            <span className="text-xs text-slate-400">
              {post.createdAt}
            </span>
          </div>
          
          {/* Başlık */}
          <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-900 transition-colors">
            {post.title}
          </h3>
          
          {/* Özet */}
          <p className="text-sm text-slate-700 mb-4 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
          
          {/* Etiketler */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="text-[11px] px-2.5 py-1 bg-blue-50 text-blue-800 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Devamını Oku */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-900 group-hover:gap-2 transition-all">
              Devamını Oku 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

interface BlogGridProps {
  posts: BlogPost[];
  columns?: 2 | 3 | 4;
}

export function BlogGrid({ posts, columns = 3 }: BlogGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
