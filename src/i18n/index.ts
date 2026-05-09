import { translations, localizedGames, localizedCategories, type SupportedLocale, DEFAULT_LOCALE, type TranslationKey, SUPPORTED_LOCALES } from './translations';
import type { Game } from '@/types/game';

export { translations, localizedGames, localizedCategories, type SupportedLocale, type TranslationKey, SUPPORTED_LOCALES, DEFAULT_LOCALE };

export function t(lang: string, key: string): string {
  const locale = (lang as SupportedLocale) in translations ? lang as SupportedLocale : DEFAULT_LOCALE;
  const keys = key.split('.');
  const value = (translations[locale] as Record<string, unknown>)[keys[0]];
  if (typeof value === 'object' && value !== null && keys[1]) {
    return ((value as Record<string, string>)[keys[1]] ?? key) as string;
  }
  return (value ?? key) as string;
}

export function getLocaleGame(lang: string, game: Game): Game {
  const locale = (lang as SupportedLocale) in localizedGames ? lang as SupportedLocale : DEFAULT_LOCALE;
  const localized = localizedGames[locale]?.[game.slug];
  if (!localized) return game;
  return { ...game, title: localized.title, description: localized.description, category: localized.category, tags: localized.tags };
}

export function getLocalizedCategory(lang: string, categorySlug: string): string {
  const locale = (lang as SupportedLocale) in localizedCategories ? lang as SupportedLocale : DEFAULT_LOCALE;
  return localizedCategories[locale]?.[categorySlug] ?? categorySlug;
}

export function detectLocale(countryCode: string | null): SupportedLocale {
  if (!countryCode) return DEFAULT_LOCALE;
  const arabicCountries = ['SA', 'AE', 'EG', 'IQ', 'JO', 'LB', 'SY', 'YE', 'OM', 'QA', 'BH', 'KW', 'LY', 'TN', 'MA', 'DZ', 'SD', 'PS'];
  const spanishCountries = ['MX', 'AR', 'CO', 'PE', 'VE', 'CL', 'EC', 'GT', 'CU', 'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'GQ'];
  if (arabicCountries.includes(countryCode.toUpperCase())) return 'ar';
  if (spanishCountries.includes(countryCode.toUpperCase())) return 'es';
  return DEFAULT_LOCALE;
}

export function getDir(lang: string): 'ltr' | 'rtl' {
  return lang === 'ar' ? 'rtl' : 'ltr';
}
