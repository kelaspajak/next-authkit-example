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
import ThemeToggle from "./components/ThemeToogle";
import { ThemeProvider } from "./components/ThemeProvider";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});



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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body style={{ padding: 0, margin: 0 }}>
      <ThemeProvider attribute="class">
        <Theme
          accentColor="blue"
        >
          <Container px="5">
            <Header />
            
          </Container>
          <Flex
            mx="auto"
            direction="column"
            gap="4"
            style={{
              width: "100%",
            }}
          >
            <main>{children}</main>
          </Flex>
          <Footer />
        </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
