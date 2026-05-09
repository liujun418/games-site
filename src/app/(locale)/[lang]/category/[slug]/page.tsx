import { notFound } from 'next/navigation';
import { getGamesByCategory, getCategories } from '@/data';
import { getLocaleGame, getLocalizedCategory, t } from '@/i18n';
import { GameGrid } from '@/components/GameGrid';
import { generateItemListJsonLd } from '@/utils/seo';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return getCategories().map(cat => ({ slug: cat }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; lang: string }> }): Promise<Metadata> {
  const { slug, lang } = await params;
  const games = getGamesByCategory(slug);
  if (games.length === 0) return { title: 'Category Not Found' };
  const catLabel = getLocalizedCategory(lang, slug);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://game.toolboxonline.club';

  return {
    title: `${catLabel} ${t(lang, 'categoryGames')} - ${t(lang, 'playOnline')} | ${t(lang, 'siteName')}`,
    description: `${t(lang, 'bestFree')} ${catLabel.toLowerCase()} ${t(lang, 'categoryGames')} ${t(lang, 'playOnline').toLowerCase()}.`,
    alternates: {
      canonical: `${baseUrl}/${lang}/category/${slug}`,
      languages: {
        en: `${baseUrl}/en/category/${slug}`,
        es: `${baseUrl}/es/category/${slug}`,
        ar: `${baseUrl}/ar/category/${slug}`,
      },
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string; lang: string }> }) {
  const { slug, lang } = await params;
  const games = getGamesByCategory(slug);
  if (games.length === 0) notFound();

  const localizedGames = games.map(g => getLocaleGame(lang, g));
  const catLabel = getLocalizedCategory(lang, slug);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://game.toolboxonline.club';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateItemListJsonLd(localizedGames, `${baseUrl}/${lang}/category/${slug}`, `${catLabel} ${t(lang, 'categoryGames')}`)) }}
      />
      <h1 className="text-3xl font-bold text-white mb-2">{catLabel} {t(lang, 'categoryGames')}</h1>
      <p className="text-gray-400 mb-6">{t(lang, 'bestFree')} {catLabel.toLowerCase()} {t(lang, 'categoryGames').toLowerCase()} {t(lang, 'playOnline').toLowerCase()}.</p>
      <GameGrid games={localizedGames} lang={lang} />
    </>
  );
}
