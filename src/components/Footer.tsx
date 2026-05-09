import Link from 'next/link';
import { t, type SupportedLocale } from '@/i18n';

interface FooterProps {
  lang: SupportedLocale;
}

export function Footer({ lang }: FooterProps) {
  return (
    <footer className="mt-auto border-t border-[rgba(139,92,246,0.15)]" style={{ position: 'relative' }}>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm">
            <Link href={`/${lang}/`} className="text-white hover:text-[#a855f7] transition font-heading font-[900]">
              Games
            </Link>
            <span className="text-[#94a3b8]">&copy; {new Date().getFullYear()} {t(lang, 'siteName')}. {t(lang, 'footer.rights')}</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link href={`/${lang}/privacy`} className="text-[#94a3b8] hover:text-[#a855f7] transition">{t(lang, 'footer.privacy')}</Link>
            <Link href={`/${lang}/terms`} className="text-[#94a3b8] hover:text-[#a855f7] transition">{t(lang, 'footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
