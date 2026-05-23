import { t } from '@/i18n';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: `${t(lang, 'termsTitle')} | PlayFreeGames`,
    description: 'Terms of Service for using PlayFreeGames online gaming platform.',
  };
}

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const linkCls = 'text-[#a855f7] hover:underline';
  const h2Cls = 'text-xl font-heading font-bold text-[#e2e8f0] mt-8 mb-3';
  const pCls = 'text-[#94a3b8] leading-relaxed';

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-heading font-[900] mb-2" style={{ background: 'linear-gradient(135deg, #a855f7, #06b6d4)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t(lang, 'termsTitle')}</h1>
      <p className="text-[#94a3b8] text-sm mb-8">Last updated: May 10, 2026</p>

      <section className="mb-6">
        <h2 className={h2Cls}>1. Acceptance of Terms</h2>
        <p className={pCls}>By accessing and using game.dungeonpath.com (the &quot;Site&quot;), you accept and agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the Site. We may modify these Terms at any time, and your continued use constitutes acceptance of changes.</p>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>2. Description of Service</h2>
        <p className={pCls}>PlayFreeGames provides a platform for playing free browser-based HTML5 games. The service includes self-developed games and third-party games provided by GameDistribution. No account registration or download is required. The service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind.</p>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>3. Eligibility</h2>
        <p className={pCls}>You must be at least 13 years old to use this Site. If you are under 18, you should review these Terms with a parent or guardian. By using the Site, you represent that you meet this age requirement.</p>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>4. Acceptable Use</h2>
        <p className={pCls}>You agree to use the Site only for lawful purposes. You must not:</p>
        <ul className={`list-disc ps-6 mt-2 ${pCls}`}>
          <li>Attempt to gain unauthorized access to our systems or data</li>
          <li>Use automated means to access the Site (bots, scrapers, etc.)</li>
          <li>Reverse engineer, decompile, or disassemble any games or code</li>
          <li>Distribute malware or harmful code</li>
          <li>Use the Site in any way that violates applicable laws</li>
          <li>Attempt to bypass or disable any advertising features</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>5. Intellectual Property</h2>
        <p className={pCls}>Self-developed games and Site content are our intellectual property. Third-party games are provided under license from GameDistribution and are subject to their respective terms. You may not reproduce, distribute, or create derivative works from any content without express permission.</p>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>6. Advertising</h2>
        <p className={pCls}>The Site displays third-party advertisements. By using the Site, you consent to viewing ads. Ad content is controlled by third parties (Google AdSense, GameDistribution). We are not responsible for the content or accuracy of advertisements.</p>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>7. Third-Party Links</h2>
        <p className={pCls}>The Site may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites. You access them at your own risk.</p>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>8. Disclaimers</h2>
        <p className={pCls}>THE SITE AND ALL GAMES ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND. WE DO NOT WARRANT THAT: (A) THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE; (B) DEFECTS WILL BE CORRECTED; OR (C) THE SITE OR SERVERS ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.</p>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>9. Limitation of Liability</h2>
        <p className={pCls}>TO THE MAXIMUM EXTENT PERMITTED BY LAW, PLAYFREEGAMES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR USE, ARISING FROM YOUR USE OF THE SITE OR GAMES.</p>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>10. Indemnification</h2>
        <p className={pCls}>You agree to indemnify and hold PlayFreeGames harmless from any claims, damages, losses, or expenses (including attorneys&apos; fees) arising from your use of the Site, violation of these Terms, or infringement of any third-party rights.</p>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>11. Governing Law</h2>
        <p className={pCls}>These Terms shall be governed by applicable laws. Any disputes arising from these Terms shall be resolved in the appropriate courts.</p>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>12. Termination</h2>
        <p className={pCls}>We reserve the right to suspend or terminate your access to the Site at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users.</p>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>13. Contact</h2>
        <p className={pCls}>For questions about these Terms, please contact us at:</p>
        <p className={`${pCls} mt-2`}><strong className="text-[#e2e8f0]">Email:</strong> <a href="mailto:jzerov@live.com" className={linkCls}>jzerov@live.com</a></p>
        <p className={`${pCls} mt-1`}><strong className="text-[#e2e8f0]">Website:</strong> <a href="https://game.dungeonpath.com" className={linkCls}>game.dungeonpath.com</a></p>
      </section>
    </div>
  );
}
