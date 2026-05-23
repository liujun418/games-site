import { selfGames, getFeaturedGames, getCategories } from '@/data';
import { getLocaleGame, getLocalizedCategory, t } from '@/i18n';
import { FeaturedCarousel } from '@/components/FeaturedCarousel';
import { GameGrid } from '@/components/GameGrid';
import { DailyPick } from '@/components/DailyPick';
import { AdBanner } from '@/components/AdBanner';
import { AdInFeed } from '@/components/AdInFeed';
import { getDailyGame, getGamesForShelf, getRecentlyAddedGames, homeShelves } from '@/data/curation';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: `${t(lang, 'siteName')} - ${t(lang, 'tagline')}`,
    description: t(lang, 'seoDesc'),
    keywords: ['free games', 'online games', 'browser games', 'HTML5 games', 'puzzle games', 'arcade games', 'wordle', 'stack tower'],
    openGraph: {
      title: `${t(lang, 'siteName')} - ${t(lang, 'tagline')}`,
      description: t(lang, 'seoDesc'),
      type: 'website',
      locale: lang === 'en' ? 'en_US' : lang === 'es' ? 'es_ES' : 'ar_SA',
      siteName: 'PlayFreeGames',
    },
  };
}

function localizeGames(lang: string) {
  return selfGames.map(game => getLocaleGame(lang, game));
}

export default async function HomePage({ params, searchParams }: { params: Promise<{ lang: string }>; searchParams: Promise<{ q?: string }> }) {
  const { lang } = await params;
  const allGames = localizeGames(lang);
  const featured = getFeaturedGames().map(game => getLocaleGame(lang, game));
  const categories = getCategories();
  const dailyGame = getDailyGame(allGames);
  const recentGames = getRecentlyAddedGames(allGames);
  const params2 = await searchParams;

  return (
    <>
      <FeaturedCarousel games={featured} lang={lang} />

      {dailyGame && <DailyPick game={dailyGame} lang={lang} />}

      {params2?.q && (() => {
        const results = allGames.filter(g =>
          g.title.toLowerCase().includes(params2.q!.toLowerCase()) ||
          g.tags.some(tag => tag.toLowerCase().includes(params2.q!.toLowerCase()))
        );
        return (
          <div className="mb-6">
            <h1 className="text-2xl font-heading font-[900] mb-4" style={{ background: 'linear-gradient(135deg, #a855f7, #06b6d4)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {t(lang, 'searchResults')} &quot;{params2.q}&quot;
            </h1>
            {results.length > 0 ? (
              <GameGrid games={results} lang={lang} />
            ) : (
              <p className="text-[#9b9c9d]">{t(lang, 'noResults')}</p>
            )}
          </div>
        );
      })()}

      <AdBanner slot="1234567890" format="horizontal" />

      <GameGrid games={recentGames} title={t(lang, 'recentlyAdded')} lang={lang} />

      <section className="mb-10">
        <h2 className="text-xl font-heading font-bold mb-4" style={{ background: 'linear-gradient(135deg, #a855f7, #06b6d4)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t(lang, 'curatedForYou')}</h2>
        <div className="grid gap-2">
          {homeShelves.map(shelf => {
            const shelfGames = getGamesForShelf(allGames, shelf).slice(0, 4);
            if (shelfGames.length === 0) return null;
            return (
              <div key={shelf.key}>
                <GameGrid games={shelfGames} title={t(lang, shelf.titleKey)} lang={lang} />
              </div>
            );
          })}
        </div>
      </section>

      {categories.map(cat => {
        const catGames = allGames.filter(g => g.category === cat);
        const catLabel = getLocalizedCategory(lang, cat);
        return (
          <div key={cat}>
            <GameGrid games={catGames} title={`${catLabel} ${t(lang, 'categoryGames')}`} lang={lang} />
            <AdInFeed slot="0987654321" />
          </div>
        );
      })}

      <AdBanner slot="1122334455" format="horizontal" />
    </>
  );
}
