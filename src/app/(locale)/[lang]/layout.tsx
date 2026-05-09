import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { t, type SupportedLocale } from "@/i18n";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }, { lang: 'ar' }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const localeMap: Record<string, string> = { en: 'en_US', es: 'es_ES', ar: 'ar_SA' };
  return {
    title: {
      default: `${t(lang, 'siteName')} - ${t(lang, 'tagline')}`,
      template: `%s | ${t(lang, 'siteName')}`,
    },
    description: t(lang, 'seoDesc'),
    keywords: ["free games", "online games", "browser games", "HTML5 games", "puzzle games", "arcade games", "play free games", "wordle", "stack tower", "brick breaker"],
    robots: "index, follow",
    alternates: {
      canonical: `https://game.dungeonpath.com/${lang}/`,
      languages: {
        en: 'https://game.dungeonpath.com/en/',
        es: 'https://game.dungeonpath.com/es/',
        ar: 'https://game.dungeonpath.com/ar/',
      },
    },
    openGraph: {
      title: `${t(lang, 'siteName')} - ${t(lang, 'tagline')}`,
      description: t(lang, 'seoDesc'),
      type: "website",
      locale: localeMap[lang] || 'en_US',
      siteName: 'PlayFreeGames',
      url: `https://game.dungeonpath.com/${lang}/`,
      images: [{ url: '/images/og-site.svg', width: 1200, height: 630, alt: 'PlayFreeGames' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t(lang, 'siteName')} - ${t(lang, 'tagline')}`,
      description: t(lang, 'seoDesc'),
      images: ['/images/og-site.svg'],
    },
    other: {
      'application/ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'PlayFreeGames',
        url: `https://game.dungeonpath.com/${lang}/`,
        description: t(lang, 'seoDesc'),
        inLanguage: lang,
        potentialAction: {
          '@type': 'SearchAction',
          target: `https://game.dungeonpath.com/${lang}/?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      }),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const fontClass = lang === 'ar' ? `${inter.className} font-arabic` : inter.className;

  return (
    <html lang={lang} dir={dir}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/og-site.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'PlayFreeGames',
            url: 'https://game.dungeonpath.com',
            logo: 'https://game.dungeonpath.com/images/og-site.svg',
            sameAs: [],
          }) }}
        />
      </head>
      <body className={`${inter.variable} ${orbitron.variable} ${lang === 'ar' ? 'font-arabic' : ''} min-h-screen flex flex-col`}>
        <Header lang={lang as SupportedLocale} />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
          {children}
        </main>
        <Footer lang={lang as SupportedLocale} />
        <CookieConsent />
      </body>
    </html>
  );
}
