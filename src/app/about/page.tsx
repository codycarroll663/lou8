export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">

      <h1 className="text-4xl font-bold text-purple-400 mb-6">
        About GameVault
      </h1>

      <p className="text-lg text-gray-300 mb-4">
        GameVault is a personal video game library
        built using Next.js and React.
      </p>

      <p className="text-lg text-gray-300 mb-4">
        The goal of this project is to allow users
        to discover games, browse collections,
        and eventually save their favorite games.
      </p>

      <p className="text-lg text-gray-300">
        Future updates will include user accounts,
        game APIs, and personal game collections.
      </p>

    </main>
  );
}