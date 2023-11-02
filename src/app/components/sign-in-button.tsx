import { Button, Flex } from "@radix-ui/themes";
import { getAuthorizationUrl, getUser, signOut } from "../actions";

export async function SignInButton({ primary }: { primary?: boolean }) {
  const { isAuthenticated } = await getUser();
  const authorizationUrl = await getAuthorizationUrl();

  if (isAuthenticated) {
    return (
      <Flex gap="3">
        <form action={signOut}>
          <Button type="submit" size={primary ? "3" : "2"}>
            Sign Out
          </Button>
        </form>
      </Flex>
    );
  }

  return (
    <Button asChild size={primary ? "3" : "2"}>
      <a href={authorizationUrl}>Sign In {primary && "with AuthKit"}</a>
    </Button>
  );
}
