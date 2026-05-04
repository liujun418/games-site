import type { Game } from '@/types/game';
import { GameCard } from './GameCard';

interface GameGridProps {
  games: Game[];
  title?: string;
}

export function GameGrid({ games, title }: GameGridProps) {
  if (games.length === 0) return null;

  return (
    <section className="mb-10">
      {title && <h2 className="text-xl font-bold text-white mb-4">{title}</h2>}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}
