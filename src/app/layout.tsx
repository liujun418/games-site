import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PlayFreeGames - Free Online Games. No Downloads, Just Play!",
  description: "Play the best free online games directly in your browser. Puzzle, Arcade, Action, Card games and more. No downloads, no registration required.",
  keywords: ["free games", "online games", "browser games", "HTML5 games", "puzzle games", "arcade games"],
  robots: "index, follow",
  openGraph: {
    title: "PlayFreeGames - Free Online Games",
    description: "Play the best free online games directly in your browser.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
      </head>
      <body className={`${inter.className} bg-gray-950 text-white min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
