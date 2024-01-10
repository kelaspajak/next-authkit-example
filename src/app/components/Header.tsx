import { Box, Flex, Link, Separator, Text, Heading } from "@radix-ui/themes";
import ThemeToggle from "./ThemeToogle";

export async function Header() {
  return (
    <Flex asChild justify="between">
      <header>
        <Flex py="3" gap="4" justify="between">
          <Text size="2">
            <Flex gap="3" align="center">
              <Link href="/">
                <Text size="1" color="gray" >Pajak365 at work</Text>
                <Heading as="h1" size="5" color="gray" highContrast>Less Summer</Heading>
              </Link>
              {/* <Separator orientation="vertical" size="2" /> */}
              {/* Primitives
              <Separator orientation="vertical" />
              Icons
              <Separator orientation="vertical" />
              Colors */}
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
