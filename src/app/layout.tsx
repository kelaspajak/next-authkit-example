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
  Text,
  Link,
  Quote,
  Box,
} from "@radix-ui/themes";
import { Footer } from "./components/footer";
import { Inter } from "next/font/google";
import { Header } from "./components/Header";

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
        <Theme accentColor="red" style={{ backgroundColor: "var(--gray-1)" }}>
          <Container px="5">
            <Flex
              direction="column"
              style={{
                height: "100%",
                minHeight: 500,
                width: "100%",
              }}
              gap="5"
            >
              <Header />

              <Flex mx="auto" direction="column" gap="4" style={{
                width: "100%",
              }}>
                  <main>{children}</main>
              </Flex>
              
            </Flex>
          </Container><Footer />
        </Theme>
      </body>
    </html>
  );
}
