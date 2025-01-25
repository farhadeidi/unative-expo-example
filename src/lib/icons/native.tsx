import {
  BoltIcon as SettingsIcon,
  HouseIcon as HomeIcon,
  MonitorCogIcon as SystemIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react-native";

import { createNativeIcon } from "@/lib/icons/create-native-icon";

[SunIcon, MoonIcon, SystemIcon, HomeIcon, SettingsIcon].forEach(
  createNativeIcon,
);

export { HomeIcon, MoonIcon, SettingsIcon, SunIcon, SystemIcon };
