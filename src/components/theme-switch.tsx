import React from "react";
import { useTheme } from "unative/theme";
import { Box } from "unative/ui/box";
import { Button } from "unative/ui/button";

import type { VectorIconIconProps } from "@/components/vector-icon";
import { VectorIcon } from "@/components/vector-icon";

const schemes: {
  id: "system" | "light" | "dark";
  label: string;
  iconProps: VectorIconIconProps;
}[] = [
  {
    id: "system",
    label: "System",
    iconProps: { name: "contrast" },
  },
  {
    id: "light",
    label: "Light",
    iconProps: { name: "sunny" },
  },
  {
    id: "dark",
    label: "Dark",
    iconProps: { name: "moon" },
  },
];

export type ThemeSwitchProps = {};
export const ThemeSwitch = ({}: ThemeSwitchProps) => {
  const { themes, theme, isDarkMode, setTheme, setScheme } = useTheme();

  return (
    <Box className="flex flex-row gap-2">
      <Box className="flex flex-row items-center gap-2">
        {Object.keys(themes).map((themeName) => {
          const isActive = theme?.name === themeName;
          const activeTheme =
            themes?.[themeName]?.[isDarkMode ? "dark" : "light"];

          return (
            <Button
              variant="unstyled"
              size="icon"
              key={themeName}
              className="rounded-full"
              onClick={() => {
                setTheme(themeName);
              }}
            >
              <Box
                className="h-7 w-7 rounded-full border border-border bg-background"
                style={{
                  borderColor: isActive
                    ? activeTheme?.["--primary"]
                    : theme.values["--border"],
                  padding: isActive ? 4 : 8,
                }}
              >
                <Box
                  className="h-full w-full rounded-full"
                  style={{
                    backgroundColor: activeTheme?.["--primary"],
                  }}
                />
              </Box>
            </Button>
          );
        })}
      </Box>

      <Box className="flex flex-row items-center gap-2">
        {schemes.map((item) => {
          const isActive = theme?.savedScheme === item.id;

          return (
            <Button
              size="icon"
              variant={isActive ? "default" : "outline"}
              key={item.id}
              onClick={() => {
                setScheme(item.id);
              }}
            >
              <VectorIcon {...item.iconProps} />
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};
