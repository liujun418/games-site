'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Gamepad2, Menu, X, Search } from 'lucide-react';
import { SearchBar } from './SearchBar';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-yellow-400 transition">
            <Gamepad2 className="w-8 h-8 text-yellow-400" />
            <span className="text-xl font-bold hidden sm:block">PlayFreeGames</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/category/arcade" className="text-gray-300 hover:text-white transition text-sm">Arcade</Link>
            <Link href="/category/puzzle" className="text-gray-300 hover:text-white transition text-sm">Puzzle</Link>
            <Link href="/category/action" className="text-gray-300 hover:text-white transition text-sm">Action</Link>
            <Link href="/category/card" className="text-gray-300 hover:text-white transition text-sm">Card</Link>
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 text-gray-300 hover:text-white transition">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-gray-300 hover:text-white transition">
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="pb-4">
            <SearchBar />
          </div>
        )}

        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link href="/category/arcade" className="text-gray-300 hover:text-white transition text-sm">Arcade</Link>
            <Link href="/category/puzzle" className="text-gray-300 hover:text-white transition text-sm">Puzzle</Link>
            <Link href="/category/action" className="text-gray-300 hover:text-white transition text-sm">Action</Link>
            <Link href="/category/card" className="text-gray-300 hover:text-white transition text-sm">Card</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
