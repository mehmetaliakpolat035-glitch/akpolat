interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  const pages = [];
  
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (
      (i === currentPage - 2 && currentPage > 3) ||
      (i === currentPage + 2 && currentPage < totalPages - 2)
    ) {
      pages.push('...');
    }
  }

  return (
    <nav className="flex justify-center items-center gap-2 mt-12">
      {currentPage > 1 && (
        <a
          href={`${baseUrl}?sayfa=${currentPage - 1}`}
          className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg hover:border-blue-900 hover:text-blue-900 transition-colors"
        >
          ← Önceki
        </a>
      )}
      
      {pages.map((page, index) => (
        <div key={index}>
          {page === '...' ? (
            <span className="px-2 text-slate-400">...·</span>
          ) : (
            <a
              href={`${baseUrl}?sayfa=${page}`}
              className={`px-4 py-2 font-medium rounded-lg transition-colors ${
                page === currentPage
                  ? 'bg-blue-900 text-white'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-blue-900 hover:text-blue-900'
              }`}
            >
              {page}
            </a>
          )}
        </div>
      ))}
      
      {currentPage < totalPages && (
        <a
          href={`${baseUrl}?sayfa=${currentPage + 1}`}
          className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg hover:border-blue-900 hover:text-blue-900 transition-colors"
        >
          Sonraki →
        </a>
      )}
    </nav>
  );
}
