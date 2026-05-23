'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
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
  const router = useRouter();

  const switchLang = (newLang: SupportedLocale) => {
    const currentPath = pathname?.replace(/^\/(en|es|ar)/, '') || '/';
    router.push(`/${newLang}${currentPath}`);
  };

  const categoryLinks = [
    { href: `/${lang}/`, label: t(lang, 'home') },
    { href: `/${lang}/category/arcade`, label: t(lang, 'nav.arcade') },
    { href: `/${lang}/category/puzzle`, label: t(lang, 'nav.puzzle') },
    { href: `/${lang}/category/action`, label: t(lang, 'nav.action') },
    { href: `/${lang}/category/card`, label: t(lang, 'nav.card') },
    { href: `/${lang}/all-games`, label: t(lang, 'nav.allGames') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[rgba(10,10,26,0.95)] backdrop-blur-[10px] border-b-2" style={{ borderColor: 'transparent', borderImage: 'linear-gradient(135deg, #a855f7, #06b6d4)', borderImageSlice: 1 }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-[60px]">
          {/* Logo */}
          <Link href={`/${lang}/`} className="flex items-center gap-2 text-[#a855f7] hover:text-[#c084fc] transition">
            <span className="text-[22px] font-heading font-[900] tracking-wider" style={{ textShadow: '0 0 10px rgba(168,85,247,0.8), 0 0 20px rgba(168,85,247,0.5), 0 0 40px rgba(168,85,247,0.3)' }}>Games</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5">
            {categoryLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#94a3b8] hover:text-[#a855f7] transition text-sm font-[500] relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#a855f7] after:to-[#06b6d4] after:mt-[2px] after:transition-[width] after:duration-200 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Link href={`/${lang}/favorites`} className="p-2 text-[#94a3b8] hover:text-[#a855f7] transition">
              <Heart className="w-5 h-5" />
            </Link>
            <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 text-[#94a3b8] hover:text-[#a855f7] transition">
              <Search className="w-5 h-5" />
            </button>

            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="px-2 py-1 text-xs text-[#94a3b8] hover:text-[#a855f7] border border-[rgba(139,92,246,0.15)] rounded transition font-[500]"
              >
                {LOCALES.find(l => l.code === lang)?.label}
              </button>
              {langOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                  <div className="absolute end-0 top-full mt-1 bg-[#111128] rounded-lg shadow-xl border border-[rgba(139,92,246,0.15)] z-20 overflow-hidden">
                    {LOCALES.map(loc => (
                      <button
                        key={loc.code}
                        onClick={() => { switchLang(loc.code); setLangOpen(false); }}
                        className={`block w-full text-start px-4 py-2 text-sm hover:bg-[#1a1a3e] transition ${loc.code === lang ? 'text-[#a855f7]' : 'text-[#e2e8f0]'}`}
                      >
                        {loc.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-[#94a3b8] hover:text-[#a855f7] transition">
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
              <Link key={link.href} href={link.href} className="text-[#94a3b8] hover:text-[#a855f7] transition text-sm">{link.label}</Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
