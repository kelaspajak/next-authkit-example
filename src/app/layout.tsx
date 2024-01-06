// Import the base CSS styles for the radix-ui components.
import "@radix-ui/themes/styles.css";
import "./global.css";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import {
  Theme,
  Card,
  Container,
  Flex,
  Button,
  Separator,
  Text,
  Link,
} from "@radix-ui/themes";
import NextLink from "next/link";
import { Footer } from "./components/footer";
// import { SignInButton } from "./components/sign-in-button";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const cx = (...classes) => classes.filter(Boolean).join(" ");
export const metadata: Metadata = {
  title: "Example AuthKit Authenticated App",
  description: "Example Next.js application demonstrating how to use AuthKit.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // <Theme appearance="dark" accentColor="amber"></Theme>
  return (
    <html lang="en" className={cx("", inter.className, GeistMono.variable)}>
      <body style={{ padding: 0, margin: 0 }}>
        <Theme accentColor="amber" style={{ backgroundColor: "var(--gray-1)" }}>
          <Container px="5">
            <Flex align="center" py="9">
              <Flex
                direction="column"
                style={{
                  height: "100%",
                  maxHeight: 850,
                  minHeight: 500,
                  width: "100%",
                }}
                gap="5"
              >
                <Text size="2">
                  Tools for building high-quality, accessible UI.
                  <Separator my="3" size="4" />
                  <Flex gap="3" align="center">
                    <NextLink href="/">Home</NextLink>
                    <Separator orientation="vertical" />
                    Primitives
                    <Separator orientation="vertical" />
                    Icons
                    <Separator orientation="vertical" />
                    Colors
                  </Flex>
                </Text>

                <Flex direction="column">
                  <Link color="indigo">
                    The quick brown fox jumps over the lazy dog.
                  </Link>
                  <Link color="cyan">
                    The quick brown fox jumps over the lazy dog.
                  </Link>
                  <Link color="orange">
                    The quick brown fox jumps over the lazy dog.
                  </Link>
                  <Link color="crimson">
                    The quick brown fox jumps over the lazy dog.
                  </Link>
                </Flex>

                <Flex asChild justify="between">
                  <header>
                    <Flex gap="4">
                      <Button asChild variant="solid">
                        <NextLink href="/">Home</NextLink>
                      </Button>

                      <Button asChild variant="solid">
                        <NextLink href="/account">Account</NextLink>
                      </Button>
                    </Flex>

                    {/* <SignInButton /> */}
                  </header>
                </Flex>

                <Flex grow="1">
                  <Card size="4" style={{ width: "100%" }}>
                    <Flex direction="column" height="100%">
                      <Flex grow="1" align="center" justify="center">
                        <main>{children}</main>
                      </Flex>
                    </Flex>
                  </Card>
                </Flex>
                <Footer />
              </Flex>
            </Flex>
          </Container>
        </Theme>
      </body>
    </html>
  );
}
