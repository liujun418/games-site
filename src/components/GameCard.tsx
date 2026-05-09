import Link from 'next/link';
import Image from 'next/image';
import type { Game } from '@/types/game';
import { FavoriteButton } from './FavoriteButton';
import { t } from '@/i18n';

interface GameCardProps {
  game: Game;
  lang: string;
}

export function GameCard({ game, lang }: GameCardProps) {
  return (
    <div className="group block rounded-xl overflow-hidden bg-gray-800 hover:bg-gray-750 transition transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/10 relative">
      <Link href={`/${lang}/game/${game.slug}`} className="relative aspect-video bg-gray-700 block">
        <Image
          src={game.thumbnail}
          alt={game.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 33vw"
          unoptimized
        />
        {game.source === 'self' && (
          <span className="absolute top-2 start-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-0.5 rounded">
            {t(lang, 'newBadge')}
          </span>
        )}
      </Link>
      <div className="absolute top-2 end-2 z-10">
        <FavoriteButton game={game} />
      </div>
      <div className="p-3">
        <Link href={`/${lang}/game/${game.slug}`}>
          <h3 className="text-white font-semibold text-sm truncate">{game.title}</h3>
        </Link>
        <p className="text-gray-400 text-xs mt-1 line-clamp-2">{game.description}</p>
        <div className="flex gap-1 mt-2 flex-wrap">
          {game.tags.slice(0, 3).map(tag => (
            <a key={tag} href={`/${lang}/?q=${encodeURIComponent(tag)}`} className="bg-gray-700 text-gray-300 text-xs px-2 py-0.5 rounded-full hover:bg-gray-600 transition">{tag}</a>
          ))}
        </div>
      </div>
    </div>
  );
}
