import Link from 'next/link';
import { Gamepad2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 text-white mb-3">
              <Gamepad2 className="w-6 h-6 text-yellow-400" />
              <span className="font-bold">PlayFreeGames</span>
            </Link>
            <p className="text-gray-400 text-sm">Play the best free online games. No downloads, no ads interruptions.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Categories</h3>
            <div className="flex flex-col gap-2">
              <Link href="/category/arcade" className="text-gray-400 hover:text-white transition text-sm">Arcade</Link>
              <Link href="/category/puzzle" className="text-gray-400 hover:text-white transition text-sm">Puzzle</Link>
              <Link href="/category/action" className="text-gray-400 hover:text-white transition text-sm">Action</Link>
              <Link href="/category/card" className="text-gray-400 hover:text-white transition text-sm">Card</Link>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Legal</h3>
            <div className="flex flex-col gap-2">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition text-sm">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} PlayFreeGames. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
