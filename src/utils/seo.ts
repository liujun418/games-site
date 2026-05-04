export function generatePageMeta(title: string, description: string): { title: string; description: string; openGraph: { title: string; description: string; type: string } } {
  return {
    title: `${title} | PlayFreeGames`,
    description,
    openGraph: {
      title: `${title} | PlayFreeGames`,
      description,
      type: 'website',
    },
  };
}

export function gameJsonLd(game: { title: string; description: string; thumbnail: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: game.title,
    description: game.description,
    thumbnailUrl: game.thumbnail,
    url: `https://playfreegames.fun/game/${game.slug}`,
    genre: 'Browser Game',
    gamePlatform: 'Web Browser',
  };
}
