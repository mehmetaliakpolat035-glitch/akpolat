'use client';

import { useState, useEffect } from 'react';
import { cities } from '@/data/cities';

type DetectedCity = {
  name: string;
  slug: string;
} | null;

export function useCityDetection() {
  const [city, setCity] = useState<DetectedCity>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detectCity = async () => {
      // Check localStorage first
      const stored = localStorage.getItem('userCity');
      if (stored) {
        const parsed = JSON.parse(stored);
        setCity(parsed);
        setLoading(false);
        return;
      }

      // IP API çağrısını idle time'a ertele
      const fetchCityData = async () => {
        try {
          const response = await fetch('https://ipapi.co/json/');
          const data = await response.json();
          
          if (data.city) {
            const cityName = data.city.toLowerCase();
            const matchedCity = cities.find(c => 
              c.name.toLowerCase().includes(cityName) ||
              cityName.includes(c.name.toLowerCase())
            );

            if (matchedCity) {
              const cityData = { name: matchedCity.name, slug: matchedCity.slug };
              setCity(cityData);
              localStorage.setItem('userCity', JSON.stringify(cityData));
            }
          }
        } catch {
          console.log('Could not detect city');
        }
      };

      // Sayfa yüklendikten sonra idle time'da çalıştır
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        window.requestIdleCallback(() => fetchCityData(), { timeout: 5000 });
      } else {
        setTimeout(fetchCityData, 3000);
      }
      
      setLoading(false);
    };

    detectCity();
  }, []);

  const setManualCity = (cityName: string, citySlug: string) => {
    const cityData = { name: cityName, slug: citySlug };
    setCity(cityData);
    localStorage.setItem('userCity', JSON.stringify(cityData));
  };

  return { city, loading, setManualCity };
}
