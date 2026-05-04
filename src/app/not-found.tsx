import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold text-yellow-400">404</h1>
      <h2 className="text-2xl font-semibold text-white mt-4">Page Not Found</h2>
      <p className="text-gray-400 mt-2">The game you are looking for does not exist.</p>
      <Link href="/" className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition">
        Back to Home
      </Link>
    </div>
  );
}
