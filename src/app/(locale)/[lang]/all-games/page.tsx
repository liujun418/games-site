import { selfGames, getCategories } from '@/data';
import { getLocaleGame, getLocalizedCategory, t } from '@/i18n';
import { GameGrid } from '@/components/GameGrid';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: `${t(lang, 'nav.allGames')} | ${t(lang, 'siteName')}`,
    description: t(lang, 'seoDesc'),
  };
}

export default async function AllGamesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const allGames = selfGames.map(game => getLocaleGame(lang, game));
  const categories = getCategories();

  return (
    <>
      <h1 className="text-3xl font-heading font-[900] mb-6" style={{ background: 'linear-gradient(135deg, #a855f7, #06b6d4)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t(lang, 'nav.allGames')}</h1>
      {categories.map(cat => {
        const catGames = allGames.filter(g => g.category === cat);
        const catLabel = getLocalizedCategory(lang, cat);
        return (
          <div key={cat}>
            <GameGrid games={catGames} title={`${catLabel} ${t(lang, 'categoryGames')}`} lang={lang} />
          </div>
        );
      })}
    </>
  );
}
