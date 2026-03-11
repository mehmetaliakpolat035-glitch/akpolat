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

      try {
        // Try to get city from IP
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.city) {
          const cityName = data.city.toLowerCase();
          // Find matching Turkish city
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
      } catch (error) {
        console.log('Could not detect city');
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
