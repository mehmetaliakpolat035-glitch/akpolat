export const SITE_URL = 'https://enyakinservishizmetleri.com.tr';
export const SITE_NAME = 'En Yakın Servis Hizmetleri';
export const SITE_EMAIL = 'info@enyakinservishizmetleri.com';

export function toAbsoluteUrl(path = ''): string {
  return path ? `${SITE_URL}${path}` : SITE_URL;
}
