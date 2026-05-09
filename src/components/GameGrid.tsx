import type { Game } from '@/types/game';
import { GameCard } from './GameCard';

interface GameGridProps {
  games: Game[];
  title?: string;
  lang: string;
}

export function GameGrid({ games, title, lang }: GameGridProps) {
  if (games.length === 0) return null;

  return (
    <section className="mb-10">
      {title && <h2 className="text-xl font-heading font-bold mb-4" style={{ background: 'linear-gradient(135deg, #a855f7, #06b6d4)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{title}</h2>}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {games.map(game => (
          <GameCard key={game.id} game={game} lang={lang} />
        ))}
      </div>
    </section>
  );
}
