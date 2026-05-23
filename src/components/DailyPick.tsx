import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import type { Game } from '@/types/game';
import { t } from '@/i18n';

interface DailyPickProps {
  game: Game;
  lang: string;
}

export function DailyPick({ game, lang }: DailyPickProps) {
  return (
    <section className="mb-10 overflow-hidden rounded-lg border border-[rgba(139,92,246,0.18)] bg-[#111128]">
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.9fr]">
        <Link href={`/${lang}/game/${game.slug}`} className="relative aspect-[16/9] md:aspect-auto min-h-[190px] bg-[#1a1a3e]">
          <Image src={game.thumbnail} alt={game.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 420px" unoptimized />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/80 via-transparent to-transparent md:bg-gradient-to-r" />
        </Link>
        <div className="p-5 md:p-6 flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#06b6d4]/30 bg-[#06b6d4]/10 px-3 py-1 text-xs font-semibold text-[#67e8f9]">
            <Sparkles className="h-3.5 w-3.5" />
            {t(lang, 'todaysPick')}
          </div>
          <h2 className="mt-3 text-2xl md:text-3xl font-heading font-[900] text-[#e2e8f0]">{game.title}</h2>
          <p className="mt-2 max-w-2xl text-sm text-[#94a3b8]">{t(lang, 'dailyPickDesc')} {game.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {game.tags.slice(0, 4).map(tag => (
              <span key={tag} className="rounded-full bg-[rgba(139,92,246,0.15)] px-3 py-1 text-xs text-[#c084fc]">{tag}</span>
            ))}
          </div>
          <Link href={`/${lang}/game/${game.slug}`} className="mt-5 inline-flex w-fit items-center gap-2 rounded-md bg-[linear-gradient(135deg,#a855f7,#06b6d4)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90">
            {t(lang, 'playNow')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
