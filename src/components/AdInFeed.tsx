'use client';

import { useEffect } from 'react';

interface AdInFeedProps {
  slot: string;
}

export function AdInFeed({ slot }: AdInFeedProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // AdSense not loaded yet
    }
  }, []);

  return (
    <div className="my-6 p-4 bg-gray-800/50 rounded-xl">
      <p className="text-gray-500 text-xs text-center mb-2">Sponsored</p>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // REPLACE with your AdSense publisher ID
        data-ad-slot={slot}
      />
    </div>
  );
}
