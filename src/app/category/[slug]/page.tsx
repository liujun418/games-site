import { notFound } from 'next/navigation';
import { getGamesByCategory, getCategories } from '@/data';
import { GameGrid } from '@/components/GameGrid';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return getCategories().map(cat => ({ slug: cat }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const name = slug.charAt(0).toUpperCase() + slug.slice(1);
  return {
    title: `Best Free ${name} Games - Play Online | PlayFreeGames`,
    description: `Play the best free ${name.toLowerCase()} games online. No downloads required.`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const games = getGamesByCategory(slug);
  if (games.length === 0) notFound();

  const name = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-2">{name} Games</h1>
      <p className="text-gray-400 mb-6">Play the best free {name.toLowerCase()} games online.</p>
      <GameGrid games={games} />
    </>
  );
}
