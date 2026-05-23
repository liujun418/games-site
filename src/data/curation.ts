import type { Game } from '@/types/game';

export interface GameShelfDefinition {
  key: string;
  titleKey: string;
  tags: string[];
  limit: number;
}

export const homeShelves: GameShelfDefinition[] = [
  { key: 'quick-play', titleKey: 'quickPlay', tags: ['arcade', 'classic', 'reflex', 'endless', 'tap'], limit: 6 },
  { key: 'brain-games', titleKey: 'brainGames', tags: ['puzzle', 'brain', 'word', 'logic', 'numbers'], limit: 6 },
  { key: 'one-minute', titleKey: 'oneMinuteGames', tags: ['arcade', 'speed', 'reflex', 'casual'], limit: 6 },
  { key: 'relaxing', titleKey: 'relaxingGames', tags: ['relaxing', 'sorting', 'color', 'casual'], limit: 6 },
];

export function getGamesForShelf(games: Game[], shelf: GameShelfDefinition): Game[] {
  const tagSet = new Set(shelf.tags);
  return games
    .filter(game => game.tags.some(tag => tagSet.has(tag.toLowerCase())) || tagSet.has(game.category))
    .slice(0, shelf.limit);
}

export function getRecentlyAddedGames(games: Game[], limit = 6): Game[] {
  return [...games]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
}

export function getDailyGame(games: Game[], date = new Date()): Game | undefined {
  if (games.length === 0) return undefined;
  const start = Date.UTC(date.getUTCFullYear(), 0, 0);
  const today = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  const dayOfYear = Math.floor((today - start) / 86400000);
  return games[dayOfYear % games.length];
}
