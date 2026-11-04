
"use client";

import { useState } from "react";
import GameCard from "@/app/components/GameCard";
import { games } from "@/data/games";

export default function GamesPage() {
  // Stores what the user types in the search bar
  const [search, setSearch] = useState("");


  const [genre, setGenre] = useState("All");

  // Get all available genres
  const genres = [
    "All",
    ...new Set(games.map((game) => game.genre)),
  ];

  // Filter games based on search and genre
  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre =
      genre === "All" || game.genre === genre;

    return matchesSearch && matchesGenre;
  });

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <div className="max-w-7xl mx-auto p-8">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-[#D4AF37] mb-4">
          My Game Library
        </h1>

        <p className="text-gray-300 mb-8">
          Browse and search your favorite video games.
        </p>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search for a game..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[#171717] text-white p-3 rounded-lg border border-[#5C4A20] focus:border-[#D4AF37] outline-none flex-1"
          />

          {/* Genre Filter */}
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="bg-[#171717] text-white p-3 rounded-lg border border-[#5C4A20] focus:border-[#D4AF37] outline-none"
          >
            {genres.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

        </div>

        {/* Number of Games */}
        <p className="text-[#D4AF37] mb-6">
          Showing {filteredGames.length} of {games.length} games
        </p>

        {/* Game Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {/* No Games Found */}
        {filteredGames.length === 0 && (
          <div className="text-center mt-12">
            <h2 className="text-2xl text-gray-400">
              No games found!
            </h2>

            <p className="text-gray-500 mt-2">
              Try searching for another game or genre.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setGenre("All");
              }}
              className="mt-4 bg-[#D4AF37] hover:bg-[#F5E6B3] text-black font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
