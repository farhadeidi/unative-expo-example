import "../../global.css";
import "react-native-reanimated";

import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "unative/theme";
import { Provider as UnativeProvider } from "unative/theme/provider/native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import { THEMES } from "@/lib/unative/themes";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <UnativeProvider themes={THEMES} defaultTheme="default">
      <App />
    </UnativeProvider>
  );
}

const App = () => {
  const { isDarkMode, theme, themes, isInitialized } = useTheme();
  if (!isInitialized) return null;

  return (
    <ThemeProvider
      value={
        isDarkMode
          ? {
              ...DarkTheme,
              colors: {
                ...DarkTheme.colors,
                background: themes[theme.name]?.["dark"]["--background"],
                card: themes[theme.name]["dark"]["--background"],
                border: themes[theme.name]?.["dark"]["--border"],
                notification: themes[theme.name]?.["dark"]["--destructive"],
                primary: themes[theme.name]?.["dark"]["--primary"],
                text: themes[theme.name]?.["dark"]["--foreground"],
              },
            }
          : {
              ...DefaultTheme,
              colors: {
                ...DefaultTheme.colors,
                background: themes[theme.name]?.["light"]["--background"],
                card: themes[theme.name]?.["light"]["--background"],
                border: themes[theme.name]?.["light"]["--border"],
                notification: themes[theme.name]?.["light"]["--destructive"],
                primary: themes[theme.name]?.["light"]["--primary"],
                text: themes[theme.name]?.["light"]["--foreground"],
              },
            }
      }
    >
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
};
