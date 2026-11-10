
import { NextResponse } from "next/server";

export async function GET() {
  // Get the API key from the environment file
  const apiKey = process.env.GAMEBRAIN_API_KEY;

  // Check if the API key exists
  if (!apiKey) {
    return NextResponse.json(
      { error: "GameBrain API key is missing" },
      { status: 500 }
    );
  }

  try {
    // Request games from GameBrain
    const response = await fetch(
      "https://api.gamebrain.co/v1/games",
      {
        method: "GET",
        headers: {
          "x-api-key": apiKey,
          "Accept": "application/json",
        },
        cache: "no-store",
      }
    );

    // Check if the request was successful
    if (!response.ok) {
      console.error(
        "GameBrain API error:",
        response.status
      );

      return NextResponse.json(
        {
          error: "Unable to retrieve games",
          status: response.status,
        },
        { status: 502 }
      );
    }

    // Convert the response into JSON
    const data = await response.json();

    // Check that GameBrain returned an array of games
    if (!Array.isArray(data.results)) {
      return NextResponse.json(
        { error: "Unexpected GameBrain response format" },
        { status: 502 }
      );
    }

    // Return only the games array
    return NextResponse.json(data.results);

  } catch (error) {
    console.error("GameBrain connection error:", error);

    return NextResponse.json(
      { error: "Failed to connect to GameBrain API" },
      { status: 500 }
    );
  }
}
