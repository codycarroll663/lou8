
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black border-b border-[#D4AF37] p-5 flex flex-wrap justify-between items-center gap-4">
      <Link
        href="/"
        className="text-2xl font-bold text-[#D4AF37]"
      >
        GameVault
      </Link>

      <div className="flex flex-wrap gap-6">
        <Link href="/" className="hover:text-[#D4AF37]">
          Home
        </Link>

        <Link href="/games" className="hover:text-[#D4AF37]">
          Games
        </Link>

        <Link href="/discover" className="hover:text-[#D4AF37]">
          Discover
        </Link>

        <Link href="/about" className="hover:text-[#D4AF37]">
          About
        </Link>
      </div>
    </nav>
  );
}
