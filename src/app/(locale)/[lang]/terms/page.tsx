import { t } from '@/i18n';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: t(lang, 'termsTitle') };
}

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return (
    <div className="max-w-3xl mx-auto prose prose-invert">
      <h1 className="text-3xl font-bold text-white mb-6">{t(lang, 'termsTitle')}</h1>
      <p className="text-gray-400 text-sm">Last updated: May 4, 2026</p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">1. Acceptance of Terms</h2>
      <p className="text-gray-300">By accessing and using PlayFreeGames, you accept and agree to be bound by these Terms of Service.</p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">2. Use of Website</h2>
      <p className="text-gray-300">You may use this website for personal, non-commercial use only. Games are provided &quot;as is&quot; without warranties.</p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">3. Intellectual Property</h2>
      <p className="text-gray-300">Self-developed games are our intellectual property. External games are provided by GameDistribution and are subject to their terms.</p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">4. Advertising</h2>
      <p className="text-gray-300">This website displays advertisements. By using the website, you consent to viewing ads.</p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">5. Limitation of Liability</h2>
      <p className="text-gray-300">We are not liable for any damages arising from your use of the website or games.</p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">6. Contact</h2>
      <p className="text-gray-300">Contact us at jzerov@live.com</p>
    </div>
  );
}
