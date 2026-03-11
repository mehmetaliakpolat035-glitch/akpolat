'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui';
import { X, Cookie } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 transition-all duration-300 ease-out ${
        isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                <Cookie className="w-7 h-7 text-blue-900" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Çerez Kullanımı
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-2">
                Sitemizde size en iyi deneyimi sunmak için çerezler kullanıyoruz. 
                Çerezler, site kullanımını analiz etmek ve içeriği kişiselleştirmek için kullanılır. 
                Çerez kullanımını kabul ederek, 
                <a 
                  href="/gizlilik-politikasi" 
                  className="text-blue-900 underline hover:no-underline font-medium"
                >
                  Gizlilik Politikamızı
                </a>
                {' '}kabul etmiş olursunuz.
              </p>
              <p className="text-xs text-slate-500">
                İstediğiniz zaman çerez tercihlerinizi değiştirebilirsiniz.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleDecline}
                className="whitespace-nowrap"
              >
                Reddet
              </Button>
              <Button 
                size="sm"
                onClick={handleAccept}
                className="whitespace-nowrap bg-blue-900 hover:bg-blue-800"
              >
                Kabul Et
              </Button>
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-600 transition-colors md:hidden"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
            <p>
              Kullandığımız çerezler: Gerekli çerezler (site çalışması için), 
              Analitik çerezler (site kullanımı), Fonksiyonel çerezler (tercihleriniz).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Hook to check if user has consented
export function useCookieConsent() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent');
    setConsent(storedConsent);
  }, []);

  return {
    consent,
    hasConsented: consent === 'accepted',
    hasDeclined: consent === 'declined',
  };
}
