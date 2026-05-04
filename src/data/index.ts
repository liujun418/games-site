import type { Game } from '@/types/game';
import { selfDevelopedGames } from './games';
import { externalGames } from './external-games';

export { selfDevelopedGames as selfGames } from './games';
export { externalGames } from './external-games';

export function getAllGames(): Game[] {
  return [...selfDevelopedGames, ...externalGames];
}

export function getFeaturedGames(): Game[] {
  return getAllGames().filter(g => g.featured);
}

export function getGamesByCategory(category: string): Game[] {
  return getAllGames().filter(g => g.category === category);
}

export function getGameBySlug(slug: string): Game | undefined {
  return getAllGames().find(g => g.slug === slug);
}

export function getCategories(): string[] {
  const games = getAllGames();
  const cats = [...new Set(games.map(g => g.category))];
  return cats.sort();
}
