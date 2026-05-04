import Link from 'next/link';
import Image from 'next/image';
import type { Game } from '@/types/game';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/game/${game.slug}`} className="group block rounded-xl overflow-hidden bg-gray-800 hover:bg-gray-750 transition transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/10">
      <div className="relative aspect-video bg-gray-700">
        <Image
          src={game.thumbnail}
          alt={game.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        {game.source === 'self' && (
          <span className="absolute top-2 left-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-0.5 rounded">
            NEW
          </span>
        )}
      </div>
      <div className="p-3">
        <h3 className="text-white font-semibold text-sm truncate">{game.title}</h3>
        <p className="text-gray-400 text-xs mt-1 line-clamp-2">{game.description}</p>
        <div className="flex gap-1 mt-2 flex-wrap">
          {game.tags.slice(0, 3).map(tag => (
            <span key={tag} className="bg-gray-700 text-gray-300 text-xs px-2 py-0.5 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
