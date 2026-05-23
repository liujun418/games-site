'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const lang = pathname?.match(/^\/(en|es|ar)(\/|$)/)?.[1] ?? 'en';

  useEffect(() => {
    const accepted = localStorage.getItem('cookie-consent');
    if (!accepted) {
      const timer = window.setTimeout(() => setVisible(true), 0);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[rgba(10,10,26,0.95)] backdrop-blur-[10px] border-t border-[rgba(139,92,246,0.15)] p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-[#94a3b8]">
          <p>We use cookies to improve your experience and show personalized ads. By continuing, you agree to our use of cookies.</p>
          <p className="mt-1">
            <Link href={`/${lang}/privacy`} className="text-[#a855f7] hover:underline">Learn more</Link>
          </p>
        </div>
        <div className="flex gap-3">
          <button onClick={accept} className="bg-[linear-gradient(135deg,#a855f7,#06b6d4)] hover:opacity-90 text-white font-semibold px-6 py-2 rounded-lg transition shadow-[0_4px_20px_rgba(139,92,246,0.15)]">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
