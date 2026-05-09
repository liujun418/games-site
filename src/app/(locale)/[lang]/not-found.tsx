'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { t } from '@/i18n';
import { selfGames } from '@/data';
import { getLocaleGame } from '@/i18n';
import { GameGrid } from '@/components/GameGrid';

export default function NotFound() {
  const params = useParams();
  const lang = (params?.lang as string) || 'en';
  const featured = selfGames.slice(0, 4).map(g => getLocaleGame(lang, g));

  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-6xl font-heading font-bold text-[#7c3aed] neon-title">404</h1>
      <h2 className="text-2xl font-semibold text-white mt-4">{t(lang, 'notFoundTitle')}</h2>
      <p className="text-[#9b9c9d] mt-2">{t(lang, 'notFoundDesc')}</p>
      <Link href={`/${lang}/`} className="mt-6 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold px-6 py-3 rounded-lg transition shadow-[0_0_12px_rgba(124,58,237,0.4)]">
        {t(lang, 'backHome')}
      </Link>

      {featured.length > 0 && (
        <div className="w-full mt-12">
          <h3 className="text-xl font-heading font-bold text-white mb-4 text-start neon-subtle">{t(lang, 'featured')}</h3>
          <GameGrid games={featured} lang={lang} />
        </div>
      )}
    </div>
  );
}
