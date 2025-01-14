import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const response = await fetch(
      "http://127.0.0.1:54321/rest/v1/rpc/fetchservices",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: process.env.SUPABASE_KEY ?? "",
          Authorization: `Bearer ${process.env.SUPABASE_KEY}`,
        },
        body: JSON.stringify({}),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `Failed to fetch services: ${errorText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
