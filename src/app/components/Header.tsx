import { Box, Flex, Link, Separator, Text } from "@radix-ui/themes";
import ThemeToggle from "./ThemeToogle";

export async function Header() {
  return (
    <Flex asChild justify="between">
      <header>
        <Flex py="3" gap="4" justify="between">
          <Text size="2">
            <Flex gap="3" align="center">
              <Link href="/" highContrast>
                Home
              </Link>
              <Separator orientation="vertical" />
              Primitives
              <Separator orientation="vertical" />
              Icons
              <Separator orientation="vertical" />
              Colors
            </Flex>
          </Text>
        </Flex>
        <Box py="3">
          <ThemeToggle />
        </Box>
      </header>
    </Flex>
  );
}
