'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Search, Heart } from 'lucide-react';
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
    { href: `/${lang}/all-games`, label: t(lang, 'nav.allGames') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1d1e20] border-b border-[#333]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href={`/${lang}/`} className="flex items-center gap-2 text-white hover:text-[#a78bfa] transition">
            <span className="text-lg font-heading font-bold tracking-wide neon-subtle">Games</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5">
            {categoryLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#9b9c9d] hover:text-white transition text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Link href={`/${lang}/favorites`} className="p-2 text-[#9b9c9d] hover:text-white transition">
              <Heart className="w-5 h-5" />
            </Link>
            <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 text-[#9b9c9d] hover:text-white transition">
              <Search className="w-5 h-5" />
            </button>

            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="px-2 py-1 text-xs text-[#9b9c9d] hover:text-white border border-[#333] rounded transition font-medium"
              >
                {LOCALES.find(l => l.code === lang)?.label}
              </button>
              {langOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                  <div className="absolute end-0 top-full mt-1 bg-[#2e2e33] rounded-lg shadow-xl border border-[#333] z-20 overflow-hidden">
                    {LOCALES.map(loc => (
                      <button
                        key={loc.code}
                        onClick={() => { switchLang(loc.code); setLangOpen(false); }}
                        className={`block w-full text-start px-4 py-2 text-sm hover:bg-[#3a3a40] transition ${loc.code === lang ? 'text-[#a78bfa]' : 'text-white'}`}
                      >
                        {loc.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-[#9b9c9d] hover:text-white transition">
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
              <Link key={link.href} href={link.href} className="text-[#9b9c9d] hover:text-white transition text-sm">{link.label}</Link>
            ))}
            <Link href={`/${lang}/favorites`} className="text-[#9b9c9d] hover:text-white transition text-sm">{t(lang, 'favorites')}</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
