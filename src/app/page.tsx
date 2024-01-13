/* eslint-disable @next/next/no-img-element */
import styles from "./components/panel.module.css";
import {
  Box,
  Card,
  Checkbox,
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
  title: "Pajak365 at work | Less Summer",
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
                align={{ initial: "center", md: "center" }}
                as="h1"
                // className="gradient-text01"
                // size={{ initial: "7", sm: "8" }}
                style={{ fontSize: "clamp(24px, 4vw, 36px)" }}
                // color="crimson"
              >
                Diskusi Pajak untuk {/* <Text as="span" color="gray"> */}
                Perusahaan
                {/* </Text> */}
              </Heading>
              <Text
                size="5"
                align={{ initial: "center", md: "center" }}
                // style={{ color: "var(--gray-a11)" }}
              >
                Diskusikan pajak Anda dengan ahli, tanpa perlu datang ke kantor
                pajak.
              </Text>

              {/* <Text>Buka setiap hari 07:30 am - 08:00 pm WITA</Text> */}
            </Flex>
          </Container>
        </Flex>
      </>

      <>
        <Inset clip="padding-box">
          <img
            src="https://images.unsplash.com/photo-1704928340939-8a46728a9840?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                <Heading mb="2" size="4">
                  Lokasi
                </Heading>
                <Text as="p" size="2" weight="light">
                  Online via telegram, email, Whatsapp, panggilan telepon.
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
                      hour: "07:30 a.m. - 8:00 p.m.",
                    },
                    {
                      id: 1004,
                      day: "Selasa",
                      hour: "07:30 a.m. - 8:00 p.m.",
                    },
                    {
                      id: 1003,
                      day: "Rabu",
                      hour: "07:30 a.m. - 8:00 p.m.",
                    },
                    {
                      id: 1002,
                      day: "Kamis",
                      hour: "07:30 a.m. - 8:00 p.m.",
                    },
                    {
                      id: 1001,
                      day: "Jum'at",
                      hour: "07:30 a.m. - 8:00 p.m.",
                    },
                    {
                      id: 1000,
                      day: "Sabtu",
                      hour: "07:30 a.m. - 8:00 p.m.",
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
                  Bagaimana kami membantu anda?
                </Heading>
                <Text size="2">
                  Paket ini memberikan akses prioritas ke kami melalui telepon,
                  telegram, Whatsapp, Gmail, 12 jam sehari, 7 hari seminggu.
                </Text>
                <Text size="2">
                  Diskusikan pajak anda, membantu anda untuk mengajukan
                  permohonan pajak, membantu wajib pajak memperolah gambaran
                  umum kewajiban pajak, mendeteksi transaksi yang dapat
                  menimbulkan eksposure pajak maksimal, serta melakukan
                  pencegahan dari risiko pajak yang lebih besar.
                </Text>
                <Text size="2">
                  Memungkinkan Anda mengelola sumber daya dengan lebih efisien,
                  lebih fokus pada bisnis Anda, dan mengurangi biaya pelatihan
                  karyawan.
                </Text>
                {/* <ul>
                  {[
                    {
                      id: 1004,
                      name: "Meminimalkan kewajiban pajak mereka dalam kerangka peraturan yang ada.",
                    },
                    {
                      id: 1005,
                      name: "Melakukan pencegahan kelebihan pembayaran pajak.",
                    },
                    {
                      id: 1006,
                      name: "Menghindari risiko denda pajak terhadap kesalahan atau keterlambatan penyetoran pajak.",
                    },
                    {
                      id: 1007,
                      name: "Menghindari atau meminimalkan litigasi pajak yang berbiaya tinggi.",
                    },
                  ].map((fasilitas) => (
                    <li key={fasilitas.id}>
                      <Text size="2" ml="0">
                        {fasilitas.name}
                      </Text>
                    </li>
                  ))}
                </ul> */}
              </Flex>
            </Grid>
          </Container>
        </Flex>
      </>

      <>
        <Panel />
      </>

      <>
        <Benefit />
      </>
    </>
  );
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
            <Heading
              mt={{ initial: "5", sm: "0" }}
              align="center"
              as="h3"
              mb="3"
              size="4"
            >
              Apakah anda rutin menerima?
            </Heading>

            <Flex align="center" direction="column" gap="0" wrap="wrap">
              {[
                { name: "SP2DK" },
                { name: "Surat Teguran " },
                { name: "Pemeriksaan Pajak" },
                { name: "Surat Tagihan Pajak" },
              ].map((color) => (
                <Heading
                  as="h3"
                  size={{ initial: "4", sm: "7" }}
                  key={color.name}
                >
                  {color.name}
                </Heading>
              ))}
            </Flex>
            <Text as="p" size="2" align="center" mt="4">
              Mari kita perbaiki.
            </Text>
          </Box>
        </Box>
      </Card>
    </Container>
  );
}

function Benefit() {
  return (
    <Flex align="center" direction="column" gap="3" py="5">
      <Container size="3" px="5">
        <Flex gap="3" direction="column" style={{ maxWidth: "50rem" }}>
          <Heading
            align={{ initial: "left", md: "center" }}
            as="h1"
            // className="gradient-text01"
            size={{ initial: "7", sm: "8" }} // style={{fontSize: 'clamp(32px, 4vw, 48px)'}}
            // color="crimson"
          >
            Membeli paket ini memberi Anda semua manfaat luar biasa ini.
          </Heading>
          <Grid
            mt="8"
            columns={{ initial: "1", xs: "2" }}
            gap={{ initial: "2", xs: "8" }}
          >
            {(
              [
                {
                  id: 1005,
                  hour: [
                    {
                      id: 1,
                      name: "Diskusi Pajak khusus untuk perusahaan Anda.<sup>1</sup>",
                    },
                    {
                      id: 2,
                      name: "Tanpa biaya. catatan kaki 5 Bahkan tidak ada yang tersembunyi.",
                    },
                    {
                      id: 3,
                      name: "Privasi dan keamanan yang Anda harapkan dari iPhone.",
                    },
                  ],
                },
                {
                  id: 1004,
                  name: "Tanpa biaya. catatan kaki 5 Bahkan tidak ada yang tersembunyi.",
                  hour: [
                    {
                      id: 1,
                      name: "An Apple-designed titanium card that can be used anywhere Mastercard is accepted.",
                    },
                    {
                      id: 2,
                      name: "See if you’re approved without impacting your credit score.",
                    },
                  ],
                },
              ] as const
            ).map((order) => (
              <Flex direction="column" gap="3" key={order.id}>
                {order.hour.map((hour) => (
                  <Heading mb="2" size="4" key={hour.id}>
                    {hour.name}
                  </Heading>
                ))}
              </Flex>
            ))}
          </Grid>
        </Flex>
      </Container>
    </Flex>
  );
}