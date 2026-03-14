'use client';

import Link from 'next/link';
import { Phone, ArrowRight, Wrench, Clock, MapPin } from 'lucide-react';

export function CTABand() {
  return (
    <section className="py-8 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-white/20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-600/30 px-3 py-1 rounded-full mb-3">
                <Wrench className="w-4 h-4 text-blue-300" />
                <span className="text-blue-200 text-sm font-medium">7/24 Hizmet</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Acil Servis Mi Lazım?
              </h2>
              <p className="text-blue-100 text-lg">
                Hemen arayın, en kısa sürede yerinde olalım
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 text-blue-200">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Hızlı Servis</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Yerinde Tamir</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="tel:+908503047814"
                className="flex items-center gap-3 bg-white text-blue-900 font-bold px-6 py-3 rounded hover:bg-blue-50 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span className="text-lg">0850 304 7814</span>
              </a>
              <Link 
                href="/iletisim"
                className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-500 transition-colors shadow-lg"
              >
                Servis Talebi
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
