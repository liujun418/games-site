'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { t } from '@/i18n';

interface SearchBarProps {
  lang: string;
}

export function SearchBar({ lang }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/${lang}/?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t(lang, 'search.placeholder')}
        className="w-full bg-[#2e2e33] text-white placeholder-[#65656a] rounded-lg ps-10 pe-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] focus:border-[#7c3aed] border border-[#333]"
      />
      <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#65656a]" />
    </form>
  );
}
