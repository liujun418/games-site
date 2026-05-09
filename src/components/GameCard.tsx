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
    <div className="group dp-card relative">
      <Link href={`/${lang}/game/${game.slug}`} className="relative aspect-video bg-[#3a3a40] block rounded-t-[0.75rem] overflow-hidden">
        <Image
          src={game.thumbnail}
          alt={game.title}
          fill
          className="object-cover transition-transform duration-200 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 33vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d1e20]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {game.source === 'self' && (
          <span className="absolute top-2 start-2 bg-[#7c3aed]/80 text-white text-xs font-bold px-2 py-0.5 rounded backdrop-blur-sm">
            {t(lang, 'newBadge')}
          </span>
        )}
      </Link>
      <div className="absolute top-2 end-2 z-10">
        <FavoriteButton game={game} />
      </div>
      <div className="p-3">
        <Link href={`/${lang}/game/${game.slug}`}>
          <h3 className="text-white font-semibold text-sm truncate group-hover:text-[#a78bfa] transition">{game.title}</h3>
        </Link>
        <p className="text-[#9b9c9d] text-xs mt-1 line-clamp-2">{game.description}</p>
        <div className="flex gap-1 mt-2 flex-wrap">
          {game.tags.slice(0, 3).map(tag => (
            <span key={tag} className="bg-[#7c3aed]/15 text-[#a78bfa] text-xs px-2 py-0.5 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
