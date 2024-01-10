/* eslint-disable @next/next/no-img-element */
import styles from "./components/panel.module.css";
import {
  Box,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Inset,
  Strong,
  Text,
} from "@radix-ui/themes";
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
      <>
        <Flex align="center" direction="column" gap="3" py="9">
          <Container px="5">
            <Flex gap="3" direction="column" style={{ maxWidth: "50rem" }}>
              <Heading
                align={{ initial: "left", md: "center" }}
                as="h1"
                // className="gradient-text01"
                size={{ initial: "7", sm: "8" }} // style={{fontSize: 'clamp(32px, 4vw, 48px)'}}
                // color="crimson"
              >
                Merangkai Aspek Perpajakan melalui konsultasi
              </Heading>
              <Text
                size="5"
                align={{ initial: "left", md: "center" }}
                // style={{ color: "var(--gray-a11)" }}
              >
                Buka setiap hari 08.00 - 17.00 WITA
              </Text>
            </Flex>
          </Container>
        </Flex>
      </>

      <>
        <Inset clip="padding-box">
          <img
            src="https://images.unsplash.com/photo-1461218779480-bb61b6be1924?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="halo"
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: "360px",
            }}
          />
        </Inset>
      </>

      <>
        <Flex align="center" direction="column" gap="3" py="6">
          <Container px="5" size="3">
            <Grid columns={{ initial: "1", xs: "2", sm: "3" }} gap="6">
              <Flex direction="column" gap="3">
                <Text as="p">
                  This is a <Strong>paragraph</Strong> element.
                </Text>
                <Text as="label">
                  This is a <Strong>label</Strong> element.
                </Text>
                <Text as="div">
                  This is a <Strong>div</Strong> element.
                </Text>
                <Text as="span">
                  This is a <Strong>span</Strong> element.
                </Text>
              </Flex>

              <Flex direction="column" gap="3">
                <Heading mb="2" size="4">
                  Jam Layanan
                </Heading>
                {(
                  [
                    {
                      id: 1005,
                      day: "Senin",
                      hour: "10:00 a.m. - 8:00 p.m.",
                    },
                    {
                      id: 1004,
                      day: "Selasa",
                      hour: "10:00 a.m. - 8:00 p.m.",
                    },
                    {
                      id: 1003,
                      day: "Rabu",
                      hour: "10:00 a.m. - 8:00 p.m.",
                    },
                    {
                      id: 1002,
                      day: "Kamis",
                      hour: "10:00 a.m. - 8:00 p.m.",
                    },
                    {
                      id: 1001,
                      day: "Jum'at",
                      hour: "10:00 a.m. - 8:00 p.m.",
                    },
                    {
                      id: 1000,
                      day: "Sabtu",
                      hour: "10:00 a.m. - 8:00 p.m.",
                    },
                  ] as const
                ).map((order) => (
                  <Grid columns="3" key={order.id}>
                    <Box>
                      <Text size="2">{order.day}</Text>
                    </Box>

                    <Box style={{ gridColumn: "2 / -1" }}>
                      <Text size="2" align="right">
                        {order.hour}
                      </Text>
                    </Box>
                  </Grid>
                ))}
              </Flex>
              <Flex direction="column" gap="3">
                <Heading mb="2" size="4">
                  How can we help you?
                </Heading>
                <Text size="2">
                  Need help finding what’s right for you? Connect with a
                  Specialist online. Or in a one-on-one session at an Apple
                  Store.
                </Text>
              </Flex>
            </Grid>
          </Container>
        </Flex>
      </>

      <>
        <Panel />
      </>
    </>
  );
}

// tidak dulu

{
  /* <><Flex
align="center"
direction="column"
gap="3"
py="9"
style={{ backgroundColor: "var(--gray-a3)" }}
><Container px="5">
<Grid columns="3" gap="3" width="auto">

    {[
      { name: "White", value: "white" },
      { name: "Gray", value: "var(--gray-9)" },
      { name: "Black", value: "#1B1B18" },
      { name: "Red", value: "var(--red-9)" },
      { name: "Pink", value: "var(--pink-8)" },
      { name: "Violet", value: "var(--violet-9)" },
      { name: "Blue", value: "var(--blue-9)" },
      { name: "Green", value: "var(--teal-9)" },
      { name: "Beige", value: "#E5DFCF" },
    ].map((color) => (
      <Box
        key={color.name}
        height="9"
        style={{
          background: color.value,
          borderRadius: "var(--radius-1)",
          boxShadow: "inset 0 0 0 1px rgba(160, 160, 160, 0.4)",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg"  width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor" />
</svg>
      </Box>
    ))}
    <Box height="9">a</Box>
    <Box height="9">a</Box>
    <Box height="9">a</Box>
    <Box height="9">a</Box>
    <Box height="9">a</Box>

</Grid></Container></Flex>
</>

<>
<Flex align="center" direction="column" gap="3" py="9">
  <Container px="5">
    <ExampleThemesEcommerce />
  </Container>
</Flex>
</> */
}

function DecorativeBox() {
  return (
    <Box
      style={{
        height: "100%",
        backgroundColor: "var(--crimson-a3)",
        backgroundClip: "padding-box",
        border: "1px solid var(--gray-a5)",
        borderRadius: "var(--radius-1)",
      }}
    ></Box>
  );
}

{
  /* <>
<Grid
  columns={{
    initial: "3",
    md: "5",
    xl: "7",
  }}
  gap="3"
>
  {themeAccentColorsOrdered.map((color) => (
    <Badge key={color} color={color}>
      In progress
    </Badge>
  ))}
  <Box width="9" height="9">
    <DecorativeBox />
  </Box>
  <Box width="9" height="9">
    <DecorativeBox />
  </Box>
  <Box width="9" height="9">
    <DecorativeBox />
  </Box>
  <Box width="9" height="9">
    <DecorativeBox />
  </Box>
</Grid>
</> */
}

{
  /* <>
        <Container px="5">
          <Text as="p" mb="5" size="2" className="gradient-text">
            The goal of typography is to relate font size, line height, and line
            width in a proportional way that maximizes beauty and makes reading
            easier and more pleasant. The question is: What proportion(s) will
            give us the best results? The golden ratio is often observed in
            nature where beauty and utility intersect; perhaps we can use this
            “divine” proportion to enhance these attributes in our typography.
          </Text>

          <Text as="p" mb="5" size="3">
            The goal of typography is to relate font size, line height, and line
            width in a proportional way that maximizes beauty and makes reading
            easier and more pleasant. The question is: What proportion(s) will
            give us the best results? The golden ratio is often observed in
            nature where beauty and utility intersect; perhaps we can use this
            “divine” proportion to enhance these attributes in our typography.
          </Text>

          <Text as="p" size="2">
            The goal of typography is to relate font size, line height, and line
            width in a proportional way that maximizes beauty and makes reading
            easier and more pleasant. The question is: What proportion(s) will
            give us the best results? The golden ratio is often observed in
            nature where beauty and utility intersect; perhaps we can use this
            “divine” proportion to enhance these attributes in our typography.
          </Text>
        </Container>
      </> */
}

function Panel() {
  return (
    <Container
      size="3"
      mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}
      pb="9"
      my="6"
    >
      <Card className={styles.card}>
        {/* <Box
          position="absolute"
          inset="0"
          style={{
            pointerEvents: "none",
            borderRadius: "inherit",
            boxShadow: "var(--shadow-5)",
          }}
        /> */}

        <Box
          p={{ initial: "5", sm: "6" }}
          className={styles.IconsPanelMainSection}
        >
          <Box mb="5" style={{ gridColumn: "3 / 5", margin: "auto" }}>
            <Flex direction="column" gap="2" mt="3">
              <img
                style={{ margin: "auto" }}
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Exploding%20Head.png"
                alt="Exploding Head"
                width="200"
                height="200"
              />
            </Flex>
          </Box>

          <Box
            mb={{ initial: "5", sm: "0" }}
            className={styles.IconsPanelSectionContent}
          >
            <Heading as="h3" size="5" mb="6">
              React components
            </Heading>

            <Flex direction="column" gap="3">
              {[{ name: "SP2DK" }, { name: "Surat Teguran " }].map((color) => (
                <Heading as="h3" size="6"  key={color.name}>
                  {color.name}
                </Heading>
              ))}
            </Flex>
          </Box>

          {/* <Box style={{ gridColumn: '3 / 5' }}>
            <Heading as="h3" size="5">
              License
            </Heading>

            <Text as="p" size="2" mt="2">
              Licensed under the{' '}
              <Link
                size="2"
                href="https://github.com/radix-ui/icons/blob/master/LICENSE"
                highContrast
                color="gray"
              >
                MIT License
              </Link>
              .
              <br />
              Copyright © 2022–present WorkOS.
            </Text>
          </Box> */}
        </Box>
      </Card>
    </Container>
  );
}