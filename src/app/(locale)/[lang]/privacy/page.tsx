import { t } from '@/i18n';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: `${t(lang, 'privacyTitle')} | PlayFreeGames`,
    description: 'Learn how PlayFreeGames collects, uses, and protects your personal information.',
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const linkCls = 'text-[#a855f7] hover:underline';
  const h2Cls = 'text-xl font-heading font-bold text-[#e2e8f0] mt-8 mb-3';
  const pCls = 'text-[#94a3b8] leading-relaxed';

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-heading font-[900] mb-2" style={{ background: 'linear-gradient(135deg, #a855f7, #06b6d4)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t(lang, 'privacyTitle')}</h1>
      <p className="text-[#94a3b8] text-sm mb-8">Last updated: May 10, 2026</p>

      <section className="mb-6">
        <h2 className={h2Cls}>1. Introduction</h2>
        <p className={pCls}>PlayFreeGames ("we", "our", or "us") operates game.dungeonpath.com (the "Site"). We respect your privacy and are committed to protecting your personal data in compliance with applicable privacy laws including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Site.</p>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>2. Information We Collect</h2>
        <h3 className="text-lg font-semibold text-[#e2e8f0] mt-4 mb-2">2.1 Information You Provide</h3>
        <p className={pCls}>We do not require registration or account creation to use our games. We may collect information you voluntarily provide, such as when you contact us via email.</p>
        <h3 className="text-lg font-semibold text-[#e2e8f0] mt-4 mb-2">2.2 Automatically Collected Information</h3>
        <p className={pCls}>When you visit our Site, certain information is collected automatically, including: IP address (used for language detection), browser type and version, operating system, referring URLs, pages viewed, and the date/time of visits. This data is collected through server logs and cookies.</p>
        <h3 className="text-lg font-semibold text-[#e2e8f0] mt-4 mb-2">2.3 Local Storage</h3>
        <p className={pCls}>We use browser local storage to remember your language preference, favorite games, and cookie consent choice. This data is stored only on your device and is never transmitted to our servers.</p>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>3. Cookies and Tracking</h2>
        <p className={pCls}>We use cookies and similar technologies for the following purposes:</p>
        <ul className={`list-disc ps-6 mt-2 ${pCls}`}>
          <li><strong className="text-[#e2e8f0]">Essential cookies:</strong> Remember your preferences (language, cookie consent).</li>
          <li><strong className="text-[#e2e8f0]">Advertising cookies:</strong> Google AdSense uses cookies to serve personalized ads. You can opt out at <a href="https://www.google.com/settings/ads" className={linkCls} target="_blank" rel="noopener noreferrer">Google Ads Settings</a> or <a href="https://www.aboutads.info/choices/" className={linkCls} target="_blank" rel="noopener noreferrer">aboutads.info/choices</a>.</li>
          <li><strong className="text-[#e2e8f0]">Analytics cookies:</strong> We may use Google Analytics to understand Site usage and improve user experience.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>4. Third-Party Services</h2>
        <p className={pCls}>We use the following third-party services that may collect information:</p>
        <ul className={`list-disc ps-6 mt-2 ${pCls}`}>
          <li><strong className="text-[#e2e8f0]">Google AdSense:</strong> Displays advertisements. <a href="https://policies.google.com/privacy" className={linkCls} target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
          <li><strong className="text-[#e2e8f0]">GameDistribution:</strong> Provides external games. <a href="https://www.gamedistribution.com/privacy" className={linkCls} target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
          <li><strong className="text-[#e2e8f0]">ipapi.co:</strong> Used for geolocation-based language detection. <a href="https://ipapi.co/privacy/" className={linkCls} target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
          <li><strong className="text-[#e2e8f0]">Vercel:</strong> Hosting provider. <a href="https://vercel.com/legal/privacy-policy" className={linkCls} target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>5. Data Sharing and Disclosure</h2>
        <p className={pCls}>We do not sell, trade, or rent your personal information. We may share information with service providers who assist in operating our Site, as required by law, or to protect our rights.</p>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>6. Children&apos;s Privacy</h2>
        <p className={pCls}>Our Site is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we learn we have collected personal information from a child under 13, we will delete it promptly. Parents who believe we have inadvertently collected such information should contact us at <a href="mailto:jzerov@live.com" className={linkCls}>jzerov@live.com</a>.</p>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>7. Your Rights (GDPR/CCPA)</h2>
        <p className={pCls}>Depending on your location, you may have the right to: access your personal data, correct inaccurate data, request deletion of your data, object to processing, restrict processing, and data portability. To exercise these rights, contact us at <a href="mailto:jzerov@live.com" className={linkCls}>jzerov@live.com</a>.</p>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>8. Data Retention</h2>
        <p className={pCls}>We retain automatically collected information for up to 14 months. Local storage data persists until you clear your browser data. Contact emails are retained as long as needed to respond to your inquiry.</p>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>9. Security</h2>
        <p className={pCls}>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our Site uses HTTPS encryption for all data in transit.</p>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>10. Changes to This Policy</h2>
        <p className={pCls}>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.</p>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>11. Contact</h2>
        <p className={pCls}>For questions about this Privacy Policy, please contact us at:</p>
        <p className={`${pCls} mt-2`}><strong className="text-[#e2e8f0]">Email:</strong> <a href="mailto:jzerov@live.com" className={linkCls}>jzerov@live.com</a></p>
        <p className={`${pCls} mt-1`}><strong className="text-[#e2e8f0]">Website:</strong> <a href="https://game.dungeonpath.com" className={linkCls}>game.dungeonpath.com</a></p>
      </section>
    </div>
  );
}
