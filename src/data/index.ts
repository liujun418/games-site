import type { Game } from '@/types/game';
import { selfDevelopedGames } from './games';
import { externalGames } from './external-games';

export { selfDevelopedGames as selfGames } from './games';
export { externalGames } from './external-games';

export function getAllGames(): Game[] {
  return [...selfDevelopedGames, ...externalGames];
}

export function getFeaturedGames(): Game[] {
  return selfDevelopedGames.filter(g => g.featured);
}

export function getGamesByCategory(category: string): Game[] {
  return selfDevelopedGames.filter(g => g.category === category);
}

export function getGameBySlug(slug: string): Game | undefined {
  return selfDevelopedGames.find(g => g.slug === slug);
}

export function getCategories(): string[] {
  const games = selfDevelopedGames;
  const cats = [...new Set(games.map(g => g.category))];
  return cats.sort();
}
