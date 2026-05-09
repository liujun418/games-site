'use client';

import { useRef } from 'react';
import type { Game } from '@/types/game';

interface GamePlayerProps {
  game: Game;
}

// Aspect ratios based on actual game content dimensions
const GAME_ASPECTS: Record<string, string> = {
  'dino-runner': 'aspect-[3/1]',    // 600x200 canvas
  'flappy-bird': 'aspect-[2/3]',    // 400x600 canvas
  'whack-a-mole': 'aspect-[1/1]',   // 3x110px grid + header ≈ square
  '2048': 'aspect-square',          // 4x80px grid ≈ square
  'memory-match': 'aspect-square',  // 4x80px grid ≈ square
  'cat-match': 'aspect-[4/5]',      // 8 cols wide, multi-row
  'tic-tac-toe': 'aspect-square',   // 3x100px grid ≈ square
  'plant-blessing': 'aspect-[4/5]', // complex layout, taller than wide
};

const DEFAULT_ASPECT = 'aspect-[1/1]';

export function GamePlayer({ game }: GamePlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const aspectClass = GAME_ASPECTS[game.slug] || DEFAULT_ASPECT;

  return (
    <div className={`relative w-full ${aspectClass}`}>
      <iframe
        ref={iframeRef}
        src={game.gameUrl}
        className="absolute inset-0 w-full h-full rounded-lg bg-gray-900"
        allow="autoplay; fullscreen; microphone"
        allowFullScreen
        loading="lazy"
        title={game.title}
      />
    </div>
  );
}
