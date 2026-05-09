import Link from 'next/link';
import { Gamepad2 } from 'lucide-react';
import { t, type SupportedLocale } from '@/i18n';

interface FooterProps {
  lang: SupportedLocale;
}

export function Footer({ lang }: FooterProps) {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href={`/${lang}/`} className="flex items-center gap-2 text-white mb-3">
              <Gamepad2 className="w-6 h-6 text-yellow-400" />
              <span className="font-bold">{t(lang, 'siteName')}</span>
            </Link>
            <p className="text-gray-400 text-sm">{t(lang, 'footer.desc')}</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">{t(lang, 'footer.categories')}</h3>
            <div className="flex flex-col gap-2">
              <Link href={`/${lang}/category/arcade`} className="text-gray-400 hover:text-white transition text-sm">{t(lang, 'nav.arcade')}</Link>
              <Link href={`/${lang}/category/puzzle`} className="text-gray-400 hover:text-white transition text-sm">{t(lang, 'nav.puzzle')}</Link>
              <Link href={`/${lang}/category/action`} className="text-gray-400 hover:text-white transition text-sm">{t(lang, 'nav.action')}</Link>
              <Link href={`/${lang}/category/card`} className="text-gray-400 hover:text-white transition text-sm">{t(lang, 'nav.card')}</Link>
              <Link href={`/${lang}/all-games`} className="text-gray-400 hover:text-white transition text-sm">{t(lang, 'nav.allGames')}</Link>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">{t(lang, 'footer.legal')}</h3>
            <div className="flex flex-col gap-2">
              <Link href={`/${lang}/privacy`} className="text-gray-400 hover:text-white transition text-sm">{t(lang, 'footer.privacy')}</Link>
              <Link href={`/${lang}/terms`} className="text-gray-400 hover:text-white transition text-sm">{t(lang, 'footer.terms')}</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} {t(lang, 'siteName')}. {t(lang, 'footer.rights')}
        </div>
      </div>
    </footer>
  );
}
