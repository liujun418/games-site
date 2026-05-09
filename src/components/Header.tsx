'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Gamepad2, Menu, X, Search, Heart } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { t, type SupportedLocale } from '@/i18n';

const LOCALES: { code: SupportedLocale; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'ar', label: 'عربي' },
];

interface HeaderProps {
  lang: SupportedLocale;
}

export function Header({ lang }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();

  const switchLang = (newLang: SupportedLocale) => {
    const currentPath = pathname?.replace(/^\/(en|es|ar)/, '') || '/';
    window.location.href = `/${newLang}${currentPath}`;
  };

  const categoryLinks = [
    { href: `/${lang}/category/arcade`, label: t(lang, 'nav.arcade') },
    { href: `/${lang}/category/puzzle`, label: t(lang, 'nav.puzzle') },
    { href: `/${lang}/category/action`, label: t(lang, 'nav.action') },
    { href: `/${lang}/category/card`, label: t(lang, 'nav.card') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${lang}/`} className="flex items-center gap-2 text-white hover:text-yellow-400 transition">
            <Gamepad2 className="w-8 h-8 text-yellow-400" />
            <span className="text-xl font-bold hidden sm:block">{t(lang, 'siteName')}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {categoryLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-gray-300 hover:text-white transition text-sm">{link.label}</Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href={`/${lang}/favorites`} className="p-2 text-gray-300 hover:text-white transition">
              <Heart className="w-5 h-5" />
            </Link>
            <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 text-gray-300 hover:text-white transition">
              <Search className="w-5 h-5" />
            </button>

            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="px-2 py-1 text-sm text-gray-300 hover:text-white border border-gray-700 rounded transition"
              >
                {LOCALES.find(l => l.code === lang)?.label}
              </button>
              {langOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                  <div className="absolute end-0 top-full mt-1 bg-gray-800 rounded-lg shadow-xl border border-gray-700 z-20 overflow-hidden">
                    {LOCALES.map(loc => (
                      <button
                        key={loc.code}
                        onClick={() => { switchLang(loc.code); setLangOpen(false); }}
                        className={`block w-full text-start px-4 py-2 text-sm hover:bg-gray-700 transition ${loc.code === lang ? 'text-yellow-400' : 'text-white'}`}
                      >
                        {loc.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-gray-300 hover:text-white transition">
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="pb-4">
            <SearchBar lang={lang} />
          </div>
        )}

        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            {categoryLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-gray-300 hover:text-white transition text-sm">{link.label}</Link>
            ))}
            <Link href={`/${lang}/all-games`} className="text-gray-300 hover:text-white transition text-sm">{t(lang, 'nav.allGames')}</Link>
            <Link href={`/${lang}/favorites`} className="text-gray-300 hover:text-white transition text-sm">{t(lang, 'favorites')}</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
