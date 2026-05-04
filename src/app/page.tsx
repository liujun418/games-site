import { getAllGames, getFeaturedGames, getCategories } from '@/data';
import { FeaturedCarousel } from '@/components/FeaturedCarousel';
import { GameGrid } from '@/components/GameGrid';
import { AdBanner } from '@/components/AdBanner';
import { AdInFeed } from '@/components/AdInFeed';

export default async function Home({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const allGames = getAllGames();
  const featured = getFeaturedGames();
  const categories = getCategories();
  const params = await searchParams;

  return (
    <>
      <FeaturedCarousel games={featured} />

      {params?.q && (() => {
        const results = allGames.filter(g =>
          g.title.toLowerCase().includes(params.q!.toLowerCase()) ||
          g.tags.some(t => t.toLowerCase().includes(params.q!.toLowerCase()))
        );
        return (
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white mb-4">
              Search results for &quot;{params.q}&quot;
            </h1>
            {results.length > 0 ? (
              <GameGrid games={results} />
            ) : (
              <p className="text-gray-400">No games found. Try a different search.</p>
            )}
          </div>
        );
      })()}

      <AdBanner slot="1234567890" format="horizontal" />

      {categories.map(cat => {
        const catGames = allGames.filter(g => g.category === cat);
        return (
          <div key={cat}>
            <GameGrid games={catGames} title={`${cat.charAt(0).toUpperCase() + cat.slice(1)} Games`} />
            <AdInFeed slot="0987654321" />
          </div>
        );
      })}

      <AdBanner slot="1122334455" format="horizontal" />
    </>
  );
}
