'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useCityDetection } from '@/hooks/useCityDetection';

type CityContextType = {
  city: { name: string; slug: string } | null;
  loading: boolean;
  setManualCity: (name: string, slug: string) => void;
};

const CityContext = createContext<CityContextType>({
  city: null,
  loading: true,
  setManualCity: () => {},
});

export function useCity() {
  return useContext(CityContext);
}

export function CityProvider({ children }: { children: ReactNode }) {
  const { city, loading, setManualCity } = useCityDetection();

  return (
    <CityContext.Provider value={{ city, loading, setManualCity }}>
      {children}
    </CityContext.Provider>
  );
}
