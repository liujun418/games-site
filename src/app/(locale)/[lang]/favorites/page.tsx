'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { selfGames } from '@/data';
import { getLocaleGame, t } from '@/i18n';
import { GameGrid } from '@/components/GameGrid';
import { Heart } from 'lucide-react';

export default function FavoritesPage() {
  const params = useParams();
  const lang = (params?.lang as string) || 'en';
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(stored);
  }, []);

  const favoriteGames = selfGames
    .filter(game => favorites.includes(game.id))
    .map(game => getLocaleGame(lang, game));

  return (
    <>
      <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
        <Heart className="w-6 h-6 fill-red-500 text-red-500" />
        {t(lang, 'favorites')}
      </h1>
      {favoriteGames.length > 0 ? (
        <GameGrid games={favoriteGames} lang={lang} />
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Heart className="w-16 h-16 text-gray-700 mb-4" />
          <p className="text-gray-400">{t(lang, 'noFavorites')}</p>
        </div>
      )}
    </>
  );
}
