'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { selfGames } from '@/data';
import { getLocaleGame, t } from '@/i18n';
import { GameGrid } from '@/components/GameGrid';
import { Heart } from 'lucide-react';

export default function FavoritesPage() {
  const params = useParams();
  const lang = (params?.lang as string) || 'en';
  const [favorites] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  });

  const favoriteGames = selfGames
    .filter(game => favorites.includes(game.id))
    .map(game => getLocaleGame(lang, game));

  return (
    <>
      <h1 className="text-2xl font-heading font-bold mb-2 flex items-center gap-2" style={{ background: 'linear-gradient(135deg, #a855f7, #06b6d4)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        <Heart className="w-6 h-6 fill-red-500 text-red-500" />
        {t(lang, 'favorites')}
      </h1>
      {favoriteGames.length > 0 ? (
        <GameGrid games={favoriteGames} lang={lang} />
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Heart className="w-16 h-16 text-[#333] mb-4" />
          <p className="text-[#94a3b8]">{t(lang, 'noFavorites')}</p>
        </div>
      )}
    </>
  );
}
