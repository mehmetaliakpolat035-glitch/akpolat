'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StickyCTAProps {
  className?: string;
}

export function StickyCTA({ className }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Sayfa scroll edildiğinde butonları göster
    const handleScroll = () => {
      // 100px scroll edildikten sonra göster
      setIsVisible(window.scrollY > 100);
    };

    // İlk yüklemede kontrol et
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-50 flex flex-col gap-3',
        'transition-all duration-500 ease-out',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none',
        className
      )}
    >
      {/* Arama Butonu */}
      <a
        href="tel:+904440398"
        className={cn(
          'flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white',
          'px-4 py-3 rounded-full shadow-xl hover:shadow-2xl',
          'transform hover:scale-105 transition-all duration-300',
          'hover:-translate-y-1 active:scale-95'
        )}
        aria-label="Telefon ile ara"
      >
        <Phone className="w-5 h-5" />
        <span className="font-semibold text-sm hidden sm:inline">Hemen Ara</span>
      </a>

      {/* WhatsApp Butonu */}
      <a
        href="https://wa.me/905558947176"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white',
          'px-4 py-3 rounded-full shadow-xl hover:shadow-2xl',
          'transform hover:scale-105 transition-all duration-300',
          'hover:-translate-y-1 active:scale-95'
        )}
        aria-label="WhatsApp ile mesaj gönder"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-semibold text-sm hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
