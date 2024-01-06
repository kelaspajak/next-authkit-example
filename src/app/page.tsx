import { Avatar, Box, Card, Flex, Heading, Inset, Strong, Text } from "@radix-ui/themes";
// import { SignInButton } from "./components/sign-in-button";
// import { getUser } from "../auth";

export default async function HomePage() {
  return (
    <Flex direction="column" align="center" gap="2">
      <>
        <Heading size="8">AuthKit authentication example</Heading>
        <Text size="5" color="gray" mb="4">
          Sign in to view your account details
        </Text>
      </>

      <Card asChild style={{ maxWidth: 350 }}>
        <a href="#">
          <Text as="div" size="2" weight="bold">
            Quick start
          </Text>
          <Text as="div" color="gray" size="2">
            Start building your next project in minutes
          </Text>
        </a>
      </Card>

      <Card size="2" style={{ maxWidth: 240 }}>
  <Inset clip="padding-box" side="top" pb="current">
    <img
      src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      alt="Bold typography"
      style={{
        display: 'block',
        objectFit: 'cover',
        width: '100%',
        height: 140,
        backgroundColor: 'var(--gray-5)',
      }}
    />
  </Inset>
  <Text as="p" size="3">
    <Strong>Typography</Strong> is the art and technique of arranging type to
    make written language legible, readable and appealing when displayed.
  </Text>
</Card>
    </Flex>
  );
}
