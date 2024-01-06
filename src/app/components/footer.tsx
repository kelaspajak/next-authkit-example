import { Container, Flex, Separator, Text } from "@radix-ui/themes";

export async function Footer() {
  return (
      <Container px="5" py="9" height="9" mt="9" style={{ backgroundColor: "var(--mauve-a3)" }}>
        <Text size="1">
          <Flex gap="3" align="center" color="gray">
            Themes
            <Separator orientation="vertical" />
            Primitives
            <Separator orientation="vertical" />
            Icons
            <Separator orientation="vertical" />
            Colors
          </Flex>
        </Text>
      </Container>
  );
}
