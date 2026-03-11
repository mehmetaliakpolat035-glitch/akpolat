import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'beyaz-esya',
    name: 'Beyaz Eşya Servisi',
    slug: 'beyaz-esya-servisi',
    description: 'Beyaz eşya servis hizmetlerimiz buzdolabı, çamaşır makinesi, bulaşık makinesi, kurutma makinesi ve ankastre cihazları kapsamaktadır. Tüm marka ve modeller için profesyonel teknik destek sunuyoruz.',
    shortDescription: 'Buzdolabı, çamaşır makinesi, bulaşık makinesi ve tüm beyaz eşya markaları için profesyonel servis hizmeti.',
    keywords: ['beyaz eşya servisi', 'buzdolabı servisi', 'çamaşır makinesi servisi', 'bulaşık makinesi servisi', 'ankastre servisi'],
    icon: 'WashingMachine'
  },
  {
    id: 'kombi',
    name: 'Kombi Servisi',
    slug: 'kombi-servisi',
    description: 'Kombi servis hizmetlerimiz kombi arıza tamiri, bakım, montaj ve tesisat işlemlerini kapsamaktadır. Doğalgaz kombi, yoğuşmalı kombi ve elektrikli kombi tüm markalar için hizmet sunuyoruz.',
    shortDescription: 'Tüm kombi markaları için arıza tamiri, bakım ve montaj hizmetleri.',
    keywords: ['kombi servisi', 'kombi arıza', 'kombi bakım', 'doğalgaz kombi servisi', 'yoğuşmalı kombi'],
    icon: 'Flame'
  },
  {
    id: 'klima',
    name: 'Klima Servisi',
    slug: 'klima-servisi',
    description: 'Klima servis hizmetlerimiz klima arıza tamiri, bakım, montaj ve gaz dolumu kapsamaktadır. Split klima, multi split, VRF ve merkezi klima sistemleri için profesyonel destek sunuyoruz.',
    shortDescription: 'Klima arıza, bakım, montaj ve gaz dolumu hizmetleri.',
    keywords: ['klima servisi', 'klima arıza', 'klima bakım', 'klima montaj', 'klima gaz dolumu'],
    icon: 'Snowflake'
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};
