import Link from 'next/link';
import { t, type SupportedLocale } from '@/i18n';

interface FooterProps {
  lang: SupportedLocale;
}

export function Footer({ lang }: FooterProps) {
  return (
    <footer className="border-t border-[#333] mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm">
            <Link href={`/${lang}/`} className="text-white hover:text-[#a78bfa] transition font-heading font-bold">
              Games
            </Link>
            <span className="text-[#9b9c9d]">&copy; {new Date().getFullYear()} {t(lang, 'siteName')}. {t(lang, 'footer.rights')}</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link href={`/${lang}/privacy`} className="text-[#9b9c9d] hover:text-white transition">{t(lang, 'footer.privacy')}</Link>
            <Link href={`/${lang}/terms`} className="text-[#9b9c9d] hover:text-white transition">{t(lang, 'footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
