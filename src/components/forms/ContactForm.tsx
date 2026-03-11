'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Container, Card, CardContent, Button } from '@/components/ui';
import { cities, services } from '@/data';

interface FormData {
  name: string;
  phone: string;
  city: string;
  service: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    city: '',
    service: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStatus('success');
    setFormData({ name: '', phone: '', city: '', service: '', message: '' });
    
    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="py-16 bg-slate-50">
      <Container>
        <div className="max-w-2xl mx-auto">
          <Card variant="elevated">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                Servis Talebi Oluştur
              </h2>
              
              {status === 'success' && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-emerald-700">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Talebiniz başarıyla gönderildi. En kısa sürede size ulaşacağız.</span>
                </div>
              )}
              
              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 flex items-center gap-3 text-red-700">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Bir hata oluştu. Lütfen tekrar deneyin.</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-slate-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-colors"
                    placeholder="Adınızı ve soyadınızı girin"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-slate-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-colors"
                    placeholder="0555 123 45 67"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Şehir *
                    </label>
                    <select
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-slate-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-colors"
                    >
                      <option value="">Şehir seçin</option>
                      {cities.map(city => (
                        <option key={city.id} value={city.slug}>{city.name}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Hizmet Türü *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-slate-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-colors"
                    >
                      <option value="">Hizmet türü seçin</option>
                      {services.map(service => (
                        <option key={service.id} value={service.slug}>{service.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Açıklama
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2.5 border border-slate-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-colors resize-none"
                    placeholder="Cihazınızdaki arızayı veya talep ettiğiniz hizmeti açıklayın"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Gönder
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
