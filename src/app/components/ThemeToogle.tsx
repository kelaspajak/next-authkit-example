"use client";

import { Flex, Switch, Text } from "@radix-ui/themes";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Text as="label" size="2">
        <Flex gap="2">
          <Switch size="1" defaultChecked onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}/>
        </Flex>
      </Text>
    </>
  );
}

export default ThemeToggle;
