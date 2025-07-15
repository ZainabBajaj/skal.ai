import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";

  // Call your Supabase Edge Function
  fetch("https://cemoyczgfrsspjdgczys.supabase.co/functions/v1/bright-responder", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      path: request.nextUrl.pathname,
      user_agent: userAgent,
      source: "middleware",
    }),
  }).catch((err) => console.warn("Tracking error:", err));

  return NextResponse.next();
}
