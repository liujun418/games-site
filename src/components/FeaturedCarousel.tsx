'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import type { Game } from '@/types/game';
import { t } from '@/i18n';

interface FeaturedCarouselProps {
  games: Game[];
  lang: string;
}

export function FeaturedCarousel({ games, lang }: FeaturedCarouselProps) {
  const [index, setIndex] = useState(0);
  const featured = games.filter(g => g.featured).slice(0, 5);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % featured.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featured.length]);

  if (featured.length === 0) return null;

  const current = featured[index];

  return (
    <div className="relative rounded-xl overflow-hidden mb-10 bg-[#111128] border border-[rgba(139,92,246,0.15)]">
      <div className="relative aspect-[16/6] md:aspect-[21/6]">
        <Image src={current.thumbnail} alt={current.title} fill className="object-cover" priority unoptimized />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1a]/90 via-[#0a0a1a]/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="px-8 md:px-12 max-w-lg">
            <span className="bg-[#a855f7] text-white text-xs font-bold px-3 py-1 rounded-full">{t(lang, 'featured')}</span>
            <h2 className="text-white text-2xl md:text-4xl font-heading font-[900] mt-3" style={{ background: 'linear-gradient(135deg, #a855f7, #06b6d4)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{current.title}</h2>
            <p className="text-[#94a3b8] text-sm mt-2 line-clamp-2">{current.description}</p>
            <Link href={`/${lang}/game/${current.slug}`} className="inline-flex items-center gap-2 bg-[linear-gradient(135deg,#a855f7,#06b6d4)] hover:opacity-90 text-white font-semibold px-5 py-2.5 rounded-lg mt-4 transition shadow-[0_4px_20px_rgba(139,92,246,0.15)]">
              <Play className="w-4 h-4" /> {t(lang, 'playNow')}
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 flex gap-2">
        {featured.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition ${i === index ? 'bg-[#a855f7] shadow-[0_0_6px_rgba(168,85,247,0.6)]' : 'bg-white/40 hover:bg-white/60'}`}
          />
        ))}
      </div>
      <button onClick={() => setIndex((index - 1 + featured.length) % featured.length)} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={() => setIndex((index + 1) % featured.length)} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
