import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const requiredGames = [
  {
    slug: 'falling-blocks',
    title: 'Falling Blocks',
    gamePath: 'public/games/falling-blocks/index.html',
    thumbnailPath: 'public/images/falling-blocks.svg',
  },
];

const gamesSource = readFileSync(join(root, 'src/data/games.ts'), 'utf8');
const guidesSource = readFileSync(join(root, 'src/data/game-guides.ts'), 'utf8');

const failures = [];

for (const game of requiredGames) {
  if (!gamesSource.includes(`slug: '${game.slug}'`)) {
    failures.push(`${game.slug} is missing from src/data/games.ts`);
  }

  if (!gamesSource.includes(`title: '${game.title}'`)) {
    failures.push(`${game.slug} title is missing from src/data/games.ts`);
  }

  if (!gamesSource.includes(`gameUrl: '/games/${game.slug}/index.html'`)) {
    failures.push(`${game.slug} gameUrl is missing from src/data/games.ts`);
  }

  if (!existsSync(join(root, game.gamePath))) {
    failures.push(`${game.slug} is missing ${game.gamePath}`);
  }

  if (!existsSync(join(root, game.thumbnailPath))) {
    failures.push(`${game.slug} is missing ${game.thumbnailPath}`);
  }

  if (!guidesSource.includes(`'${game.slug}':`)) {
    failures.push(`${game.slug} is missing from src/data/game-guides.ts`);
  }
}

if (failures.length > 0) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Validated ${requiredGames.length} required game integration.`);
