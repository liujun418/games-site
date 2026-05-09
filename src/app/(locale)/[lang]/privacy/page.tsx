import { t } from '@/i18n';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: t(lang, 'privacyTitle') };
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return (
    <div className="max-w-3xl mx-auto prose prose-invert">
      <h1 className="text-3xl font-bold text-white mb-6">{t(lang, 'privacyTitle')}</h1>
      <p className="text-gray-400 text-sm">Last updated: May 4, 2026</p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">1. Introduction</h2>
      <p className="text-gray-300">PlayFreeGames (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting your personal data.</p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">2. Information We Collect</h2>
      <p className="text-gray-300">We do not collect personal data directly. Our third-party advertising partners (Google AdSense, GameDistribution) may collect information such as your IP address, browser type, and browsing behavior through cookies and similar technologies.</p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">3. Advertising</h2>
      <p className="text-gray-300">We use Google AdSense to display ads. Google may use cookies to serve ads based on your prior visits. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-yellow-400 underline">Google Ads Settings</a>.</p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">4. Children&apos;s Privacy</h2>
      <p className="text-gray-300">Our website is not directed to children under 13. We do not knowingly collect personal information from children under 13.</p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">5. Cookies</h2>
      <p className="text-gray-300">We use cookies to improve your experience and for advertising purposes. You can control cookies through your browser settings.</p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">6. Contact</h2>
      <p className="text-gray-300">For questions about this policy, contact us at jzerov@live.com</p>
    </div>
  );
}
