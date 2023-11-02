import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import NextLink from "next/link";
import { SignInButton } from "./components/sign-in-button";
import { getUser } from "../libs/auth";

export default async function Home() {
  const { isAuthenticated, user } = await getUser();

  return (
    <Flex direction="column" align="center" gap="2">
      {isAuthenticated ? (
        <>
          <Heading size="8">
            Welcome back{user?.firstName && `, ${user?.firstName}`}
          </Heading>
          <Text size="5" color="gray">
            Visit the &quot;Account&quot; page to see user details
          </Text>
          <Button asChild size="3" mt="4">
            <NextLink href="/account">View account</NextLink>
          </Button>
        </>
      ) : (
        <>
          <Heading size="8">AuthKit authentication example</Heading>
          <Text size="5" color="gray" mb="4">
            Sign in to view your account details
          </Text>
          <SignInButton primary />
        </>
      )}
    </Flex>
  );
}
