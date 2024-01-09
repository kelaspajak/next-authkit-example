"use client";

import { Button, Flex, Switch, Text } from "@radix-ui/themes";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Text as="label" size="2">
        <Flex gap="2">
          <Switch size="1" color="crimson" defaultChecked onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}/> Theme
        </Flex>
      </Text>
    </>
  );
}

export default ThemeToggle;
