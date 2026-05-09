import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { t, type SupportedLocale } from "@/i18n";

const inter = Inter({ subsets: ["latin"] });

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
    keywords: ["free games", "online games", "browser games", "HTML5 games", "puzzle games", "arcade games"],
    robots: "index, follow",
    alternates: {
      languages: {
        en: '/en/',
        es: '/es/',
        ar: '/ar/',
      },
    },
    openGraph: {
      title: `${t(lang, 'siteName')} - ${t(lang, 'tagline')}`,
      description: t(lang, 'seoDesc'),
      type: "website",
      locale: localeMap[lang] || 'en_US',
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
      </head>
      <body className={`${fontClass} bg-gray-950 text-white min-h-screen flex flex-col`}>
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
