
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-5 flex flex-wrap justify-between items-center gap-4">
      <Link
        href="/"
        className="text-2xl font-bold text-purple-400"
      >
        GameVault
      </Link>

      <div className="flex flex-wrap gap-6">
        <Link href="/" className="hover:text-purple-400">
          Home
        </Link>

        <Link href="/games" className="hover:text-purple-400">
          Games
        </Link>

        <Link href="/discover" className="hover:text-purple-400">
          Discover
        </Link>

        <Link href="/about" className="hover:text-purple-400">
          About
        </Link>
      </div>
    </nav>
  );
}
