import { Flex, Heading, Text } from "@radix-ui/themes";
import type { Metadata } from "next";
// import { SignInButton } from "./components/sign-in-button";
// import { getUser } from "../auth";
export const metadata: Metadata = {
  title: "Pajak",
  description: "Example Next.js application demonstrating how to use AuthKit.",
};

export default async function HomePage() {
  return (
    <>
      <Flex align="center" direction="column" gap="3" py="9">
        <Heading
          align={{ initial: "left", md: "center" }}
          as="h1"
          size={{ initial: "8", sm: "9" }} // style={{fontSize: 'clamp(32px, 4vw, 48px)'}}
          // color="crimson"
        >
          Merangkai Aspek Perpajakan melalui konsultasi
        </Heading>
        <Text
          size="6"
          align={{ initial: "left", md: "center" }}
          // color="crimson"
          highContrast
        >
          The goal of typography is to relate font size, line height, and line
          width in a proportional way that maximizes beauty and makes reading
          easier and more pleasant. The question is: What proportion
        </Text>
      </Flex>

      <>
        <Text as="p" mb="5" size="4">
          The goal of typography is to relate font size, line height, and line
          width in a proportional way that maximizes beauty and makes reading
          easier and more pleasant. The question is: What proportion(s) will
          give us the best results? The golden ratio is often observed in nature
          where beauty and utility intersect; perhaps we can use this “divine”
          proportion to enhance these attributes in our typography.
        </Text>

        <Text as="p" mb="5" size="3">
          The goal of typography is to relate font size, line height, and line
          width in a proportional way that maximizes beauty and makes reading
          easier and more pleasant. The question is: What proportion(s) will
          give us the best results? The golden ratio is often observed in nature
          where beauty and utility intersect; perhaps we can use this “divine”
          proportion to enhance these attributes in our typography.
        </Text>

        <Text as="p" size="2" color="gray">
          The goal of typography is to relate font size, line height, and line
          width in a proportional way that maximizes beauty and makes reading
          easier and more pleasant. The question is: What proportion(s) will
          give us the best results? The golden ratio is often observed in nature
          where beauty and utility intersect; perhaps we can use this “divine”
          proportion to enhance these attributes in our typography.
        </Text>
      </>
    </>
  );
}
