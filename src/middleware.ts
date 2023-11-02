import { NextRequest, NextResponse } from "next/server";
import { verifyJwtToken } from "@/libs/auth";
import { getAuthorizationUrl } from "./app/actions";

export async function middleware(request: NextRequest) {
  const { url, cookies } = request;
  const { value: token } = cookies.get("token") ?? { value: null };

  const hasVerifiedToken = token && (await verifyJwtToken(token));

  if (!hasVerifiedToken) {
    // Pass the requested route as a state param to AuthKit and redirect the user on sign in
    const authorizationUrl = await getAuthorizationUrl(url);
    const response = NextResponse.redirect(authorizationUrl);

    response.cookies.delete("token");

    return response;
  }

  return NextResponse.next();
}

export const config = { matcher: ["/account/:path*"] };
