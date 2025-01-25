import React from "react";
import { Tabs } from "expo-router";
import { cn } from "unative/lib/utils";
import { Text } from "unative/ui/text/native";

import { HapticTab } from "@/components/HapticTab";
import type { VectorIconIconProps } from "@/components/vector-icon";
import { VectorIcon } from "@/components/vector-icon";

const TabIcon = ({
  iconProps,
  focused,
}: {
  iconProps: VectorIconIconProps;
  focused: boolean;
}) => {
  return (
    <VectorIcon
      {...iconProps}
      className={cn("", focused ? "text-primary" : "text-muted-foreground")}
    />
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarLabel: ({ children, focused }) => {
          return (
            <Text
              className={cn(
                "text-[11px] font-bold text-muted-foreground",
                focused ? "text-primary" : "",
              )}
            >
              {children}
            </Text>
          );
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              iconProps={{ name: focused ? "compass" : "compass-outline" }}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              iconProps={{ name: focused ? "settings" : "settings-outline" }}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
