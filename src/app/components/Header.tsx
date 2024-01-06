import {
  Flex,
  Link,
  Separator,
  Text,
} from "@radix-ui/themes";

export async function Header() {
  return (
    <Flex asChild justify="between">
      <header>
        <Flex gap="4"  py="3">
          <Text size="2">
            <Flex gap="3" align="center">
              <Link href="/" highContrast>Home</Link>
              <Separator orientation="vertical" />
              Primitives
              <Separator orientation="vertical" />
              Icons
              <Separator orientation="vertical" />
              Colors
            </Flex>
          </Text>
        </Flex>

        {/* <SignInButton /> */}
      </header>
    </Flex>
  );
}
