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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://game.dungeonpath.com';

  return {
    title: `${catLabel} ${t(lang, 'categoryGames')} - ${t(lang, 'playOnline')} | ${t(lang, 'siteName')}`,
    description: `${t(lang, 'bestFree')} ${catLabel.toLowerCase()} ${t(lang, 'categoryGames')} ${t(lang, 'playOnline').toLowerCase()}.`,
    keywords: [slug, catLabel, 'free games', 'online games', 'browser games'].join(', '),
    alternates: {
      canonical: `${baseUrl}/${lang}/category/${slug}`,
      languages: {
        en: `${baseUrl}/en/category/${slug}`,
        es: `${baseUrl}/es/category/${slug}`,
        ar: `${baseUrl}/ar/category/${slug}`,
      },
    },
    openGraph: {
      title: `${catLabel} ${t(lang, 'categoryGames')} - ${t(lang, 'playOnline')}`,
      description: `${t(lang, 'bestFree')} ${catLabel.toLowerCase()} ${t(lang, 'categoryGames')} ${t(lang, 'playOnline').toLowerCase()}.`,
      type: 'website',
      locale: lang === 'en' ? 'en_US' : lang === 'es' ? 'es_ES' : 'ar_SA',
      siteName: 'PlayFreeGames',
      url: `${baseUrl}/${lang}/category/${slug}`,
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string; lang: string }> }) {
  const { slug, lang } = await params;
  const games = getGamesByCategory(slug);
  if (games.length === 0) notFound();

  const localizedGames = games.map(g => getLocaleGame(lang, g));
  const catLabel = getLocalizedCategory(lang, slug);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://game.dungeonpath.com';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateItemListJsonLd(localizedGames, `${baseUrl}/${lang}/category/${slug}`, `${catLabel} ${t(lang, 'categoryGames')}`)) }}
      />
      <h1 className="text-3xl font-heading font-[900] mb-2" style={{ background: 'linear-gradient(135deg, #a855f7, #06b6d4)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{catLabel} {t(lang, 'categoryGames')}</h1>
      <p className="text-[#94a3b8] mb-6">{t(lang, 'bestFree')} {catLabel.toLowerCase()} {t(lang, 'categoryGames').toLowerCase()} {t(lang, 'playOnline').toLowerCase()}.</p>
      <GameGrid games={localizedGames} lang={lang} />
    </>
  );
}
