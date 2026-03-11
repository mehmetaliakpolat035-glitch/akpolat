export interface City {
  id: string;
  name: string;
  slug: string;
  plateCode: string;
  population: number;
  priority: 'high' | 'medium' | 'low';
  coordinates: { lat: number; lng: number };
  description: string;
  districts: District[];
}

export interface District {
  id: string;
  name: string;
  slug: string;
  citySlug: string;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  keywords: string[];
  icon: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  category: 'beyaz-esya' | 'kombi' | 'klima';
}

export interface ErrorCode {
  code: string;
  brand: string;
  description: string;
  solution: string;
  serviceType: string;
}

export interface FAQ {
  question: string;
  answer: string;
  service?: string;
}

export interface TrustItem {
  icon: string;
  title: string;
  description: string;
}
