'use client';

import { useState, useEffect } from 'react';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookie-consent');
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 border-t border-gray-700 p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-300">
          <p>We use cookies to improve your experience and show personalized ads. By continuing, you agree to our use of cookies.</p>
          <p className="mt-1">
            <a href="/privacy" className="text-yellow-400 underline">Learn more</a>
          </p>
        </div>
        <div className="flex gap-3">
          <button onClick={accept} className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-lg transition">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
