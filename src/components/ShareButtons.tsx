'use client';

import { useState } from 'react';
import { Share2, MessageCircle, Link2, Globe } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : url;
  const shareTitle = title;

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: shareTitle, url: shareUrl });
      } catch {
        // User cancelled
      }
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 bg-[#111128] border border-[rgba(139,92,246,0.15)] rounded-full hover:bg-[#1a1a3e] transition"
        aria-label="Share"
      >
        <Share2 className="w-4 h-4 text-[#94a3b8]" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute end-0 top-full mt-2 bg-[#111128] border border-[rgba(139,92,246,0.15)] rounded-xl shadow-xl p-3 z-20 min-w-[200px]">
            <button
              onClick={handleNativeShare}
              className="flex items-center gap-2 w-full px-3 py-2 text-sm text-[#e2e8f0] hover:bg-[#1a1a3e] rounded-lg transition"
            >
              <Share2 className="w-4 h-4" /> Share
            </button>
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 text-sm text-[#e2e8f0] hover:bg-[#1a1a3e] rounded-lg transition">
              <Globe className="w-4 h-4" /> Twitter / X
            </a>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 text-sm text-[#e2e8f0] hover:bg-[#1a1a3e] rounded-lg transition">
              <Globe className="w-4 h-4" /> Facebook
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 text-sm text-[#e2e8f0] hover:bg-[#1a1a3e] rounded-lg transition">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <button
              onClick={copyLink}
              className="flex items-center gap-2 w-full px-3 py-2 text-sm text-[#e2e8f0] hover:bg-[#1a1a3e] rounded-lg transition"
            >
              <Link2 className="w-4 h-4" /> {copied ? 'Copied!' : 'Copy Link'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
