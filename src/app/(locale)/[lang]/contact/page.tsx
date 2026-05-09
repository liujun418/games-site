import { t } from '@/i18n';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: `${t(lang, 'contactTitle')} | PlayFreeGames`,
    description: t(lang, 'contactDesc'),
  };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const linkCls = 'text-[#a855f7] hover:underline';
  const h2Cls = 'text-xl font-heading font-bold text-[#e2e8f0] mt-8 mb-3';
  const pCls = 'text-[#94a3b8] leading-relaxed';

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-heading font-[900] mb-2" style={{ background: 'linear-gradient(135deg, #a855f7, #06b6d4)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t(lang, 'contactTitle')}</h1>
      <p className="text-[#94a3b8] mb-8">{t(lang, 'contactDesc')}</p>

      <section className="mb-6">
        <h2 className={h2Cls}>Email</h2>
        <p className={pCls}>For general inquiries, feedback, or bug reports, please email us at: <a href="mailto:jzerov@live.com" className={linkCls}>jzerov@live.com</a></p>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>Response Time</h2>
        <p className={pCls}>We aim to respond to all inquiries within 24-48 business hours. For urgent matters, please include &quot;Urgent&quot; in your email subject line.</p>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>What to Include</h2>
        <p className={pCls}>When contacting us, please include:</p>
        <ul className={`list-disc ps-6 mt-2 ${pCls}`}>
          <li>Your name and email address</li>
          <li>The game or page you are referring to</li>
          <li>A detailed description of your question or issue</li>
          <li>Browser and device information (for bug reports)</li>
          <li>Screenshots if applicable</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>Report a Bug</h2>
        <p className={pCls}>Found a bug in one of our games? We appreciate your feedback! Please include the game name, steps to reproduce the issue, and what you expected to happen vs. what actually happened.</p>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>Game Suggestions</h2>
        <p className={pCls}>Have a game idea you would like to see on our site? Let us know! We are always looking for new game ideas that would be fun and engaging for our players.</p>
      </section>

      <section className="mb-6">
        <h2 className={h2Cls}>Advertising &amp; Partnerships</h2>
        <p className={pCls}>For advertising inquiries or partnership opportunities, please email us with your proposal and we will get back to you promptly.</p>
      </section>
    </div>
  );
}
