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
      <h1 className="text-6xl font-heading font-[900]" style={{ background: 'linear-gradient(135deg, #a855f7, #06b6d4)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>404</h1>
      <h2 className="text-2xl font-semibold text-[#e2e8f0] mt-4">{t(lang, 'notFoundTitle')}</h2>
      <p className="text-[#94a3b8] mt-2">{t(lang, 'notFoundDesc')}</p>
      <Link href={`/${lang}/`} className="mt-6 bg-[linear-gradient(135deg,#a855f7,#06b6d4)] hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg transition shadow-[0_4px_20px_rgba(139,92,246,0.15)]">
        {t(lang, 'backHome')}
      </Link>

      {featured.length > 0 && (
        <div className="w-full mt-12">
          <h3 className="text-xl font-heading font-bold mb-4 text-start" style={{ background: 'linear-gradient(135deg, #a855f7, #06b6d4)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t(lang, 'featured')}</h3>
          <GameGrid games={featured} lang={lang} />
        </div>
      )}
    </div>
  );
}
