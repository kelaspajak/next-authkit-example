import { clearSession, getAuthorizationUrl, getUser } from "../../libs/auth";
import { Button, Flex } from "@radix-ui/themes";

export async function SignInButton({ primary }: { primary?: boolean }) {
  const { isAuthenticated } = await getUser();
  const authorizationUrl = await getAuthorizationUrl();

  if (isAuthenticated) {
    return (
      <Flex gap="3">
        <form
          action={async () => {
            "use server";
            await clearSession();
          }}
        >
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
