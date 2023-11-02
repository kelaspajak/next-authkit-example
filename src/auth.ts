import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import WorkOS, { User } from "@workos-inc/node";
import { jwtVerify } from "jose";

// Initialize the WorkOS client
export const workos = new WorkOS(process.env.WORKOS_API_KEY);

export function getJwtSecretKey() {
  const secret = process.env.JWT_SECRET_KEY;

  if (!secret) {
    throw new Error("JWT_SECRET_KEY is not set");
  }

  return new TextEncoder().encode(process.env.JWT_SECRET_KEY);
}

export async function verifyJwtToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey());

    return payload;
  } catch (error) {
    return null;
  }
}

export async function getUser(): Promise<{
  isAuthenticated: boolean;
  user?: User | null;
}> {
  const token = cookies().get("token")?.value;
  const verifiedToken = token && (await verifyJwtToken(token));

  if (verifiedToken) {
    return {
      isAuthenticated: true,
      user: verifiedToken.user as User | null,
    };
  }

  return { isAuthenticated: false };
}

export async function getAuthorizationUrl(state?: string) {
  const authorizationUrl = workos.sso.getAuthorizationURL({
    provider: "authkit",
    clientID: process.env.WORKOS_CLIENT_ID || "",
    redirectURI: process.env.WORKOS_REDIRECT_URI || "",
    // We can pass arbitrary state which AuthKit will forward to the specified redirectURI
    // This is helpful for passing the requested route and redirecting the user
    // after they return from the AuthKit authentication flow
    state,
  });

  return authorizationUrl;
}

export async function clearSessionAndRedirect() {
  cookies().delete("token");
  redirect("/");
}
