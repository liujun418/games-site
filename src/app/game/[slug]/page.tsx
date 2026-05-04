import { notFound } from 'next/navigation';
import { getGameBySlug, getAllGames } from '@/data';
import { GamePlayer } from '@/components/GamePlayer';
import { GameGrid } from '@/components/GameGrid';
import { AdBanner } from '@/components/AdBanner';
import { gameJsonLd } from '@/utils/seo';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return getAllGames().map(game => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return { title: 'Game Not Found' };

  return {
    title: `${game.title} - Play Free Online | PlayFreeGames`,
    description: game.description,
    openGraph: {
      title: `${game.title} - Play Free Online`,
      description: game.description,
      type: 'website',
    },
  };
}

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  const related = getAllGames()
    .filter(g => g.slug !== slug && (g.category === game.category || g.tags.some(t => game.tags.includes(t))))
    .slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameJsonLd(game)) }}
      />

      <div className="mb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white">{game.title}</h1>
        <p className="text-gray-400 mt-1 text-sm">{game.description}</p>
        <div className="flex gap-2 mt-3 flex-wrap">
          {game.tags.map(tag => (
            <span key={tag} className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <GamePlayer game={game} />
          <AdBanner slot="5566778899" format="horizontal" />
        </div>
        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-xl p-4 sticky top-20">
            <AdBanner slot="9988776655" format="rectangle" />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-10">
          <GameGrid games={related} title="More Like This" />
        </div>
      )}
    </>
  );
}
