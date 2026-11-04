
"use client";

import { useEffect, useState } from "react";

type APIGame = {
  id: number;
  name: string;
  background_image: string | null;
  rating: number;
  released: string | null;
};

export default function DiscoverPage() {
  const [games, setGames] = useState<APIGame[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadGames() {
      try {
        const response = await fetch("/api/games");

        if (!response.ok) {
          throw new Error("Failed to load games");
        }

        const data: APIGame[] = await response.json();

        setGames(data);
      } catch (error) {
        console.error(error);
        setError("Could not load games.");
      } finally {
        setLoading(false);
      }
    }

    loadGames();
  }, []);

  return (
    <main className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-purple-400 mb-4">
        Discover Games
      </h1>

      <p className="text-gray-300 mb-8">
        Explore games retrieved from the RAWG API.
      </p>

      {loading && (
        <p className="text-xl">Loading games...</p>
      )}

      {error && (
        <p className="text-red-400">{error}</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
          >
            {game.background_image ? (
              <img
                src={game.background_image}
                alt={game.name}
                className="w-full h-56 object-cover"
              />
            ) : (
              <div className="h-56 bg-gray-700 flex items-center justify-center">
                No Image
              </div>
            )}

            <div className="p-5">
              <h2 className="text-xl font-bold mb-3">
                {game.name}
              </h2>

              <p className="text-gray-300">
                Rating: {game.rating}/5
              </p>

              <p className="text-gray-300">
                Released: {game.released || "Unknown"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
