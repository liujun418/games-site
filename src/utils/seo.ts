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
    url: `https://game.dungeonpath.com/game/${game.slug}`,
    genre: 'Browser Game',
    gamePlatform: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    playMode: 'SinglePlayer',
    applicationCategory: 'Game',
  };
}

export function generateBreadcrumbsJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateItemListJsonLd(games: { title: string; description: string; slug: string; thumbnail: string }[], url: string, name?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: name || 'Free Online Games',
    url,
    itemListElement: games.map((game, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'VideoGame',
        name: game.title,
        description: game.description,
        url: `https://game.dungeonpath.com/game/${game.slug}`,
        thumbnailUrl: game.thumbnail,
      },
    })),
  };
}
