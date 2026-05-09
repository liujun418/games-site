import { notFound } from 'next/navigation';
import { getGameBySlug, selfGames, getCategories } from '@/data';
import { getLocaleGame, t } from '@/i18n';
import { GamePlayer } from '@/components/GamePlayer';
import { GameGrid } from '@/components/GameGrid';
import { AdBanner } from '@/components/AdBanner';
import { gameJsonLd, generateBreadcrumbsJsonLd } from '@/utils/seo';
import { ShareButtons } from '@/components/ShareButtons';
import { FavoriteButton } from '@/components/FavoriteButton';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return selfGames.map(game => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; lang: string }> }): Promise<Metadata> {
  const { slug, lang } = await params;
  const game = getGameBySlug(slug);
  if (!game) return { title: 'Game Not Found' };
  const localized = getLocaleGame(lang, game);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://game.dungeonpath.com';
  return {
    title: `${localized.title} - Play Free Online | PlayFreeGames`,
    description: localized.description,
    keywords: [...localized.tags, 'free game', 'online game', 'browser game'].join(', '),
    alternates: {
      canonical: `${baseUrl}/${lang}/game/${slug}`,
      languages: {
        en: `${baseUrl}/en/game/${slug}`,
        es: `${baseUrl}/es/game/${slug}`,
        ar: `${baseUrl}/ar/game/${slug}`,
      },
    },
    openGraph: {
      title: `${localized.title} - Play Free Online`,
      description: localized.description,
      type: 'website',
      locale: lang === 'en' ? 'en_US' : lang === 'es' ? 'es_ES' : 'ar_SA',
      siteName: 'PlayFreeGames',
      url: `${baseUrl}/${lang}/game/${slug}`,
      images: [`${baseUrl}${localized.thumbnail}`],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${localized.title} - Play Free Online`,
      description: localized.description,
      images: [`${baseUrl}${localized.thumbnail}`],
    },
  };
}

export default async function GamePage({ params }: { params: Promise<{ slug: string; lang: string }> }) {
  const { slug, lang } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  const localized = getLocaleGame(lang, game);

  const related = selfGames
    .map(g => getLocaleGame(lang, g))
    .filter(g => g.slug !== slug && (g.category === localized.category || g.tags.some(tag => localized.tags.includes(tag))))
    .slice(0, 6);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://game.dungeonpath.com';
  const gameUrl = `${baseUrl}/${lang}/game/${slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameJsonLd(localized)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbsJsonLd([
          { name: t(lang, 'backHome'), url: `${baseUrl}/${lang}/` },
          { name: localized.title, url: gameUrl },
        ])) }}
      />

      <div className="mb-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl md:text-3xl font-heading font-[900] mb-2" style={{ background: 'linear-gradient(135deg, #a855f7, #06b6d4)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{localized.title}</h1>
            <p className="text-[#94a3b8] mt-1 text-sm">{localized.description}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <FavoriteButton game={game} />
            <ShareButtons title={localized.title} url={gameUrl} />
          </div>
        </div>
        <div className="flex gap-2 mt-3 flex-wrap">
          {localized.tags.map(tag => (
            <span key={tag} className="bg-[rgba(139,92,246,0.15)] text-[#c084fc] text-xs px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <GamePlayer game={game} />
          <AdBanner slot="5566778899" format="horizontal" />
        </div>
        <div className="lg:col-span-1">
          <div className="bg-[#111128] border border-[rgba(139,92,246,0.15)] rounded-xl p-4 sticky top-20">
            <AdBanner slot="9988776655" format="rectangle" />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-10">
          <GameGrid games={related} title={t(lang, 'relatedGames')} lang={lang} />
        </div>
      )}
    </>
  );
}
