
"use client";

import { useEffect, useState } from "react";

type APIGame = {
  id: number;
  name: string;
  image: string | null;
  genre: string;
  year: number | null;
  rating: {
    mean: number;
    count: number;
  } | null;
};

export default function DiscoverPage() {
  const [games, setGames] = useState<APIGame[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadGames() {
      try {
        const response = await fetch("/api/games");

        if (!response.ok) {
          throw new Error("Failed to load games");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid API response format");
        }

        setGames(data);
      } catch (error) {
        console.error("Game loading error:", error);
        setError("Could not load games.");
      } finally {
        setLoading(false);
      }
    }

    loadGames();
  }, []);

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-[#D4AF37] mb-4">
          Discover Games
        </h1>

        <p className="text-gray-300 mb-8">
          Explore games retrieved from the GameBrain API.
        </p>

        <input
          type="text"
          placeholder="Search loaded games..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[#171717] text-white p-3 rounded-lg border border-[#D4AF37] mb-8"
        />

        {loading && (
          <p className="text-[#D4AF37]">
            Loading games...
          </p>
        )}

        {error && (
          <p className="text-red-400">{error}</p>
        )}

        {!loading && !error && (
          <>
            <p className="text-gray-400 mb-6">
              Showing {filteredGames.length} games
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGames.map((game) => (
                <div
                  key={game.id}
                  className="bg-[#171717] border border-[#5C4A20] rounded-xl overflow-hidden shadow-lg hover:border-[#D4AF37] transition-colors"
                >
                  {game.image && (
                    <img
                      src={game.image}
                      alt={game.name}
                      className="w-full h-56 object-cover"
                    />
                  )}

                  <div className="p-5">
                    <h2 className="text-xl font-bold text-[#D4AF37] mb-3">
                      {game.name}
                    </h2>

                    <p className="text-gray-300 mb-2">
                      Genre: {game.genre || "Unknown"}
                    </p>

                    <p className="text-gray-300 mb-2">
                      Released: {game.year ?? "Unknown"}
                    </p>

                    <p className="text-gray-300">
                      Rating:{" "}
                      {game.rating?.mean != null
                        ? (game.rating.mean * 10).toFixed(1) + "/10"
                        : "Not rated"}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {filteredGames.length === 0 && (
              <p className="text-gray-400 text-center mt-10">
                No games found.
              </p>
            )}
          </>
        )}
      </div>
    </main>
  );
}
