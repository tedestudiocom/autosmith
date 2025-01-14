// pages/api/add-to-cart.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Retrieve the SUPABASE_KEY from environment variables
    const supabaseKey = process.env.SUPABASE_KEY;

    if (!supabaseKey) {
      return NextResponse.json(
        { error: "SUPABASE_KEY is not defined in environment variables" },
        { status: 500 }
      );
    }

    // Parse the incoming JSON request body
    const body = await request.json();
    const { id, service_ids } = body;

    // Validate that both 'id' and 'service_ids' are provided
    if (!id || !service_ids) {
      return NextResponse.json(
        { error: "'id' and 'service_ids' are required in the request body" },
        { status: 400 }
      );
    }

    // Perform the fetch request to the Supabase RPC endpoint
    const response = await fetch(
      "http://127.0.0.1:54321/rest/v1/rpc/addtocart",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
        },
        body: JSON.stringify({ id, service_ids }), // Send the 'id' and 'service_ids' in the body
      }
    );

    // Handle non-OK responses from the Supabase RPC endpoint
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error from Supabase RPC endpoint:", errorText);
      return NextResponse.json(
        { error: `Failed to add to cart: ${errorText}` },
        { status: response.status }
      );
    }

    // Parse and return the response data
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
