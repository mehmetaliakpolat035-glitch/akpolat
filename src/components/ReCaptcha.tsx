'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export function ReCaptcha() {
  useEffect(() => {
    // reCAPTCHA v3 doğrulama
    const executeRecaptcha = () => {
      if (typeof window !== 'undefined' && window.grecaptcha) {
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute('SENIN_SITE_KEY', { action: 'homepage' })
            .then(() => {
              console.log('reCAPTCHA token alındı');
            })
            .catch((error: Error) => {
              console.error('reCAPTCHA hatası:', error);
            });
        });
      }
    };

    // Sayfa yüklendikten 3 saniye sonra çalıştır (SEO ve performans için)
    const timer = setTimeout(executeRecaptcha, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Script
      src="https://www.google.com/recaptcha/api.js?render=SENIN_SITE_KEY"
      strategy="lazyOnload"
    />
  );
}

// TypeScript için window tipi
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}
