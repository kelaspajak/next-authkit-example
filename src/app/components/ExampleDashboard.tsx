/* eslint-disable @next/next/no-img-element */
"use client";

import { Box, Flex, Grid, Inset } from "@radix-ui/themes";
import * as React from "react";

export const ExampleThemesEcommerce = (
  props: React.ComponentPropsWithoutRef<typeof Flex>
) => {
  const [container, setContainer] = React.useState<HTMLDivElement>(null);

  return (
    <Flex align="center" gap="2"  {...props}>
      <Grid shrink="0" gap="2" columns="1" flow="dense">
        {[
          {
            id: 1,
            value:
              "https://images.unsplash.com/photo-1523660778745-247ed0bcce31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc: "tambang batubara",
          },
          {
            id: 2,
            value:
              "https://images.unsplash.com/photo-1561702469-c4239ced3f47?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc: "Pelabuhan",
          },
          {
            id: 3,
            value:
              "https://images.unsplash.com/photo-1601597110547-78516f198ce4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
            desc: "bank",
          },
          {
            id: 4,
            value:
              "https://images.unsplash.com/photo-1575528941322-c74397246f19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNoaXBwaW5nfGVufDB8fDB8fHww",
            desc: "Shipping",
          },
        ].map((color) => (
          <Box
            // variant="ghost"
            asChild
            style={{ maxWidth: 340 }}
            key={color.id}
          >
            <Inset clip="padding-box">
              <img
                src={color.value}
                alt={color.desc}
                style={{
                  display: "block",
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                }}
              />
            </Inset>
          </Box>
        ))}
      </Grid>

      <Grid shrink="0" gap="2" columns="1" flow="dense">
        {[
          {
            id: 1,
            value:
              "https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc: "tambang batubara",
          },
          {
            id: 2,
            value:
              "https://images.unsplash.com/photo-1524292332709-b33366a7f165?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc: "Pelabuhan",
          },
          {
            id: 3,
            value:
              "https://images.unsplash.com/photo-1525059337994-6f2a1311b4d4?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc: "bank",
          },
          {
            id: 4,
            value:
              "https://images.unsplash.com/photo-1525062010662-126ba418f898?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc: "Shipping",
          },
        ].map((color) => (
          <Box
            // variant="ghost"
            // asChild
            style={{ maxWidth: 340 }}
            key={color.id}
          >
            <Inset clip="padding-box">
              <img
                src={color.value}
                alt={color.desc}
                style={{
                  display: "block",
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                }}
              />
            </Inset>
          </Box>
        ))}
      </Grid>

      <Grid shrink="0" gap="2" columns="1" flow="dense">
        {[
          {
            id: 1,
            value:
              "https://images.unsplash.com/photo-1634840884193-2f6cf2538871?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfHdKTE8zdFNLNUFNfHxlbnwwfHx8fHw%3D",
            desc: "tambang batubara",
          },
          {
            id: 2,
            value:
              "https://images.unsplash.com/photo-1496348420488-597b9437d216?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc: "Pelabuhan",
          },
          {
            id: 3,
            value:
              "https://images.unsplash.com/photo-1601011850287-43e30b7db748?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D",
            desc: "bank",
          },
          {
            id: 4,
            value:
              "https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
            desc: "Shipping",
          },
        ].map((color) => (
          <Box
            // variant="ghost"
            asChild
            style={{ maxWidth: 340 }}
            key={color.id}
          >
            <Inset clip="padding-box">
              <img
                src={color.value}
                alt={color.desc}
                style={{
                  display: "block",
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                }}
              />
            </Inset>
          </Box>
        ))}
      </Grid>
    </Flex>
  );
};
