import { selfGames, getFeaturedGames, getCategories } from '@/data';
import { getLocaleGame, getLocalizedCategory, t } from '@/i18n';
import type { SupportedLocale } from '@/i18n/translations';
import { FeaturedCarousel } from '@/components/FeaturedCarousel';
import { GameGrid } from '@/components/GameGrid';
import { AdBanner } from '@/components/AdBanner';
import { AdInFeed } from '@/components/AdInFeed';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: t(lang, 'siteName'),
    description: t(lang, 'seoDesc'),
    openGraph: {
      title: `${t(lang, 'siteName')} - ${t(lang, 'tagline')}`,
      description: t(lang, 'seoDesc'),
      type: 'website',
    },
  };
}

function localizeGames(lang: string) {
  return selfGames.map(game => getLocaleGame(lang, game));
}

export default async function HomePage({ params, searchParams }: { params: Promise<{ lang: string }>; searchParams: Promise<{ q?: string }> }) {
  const { lang } = await params;
  const locale = lang as SupportedLocale;
  const allGames = localizeGames(lang);
  const featured = getFeaturedGames().map(game => getLocaleGame(lang, game));
  const categories = getCategories();
  const params2 = await searchParams;

  return (
    <>
      <FeaturedCarousel games={featured} lang={lang} />

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
