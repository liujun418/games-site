import { HelpCircle, Lightbulb, ListChecks, MousePointer2 } from 'lucide-react';
import type { GameGuide as GameGuideData } from '@/data/game-guides';
import { t } from '@/i18n';

interface GameGuideProps {
  guide: GameGuideData;
  lang: string;
  title: string;
}

export function GameGuide({ guide, lang, title }: GameGuideProps) {
  const panels = [
    { key: 'howToPlay', icon: ListChecks, items: guide.howToPlay },
    { key: 'controls', icon: MousePointer2, items: guide.controls },
    { key: 'tips', icon: Lightbulb, items: guide.tips },
  ];

  return (
    <section className="mt-8 rounded-lg border border-[rgba(139,92,246,0.15)] bg-[#111128] p-5 md:p-6">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase text-[#67e8f9]">{t(lang, 'gameGuideTitle')}</p>
        <h2 className="mt-1 text-xl font-heading font-[900] text-[#e2e8f0]">{title}</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {panels.map(panel => {
          const Icon = panel.icon;
          return (
            <div key={panel.key} className="rounded-lg border border-[rgba(139,92,246,0.12)] bg-[#0a0a1a]/45 p-4">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-[#e2e8f0]">
                <Icon className="h-4 w-4 text-[#a855f7]" />
                {t(lang, panel.key)}
              </h3>
              <ul className="space-y-2 text-sm text-[#94a3b8]">
                {panel.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-lg border border-[rgba(139,92,246,0.12)] bg-[#0a0a1a]/45 p-4">
        <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-[#e2e8f0]">
          <HelpCircle className="h-4 w-4 text-[#a855f7]" />
          {t(lang, 'faq')}
        </h3>
        <div className="grid gap-3 md:grid-cols-2">
          {guide.faq.map(item => (
            <div key={item.question}>
              <p className="text-sm font-semibold text-[#e2e8f0]">{item.question}</p>
              <p className="mt-1 text-sm text-[#94a3b8]">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
