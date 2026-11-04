
import type { Game } from "@/app/types/game";

type GameCardProps = {
  game: Game;
};

export default function GameCard({ game }: GameCardProps) {
  return (
    <div className="game-card rounded-xl overflow-hidden shadow-lg">

      <img
        src={game.image}
        alt={game.title}
        className="w-full h-64 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold text-[#D4AF37] mb-3">
          {game.title}
        </h2>

        <p className="text-gray-300">
          Genre: {game.genre}
        </p>

        <p className="text-gray-300">
          Platform: {game.platform}
        </p>

        <p className="text-gray-300">
          Released: {game.releaseYear}
        </p>
      </div>

    </div>
  );
}
