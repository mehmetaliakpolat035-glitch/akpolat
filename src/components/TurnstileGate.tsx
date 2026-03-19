'use client';

import { useState, useEffect } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { Shield, Lock } from 'lucide-react';

const SITE_KEY = '0x4AAAAAACtQAtdhhca8c3VU';

export function TurnstileGate({ children }: { children: React.ReactNode }) {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if already verified in this session
    const verified = sessionStorage.getItem('turnstile-verified');
    if (verified === 'true') {
      setIsVerified(true);
    }
    setIsLoading(false);
  }, []);

  const handleVerify = (token: string) => {
    // Verify token with your backend or just accept it for now
    // In production, you should verify the token server-side
    sessionStorage.setItem('turnstile-verified', 'true');
    setIsVerified(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  if (!isVerified) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Shield className="w-8 h-8 text-blue-900" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              Güvenlik Doğrulaması
            </h1>
            <p className="text-slate-600">
              Sitemize erişmek için lütfen aşağıdaki doğrulamayı tamamlayın
            </p>
          </div>

          {/* Verification Box */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
              <Lock className="w-5 h-5 text-blue-900" />
              <span className="text-slate-700 font-medium">
                İnsan olduğunuzu doğrulayın
              </span>
            </div>

            <div className="flex justify-center">
              <Turnstile
                siteKey={SITE_KEY}
                onSuccess={handleVerify}
                options={{
                  theme: 'light',
                  size: 'normal',
                  language: 'tr',
                }}
              />
            </div>

            <div className="mt-6 text-center text-xs text-slate-500">
              <p>Bu doğrulama, otomatik bot erişimlerini önlemek için kullanılmaktadır.</p>
              <p className="mt-2">Güvenliğiniz için teşekkür ederiz.</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} En Yakın Servis Hizmetleri
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Protected by Cloudflare Turnstile
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}