
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white p-10">
      <div className="text-center mt-20">

        <h1 className="text-5xl font-bold text-[#D4AF37] mb-6">
          Welcome to GameVault
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          Discover games and build your personal game collection!
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <Link
            href="/games"
            className="gold-button px-6 py-3 rounded-lg"
          >
            Browse Games
          </Link>

          <Link
            href="/discover"
            className="border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-lg hover:bg-[#171717]"
          >
            Discover Games
          </Link>

        </div>
      </div>
    </main>
  );
}
