
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.RAWG_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "RAWG API key is missing" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${apiKey}&page_size=12`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Unable to retrieve games" },
        { status: 502 }
      );
    }

    const data = await response.json();

    return NextResponse.json(data.results);
  } catch (error) {
    console.error("RAWG API error:", error);

    return NextResponse.json(
      { error: "Failed to connect to RAWG" },
      { status: 500 }
    );
  }
}
