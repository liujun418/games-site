'use client';

import { useEffect, useRef } from 'react';
import type { Game } from '@/types/game';

interface GamePlayerProps {
  game: Game;
}

export function GamePlayer({ game }: GamePlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className="relative w-full" style={{ paddingBottom: '75%' }}>
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
