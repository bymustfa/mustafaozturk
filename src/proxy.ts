import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function languageFromRequest(request: NextRequest): "en" | "tr" {
  const saved = request.cookies.get("mo-lang")?.value;
  if (saved === "en" || saved === "tr") return saved;

  const accept = request.headers.get("accept-language") ?? "";
  const first = accept.split(",")[0]?.split(";")[0]?.trim().toLowerCase() ?? "";
  return first.startsWith("tr") ? "tr" : "en";
}

export function proxy(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set("x-mo-lang", languageFromRequest(request));
  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images/|opengraph-image|twitter-image).*)",
  ],
};
