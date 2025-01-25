import { Box } from "unative/ui/box";

import { ThemeSwitch } from "@/components/theme-switch";

export default function HomeTabScreen() {
  return (
    <Box className="flex-1 flex-col items-center justify-center gap-2">
      <ThemeSwitch />
    </Box>
  );
}
