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
    <div className="my-6 p-4 bg-[#111128] border border-[rgba(139,92,246,0.15)] rounded-xl">
      <p className="text-[#94a3b8] text-xs text-center mb-2">Sponsored</p>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
      />
    </div>
  );
}
