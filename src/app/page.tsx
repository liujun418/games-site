'use client';

import { useEffect, useState } from 'react';
import { Gamepad2, Loader2 } from 'lucide-react';

export default function HomePage() {
  const [redirecting, setRedirecting] = useState(true);

  useEffect(() => {
    const redirect = async () => {
      // Check localStorage for saved preference
      const savedLang = localStorage.getItem('preferred-lang');
      if (savedLang && ['en', 'es', 'ar'].includes(savedLang)) {
        window.location.href = `/${savedLang}/`;
        return;
      }

      // IP-based detection
      try {
        const res = await fetch('https://ipapi.co/json/');
        if (res.ok) {
          const data = await res.json();
          const countryCode = data.country_code;
          const arabicCountries = ['SA', 'AE', 'EG', 'IQ', 'JO', 'LB', 'SY', 'YE', 'OM', 'QA', 'BH', 'KW', 'LY', 'TN', 'MA', 'DZ', 'SD', 'PS'];
          const spanishCountries = ['MX', 'AR', 'CO', 'PE', 'VE', 'CL', 'EC', 'GT', 'CU', 'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'GQ'];
          if (arabicCountries.includes(countryCode)) {
            localStorage.setItem('preferred-lang', 'ar');
            window.location.href = '/ar/';
            return;
          }
          if (spanishCountries.includes(countryCode)) {
            localStorage.setItem('preferred-lang', 'es');
            window.location.href = '/es/';
            return;
          }
        }
      } catch {
        // Fall through to default
      }

      // Default to English
      localStorage.setItem('preferred-lang', 'en');
      window.location.href = '/en/';
    };

    redirect();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <Gamepad2 className="w-16 h-16 text-yellow-400 mb-4" />
      <h1 className="text-2xl font-bold text-white mb-2">PlayFreeGames</h1>
      {redirecting && (
        <div className="flex items-center gap-2 text-gray-400 mt-4">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
}
