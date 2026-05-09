import { detectLocale, type SupportedLocale } from '@/i18n';

export async function detectIPLocale(): Promise<SupportedLocale> {
  try {
    const res = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
    if (!res.ok) return 'en';
    const data = await res.json();
    return detectLocale(data.country_code);
  } catch {
    return 'en';
  }
}
