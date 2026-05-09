import { selfGames, getCategories } from '@/data';
import type { MetadataRoute } from 'next';

const LOCALES = ['en', 'es', 'ar'] as const;
const baseUrl = 'https://game.dungeonpath.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const games = selfGames;
  const categories = getCategories();

  const pages: MetadataRoute.Sitemap = [];

  // Add all locale pages
  for (const locale of LOCALES) {
    pages.push({
      url: `${baseUrl}/${locale}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    });

    pages.push({
      url: `${baseUrl}/${locale}/all-games`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    });

    pages.push({
      url: `${baseUrl}/${locale}/favorites`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    });

    pages.push({
      url: `${baseUrl}/${locale}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    });

    pages.push({
      url: `${baseUrl}/${locale}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    });

    pages.push({
      url: `${baseUrl}/${locale}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    });

    // Category pages per locale
    for (const cat of categories) {
      pages.push({
        url: `${baseUrl}/${locale}/category/${cat}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.7,
      });
    }

    // Game pages per locale
    for (const game of games) {
      pages.push({
        url: `${baseUrl}/${locale}/game/${game.slug}`,
        lastModified: new Date(game.createdAt),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }
  }

  return pages;
}
