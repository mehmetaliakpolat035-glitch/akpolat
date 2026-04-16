'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StickyCTAProps {
  className?: string;
}

export function StickyCTA({ className }: StickyCTAProps) {
  return (
    <div className={cn('fixed bottom-4 right-4 z-50 flex flex-col gap-3', className)}>
      <a
        href="tel:4440398"
        className="flex items-center gap-2 bg-blue-900 text-white px-4 py-3 shadow-lg hover:bg-blue-950 transition-all duration-200 group"
      >
        <Phone className="w-5 h-5" />
        <span className="font-semibold text-sm hidden sm:inline">Hemen Ara</span>
      </a>
      
      <a
        href="https://wa.me/905321234567"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-600 text-white px-4 py-3 shadow-lg hover:bg-green-700 transition-all duration-200"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-semibold text-sm hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
